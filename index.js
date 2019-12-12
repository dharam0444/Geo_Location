var express = require('express');
var router = express.Router();
const geoip = require('geoip-lite');
// const publicIp = require('public-ip');
// var ip = require('ip');
// const request  = require('request')
// const requestIp = require('request-ip');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/userIP' ,function(req,res,next) {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  (async () => {
    var geo = geoip.lookup(ip);
      // used for get the timezone diffrence

        var indiaTime = new Date().toLocaleString("en-US", {timeZone: geo.timezone});
        indiaTime = new Date(indiaTime);
          console.log(ip)
          console.log(geo)
          console.log('India time: '+indiaTime.toLocaleString())
     res.render('IP',{'public_ip':ip,'geo':geo,'India_time':indiaTime.toLocaleString()})
    })();   
})

module.exports = router;
