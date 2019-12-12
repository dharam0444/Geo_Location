/* Get user machine deatils */
const geoip = require('geoip-lite');

app.get('/userIP' ,function(req,res,next) {
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    (async () => {
        var indiaTime = new Date().toLocaleString("en-US", {timeZone: geo.timezone});
        indiaTime = new Date(indiaTime); 
      var geo = geoip.lookup(ip);
       console.log(ip)
       console.log(geo)
       console.log('India time: '+indiaTime.toLocaleString())
       res.render('IP',{'public_ip':ip,'geo':geo,'India_time':indiaTime.toLocaleString()})
      })();   

  })
/*End  Get user machine deatils */ 