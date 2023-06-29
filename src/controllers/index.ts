import type { Request, Response } from "express";
import type { GetAuthenticateResponse, GetConfigJsonResponse } from "../types";
import { createLead, getLeadBySecret, updateLeadFirstViewUrl } from "../db/lead";
import { getAuthenticationHomeMock, getConfigJsonResponseMock, getSignatureResponseMock } from "../mocks";
import { startFakeSignAwait } from "../utils";

export const getConfigJson = (req: Request, res: Response<GetConfigJsonResponse>) => {
  try {
    res.json(getConfigJsonResponseMock(req.headers.host || ""));
  } catch (error) {
    console.error("[getConfigJson]", error);
    return res.sendStatus(400);
  }
};

export const getAuthenticate = async (req: Request, res: Response<GetAuthenticateResponse>) => {
  try {
    const secret = req.params.secret;
    const existingUser = await getLeadBySecret(secret);
    if (existingUser) {
      return res.status(200).json(getAuthenticationHomeMock).end();
    } else {
      await createLead({ secret, firstViewUrl: null, allowedPath: "/" });
      return res.status(200).json(getAuthenticationHomeMock).end();
    }
  } catch (error) {
    console.error("[getAuthenticate]", error);
    return res.sendStatus(400);
  }
};

export const postFirstView = async (req: Request, res: Response) => {
  try {
    const { secret, url } = req.body;
    if (secret === undefined || url === undefined) return res.sendStatus(400);
    const existingLead = await getLeadBySecret(secret);
    if (!existingLead) return res.sendStatus(400);
    await updateLeadFirstViewUrl(existingLead._id, url);
    return res.sendStatus(204);
  } catch (error) {
    console.error("[postFirstView]", error);
    return res.sendStatus(400);
  }
};

export const getSignature = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(getSignatureResponseMock()).end();
  } catch (error) {
    console.error("[getSignature]", error);
    return res.sendStatus(400);
  }
};

export const postSign = async (req: Request, res: Response) => {
  try {
    const { secret } = req.body;
    if (!secret) return res.sendStatus(400);
    const existingLead = await getLeadBySecret(secret);
    if (!existingLead || existingLead.allowedPath !== "/") return res.sendStatus(400);
    startFakeSignAwait(existingLead._id);
    return res.sendStatus(204);
  } catch (error) {
    console.error("[postSign]", error);
    return res.sendStatus(400);
  }
};

export const postSignRemuneration = async (req: Request, res: Response) => {
  try {
    const { secret } = req.body;
    if (!secret) return res.sendStatus(400);
    const existingLead = await getLeadBySecret(secret);
    if (!existingLead || existingLead.allowedPath !== "/remuneration") return res.sendStatus(400);
    startFakeSignAwait(existingLead._id);
    return res.sendStatus(204);
  } catch (error) {
    console.error("[postSignRemuneration]", error);
    return res.sendStatus(400);
  }
};

export const postInsuranceInformation = (req: Request, res: Response) => {
  try {
    res.sendStatus(204);
  } catch (error) {
    console.error("[postInsuranceInformation]", error);
    return res.sendStatus(400);
  }
};

export const postClientSurvey = (req: Request, res: Response) => {
  try {
    res.sendStatus(204);
  } catch (error) {
    console.error("[postClientSurvey]", error);
    return res.sendStatus(400);
  }
};

export const postFiles = (req: Request, res: Response) => {
  try {
    res.sendStatus(204);
  } catch (error) {
    console.error("[postFiles]", error);
    return res.sendStatus(400);
  }
};
