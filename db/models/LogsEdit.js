import { Schema, model, models } from "mongoose";

const LogsEditScheme = new Schema({
  offerId: {
    type: Schema.Types.ObjectId,
    ref: "Offer",
    required: true,
  },
  oldArticle: {
    type: Object
  },
  newArticle: {
    type: Object
  },
  createdAt: {
    type: String,
    default: () => {
      return new Date(Date.now()).toLocaleDateString();
    },
  },
  
});

const LogsEdit = models.LogsEdit || model("LogsEdit", LogsEditScheme);

export default LogsEdit;
