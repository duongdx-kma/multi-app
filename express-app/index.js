const os = require('os')
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 8088;
const users = require('./routes/user.route');

app.use(bodyParser.json());
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
        service: "Duongdx - PROD - 111 edit 2023/12/15 13:45",
        contact: "xuanduong.kma@gmail.com",
        clientIp: clientIp,
        elbIp: elbIp,
        containerIp: containerIp,
        containerName: containerName,
        message: `hello world from Ha Noi, the VietNam's capital`
    })
})


//https://db-migrate.readthedocs.io/en/latest/Getting%20Started/configuration/
//https://github.com/dkvasani/express-mysql-migration-app/blob/master/migrations/20181207105559-user.js
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