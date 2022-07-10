import {Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'steps-dates-dialog',
    templateUrl: 'setps-dates-dialog.html',
    styleUrls: ['setps-dates-dialog.css']
  })
  export class StepsDatesDialog {
    public Editor = ClassicEditor;

    constructor(
      public dialogRef: MatDialogRef<StepsDatesDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    addMilestone(step:any) {
      if (!step.milestones) {
        step.milestones = [];
      }
      step.milestones.push({ name: 'New milestone', text: '', date: new Date() })
    }
    removeMilestone(step: any, milestoneName:any) {
      console.log( step.milestones, milestoneName)
      step.milestones.splice(step.milestones.findIndex(function(i: any){
        return i.name === milestoneName;
      }), 1);
      console.log( step.milestones)
      // step.milestones = step.milestones.filter(function(el: any) {
      //   return --el["name"] == milestoneName;
      // });
    }
  }