// Loads the built script.js in Node (with minimal browser stubs, without
// booting the UI), merges in every content/<track>.json the way the app does
// when a page needs it, and returns the academy's data objects for checks.
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// extra: more top-level names to expose (functions, for logic tests); the
// live app state is available as getState().
export function loadAcademy(extra = []) {
  const src = readFileSync(join(root, 'script.js'), 'utf8');
  const stub = `var window={matchMedia:()=>({matches:false}),addEventListener(){}};var document={readyState:'loading',addEventListener(){},querySelector(){return null},querySelectorAll(){return[]},documentElement:{dataset:{}},body:{dataset:{}}};var localStorage={getItem(){return null},setItem(){},removeItem(){}};var sessionStorage=localStorage;var location={hash:'',search:'',protocol:'file:',origin:'',pathname:'/'};var navigator={onLine:true};var matchMedia=window.matchMedia;var history={};`;
  const body = src.trim().replace(/\}\)\(\);?$/, '').replace(/^[\s\S]*?\(function\s*\(\)\s*\{/, '');
  const names = ['TRACKS', 'TRACK_BY_ID', 'LESSONS', 'LESSON_MAP', 'GLOSSARY', 'findTerm', 'LIBRARY', 'LIB_MAP', 'LIB_PHOTOS', 'ART', 'SOFTWARE', 'SW_SECTIONS', 'LEARN_PATH', 'LEARN_TOGETHER', 'NOT_YET', 'SCENARIOS', 'TREES', 'EXERCISES', 'FLASHCARDS', 'EXAMS', 'REF', 'MOCKS', 'PREPOST'];
  names.push(...extra);
  const content = Object.fromEntries(readdirSync(join(root, 'content')).filter((f) => f.endsWith('.json')).map((f) => [f.slice(0, -5), JSON.parse(readFileSync(join(root, 'content', f), 'utf8'))]));
  const apply = `Object.entries(${JSON.stringify(content)}).forEach(([id, d]) => applyContent(id, d));`;
  const ret = apply + `
return {getState: () => state, ${names.map((n) => `${n}: typeof ${n} !== 'undefined' ? ${n} : undefined`).join(',')}};`;
  return new Function(stub + body + '\n' + ret)();
}
