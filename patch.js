const fs = require("fs");
const { applyPatch } = require('fast-json-patch');

let base = require("./base.json");
let patches = require("./patches.js");

const dest = applyPatch(base, patches).newDocument;

fs.writeFileSync("./openapi.json", JSON.stringify(dest));
