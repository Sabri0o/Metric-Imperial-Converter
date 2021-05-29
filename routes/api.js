const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get(function(req,res){
    console.log('query',req.query.input) 
    let initNum = convertHandler.getNum(req.query.input) || req.query.amount
    let initUnit = convertHandler.getUnit(req.query.input) || req.query.from
    let returnUnit = convertHandler.getReturnUnit(req.query.input) || req.query.to
    let returnNum = convertHandler.convert(initNum,initUnit,returnUnit)
    let getString = convertHandler.getString(initNum,initUnit,returnNum,returnUnit)
    if(!initNum && !returnUnit){
      res.send("invalid number and unit")
    } else if(!initNum){
      res.send("invalid number")
      } else if(!returnUnit){
        res.send("invalid unit")
        } else {
          res.json({
            initNum:initNum,
            initUnit:initUnit,
            returnNum: Number(returnNum.toFixed(5)),
            returnUnit:returnUnit,
            string:getString})
          }
        })
};
