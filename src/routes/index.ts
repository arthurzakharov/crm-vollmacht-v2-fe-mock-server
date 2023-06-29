import express from "express";
import {
  getConfigJson,
  getAuthenticate,
  postFirstView,
  getSignature,
  postSign,
  postSignRemuneration,
  postInsuranceInformation,
  postClientSurvey,
  postFiles,
} from "../controllers";

const router = express.Router();

router.get("/config.json", getConfigJson);

router.get("/authenticate/:secret", getAuthenticate);

router.post("/first-view", postFirstView);

router.get("/getsignature/*", getSignature);

router.post("/sign", postSign);

router.post("/sign/remuneration", postSignRemuneration);

router.post("/insurance-information", postInsuranceInformation);

router.post("/client-survey", postClientSurvey);

router.post("/files", postFiles);

export default router;
