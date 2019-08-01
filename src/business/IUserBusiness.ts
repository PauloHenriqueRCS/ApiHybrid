import { Request, Response } from 'express'

interface IUsesBusiness {
    getEmail(): string,
    getName(): string,
    getFirstName(): string,
    getLastName(): string,
    add(req: Request, res: Response): Promise<Response>,
    getAllUsers(req: Request, res: Response): Promise<Response>
}

export default IUsesBusiness