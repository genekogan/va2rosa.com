// ---------------------------------------------------------------------------
// The Little Martians press kit, at the end of /info: Vanessa's own selection
// of shareable files (from her "Little Martians _share" folder), served from
// this site under /kit. Pictures are full-resolution JPEGs; the film stills
// come as one zip per film; the videos were re-encoded smaller to share.
// `t` is the thumbnail shown on the page (in /images/kit).
// ---------------------------------------------------------------------------

const K = (p) => `/kit/${p}`;
const T = (n) => `/images/kit/${n}.webp`;

export const pressKit = {
  all: { href: K('little-martians-press-kit.zip'), size: '57 MB' },
  contact: 'va2rosa@littlemartians.world',
  groups: [
    {
      title: 'Press releases',
      items: [
        { label: 'Dear Human, My Muse', href: K('press-releases/press-release-dear-human-my-muse.pdf'), t: T('press-release-dear-human-my-muse'), kind: 'PDF', size: '6.4 MB' },
        { label: 'Verdelis & Mycos, 2025', href: K('press-releases/press-release-verdelis-and-mycos-2025.pdf'), t: T('press-release-verdelis-and-mycos-2025'), kind: 'PDF', size: '2.8 MB' },
      ],
    },
    {
      title: 'Posters',
      items: [
        { label: 'Dear Human, My Muse', href: K('posters/poster-dear-human-my-muse.jpg'), t: T('poster-dear-human-my-muse'), kind: 'JPG', size: '0.7 MB' },
        { label: 'Dear Human, My Muse, with laurels', href: K('posters/poster-dear-human-my-muse-laurels.jpg'), t: T('poster-dear-human-my-muse-laurels'), kind: 'JPG', size: '0.5 MB' },
        { label: 'Verdelis & Mycos, with laurels', href: K('posters/poster-verdelis-and-mycos-laurels.jpg'), t: T('poster-verdelis-and-mycos-laurels'), kind: 'JPG', size: '0.4 MB' },
        { label: 'Little Martians & Abraham', href: K('posters/poster-little-martians-and-abraham.jpg'), t: T('poster-little-martians-and-abraham'), kind: 'JPG', size: '0.3 MB' },
      ],
    },
    {
      title: 'Film stills',
      items: [
        { label: 'Verdelis & Mycos, 24 stills', href: K('stills-verdelis-and-mycos.zip'), t: T('stills-verdelis-and-mycos'), kind: 'ZIP', size: '8.5 MB' },
        { label: 'Little Martians & Abraham, 15 stills', href: K('stills-little-martians-and-abraham.zip'), t: T('stills-little-martians-and-abraham'), kind: 'ZIP', size: '7.2 MB' },
      ],
    },
    {
      title: 'Ceramics and AI',
      items: [
        { label: 'The first Little Martian', href: K('ceramics-and-ai/first-little-martian.jpg'), t: T('first-little-martian'), kind: 'JPG', size: '0.5 MB' },
        { label: 'A Little Martian in the desert', href: K('ceramics-and-ai/little-martian-in-the-desert.jpg'), t: T('little-martian-in-the-desert'), kind: 'JPG', size: '2.7 MB' },
        { label: 'Little Martians, ceramics', href: K('ceramics-and-ai/little-martians-group.jpg'), t: T('little-martians-group'), kind: 'JPG', size: '1.1 MB' },
        { label: 'Ceramic and 3D', href: K('ceramics-and-ai/ceramic-and-3d.jpg'), t: T('ceramic-and-3d'), kind: 'JPG', size: '0.6 MB' },
        { label: 'An AI Little Martian', href: K('ceramics-and-ai/ai-little-martian.jpg'), t: T('ai-little-martian'), kind: 'JPG', size: '0.1 MB' },
        { label: 'Little Martians, GAN', href: K('ceramics-and-ai/little-martians-gan.jpg'), t: T('little-martians-gan'), kind: 'JPG', size: '0.7 MB' },
        { label: 'Verdelis', href: K('ceramics-and-ai/verdelis.jpg'), t: T('verdelis'), kind: 'JPG', size: '0.3 MB' },
        { label: 'Verdelis', href: K('ceramics-and-ai/verdelis-2.jpg'), t: T('verdelis-2'), kind: 'JPG', size: '0.3 MB' },
        { label: 'The printed books', href: K('ceramics-and-ai/printed-books.jpg'), t: T('printed-books'), kind: 'JPG', size: '1.4 MB' },
      ],
    },
    {
      title: 'Christie’s Augmented Intelligence, 2025',
      items: [
        { label: 'Verdelia at Christie’s', href: K('christies/christies-1.jpg'), t: T('christies-1'), kind: 'JPG', size: '1.0 MB' },
        { label: 'At Christie’s', href: K('christies/christies-2.jpg'), t: T('christies-2'), kind: 'JPG', size: '1.4 MB' },
        { label: 'At Christie’s', href: K('christies/christies-3.jpg'), t: T('christies-3'), kind: 'JPG', size: '1.1 MB' },
      ],
    },
    {
      title: 'Books',
      items: [
        { label: 'Welcome to the Little Martians World', href: K('books/welcome-to-the-little-martians-world.pdf'), t: T('welcome-to-the-little-martians-world'), kind: 'PDF', size: '9.3 MB' },
        { label: 'The Codex, booklet', href: K('books/the-codex-booklet.pdf'), t: T('the-codex-booklet'), kind: 'PDF', size: '5.2 MB' },
      ],
    },
    {
      title: 'Portraits of Vanessa Rosa',
      items: [
        { label: 'Photo by Renata Chebel, 2024', href: K('portraits/vanessa-rosa-by-renata-chebel.jpg'), t: T('vanessa-rosa-by-renata-chebel'), kind: 'JPG', size: '1.8 MB' },
        { label: 'Photo by Renata Chebel, 2024', href: K('portraits/vanessa-rosa-by-renata-chebel-2.jpg'), t: T('vanessa-rosa-by-renata-chebel-2'), kind: 'JPG', size: '1.1 MB' },
        { label: 'Photo by Edu Monteiro, 2025', href: K('portraits/vanessa-rosa-by-edu-monteiro.jpg'), t: T('vanessa-rosa-by-edu-monteiro'), kind: 'JPG', size: '0.5 MB' },
        { label: 'Photo by Ania Catherine, 2022', href: K('portraits/vanessa-rosa-by-ania-catherine.jpg'), t: T('vanessa-rosa-by-ania-catherine'), kind: 'JPG', size: '1.4 MB' },
      ],
    },
    {
      title: 'Videos',
      items: [
        { label: 'Little Martians, the show', href: K('videos/little-martians-show.mp4'), t: T('little-martians-show'), kind: 'MP4', size: '17.6 MB' },
        { label: 'The process, 2024, with subtitles', href: K('videos/the-process-2024.mp4'), t: T('the-process-2024'), kind: 'MP4', size: '28.4 MB' },
      ],
    },
  ],
};
