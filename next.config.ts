import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export' as const,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
