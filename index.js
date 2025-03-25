 const express = require("express");
 const path = require("path");


 const {naitaTood, naitaToo} = require("./controller")

 const {tagastaTood, lisaToo} = require('./api_controller');

 const app = express()
 app.use(express.static("public"))


 const PORT = process.env.PORT || 3035;

 app.use(express.json());
 app.use(express.urlencoded({extended: true}))


 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "ejs");


 app.get('/tood', naitaTood)
 app.get('/too/:id', naitaToo)


 //API endpoindid
app.get('/api/tood', tagastaTood)
app.post('/api/tood', lisaToo)

//app.delete('/api/tood/', kustutaToo)

//app.post('/api/tood', looToo)


//Admin
app.get('/admin', (req, res)=>{res.render('pages/admin')})

app.post('/admin', async (req, res) => {
    try {
        console.log("Saabunud andmed:", req.body);
        res.status(201).json({ message: "Ülesanne lisatud" });
    } catch (error) {
        res.status(500).json({ error: "Viga andmete lisamisel" });
    }
});

//app.use('/assets', express.static('public'))

app.listen(PORT, () => console.log('ToDo töötab pordil ' + PORT))

