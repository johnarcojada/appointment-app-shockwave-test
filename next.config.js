/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pages/appointments",
        permanent: true,
      },
      {
        source: "/appointments",
        destination: "/pages/appointments",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
