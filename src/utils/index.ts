import { Types } from "mongoose";
import { updateLeadAllowedPath } from "../db/lead";

export const fakeDelay = async (time: number): Promise<void> =>
  await new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export const startFakeSignAwait = (id: Types.ObjectId): void => {
  (async () => {
    console.log('START FAKE DELAY FOR LEAD SIGN')
    await fakeDelay(process.env.SIGN_DELAY ? +process.env.SIGN_DELAY : 7500);
    await updateLeadAllowedPath(id, "/attachment");
    console.log('END FAKE DELAY FOR LEAD SIGN')
  })();
};
