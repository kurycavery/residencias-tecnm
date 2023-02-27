/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Img, PdfMakeWrapper, Txt } from 'pdfmake-wrapper';
import * as customFonts from "pdfmake/build/vfs_fonts";
import { pdfInfoSolicitud } from './interface.interface';
PdfMakeWrapper.setFonts(customFonts);


@Injectable({
  providedIn: 'root'
})
export class CertifiedGenerationService {
  public pdf = new PdfMakeWrapper();
  constructor() { }

  public async makeDesingPdf( data: pdfInfoSolicitud ): Promise<void> {
    this.pdf.pageSize('A4');
    this.pdf.pageOrientation('portrait');
    this.pdf.add( await new Img('./assets/img/certified/baner.png').width(842).height(80).absolutePosition(0,0).build() );
    // this.pdf.add( await new Img('../../../../assets/img/certified/line_name.png').width(140).absolutePosition(45,50).build() );
    this.pdf.add( new Txt('Solicitud de residencias').alignment('center').characterSpacing(10).fontSize(20).absolutePosition(50,90).color('#4A001F').end );
    // Datos del solicitante
    this.pdf.add( new Txt('Datos del solicitante').alignment('center').characterSpacing(5).fontSize(15).absolutePosition(50,120).end );

    this.pdf.add( new Txt('No.Control:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,140).end );
    this.pdf.add( new Txt(data.noControl).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(130,140).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(450).height(10).absolutePosition(130,150).build() );


    this.pdf.add( new Txt('Nombre:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,160).end );
    this.pdf.add( new Txt(data.nombre).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(130,160).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(450).height(10).absolutePosition(130,170).build() );

    this.pdf.add( new Txt('Telefono:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,180).end );
    this.pdf.add( new Txt(data.telefono).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(130,180).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(450).height(10).absolutePosition(130,190).build() );


    this.pdf.add( new Txt('Seguro Social:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,200).end );
    this.pdf.add( new Txt(data.seguroSocial).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(150,200).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(430).height(10).absolutePosition(150,210).build() );

    this.pdf.add( new Txt('Correo Electrónico:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,220).end );
    this.pdf.add( new Txt(data.email).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(190,220).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(390).height(10).absolutePosition(190,230).build() );


    this.pdf.add( new Txt('Carrera:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,240).end );
    this.pdf.add( new Txt(data.email).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(130,240).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(450).height(10).absolutePosition(130,250).build() );

    this.pdf.add( new Txt('Domicilio:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,260).end );
    this.pdf.add( new Txt(data.domicilio).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(130,260).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(450).height(10).absolutePosition(130,270).build() );

    this.pdf.add( new Txt('Numero de seguro:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,280).end );
    this.pdf.add( new Txt(data.noSeguro).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(190,280).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(390).height(10).absolutePosition(190,290).build() );

    // Datos del proyecto
    this.pdf.add( new Txt('Datos del proyecto').alignment('center').characterSpacing(5).fontSize(15).absolutePosition(50,320).end );

    this.pdf.add( new Txt('Periodo proyectado:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,340).end );
    this.pdf.add( new Txt(data.periodoProyect).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(200,340).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(380).height(10).absolutePosition(200,350).build() );

    this.pdf.add( new Txt('Nombre del proyecto:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,360).end );
    this.pdf.add( new Txt(data.nombreProyecto).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(220,360).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(360).height(10).absolutePosition(220,370).build() );

    this.pdf.add( new Txt('Opción elegida:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,380).end );
    this.pdf.add( new Txt(data.opcionelEgida).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(190,380).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(390).height(10).absolutePosition(190,390).build() );

    this.pdf.add( new Txt('Numero de residentes:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,400).end );
    this.pdf.add( new Txt(data.noResidentes).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(220,400).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(360).height(10).absolutePosition(220,410).build() );

    // Datos de la empresa
    this.pdf.add( new Txt('Datos de la empresa').alignment('center').characterSpacing(5).fontSize(15).absolutePosition(50,440).end );

    this.pdf.add( new Txt('Nombre:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,460).end );
    this.pdf.add( new Txt(data.nameEmpresa).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(130,460).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(450).height(10).absolutePosition(130,470).build() );


    this.pdf.add( new Txt('RFC:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,480).end );
    this.pdf.add( new Txt(data.rfc).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(130,480).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(450).height(10).absolutePosition(130,490).build() );

    this.pdf.add( new Txt('Giro o sector:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,500).end );
    this.pdf.add( new Txt(data.giro).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(220,500).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(360).height(10).absolutePosition(220,510).build() );

    this.pdf.add( new Txt('Calle y numero:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,520).end );
    this.pdf.add( new Txt(data.calleNumber).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(220,520).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(360).height(10).absolutePosition(220,530).build() );
    
    this.pdf.add( new Txt('Nombre del titular:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,540).end );
    this.pdf.add( new Txt(data.titularName).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(220,540).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(360).height(10).absolutePosition(220,550).build() );


    this.pdf.add( new Txt('Puesto del titular:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,560).end );
    this.pdf.add( new Txt(data.puestotitular).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(220,560).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(360).height(10).absolutePosition(220,570).build() );

    this.pdf.add( new Txt('Nombre asesor externo:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,580).end );
    this.pdf.add( new Txt(data.asesorExt).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(230,580).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(350).height(10).absolutePosition(230,590).build() );

    this.pdf.add( new Txt('Puesto del asesor:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,600).end );
    this.pdf.add( new Txt(data.puestoAseExt).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(220,600).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(360).height(10).absolutePosition(220,610).build() );

    this.pdf.add( new Txt('Colonia:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,620).end );
    this.pdf.add( new Txt(data.colonia).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(130,620).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(450).height(10).absolutePosition(130,630).build() );

    this.pdf.add( new Txt('Codigo Postal:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,640).end );
    this.pdf.add( new Txt(data.cp).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(150,640).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(430).height(10).absolutePosition(150,650).build() );

    this.pdf.add( new Txt('Ciudad y Estado:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,660).end );
    this.pdf.add( new Txt(data.ciudadEstado).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(160,660).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(420).height(10).absolutePosition(160,670).build() );

    this.pdf.add( new Txt('Teléfono:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,680).end );
    this.pdf.add( new Txt(data.telefonoEmpresa).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(130,680).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(450).height(10).absolutePosition(130,690).build() );

    this.pdf.add( new Txt('Nombre del titular:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,700).end );
    this.pdf.add( new Txt(data.titularName).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(230,700).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(350).height(10).absolutePosition(230,710).build() );

    this.pdf.add( new Txt('Nombre del intermediario:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,720).end );
    this.pdf.add( new Txt(data.intermediarioName).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(250,720).end );
    this.pdf.add( await new Img('./assets/img/certified/line_name.png').width(330).height(10).absolutePosition(250,730).build() );

    this.pdf.add( new Txt('Misión de la empresa:').alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,740).end );
    this.pdf.add( new Txt(data.misionEmpresa).alignment('left').characterSpacing(5).fontSize(10).absolutePosition(20,760).end );

    this.pdf.create().open();
    
  }

  public downLoadPdf( data: pdfInfoSolicitud ): void {
    this.makeDesingPdf( data );
  }
}
