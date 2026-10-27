import { readFileSync } from 'node:fs';

const html = readFileSync('rayos-x-pwa/index.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/i);
if (!match) throw new Error('No se encontró el script de la aplicación');
new Function(match[1]);

const puzzles = JSON.parse(readFileSync('rayos-x-pwa/data/mate-en-una.json', 'utf8'));
if (!Array.isArray(puzzles) || puzzles.length === 0) throw new Error('El catálogo está vacío');

for (const [i, puzzle] of puzzles.entries()) {
  if (!Number.isInteger(puzzle.id)) throw new Error(`Ejercicio ${i + 1}: falta id`);
  if (!puzzle.fen || puzzle.fen.split(' ')[0].split('/').length !== 8) throw new Error(`Ejercicio ${puzzle.id}: FEN inválido`);
  if (!['w', 'b'].includes(puzzle.sideToMove)) throw new Error(`Ejercicio ${puzzle.id}: sideToMove inválido`);
  if (!Array.isArray(puzzle.solutionUci) || puzzle.solutionUci.length === 0 || !/^[a-h][1-8][a-h][1-8][qrbn]?$/i.test(puzzle.solutionUci[0])) {
    throw new Error(`Ejercicio ${puzzle.id}: primera jugada UCI inválida`);
  }
}
console.log(`OK: JS sintácticamente válido y ${puzzles.length} ejercicio(s) con esquema básico correcto.`);
