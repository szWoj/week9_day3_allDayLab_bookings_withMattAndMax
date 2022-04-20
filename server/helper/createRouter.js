const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection)
{
    const router = express.Router();

    router.get('/', (req, res)=>
    {
        collection.find().toArray()
        .then((docs)=> res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
    });

    router.post('/', (req, res)=>
    {
        const data = req.body;
        collection.insertOne(data)
        .then((results) => {res.json(results.ops[0])})
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
    });

    router.delete('/:id', (req, res)=>
    {
        const id = req.params.id;
        collection.deleteOne({_id : ObjectID(id)})
        .then(re => res.json(re))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
    });

    router.put('/:id', (req, res)=>
    {
        const id = req.params.id;
        const data = req.body;
        collection.updateOne({_id : ObjectID(id)}, {$set: data})
        .then(re => res.json(re))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
    })

    return router
}

module.exports = createRouter;