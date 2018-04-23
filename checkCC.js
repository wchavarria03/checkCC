/**
 * CheckCC - Checks a given string/number for a valid credit card
 * @returns:
 *    -1 Invalid
 *          1         Mastercard
 *          2         Visa
 *          3         Amex
 *          4         Diners club
 *          5         Discover
 *          6         EnRoute 
 *          7         JCB
 */

  module.exports =  function checkCC(a) {
    String.prototype.startsWith = function (a) {
      return a.match("^" + a) == a
    }, 
    Array.prototype.has = function (a, b) { 
      for (var c = 0; c < this.length; c++)
        if (this[c] == a) return b ? c : !0; 
      return !1 
    }, 
    a = a.replace(/[^0-9]/g, ""); 
    for (var b = [], c = 0, d = 0, e = a; 0 !== e;)
      b[c] = e % 10, e -= b[c], e /= 10, c++ , d++; 
    if (13 > d) 
      return "invalid"; 
    var f = "invalid"; 
    if (a.startsWith("5")) { 
      if (16 != d) return "invalid"; 
      f = 1 
    } else if (a.startsWith("4")) { 
      if (16 != d && 13 != d) return "invalid";
      f = 2 
    } else if (a.startsWith("34") || a.startsWith("37")) { 
      if (15 != d) return "invalid"; 
      f = 3 
    } else if (a.startsWith("36") || a.startsWith("38") || a.startsWith("300") || a.startsWith("301") || a.startsWith("302") || a.startsWith("303") || a.startsWith("304") || a.startsWith("305")) { 
      if (14 != d) return "invalid"; f = 4 
    } else if (a.startsWith("6011")) { 
      if (15 != d && 16 != d) 
        return "invalid"; 
      f = 5 
    } else { 
      if (a.startsWith("2014") || a.startsWith("2149")) 
        return 15 != d && 16 != d ? "invalid" : 6; 
      if (a.startsWith("3")) { 
        if (16 != d) 
          return "invalid"; 
        f = 7 
      } else { 
        if (!a.startsWith("2131") && !a.startsWith("1800")) 
          return "invalid"; 
        if (15 != d) 
          return "invalid"; 
        f = 7 
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
      }, return_vals["" + f])
  };