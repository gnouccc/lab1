const app = require("./app");
const congfig = require("./app/config");

// start server
const POST = config.app.port:
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}.');
});
const config ={
    app:{
        port: process.env.Port || 8080,
    },
};

module.exports = config;
