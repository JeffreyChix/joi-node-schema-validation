import { Router, Request, Response } from "express";

import schemaValidator from "../../middleware/schemaValidator";

const router = Router();

router.post(
  "/signin",
  schemaValidator("/auth/signin"),
  (req: Request, res: Response) => {
    return res.send("You've successfully logged in ✔");
  }
);

router.post(
  "/signup",
  schemaValidator("/auth/signup"),
  (req: Request, res: Response) => {
    return res.send("Sign up complete ✔");
  }
);

export default router;
