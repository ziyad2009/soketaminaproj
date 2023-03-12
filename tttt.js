 //const axios =require('axios')
// const seq = 1234
// const phone=966564684108
//     const uri=`http://www.qyadat.com/sms/api/sendsms.php?
//     username=@966595104212&password=@1231234&message=code${seq}&numbers=966543437660&sender=AMINAHAPP&unicode=u&return=Json&Rmduplicated=1`
//     const url2=`http://www.qyadat.com/sms/api/sendsms.php?username=aminah&password=1231234&message=code is ${seq}&numbers=${phone}&sender=AMINAHAPP&unicode=u&return=Json&Rmduplicated=1`
//     //send SMS
//     const sms= axios.post(url2).then((res)=>{
//         console.log("test res",res.data)
//     }).catch((er)=> console.log(err))

// function rand( lowest, highest){
//     var adjustedHigh = (highest - lowest) + 1;       
//     const codde= Math.floor(Math.random()*adjustedHigh) + parseFloat(lowest);
//     console.log(codde)
//     return codde
// }
// rand(1000,9999)
/////////////////////////////////////////////////
// var count = 1

// const sendSms=async(phone)=>{

//     var adjustedHigh = (9999 - 1000) + 1;       
//     const seq= Math.floor(Math.random()*adjustedHigh) + parseFloat(1000);
 
//     const phonenomber =(phone).toString()
//     const url2=`http://www.qyadat.com/sms/api/sendsms.php?username=aminah&password=1231234&message=code is ${seq}&numbers=${phonenomber}&sender=AMINAAPP&unicode=u&return=Json&Rmduplicated=1`
//     //send SMS
//     const sms= await axios.post(url2).then((res)=>{
//         console.log("test code response",res.data)
//         sendcode=true
//     }).catch((err)=> console.log(err))
  
//     return sms

// }




// const intData=(a)=>{
//     setInterval(()=>{
//         sendSms('966543437660')
//         console.log("sensd sms",count=+1)
//     },1000)
  
// }


// intData(1)

//////////////////////// second SMS
// var count = 1

const sendSms=async(phone)=>{

    var adjustedHigh = (9999 - 1000) + 1;       
    const seq= Math.floor(Math.random()*adjustedHigh) + parseFloat(1000);
 
    const phonenomber =(phone).toString()
    const url2=`https://www.mora-sa.com/api/v1/sendsms?api_key=5525ce117387996d1fd6454eff7a2127612b0355&username=966595104212&message=code is ${seq}&sender=AMINAAPP&numbers=${phonenomber}&response=text`
    //send SMS
    const sms= await axios.post(url2).then((res)=>{
        console.log("test code response",res.data)
        sendcode=true
    }).catch((err)=> console.log(err))
  
    return sms

}




// const intData=(a)=>{
//     setInterval(()=>{
//         sendSms('966543437660')
//         console.log("sensd sms",count=+1)
//     },1000)
  
// }


// intData(1)

///////////////////////////////
// const API_KEY = "MDA4OGEwNzUtZjMwYy00Mjc2LWI2MzAtYWRlYTM3MDBjZjU0";
// const ONESIGNAL_APP_ID = "e7f7d499-20ad-4a19-b702-414d65b3e158";
// const BASE_URL = "https://onesignal.com/api/v1";
// const optionsBuilder = (method, path, body) => {
//     return {
//             method,
//             'url': `${BASE_URL}/${path}`,
//             'headers': {
//             'Content-Type': 'application/json',
//             'Authorization': `Basic ${API_KEY}`,
//         },
//         body: body ? JSON.stringify(body) : null
//     };
// }

// const body = {
//     app_id: ONESIGNAL_APP_ID,
//     included_segments: ["include_player_ids","a268e65d-32c1-4959-b482-196709322f13"],
//     data: {
//     	foo: 'bar',
//     },
//     contents: {
//     	en: 'Sample Push Message',
//     },
// };

// const createNotication = async (data) => {
//     const options = optionsBuilder("post","notifications", data);
//     try {
//             const response = await axios(options);
//             return response.data;
//         } catch (error) {
//             console.error(error);
//             return error;
//         }
//     }

//     createNotication(body)

///////////////////
// const sdk = require('api')('@onesignal/v9.0#1g2uuailbwvyjvk');

