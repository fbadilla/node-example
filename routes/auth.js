const router = require('express').Router();

router.post('/token', (req, res)=>{
    console.log(req.url);
    res.status(200).json({token : ''});
});

router.post('/token', (req, res)=>{
    console.log(req.url);
    res.status(200).json({token : '1234-1234-1234-1234'});
});

module.exports =router;