/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 개발 중 오류 감지 및 코드 품질 향상을 위해 활성화
  swcMinify: true, // SWC를 사용한 코드 미니파이
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nrs.harvard.edu',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: true, // styled-components 서버 사이드 렌더링 지원
  },
  output: 'export',
};

export default nextConfig;
