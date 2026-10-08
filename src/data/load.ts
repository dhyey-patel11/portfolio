import fs from 'node:fs';
import path from 'node:path';
import { load } from 'js-yaml';

export type Portfolio = any;
const raw = fs.readFileSync(path.resolve('src/data/portfolio.yaml'), 'utf8');
export const portfolio = load(raw) as Portfolio;
