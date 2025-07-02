import { Router } from "express";


const contactRouter = Router();

contactRouter.post("/", contactController.createContact )

export default contactRouter;