import * as mongoose from 'mongoose';
import travelModel from '../models/travel';
import { CustomLogger } from '../config/Logger'


export class travelDao {
    private travel = travelModel;
    constructor() { }
public GpDelete(travelId, callback){
new CustomLogger().showLogger('info', 'Enter into travelDao.ts: GpDelete')

this.travel.findByIdAndRemove(travelId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from travelDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(travelData, callback){
new CustomLogger().showLogger('info', 'Enter into travelDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(travelData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.travel.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from travelDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(travelData, callback){
new CustomLogger().showLogger('info', 'Enter into travelDao.ts: GpUpdate')

this.travel.findOneAndUpdate({ _id: travelData._id }, travelData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from travelDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(travelData, callback){
new CustomLogger().showLogger('info', 'Enter into travelDao.ts: GpSearchForUpdate')

this.travel.findOneAndUpdate({ _id: travelData._id }, travelData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from travelDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into travelDao.ts: GpGetAllValues')

this.travel.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from travelDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(travelData, callback){
new CustomLogger().showLogger('info', 'Enter into travelDao.ts: GpCreate')
let temp = new travelModel(travelData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from travelDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}