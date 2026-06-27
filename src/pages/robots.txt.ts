import { siteInfo as info } from '../lib/content';

export function GET() {
  return new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${new URL('/sitemap-index.xml', info.website).href}`
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    }
  );
}
