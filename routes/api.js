const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.route("/api/convert").get(function (req, res) {
    // console.log("req.query.input:", req.query.input);


    // console.log("initNum:", convertHandler.getNum(req.query.input));
    let initNum = convertHandler.getNum(req.query.input) || req.query.amount;

    let initUnit = convertHandler.getUnit(req.query.input) || req.query.from;
    // console.log("initUnit:", convertHandler.getUnit(req.query.input));


    let returnUnit = convertHandler.getReturnUnit(convertHandler.getUnit(req.query.input)) || req.query.to;
    // console.log("returnUnit:", returnUnit);
    // console.log(initNum, initUnit, returnUnit)

    // console.log("convert:", convertHandler.convert(initNum, initUnit, returnUnit));
    let returnNum = convertHandler.convert(initNum, initUnit, returnUnit);
    let getString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    // console.log(
    //   "initNum:",
    //   initNum,
    //   "initUnit:",
    //   "initUnit:",
    //   initUnit,
    //   "returnUnit:",
    //   returnUnit,
    //   "returnNum:",
    //   returnNum,
    //   "getString:",
    //   getString
    // );
    if (!initNum && !returnUnit) {
      res.send("invalid number and unit");
    } else if (!initNum) {
      res.send("invalid number");
    } else if (!returnUnit) {
      res.send("invalid unit");
    } else {
      res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: Number(returnNum.toFixed(5)),
        returnUnit: returnUnit,
        string: getString,
      });
    }
  });
};
