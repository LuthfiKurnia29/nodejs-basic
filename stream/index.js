const fs = require('fs');
const path = require('path');
const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        const write = fs.createWriteStream('output.txt');
        write.write(process.stdout.write(`${readableStream.read()}\n`));
        write.end("Selesai");
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});