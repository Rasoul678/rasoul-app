/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      "lh3.googleusercontent.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
  },
};

export default nextConfig;
