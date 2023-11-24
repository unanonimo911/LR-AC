'use strict';

!function (module) {
  var IS_BOT_REGEXP = new RegExp("^.*(\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/|googlebot|baiduspider|gurujibot|yandexbot|slurp|msnbot|bingbot|facebookexternalhit|linkedinbot|twitterbot|slackbot|telegrambot|applebot|pingdom|tumblr |Embedly|spbot).*$");
  var Browser = function UserAgent(options) {
    options = options ? options : {};
    var prop;
    for (prop in options) {
      if (options.hasOwnProperty(prop) && typeof defaults[prop] != "undefined") {
        defaults[prop] = options[prop];
      }
    }
    this.options = defaults;
    this.version = "1.0.0";
    this._Versions = {
      Edge: /Edge\/([\d\w\.\-]+)/i,
      Firefox: /firefox\/([\d\w\.\-]+)/i,
      IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
      Chrome: /chrome\/([\d\w\.\-]+)/i,
      Chromium: /(?:chromium|crios)\/([\d\w\.\-]+)/i,
      Safari: /version\/([\d\w\.\-]+)/i,
      Opera: /version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,
      Ps3: /([\d\w\.\-]+)\)\s*$/i,
      Psp: /([\d\w\.\-]+)\)?\s*$/i,
      Amaya: /amaya\/([\d\w\.\-]+)/i,
      SeaMonkey: /seamonkey\/([\d\w\.\-]+)/i,
      OmniWeb: /omniweb\/v([\d\w\.\-]+)/i,
      Flock: /flock\/([\d\w\.\-]+)/i,
      Epiphany: /epiphany\/([\d\w\.\-]+)/i,
      WinJs: /msapphost\/([\d\w\.\-]+)/i,
      PhantomJS: /phantomjs\/([\d\w\.\-]+)/i,
      UC: /UCBrowser\/([\d\w\.]+)/i
    };
    this._Browsers = {
      Edge: /edge/i,
      Amaya: /amaya/i,
      Konqueror: /konqueror/i,
      Epiphany: /epiphany/i,
      SeaMonkey: /seamonkey/i,
      Flock: /flock/i,
      OmniWeb: /omniweb/i,
      Chromium: /chromium|crios/i,
      Chrome: /chrome/i,
      Safari: /safari/i,
      IE: /msie|trident/i,
      Opera: /opera|OPR/i,
      PS3: /playstation 3/i,
      PSP: /playstation portable/i,
      Firefox: /firefox/i,
      WinJs: /msapphost/i,
      PhantomJS: /phantomjs/i,
      UC: /UCBrowser/i
    };
    this._OS = {
      Windows10: /windows nt 10\.0/i,
      Windows81: /windows nt 6\.3/i,
      Windows8: /windows nt 6\.2/i,
      Windows7: /windows nt 6\.1/i,
      UnknownWindows: /windows nt 6\.\d+/i,
      WindowsVista: /windows nt 6\.0/i,
      Windows2003: /windows nt 5\.2/i,
      WindowsXP: /windows nt 5\.1/i,
      Windows2000: /windows nt 5\.0/i,
      WindowsPhone8: /windows phone 8\./,
      OSXCheetah: /os x 10[._]0/i,
      OSXPuma: /os x 10[._]1(\D|$)/i,
      OSXJaguar: /os x 10[._]2/i,
      OSXPanther: /os x 10[._]3/i,
      OSXTiger: /os x 10[._]4/i,
      OSXLeopard: /os x 10[._]5/i,
      OSXSnowLeopard: /os x 10[._]6/i,
      OSXLion: /os x 10[._]7/i,
      OSXMountainLion: /os x 10[._]8/i,
      OSXMavericks: /os x 10[._]9/i,
      OSXYosemite: /os x 10[._]10/i,
      OSXElCapitan: /os x 10[._]11/i,
      OSXSierra: /os x 10[._]12/i,
      Mac: /os x/i,
      Linux: /linux/i,
      Linux64: /linux x86_64/i,
      ChromeOS: /cros/i,
      Wii: /wii/i,
      PS3: /playstation 3/i,
      PSP: /playstation portable/i,
      iPad: /\(iPad.*os (\d+)[._](\d+)/i,
      iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
      Bada: /Bada\/(\d+)\.(\d+)/i,
      Curl: /curl\/(\d+)\.(\d+)\.(\d+)/i
    };
    this._Platform = {
      Windows: /windows nt/i,
      WindowsPhone: /windows phone/i,
      Mac: /macintosh/i,
      Linux: /linux/i,
      Wii: /wii/i,
      Playstation: /playstation/i,
      iPad: /ipad/i,
      iPod: /ipod/i,
      iPhone: /iphone/i,
      Android: /android/i,
      Blackberry: /blackberry/i,
      Samsung: /samsung/i,
      Curl: /curl/i
    };
    this.DefaultAgent = {
      isAuthoritative: true,
      isMobile: false,
      isTablet: false,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isEdge: false,
      isIECompatibilityMode: false,
      isSafari: false,
      isFirefox: false,
      isWebkit: false,
      isChrome: false,
      isKonqueror: false,
      isOmniWeb: false,
      isSeaMonkey: false,
      isFlock: false,
      isAmaya: false,
      isPhantomJS: false,
      isEpiphany: false,
      isDesktop: false,
      isWindows: false,
      isLinux: false,
      isLinux64: false,
      isMac: false,
      isChromeOS: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isBot: false,
      isCurl: false,
      isAndroidTablet: false,
      isWinJs: false,
      isKindleFire: false,
      isSilk: false,
      isCaptive: false,
      isSmartTV: false,
      isUC: false,
      isTouchScreen: false,
      silkAccelerated: false,
      colorDepth: -1,
      pixelDepth: -1,
      resolution: [],
      cpuCores: -1,
      language: "unknown",
      browser: "unknown",
      version: "unknown",
      os: "unknown",
      platform: "unknown",
      geoIp: {},
      source: "",
      hashInt: function parse(str) {
        var i;
        var chr;
        var stringLen;
        var hash = 0;
        if (str.length === 0) {
          return hash;
        }
        i = 0;
        stringLen = str.length;
        for (; i < stringLen; i++) {
          chr = str.charCodeAt(i);
          hash = (hash << 5) - hash + chr;
          hash = hash | 0;
        }
        return hash;
      },
      hashMD5: function md5(str) {
        function add(obj, var_args) {
          var this_bool;
          var other_bool;
          var lX8;
          var lY8;
          var lResult;
          lX8 = 2147483648 & obj;
          lY8 = 2147483648 & var_args;
          this_bool = 1073741824 & obj;
          other_bool = 1073741824 & var_args;
          lResult = (1073741823 & obj) + (1073741823 & var_args);
          if (this_bool & other_bool) {
            return 2147483648 ^ lResult ^ lX8 ^ lY8;
          } else if (this_bool | other_bool) {
            if (1073741824 & lResult) {
              return 3221225472 ^ lResult ^ lX8 ^ lY8;
            } else {
              return 1073741824 ^ lResult ^ lX8 ^ lY8;
            }
          } else {
            return lResult ^ lX8 ^ lY8;
          }
        }
        function II(a, b, c, d, t, s, i) {
          a = add(a, add(add(b & c | ~b & d, t), i));
          return add(a << s | a >>> 32 - s, b);
        }
        function HH(a, b, c, d, v, s, t) {
          a = add(a, add(add(b & d | c & ~d, v), t));
          return add(a << s | a >>> 32 - s, b);
        }
        function FF(a, b, c, d, p, s, t) {
          a = add(a, add(add(b ^ c ^ d, p), t));
          return add(a << s | a >>> 32 - s, b);
        }
        function GG(a, b, c, d, p, s, t) {
          a = add(a, add(add(c ^ (b | ~d), p), t));
          return add(a << s | a >>> 32 - s, b);
        }
        function convertToWordArray(str) {
          var lWordCount;
          var lMessageLength = str.length;
          var lNumberOfWords_temp1 = lMessageLength + 8;
          var lNumberOfWordsTemp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
          var lNumberOfWords = 16 * (lNumberOfWordsTemp2 + 1);
          var lWordArray = new Array(lNumberOfWords - 1);
          var lBytePosition = 0;
          var lByteCount = 0;
          for (; lByteCount < lMessageLength;) {
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | str.charCodeAt(lByteCount) << lBytePosition;
            lByteCount++;
          }
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
          lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
          lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
          return lWordArray;
        }
        function WordToHex(num) {
          var lByte;
          var i;
          var WordToHexValue = "";
          var vDec = "";
          i = 0;
          for (; i <= 3; i++) {
            lByte = num >>> 8 * i & 255;
            vDec = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + vDec.substr(vDec.length - 2, 2);
          }
          return WordToHexValue;
        }
        function utf8Encode(s) {
          s = s.replace(/\r\n/g, "\n");
          var string = "";
          var i = 0;
          for (; i < s.length; i++) {
            var c = s.charCodeAt(i);
            if (c < 128) {
              string = string + String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              string = string + String.fromCharCode(c >> 6 | 192);
              string = string + String.fromCharCode(63 & c | 128);
            } else {
              string = string + String.fromCharCode(c >> 12 | 224);
              string = string + String.fromCharCode(c >> 6 & 63 | 128);
              string = string + String.fromCharCode(63 & c | 128);
            }
          }
          return string;
        }
        var i;
        var a;
        var b;
        var c;
        var d;
        var x = [];
        str = utf8Encode(str);
        x = convertToWordArray(str);
        a = 1732584193;
        b = 4023233417;
        c = 2562383102;
        d = 271733878;
        i = 0;
        for (; i < x.length; i = i + 16) {
          a = II(a, b, c, d, x[i + 0], 7, 3614090360);
          d = II(d, a, b, c, x[i + 1], 12, 3905402710);
          c = II(c, d, a, b, x[i + 2], 17, 606105819);
          b = II(b, c, d, a, x[i + 3], 22, 3250441966);
          a = II(a, b, c, d, x[i + 4], 7, 4118548399);
          d = II(d, a, b, c, x[i + 5], 12, 1200080426);
          c = II(c, d, a, b, x[i + 6], 17, 2821735955);
          b = II(b, c, d, a, x[i + 7], 22, 4249261313);
          a = II(a, b, c, d, x[i + 8], 7, 1770035416);
          d = II(d, a, b, c, x[i + 9], 12, 2336552879);
          c = II(c, d, a, b, x[i + 10], 17, 4294925233);
          b = II(b, c, d, a, x[i + 11], 22, 2304563134);
          a = II(a, b, c, d, x[i + 12], 7, 1804603682);
          d = II(d, a, b, c, x[i + 13], 12, 4254626195);
          c = II(c, d, a, b, x[i + 14], 17, 2792965006);
          b = II(b, c, d, a, x[i + 15], 22, 1236535329);
          a = HH(a, b, c, d, x[i + 1], 5, 4129170786);
          d = HH(d, a, b, c, x[i + 6], 9, 3225465664);
          c = HH(c, d, a, b, x[i + 11], 14, 643717713);
          b = HH(b, c, d, a, x[i + 0], 20, 3921069994);
          a = HH(a, b, c, d, x[i + 5], 5, 3593408605);
          d = HH(d, a, b, c, x[i + 10], 9, 38016083);
          c = HH(c, d, a, b, x[i + 15], 14, 3634488961);
          b = HH(b, c, d, a, x[i + 4], 20, 3889429448);
          a = HH(a, b, c, d, x[i + 9], 5, 568446438);
          d = HH(d, a, b, c, x[i + 14], 9, 3275163606);
          c = HH(c, d, a, b, x[i + 3], 14, 4107603335);
          b = HH(b, c, d, a, x[i + 8], 20, 1163531501);
          a = HH(a, b, c, d, x[i + 13], 5, 2850285829);
          d = HH(d, a, b, c, x[i + 2], 9, 4243563512);
          c = HH(c, d, a, b, x[i + 7], 14, 1735328473);
          b = HH(b, c, d, a, x[i + 12], 20, 2368359562);
          a = FF(a, b, c, d, x[i + 5], 4, 4294588738);
          d = FF(d, a, b, c, x[i + 8], 11, 2272392833);
          c = FF(c, d, a, b, x[i + 11], 16, 1839030562);
          b = FF(b, c, d, a, x[i + 14], 23, 4259657740);
          a = FF(a, b, c, d, x[i + 1], 4, 2763975236);
          d = FF(d, a, b, c, x[i + 4], 11, 1272893353);
          c = FF(c, d, a, b, x[i + 7], 16, 4139469664);
          b = FF(b, c, d, a, x[i + 10], 23, 3200236656);
          a = FF(a, b, c, d, x[i + 13], 4, 681279174);
          d = FF(d, a, b, c, x[i + 0], 11, 3936430074);
          c = FF(c, d, a, b, x[i + 3], 16, 3572445317);
          b = FF(b, c, d, a, x[i + 6], 23, 76029189);
          a = FF(a, b, c, d, x[i + 9], 4, 3654602809);
          d = FF(d, a, b, c, x[i + 12], 11, 3873151461);
          c = FF(c, d, a, b, x[i + 15], 16, 530742520);
          b = FF(b, c, d, a, x[i + 2], 23, 3299628645);
          a = GG(a, b, c, d, x[i + 0], 6, 4096336452);
          d = GG(d, a, b, c, x[i + 7], 10, 1126891415);
          c = GG(c, d, a, b, x[i + 14], 15, 2878612391);
          b = GG(b, c, d, a, x[i + 5], 21, 4237533241);
          a = GG(a, b, c, d, x[i + 12], 6, 1700485571);
          d = GG(d, a, b, c, x[i + 3], 10, 2399980690);
          c = GG(c, d, a, b, x[i + 10], 15, 4293915773);
          b = GG(b, c, d, a, x[i + 1], 21, 2240044497);
          a = GG(a, b, c, d, x[i + 8], 6, 1873313359);
          d = GG(d, a, b, c, x[i + 15], 10, 4264355552);
          c = GG(c, d, a, b, x[i + 6], 15, 2734768916);
          b = GG(b, c, d, a, x[i + 13], 21, 1309151649);
          a = GG(a, b, c, d, x[i + 4], 6, 4149444226);
          d = GG(d, a, b, c, x[i + 11], 10, 3174756917);
          c = GG(c, d, a, b, x[i + 2], 15, 718787259);
          b = GG(b, c, d, a, x[i + 9], 21, 3951481745);
          a = add(a, a);
          b = add(b, b);
          c = add(c, c);
          d = add(d, d);
        }
        var currentNick = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
        return currentNick.toLowerCase();
      }
    };
    this.Agent = {};
    this.getBrowser = function (userAgent) {
      switch (true) {
        case this._Browsers.Edge.test(userAgent):
          this.Agent.isEdge = true;
          return "Edge";
        case this._Browsers.PhantomJS.test(userAgent):
          this.Agent.isPhantomJS = true;
          return "PhantomJS";
        case this._Browsers.Konqueror.test(userAgent):
          this.Agent.isKonqueror = true;
          return "Konqueror";
        case this._Browsers.Amaya.test(userAgent):
          this.Agent.isAmaya = true;
          return "Amaya";
        case this._Browsers.Epiphany.test(userAgent):
          this.Agent.isEpiphany = true;
          return "Epiphany";
        case this._Browsers.SeaMonkey.test(userAgent):
          this.Agent.isSeaMonkey = true;
          return "SeaMonkey";
        case this._Browsers.Flock.test(userAgent):
          this.Agent.isFlock = true;
          return "Flock";
        case this._Browsers.OmniWeb.test(userAgent):
          this.Agent.isOmniWeb = true;
          return "OmniWeb";
        case this._Browsers.Opera.test(userAgent):
          this.Agent.isOpera = true;
          return "Opera";
        case this._Browsers.Chromium.test(userAgent):
          this.Agent.isChrome = true;
          return "Chromium";
        case this._Browsers.Chrome.test(userAgent):
          this.Agent.isChrome = true;
          return "Chrome";
        case this._Browsers.Safari.test(userAgent):
          this.Agent.isSafari = true;
          return "Safari";
        case this._Browsers.WinJs.test(userAgent):
          this.Agent.isWinJs = true;
          return "WinJs";
        case this._Browsers.IE.test(userAgent):
          this.Agent.isIE = true;
          return "IE";
        case this._Browsers.PS3.test(userAgent):
          return "ps3";
        case this._Browsers.PSP.test(userAgent):
          return "psp";
        case this._Browsers.Firefox.test(userAgent):
          this.Agent.isFirefox = true;
          return "Firefox";
        case this._Browsers.UC.test(userAgent):
          this.Agent.isUC = true;
          return "UCBrowser";
        default:
          if (userAgent.indexOf("Mozilla") !== 0 && /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(userAgent)) {
            this.Agent.isAuthoritative = false;
            return RegExp.$1;
          } else {
            return "unknown";
          }
      }
    };
    this.getBrowserVersion = function (string) {
      var Regex;
      switch (this.Agent.browser) {
        case "Edge":
          if (this._Versions.Edge.test(string)) {
            return RegExp.$1;
          }
          break;
        case "PhantomJS":
          if (this._Versions.PhantomJS.test(string)) {
            return RegExp.$1;
          }
          break;
        case "Chrome":
          if (this._Versions.Chrome.test(string)) {
            return RegExp.$1;
          }
          break;
        case "Chromium":
          if (this._Versions.Chromium.test(string)) {
            return RegExp.$1;
          }
          break;
        case "Safari":
          if (this._Versions.Safari.test(string)) {
            return RegExp.$1;
          }
          break;
        case "Opera":
          if (this._Versions.Opera.test(string)) {
            if (RegExp.$1) {
              return RegExp.$1;
            } else {
              return RegExp.$2;
            }
          }
          break;
        case "Firefox":
          if (this._Versions.Firefox.test(string)) {
            return RegExp.$1;
          }
          break;
        case "WinJs":
          if (this._Versions.WinJs.test(string)) {
            return RegExp.$1;
          }
          break;
        case "IE":
          if (this._Versions.IE.test(string)) {
            if (RegExp.$2) {
              return RegExp.$2;
            } else {
              return RegExp.$1;
            }
          }
          break;
        case "ps3":
          if (this._Versions.Ps3.test(string)) {
            return RegExp.$1;
          }
          break;
        case "psp":
          if (this._Versions.Psp.test(string)) {
            return RegExp.$1;
          }
          break;
        case "Amaya":
          if (this._Versions.Amaya.test(string)) {
            return RegExp.$1;
          }
          break;
        case "Epiphany":
          if (this._Versions.Epiphany.test(string)) {
            return RegExp.$1;
          }
          break;
        case "SeaMonkey":
          if (this._Versions.SeaMonkey.test(string)) {
            return RegExp.$1;
          }
          break;
        case "Flock":
          if (this._Versions.Flock.test(string)) {
            return RegExp.$1;
          }
          break;
        case "OmniWeb":
          if (this._Versions.OmniWeb.test(string)) {
            return RegExp.$1;
          }
          break;
        case "UCBrowser":
          if (this._Versions.UC.test(string)) {
            return RegExp.$1;
          }
          break;
        default:
          if (this.Agent.browser !== "unknown" && (Regex = new RegExp(this.Agent.browser + "[\\/ ]([\\d\\w\\.\\-]+)", "i"), Regex.test(string))) {
            return RegExp.$1;
          }
      }
    };
    this.getOS = function (string) {
      switch (true) {
        case this._OS.WindowsVista.test(string):
          this.Agent.isWindows = true;
          return "Windows Vista";
        case this._OS.Windows7.test(string):
          this.Agent.isWindows = true;
          return "Windows 7";
        case this._OS.Windows8.test(string):
          this.Agent.isWindows = true;
          return "Windows 8";
        case this._OS.Windows81.test(string):
          this.Agent.isWindows = true;
          return "Windows 8.1";
        case this._OS.Windows10.test(string):
          this.Agent.isWindows = true;
          return "Windows 10.0";
        case this._OS.Windows2003.test(string):
          this.Agent.isWindows = true;
          return "Windows 2003";
        case this._OS.WindowsXP.test(string):
          this.Agent.isWindows = true;
          return "Windows XP";
        case this._OS.Windows2000.test(string):
          this.Agent.isWindows = true;
          return "Windows 2000";
        case this._OS.WindowsPhone8.test(string):
          return "Windows Phone 8";
        case this._OS.Linux64.test(string):
          this.Agent.isLinux = true;
          this.Agent.isLinux64 = true;
          return "Linux 64";
        case this._OS.Linux.test(string):
          this.Agent.isLinux = true;
          return "Linux";
        case this._OS.ChromeOS.test(string):
          this.Agent.isChromeOS = true;
          return "Chrome OS";
        case this._OS.Wii.test(string):
          return "Wii";
        case this._OS.PS3.test(string):
          return "Playstation";
        case this._OS.PSP.test(string):
          return "Playstation";
        case this._OS.OSXCheetah.test(string):
          this.Agent.isMac = true;
          return "OS X Cheetah";
        case this._OS.OSXPuma.test(string):
          this.Agent.isMac = true;
          return "OS X Puma";
        case this._OS.OSXJaguar.test(string):
          this.Agent.isMac = true;
          return "OS X Jaguar";
        case this._OS.OSXPanther.test(string):
          this.Agent.isMac = true;
          return "OS X Panther";
        case this._OS.OSXTiger.test(string):
          this.Agent.isMac = true;
          return "OS X Tiger";
        case this._OS.OSXLeopard.test(string):
          this.Agent.isMac = true;
          return "OS X Leopard";
        case this._OS.OSXSnowLeopard.test(string):
          this.Agent.isMac = true;
          return "OS X Snow Leopard";
        case this._OS.OSXLion.test(string):
          this.Agent.isMac = true;
          return "OS X Lion";
        case this._OS.OSXMountainLion.test(string):
          this.Agent.isMac = true;
          return "OS X Mountain Lion";
        case this._OS.OSXMavericks.test(string):
          this.Agent.isMac = true;
          return "OS X Mavericks";
        case this._OS.OSXYosemite.test(string):
          this.Agent.isMac = true;
          return "OS X Yosemite";
        case this._OS.OSXElCapitan.test(string):
          this.Agent.isMac = true;
          return "OS X El Capitan";
        case this._OS.OSXSierra.test(string):
          this.Agent.isMac = true;
          return "macOS Sierra";
        case this._OS.Mac.test(string):
          this.Agent.isMac = true;
          return "OS X";
        case this._OS.iPad.test(string):
          this.Agent.isiPad = true;
          return string.match(this._OS.iPad)[0].replace("_", ".");
        case this._OS.iPhone.test(string):
          this.Agent.isiPhone = true;
          return string.match(this._OS.iPhone)[0].replace("_", ".");
        case this._OS.Bada.test(string):
          this.Agent.isBada = true;
          return "Bada";
        case this._OS.Curl.test(string):
          this.Agent.isCurl = true;
          return "Curl";
        default:
          return "unknown";
      }
    };
    this.getPlatform = function (userAgent) {
      switch (true) {
        case this._Platform.Windows.test(userAgent):
          return "Microsoft Windows";
        case this._Platform.WindowsPhone.test(userAgent):
          this.Agent.isWindowsPhone = true;
          return "Microsoft Windows Phone";
        case this._Platform.Mac.test(userAgent):
          return "Apple Mac";
        case this._Platform.Curl.test(userAgent):
          return "Curl";
        case this._Platform.Android.test(userAgent):
          this.Agent.isAndroid = true;
          return "Android";
        case this._Platform.Blackberry.test(userAgent):
          this.Agent.isBlackberry = true;
          return "Blackberry";
        case this._Platform.Linux.test(userAgent):
          return "Linux";
        case this._Platform.Wii.test(userAgent):
          return "Wii";
        case this._Platform.Playstation.test(userAgent):
          return "Playstation";
        case this._Platform.iPad.test(userAgent):
          this.Agent.isiPad = true;
          return "iPad";
        case this._Platform.iPod.test(userAgent):
          this.Agent.isiPod = true;
          return "iPod";
        case this._Platform.iPhone.test(userAgent):
          this.Agent.isiPhone = true;
          return "iPhone";
        case this._Platform.Samsung.test(userAgent):
          this.Agent.isiSamsung = true;
          return "Samsung";
        default:
          return "unknown";
      }
    };
    this.testCompatibilityMode = function () {
      var ua = this;
      if (this.Agent.isIE && /Trident\/(\d)\.0/i.test(ua.Agent.source)) {
        var tridentVersion = parseInt(RegExp.$1, 10);
        var version = parseInt(ua.Agent.version, 10);
        if (version === 7 && tridentVersion === 7) {
          ua.Agent.isIECompatibilityMode = true;
          ua.Agent.version = 11;
        }
        if (version === 7 && tridentVersion === 6) {
          ua.Agent.isIECompatibilityMode = true;
          ua.Agent.version = 10;
        }
        if (version === 7 && tridentVersion === 5) {
          ua.Agent.isIECompatibilityMode = true;
          ua.Agent.version = 9;
        }
        if (version === 7 && tridentVersion === 4) {
          ua.Agent.isIECompatibilityMode = true;
          ua.Agent.version = 8;
        }
      }
    };
    this.testSilk = function () {
      var exports = this;
      switch (true) {
        case new RegExp("silk", "gi").test(exports.Agent.source):
          this.Agent.isSilk = true;
      }
      if (/Silk-Accelerated=true/gi.test(exports.Agent.source)) {
        this.Agent.SilkAccelerated = true;
      }
      return !!this.Agent.isSilk && "Silk";
    };
    this.testKindleFire = function () {
      var exports = this;
      switch (true) {
        case /KFOT/gi.test(exports.Agent.source):
          this.Agent.isKindleFire = true;
          return "Kindle Fire";
        case /KFTT/gi.test(exports.Agent.source):
          this.Agent.isKindleFire = true;
          return "Kindle Fire HD";
        case /KFJWI/gi.test(exports.Agent.source):
          this.Agent.isKindleFire = true;
          return "Kindle Fire HD 8.9";
        case /KFJWA/gi.test(exports.Agent.source):
          this.Agent.isKindleFire = true;
          return "Kindle Fire HD 8.9 4G";
        case /KFSOWI/gi.test(exports.Agent.source):
          this.Agent.isKindleFire = true;
          return "Kindle Fire HD 7";
        case /KFTHWI/gi.test(exports.Agent.source):
          this.Agent.isKindleFire = true;
          return "Kindle Fire HDX 7";
        case /KFTHWA/gi.test(exports.Agent.source):
          this.Agent.isKindleFire = true;
          return "Kindle Fire HDX 7 4G";
        case /KFAPWI/gi.test(exports.Agent.source):
          this.Agent.isKindleFire = true;
          return "Kindle Fire HDX 8.9";
        case /KFAPWA/gi.test(exports.Agent.source):
          this.Agent.isKindleFire = true;
          return "Kindle Fire HDX 8.9 4G";
        default:
          return false;
      }
    };
    this.testCaptiveNetwork = function () {
      var ua = this;
      switch (true) {
        case /CaptiveNetwork/gi.test(ua.Agent.source):
          ua.Agent.isCaptive = true;
          ua.Agent.isMac = true;
          ua.Agent.platform = "Apple Mac";
          return "CaptiveNetwork";
        default:
          return false;
      }
    };
    this.testMobile = function () {
      var ua = this;
      switch (true) {
        case ua.Agent.isWindows:
        case ua.Agent.isLinux:
        case ua.Agent.isMac:
        case ua.Agent.isChromeOS:
          ua.Agent.isDesktop = true;
          break;
        case ua.Agent.isAndroid:
        case ua.Agent.isSamsung:
          ua.Agent.isMobile = true;
          ua.Agent.isDesktop = false;
      }
      switch (true) {
        case ua.Agent.isiPad:
        case ua.Agent.isiPod:
        case ua.Agent.isiPhone:
        case ua.Agent.isBada:
        case ua.Agent.isBlackberry:
        case ua.Agent.isAndroid:
        case ua.Agent.isWindowsPhone:
          ua.Agent.isMobile = true;
          ua.Agent.isDesktop = false;
      }
      if (/mobile/i.test(ua.Agent.source)) {
        ua.Agent.isMobile = true;
        ua.Agent.isDesktop = false;
      }
    };
    this.testTablet = function () {
      var ua = this;
      switch (true) {
        case ua.Agent.isiPad:
        case ua.Agent.isAndroidTablet:
        case ua.Agent.isKindleFire:
          ua.Agent.isTablet = true;
      }
      if (/tablet/i.test(ua.Agent.source)) {
        ua.Agent.isTablet = true;
      }
    };
    this.testNginxGeoIP = function (headers) {
      var ua = this;
      Object.keys(headers).forEach(function (key) {
        if (/^GEOIP/i.test(key)) {
          ua.Agent.geoIp[key] = headers[key];
        }
      });
    };
    this.testBot = function () {
      var ua = this;
      var isBot = IS_BOT_REGEXP.exec(ua.Agent.source.toLowerCase());
      if (isBot) {
        ua.Agent.isBot = isBot[1];
      } else if (!ua.Agent.isAuthoritative) {
        ua.Agent.isBot = /bot/i.test(ua.Agent.source);
      }
    };
    this.testSmartTV = function () {
      var ua = this;
      var isSmartTV = new RegExp("smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv", "gi").exec(ua.Agent.source.toLowerCase());
      if (isSmartTV) {
        ua.Agent.isSmartTV = isSmartTV[1];
      }
    };
    this.testAndroidTablet = function () {
      var ua = this;
      if (ua.Agent.isAndroid && !/mobile/i.test(ua.Agent.source)) {
        ua.Agent.isAndroidTablet = true;
      }
    };
    this.testTouchSupport = function () {
      var client = this;
      client.Agent.isTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    };
    this.getLaguage = function () {
      var client = this;
      client.Agent.language = (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "").toLowerCase();
    };
    this.getColorDepth = function () {
      var window = this;
      window.Agent.colorDepth = screen.colorDepth || -1;
    };
    this.getScreenResolution = function () {
      var uri = this;
      uri.Agent.resolution = [screen.availWidth, screen.availHeight];
    };
    this.getPixelDepth = function () {
      var client = this;
      client.Agent.pixelDepth = screen.pixelDepth || -1;
    };
    this.getCPU = function () {
      var client = this;
      client.Agent.cpuCores = navigator.hardwareConcurrency || -1;
    };
    this.reset = function () {
      var ua = this;
      var key;
      for (key in ua.DefaultAgent) {
        if (ua.DefaultAgent.hasOwnProperty(key)) {
          ua.Agent[key] = ua.DefaultAgent[key];
        }
      }
      return ua;
    };
    this.parse = function (userAgent) {
      userAgent = userAgent || navigator.userAgent;
      var ua = new UserAgent();
      ua.Agent.source = userAgent.replace(/^\s*/, "").replace(/\s*$/, "");
      ua.Agent.os = ua.getOS(ua.Agent.source);
      ua.Agent.platform = ua.getPlatform(ua.Agent.source);
      ua.Agent.browser = ua.getBrowser(ua.Agent.source);
      ua.Agent.version = ua.getBrowserVersion(ua.Agent.source);
      ua.testBot();
      ua.testSmartTV();
      ua.testMobile();
      ua.testAndroidTablet();
      ua.testTablet();
      ua.testCompatibilityMode();
      ua.testSilk();
      ua.testKindleFire();
      ua.testCaptiveNetwork();
      ua.testTouchSupport();
      ua.getLaguage();
      ua.getColorDepth();
      ua.getPixelDepth();
      ua.getScreenResolution();
      ua.getCPU();
      return ua.Agent;
    };
    this.get = function (_) {
      var edgeLowPt = "a";
      var data = this.parse();
      var t = [];
      var name;
      for (name in this.options) {
        if (this.options.hasOwnProperty(name) && this.options[name] === true) {
          t.push(data[name]);
        }
      }
      if (_) {
        t.push(_);
      }
      if (!this.options.resolution && data.isMobile) {
        t.push(data.resolution);
      }
      edgeLowPt = "b";
      var charListNotLatin = data.hashMD5(t.join(":"));
      var langCodeArray = [charListNotLatin.slice(0, 8), charListNotLatin.slice(8, 12), "4" + charListNotLatin.slice(12, 15), edgeLowPt + charListNotLatin.slice(15, 18), charListNotLatin.slice(20)];
      return langCodeArray.join("-");
    };
    this.Agent = this.DefaultAgent;
    return this;
  };
  module.DeviceUUID = Browser;
  return new Browser(navigator.userAgent);
}(undefined);