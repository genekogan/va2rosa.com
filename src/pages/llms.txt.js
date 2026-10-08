import { llmsProfile } from '../data/llms.js';

// The short profile language models read first. The long one, with the full
// texts and the whole CV, is /llms-full.txt.
export function GET() {
  return new Response(llmsProfile(), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
