var express = require('express');
var router = express();

router.get('/', function (req, res) {
    const wes ={ name:'wes',age:100,cool:true};
   res.send('Hello World!!!');
   //res.json(wes);
})

module.exports=router;

var server = router.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})
