import { Schema, model, models } from "mongoose";

const tokenScheme = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  offerId: {
    type: Schema.Types.ObjectId,
    ref: "offer",
    required: true,
  },
  stripeSubId: {
    type: Schema.Types.ObjectId,
  },
  isPayed: {
    type: Boolean,
    default: true,
  },

});

const Token = models.Token || model("Token", tokenScheme);

export default Token;
