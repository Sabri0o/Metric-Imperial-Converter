const { conversionRates, spellUnit } = require("../conversionRates");
function ConvertHandler() {
  this.getNum = function (input) {
    if (input !== undefined) {
      let regex = RegExp("[a-zA-Z]");
      let end = regex.exec(input).index;
      let initNum = input.slice(0, end);
      if (initNum.split("/").length === 2) {
        return (
          Number(initNum.split("/")[0]) / Number(initNum.split("/").slice(-1))
        );
      } else if (initNum === "") {
        return 1;
      }
      return Number(initNum);
    } else {
      undefined;
    }
  };

  this.getUnit = function (input) {
    if (input !== undefined) {
      let regex = RegExp("[a-zA-Z]");
      let start = regex.exec(input).index;
      return input.slice(start).toLowerCase() === "l"
        ? "L"
        : input.slice(start).toLowerCase();
    } else return undefined;
  };

  this.getReturnUnit = function (initUnit) {
    if (initUnit !== undefined) {
      let result;
      switch (this.getUnit(initUnit.toLowerCase())) {
        case "gal":
          result = "L";
          break;
        case "lbs":
          result = "kg";
          break;
        case "mi":
          result = "km";
          break;
        case "L":
        case "l":
          result = "gal";
          break;
        case "kg":
          result = "lbs";
          break;
        case "km":
          result = "mi";
          break;
        default:
          result = false;
      }
      return result;
    } else {
      return undefined;
    }
  };

  // this.spellOutUnit = function (unit) {
  //   let result;
  //   switch (unit) {
  //     case "gal":
  //       result = "gallons";
  //       break;
  //     case "lbs":
  //       result = "pounds";
  //       break;
  //     case "mi":
  //       result = "miles";
  //       break;
  //     case "L":
  //     case "l":
  //       result = "liters";
  //       break;
  //     case "kg":
  //       result = "kilograms";
  //       break;
  //     case "km":
  //       result = "kilometers";
  //       break;
  //     default:
  //       result = false;
  //   }
  //   return result;
  // };

  this.convert = function (initNum, initUnit, returnUnit) {
    let result;
    if (["°C", "°F", "k"].includes(initUnit)) {
      result = conversionRates[initUnit][returnUnit](Number(initNum));
    } else {
      result = initNum * conversionRates[initUnit][returnUnit];
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let precReturnNum = returnUnit ? returnNum.toFixed(5) : returnNum;
    let result;
    result = `${initNum} ${spellUnit[initUnit]} converts to ${precReturnNum} ${spellUnit[returnUnit]}}`;
    // switch (initUnit) {
    //   case "gal":
    //     result = `${initNum} ${this.spellOutUnit(
    //       "gal"
    //     )} converts to ${precReturnNum} ${this.spellOutUnit(
    //       this.getReturnUnit("gal")
    //     )}`;
    //     break;
    //   case "lbs":
    //     result = `${initNum} ${this.spellOutUnit(
    //       "lbs"
    //     )} converts to ${precReturnNum} ${this.spellOutUnit(
    //       this.getReturnUnit("lbs")
    //     )}`;
    //     break;
    //   case "mi":
    //     result = `${initNum} ${this.spellOutUnit(
    //       "mi"
    //     )} converts to ${precReturnNum} ${this.spellOutUnit(
    //       this.getReturnUnit("mi")
    //     )}`;
    //     break;
    //   case "L":
    //     result = `${initNum} ${this.spellOutUnit(
    //       "L"
    //     )} converts to ${precReturnNum} ${this.spellOutUnit(
    //       this.getReturnUnit("L")
    //     )}`;
    //     break;
    //   case "kg":
    //     result = `${initNum} ${this.spellOutUnit(
    //       "kg"
    //     )} converts to ${precReturnNum} ${this.spellOutUnit(
    //       this.getReturnUnit("kg")
    //     )}`;
    //     break;
    //   case "km":
    //     result = `${initNum} ${this.spellOutUnit(
    //       "km"
    //     )} converts to ${precReturnNum} ${this.spellOutUnit(
    //       this.getReturnUnit("km")
    //     )}`;
    //     break;
    //   default:
    //     result = false;
    // }
    return result;
  };
}

module.exports = ConvertHandler;
