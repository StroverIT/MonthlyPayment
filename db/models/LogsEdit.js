import { Schema, model, models } from "mongoose";

const LogsEditScheme = new Schema({
  offerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  oldArticle: {
    type: Object
  },
  newArticle: {
    type: Object
  }
});

const LogsEdit = models.LogsEdit || model("LogsEdit", LogsEditScheme);

export default LogsEdit;
