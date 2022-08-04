import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor-single-dialog',
  templateUrl: './new-step-dialog.component.html',
  styleUrls: ['./new-step-dialog.component.css']
})
export class NewStepDialogComponent implements OnInit {

  public Editor = ClassicEditor;
  text: string = '';

  constructor( public dialogRef: MatDialogRef<NewStepDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
