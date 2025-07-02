import { Request, Response } from "express";
import { contactServices } from "./contact.services";

const createContact = async(req: Request, res: Response) => {
   try {
    const result = await contactServices.createContactInDB(req.body);

    res.status(201).send({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Invalid contact data",
      error: error instanceof Error ? error.message : error,
    });
  }
}

export const contactController = {
    createContact
}