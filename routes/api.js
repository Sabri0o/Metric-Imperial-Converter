'use strict';

const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get(function(req,res){
    console.log('query',req.query.input)
    let initNum = convertHandler.getNum(req.query.input)
    let initUnit = convertHandler.getUnit(req.query.input)
    let returnUnit = convertHandler.getReturnUnit(req.query.input)
    let returnNum = convertHandler.convert(initNum,initUnit)
    let getString = convertHandler.getString(initNum,initUnit,returnNum,returnUnit)
    if(initNum && initUnit){
      res.json({
        initNum:initNum,
        initUnit:initUnit,
        returnUnit:returnUnit,
        returnNum:returnNum,
        string:getString})
    }
    else{
      res.send("invalid number")
    }
  })
};
