import { prisma } from "../server";






export class MoveService {
    constructor() { }

    public static async create(data: any) {

        try {
            const move = await prisma.move.create({
                data: { ...data }
            })

            return { success: true, move };

        } catch (error) {
            return {success:false, error:"Error inesperado"}
        }



    }

    public static async getAll() {

            try {
                
                const moveAll = await prisma.move.findMany()

                return {success:true,moveAll}

            } catch (error) {
                return {success:false,error:"Error inesperado"}
            }
    }


    public static async getById(id: any) {

    }


    public static async getOrderByIdUser(id: any) {

    }

    public static async deleteById(id: any) {

    }

    public static async login(data: any) {


    }


    public static async updateOne(email: string, data: any) {

    }


}