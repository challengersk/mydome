const express=require('express');
const path=require('path');
const app=express();

const indexrouter=require('./routes/index');
const phonerouter=require('./routes/phone');
const banerrouter=require('./routes/bannerRouter');

app.set('views',path.resolve(__dirname,'./views'));
app.set('view engine','ejs');

app.use(express.static(path.resolve(__dirname, './public')));

app.use('/',indexrouter)
app.listen(9000)