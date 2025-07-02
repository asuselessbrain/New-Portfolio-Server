import { Request, Response } from "express";
import { contactServices } from "./contact.services";

const createContact = async(req: Request, res: Response) => {
    const result = await contactServices.createContactInDB(req.body);

    res.send(
        {
            status: 201,
            success: true,
            data: result
        }
    )
}

export const contactController = {
    createContact
}