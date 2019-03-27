const express=require('express')
const banner=express();

  banner.get('/',(req,res)=>{
      res.render('index')
  })

module.exports=banner;