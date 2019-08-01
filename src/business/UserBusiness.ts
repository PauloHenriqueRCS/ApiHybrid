import IUserBusiness from './IUserBusiness'
import User from '../data/mongo/schemas/User'
import { Request, Response } from 'express'
import { model } from 'mongoose'

class UserBusiness implements IUserBusiness {
   
    constructor(){
        
    }

    public async getAllUsers(req: Request, res: Response): Promise<Response> {
        const users = await User.find()
        return res.json(users)
    }

    public async add(req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)
        return res.json(user)
    }

    getEmail(): string {
        throw new Error("Method not implemented.");
    }
    getName(): string {
        throw new Error("Method not implemented.");
    }
    getFirstName(): string {
        throw new Error("Method not implemented.");
    }
    getLastName(): string {
        throw new Error("Method not implemented.");
    }
}

export default new UserBusiness()