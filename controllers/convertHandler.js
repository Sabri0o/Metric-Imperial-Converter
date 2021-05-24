function ConvertHandler() {
  this.getNum = function (input) {
    let regex = RegExp("[a-zA-Z]");
    let end = regex.exec(input).index;
    let initNum = input.slice(0, end);
    if (initNum.split("/").length === 2) {
      return (
        Number(initNum.split("/")[0]) / Number(initNum.split("/").slice(-1))
      );
    }
    return Number(initNum);
  };

  this.getUnit = function (input) {
    let regex = RegExp("[a-zA-Z]");
    let start = regex.exec(input).index;
    return input.slice(start).toLowerCase() === "l" ? "L" : input.slice(start);
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
    let result;
    //'3.1 miles converts to 4.98895 kilometers'
    switch (initUnit) {
      case "gal":
        result = `${initNum} gallons converts to ${returnNum} liters`;
        break;
      case "lbs":
        result = `${initNum} pounds converts to ${returnNum} kilograms`;
        break;
      case "mi":
        result = `${initNum} miles converts to ${returnNum} kilometers`;
        break;
      case "L":
        result = `${initNum} liters converts to ${returnNum} gallons`;
        break;
      case "kg":
        result = `${initNum} kilograms converts to ${returnNum} pounds`;
        break;
      case "km":
        result = `${initNum} kilometers converts to ${returnNum} miles`;
        break;
      default:
        result = false;
    }
    return result;
  };
}

module.exports = ConvertHandler;
