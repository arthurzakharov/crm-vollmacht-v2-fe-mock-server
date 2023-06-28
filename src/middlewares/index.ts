import type { Request, Response, NextFunction } from "express";
import { fakeDelay } from "../utils";

export const delay = async (req: Request, res: Response, next: NextFunction) => {
  await fakeDelay(process.env.DELAY ? +process.env.DELAY : 750);
  next();
};
