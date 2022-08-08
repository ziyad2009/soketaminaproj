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


  const notfication=[
    {
        "is_read": false,
        "_id": "62d0317d1f71b90894933067",
        "id": 1,
        "sender": "111",
        "receiver": "222",
        "type": "text",
        "content": "knlfnqwnfq;fq;",
        "phone": 1234456,
        "title": "heloo",
        "orderid": "3333",
        "createdAt": "2022-07-14T15:08:45.193Z",
        "updatedAt": "2022-07-14T15:08:45.193Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62de8ac4d863ff046a7fad3f",
        "id": 1,
        "sender": "111",
        "receiver": "62d9c6440094044db872eab2",
        "type": "text",
        "content": "knlfnqwnfq;fq;",
        "phone": 966543437660,
        "title": "heloo",
        "orderid": "3333",
        "createdAt": "2022-07-25T12:21:24.375Z",
        "updatedAt": "2022-07-25T12:21:24.375Z",
        "__v": 0
    },
    {
        "is_read": true,
        "_id": "62de8b36d863ff046a7fad42",
        "id": 1,
        "sender": "111",
        "receiver": "62d9c6440094044db872eab2",
        "type": "text",
        "content": "تم حل المشكله",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-07-25T12:23:18.518Z",
        "updatedAt": "2022-07-25T12:37:54.991Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62e98c68e3e36bfbf0eedcfa",
        "id": 1,
        "sender": "111",
        "receiver": "62817081ead6c60a7dbdedb4",
        "type": "text",
        "content": "انتهي الوقت الرجاء الخول",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-02T20:43:20.941Z",
        "updatedAt": "2022-08-02T20:43:20.941Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62e99dd5e3e36bfbf0eee494",
        "id": 1,
        "sender": "111",
        "receiver": "62817081ead6c60a7dbdedb4",
        "type": "text",
        "content": "time is done",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-02T21:57:41.810Z",
        "updatedAt": "2022-08-02T21:57:41.810Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62e9a2d558d1de0e713b02e9",
        "id": 1,
        "sender": "111",
        "receiver": "62817081ead6c60a7dbdedb4",
        "type": "text",
        "content": "time is done 3",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-02T22:19:01.091Z",
        "updatedAt": "2022-08-02T22:19:01.091Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ea2c4f894f7b10ce46a7ac",
        "id": 1,
        "sender": "111",
        "receiver": "62817081ead6c60a7dbdedb4",
        "type": "text",
        "content": "you have requested !",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-03T08:05:35.371Z",
        "updatedAt": "2022-08-03T08:05:35.371Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ea5fd6894f7b10ce48c766",
        "id": 1,
        "sender": "111",
        "receiver": "62817081ead6c60a7dbdedb4",
        "type": "text",
        "content": "you have requested !",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-03T11:45:26.786Z",
        "updatedAt": "2022-08-03T11:45:26.786Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ea626b894f7b10ce48d675",
        "id": 1,
        "sender": "111",
        "receiver": "62817081ead6c60a7dbdedb4",
        "type": "text",
        "content": "you have requested !",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-03T11:56:27.504Z",
        "updatedAt": "2022-08-03T11:56:27.504Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ea6393894f7b10ce48dc47",
        "id": 6355,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62cb3ff3268cef29807784ab",
        "type": "text",
        "content": "لقد تم اضافة طلب الرجاد تحديث صفحة الطلبات",
        "phone": 966543437660,
        "title": "حجز جديد",
        "orderid": "76235",
        "createdAt": "2022-08-03T12:01:23.409Z",
        "updatedAt": "2022-08-03T12:01:23.409Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ea63d8894f7b10ce48dda2",
        "id": 3692,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62cb3ff3268cef29807784ab",
        "type": "text",
        "content": "لقد تم اضافة طلب الرجاد تحديث صفحة الطلبات",
        "phone": 966543437660,
        "title": "حجز جديد",
        "orderid": "76235",
        "createdAt": "2022-08-03T12:02:32.385Z",
        "updatedAt": "2022-08-03T12:02:32.385Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ea6662894f7b10ce48ea63",
        "id": 1307,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62817081ead6c60a7dbdedb4",
        "type": "text",
        "content": "لقد تم اضافة طلب الرجاد تحديث صفحة الطلبات",
        "phone": 966543437660,
        "title": "حجز جديد",
        "orderid": "76235",
        "createdAt": "2022-08-03T12:13:22.715Z",
        "updatedAt": "2022-08-03T12:13:22.715Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ea66dc894f7b10ce48ed0f",
        "id": 3585,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62817081ead6c60a7dbdedb4",
        "type": "text",
        "content": "لقد تم اضافة طلب الرجاد تحديث صفحة الطلبات",
        "phone": 966543437660,
        "title": "حجز جديد",
        "orderid": "76235",
        "createdAt": "2022-08-03T12:15:24.679Z",
        "updatedAt": "2022-08-03T12:15:24.679Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ea67da894f7b10ce48f303",
        "id": 8167,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62cb3ff3268cef29807784ab",
        "type": "text",
        "phone": 966543437660,
        "orderid": "76235",
        "createdAt": "2022-08-03T12:19:38.544Z",
        "updatedAt": "2022-08-03T12:19:38.544Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ea6a46894f7b10ce49019e",
        "id": 5459,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62cb3ff3268cef29807784ab",
        "type": "text",
        "content": "لقد تم اضافة طلب جديد",
        "phone": 966543437660,
        "title": "طلب جديد",
        "orderid": "76235",
        "createdAt": "2022-08-03T12:29:58.527Z",
        "updatedAt": "2022-08-03T12:29:58.527Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eabcc6dc47e71d8ac69357",
        "id": 1,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62ea5aee894f7b10ce48913c",
        "type": "text",
        "content": "you have requested !",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-03T18:21:58.260Z",
        "updatedAt": "2022-08-03T18:21:58.260Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eabee6dc47e71d8ac69918",
        "id": 1,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62ea5aee894f7b10ce48913c",
        "type": "text",
        "content": "you have requested 12333 !",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-03T18:31:02.096Z",
        "updatedAt": "2022-08-03T18:31:02.096Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eabfc0dc47e71d8ac69f20",
        "id": 9183,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62ea5aee894f7b10ce48913c",
        "type": "text",
        "content": "لقد تم اضافة طلب جديد",
        "phone": 966543437660,
        "title": "طلب جديد",
        "orderid": "50853",
        "createdAt": "2022-08-03T18:34:40.030Z",
        "updatedAt": "2022-08-03T18:34:40.030Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eaf5661a7eac2707ea3dfa",
        "id": 2177,
        "sender": "62e6bfa995557de1363cb1b6",
        "receiver": "62ea5aee894f7b10ce48913c",
        "type": "text",
        "content": "لقد تم اضافة طلب جديد",
        "phone": 966543437653,
        "title": "طلب جديد",
        "orderid": "30463",
        "createdAt": "2022-08-03T22:23:34.354Z",
        "updatedAt": "2022-08-03T22:23:34.354Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eaf62a1a7eac2707ea48ee",
        "id": 1,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62cb3ff3268cef29807784ab",
        "type": "text",
        "content": "you have requested 12333 !",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-03T22:26:50.626Z",
        "updatedAt": "2022-08-03T22:26:50.626Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eaf6a31a7eac2707ea4f50",
        "id": 6708,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62cb3ff3268cef29807784ab",
        "type": "text",
        "content": "لقد تم اضافة طلب جديد",
        "phone": 966543437660,
        "title": "طلب جديد",
        "orderid": "59038",
        "createdAt": "2022-08-03T22:28:51.165Z",
        "updatedAt": "2022-08-03T22:28:51.165Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eaf9401a7eac2707ea7795",
        "id": 2195,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62cb3ff3268cef29807784ab",
        "type": "text",
        "content": "لقد تم اضافة طلب جديد",
        "phone": 966543437660,
        "title": "طلب جديد",
        "orderid": "59038",
        "createdAt": "2022-08-03T22:40:00.867Z",
        "updatedAt": "2022-08-03T22:40:00.867Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ebf2441a7eac270700422d",
        "id": 3166,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "6294d8015d170a2c90593259",
        "type": "text",
        "content": "لقد تم اضافة طلب جديد",
        "phone": 966543437660,
        "title": "طلب جديد",
        "orderid": "6561",
        "createdAt": "2022-08-04T16:22:28.603Z",
        "updatedAt": "2022-08-04T16:22:28.603Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ec05dd1a7eac27070313e3",
        "id": 5746,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62e530346f5cf8bac4706225",
        "type": "text",
        "content": "لقد تم اضافة طلب جديد",
        "phone": 966543437660,
        "title": "طلب جديد",
        "orderid": "5832",
        "createdAt": "2022-08-04T17:46:05.650Z",
        "updatedAt": "2022-08-04T17:46:05.650Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ed946b8a20b4387e442f19",
        "id": 3402,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "6294d8015d170a2c90593259",
        "type": "text",
        "content": "لقد تم اضافة طلب جديد",
        "phone": 966543437660,
        "title": "طلب جديد",
        "orderid": "6561",
        "createdAt": "2022-08-05T22:06:35.167Z",
        "updatedAt": "2022-08-05T22:06:35.167Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ee471e6365b247d56d85f2",
        "id": 8006,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "6294d8015d170a2c90593259",
        "type": "text",
        "content": "لقد تم اضافة طلب جديد",
        "phone": 966543437660,
        "title": "طلب جديد",
        "orderid": "85418",
        "createdAt": "2022-08-06T10:49:02.466Z",
        "updatedAt": "2022-08-06T10:49:02.466Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ee48116365b247d56d8c52",
        "id": 2967,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "6294d8015d170a2c90593259",
        "type": "text",
        "content": "لقد تم الفع من قبل الام ",
        "phone": 966543437660,
        "title": "تم الدفع",
        "orderid": "85418",
        "createdAt": "2022-08-06T10:53:05.326Z",
        "updatedAt": "2022-08-06T10:53:05.326Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ee4a316365b247d56d9a60",
        "id": 5099,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "6294d8015d170a2c90593259",
        "type": "text",
        "content": "لقد تم  طلب تمديد فترة الحضانه لمدة3  من قبل الام",
        "phone": 966543437660,
        "title": "تمديد طلب ",
        "orderid": "85418",
        "createdAt": "2022-08-06T11:02:09.074Z",
        "updatedAt": "2022-08-06T11:02:09.074Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ee53c46365b247d56ddd63",
        "id": 9256,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "6294d8015d170a2c90593259",
        "type": "text",
        "content": "لقد تم  انهاد فترة الحضانه من قبل الام",
        "phone": 966543437660,
        "title": "انها طلب ",
        "orderid": "85418",
        "createdAt": "2022-08-06T11:43:00.294Z",
        "updatedAt": "2022-08-06T11:43:00.294Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ee5e215a2c310a4effca8b",
        "id": 2473,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "6294d8015d170a2c90593259",
        "type": "text",
        "content": "لقد تم  انهاد فترة الحضانه من قبل الام",
        "phone": 966543437660,
        "title": "انها طلب ",
        "orderid": "25148",
        "createdAt": "2022-08-06T12:27:13.393Z",
        "updatedAt": "2022-08-06T12:27:13.393Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ee632a5a2c310a4effca90",
        "id": 9010,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "6294d8015d170a2c90593259",
        "type": "text",
        "content": "لقد تم  انهاد فترة الحضانه من قبل الام",
        "phone": 966543437660,
        "title": "انها طلب ",
        "orderid": "25148",
        "createdAt": "2022-08-06T12:48:42.055Z",
        "updatedAt": "2022-08-06T12:48:42.055Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ee634f6b94c10b016c7d06",
        "id": 6195,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "6294d8015d170a2c90593259",
        "type": "text",
        "content": "لقد تم  انهاد فترة الحضانه من قبل الام",
        "phone": 966543437660,
        "title": "انها طلب ",
        "orderid": "25148",
        "createdAt": "2022-08-06T12:49:19.439Z",
        "updatedAt": "2022-08-06T12:49:19.439Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62ee6410b6af9f0b1e38a922",
        "id": 2079,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "6294d8015d170a2c90593259",
        "type": "text",
        "content": "لقد تم  انهاد فترة الحضانه من قبل الام",
        "phone": 966543437660,
        "title": "انها طلب ",
        "orderid": "25148",
        "createdAt": "2022-08-06T12:52:32.210Z",
        "updatedAt": "2022-08-06T12:52:32.210Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eee4c3bf54974b36464f63",
        "id": 9043,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62e530346f5cf8bac4706225",
        "type": "text",
        "content": "لقد تم  انهاد فترة الحضانه من قبل الام",
        "phone": 966543437660,
        "title": "انها طلب ",
        "orderid": "23650",
        "createdAt": "2022-08-06T22:01:39.955Z",
        "updatedAt": "2022-08-06T22:01:39.955Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eee4e8bf54974b364651b9",
        "id": 1060,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62e530346f5cf8bac4706225",
        "type": "text",
        "content": " لقد تم تقييم الحاضنه من قبل الام ",
        "phone": 966543437660,
        "title": "تقييم طلب ",
        "orderid": "23650",
        "createdAt": "2022-08-06T22:02:16.572Z",
        "updatedAt": "2022-08-06T22:02:16.572Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eee678bf54974b36466b96",
        "id": 2252,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62e530346f5cf8bac4706225",
        "type": "text",
        "content": "لقد تم  انهاد فترة الحضانه من قبل الام",
        "phone": 966543437660,
        "title": "انها طلب ",
        "orderid": "23650",
        "createdAt": "2022-08-06T22:08:56.859Z",
        "updatedAt": "2022-08-06T22:08:56.859Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eee6a5bf54974b36466e77",
        "id": 8074,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62e530346f5cf8bac4706225",
        "type": "text",
        "content": "لقد تم  انهاد فترة الحضانه من قبل الام",
        "phone": 966543437660,
        "title": "انها طلب ",
        "orderid": "23650",
        "createdAt": "2022-08-06T22:09:41.956Z",
        "updatedAt": "2022-08-06T22:09:41.956Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62eee6d6bf54974b364671a3",
        "id": 1057,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62e530346f5cf8bac4706225",
        "type": "text",
        "content": "لقد تم  انهاد فترة الحضانه من قبل الام",
        "phone": 966543437660,
        "title": "انها طلب ",
        "orderid": "23650",
        "createdAt": "2022-08-06T22:10:30.172Z",
        "updatedAt": "2022-08-06T22:10:30.172Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62f03f05bcc9c071a6e8174e",
        "id": 2333,
        "sender": "62f02d3c5992b468d6fabd47",
        "receiver": "62f02de35992b468d6fac6f5",
        "type": "text",
        "content": "لقد تم اضافة طلب جديد",
        "phone": 966543437660,
        "title": "طلب جديد",
        "orderid": "10356",
        "createdAt": "2022-08-07T22:39:01.359Z",
        "updatedAt": "2022-08-07T22:39:01.359Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62f04532bcc9c071a6e841c1",
        "id": 112907,
        "sender": "62f02de35992b468d6fac6f5",
        "receiver": "62f02d3c5992b468d6fabd47",
        "type": "text",
        "content": "تمت الموافقة على طلبك",
        "phone": 96605777777,
        "title": "موافقة على طلب جديد",
        "orderid": "10356",
        "createdAt": "2022-08-07T23:05:22.325Z",
        "updatedAt": "2022-08-07T23:05:22.325Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62f04578bcc9c071a6e84448",
        "id": 2818,
        "sender": "62f02d3c5992b468d6fabd47",
        "receiver": "62f02de35992b468d6fac6f5",
        "type": "text",
        "content": "لقد تم الفع من قبل الام ",
        "phone": 966543437660,
        "title": "تم الدفع",
        "orderid": "10356",
        "createdAt": "2022-08-07T23:06:32.814Z",
        "updatedAt": "2022-08-07T23:06:32.814Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62f04b56bcc9c071a6e8a3b8",
        "id": 2675,
        "sender": "62f02d3c5992b468d6fabd47",
        "receiver": "62f02de35992b468d6fac6f5",
        "type": "text",
        "content": "لقد تم  طلب تمديد فترة الحضانه لمدة2  من قبل الام",
        "phone": 966543437660,
        "title": "تمديد طلب ",
        "orderid": "10356",
        "createdAt": "2022-08-07T23:31:34.976Z",
        "updatedAt": "2022-08-07T23:31:34.976Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62f04e55222597751d08b208",
        "id": 9989,
        "sender": "62f02d3c5992b468d6fabd47",
        "receiver": "62f02de35992b468d6fac6f5",
        "type": "text",
        "content": "لقد تم  انهاد فترة الحضانه من قبل الام",
        "phone": 966543437660,
        "title": "انها طلب ",
        "orderid": "10356",
        "createdAt": "2022-08-07T23:44:21.989Z",
        "updatedAt": "2022-08-07T23:44:21.989Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62f04e69222597751d08b291",
        "id": 5678,
        "sender": "62f02d3c5992b468d6fabd47",
        "receiver": "62f02de35992b468d6fac6f5",
        "type": "text",
        "content": " لقد تم تقييم الحاضنه من قبل الام ",
        "phone": 966543437660,
        "title": "تقييم طلب ",
        "orderid": "10356",
        "createdAt": "2022-08-07T23:44:41.158Z",
        "updatedAt": "2022-08-07T23:44:41.158Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62f0f7a8e85b7a7ef344f64a",
        "id": 1,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62cb3ff3268cef29807784ab",
        "type": "text",
        "content": "you have requested 12333 !",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-08T11:46:48.292Z",
        "updatedAt": "2022-08-08T11:46:48.292Z",
        "__v": 0
    },
    {
        "is_read": false,
        "_id": "62f0f9b9e85b7a7ef3451542",
        "id": 1,
        "sender": "62817081ead6c60a7dbdedb4",
        "receiver": "62cb3ff3268cef29807784ab",
        "type": "text",
        "content": "you have requested 12333 !",
        "phone": 966543437660,
        "title": "تنبيه من حاصنه",
        "orderid": "3333",
        "createdAt": "2022-08-08T11:55:37.758Z",
        "updatedAt": "2022-08-08T11:55:37.758Z",
        "__v": 0
    }
]
  
  
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

console.log(notfication.length)
 
//sendApplication()

  //console.log(orders)

  // function createUsersOnline() {
  
     
  //   return onlyWithUsernames;
  // }
   