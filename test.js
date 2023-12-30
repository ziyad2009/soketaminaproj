const https = require('https');

const app_id = 'TrThvilOAHB1G7TbKEXxOeei5HIxL0uhRQ6vOSY6';
const app_sec = 'cfKuO5cGk7HEmndhJS8znzjRIqjqJ49ZLxegPCJplPhJIHg5M34GRRFuCQ9ftClkrN84izIbsl394pv31Ifxl9GPcdndslzZdKwb';
const app_hash = Buffer.from(`${app_id}:${app_sec}`).toString('base64');
const smsApi=(phone,txt,sender)=>{

const messages = {
  messages: [
    {
      text: txt,
      numbers: [phone],
      sender: sender,
    },
  ],
};

const url = new URL('https://api-sms.4jawaly.com/api/v1/account/area/sms/send');
const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Basic ${app_hash}`,
  },
};

const req = https.request(url, options, (res) => {
  let response_data = '';
  res.on('data', (chunk) => {
    response_data += chunk;
  });

  res.on('end', () => {
    const response_json = JSON.parse(response_data);
    const status_code = res.statusCode;
    if (status_code == 200) {
      if (response_json['messages'][0]['err_text']) {
        console.log(response_json['messages'][0]['err_text']);
      } else {
        console.log(' job was done id: ' + response_json['job_id']);
      }
    } else if (status_code == 400) {
      console.log(response_json['message']);
    } else if (status_code == 422) {
      console.log('نص الرسالة فارغ');
    } else {
      console.log('محظور بواسطة كلاودفلير. Status code: ' + status_code);
    }
  });
});

req.on('error', (error) => {
  console.log('Error sending request:', error);
});

req.write(JSON.stringify(messages));
req.end();
}
const NIMBER=966543437660
smsApi(NIMBER,"code is - 987655","AMINAH APP")