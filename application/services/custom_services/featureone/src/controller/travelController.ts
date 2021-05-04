import { Request, Response } from 'express';
import { travelService } from '../service/travelService';
import { CustomLogger } from '../config/Logger'
let travel = new travelService();

export class travelController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
travel.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into travelController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from travelController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
travel.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into travelController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from travelController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
travel.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into travelController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from travelController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
travel.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into travelController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from travelController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
travel.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into travelController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from travelController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
travel.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into travelController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from travelController.ts: GpCreate');
    })}


}