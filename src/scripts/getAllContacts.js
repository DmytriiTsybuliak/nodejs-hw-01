import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    const fileContent = await fs.readFile(PATH_DB);
    let results = [];
    fileContent.length != 0 ? results = JSON.parse(fileContent.toString("utf-8")) : 0;
    return results;
};

console.log(await getAllContacts());
