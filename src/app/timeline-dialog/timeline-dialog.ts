import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

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
  }