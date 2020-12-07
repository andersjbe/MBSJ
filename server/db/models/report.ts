import { Document, model, Model, Schema } from "mongoose";

interface IReport extends Document {
  salary: number;
  company: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  role: string;
  title?: string;
  yoe: number;
  demographics: {
    race?: string;
    age?: number;
    gender?: string;
    sexualOrientation?: string;
    transNonbinary?: boolean;
    disability?: boolean;
  };
  note?: string;
}

const ReportSchema: Schema = new Schema({
  salary: { type: Number, required: true },
  company: { type: String, required: true },
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  role: { type: String, required: true },
  title: { type: String },
  yoe: { type: Number, required: true },
  demographics: {
    race: { type: String },
    age: { type: Number },
    gender: { type: String },
    sexualOrientation: { type: String },
    transNonbinary: { type: Boolean },
    disability: { type: Boolean },
  },
  note: { type: String },
});

export const Report: Model<IReport> = model('Report', ReportSchema);
