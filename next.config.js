module.exports = {
  async redirects() {
    return [
      {
        source: "/cs",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
