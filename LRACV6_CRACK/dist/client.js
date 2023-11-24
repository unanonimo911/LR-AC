'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (object) {
  return typeof object;
} : function (obj) {
  if (obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof obj;
  }
};
var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      var _i = arr[Symbol.iterator]();
      var _s;
      for (; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) {
          break;
        }
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i.return) {
          _i.return();
        }
      } finally {
        if (_d) {
          throw _e;
        }
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
var atiyya = {
  events: 19
};
var quintasia = {
  events: 19
};
(function () {
  function e(t, n, r) {
    function s(i, s) {
      if (!n[i]) {
        if (!t[i]) {
          var o = typeof require == "function" && require;
          if (!s && o) {
            return o(i, true);
          }
          if (a) {
            return a(i, true);
          }
          var f = new Error("Cannot find module '" + i + "'");
          f.code = "MODULE_NOT_FOUND";
          throw f;
        }
        var m = {
          exports: {}
        };
        var u = n[i] = m;
        t[i][0].call(u.exports, function (e) {
          var canvas = t[i][1][e];
          return s(t[i][1][e] || e);
        }, u, u.exports, e, t, n, r);
      }
      return n[i].exports;
    }
    var a = typeof require == "function" && require;
    var o = 0;
    for (; o < r.length; o++) {
      s(r[o]);
    }
    return s;
  }
  return e;
})()({
  1: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    onNet("lrac:cl:selfban", function (inv) {
      Ban(inv.reason);
    });
    onNet("lrac:cl:selfwarn", function (inv) {
      Warn(inv.reason);
    });
    Ban = function notifyTransportManager(callback) {
      var opts = {
        type: "showbanAlerts",
        ban: true,
        banconten: callback
      };
      SendNuiMessage(JSON.stringify(opts));
    };
    Kick = function someJobHandler(migratedItem) {
      console.log("KICK DEVTOOLS" + migratedItem);
      SendNuiMessage(JSON.stringify({
        type: "showbanAlerts",
        ban: false,
        banconten: migratedItem
      }));
    };
    Warn = function notifyTransportManager(callback) {
      SendNuiMessage(JSON.stringify({
        type: "showbanAlerts",
        ban: false,
        banconten: callback
      }));
    };
    playerissqpn = false;
    playeruuid = null;
    GetUUID = function awaitTransitionEnd() {
      return new Promise(function (setTimeout, saveNotifs) {
        if (playeruuid == null) {
          SendNuiMessage(JSON.stringify(msg_json));
          setTimeout(function () {
            if (playeruuid == null) {
              saveNotifs("No se ha podido obtener el UUID");
            } else {
              setTimeout(playeruuid);
            }
          }, 1000);
        } else {
          setTimeout(playeruuid);
        }
      });
    };
    Wait = function awaitTransitionEnd(element) {
      return new Promise(function (_nextEventFunc) {
        setTimeout(_nextEventFunc, element);
      });
    };
    VectorComparing = function subtract(subtractor, subtractee) {
      var lightI = subtractor[0] - subtractee[0];
      var lightJ = subtractor[1] - subtractee[1];
      var izabelah = subtractor[2] - subtractee[2];
      return Math.sqrt(lightI * lightI + lightJ * lightJ + izabelah * izabelah);
    };
    ZCInfo = function openTiledImage(kind) {
      console.log("[INFO] " + kind);
    };
    ZCWarn = function openTiledImage(kind) {
      console.log("[WARN] " + kind);
    };
    ZCDebug = function openTiledImage(kind) {
      console.log("[DEBUG] " + kind);
    };
    ZCErr = function openTiledImage(kind) {
      console.log("[ERROR] " + kind);
    };
    onNet("playerSpawned", function () {
      setTimeout(function () {
        playerissqpn = true;
      }, 15000);
    });
    console.log("^4[LRAC V6]^0 Loading functions.js");
  }, {}],
  2: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    lPlayer = {};
  }, {}],
  3: [function (require, canCreateDiscussions, isSlidingUp) {
    var events = require("events");
    EmiterConfigServer = new events.EventEmitter();
    EmiterConfigServer.setMaxListeners(0);
    onNet("refModule", function (eventToEmit, binderService) {
      EmiterConfigServer.emit(eventToEmit, binderService);
    });
  }, atiyya],
  4: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiAimassist", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    AntiAimAssist = async function getCellInfos() {
      if (!mediaIsImg) {
        return;
      }
      try {
        var artistTrack = PlayerPedId();
        var dbPassword = GetLocalPlayerAimState();
        if (dbPassword !== 3 && !IsPedInAnyVehicle(artistTrack, true)) {
          var expectedModelAfterUpgradeSigns = {
            Value: dbPassword
          };
          emitNet("LR:server:detection", "AntiAimAssist", "Player has AimAssist enabled.", expectedModelAfterUpgradeSigns);
        }
      } catch (ticketID) {
        console.log("^4[LRAC V6]^0 Error in AntiAimAssist: " + ticketID);
      }
    };
  }, {}],
  5: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiDevtools", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    RegisterNuiCallbackType("patito");
    on("__cfx_nui:patito", function () {});
    console.log("^4[LRAC V6]^0 Loading anti-devtools.js");
  }, {}],
  6: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {}, {}],
  7: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiFreecam", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    var sumaiya = 0;
    AntiFreecam = async function assemblyJson() {
      if (!mediaIsImg) {
        return;
      }
      try {
        var artistTrack = PlayerPedId();
        var previousReading = {
          x: GetEntityCoords(artistTrack)[0] - GetFinalRenderedCamCoord()[0],
          y: GetEntityCoords(artistTrack)[1] - GetFinalRenderedCamCoord()[1],
          z: GetEntityCoords(artistTrack)[2] - GetFinalRenderedCamCoord()[2]
        };
        if (IsPedInAnyPlane(artistTrack) || IsPedInAnyHeli(artistTrack)) {
          return;
        }
        if (previousReading.x >= 17 || previousReading.y >= 17 || previousReading.z >= 17 || previousReading.x <= -17 || previousReading.y <= -17 || previousReading.z <= -17) {
          sumaiya++;
          if (sumaiya >= 3) {
            emitNet("LR:server:detection", "AntiFreecam", "Vehicle Owned by Player " + currentowner + " - " + pedId + " was attached.", tablesta, pedId);
          }
        }
      } catch (ticketID) {
        console.log("^4[LRAC V6]^0 Error in AntiFreecam: " + ticketID);
      }
    };
    thread.on("tick", function () {
      try {
        AntiFreecam();
      } catch (zyrianna) {
        ZCErr("Freecam " + zyrianna);
      }
    });
  }, {}],
  8: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiGiveWeapon", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    var secelia = 0;
    var gotoNewOfflinePage = async function convertNumberStringToArray() {
      try {
        var artistTrack = PlayerPedId();
        var newNodeLists = [];
        var pipelets = ["WEAPON_REVOLVER_MK2", "WEAPON_PIPEWRENCH", "WEAPON_DOUBLEACTION", "WEAPON_SPECIALCARBINE_MK2", "WEAPON_PUMPSHOTGUN_MK2", "WEAPON_MARKSMANRIFLE_MK2", "WEAPON_RAYCARBINE", "WEAPON_RAYMINIGUN", "WEAPON_DIGISCANNER", "WEAPON_NAVYREVOLVER", "WEAPON_CERAMICPISTOL", "WEAPON_STONE_HATCHET", "WEAPON_PIPEBOMB", "WEAPON_GADGETPISTOL", "WEAPON_MILITARYRIFLE", "WEAPON_COMBATSHOTGUN", "WEAPON_AUTOSHOTGUN", "WEAPON_KNIFE", "WEAPON_KNUCKLE", "WEAPON_NIGHTSTICK", "WEAPON_HAMMER", "WEAPON_BAT", "WEAPON_GOLFCLUB", "WEAPON_CROWBAR", "WEAPON_BOTTLE", "WEAPON_DAGGER", "WEAPON_HATCHET", "WEAPON_MACHETE", "WEAPON_FLASHLIGHT", "WEAPON_SWITCHBLADE", "WEAPON_PISTOL", "WEAPON_PISTOL_MK2", "WEAPON_COMBATPISTOL", "WEAPON_APPISTOL", "WEAPON_PISTOL50", "WEAPON_SNSPISTOL", "WEAPON_HEAVYPISTOL", "WEAPON_VINTAGEPISTOL", "WEAPON_STUNGUN", "WEAPON_FLAREGUN", "WEAPON_MARKSMANPISTOL", "WEAPON_REVOLVER", "WEAPON_MICROSMG", "WEAPON_SMG", "WEAPON_MINISMG", "WEAPON_SMG_MK2", "WEAPON_ASSAULTSMG", "WEAPON_MG", "WEAPON_COMBATMG", "WEAPON_COMBATMG_MK2", "WEAPON_COMBATPDW", "WEAPON_GUSENBERG", "WEAPON_RAYPISTOL", "WEAPON_MACHINEPISTOL", "WEAPON_ASSAULTRIFLE", "WEAPON_ASSAULTRIFLE_MK2", "WEAPON_CARBINERIFLE", "WEAPON_CARBINERIFLE_MK2", "WEAPON_ADVANCEDRIFLE", "WEAPON_SPECIALCARBINE", "WEAPON_BULLPUPRIFLE", "WEAPON_COMPACTRIFLE", "WEAPON_PUMPSHOTGUN", "WEAPON_SAWNOFFSHOTGUN", "WEAPON_BULLPUPSHOTGUN", "WEAPON_ASSAULTSHOTGUN", "WEAPON_MUSKET", "WEAPON_HEAVYSHOTGUN", "WEAPON_DBSHOTGUN", "WEAPON_SNIPERRIFLE", "WEAPON_HEAVYSNIPER", "WEAPON_HEAVYSNIPER_MK2", "WEAPON_MARKSMANRIFLE", "WEAPON_GRENADELAUNCHER", "WEAPON_GRENADELAUNCHER_SMOKE", "WEAPON_RPG", "WEAPON_STINGER", "WEAPON_FIREWORK", "WEAPON_HOMINGLAUNCHER", "WEAPON_GRENADE", "WEAPON_STICKYBOMB", "WEAPON_PROXMINE", "WEAPON_MINIGUN", "WEAPON_RAILGUN", "WEAPON_POOLCUE", "WEAPON_BZGAS", "WEAPON_SMOKEGRENADE", "WEAPON_MOLOTOV", "WEAPON_FIREEXTINGUISHER", "WEAPON_PETROLCAN", "WEAPON_SNOWBALL", "WEAPON_FLARE", "WEAPON_BALL"];
        var _ = ["WEAPON_RAYCARBINE", "WEAPON_RAYMINIGUN", "WEAPON_DIGISCANNER"];
        pipelets.forEach(function (allCueNames) {
          var itemNodeList = GetHashKey(allCueNames);
          if (_.includes(allCueNames)) {
            var artistTrack = GetPlayerPed(-1);
            RemoveWeaponFromPed(artistTrack, itemNodeList);
          } else if (HasPedGotWeapon(artistTrack, itemNodeList, false)) {
            newNodeLists.push(itemNodeList);
          }
        });
        emitNet("lrac:sv:giveweapon", newNodeLists);
      } catch (ticketID) {
        console.log("^4[LRAC V6]^0 Error in AntiGiveWeapon: " + ticketID);
      }
    };
    thread.on("tick", function () {
      try {
        secelia++;
        if (secelia > 3) {
          secelia = 0;
          gotoNewOfflinePage();
        }
      } catch (rhenlee) {
        ZCErr("GiveWeapon " + rhenlee);
      }
    });
    console.log("^4[LRAC V6]^0 Loading anti-giveweapon.js");
  }, {}],
  9: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiGodMode", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    var lelsie = 0;
    var mykaylah = 0;
    var daeshia = 0;
    AntiGodModev1 = async function locate_npm() {
      if (!mediaIsImg) {
        return;
      }
      try {
        await Wait(5000);
        var value = PlayerPedId();
        var health = GetEntityHealth(value);
        var oldCondition = GetPedArmour(value);
        if (health > 200) {
          var character = {
            health: health
          };
          emitNet("LR:server:detection", "AntiHealth", "Try for hack health: ", character);
        }
        if (oldCondition > 200) {
          var armors_keys = {
            shield: oldCondition
          };
          emitNet("LR:server:detection", "AntiShield", "Try for hack shield: ", armors_keys);
        }
      } catch (ticketID) {
        console.log("^4[LRAC V6]^0 Error in GodMode v1: " + ticketID);
      }
    };
    AntiGodModev2 = async function pingFunc() {
      if (!mediaIsImg) {
        return;
      }
      try {
        var magnifier = PlayerPedId();
        var $magnifier = GetEntityHealth(magnifier);
        if (GetPlayerInvincible_2(PlayerId())) {
          daeshia++;
          if (daeshia >= 3) {
            daeshia = 0;
          }
        }
        SetEntityHealth(magnifier, $magnifier - 2);
        setTimeout(function () {
          if (IsPlayerDead(PlayerPedId()) != true) {
            if (GetEntityHealth(PlayerPedId()) == $magnifier && GetEntityHealth(PlayerPedId()) != 0) {
              mykaylah++;
              if (mykaylah >= 3) {
                emitNet("lrac:sv:shotscreen", "Try For GodeMode ped in server v1");
                mykaylah = 0;
              }
            } else if (GetEntityHealth(PlayerPedId()) == $magnifier - 2) {
              SetEntityHealth(PlayerPedId(), GetEntityHealth(PlayerPedId()) + 2);
            }
          }
        }, 250);
      } catch (ticketID) {
        console.log("^4[LRAC V6]^0 Error in GodMode v1: " + ticketID);
      }
    };
    thread.on("tick", function () {
      try {
        AntiGodModev1();
      } catch (reola) {
        ZCErr("GodMode " + reola);
      }
    });
    thread.on("tick", function () {
      try {
        lelsie++;
        if (lelsie > 19) {
          lelsie = 0;
          AntiGodModev2();
        }
      } catch (ananda) {
        ZCErr("GodMode v2 " + ananda);
      }
    });
  }, {}],
  10: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiHeadVeh", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    AntiHeadVeh = async function setChannelGains() {
      if (!mediaIsImg) {
        return;
      }
      try {
        var vmArgSetters = GetGamePool("CVehicle");
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
          var _iterator3 = vmArgSetters[Symbol.iterator]();
          var $__4;
          for (; !(_iteratorNormalCompletion3 = ($__4 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var value = $__4.value;
            if (IsEntityAttachedToAnyPed(value)) {
              var minyMin = NetworkGetEntityOwner(value);
              var posMsg = GetPlayerServerId(PedToNet(minyMin));
              console.log("Vehicle Owned by Player " + minyMin + " - " + posMsg + " was attached.");
              if (_0x495c55[posMsg] == undefined) {
                _0x495c55[posMsg] = 1;
              } else {
                _0x495c55[posMsg] = _0x495c55[posMsg] + 1;
              }
              DetachEntity(value, true, false);
              DeleteEntity(value);
            }
            NetworkAllowLocalEntityAttachment(value, false);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
        var max_id = 0;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;
        try {
          var _iterator4 = Object.entries(_0x495c55)[Symbol.iterator]();
          var _step17;
          for (; !(_iteratorNormalCompletion4 = (_step17 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _step2$value = _slicedToArray(_step17.value, 2);
            var value = _step2$value[0];
            var id = _step2$value[1];
            console.log(value + ": " + id);
            if (id > max_id) {
              max_id = id;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
        if (max_id > 0) {
          emitNet("LR:server:detection", "AntiVehicleAttach", "Vehicle Owned by Player " + currentowner + " - " + pedId + " was attached.", _0x495c55, pedId);
        }
        NetworkAllowLocalEntityAttachment(PlayerPedId(), false);
        await Wait(300);
      } catch (ticketID) {
        console.log("^4[LRAC V6]^0 Error in AntiHeadVeh: " + ticketID);
      }
    };
    thread.on("tick", function () {
      try {
        AntiHeadVeh();
      } catch (anavrin) {
        ZCErr("Headveh " + anavrin);
      }
    });
  }, {}],
  11: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiNoclip", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    var duffy = 0;
    var nikol = 0;
    AntiNoclip = async function locate_npm() {
      if (!mediaIsImg) {
        return;
      }
      try {
        var button2 = PlayerPedId();
        var button2Component = GetEntityCoords(button2);
        if (IsPedInAnyVehicle(button2, false)) {
          return;
        }
        await Wait(3000);
        var meCenter = GetEntityCoords(button2);
        var distance = VectorComparing(button2Component, meCenter);
        if (distance > 160 && !IsPedInParachuteFreeFall(button2) && !IsEntityDead(button2) && button2 == PlayerPedId() && playerissqpn == true) {
          duffy++;
          if (duffy >= 9 && duffy <= 12) {
            nikol++;
            if (nikol >= 5) {
              nikol = 0;
            }
          }
          if (duffy >= 55) {
            var artistTrack = {
              Distance: distance
            };
            emitNet("LR:server:detection", "AntiNoclip", "Player is using Noclip.", artistTrack);
            duffy = 0;
          }
        }
      } catch (ticketID) {
        console.log("^4[LRAC V6]^0 Error in AntiNoclip: " + ticketID);
      }
    };
    thread.on("tick", function () {
      try {
        AntiNoclip();
      } catch (cayleigh) {
        ZCErr("Noclip " + cayleigh);
      }
    });
  }, {}],
  12: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiNocritical", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    AntiNoCriticalDamage = async function getCellInfos() {
      if (!mediaIsImg) {
        return;
      }
      try {
        var magnifier = PlayerPedId();
        var $magnifier = GetPedConfigFlag(magnifier, 2, 1);
        if ($magnifier == 1) {
          emitNet("LR:server:detection", "AntiNoCriticalDamage", "Player has enabled NoCriticalDamage.");
        }
      } catch (ticketID) {
        console.log("^4[LRAC V6]^0 Error in AntiNoCriticalDamage: " + ticketID);
      }
    };
    thread.on("tick", function () {
      try {
        AntiNoCriticalDamage();
      } catch (sawyer) {
        ZCErr("NoCritical " + sawyer);
      }
    });
  }, {}],
  13: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiSpectate", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    AntiSpectate = async function getCellInfos() {
      if (!mediaIsImg) {
        return;
      }
      try {
        if (NetworkIsInSpectatorMode()) {
          emitNet("LR:server:detection", "AntiSpectate", "Player is in spectator mode.");
        }
      } catch (ticketID) {
        console.log("^4[LRAC V6]^0 Error in Anti-Spectate: " + ticketID);
      }
    };
    thread.on("tick", function () {
      try {
        AntiSpectate();
      } catch (mcgwire) {
        ZCErr("Spectate " + mcgwire);
      }
    });
  }, {}],
  14: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {}, {}],
  15: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiTiny", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    AntiTinyPlayer = async function getCellInfos() {
      if (!mediaIsImg) {
        return;
      }
      try {
        var artistTrack = PlayerPedId();
        if (GetPedConfigFlag(artistTrack, 223, 1)) {
          emitNet("LR:server:detection", "AntiTinyPlayer", "Player has enabled TinyPed.");
        }
      } catch (ticketID) {
        console.log("^4[LRAC V6]^0 Error in AntiTinyPlayer: " + ticketID);
      }
    };
    thread.on("tick", function () {
      try {
        AntiTinyPlayer();
      } catch (chenoa) {
        ZCErr("Tiny " + chenoa);
      }
    });
  }, {}],
  16: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiWeapondamage", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
    });
    CheckWeaponsDamage = function _loadSnippetsFromDirectories() {
      var trytes = [GetHashKey("COMPONENT_COMBATPISTOL_CLIP_01"), GetHashKey("COMPONENT_COMBATPISTOL_CLIP_02"), GetHashKey("COMPONENT_APPISTOL_CLIP_01"), GetHashKey("COMPONENT_APPISTOL_CLIP_02"), GetHashKey("COMPONENT_MICROSMG_CLIP_01"), GetHashKey("COMPONENT_MICROSMG_CLIP_02"), GetHashKey("COMPONENT_SMG_CLIP_01"), GetHashKey("COMPONENT_SMG_CLIP_02"), GetHashKey("COMPONENT_ASSAULTRIFLE_CLIP_01"), GetHashKey("COMPONENT_ASSAULTRIFLE_CLIP_02"), GetHashKey("COMPONENT_CARBINERIFLE_CLIP_01"), GetHashKey("COMPONENT_CARBINERIFLE_CLIP_02"), GetHashKey("COMPONENT_ADVANCEDRIFLE_CLIP_01"), GetHashKey("COMPONENT_ADVANCEDRIFLE_CLIP_02"), GetHashKey("COMPONENT_MG_CLIP_01"), GetHashKey("COMPONENT_MG_CLIP_02"), GetHashKey("COMPONENT_COMBATMG_CLIP_01"), GetHashKey("COMPONENT_COMBATMG_CLIP_02"), GetHashKey("COMPONENT_PUMPSHOTGUN_CLIP_01"), GetHashKey("COMPONENT_SAWNOFFSHOTGUN_CLIP_01"), GetHashKey("COMPONENT_ASSAULTSHOTGUN_CLIP_01"), GetHashKey("COMPONENT_ASSAULTSHOTGUN_CLIP_02"), GetHashKey("COMPONENT_PISTOL50_CLIP_01"), GetHashKey("COMPONENT_PISTOL50_CLIP_02"), GetHashKey("COMPONENT_ASSAULTSMG_CLIP_01"), GetHashKey("COMPONENT_ASSAULTSMG_CLIP_02"), GetHashKey("COMPONENT_AT_RAILCOVER_01"), GetHashKey("COMPONENT_AT_AR_AFGRIP"), GetHashKey("COMPONENT_AT_PI_FLSH"), GetHashKey("COMPONENT_AT_AR_FLSH"), GetHashKey("COMPONENT_AT_SCOPE_MACRO"), GetHashKey("COMPONENT_AT_SCOPE_SMALL"), GetHashKey("COMPONENT_AT_SCOPE_MEDIUM"), GetHashKey("COMPONENT_AT_SCOPE_LARGE"), GetHashKey("COMPONENT_AT_SCOPE_MAX"), GetHashKey("COMPONENT_AT_PI_SUPP")];
      var pipelets = ["WEAPON_UNARMED", "WEAPON_REVOLVER_MK2", "WEAPON_PIPEWRENCH", "WEAPON_DOUBLEACTION", "WEAPON_SPECIALCARBINE_MK2", "WEAPON_PUMPSHOTGUN_MK2", "WEAPON_MARKSMANRIFLE_MK2", "WEAPON_RAYCARBINE", "WEAPON_RAYMINIGUN", "WEAPON_DIGISCANNER", "WEAPON_NAVYREVOLVER", "WEAPON_CERAMICPISTOL", "WEAPON_STONE_HATCHET", "WEAPON_PIPEBOMB", "WEAPON_GADGETPISTOL", "WEAPON_MILITARYRIFLE", "WEAPON_COMBATSHOTGUN", "WEAPON_AUTOSHOTGUN", "WEAPON_KNIFE", "WEAPON_KNUCKLE", "WEAPON_NIGHTSTICK", "WEAPON_HAMMER", "WEAPON_BAT", "WEAPON_GOLFCLUB", "WEAPON_CROWBAR", "WEAPON_BOTTLE", "WEAPON_DAGGER", "WEAPON_HATCHET", "WEAPON_MACHETE", "WEAPON_FLASHLIGHT", "WEAPON_SWITCHBLADE", "WEAPON_PISTOL", "WEAPON_PISTOL_MK2", "WEAPON_COMBATPISTOL", "WEAPON_APPISTOL", "WEAPON_PISTOL50", "WEAPON_SNSPISTOL", "WEAPON_HEAVYPISTOL", "WEAPON_VINTAGEPISTOL", "WEAPON_STUNGUN", "WEAPON_FLAREGUN", "WEAPON_MARKSMANPISTOL", "WEAPON_REVOLVER", "WEAPON_MICROSMG", "WEAPON_SMG", "WEAPON_MINISMG", "WEAPON_SMG_MK2", "WEAPON_ASSAULTSMG", "WEAPON_MG", "WEAPON_COMBATMG", "WEAPON_COMBATMG_MK2", "WEAPON_COMBATPDW", "WEAPON_GUSENBERG", "WEAPON_RAYPISTOL", "WEAPON_MACHINEPISTOL", "WEAPON_ASSAULTRIFLE", "WEAPON_ASSAULTRIFLE_MK2", "WEAPON_CARBINERIFLE", "WEAPON_CARBINERIFLE_MK2", "WEAPON_ADVANCEDRIFLE", "WEAPON_SPECIALCARBINE", "WEAPON_BULLPUPRIFLE", "WEAPON_COMPACTRIFLE", "WEAPON_PUMPSHOTGUN", "WEAPON_SAWNOFFSHOTGUN", "WEAPON_BULLPUPSHOTGUN", "WEAPON_ASSAULTSHOTGUN", "WEAPON_MUSKET", "WEAPON_HEAVYSHOTGUN", "WEAPON_DBSHOTGUN", "WEAPON_SNIPERRIFLE", "WEAPON_HEAVYSNIPER", "WEAPON_HEAVYSNIPER_MK2", "WEAPON_MARKSMANRIFLE", "WEAPON_GRENADELAUNCHER", "WEAPON_GRENADELAUNCHER_SMOKE", "WEAPON_RPG", "WEAPON_STINGER", "WEAPON_FIREWORK", "WEAPON_HOMINGLAUNCHER", "WEAPON_GRENADE", "WEAPON_STICKYBOMB", "WEAPON_PROXMINE", "WEAPON_MINIGUN", "WEAPON_RAILGUN", "WEAPON_POOLCUE", "WEAPON_BZGAS", "WEAPON_SMOKEGRENADE", "WEAPON_MOLOTOV", "WEAPON_FIREEXTINGUISHER", "WEAPON_PETROLCAN", "WEAPON_SNOWBALL", "WEAPON_FLARE", "WEAPON_BALL"];
      pipelets.forEach(function (p) {
        if (item[p] == null || item[p] == undefined) {
          return;
        }
        var v = GetHashKey(p);
        if (GetWeaponDamage(v) > item[p]) {
          console.log(p + " - " + GetWeaponDamage(v) + " - " + item[p]);
          emitNet("LR:server:detection", "AntiCitizen", p + " has a damage of " + GetWeaponDamage(v) + " (Default damage is " + item[p] + ")");
        }
      });
      trytes.forEach(function (level) {
        var message = GetWeaponComponentDamageModifier(level);
        var adjustedLevel = GetWeaponComponentAccuracyModifier(level);
        if (message > 1.1 || adjustedLevel > 1.2) {
          emitNet("LR:server:detection", "AntiCitizen", level + " has a component with damage multiplier of " + message + " | " + adjustedLevel);
        }
      });
    };
    thread.on("active", function () {
      if (!mediaIsImg) {
        return;
      }
      try {
        CheckWeaponsDamage();
      } catch (sherronda) {
        ZCErr("weapondamage " + sherronda);
      }
    });
  }, {}],
  17: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    var mediaIsImg = true;
    EmiterConfigServer.on("AntiPickups", function (placardIsUnder) {
      mediaIsImg = placardIsUnder || !mediaIsImg;
      if (mediaIsImg) {
        EnablePickups();
      } else {
        DisablePickups();
      }
    });
    DisablePickups = async function _destroyWaypoints() {
      var artistTrack = PlayerId();
      var vmArgSetters = ["PICKUP_AMMO_BULLET_MP", "PICKUP_AMMO_FIREWORK", "PICKUP_AMMO_FLAREGUN", "PICKUP_AMMO_GRENADELAUNCHER", "PICKUP_AMMO_GRENADELAUNCHER_MP", "PICKUP_AMMO_HOMINGLAUNCHER", "PICKUP_AMMO_MG", "PICKUP_AMMO_MINIGUN", "PICKUP_AMMO_MISSILE_MP", "PICKUP_AMMO_PISTOL", "PICKUP_AMMO_RIFLE", "PICKUP_AMMO_RPG", "PICKUP_AMMO_SHOTGUN", "PICKUP_AMMO_SMG", "PICKUP_AMMO_SNIPER", "PICKUP_ARMOUR_STANDARD", "PICKUP_CAMERA", "PICKUP_CUSTOM_SCRIPT", "PICKUP_GANG_ATTACK_MONEY", "PICKUP_HEALTH_SNACK", "PICKUP_HEALTH_STANDARD", "PICKUP_MONEY_CASE", "PICKUP_MONEY_DEP_BAG", "PICKUP_MONEY_MED_BAG", "PICKUP_MONEY_PAPER_BAG", "PICKUP_MONEY_PURSE", "PICKUP_MONEY_SECURITY_CASE", "PICKUP_MONEY_VARIABLE", "PICKUP_MONEY_WALLET", "PICKUP_PARACHUTE", "PICKUP_PORTABLE_CRATE_FIXED_INCAR", "PICKUP_PORTABLE_CRATE_UNFIXED", "PICKUP_PORTABLE_CRATE_UNFIXED_INCAR", "PICKUP_PORTABLE_CRATE_UNFIXED_INCAR_SMALL", "PICKUP_PORTABLE_CRATE_UNFIXED_LOW_GLOW", "PICKUP_PORTABLE_DLC_VEHICLE_PACKAGE", "PICKUP_PORTABLE_PACKAGE", "PICKUP_SUBMARINE", "PICKUP_VEHICLE_ARMOUR_STANDARD", "PICKUP_VEHICLE_CUSTOM_SCRIPT", "PICKUP_VEHICLE_CUSTOM_SCRIPT_LOW_GLOW", "PICKUP_VEHICLE_HEALTH_STANDARD", "PICKUP_VEHICLE_HEALTH_STANDARD_LOW_GLOW", "PICKUP_VEHICLE_MONEY_VARIABLE", "PICKUP_VEHICLE_WEAPON_APPISTOL", "PICKUP_VEHICLE_WEAPON_ASSAULTSMG", "PICKUP_VEHICLE_WEAPON_COMBATPISTOL", "PICKUP_VEHICLE_WEAPON_GRENADE", "PICKUP_VEHICLE_WEAPON_MICROSMG", "PICKUP_VEHICLE_WEAPON_MOLOTOV", "PICKUP_VEHICLE_WEAPON_PISTOL", "PICKUP_VEHICLE_WEAPON_PISTOL50", "PICKUP_VEHICLE_WEAPON_SAWNOFF", "PICKUP_VEHICLE_WEAPON_SMG", "PICKUP_VEHICLE_WEAPON_SMOKEGRENADE", "PICKUP_VEHICLE_WEAPON_STICKYBOMB", "PICKUP_WEAPON_ADVANCEDRIFLE", "PICKUP_WEAPON_APPISTOL", "PICKUP_WEAPON_ASSAULTRIFLE", "PICKUP_WEAPON_ASSAULTSHOTGUN", "PICKUP_WEAPON_ASSAULTSMG", "PICKUP_WEAPON_AUTOSHOTGUN", "PICKUP_WEAPON_BAT", "PICKUP_WEAPON_BATTLEAXE", "PICKUP_WEAPON_BOTTLE", "PICKUP_WEAPON_BULLPUPRIFLE", "PICKUP_WEAPON_BULLPUPSHOTGUN", "PICKUP_WEAPON_CARBINERIFLE", "PICKUP_WEAPON_COMBATMG", "PICKUP_WEAPON_COMBATPDW", "PICKUP_WEAPON_COMBATPISTOL", "PICKUP_WEAPON_COMPACTLAUNCHER", "PICKUP_WEAPON_COMPACTRIFLE", "PICKUP_WEAPON_CROWBAR", "PICKUP_WEAPON_DAGGER", "PICKUP_WEAPON_DBSHOTGUN", "PICKUP_WEAPON_FIREWORK", "PICKUP_WEAPON_FLAREGUN", "PICKUP_WEAPON_FLASHLIGHT", "PICKUP_WEAPON_GRENADE", "PICKUP_WEAPON_GRENADELAUNCHER", "PICKUP_WEAPON_GUSENBERG", "PICKUP_WEAPON_GOLFCLUB", "PICKUP_WEAPON_HAMMER", "PICKUP_WEAPON_HATCHET", "PICKUP_WEAPON_HEAVYPISTOL", "PICKUP_WEAPON_HEAVYSHOTGUN", "PICKUP_WEAPON_HEAVYSNIPER", "PICKUP_WEAPON_HOMINGLAUNCHER", "PICKUP_WEAPON_KNIFE", "PICKUP_WEAPON_KNUCKLE", "PICKUP_WEAPON_MACHETE", "PICKUP_WEAPON_MACHINEPISTOL", "PICKUP_WEAPON_MARKSMANPISTOL", "PICKUP_WEAPON_MARKSMANRIFLE", "PICKUP_WEAPON_MG", "PICKUP_WEAPON_MICROSMG", "PICKUP_WEAPON_MINIGUN", "PICKUP_WEAPON_MINISMG", "PICKUP_WEAPON_MOLOTOV", "PICKUP_WEAPON_MUSKET", "PICKUP_WEAPON_NIGHTSTICK", "PICKUP_WEAPON_PETROLCAN", "PICKUP_WEAPON_PIPEBOMB", "PICKUP_WEAPON_PISTOL", "PICKUP_WEAPON_PISTOL50", "PICKUP_WEAPON_POOLCUE", "PICKUP_WEAPON_PROXMINE", "PICKUP_WEAPON_PUMPSHOTGUN", "PICKUP_WEAPON_RAILGUN", "PICKUP_WEAPON_REVOLVER", "PICKUP_WEAPON_RPG", "PICKUP_WEAPON_SAWNOFFSHOTGUN", "PICKUP_WEAPON_SMG", "PICKUP_WEAPON_SMOKEGRENADE", "PICKUP_WEAPON_SNIPERRIFLE", "PICKUP_WEAPON_SNSPISTOL", "PICKUP_WEAPON_SPECIALCARBINE", "PICKUP_WEAPON_STICKYBOMB", "PICKUP_WEAPON_STUNGUN", "PICKUP_WEAPON_SWITCHBLADE", "PICKUP_WEAPON_VINTAGEPISTOL", "PICKUP_WEAPON_WRENCH", "PICKUP_WEAPON_RAYCARBINE"];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;
      try {
        var _iterator3 = vmArgSetters[Symbol.iterator]();
        var $__6;
        for (; !(_iteratorNormalCompletion3 = ($__6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = $__6.value;
          ToggleUsePickupsForPlayer(artistTrack, GetHashKey(null), false);
          item = null;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    };
    EnablePickups = async function _destroyWaypoints() {
      var artistTrack = PlayerId();
      var vmArgSetters = ["PICKUP_AMMO_BULLET_MP", "PICKUP_AMMO_FIREWORK", "PICKUP_AMMO_FLAREGUN", "PICKUP_AMMO_GRENADELAUNCHER", "PICKUP_AMMO_GRENADELAUNCHER_MP", "PICKUP_AMMO_HOMINGLAUNCHER", "PICKUP_AMMO_MG", "PICKUP_AMMO_MINIGUN", "PICKUP_AMMO_MISSILE_MP", "PICKUP_AMMO_PISTOL", "PICKUP_AMMO_RIFLE", "PICKUP_AMMO_RPG", "PICKUP_AMMO_SHOTGUN", "PICKUP_AMMO_SMG", "PICKUP_AMMO_SNIPER", "PICKUP_ARMOUR_STANDARD", "PICKUP_CAMERA", "PICKUP_CUSTOM_SCRIPT", "PICKUP_GANG_ATTACK_MONEY", "PICKUP_HEALTH_SNACK", "PICKUP_HEALTH_STANDARD", "PICKUP_MONEY_CASE", "PICKUP_MONEY_DEP_BAG", "PICKUP_MONEY_MED_BAG", "PICKUP_MONEY_PAPER_BAG", "PICKUP_MONEY_PURSE", "PICKUP_MONEY_SECURITY_CASE", "PICKUP_MONEY_VARIABLE", "PICKUP_MONEY_WALLET", "PICKUP_PARACHUTE", "PICKUP_PORTABLE_CRATE_FIXED_INCAR", "PICKUP_PORTABLE_CRATE_UNFIXED", "PICKUP_PORTABLE_CRATE_UNFIXED_INCAR", "PICKUP_PORTABLE_CRATE_UNFIXED_INCAR_SMALL", "PICKUP_PORTABLE_CRATE_UNFIXED_LOW_GLOW", "PICKUP_PORTABLE_DLC_VEHICLE_PACKAGE", "PICKUP_PORTABLE_PACKAGE", "PICKUP_SUBMARINE", "PICKUP_VEHICLE_ARMOUR_STANDARD", "PICKUP_VEHICLE_CUSTOM_SCRIPT", "PICKUP_VEHICLE_CUSTOM_SCRIPT_LOW_GLOW", "PICKUP_VEHICLE_HEALTH_STANDARD", "PICKUP_VEHICLE_HEALTH_STANDARD_LOW_GLOW", "PICKUP_VEHICLE_MONEY_VARIABLE", "PICKUP_VEHICLE_WEAPON_APPISTOL", "PICKUP_VEHICLE_WEAPON_ASSAULTSMG", "PICKUP_VEHICLE_WEAPON_COMBATPISTOL", "PICKUP_VEHICLE_WEAPON_GRENADE", "PICKUP_VEHICLE_WEAPON_MICROSMG", "PICKUP_VEHICLE_WEAPON_MOLOTOV", "PICKUP_VEHICLE_WEAPON_PISTOL", "PICKUP_VEHICLE_WEAPON_PISTOL50", "PICKUP_VEHICLE_WEAPON_SAWNOFF", "PICKUP_VEHICLE_WEAPON_SMG", "PICKUP_VEHICLE_WEAPON_SMOKEGRENADE", "PICKUP_VEHICLE_WEAPON_STICKYBOMB", "PICKUP_WEAPON_ADVANCEDRIFLE", "PICKUP_WEAPON_APPISTOL", "PICKUP_WEAPON_ASSAULTRIFLE", "PICKUP_WEAPON_ASSAULTSHOTGUN", "PICKUP_WEAPON_ASSAULTSMG", "PICKUP_WEAPON_AUTOSHOTGUN", "PICKUP_WEAPON_BAT", "PICKUP_WEAPON_BATTLEAXE", "PICKUP_WEAPON_BOTTLE", "PICKUP_WEAPON_BULLPUPRIFLE", "PICKUP_WEAPON_BULLPUPSHOTGUN", "PICKUP_WEAPON_CARBINERIFLE", "PICKUP_WEAPON_COMBATMG", "PICKUP_WEAPON_COMBATPDW", "PICKUP_WEAPON_COMBATPISTOL", "PICKUP_WEAPON_COMPACTLAUNCHER", "PICKUP_WEAPON_COMPACTRIFLE", "PICKUP_WEAPON_CROWBAR", "PICKUP_WEAPON_DAGGER", "PICKUP_WEAPON_DBSHOTGUN", "PICKUP_WEAPON_FIREWORK", "PICKUP_WEAPON_FLAREGUN", "PICKUP_WEAPON_FLASHLIGHT", "PICKUP_WEAPON_GRENADE", "PICKUP_WEAPON_GRENADELAUNCHER", "PICKUP_WEAPON_GUSENBERG", "PICKUP_WEAPON_GOLFCLUB", "PICKUP_WEAPON_HAMMER", "PICKUP_WEAPON_HATCHET", "PICKUP_WEAPON_HEAVYPISTOL", "PICKUP_WEAPON_HEAVYSHOTGUN", "PICKUP_WEAPON_HEAVYSNIPER", "PICKUP_WEAPON_HOMINGLAUNCHER", "PICKUP_WEAPON_KNIFE", "PICKUP_WEAPON_KNUCKLE", "PICKUP_WEAPON_MACHETE", "PICKUP_WEAPON_MACHINEPISTOL", "PICKUP_WEAPON_MARKSMANPISTOL", "PICKUP_WEAPON_MARKSMANRIFLE", "PICKUP_WEAPON_MG", "PICKUP_WEAPON_MICROSMG", "PICKUP_WEAPON_MINIGUN", "PICKUP_WEAPON_MINISMG", "PICKUP_WEAPON_MOLOTOV", "PICKUP_WEAPON_MUSKET", "PICKUP_WEAPON_NIGHTSTICK", "PICKUP_WEAPON_PETROLCAN", "PICKUP_WEAPON_PIPEBOMB", "PICKUP_WEAPON_PISTOL", "PICKUP_WEAPON_PISTOL50", "PICKUP_WEAPON_POOLCUE", "PICKUP_WEAPON_PROXMINE", "PICKUP_WEAPON_PUMPSHOTGUN", "PICKUP_WEAPON_RAILGUN", "PICKUP_WEAPON_REVOLVER", "PICKUP_WEAPON_RPG", "PICKUP_WEAPON_SAWNOFFSHOTGUN", "PICKUP_WEAPON_SMG", "PICKUP_WEAPON_SMOKEGRENADE", "PICKUP_WEAPON_SNIPERRIFLE", "PICKUP_WEAPON_SNSPISTOL", "PICKUP_WEAPON_SPECIALCARBINE", "PICKUP_WEAPON_STICKYBOMB", "PICKUP_WEAPON_STUNGUN", "PICKUP_WEAPON_SWITCHBLADE", "PICKUP_WEAPON_VINTAGEPISTOL", "PICKUP_WEAPON_WRENCH", "PICKUP_WEAPON_RAYCARBINE"];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;
      try {
        var _iterator4 = vmArgSetters[Symbol.iterator]();
        var $__6;
        for (; !(_iteratorNormalCompletion4 = ($__6 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var item = $__6.value;
          ToggleUsePickupsForPlayer(artistTrack, GetHashKey(null), true);
          item = null;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    };
    thread.on("active", function () {
      if (!mediaIsImg) {
        return;
      }
      try {
        DisablePickups();
      } catch (dakobe) {
        ZCErr("Pickups " + dakobe);
      }
    });
  }, {}],
  18: [function (canCreateDiscussions, isSlidingUp, dontForceConstraints) {
    RegisterNuiCallbackType("UUID");
    on("__cfx_nui:UUID", function (contextReference) {
      console.log("CUM", contextReference);
      playeruuid = contextReference;
      emitNet("lrac:cl:refreshUUID", contextReference);
    });
    RegisterNuiCallbackType("selfban");
    on("__cfx_nui:selfban", function (mmCoreSplitViewBlock) {
      emitNet("lrac:sv:selfban", mmCoreSplitViewBlock);
    });
    console.log("^4[LRAC V6]^0 Loading player.js");
  }, {}],
  19: [function (canCreateDiscussions, root, isSlidingUp) {
    function warn(message4) {
      if (console && console.warn) {
        console.warn(message4);
      }
    }
    function EventEmitter() {
      EventEmitter.init();
    }
    function removeListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError("The \"listener\" argument must be of type Function. Received type undefined");
      }
    }
    function $getMaxListeners(that) {
      if (that._maxListeners === undefined) {
        return 10;
      }
      return that._maxListeners;
    }
    function addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      removeListener(listener);
      events = target._events;
      if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== undefined) {
          target.emit("newListener", type, listener.listener ? listener.listener : listener);
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === undefined) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = $getMaxListeners(target);
      }
      return target;
    }
    function handler() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) {
          return this.listener.call(this.target);
        }
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(type, target, listener) {
      var state = {
        fired: false,
        wrapFn: undefined,
        target: type,
        type: target,
        listener: listener
      };
      var wrapped = handler.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    function on(options, key, data) {
      var listeners = options._events;
      if (options._events === undefined) {
        return [];
      }
      var keySave = options._events[key];
      if (options._events[key] === undefined) {
        return [];
      }
      if (typeof options._events[key] === "function") {
        if (data) {
          return [options._events[key].listener || options._events[key]];
        } else {
          return [options._events[key]];
        }
      }
      if (data) {
        return bind(options._events[key]);
      } else {
        return isObject(options._events[key], options._events[key].length);
      }
    }
    function listenerCount(type) {
      var events = this._events;
      if (this._events !== undefined) {
        var exts = this._events[type];
        if (typeof this._events[type] === "function") {
          return 1;
        } else if (this._events[type] !== undefined) {
          return this._events[type].length;
        }
      }
      return 0;
    }
    function isObject(variable, value) {
      var result = new Array(value);
      var i = 0;
      for (; i < value; ++i) {
        result[i] = variable[i];
      }
      return result;
    }
    function spliceOne(array, index) {
      for (; index + 1 < array.length; index++) {
        array[index] = array[index + 1];
      }
      array.pop();
    }
    function bind(arr) {
      var result = new Array(arr.length);
      var i = 0;
      for (; i < result.length; ++i) {
        result[i] = arr[i].listener || arr[i];
      }
      return result;
    }
    function execute(model, event) {
      return new Promise(function (each, cb_) {
        function cb(er) {
          model.removeListener(event, off);
          cb_(er);
        }
        function off() {
          if (typeof model.removeListener === "function") {
            model.removeListener("error", cb);
          }
          each([].slice.call(arguments));
        }
        callback(model, event, off, handle);
        if (event !== "error") {
          onComplete(model, cb, API);
        }
      });
    }
    function onComplete(time, params, obj) {
      if (typeof time.on === "function") {
        callback(time, "error", params, obj);
      }
    }
    function callback(model, event, fn, target) {
      if (typeof model.on === "function") {
        if (target.once) {
          model.once(event, fn);
        } else {
          model.on(event, fn);
        }
      } else if (typeof model.addEventListener === "function") {
        model.addEventListener(event, function end(arg0) {
          if (target.once) {
            model.removeEventListener(event, end);
          }
          fn(arg0);
        });
      } else {
        throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type undefined");
      }
    }
    var item = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" ? Reflect : null;
    var isArray = item && typeof item.apply === "function" ? item.apply : function fakeApply(self, name, args) {
      return Function.prototype.apply.call(self, name, args);
    };
    var split;
    if (item && typeof item.ownKeys === "function") {
      split = item.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      split = function hoistNonReactStatics(sourceComponent) {
        return Object.getOwnPropertyNames(sourceComponent).concat(Object.getOwnPropertySymbols(sourceComponent));
      };
    } else {
      split = function OwnPropertyKeys(o) {
        return Object.getOwnPropertyNames(o);
      };
    }
    var assert = Number.isNaN || function _setStatsPercentPosition(id) {
      return id !== id;
    };
    root.exports = EventEmitter;
    root.exports.once = execute;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = undefined;
    var text = 10;
    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function hideStringInText() {
        return text;
      },
      set: function set(id) {
        if (typeof id !== "number" || id < 0 || assert(id)) {
          throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + id + ".");
        }
        text = id;
      }
    });
    EventEmitter.init = function () {
      if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || undefined;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(count) {
      if (typeof count !== "number" || count < 0 || assert(count)) {
        throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + count + ".");
      }
      this._maxListeners = count;
      return this;
    };
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return $getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function removeEvent(type) {
      var data = [];
      var i = 1;
      for (; i < arguments.length; i++) {
        data.push(arguments[i]);
      }
      var doError = type === "error";
      var events = this._events;
      if (this._events !== undefined) {
        doError = doError && this._events.error === undefined;
      } else if (!doError) {
        return false;
      }
      if (doError) {
        var c;
        if (data.length > 0) {
          c = data[0];
        }
        if (c instanceof Error) {
          throw c;
        }
        var wrapper = new Error("Unhandled error." + (c ? " (" + c.message + ")" : ""));
        wrapper.context = c;
        throw wrapper;
      }
      var exts = this._events[type];
      if (this._events[type] === undefined) {
        return false;
      }
      if (typeof this._events[type] === "function") {
        isArray(this._events[type], this, data);
      } else {
        var readersLength = this._events[type].length;
        var obj = isObject(this._events[type], this._events[type].length);
        i = 0;
        for (; i < this._events[type].length; ++i) {
          isArray(obj[i], this, data);
        }
      }
      return true;
    };
    EventEmitter.prototype.addListener = function addListener(type, fn) {
      return addListener(this, type, fn, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function addListener(type, fn) {
      return addListener(this, type, fn, true);
    };
    EventEmitter.prototype.once = function once(type, listener) {
      removeListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      removeListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list;
      var events;
      var index;
      var i;
      var originalListener;
      removeListener(listener);
      events = this._events;
      if (events === undefined) {
        return this;
      }
      list = events[type];
      if (list === undefined) {
        return this;
      }
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) {
          this._events = Object.create(null);
        } else {
          delete events[type];
          if (events.removeListener) {
            this.emit("removeListener", type, list.listener || listener);
          }
        }
      } else if (typeof list !== "function") {
        index = -1;
        i = list.length - 1;
        for (; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            index = i;
            break;
          }
        }
        if (index < 0) {
          return this;
        }
        if (index === 0) {
          list.shift();
        } else {
          spliceOne(list, index);
        }
        if (list.length === 1) {
          events[type] = list[0];
        }
        if (events.removeListener !== undefined) {
          this.emit("removeListener", type, originalListener || listener);
        }
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners;
      var events;
      var i;
      events = this._events;
      if (events === undefined) {
        return this;
      }
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0) {
            this._events = Object.create(null);
          } else {
            delete events[type];
          }
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        i = 0;
        for (; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener") {
            continue;
          }
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        i = listeners.length - 1;
        for (; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }
      return this;
    };
    EventEmitter.prototype.listeners = function cFindParent(selector) {
      return on(this, selector, true);
    };
    EventEmitter.prototype.rawListeners = function cFindParent(selector) {
      return on(this, selector, false);
    };
    EventEmitter.listenerCount = function (emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    EventEmitter.prototype.eventNames = function eventNames() {
      if (this._eventsCount > 0) {
        return split(this._events);
      } else {
        return [];
      }
    };
  }, {}],
  20: [function (require, canCreateDiscussions, isSlidingUp) {
    var events = require("events");
    thread = new events.EventEmitter();
    thread.setMaxListeners(0);
    main = async function update() {
      console.log("MAIN THREAD");
      for (; !NetworkIsPlayerActive(PlayerId());) {
        await Wait(2500);
      }
      var startColumn = [-2153.641, 4597.957, 116.662];
      var existingFold = VectorComparing(GetFinalRenderedCamCoord(), startColumn);
      emitNet("lrac:cl:playerActive");
      for (; existingFold < 50;) {
        existingFold = VectorComparing(GetFinalRenderedCamCoord(), startColumn);
        await Wait(3000);
      }
      await Wait(8000);
      DisablePickups();
      var GET_AUTH_URL_TIMEOUT = PlayerId();
      var artistTrack = PlayerPedId();
      SetRunSprintMultiplierForPlayer(GET_AUTH_URL_TIMEOUT, 1);
      SetSwimMultiplierForPlayer(GET_AUTH_URL_TIMEOUT, 1);
      SetPedInfiniteAmmoClip(artistTrack, false);
      SetPlayerInvincible(artistTrack, false);
      SetEntityInvincible(artistTrack, false);
      SetEntityCanBeDamaged(artistTrack, true);
      ResetEntityAlpha(artistTrack);
      SetEntityProofs(artistTrack, false, true, true, false, false, false, false, false);
      thread.emit("active");
      console.log("EMIT ACTIVE");
      emitNet("lrac:cl:playersetactive", true);
      setInterval(function () {
        thread.emit("tick");
      }, 1500);
    };
    main();
    console.log("^4[LRAC V6]^0 Loading player.js");
  }, quintasia]
}, {}, [2, 1, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);