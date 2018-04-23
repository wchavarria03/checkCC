/**
 * Source: Base code from Unknow Source. (If based code is yours let me know and I will refer you here)
 * CheckCC - Checks a given string/number for a valid credit card
 * @returns:
 *  {
 *    isValid:  (-1 invalid, 1 valid),
 *    type: { 
 *      code: x,
 *      label y
 *    }
 * }
 * 
 *       Code (x)    Label (y)
 *          1         Mastercard
 *          2         Visa
 *          3         Amex
 *          4         Diners club
 *          5         Discover
 *          6         EnRoute
 *          7         JCB
 **/

module.exports = function checkCC(creditCard) {
  const ccTypes = {
    "-1": { code: -1, label: "invalid"},
    1: {code: 1, label: "master"},
    2: {code: 2, label: "visa"},
    3: {code: 3, label: "american_express"},
    4: {code: 4, label: "invalid"},
    5: {code: 5, label: "discover"},
    6: {code: 6, label: "invalid"},
    7: {code: 7, label: "invalid"},
  };

  function __returnResult (isValid, code) {
    var res = ccTypes["" + code];
    res.isValid = isValid;
    return res;
  }
  function __invalidResponse() {
    var code = -1; //invalid
    var isValid = -1; //invalid
    return __returnResult(isValid, code);
  };

  function __descomposeIntoArray(creditCard) {
    for (var creditCardArray = [], index = 0, tempCC = creditCard; 0 !== tempCC; index++) {
      creditCardArray[index] = tempCC % 10;
      tempCC -= creditCardArray[index];
      tempCC /= 10;
    }
    return creditCardArray;
  };

  function __addStartWithProtoEvent(text, string) {
    String.prototype.startsWith = function (string) {
      return this.match("^" + string) == string;
    };
  };

  function __cleanCCParameter(creditCard) {
    return creditCard.replace(/[^0-9]/g, ""); 
  }

  creditCard.checkCC = function (creditCard) {
    __addStartWithProtoEvent();
    creditCard = __cleanCCParameter(creditCard);
    var creditCardArray = __descomposeIntoArray(creditCard);
    var creditCardLength = creditCard.length;
    
    if (creditCardLength < 13) {
      return __invalidResponse();
    }
    
    var isValid = -1;
    var code = -1;

    if (creditCard.startsWith("5")) {
      if (creditCardLength === 16) {
        isValid = 1;
      }
      code = 1;
    } else if (creditCard.startsWith("4")) { 
      if (creditCardLength === 16 || creditCardLength === 13) {
        isValid = 1;
      }
      code = 2;
    } else if (creditCard.startsWith("34") || creditCard.startsWith("37")) { 
      if (creditCardLength === 15) {
        isValid = 1;
      }
      code = 3;
    } else if (creditCard.startsWith("36")
      || creditCard.startsWith("38")
      || creditCard.startsWith("300")
      || creditCard.startsWith("301")
      || creditCard.startsWith("302")
      || creditCard.startsWith("303")
      || creditCard.startsWith("304")
      || creditCard.startsWith("305")) { 
        if (creditCardLength === 14) {
          isValid = 1;
        }
      code = 4;
    } else if (creditCard.startsWith("6011")) {
      if (creditCardLength === 15 || creditCardLength === 16) {
        isValid = 1;
      }
      code = 5;
    } else if (creditCard.startsWith("2014") || creditCard.startsWith("2149")) {
      if (creditCardLength === 15 || creditCardLength === 16) {
        isValid = 1;
      }
      code = 6;
    } else {
      if ((creditCard.startsWith("3") && 16 === creditCardLength) 
      || (creditCard.startsWith("2131") || creditCard.startsWith("1800")) 
      || (creditCardLength === 15) ) {
        isValid = 1;
      }
      code = 7;
    }

    var h, g = 0;
    for (h = 1; creditCardLength > h; h += 2) {
      var i = 2 * creditCardArray[h];
      g += i % 10, g += (i - i % 10) / 10
    }
    for (h = 0; creditCardLength > h; h += 2) {
      g += creditCardArray[h];
    }
    isValid = 0 !== g % 10 ? -1 : isValid;
    return __returnResult(isValid, code);
  }
}(this);