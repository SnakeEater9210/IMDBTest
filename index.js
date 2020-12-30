const express = require('express')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.static('public'))



app.set('view enging', 'ejs');
// app.set('views', path.join(__dirname, '/views'))


app.post('/submit', async (req, res) => {
    console.log(req.body);
    const { formattedText } = req.body;
    const imdbScore = await scrapeProduct(`https://www.google.com/search?q=${formattedText}`)
    // console.log(imdbScore);
    // res.end('success');
})

app.get('/', (req, res) => {
    res.render('home.ejs',);
    console.log('index works');
})





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})