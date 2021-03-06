
const { response } = require("express");
const
    http = require("http"),
    express = require("express"),
    socketio = require("socket.io");
const api =require('./api')

const API_Key="b7ni1g.74mwfA:wI1s4RV0BJDXe7gDA_kXODQX8jcAGMIhdTmyCSh9TOE"
const SERVER_PORT = process.env.PORT || 4000;
const URL="http://167.99.38.205:3000"
const URL_DEV="http://localhost:3000"
let nextVisitorNumber = 1;
const onlineClients = new Set();

function generateRandomNumber() {
    return (Math.floor(Math.random() * 1000)).toString();
}

 
function onNewWebsocketConnection(socket) {
    let userID

    console.info(`Socket ${socket.id} has connected.`);
    onlineClients.add(socket.id);

    
      socket.on("disconnect",async () => {
          onlineClients.delete(socket.id);
          console.info(`Socket ${socket.id} has disconnected.`,"ID:",userID);

          try{
              await  api.post(`${URL}/setterofflaine`,{
              userId:userID,
              socketid:socket.id
            }).then((res)=>{console.log("response data disconect",res.data)})
          }catch(err){
            console.log("Erorr,",err)
          }

      });
  //serchbabysetes
      socket.on(`setterlocation`,async(data)=>{
        const {token,mainservice,service,coordinates}=data
        console.log("setter ddata",data);
          api.defaults.headers.Authorization = `Bearer ${token}`;
          const response=await  api.post(`${URL}/setterlocation`,{
            "coordinates":coordinates,
            "mainservice":mainservice,
            "service":service
        }).then((res)=>{
          console.log(res.data)
          return res.data
        }).catch(err=>console.log("Erorr",err))
        
      socket.emit("seteeslocation", response)

      })
    
    //Orders
    socket.on(`acceptedorder`,async (order)=>{
      let response
      const{token,orderid}=order
      console.log("order",order)
      
        api.defaults.headers.Authorization = `Bearer ${token}`;
         response= await  api.post(`${URL}/setterorderaccepted`,{
          orderID:orderid
        }).then((res)=>{
          console.log("DATA, POST OK")
          socket.emit("orders",res.data)
         // console.log("DATA,",res.data)
           

        }).catch((err)=>console.log("ERORR",err))
      
    })

    socket.on(`acceptedorder`,async (order)=>{
      let response
      const{token,orderid}=order
      console.log("order",order)
      
        api.defaults.headers.Authorization = `Bearer ${token}`;
         response= await  api.post(`${URL}/setterorderaccepted`,{
          orderID:orderid
        }).then((res)=>{
          console.log("DATA, POST OK")
          socket.emit("orders",res.data)
         // console.log("DATA,",res.data)
           

        }).catch((err)=>console.log("ERORR",err))
      
    })

      

    socket.on("login",async (data)=>{
        console.log( "test data from device",data)
        const {id,name}=data
         userID=id
         
        try{
           await  api.post(`${URL}/setteronlaine`,{
            userId:id,
            socketid:socket.id
          }).then((res)=>{console.log("response data",res.data)})
        }catch(err){
          console.log("Erorr,",err)
        }
        
      
      
        socket.emit("userlogin", `welcome ${data.name}`)
        
    })


    socket.on("logout",async (data)=>{
       
        const {id,name}=data
        try{
           await  api.post(`${URL}/setterofflaine`,{
            userId:id,
            socketid:socket.id
          }).then((res)=>{console.log("response logout Ok data",res.data )})
        }catch(err){
          console.log("Erorr,",err)
        }
       
        socket.emit("userlogout",`godbay ${ data.name} ` )
             
        
    })
    //baby seteer just onlaine
    socket.on("serchlocation",async (data) => {
      console.log("setter ddata",data);
      const {token,service,mainservice}=data
      api.defaults.headers.Authorization = `Bearer ${token}`;
      console.log("test DATA Mother",data)
      const reponse =await  api.post(`${URL}/setterlocation`,{
        "coordinates":[24.47362954961279, 39.60479835840555],
        "mainservice":mainservice,
        "service":service
        
       }).then((res)=>{ 
        console.log("DaTA Soket",res.data)
         res.data
        }
       ).catch((err)=>console.log("EROOR",err))
     
       socket.emit("seteeslocation", reponse)
    })
    // echoes on the terminal every "hello" message this socket sends
    const helloMsg="god day "
    socket.on("hello", helloMsg => console.info(`Socket ${socket.id} says: "${helloMsg}"`));

    // will send a message only to this socket (different than using `io.emit()`, which would broadcast it)
    socket.emit("welcome", `Welcome! You are visitor number ${nextVisitorNumber++}`);
}

function startServer() {
    // create a new express app
    const app = express();
    // create http server and wrap the express app
    const server = http.createServer(app);
    // bind socket.io to that server
    const io = socketio(server);

    // example on how to serve a simple API
    app.get("/random", (req, res) => res.send(generateRandomNumber()));

    // example on how to serve static files from a given folder
    app.use(express.static("public"));

    // will fire for every new websocket connection
    io.on("connection", onNewWebsocketConnection);
   

    // important! must listen from `server`, not `app`, otherwise socket.io won't function correctly
    server.listen(SERVER_PORT, () => console.info(`Listening on port ${SERVER_PORT}.`));

    // will send one message per second to all its clients
    let secondsSinceServerStarted = 0;
    setInterval(() => {
        secondsSinceServerStarted++;
        io.emit("seconds", secondsSinceServerStarted);
        io.emit("online", onlineClients.size);
    }, 1000);

     
}

startServer();

