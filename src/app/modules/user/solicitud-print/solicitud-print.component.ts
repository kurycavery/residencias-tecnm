import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { pdfInfoSolicitud } from 'src/app/shared/services/certificate-pdf/interface.interface';

@Component({
  selector: 'app-solicitud-print',
  templateUrl: './solicitud-print.component.html',
  styleUrls: ['./solicitud-print.component.scss']
})
export class SolicitudPrintComponent implements OnInit {
  public data!: pdfInfoSolicitud;
  public cargando = false;
  constructor() {
    // this.downloadPDF();
  }

  ngOnInit(): void {
    const dataSoloicitud = localStorage.getItem('data');

    if( dataSoloicitud ) {
      const datadta = JSON.parse(dataSoloicitud) as pdfInfoSolicitud;
      this.data = datadta;
    }
  }

  public downloadPDF(): void {
    this.cargando = true;
    const DATA = document.getElementById('htmlData');
    console.log('ancho width',DATA?.clientWidth)
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };

    if( DATA ) {
      // DATA.style.backgroundColor = 'red';
      // DATA.style.position = 'absolute';
      // DATA.style.width = '1400px';
      // DATA.style.overflowX = 'scroll';
      console.log('ancho width',DATA)

      html2canvas(DATA, options).then((canvas) => {
  
        const img = canvas.toDataURL('image/PNG');
  
        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
        return doc;
      }).then((docResult) => {
        docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
        this.cargando = false;
      });

    }


  }

}
