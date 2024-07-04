import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    const fileContent = await fs.readFile(PATH_DB);
    let results = [];
    fileContent.length != 0 ? results = JSON.parse(fileContent.toString("utf-8")) : 0;
    results.pop();
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(results));
        console.log('Last element was deleted');
    } catch (err) {
        console.error('Error in deleting last element', err);
    }
};

removeLastContact();
