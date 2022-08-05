import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import html2canvas from 'html2canvas';

@Component({
    selector: 'timeline-dialog',
    templateUrl: 'timeline-dialog.html',
  })
  export class TimelineDialog {
    constructor(
      public dialogRef: MatDialogRef<TimelineDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    openTimelineAsPng() {
      let data = document.getElementById('timeline-in-dialog');
      html2canvas(data as any).then(canvas => {
          var imgWidth = 210;
          var pageHeight = 295;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;
          const contentDataURL = canvas.toDataURL('image/png');
          var newTab = window.open('about:blank','Timeline');
          newTab?.document.write("<img src='" + contentDataURL + "' alt='from canvas'/>");
      });
    }
  }