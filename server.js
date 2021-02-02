const app = require('./app');

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
console.log("Database_URL", process.env.DATABASE_URL);
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});