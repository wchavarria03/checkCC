const checkCC = require('./checkCC');

describe('Should be Invalid if', () => {
  test('Credit Card has a length of less than 16', () => {
    expect(checkCC('213')).toBe({
      code: -1,
      label: 'invalid'
    });
  });
});

describe('Should be Valid if', () => {
  test('Credit Card has a length of 16', () => {
    expect(checkCC('4111111111111111')).not.toBe({
      code: -1,
      label: 'invalid'
    });
  });
});