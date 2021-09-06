const jsonPatcher = require("jsonpatch");
const fs = require("fs");

let base = require("./base.json");
let patches = require("./patches.json");

const dest = jsonPatcher.apply_patch(base, patches);

fs.writeFileSync("./openapi.json", JSON.stringify(dest));
