const { MongoClient } = require('mongodb');

  async function main(value) {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    const uri = "mongodb+srv://ziayd2009:Asqwzx1404@cluster0.zfdzr.mongodb.net/?retryWrites=true&w=majority";
    
    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        console.log("start to connect ",uri )
        await client.connect();
        
        
        const pipeline = [
            {
                '$match': {
                    //"operationType":"{ $in: [ 'replace', 'insert', 'update' ] }",
                    "fullDocument.motherphone": '966543437660',
                    
                }
            }
        ];

        // Make the appropriate DB calls
         await monitorListingsUsingEventEmitter(client, 170000,pipeline);
        //await montringListinuseHasNext(client, 170000,pipeline)
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

function closeChangeStream(timeInMs = 610000, changeStream) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Closing the change stream");
            resolve(changeStream.close());
        }, timeInMs)
    })
};

  
 async function montringListinuseHasNext(client, timeInMs = 60000, pipeline=[]){  
    const collection = client.db("baby-setter-api").collection("orders");
    const changeStream = collection.watch(pipeline);
    closeChangeStream(timeInMs, changeStream);
     
   try {
    while (await changeStream.hasNext()) {
        let comingdata=await changeStream.next()
        console.log("test Comen data",comingdata._id,"test Comen data",comingdata);
    }
} catch (error) {
    if (changeStream.isClosed()) {
        console.log("The change stream is closed. Will not wait on any more changes.")
    } else {
        throw error;
    }
}
}


async function monitorListingsUsingEventEmitter(client, timeInMs = 60000, pipeline = []){  
   let changesEvent
    const collection = client.db("baby-setter-api").collection("orders");
    const changeStream = collection.watch(pipeline);
    changeStream.on('change', (event) => {
       // console.log("Evett in change ==",event);  
        let dataChange=event
        console.log("Evett in change ==",dataChange); 
        console.log("id resume tokem",event._id) 
        changesEvent=dataChange
   });
    await montringListinuseHasNext(client,timeInMs)
    
    await closeChangeStream(timeInMs, changeStream);
     
}
main().catch(console.error);

// Add functions that make DB calls here
module.exports=main()