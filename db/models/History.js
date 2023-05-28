import { Schema, model, models } from "mongoose";

const HistoryScheme = new Schema({
  offerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  oldProductInfo:{ type: Object},
  newProductInfo: {type: Object}
});

const History = models.History || model("History", HistoryScheme);

export default History;
