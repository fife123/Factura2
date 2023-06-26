import {Router} from "express"
export const Route = Router();
import {clienteController} from "./../controller/Cliente.controller"
import {detalles_facturaController} from "./../controller/Detalles_factura.controller"
import {facturaController} from "./../controller/Factura.controller"
import {productoController} from "./../controller/Producto.controller"
import { rawListeners, roundedRect } from "pdfkit";
import * as Factuta_reportescontroller from "../controller/Factuta_reportes.controller";
//endpoint
Route.get('/inicio',function(req, res){
    res.json({
    mensaje:"hola curso backend",
    error:false
    })
});
Route.get("/reporteFactura",Factuta_reportescontroller.generarPDFFactura)

Route.post('/Crearcliente',clienteController.guardarCliente);
Route.get('/Listarcliente',clienteController.listarCliente);

Route.post('/Creardetalles_factura',detalles_facturaController.guardarDetalles_factura);
Route.get('/listardetalles_factura',detalles_facturaController.listarDetalles_factura);

Route.post('/Crearfactura',facturaController.guardarFactura);
Route.get('/listarfactura',facturaController.listarfactura);

Route.post('/Crearproducto',productoController.guardarProducto);
Route.get('/listarproducto',productoController.listarproducto);