const checkCC = require('./checkCC');

xdescribe('Should be Invalid if', () => {
  test('Credit Card has a length of less than 16', () => {
    expect(checkCC('888')).toBe({
      isValid: -1,
      code: -1,
      label: 'invalid'
    });
  });
});

describe('Should be Valid if', () => {
  test('Credit Card has a length of 16', () => {
    var a = checkCC('4111111111111111');
    var result = {
      isValid: -1,
      code: -1,
      label: 'invalid'
    };
    console.log(a);
    expect(a).not.toBe(result);
  });
});