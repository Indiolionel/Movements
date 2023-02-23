import { Request, Response } from 'express';
import { MoveService } from '../services/move.services';

export class MoveControllers {

    constructor () {}

    public static async create (req: Request, res: Response) {

        
        const created = await MoveService.create(req.body);

		res.status(created.success ? 201 : 400).send(created);
    }

    public static async getById(req: Request, res: Response) {
        // const user = await UserService.getById(+req.params.id);

        // res.status(user.success ? 201 : 400).send(user);
    }

    public static async getAll(req: Request, res: Response) {
        const move = await MoveService.getAll();

		res.status(move.success ? 201 : 400).send(move);
    }


    public static async delete(req: Request, res: Response) {
        
        // const deleted = await UserService.deleteById(+req.params.id)

        // res.status(deleted.success ? 200 : 404).send(deleted);
    }
    
   

    public static async updateOne(req: Request, res: Response) {
        
        // const user = await UserService.updateOne(req.params.email, req.body);

        // res.status(user.success ? 201 : 400).send(user);
    }


}