const { lisaToo } = require("../api_controller");
const { loeToodeAndmed } = require("../data");

const naitaTood = async (req, res) => {
    try {
        const tood = await loeToodeAndmed();
        console.log(tood);
        res.render("pages/index", { tood });
    } catch (error) {
        console.error("Tööde laadimine ebaõnnestus:", error);
        res.status(500).send("Viga andmete laadimisel");
    }
};

const naitaToo = async (req, res) => {
    try {
        const tood = await loeToodeAndmed();
        const tooIndeks = req.params.id; 

        
        if (!tood[tooIndeks]) {
            return res.status(404).send("Tööd ei leitud!");
        }

        const too = tood[tooIndeks];
        res.render("pages/too", { too });

    } catch (error) {
        console.error("Üksiku töö laadimine ebaõnnestus:", error);
        res.status(500).send("Viga töö andmete laadimisel");
    }
};

module.exports = {
    naitaTood,
    naitaToo,
    lisaToo
};