export type AllowedPathType = "/" | "/attachment" | "/remuneration";

export type AttachmentSectionNameType = "insurance" | "files" | "survey";

export type InsuranceType = "default" | "arag";

export type PoaType =
  | "insurance"
  | "insuranceA"
  | "insuranceB"
  | "noInsurance"
  | "noInsuranceA"
  | "noInsuranceB"
  | "noInsurance500"
  | "noInsuranceDiscounted"
  | "insuranceMaybe"
  | "insuranceMaybe500"
  | "insuranceUncertain500Automatic"
  | "alcohol400"
  | "alcohol500"
  | "alcohol1000"
  | "insuranceArag"
  | "insuranceAragVerso"
  | "insuranceAragUncertain"
  | "insuranceAragUncertain500"
  | "withoutRsv400Court"
  | "RA250"
  | "RA300"
  | "RA400"
  | "RA500"
  | "RA700"
  | "RA1000"
  | "insuranceUncertain500DeutscheDirektVersicherung";

export type CustomerDataType = {
  agreedToLawInsuranceRequest: boolean | null;
  birthCity: string;
  birthDate: string;
  birthName: string;
  city: string;
  dropRevocationAgreement: boolean | null;
  firstName: string;
  houseNumber: string;
  isAragSwitched: null;
  isSwitched: null;
  lastName: string;
  postCode: string;
  powerOfAttorneyAgreement: boolean | null;
  salutation: string;
  signature: string | null;
  street: string;
};

export type AttachmentSectionType = {
  completed: boolean | null;
  index: number;
  name: AttachmentSectionNameType;
  data?: {
    uploadsCount: number;
  };
};

export type PoaDataType = {
  customerData: CustomerDataType;
  hasInsurance: boolean;
  insuranceType: InsuranceType;
  latestSentPoaType: PoaType;
  showAragSwitch: boolean;
  showSwitch: boolean;
  switchPoaType: PoaType;
  switchTotal: number;
};

export type LeadType = {
  secret: string;
  firstViewUrl: string | null;
  allowedPath: AllowedPathType;
};

export type GetConfigJsonResponse = {
  API_URL: string;
  NODE_ENV: "production" | "development";
};

export type GetSignatureResponse = {
  raw: string;
};

export type GetAuthenticateResponse = {
  allowedPath: AllowedPathType;
  attachmentSections: AttachmentSectionType[] | null;
  caseGroupLawyerNames: string;
  charge: string;
  firstViewUrl: string | null;
  fullName: string;
  poaData: PoaDataType | null;
  reference: string;
  total: number;
  uploadUuid: string | null;
};
