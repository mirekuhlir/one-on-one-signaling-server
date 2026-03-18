const { PeerServer } = require("peer");

const port = process.env.PORT || 9000;
const allowedOrigins = process.env.ALLOWED_ORIGIN ? process.env.ALLOWED_ORIGIN.split(',').map(origin => origin.trim()) : [];

PeerServer({
    port: port,
    path: "/",
    proxied: true,
    key: process.env.PEERJS_KEY || "peerjs",
    allow_discovery: false,
    concurrent_limit: 1000,
    corsOptions: {
        origin: allowedOrigins.length >= 1 ? allowedOrigins : false
    }
});

console.log(`PeerServer is running on port: ${port}`);