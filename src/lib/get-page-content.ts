import fs from 'fs';
import matter = require('gray-matter');
import { GrayMatterFile } from 'gray-matter';

export default (file: string): GrayMatterFile<string> => {
    const fileContent: string = fs.readFileSync(file, 'utf-8');
    return matter(fileContent);
}