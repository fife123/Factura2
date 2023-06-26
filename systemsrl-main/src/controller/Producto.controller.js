
import models from "../models";
class ProductoController{
    async guardarProducto(req,res){
        try{
            const Producto= await models.Producto.create({
                Descripcion_producto: req.body.Descripcion_producto,
                Valor_Unitario: req.body.Valor_Unitario
            })
            res.status(200).json({
                status:200,mensage:"confirmado"
            })
        }catch(error){
            res.status(500).json({
                status:500,mensage:"ocurrio un poblema",
                error:error
            })
        }
    }
    async listarproducto(req,res){
        try{
        const producto  =await models.Producto.findAll({
            
        }) 
        res.status(200).json({
            status:200,Producto:producto
        })}catch(error){
            res.status(500).json({
            status:500,mensage:"ocurrio un poblema",
            error:error
            }
        )
    }
    }
}

export const productoController = new ProductoController;