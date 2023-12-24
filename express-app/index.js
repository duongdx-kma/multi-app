const os = require('os')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 8088;
const users = require('./routes/user.route');

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    const clientIp = request.header('x-forwarded-for');
    const elbIp = request.socket.remoteAddress;
    const containerIp = request.socket.localAddress;
    const containerName = os.hostname();
    console.log('hello root')
    response.json({
        service: "Duongdx - dev - 111 edit 2023/12/24 17:01",
        contact: "xuanduong.kma@gmail.com",
        clientIp: clientIp,
        elbIp: elbIp,
        containerIp: containerIp,
        containerName: containerName,
        message: `hello world from Ha Noi, the VietNam's capital`
    })
})
// https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261
// https://blog.openreplay.com/creating-a-nodejs-api-with-knex-and-mysql/
app.use('/users', users);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});

    return;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});