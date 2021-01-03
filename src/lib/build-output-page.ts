import fs from 'fs';
import path from 'path';
import pug from 'pug';
import { PageData } from './get-pages';

const cleanDirectory = (dirPath: string): void => {
    if (fs.existsSync(dirPath)) {
        fs.rmdirSync(dirPath, { recursive: true });
    }
    fs.mkdirSync(dirPath);
}

export default (fileData: PageData): void => {
    const pageOutput = pug.renderFile(path.join(process.cwd(), 'src/templates/single.pug'), fileData);
    const dirPath = path.join(process.cwd(), 'dist', (fileData.data.title as string).toLowerCase());
    cleanDirectory(dirPath);
    fs.writeFileSync(`${dirPath}/index.html`, pageOutput);
}

