import { Schema, model, models } from "mongoose";

export interface IImage extends Document {
  _id: string;
  title: string;
  transformationType: string;
  publicId: string;
  secureURL: string;
  width: number;
  height: number;
  config: object;
  transformationUrl: string;
  aspectRatio: string;
  color: string;
  prompt: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ImageSchema = new Schema({
  title: { type: String, require: true },
  transformationType: { type: String, require: true },
  publicId: { type: String, require: true },
  secureUrl: { type: URL, require: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
