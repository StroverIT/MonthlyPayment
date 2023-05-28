import { Schema, model, models } from "mongoose";

const isActivatedSchema = {
  admin: { type: Boolean, default: false },
  user: { type: Boolean, default: false },
};

const activatedDateSchema = {
  admin: { type: Boolean, default: false },
  user: { type: Boolean, default: false },
};
const OfferSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
  },
  notes: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  typeOfPayment: {
    type: String,
    enum: ["Единично", "Месечно"],
    required: true,
  },

  isActivated: isActivatedSchema,
  activatedDate: activatedDateSchema,
  products: {
    adding: Number,
    editing: Number,
  },
  functionality: {
    low: Number,
    medium: Number,
    high: Number,
  },
});

const Offer = models.Offer || model("Offer", OfferSchema);

export default Offer;
