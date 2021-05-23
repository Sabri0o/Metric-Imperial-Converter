const ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function(app){
    let convertHandler = new ConvertHandler()
    app.route('api/convert').get(function(req,res){
        console.log('query',req.query.input)
        res.send(convertHandler.getNum(req.query.input))
    })
}