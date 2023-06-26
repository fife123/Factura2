
import models from "../models";
class Detalles_facturaController{
    async guardarDetalles_factura(req,res){
        try{
            const Detalles_factura= await models.Detalles_factura.create({
                Categoria_producto: req.body.Categoria_producto,
                Cantidad: req.body.Cantidad,
                Precio: req.body.Precio
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

async listarDetalles_factura(req,res){
    try{
    const Detalles_factura  =await models.Detalles_factura.findAll({
        
    }) 
    res.status(200).json({
        status:200,Detalles_factura:Detalles_factura
    })
    }catch(error){
        res.status(500).json({
        status:500,mensage:"ocurrio un poblema",
        error:error
        }
    )
}
}
}export const detalles_facturaController = new Detalles_facturaController;