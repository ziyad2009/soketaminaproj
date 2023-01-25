 const axios =require('axios')
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
var count = 1

const sendSms=async(phone)=>{

    var adjustedHigh = (9999 - 1000) + 1;       
    const seq= Math.floor(Math.random()*adjustedHigh) + parseFloat(1000);
 
    const phonenomber =(phone).toString()
    const url2=`http://www.qyadat.com/sms/api/sendsms.php?username=aminah&password=1231234&message=code is ${seq}&numbers=${phonenomber}&sender=AMINAAPP&unicode=u&return=Json&Rmduplicated=1`
    //send SMS
    const sms= await axios.post(url2).then((res)=>{
        console.log("test code response",res.data)
        sendcode=true
    }).catch((err)=> console.log(err))
  
    return sms

}




const intData=(a)=>{
    setInterval(()=>{
        sendSms('966543437660')
        console.log("sensd sms",count=+1)
    },1000)
  
}


intData(1)