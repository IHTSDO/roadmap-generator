import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppSnackComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { MzdTimelineModule } from 'ngx-mzd-timeline';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGanttModule, GANTT_GLOBAL_CONFIG } from '@worktile/gantt';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorSingleDialogComponent } from './editor-single-dialog/editor-single-dialog.component';
import { EditorListDialogComponent } from './editor-list-dialog/editor-list-dialog.component';
import { StepsDatesDialog } from './steps-dates-dialog/steps-dates-dialog';
import { GanttDialog } from './gantt-dialog/gantt-dialog';
import { TimelineDialog } from './timeline-dialog/timeline-dialog';
import { SafePipe } from './safe.pipe';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { NewStepDialogComponent } from './new-step-dialog/new-step-dialog.component';
import { SortPipe } from './sort-pipe/sort.pipe'

// const MY_DATE_FORMAT = {
//   parse: {
//     dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
//     monthYearLabel: 'MMMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY'
//   }
// };

@NgModule({
  declarations: [
    AppComponent,
    AppSnackComponent,
    StepsDatesDialog,
    TimelineDialog,
    GanttDialog,
    GanttChartComponent,
    EditorSingleDialogComponent,
    EditorListDialogComponent,
    SafePipe,
    TimelineChartComponent,
    NewStepDialogComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MzdTimelineModule,
    FontAwesomeModule,
    NgxGanttModule,
    CKEditorModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: GANTT_GLOBAL_CONFIG,
      useValue: {
        dateFormat: {
             yearQuarter: `QQQ 'of' yyyy`,
             month: 'LLLL',
             yearMonth: `LLLL yyyy'(week' w ')'`
        }
      }
    },
    SortPipe
    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    // { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }
  ],
  entryComponents: [StepsDatesDialog, TimelineDialog, GanttDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
