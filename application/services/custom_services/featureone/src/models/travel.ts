
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const travelSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   email: String,
   age: String,
   address: String
})

const travelModel = mongoose.model('travel', travelSchema, 'travel');
export default travelModel;