// sdk.createNotification({
//   included_segments: [
//     'include_player_ids',
//     'a268e65d-32c1-4959-b482-196709322f13a268e65d-32c1-4959-b482-196709322f13'
//   ],
//   contents: {
//     en: 'English or Any Language Message',
//     es: 'Spanish Message'
//   },
//   name: 'INTERNAL_CAMPAIGN_NAME',
//   app_id: 'e7f7d499-20ad-4a19-b702-414d65b3e158'
// }, {
//   authorization: 'MDA4OGEwNzUtZjMwYy00Mjc2LWI2MzAtYWRlYTM3MDBjZjU0'
// })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));
///////////////
// const axios = require('axios');

// const options = {
//   method: 'POST',
//   url: 'https://onesignal.com/api/v1/notifications',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Basic MDA4OGEwNzUtZjMwYy00Mjc2LWI2MzAtYWRlYTM3MDBjZjU0',
//     'content-type': 'application/json'
//   },
//   data: {
//     app_id: 'e7f7d499-20ad-4a19-b702-414d65b3e158',
//     included_segments: ['include_player_ids',
//     'a268e65d-32c1-4959-b482-196709322f13a268e65d-32c1-4959-b482-196709322f13'],
//     //external_id: 'string',
//     contents: {en: 'English or Any Language Message', es: 'Spanish Message'},
//     name: 'INTERNAL_CAMPAIGN_NAME',
//     // send_after: 'string',
//     // delayed_option: 'string',
//     // delivery_time_of_day: 'string',
//     throttle_rate_per_minute: 0
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
//////
const OneSignal =require('@onesignal/node-onesignal')
const ONESIGNAL_APP_ID = 'e7f7d499-20ad-4a19-b702-414d65b3e158';

//const API_KEY = "MDA4OGEwNzUtZjMwYy00Mjc2LWI2MzAtYWRlYTM3MDBjZjU0";
// const ONESIGNAL_APP_ID = "e7f7d499-20ad-4a19-b702-414d65b3e158";
// const BASE_URL = "https://onesignal.com/api/v1";
const app_key_provider = {
  getToken() {
      return 'MDA4OGEwNzUtZjMwYy00Mjc2LWI2MzAtYWRlYTM3MDBjZjU0';
  }
};

const configuration = OneSignal.createConfiguration({
  authMethods: {
      app_key: {
        tokenProvider: app_key_provider
      }
  }
});
const client = new OneSignal.DefaultApi(configuration);

const notification = new OneSignal.Notification();
notification.app_id = ONESIGNAL_APP_ID;
notification.included_segments = ['Subscribed Users','include_player_ids','a268e65d-32c1-4959-b482-196709322f13'];
notification.contents = {
	en: "مرحبا بكم امينه"
};
const repeterFun=async()=>{
const   {id} = await client.createNotification(notification);
const response = await client.getNotification(ONESIGNAL_APP_ID, id);
console.log("tets res",response)
}

//repeterFun()

///////


//const ONESIGNAL_APP_ID = 'e7f7d499-20ad-4a19-b702-414d65b3e158';
const API_KEY = "MDA4OGEwNzUtZjMwYy00Mjc2LWI2MzAtYWRlYTM3MDBjZjU0";

const APP_ID_SETTER='17154dec-33d9-484c-b51a-d19302d43e58'
const API_KEY_SETTER="NmFkNmFmYjQtOWY0Zi00NzBmLTkzNmItYTY0M2RhZWIxMGFm"

const axios = require('axios');

const options = {
  method: 'POST',
  url: `https://onesignal.com/api/v1/apps/${ONESIGNAL_APP_ID}/segments`,
  headers: {
    accept: 'application/json',
    Authorization: `Basic ${API_KEY}`,
    'Content-Type': 'application/json; charset=utf-8'
  },
  data: {
  "name": "Segment 2",
  "filters": [
    {"field": "session_count", "relation": ">", "value": "1"},
    {"operator": "AND"},
    {"field": "tag", "relation": "!=", "key": "tag_key", "value": "1"},
    {"operator": "OR"},
    {"field": "last_session", "relation": "<", "hours_ago": "30"}
  ]
}
 
};

const testdata =()=>{
  axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  })
}

testdata()
