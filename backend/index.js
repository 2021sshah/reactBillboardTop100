// set up RESTful API
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;

app.use(cors());

// spawn python file for Web Scraping
const spawn = require("child_process").spawn;
const pythonProcess = spawn('python', ['web-scrape.py']);

// parse through buffer data sent from python file
songData = []
pythonProcess.stdout.on('data', (data) => {
    strStream = data.toString().split("\r\n");
    for (let i=0; i < strStream.length; i+=3) {
        songData.push([strStream[i], strStream[i+1], strStream[i+2]]);
    }
    songData.splice(songData.length-1, 1); // delete empty idx at end of array
    console.log(songData) // FOR TESTING
});

// handle get requests made to server
app.get('/', (req, res) => {
    // default information
    res.send('Siddharth\'s CHANGE++ RESTful API');
});

app.get('/all', (req, res) => {
    // send all information within songData
    res.json({data: songData});
});

app.get('/random', (req, res) => {
    // randomly select three unique indices of songData
    rIndices = [];
    rSongs = [];
    rId = ['one', 'two', 'three']; // moveable id for frontend manipulation
    j = 0;
    while(rIndices.length < 3) {
        idx = Math.floor(Math.random() * 100);
        if(!rIndices.includes(idx))
            rIndices.push(idx);
            rSongs.push( 
                [rId[j],
                songData[idx][0],
                songData[idx][1],
                songData[idx][2]]);
            j++;
    }
    // send songData contained within each index
    res.json({indices: rIndices, data: rSongs})
});

// call listener to begin running server
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})