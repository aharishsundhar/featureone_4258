import { Request, Response, NextFunction } from "express";
import { travelController } from '../controller/travelController';


export class Routes {
    private travel: travelController = new travelController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/travel/:id').delete(this.travel.GpDelete);
app.route('/travel/get/search').get(this.travel.GpSearch);
app.route('/travel').put(this.travel.GpUpdate);
app.route('/travel/get/update').put(this.travel.GpSearchForUpdate);
app.route('/travel').get(this.travel.GpGetAllValues);
app.route('/travel').post(this.travel.GpCreate);
     }

}