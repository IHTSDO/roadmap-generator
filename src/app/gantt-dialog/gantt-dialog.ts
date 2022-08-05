import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import html2canvas from 'html2canvas';
@Component({
    selector: 'gantt-dialog',
    templateUrl: 'gantt-dialog.html',
  })
  export class GanttDialog {
    constructor(
      public dialogRef: MatDialogRef<GanttDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    openGanttAsPng() {
      let data = document.getElementById('gantt-in-dialog');
      html2canvas(data as any).then(canvas => {
          var imgWidth = 210;
          var pageHeight = 295;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;
          const contentDataURL = canvas.toDataURL('image/png');
          var newTab = window.open('about:blank','Gantt');
          newTab?.document.write("<img src='" + contentDataURL + "' alt='from canvas'/>");
      });
    }
  }