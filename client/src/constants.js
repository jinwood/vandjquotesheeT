module.exports = {
  ApiBaseUrl: process.env.NODE_ENV === 'dev'
    ? 'http://localhost:8080/'
    : 'http://quotesheet-server.azurewebsites.net/'
}
