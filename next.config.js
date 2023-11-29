/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pokeapi.co",
        hostname: "postimg.cc",
        hostname: "i.postimg.cc"
      },
    ],
  },
};
module.exports = nextConfig;
