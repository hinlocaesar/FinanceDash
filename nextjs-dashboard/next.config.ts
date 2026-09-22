import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next.js 15.2+ streams metadata: for normal browsers the <title>/<meta>
  // tags are appended to <body> instead of <head>. The Learn tutorial asks you
  // to inspect <head>, so disable streaming metadata (official option:
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#streaming-metadata).
  // Remove this line if you want the default streaming behaviour back.
  htmlLimitedBots: /.*/,
};

export default nextConfig;
