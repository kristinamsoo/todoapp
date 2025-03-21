const {MongoClient}=require("mongodb");
const andmebaas = "matka-app-2111"
const salasona = "mongoDB1"
const mongoUrl = `mongodb+srv://matkaapp:${salasona}@cluster0.inzot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(mongoUrl);


const too1 = {
    nimetus: " Kujunduse viimistlemine",
    prioriteet: "madal",
    kasTehtud: true

}
const too2 = {
    nimetus: "Sisu lisamine ",
    prioriteet: "keskmine",
    kasTehtud: true
}

const tood = [
   too1,
   too2,
   {
      nimetus: "Lehe struktuuri korrastamine",
      prioriteet: "kõrge ",
      kasTehtud: true
   }

]

async function lisaToo ({too}) {
   tood.push({nimetus, prioriteet, kasTehtud})
} 

async function lisaToo(too) {
   tood.push(too)

   try {
      await client.connect();
      const database = client.db(andmebaas);
      const tood = database.collection("tood");
      const result = await tood.insertOne(too)
      console.log(`A document was inserted with the _id: ${result.insertedId}`)
    } finally {
      await client.close();
    }
   
   
} 

 async function loeToodeAndmed() {
   if (tood !==null) {
    return tood
}
try {
   await client.connect();
   const database = client.db(andmebaas);
   const toodCollection = database.collection("tood");
   tood = await toodCollection.find({}).toArray()
   return tood
}  catch(error) {
   console.log(error.meddage)
   return[]

}  finally {
   await client.close();
}
 }

module.exports = {
    loeToodeAndmed,
    lisaToo
   
}