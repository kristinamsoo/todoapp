
const {lisaToo } = require("../api_controller")
const {loeToodeAndmed} = require("../data")

const naitaTood = async (req, res) => {
    const tood = await loeToodeAndmed()
    console.log(tood)
    res.render("pages/index", {tood: tood})
} 

const  naitaToo = async (req,res) => {
    const tood = await loeToodeAndmed ()
    const tooIndeks = req.params.id
    const too = tood[tooIndeks]
    res.render("pages/too", {too: too})

    res.send(`
        <html>
           <body>
              <h1>
               ${too.nimetus}
              </h1>
              <div>
                 ${too.prioriteet}
                 ${too.kasTehtud}
              <div>
              </body>
        </html>
        `)
     }

    module.exports = {
        naitaTood,
        naitaToo,
        lisaToo
      
    }