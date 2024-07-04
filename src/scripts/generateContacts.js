import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
    const fileContent = await fs.readFile(PATH_DB);
    let results = [];
    fileContent.length != 0 ? results = JSON.parse(fileContent.toString("utf-8")) : 0;
    for (let index = 0; index < number; index++) {
        results.push(createFakeContact());
    }
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(results));
        console.log('Successfully generated to file');
    } catch (err) {
        console.error('Error in generation', err);
    }
};

generateContacts(5);
