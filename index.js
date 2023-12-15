import express from 'express'
import os from 'os'

const app = express()

app.get('/', (request, response) => {
    const clientIp = request.header('x-forwarded-for');
    const elbIp = request.socket.remoteAddress;
    const containerIp = request.socket.localAddress;
    const containerName = os.hostname();
    console.log('hello root')
    response.json({
        service: "Duongdx - PROD - v4 edit 2023/12/15 11:37",
        contact: "xuanduong.kma@gmail.com",
        clientIp: clientIp,
        elbIp: elbIp,
        containerIp: containerIp,
        containerName: containerName,
        message: `hello world from Ha Noi, the VietNam's capital`
    })
})

app.listen(8088, () => {
    console.log('app started successfully')
})