import { Router } from "express";
import { contactController } from "./contact.controller";


const contactRouter = Router();

contactRouter.post("/", contactController.createContact )

export default contactRouter;