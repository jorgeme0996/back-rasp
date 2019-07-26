const express=require('express')
const app= express()
const bodyParser= require('body-parser')
const cors=require('cors')
//const Raspi = require('raspi-io').RaspiIO
const five = require('johnny-five')


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//require("./router/Funtion")(app);

//rutas

app.get('/led', (req, res)=>{

    //const Raspi = require('raspi-io').RaspiIO;
    //const five = require('johnny-five');
    /* const board = new five.Board({
      io: new Raspi()
    });
    
    board.on('ready', () => {
    
      // Create an Led on pin 7 (GPIO4) on P1 and strobe it on/off
      // Optionally set the speed; defaults to 100ms
      (new five.Led('P1-7')).on();
    
    });

    // Leer parametros por params
    // const params = req.params
    // var Motor= new five.Motor([9,8,11]);
    // new five.Motor({
    //     pins:{
    //         pwm:9,
    //         dir:3,
    //         cdir: 5    
    //     }
    // })
    // var Motor1= new five.Motor([9,8,11]);
    // new five.Motor({
    //     pins:{
    //         pwm:9,
    //         dir:8,
    //         cdir:10     
    //     }
    // })
    // var Motor2= new five.Motor([9,8,11]);
    // new five.Motor({
    //     pins:{
    //         pwm:9,
    //         dir:11,
    //         cdir:13     
    //     }
    // })
 */

    res.json({
        ok:true
    })

});


app.listen( 3000, ()=>{
    console.log('Hola desde el puerto 3000');
    
})