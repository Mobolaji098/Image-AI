import {Document, model, models, Schema,Types } from "mongoose";

export interface IImage extends Document {
  _id:string;
  title: string;
  transformationType: string;
  publicId: string;
  secureURL: String;
  width?: number;
  height?: number;
  config?: Record<string, object>;
  transformationUrl?: String;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: Types.ObjectId; // Assuming this references a User model
  createdAt?: Date;
  updatedAt?: Date;
}
const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureURL: { type: String, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: String },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model<IImage>("Image", ImageSchema);

export default Image;