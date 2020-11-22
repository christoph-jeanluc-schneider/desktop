var path = require( "path" );
var express = require( "express" );
var http = require( "http" );
var helmet = require( "helmet" );
var cookieParser = require( "cookie-parser" );

const WWWROOT = path.join( __dirname, "../wwwroot" );
const PORT = !isNaN( Number( process.argv[ 2 ] ) ) ? Number( process.argv[ 2 ] ) : 3000;

// SETUP EXPRESS
var app = express();
app.use( helmet() );
app.use( express.json( { limit: "1024mb" } ) );
app.use( express.urlencoded( { extended: true, limit: "1024mb" } ) )
app.use( cookieParser() );

// ROUTES
app.use( "/api", require( "./api.js" ) );
app.use( express.static( WWWROOT ) );

// START SERVER
let server = http.createServer( app ).listen( PORT, () => {
    console.log( `listening on http://localhost:${PORT}` );
} );
