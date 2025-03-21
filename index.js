 const express = require("express");
 const path = require("path");


 const {naitaTood, naitaToo} = require("./controller")

 const {tagastaTood, lisaToo, looToo} = require('./api_controller');

 const app = express();
 app.use(express.static("public"))


 const PORT = process.env.PORT || 3035;

 app.use(express.json());
 app.use(express.urlencoded())


 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "ejs");


 app.get('/tood', naitaTood)
 app.get('/too/:id', naitaToo)


 //API endpoindid
app.get('/api/tood', tagastaTood)
app.post('/api/tood', lisaToo)

app.post('/api/tood', looToo)


//Admin
app.get('/admin', (req, res)=>{res.render('pages/admin')})

app.use('/assets', express.static('public'))

app.listen(PORT, () => console.log('ToDo töötab pordil ' + PORT))

