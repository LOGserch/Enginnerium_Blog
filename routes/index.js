
const path = require('path');//path es para unir directorios
var express = require('express');
//const nodemailer = require('nodemailer');

var router = express.Router();//para crear multiples rutas

/* GET home page. */

router.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, '../public/views/article_demo.html'));
  res.render(path.join('index'));
  
  //res.sendFile(path.join(__dirname,'../public/js/index.js'));
});
router.get('/article', function(req, res, next) {
  //res.sendFile(path.join(__dirname, '../views/article.html'));
  res.render(path.join('article'));
});
router.get('/section', function(req, res, next) {
  //res.sendFile(path.join(__dirname, '../views/section.html'));
  res.render(path.join('section'));
});
router.get('/about', function(req, res) {
  //res.sendFile(path.join(__dirname, '../public/views/article_demo.html'));
  res.render(path.join('about'));
  
  //res.sendFile(path.join(__dirname,'../public/js/index.js'));
});


router.post('/send-comment', async(req, res) =>{
  console.log(req.body);
  res.set('received');
 
});
/** 
router.post('/send-comment', async(req, res) =>{
  const { commentary,name,email } = console.log(req.body);//cuerpo de peticion
  //console.log(req.params);//parametros de peticion
  Chtml = `
    <h1>email: ${email}</h1>
    <h1>Name: ${name}</h1>
    <h1>commentary: ${commentary}</h1>
  `;
//transport que pide valores para la configuracion de envio
  const transporter =nodemailer.createTransport({
      host: '',//host del correo, a donde va a llegar
      port: '',
      secure: false,//con ssl o sin ssl
      auth: {
        user:'',
        pass: ''
      },
      tls:{
        rejectUnauthorized: false
      }
  });

const info = await transporter.sendMail({
    from: "'desde' <sale desde>",
    to: 'vargas.sergio1157@gmail.com',
    subject: 'comentario nuevo '+ '${Chtml.name}',
    text: ' ',
    html: Chtml
  });

  console.log('message sent', info.messageId);

  res.send('POST REQUEST RECEIVED');
});

*/
module.exports = router;
