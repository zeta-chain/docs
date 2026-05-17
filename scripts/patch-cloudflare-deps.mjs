// Strip Cloudflare/edge export conditions from @emotion/* packages.
//
// Why: Emotion's package.json maps the `worker`, `workerd`, and `edge-light`
// conditions to `*.edge-light.cjs.js` files. Next.js traces the server build
// in Node mode, so those files never make it into `.open-next/server-functions`.
// When OpenNext re-bundles for workerd with esbuild, those conditions resolve
// to missing files and the build fails. Removing them lets esbuild fall through
// to the `default` entry that is actually copied.
//
// Some emotion packages (e.g. @emotion/cache@11.14) nest these conditions
// inside a `development` block, so we recurse through the exports map.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, sep } from "node:path";

const ROOT = join(process.cwd(), "node_modules");
const CONDITIONS = new Set(["edge-light", "worker", "workerd"]);
const EMOTION_SEGMENT = `${sep}@emotion${sep}`;
const PKG_LEAF_RE = /[\\/]@emotion[\\/][^\\/]+$/;

let patched = 0;

const stripConditions = (node) => {
  if (!node || typeof node !== "object" || Array.isArray(node)) return false;
  let changed = false;
  for (const key of Object.keys(node)) {
    if (CONDITIONS.has(key)) {
      delete node[key];
      changed = true;
      continue;
    }
    if (stripConditions(node[key])) changed = true;
  }
  return changed;
};

const patchPackage = (pkgJsonPath) => {
  let pkgJson;
  try {
    pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
  } catch {
    return;
  }
  if (!pkgJson.exports) return;

  if (stripConditions(pkgJson.exports)) {
    writeFileSync(pkgJsonPath, `${JSON.stringify(pkgJson, null, 2)}\n`);
    patched += 1;
  }
};

const walk = (dir) => {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const ent of entries) {
    if (!ent.isDirectory()) continue;
    const full = join(dir, ent.name);
    if (full.includes(EMOTION_SEGMENT) && PKG_LEAF_RE.test(full)) {
      patchPackage(join(full, "package.json"));
    }
    walk(full);
  }
};

walk(ROOT);
console.log(`patch-cloudflare-deps: ${patched} @emotion package(s) patched`);
