module.exports= reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide age")
    }
    else if(req.query.age<18){
        res.end('You cannot this page You are Below 18')
    }
    else {
        next();
    }
}