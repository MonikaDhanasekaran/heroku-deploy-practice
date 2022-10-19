const mongo  = require("../connection");
const { ObjectId } = require("mongodb");

module.exports.getProducts = async (req,res) => {
    try{
        const productsData = await mongo.selectedDb.collection("products").find().toArray();
        res.send(productsData);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.updateProducts = async (req,res) => {
    try{
        const id = req.params.id;
        const updatedData = await mongo.selectedDb.collection("products").findOneAndUpdate({ 
            _id: ObjectId(id) },
            {$set: {...req.body}},
            {returnDocument: "after"}
        );
        res.send(updatedData);
    }
    catch{
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.createProducts = async (req,res) => {
    try{
        console.log(req.body);
        const insertedResponse = await mongo.selectedDb.collection("products").insertOne(req.body);
        res.send(insertedResponse);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
};

module.exports.deleteProducts = async (req,res) => {
    try{
        const id = req.params.id;
        const deletedData = await mongo.selectedDb.collection("products").remove({ _id: ObjectId(id) });
        res.send(deletedData);
    }
    catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}