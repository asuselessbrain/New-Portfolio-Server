import { contact } from "./contact.module"

const createContactInDB = async(payload: IContact) => {
    const result = await contact.insertOne(payload);
    return result;
}

export const contactServices = {
    createContactInDB
}