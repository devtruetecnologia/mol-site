module.exports = {
  async redirects() {
    return [
      {
        source: '/access',
        destination: 'https://admin.mol.log.br/',
        permanent: true
      }
    ];
  }
};