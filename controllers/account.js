const get = (req,res) =>{
    console.log(req.url);
    res.status(200).json({user : 'fco badilla'})
};

module.exports = {
    get
}