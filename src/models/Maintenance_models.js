import { Schema, model } from "mongoose";

const maintenaceSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
    validator: {
      validate(v) {
        return /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/.test(v);
      },
    },
  },
});

const Maintenance = model("maintenance", maintenanceSchema);

export default Maintenance;