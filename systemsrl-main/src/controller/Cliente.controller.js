import models from "../models";
class ClienteController{
    async guardarCliente(req,res){
        try{
        console.log(req.body)
        const cliente= await models.Cliente.create({
            id: req.body.id, 
            Nomb_cliente: req.body.Nomb_cliente,
            Dir_cliente:req.body.Dir_cliente,
            Cuidad_cliente: req.body.Cuidad_cliente,
            Telf_cliente: req.body.Telf_cliente
        })
        res.status(200).json({
            status:200,mensage:"confirmado"
        })
        }catch(error){
            res.status(500).json({
            status:500,mensage:"ocurrio un poblema",
            error:error
            }
        )
    }
}
    async listarCliente(req,res){
        try{
        const cliente  =await models.Cliente.findAll({
            
        }) 
        res.status(200).json({
            status:200,cliente:cliente
        })
        }catch(error){
            res.status(500).json({
            status:500,mensage:"ocurrio un poblema",
            error:error
            }
        )
    }
}
}
export const clienteController= new ClienteController;