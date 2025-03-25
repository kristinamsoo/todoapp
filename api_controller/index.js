const { loeToodeAndmed, lisaToodeAndmed} = require("../data");

const tagastaTood = async (req, res) => {
    try {
        const tood = await loeToodeAndmed();
        res.json(tood);
    } catch (error) {
        res.status(500).json({ error: "Andmete laadimisel tekkis viga" });
    }
};

const lisaToo = async (req, res) => {
    try {
        if (!req.body.nimetus) {
            return res.status(403).json({ error: "Nimetus ei tohi olla tühi" });
        }

        const too = {
            nimetus: req.body.nimetus,
            prioriteet: req.body.prioriteet || "madal",
            kasTehtud: req.body.kasTehtud || false
        };

        await lisaToodeAndmed(too);
        res.status(201).json({ message: "Andmed lisatud" })
    } catch (error) {
        res.status(500).json({ error: "Andmete lisamisel tekkis viga" });
    }
};




module.exports = {
    tagastaTood,
    lisaToo
}