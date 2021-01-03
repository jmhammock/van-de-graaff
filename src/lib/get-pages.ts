import fs from 'fs';
import path from 'path';
import getPageContent from './get-page-content';
import { Converter } from 'showdown';

export interface PageData {
    content: string,
    data: Record<string, unknown>
}

const pagesDir: string = path.join(process.cwd(), 'src/pages');

const convertPageContent = (file: string): PageData => {
    const pageData = getPageContent(path.join(pagesDir, file));
    return { ...pageData, content: (new Converter()).makeHtml(pageData.content) }
}

export default (): PageData[] => {
    try {
        const files = fs.readdirSync(pagesDir)
            .map(file => convertPageContent(file));
        return files;
    } catch (err) {
        console.error(err.message);
        return [];
    }
}