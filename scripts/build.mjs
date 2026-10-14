import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'Flight_Deck_Fixed.html');
const dest = join(root, 'index.html');

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(src, dest);
console.log('Built index.html from Flight_Deck_Fixed.html');
