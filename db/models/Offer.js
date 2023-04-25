import { Schema, model, models } from "mongoose";

const OfferSchema = new Schema({
  holderId: {
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
  description:{
    type: String,
  },
  pricing: {
    type: Number,
    required: true,
  },
  typeOfPayment: {
    type: String,
    enum: ["monthly", "weekly", "signle"],
    required: true,
  },

});

const Offer = models.Offer || model("Offer", OfferSchema);

export default Offer;
