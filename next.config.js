module.exports = {
  async redirects() {
    return [
      {
        source: '/access',
        destination: 'https://manifestoonline-dd357.web.app/',
        permanent: true
      }
    ];
  }
};