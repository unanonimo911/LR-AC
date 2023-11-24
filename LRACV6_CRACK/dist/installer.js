"use strict";

var leighland = require("fs");
var lourene = async function load(path, data, type) {
  await leighland.readdirSync(path).forEach(async function (name) {
    var statObj = await leighland.lstatSync(path + name);
    if (statObj.isDirectory() && (type == null || type.endsWith("]") || type == "resources" || type == "cache")) {
      load(path + name + "/", data, name);
    }
    if (name == "fxmanifest.lua" || name == "__resource.lua") {
      if (data) {
        sonia(path + name);
      } else {
        emeric(path + name);
      }
    }
  });
};
var emeric = async function build(outFile) {
  console.log("Installed on: " + outFile);
  await Wait(10);
  var body = await leighland.readFileSync(outFile);
  if (body.includes("@LRACV6")) {
    return;
  }
  await Wait(90);
  leighland.writeFileSync(outFile, "shared_script '@LRACV6/shared.lua'\n" + body);
};
var sonia = async function removePatternFromFile(file) {
  console.log("Uninstalled on: " + file);
  await Wait(10);
  var checks = await leighland.readFileSync(file);
  if (!checks.includes("@LRACV6")) {
    return;
  }
  await Wait(90);
  checks = leighland.writeFileSync(file, checks.toString().replace(/(shared_script '@LRACV6\/shared.lua'\n)/g, "").replace(/(shared_script "@LRACV6\/LRAC.lua" --Dont touch it!\n)/g, "").replace(/(shared_script "@LRACV6\/LRAC.js" --Dont touch it!\n)/g, ""));
};
var liiban = async function handleListItemSwap(isBgroundImg) {
  if (isBgroundImg != 0) {
    return;
  }
  lourene("./");
};
var alodie = async function handleListItemSwap(isBgroundImg) {
  if (isBgroundImg != 0) {
    return;
  }
  lourene("./", true);
};
RegisterCommand("lracinstall", function (isBgroundImg) {
  liiban(isBgroundImg);
});
RegisterCommand("lracuninstall", function (isBgroundImg) {
  alodie(isBgroundImg);
});