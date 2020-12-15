const express = require("express");
const app = express();
const port = 5000;

app.use(express.static(__dirname+'/public'));
function logger(req, res, next) {
    var now = new Date();
    if(now.getDay()===6 ||now.getDay()===7 ){
     
   res.send(404,' Sorry we are out of service now ! Try logging in during working time(Monday to Friday,from 9 to 17)')
}
    
     else if (now.getHours()<9 || now.getHours()>17){
         res.send(404,' Sorry we are out of service now ! Try logging in during working time(Monday to Friday,from 9 to 17)')
     }
    next();
  };
  app.use(logger);


app.get("/style.css", (req, res) => {
      res.sendFile(__dirname + "/Public/style.css");
    });
  app.get("/", (req, res) => {
     res.sendFile(__dirname + "/Public/home.html");
 });
 app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/Public/contact.html");
});
app.get("/service", (req, res) => {
    res.sendFile(__dirname + "/Public/sevices.html");
});

 app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
 