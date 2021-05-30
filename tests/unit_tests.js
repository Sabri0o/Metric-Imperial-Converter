const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("convertHandler should correctly read a whole number input.", function () {
    assert.exists(convertHandler.getNum("1kg"), "input has been defined");
  });

  test("convertHandler should correctly read a decimal number input.", function () {
    assert.equal(convertHandler.getNum("1.5kg"), 1.5);
  });

  test("convertHandler should correctly read a fractional input.", function () {
    assert.equal(convertHandler.getNum("1/2kg"), 0.5);
  });

  test("convertHandler should correctly read a fractional input with a decimal.", function () {
    assert.equal(convertHandler.getNum("1/0.5kg"), 2);
  });

  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", function () {
    assert.isNaN(convertHandler.getNum("3/2/3kg"));
  });

  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", function () {
    assert.equal(convertHandler.getNum("kg"), 1);
  });

  test("convertHandler should correctly read each valid input unit.", function () {
    assert.equal(convertHandler.getUnit("1l"), "L");
  });

  test("convertHandler should correctly return an error for an invalid input unit.", function () {
    assert.isNotTrue(convertHandler.getReturnUnit("1kilo"));
  });

  test("convertHandler should return the correct return unit for each valid input unit.", function () {
    assert.equal(convertHandler.getReturnUnit("1kg"), "lbs");
  });

  test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", function () {
    assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
  });

  test("convertHandler should correctly convert gal to L.", function () {
    assert.equal(convertHandler.convert(1, "gal","L"), 3.78541);
  });

  test("convertHandler should correctly convert L to gal.", function () {
    assert.equal(convertHandler.convert(1, "L",'gal'), 0.264172);
  });

  test("convertHandler should correctly convert mi to km.", function () {
    assert.equal(convertHandler.convert(1, "mi",'km'), 1.60934);
  });

  test("convertHandler should correctly convert km to mi.", function () {
    assert.equal(convertHandler.convert(1, "km",'mi'), 0.621371);
  });

  test("convertHandler should correctly convert lbs to kg.", function () {
    assert.equal(convertHandler.convert(1, "lbs",'kg'), 0.453592);
  });

  test("convertHandler should correctly convert kg to lbs.", function () {
    assert.equal(convertHandler.convert(1, "kg",'lbs'), 2.20462);
  });
});
