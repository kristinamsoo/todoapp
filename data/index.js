const { MongoClient } = require("mongodb");
const andmebaas = "matka-app-2111";
const salasona = "mongoDB1";
const mongoUrl = `mongodb+srv://matkaapp:${salasona}@cluster0.inzot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(mongoUrl);

async function lisaToodeAndmed(too) {
    try {
        await client.connect();
        const database = client.db(andmebaas);
        const toodCollection = database.collection("tood");
        const result = await toodCollection.insertOne(too);
        console.log(`Dokument lisatud ID-ga: ${result.insertedId}`);
        return result;
    } catch (error) {
        console.error("Lisamisel tekkis viga:", error);
        throw error;
    } finally {
        await client.close();
    }
}

async function lisaToo(tooIndeks, tooNimetus) {
   const too = tood[tooIndeks]
   if (!too) {
      throw Error("Otsitavat tööd ei ole")
   }

   if (!tooNimetus) {
      throw Error("töö nimetus peab olema määratud")
   } 
   
   if (too.nimetus.findIndex( el => el === tooNimetus) !== -1) {
      throw Error("töö on juba kinnitatud")
   }
 }

async function loeToodeAndmed() {
    try {
        await client.connect();
        const database = client.db(andmebaas);
        const toodCollection = database.collection("tood");
        const tood = await toodCollection.find({}).toArray();
        return tood;
    } catch (error) {
        console.error("Lugemisel tekkis viga:", error);
        return [];
    } finally {
        await client.close();
    }
}

module.exports = {
    loeToodeAndmed,
    lisaToodeAndmed
   
  
}