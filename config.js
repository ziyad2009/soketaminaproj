var data = JSON.stringify({
    "collection": "notifactions",
    "database": "baby-setter-api",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1    ,
        "receiverid":"62f02d3c5992b468d6fabd47"
    }
});
const  config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-vmish/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'OgtSDgEo278vHNA50uVULX3zkVlQcacKO5hzbsDjYAcaBiBHv70QCSGk01JAnvvT',
      'Accept': 'application/ejson'
    },
    data: data
};
module.exports=config