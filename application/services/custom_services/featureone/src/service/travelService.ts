import { Request, Response } from 'express';
import {travelDao} from '../dao/travelDao';
import { CustomLogger } from '../config/Logger'
let travel = new travelDao();

export class travelService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into travelService.ts: GpDelete')
     const  travelId = req.params.id;
     travel.GpDelete(travelId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from travelService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into travelService.ts: GpSearch')
     const  travelData = req.query;
     travel.GpSearch(travelData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from travelService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into travelService.ts: GpUpdate')
     const  travelData = req.body;
     travel.GpUpdate(travelData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from travelService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into travelService.ts: GpSearchForUpdate')
     const  travelData = req.body;
     travel.GpSearchForUpdate(travelData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from travelService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into travelService.ts: GpGetAllValues')
     
     travel.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from travelService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into travelService.ts: GpCreate')
     const  travelData = req.body;
     travel.GpCreate(travelData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from travelService.ts: GpCreate')
         callback(response);
         });
    }


}