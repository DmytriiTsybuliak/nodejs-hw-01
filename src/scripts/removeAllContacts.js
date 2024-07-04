import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, '[]');
        console.log('Data has been successfully deleted from the file.');
    } catch (err) {
        console.error('Error: ', err);
    }
};

removeAllContacts();
