import PDFDocument from 'pdfkit';
import models from './../models';
export const generarPDFFactura = async function (req,res)
{   
    //primero creamos 

    const doc =new PDFDocument({bufferPages:true,
        layout: 'landscape',
        size: 'A4'  
            });
            let buffers=[];
            // Configuramos el documento
            doc.on('data',buffers.push.bind(buffers))
            
            doc.on('end',()=>{
                let pdfData = Buffer.concat(buffers)
                  res.writeHead(200,{
                  'Content-Length':Buffer.byteLength(pdfData),
                  'Content-Type': 'application/pdf',  
                  }).end(pdfData)
            })
            
            doc.rect(50, 50, 750, 500).stroke()
            .fillColor('#0000ff')
            .fontSize(20)
            .text('Reporte de Factura', 260, 70,{aling:'center'}) 
            doc.moveDown()
      // generando el reporte
      const cliente  =await models.Cliente.findOne({
            
      }) 
      

      let inicio_y= 100;
      doc.fontSize(12)
        .fillColor('#272BA6')
        .text('nombre',45,inicio_y,{width: 70,align: 'center'})
        .text('precio',170,inicio_y)
        .text('stock',250,inicio_y,{width: 70,align: 'center'})
        .text('descripcion',365,inicio_y,{width: 70,align: 'center'})
      doc.moveTo(50,90)
        .lineTo(800,90)
        .lineWidth(1)
        .stroke() 
      doc.moveTo(150,90)
        .lineTo(150,550)
        .lineWidth(1)
        .stroke() 
        doc.moveTo(220,90)
        .lineTo(220,550)
        .lineWidth(1)
        .stroke() 
        doc.moveTo(350,90)
        .lineTo(350,550)
        .lineWidth(1)
        .stroke() 
        inicio_y=inicio_y+20

        doc.moveTo(50,inicio_y)
        .lineTo(800,inicio_y)
        .lineWidth(1)
        .stroke() 

         doc.end()   
}