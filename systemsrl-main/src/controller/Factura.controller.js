
import models from "../models";
class FacturaController{
    async guardarFactura(req,res){
        try{
            const Factura= await models.Factura.create({
                Fecha_factura: req.body.Factura
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

async listarfactura(req,res){
    try{
    const Factura  =await models.Factura.findAll({
        
    }) 
    res.status(200).json({
        status:200,Factura:Factura
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
export const facturaController = new FacturaController;