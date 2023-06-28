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

router.get("/api/authenticate/:secret", getAuthenticate);

router.post("/api/first-view", postFirstView);

router.get("/api/getsignature/*", getSignature);

router.post("/api/sign", postSign);

router.post("/api/sign/remuneration", postSignRemuneration);

router.post("/api/insurance-information", postInsuranceInformation);

router.post("/api/client-survey", postClientSurvey);

router.post("/files", postFiles);

export default router;
