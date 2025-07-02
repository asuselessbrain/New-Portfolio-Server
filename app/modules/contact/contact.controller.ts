import { Request, Response } from "express";

const createContact = async(req: Request, res: Response) => {
    const result = await contactServices.cresteContactInDB(req.body);

    res.send(
        {
            status: 201,
            success: true,
            data: result
        }
    )
}

export default contactController = {
    createContact
}