function ConvertHandler() {
  this.getNum = function (input) {
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
  };

  this.getUnit = function (input) {
    let regex = RegExp("[a-zA-Z]");
    let start = regex.exec(input).index;
    return input.slice(start).toLowerCase() === "l"
      ? "L"
      : input.slice(start).toLowerCase();
  };

  this.getReturnUnit = function (initUnit) {
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
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "mi":
        result = "miles";
        break;
      case "L":
      case "l":
        result = "liters";
        break;
      case "kg":
        result = "kilograms";
      case "km":
        result = "kilometers";
        break;
      default:
        result = false;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "L":
      case "l":
        result = initNum / galToL;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = false;
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let precReturnNum = returnUnit ? returnNum.toFixed(5) : returnNum;
    let result;
    switch (initUnit) {
      case "gal":
        result = `${initNum} ${this.spellOutUnit(
          "gal"
        )} converts to ${precReturnNum} ${this.spellOutUnit(
          this.getReturnUnit("gal")
        )}`;
        break;
      case "lbs":
        result = `${initNum} ${this.spellOutUnit(
          "lbs"
        )} converts to ${precReturnNum} ${this.spellOutUnit(
          this.getReturnUnit("lbs")
        )}`;
        break;
      case "mi":
        result = `${initNum} ${this.spellOutUnit(
          "mi"
        )} converts to ${precReturnNum} ${this.spellOutUnit(
          this.getReturnUnit("mi")
        )}`;
        break;
      case "L":
        result = `${initNum} ${this.spellOutUnit(
          "L"
        )} converts to ${precReturnNum} ${this.spellOutUnit(
          this.getReturnUnit("L")
        )}`;
        break;
      case "kg":
        result = `${initNum} ${this.spellOutUnit(
          "kg"
        )} converts to ${precReturnNum} ${this.spellOutUnit(
          this.getReturnUnit("kg")
        )}`;
        break;
      case "km":
        result = `${initNum} ${this.spellOutUnit(
          "km"
        )} converts to ${precReturnNum} ${this.spellOutUnit(
          this.getReturnUnit("km")
        )}`;
        break;
      default:
        result = false;
    }
    return result;
  };
}

module.exports = ConvertHandler;
