
const {loeToodeAndmed, lisaToo : lisaToodeAndmed} = require('../data')

const tagastaTood = async (req, res) => {
    const tood = await loeToodeAndmed()
    res.json(tood)
}

const lisaToo = (req, res) => {
    console.log(req.body)
    lisaToodeAndmed({
        nimetus: req.body.nimetus,
        prioriteet: req.body.prioriteet,
        kasTehtud: true
    }) 
    res.status(201).end()
}


async function looToo(req, res) {
    if (!req.body.nimetus) {
        res.status(403).end({ error: "nimetus ei tohi olla tühi" });
        return;
    }

    const too = {
        nimetus: req.body.nimetus,
        prioriteet: req.body.prioriteet,
        kasTehtud: req.body.kasTehtud
    }

    await lisaToo(too)
        res.status(201).end()
    }
    
module.exports = {
    tagastaTood,
    lisaToo,
    lisaToodeAndmed,
    looToo

} 