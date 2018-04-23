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

!function checkCC(creditCard) {
  function descomposeIntoArray(creditCard) {
    for (var b = [], c = 0, d = 0, e = creditCard; 0 !== e;){
      b[c] = e % 10;
      e -= b[c];
      e /= 10; 
      c++;
      d++; 
    }
    return b;
  }

  creditCard.checkCC = function (creditCard) {
    String.prototype.startsWith = function (string) {
      return this.match("^" + string) == string;
    };
    // Array.prototype.has = function (a, b) { 
    //   for (var c = 0; c < this.length; c++)
    //     if (this[c] == a) return b ? c : !0; 
    //   return !1 
    // };

    creditCard = creditCard.replace(/[^0-9]/g, ""); //clean not numberical values
    // for (var b = [], c = 0, d = 0, e = creditCard; 0 !== e;)
    //   b[c] = e % 10, e -= b[c], e /= 10, c++ , d++; 
    descomposeIntoArray(creditCard)
    if (13 > d)
      return "invalid"; 
    
    var status = "invalid"; 
    if (creditCard.startsWith("5")) { 
      if (16 != d) return "invalid"; 
      status = 1 
    } else if (creditCard.startsWith("4")) { 
      if (16 != d && 13 != d) return "invalid";
      status = 2 
    } else if (creditCard.startsWith("34") || creditCard.startsWith("37")) { 
      if (15 != d) return "invalid"; 
      status = 3 
    } else if (creditCard.startsWith("36") || creditCard.startsWith("38") || creditCard.startsWith("300") || creditCard.startsWith("301") || creditCard.startsWith("302") || creditCard.startsWith("303") || creditCard.startsWith("304") || creditCard.startsWith("305")) { 
      if (14 != d) return "invalid"; status = 4 
    } else if (creditCard.startsWith("6011")) { 
      if (15 != d && 16 != d) 
        return "invalid"; 
      status = 5 
    } else { 
      if (creditCard.startsWith("2014") || creditCard.startsWith("2149")) 
        return 15 != d && 16 != d ? "invalid" : 6; 
      if (creditCard.startsWith("3")) { 
        if (16 != d) 
          return "invalid"; 
        status = 7 
      } else { 
        if (!creditCard.startsWith("2131") && !creditCard.startsWith("1800")) 
          return "invalid"; 
        if (15 != d) 
          return "invalid"; 
        status = 7 
      } 
    } 
    var h, g = 0; 
    for (h = 1; d > h; h += 2) { 
      var i = 2 * b[h]; 
      g += i % 10, g += (i - i % 10) / 10 
    } 
    for (h = 0; d > h; h += 2)
      g += b[h]; 
    return 0 !== g % 10 ? "invalid" 
      : (return_vals = {
        "-1": "invalid", 
        1: "master",
        2: "Visa", 
        3: "american_express", 
        4: "invalid", 
        5: "Discover", 
        6: "invalid", 
        7: "invalid" 
      }, return_vals["" + status])
  }
}(this);