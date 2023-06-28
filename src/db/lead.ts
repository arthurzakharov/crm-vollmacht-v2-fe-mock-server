import { Schema, model, Types } from "mongoose";
import { AllowedPathType, LeadType } from "../types";

const LeadSchema = new Schema({
  secret: { type: String, required: true },
  firstViewUrl: {type: Schema.Types.Mixed, required: false },
  allowedPath: { type: String, required: true },
});

export const LeadModel = model("Lead", LeadSchema);

export const getLeadBySecret = async (secret: string) => await LeadModel.findOne({ secret });

export const createLead = async (newLead: LeadType) => {
  await new LeadModel(newLead).save();
}

export const updateLeadFirstViewUrl = async (id: Types.ObjectId, firstViewUrl: string) =>
  await LeadModel.findByIdAndUpdate(id, { firstViewUrl });

export const updateLeadAllowedPath = async (id: Types.ObjectId, allowedPath: AllowedPathType) =>
  await LeadModel.findByIdAndUpdate(id, { allowedPath });
