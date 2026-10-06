// After the build, every <img> that points at /images/… gets
//   · its width and height, so the page keeps its shape while pictures arrive;
//   · a srcset of the smaller copies made by scripts/image-variants.py, so a
//     phone downloads an 800px picture instead of a 1600px one.
// The sizes come from src/data/image-sizes.json. Pictures not listed there
// are left exactly as they were.
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MANIFEST = new URL('../data/image-sizes.json', import.meta.url);

// how wide the picture is likely to be drawn. Lazy pictures let the browser
// measure (sizes="auto"); the list after it is for browsers that cannot.
// heroes fill the screen with object-fit: cover, so on a portrait screen the
// picture is drawn as wide as the screen is tall
export const SIZES_HERO = '(orientation: portrait) 100vh, 100vw';
const SIZES_REST = '(max-width: 760px) 100vw, 1100px';

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];

// the homepage loop fills in its later pictures from data-src; they get their
// copies as data-srcset, which the same script moves across
function rewriteDeferred(tag, sizes) {
  const src = attr(tag, 'data-src');
  const entry = src && sizes[src];
  if (!entry || !entry[2].length || /\sdata-srcset=/.test(tag)) return tag;
  const [w, , copies] = entry;
  const set = copies.map((c) => `/images/_w/${c}${src.slice('/images'.length)} ${c}w`).concat(`${src} ${w}w`);
  return tag.replace(/^<img/, `<img data-srcset="${set.join(', ')}"`);
}

function rewrite(tag, sizes) {
  const src = attr(tag, 'src');
  if (!src) return rewriteDeferred(tag, sizes);
  const entry = src && sizes[src];
  if (!entry) return tag;
  const [w, h, copies] = entry;
  let add = '';
  if (!/\swidth=/.test(tag)) add += ` width="${w}" height="${h}"`;
  if (copies.length && !/\ssrcset=/.test(tag)) {
    const set = copies.map((c) => `/images/_w/${c}${src.slice('/images'.length)} ${c}w`);
    set.push(`${src} ${w}w`);
    const hero = /\sfetchpriority="high"/.test(tag);
    const lazy = /\sloading="lazy"/.test(tag);
    const s = hero ? SIZES_HERO : lazy ? `auto, ${SIZES_REST}` : SIZES_REST;
    add += ` srcset="${set.join(', ')}" sizes="${s}"`;
  }
  return add ? tag.replace(/^<img/, `<img${add}`) : tag;
}

async function htmlFiles(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await htmlFiles(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

export default function imageSizes() {
  return {
    name: 'image-sizes',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        let sizes;
        try {
          sizes = JSON.parse(await readFile(MANIFEST, 'utf8'));
        } catch {
          logger.warn('no image-sizes.json; pictures left as they are');
          return;
        }
        let n = 0;
        for (const file of await htmlFiles(fileURLToPath(dir))) {
          const html = await readFile(file, 'utf8');
          const next = html.replace(/<img\b[^>]*>/g, (tag) => {
            const t = rewrite(tag, sizes);
            if (t !== tag) n++;
            return t;
          });
          if (next !== html) await writeFile(file, next);
        }
        logger.info(`${n} pictures given their size and smaller copies`);
      },
    },
  };
}
