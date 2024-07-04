import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
    const fileContent = await fs.readFile(PATH_DB);
    let results = [];
    fileContent.length != 0 ? results = JSON.parse(fileContent.toString("utf-8")) : 0;
    results.push(createFakeContact());
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(results));
        console.log('Дані успішно додані до файлу.');
    } catch (err) {
        console.error('Помилка додавання даних до файлу:', err);
    }
};

addOneContact();
