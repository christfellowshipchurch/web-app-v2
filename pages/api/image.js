import fetch from 'node-fetch';

export default async function handler(req, res) {
    const src = req?.query?.src

    if (!src) {
        res.status(400).json({})
        return
    }

    // Request the image from the original source url
    const imgReq = await fetch(src, {
        method: 'GET',
    });
    
    // save the content type header to forward later
    const contentType = imgReq.headers.get('content-type')
    
    // load the image fully
    const buffer = await imgReq.buffer()

    // format the buffered image to a base64 string
    const data = await buffer.toString("base64")

    // create a new buffer from the base64 string that we generated
    const img = Buffer.from(data, 'base64')

    res.status(200)
    res.setHeader("content-type", contentType)
    res.setHeader("content-length", img.length)

    res.end(img)
}