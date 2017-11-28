module.exports = {
  ApiBaseUrl: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : 'http://quotesheet-server.azurewebsites.net/',
  QuoteSettings: {
    DetailTypes: [
      'conversation',
      'action'
    ]
  }
}
