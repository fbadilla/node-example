const get = (req,res) =>{
    console.log(req.url);
    res.status(200).json({token : ''});
};

const postToken = ( req, res) =>{
    console.log(req.url);
    res.status(200).json({token : '1234-1234-1234-1234'});
};

module.exports = {
    get,
    postToken
}