const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

app.use('/', route);


// app.get('/',function(req,res){
//     const ipAddress = req.socket.remoteAddress ;
//     console.log(ipAddress);
//     // res.send({data:ipAddress});

// })

app.listen(3000, () => 
    console.log('Express app running on port  3000')
    )

// app.listen(process.env.PORT || 3000, function () {
//     console.log('Express app running on port ' + (process.env.PORT || 3000))
// });
