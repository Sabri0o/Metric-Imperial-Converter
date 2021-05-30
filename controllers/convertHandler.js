const { conversionRates, spellUnit } = require("../conversionRates");
function ConvertHandler() {
  this.getNum = function (input) {
    // if (input !== undefined) {
    //   let regex = RegExp("[a-zA-Z]");
    //   let end = regex.exec(input).index;
    //   let initNum = input.slice(0, end);
    //   if (initNum.split("/").length === 2) {
    //     return (
    //       Number(initNum.split("/")[0]) / Number(initNum.split("/").slice(-1))
    //     );
    //   } else if (initNum === "") {
    //     return 1;
    //   }
    //   return Number(initNum);
    // } else {
    //   undefined;
    // }
  };

  this.spellOutUnit = function(unit) {
    let result;
    result = spellUnit[unit]
    return result;
  };

  this.getUnit = function (input) {
    // if (input !== undefined) {
    //   let regex = RegExp("[a-zA-Z]");
    //   let start = regex.exec(input).index;
    //   return input.slice(start).toLowerCase() === "l"
    //     ? "L"
    //     : input.slice(start).toLowerCase();
    // } else return undefined;
  };

  this.getReturnUnit = function (initUnit) {
    // console.log('getReturnUnit',initUnit)
    // if (initUnit !== undefined) {
    //   let result;
    //   switch (this.getUnit(initUnit.toLowerCase())) {
    //     case "gal":
    //       result = "L";
    //       break;
    //     case "lbs":
    //       result = "kg";
    //       break;
    //     case "mi":
    //       result = "km";
    //       break;
    //     case "L":
    //     case "l":
    //       result = "gal";
    //       break;
    //     case "kg":
    //       result = "lbs";
    //       break;
    //     case "km":
    //       result = "mi";
    //       break;
    //     default:
    //       result = false;
    //   }
    //   return result;
    // } else {
    //   return undefined;
    // }
  };

  this.convert = function (initNum, initUnit, returnUnit) {
    // console.log('initUnit;',initUnit)
    // console.log('this.getReturnUnit(initUnit)',this.getReturnUnit(initUnit))
    // if (this.getReturnUnit(initUnit) === false){
    //   return false
    // }
    let result;
    if (["°C", "°F", "k"].includes(initUnit)) {
      result = conversionRates[initUnit][returnUnit](Number(initNum));
    } else {
      result = initNum * conversionRates[initUnit.toLowerCase()][returnUnit.toLowerCase()];
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let precReturnNum = returnUnit ? returnNum : returnNum;
    let result;
    result = `${initNum} ${spellUnit[initUnit]} converts to ${Number(precReturnNum).toFixed(5)} ${spellUnit[returnUnit]}`;
    return result;
  };
}

module.exports = ConvertHandler;
