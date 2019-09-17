const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://volizik-portfolio.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://volizik-portfolio.herokuapp.com',
  'process.env.CLIENT_ID': 'Zn7OLo7S3xXEEX88oPIzXmU0JHhXPVsv'
}
