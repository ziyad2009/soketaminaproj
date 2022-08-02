const api =require('./api')

const API_Key="b7ni1g.74mwfA:wI1s4RV0BJDXe7gDA_kXODQX8jcAGMIhdTmyCSh9TOE"
const SERVER_PORT = process.env.PORT || 4000;
const URL="http://167.99.38.205:3000"
const URL_DEV="http://localhost:3000"

var filter2 = {
    statuse: 'canceled',
   
  };
  var filter = {
    address: 'England',
    name: 'Mark'
  };
  var users = [{
      name: 'John',
      email: 'johnson@mail.com',
      age: 25,
      address: 'USA'
    },
    {
      name: 'Tom',
      email: 'tom@mail.com',
      age: 35,
      address: 'England'
    },
    {
      name: 'Mark',
      email: 'mark@mail.com',
      age: 28,
      address: 'England'
    }
  ];
  

  var orders=[
    {
    "_id":{"$oid":"62d2cc99a15222e5d0f9aef3"},
    "childeaccount":{"$numberInt":"3"},
    "childe":[{"diseasses":"لايوجد","_id":"6297d804af58dd338853c9c5","name":"محمد","age":"١","gender":"ذكر","owner":"62817081ead6c60a7dbdedb4","__v":{"$numberInt":"0"}},{"diseasses":"متلازمة داون","_id":"62993175924bf61f368a20f3","name":"Hahn as","age":"2","gender":"ذكر","owner":"62817081ead6c60a7dbdedb4","__v":{"$numberInt":"0"}},{"diseasses":"التوحد","_id":"6299375e924bf61f368a211a","name":"Asf","age":"11","gender":"ذكر",
    "owner":"62817081ead6c60a7dbdedb4","__v":{"$numberInt":"0"}}],
    "read":false,"accepted":false,"totalhours":{"$numberInt":"3"},
    "totalprice":{"$numberInt":"1200"},"hours":{"$numberDouble":"239.98411666666667"},
    "scurtycode":{"$numberInt":"6772"},"serviestype":
    "حاضنة خاصة","orderid":"3c9097508529be162b2df77edf4c6211",
    "settterowner":"62cb3ff3268cef29807784ab","time":"Sat Jul 16 2022 17:28:44 GMT+0300 (+03) الى Sat Jul 16 2022 17:28:44 GMT+0300 (+03)","location":{"coordinates":[{"$numberDouble":"24.48107"},{"$numberDouble":"39.599812"}],"type":"Point"},
    "settername":"أسماء علي إبراهيم","mothername":"kklk","address":"7548 عبدالله بن ابي سلمه, Al Fateh, Medina 42312, Saudi Arabia",
    "statuse":"canceled",
    "reson":"","start":"2022-07-16T14:28:44.953Z","end":"2022-07-16T18:28:44.000Z",
    "potementdate":"2022-07-16T14:28:44.953Z","settterfaileid":"62cc5f40bba62624c4e5572d",
    "price":{"$numberInt":"400"},
    "motherowoner":{"$oid":"62817081ead6c60a7dbdedb4"},"createdAt":{"$date":{"$numberLong":"1657982105777"}},"updatedAt":{"$date":{"$numberLong":"1658241344032"}},"__v":{"$numberInt":"0"}},
    {"_id":{"$oid":"62d6cae1f178e8091e83f7d5"},
    "childeaccount":{"$numberInt":"1"},"childe":[{"diseasses":"سليم","_id":"6297d804af58dd338853c9c5","name":"محمد","age":"١","gender":"ذكر","owner":"62817081ead6c60a7dbdedb4","__v":{"$numberInt":"0"}}],
    "read":false,"accepted":true,
    "totalhours":{"$numberInt":"10"},"totalprice":{"$numberInt":"5000"},"hours":{"$numberInt":"600"},"rating":{"$numberInt":"0"},"scurtycode":{"$numberInt":"4508"},"serviestype":"حاضنة","orderid":"69814","settterowner":"62cb3ff3268cef29807784ab","time":"Tue Jul 19 2022 13:15:56 GMT+0300 (+03) الى Tue Jul 19 2022 13:15:56 GMT+0300 (+03)",
    "location":{"coordinates":[{"$numberDouble":"24.48107"},{"$numberDouble":"39.599812"}],"type":"Point"},
    "settername":"أسماء علي إبراهيم","mothername":"kklk","address":"7548 عبدالله بن ابي سلمه, Al Fateh, Medina 42312, Saudi Arabia",
    "statuse":"completed","reson":"","start":"2022-07-19T10:15:56.000Z","end":"2022-07-19T20:15:56.000Z","potementdate":"2022-07-22T15:15:56.000Z",
    "settterfaileid":"62cc5f40bba62624c4e5572d","price":{"$numberInt":"500"},"motherowoner":{"$oid":"62817081ead6c60a7dbdedb4"},"createdAt":{"$date":{"$numberLong":"1658243809285"}},"updatedAt":{"$date":{"$numberLong":"1658245235503"}},"__v":{"$numberInt":"0"}},
    {"_id":{"$oid":"62d87cee4708d5477dff5b5e"},
    "childeaccount":{"$numberInt":"1"},"childe":[{"diseasses":"سليم","_id":"62993c24924bf61f368a214c","name":"ناصر","age":"4","gender":"انثى","owner":"62817081ead6c60a7dbdedb4","__v":{"$numberInt":"0"}}],
    "read":false,"accepted":true,"totalhours":{"$numberInt":"10"},
    "totalprice":{"$numberInt":"5000"},"hours":{"$numberDouble":"659.9950333333334"},"rating":{"$numberInt":"0"},"scurtycode":{"$numberInt":"4145"},"serviestype":"حاضنة خاصة","orderid":"51220","settterowner":"62a628c674d6db06b062835e","time":"Thu Jul 21 2022 01:05:30 GMT+0300 (+03) الى Thu Jul 21 2022 01:05:30 GMT+0300 (+03)","location":{"coordinates":[{"$numberDouble":"24.48107"},{"$numberDouble":"39.599812"}],"type":"Point"},
    "settername":"فاطمة","mothername":"kklk","address":"7548 عبدالله بن ابي سلمه, Al Fateh, Medina 42312, Saudi Arabia",
    "statuse":"pending","reson":"","start":"2022-07-20T22:05:30.298Z","end":"2022-07-21T09:05:30.000Z","potementdate":"2022-07-20T22:05:30.298Z","settterfaileid":"62a6290274d6db06b062836a","price":{"$numberInt":"500"},"motherowoner":{"$oid":"62817081ead6c60a7dbdedb4"},"createdAt":{"$date":{"$numberLong":"1658354926860"}},"updatedAt":{"$date":{"$numberLong":"1658355000348"}},"__v":{"$numberInt":"0"}}
  ]
  
  users= users.filter(function(item) {
    for (var key in filter) {
      
      if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
     
    return true;
  });
  

  orders=orders.filter(function(item){
    for(var key in filter2){
        if(item[key]===undefined || item[key] === filter2[key]  ){
            return false
        }
        
      return   true
    }
  })

  const orderTes=async()=>{
  const  token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ5YzY0NDAwOTQwNDRkYjg3MmVhYjIiLCJpYXQiOjE2NTg3MzcwNjZ9.uKv_ChYllKzQ0alSmtfzPELkDLycc5TWv5kjJQLwtmE"
  api.defaults.headers.Authorization = `Bearer ${token}`;
  const   response=  await api.post(`${URL}/servicecodde`,{
  orderID:"62dd2e99c08bd96bae85cf26",
  scurtycode:"7001"
}).then((res)=>{
  console.log(res.data)
  return res.data
}).catch(err=>console.log("Erorr",err))

  console.log(response)

  }
  

  const sendApplication = async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmUyNWJhZjEzZmI3MDA3MmUwYzU0NDciLCJpYXQiOjE2NTkwMDIwMDh9.aIhq3XftF6NlVnasc_LM-J5I4Ej4zfJkvtN6QiFzt74"
    // const userUnparsed = await setItem.getItem('@user');
    // const user = JSON.parse(userUnparsed);
   // console.log(userLocation)
    const dataToSend = {
        name: "demo user",
        age: 18,
        brithdate: "12-12-1908",
        city: "almadinah",
        idcard: 1040960004,
        mainservice: "حاضنة خاصة",
        service:  "حالات خاصة",
        location: {
            coordinates: [24.47362954961279, 39.60479835840555],
            "type":"Point"
        },
        phone:parseInt(966543437669),
        gender: 'female',
        address: "First Ring Road (King Faisal Road), Al-Manakhah, Medina 41419, Saudi Arabia",
        photo: "http://www.clker.com/cliparts/c/8/R/n/d/U/user-md.png"
    }
    try {

        api.defaults.headers.Authorization =token;
        const currentUser = await api.post('/creatsetter', dataToSend);
        if (currentUser) {
            console.log('setter created', currentUser.data);
            // dispatch(userAction({ setter: currentUser.data, user: user, token: token }));
            // navigation.replace('BottomTabNavigator');
        }
    } catch (e) {
        console.log('setter Not Created', e.message)
    }
}
 
sendApplication()

  //console.log(orders)