import type {AllowedPathType, GetAuthenticateResponse, GetConfigJsonResponse, GetSignatureResponse} from "../types";

export const getConfigJsonResponseMock = (url: string): GetConfigJsonResponse => ({
  API_URL: `https://${url}/api`,
  NODE_ENV: "production",
});

export const getSignatureResponseMock = (): GetSignatureResponse => ({
  raw: "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",
});

export const getAuthenticationHomeMock = (firstViewUrl: string | null, allowedPath: AllowedPathType):GetAuthenticateResponse => ({
  allowedPath,
  attachmentSections: null,
  caseGroupLawyerNames: "Mathis Ruff und Gina Schulz",
  charge: "Geschwindig­keitsverstoß",
  firstViewUrl,
  fullName: "Arthur Zakharov",
  poaData: {
    customerData: {
      agreedToLawInsuranceRequest: null,
      birthCity: "",
      birthDate: "",
      birthName: "",
      city: "",
      dropRevocationAgreement: null,
      firstName: "Arthur",
      houseNumber: "",
      isAragSwitched: null,
      isSwitched: null,
      lastName: "Zakharov",
      postCode: "",
      powerOfAttorneyAgreement: null,
      salutation: "male",
      signature: null,
      street: "",
    },
    hasInsurance: true,
    insuranceType: "default",
    latestSentPoaType: "insurance",
    showAragSwitch: false,
    showSwitch: true,
    switchPoaType: "noInsurance500",
    switchTotal: 500,
  },
  reference: "RV23.0411-177944",
  total: 0,
  uploadUuid: null,
});
