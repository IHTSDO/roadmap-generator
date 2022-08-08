import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {faFlagCheckered, faCheck, faClipboardList, faNetworkWired, faGraduationCap, faUsers, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import {backgrounds} from './roadmap-content/background';
import {visionIntro, visions} from  './roadmap-content/vision';
import {currentStates} from './roadmap-content/current-states';
import {goalsIntro, goals} from './roadmap-content/goals';
import {clinicalFocusIntro, clinicalFocus} from './roadmap-content/clinical-focus';
import {steps, stepsIntro} from './roadmap-content/steps';
import {projects} from './roadmap-content/projects';
import {closings} from './roadmap-content/closing';
import { EditorSingleDialogComponent } from './editor-single-dialog/editor-single-dialog.component';
import { EditorListDialogComponent } from './editor-list-dialog/editor-list-dialog.component';
import { StepsDatesDialog } from './steps-dates-dialog/steps-dates-dialog';
import { GanttDialog } from './gantt-dialog/gantt-dialog';
import { TimelineDialog } from './timeline-dialog/timeline-dialog';
import { HttpClient } from '@angular/common/http';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
import { asBlob } from 'html-docx-js-typescript'
import { saveAs } from 'file-saver'

import * as pdfMake from "pdfmake/build/pdfmake";  
import * as pdfFonts from "pdfmake/build/vfs_fonts";  
import { NewStepDialogComponent } from './new-step-dialog/new-step-dialog.component';
declare var require: any;
const htmlToPdfmake = require("html-to-pdfmake");
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


declare var anime: any;  

interface sourceData {
  opSelector: string;
  text: string;
}

interface milestone {
  name: string;
  text: string;
  date: string;
}

interface stepData extends sourceData {
  dateStart?: Date;
  dateEnd?: Date;
  milestones?: milestone[];
} 

interface dataGrouper {
  group: string;
  options: stepData[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'roadmap-generator';
  country= 'Country name';

  backgrounds!: sourceData[];
  selectedBackground: any | undefined;
  visionIntro = '';
  visions!: sourceData[];
  selectedVisions = [];
  currentStates!: sourceData[];
  selectedCurrentState: any | undefined;
  goalsIntro = '';
  goals!: sourceData[];
  selectedGoals = [];
  clinicalFocusIntro = '';
  clinicalFocus!: sourceData[];
  selectedClinicalFocus = [];
  stepsIntro = '';
  stepOptions!: dataGrouper[];
  selectedSteps:any[] = [];
  projects!: sourceData[];
  selectedProject: any | undefined;
  closings!: sourceData[];
  selectedClosing: any | undefined;

  roadmap: any = '';
  roadmapStart: Date = new Date('2022-01-01');
  roadmapEnd: Date = new Date('2022-12-31');

  opened: boolean = true;

  constructor(readonly snackBar: MatSnackBar, 
              public dialog: MatDialog,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.roadmap =`
      <h1>A SNOMED CT Implementation Roadmap for <span class='country'></span></h1>
      <div class="Background"></div>
      <div class="Vision"></div>
      <div class="Current-eHealth-landscape"></div>
      <div class="Goals"></div>
      <div class="Clinical-focus"></div>
      <div class="Steps"></div>
      <div class="Priorities"></div>
      <div class="Implementation-projects"></div>
      <div class="Closing-remarks"></div>
      `;
    this.backgrounds = backgrounds;
    this.visionIntro = visionIntro;
    this.visions = visions;
    this.currentStates = currentStates;
    this.goalsIntro = goalsIntro;
    this.goals = goals;
    this.clinicalFocusIntro = clinicalFocusIntro;
    this.clinicalFocus = clinicalFocus;
    this.stepsIntro = stepsIntro;
    this.stepOptions = Object.assign([], steps);
    this.projects = projects;
    this.closings = closings;
    this.nameChanged()
  }

  changeVision() {
    setTimeout(() => {
      if (this.selectedVisions.length > 0) {
        let visionsText = `<p>${this.visionIntro}</p><ul>`;
        this.selectedVisions.forEach((vision: any) => {
          visionsText = visionsText + `${vision.text}`;
        })
        this.replaceSection('Vision', `<h2>Vision</h2>${visionsText}<ul>`);
        this.nameChanged()
      } else {
        this.replaceSection('Vision', '');
      }
    }, 100);
  }

  changeGoals() {
    setTimeout(() => {
      if (this.selectedGoals.length > 0) {
        let goalsText = `<p>${this.goalsIntro}</p><ul>`;
        this.selectedGoals.forEach((goal: any) => {
          goalsText = goalsText + `<li><b>${goal.opSelector}</b> ${goal.text}</li>`;
        })
        this.replaceSection('Goals', `<h2>Goals</h2>${goalsText}</ul>`);
        this.nameChanged()
      } else {
        this.replaceSection('Goals', '');
      }
    }, 100);
  }

  changeClinicalFocus() {
    setTimeout(() => {
      if (this.selectedClinicalFocus.length > 0) {
        let focusText = `<p>${this.clinicalFocusIntro}</p><ul>`;
        this.selectedClinicalFocus.forEach((focus: any) => {
          focusText = focusText + `<li><b>${focus.opSelector}</b> ${focus.text}</li>`;
        })
        this.replaceSection('Clinical-Focus', `<h2>Clinical focus</h2>${focusText}</ul>`);
        this.nameChanged()
      } else {
        this.replaceSection('Clinical-Focus', '');
      }
    }, 100);
  }

  changeSteps() {
    setTimeout(() => {
      if (this.selectedSteps.length > 0) {
        let groups = this.selectedSteps.map( ({group}) => (group))
        let groupsu =  [...new Set(groups)];
        let stepsText = `<p>${this.stepsIntro}</p><ul>`;
        groupsu.forEach( (group:any) => {
          stepsText = stepsText + `<li><h3>${group}</h3><ul>`;
          this.selectedSteps.forEach((step: any) => {
            if (step.group == group) {
              stepsText = stepsText + `<li><b>${step.step.opSelector}</b>`;
              if (step.dateStart && step.dateEnd) {
                stepsText = stepsText + ` (${step.dateStart.toISOString().split('T')[0]} to ${step.dateEnd.toISOString().split('T')[0]})`;
              }
              stepsText = stepsText + `<p>${step.step.text}</p>`;
              if (step.step.milestones && step.step.milestones.length > 0) {
                const sortedMilestones = step.step.milestones.sort(function(a:any,b:any){
                  var key1 = a.date;
                  var key2 = b.date;
                  if (key1 < key2) {
                      return -1;
                  } else if (key1 == key2) {
                      return 0;
                  } else {
                      return 1;
                  }
                });
                stepsText = stepsText + `<ul>`;
                sortedMilestones.forEach( (milestone: any) => {
                  stepsText = stepsText + `<li>${milestone.date.toISOString().split('T')[0]} - ${milestone.name}: ${milestone.text}</li>`;
                });
                stepsText = stepsText + `</ul>`;
              }
              stepsText = stepsText + `</li>`;

            }
          })
          stepsText = stepsText + `</ul></li>`;
        });
        this.replaceSection('Steps', `<h2>Implementation steps</h2>${stepsText}</ul>`);
        this.nameChanged()
      } else {
        this.replaceSection('Steps', '');
      }
    }, 100);
  }

  addAllGroup(groupToAdd: string) {
    let stepsToAdd:any[] = [];
    this.stepOptions.forEach(group => {
      if (group.group ==groupToAdd) {
        group.options.forEach(option => {
          const matches = this.selectedSteps.filter(step => step.step.opSelector == option.opSelector);
          if (matches.length == 0) {
            stepsToAdd.push({group: group.group, step: option, date: ''});
          }
        });
      }
    });
    const mergeResult = [...this.selectedSteps, ...stepsToAdd];
    this.selectedSteps = mergeResult;
    this.changeSteps();
  }

  addCustom(groupToAdd: string) {
    const dialogRef = this.dialog.open(NewStepDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        opSelector: "Custom step for " + groupToAdd,
        text: '<p><mark>[INSTRUCTIONS - Please customize this sample step description, or replace it with your own]</mark></p>'
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.stepOptions.forEach(group => {
        if (group.group ==groupToAdd) {
          group.options.push(result);
        }
      });
      this.selectedSteps.push({
        group: groupToAdd,
        step: result,
        date: ''
      });
      this.changeSteps();
    });
  }

  change(section: string, event: any) {
    if(event.isUserInput) {
      this.updateFromData(section, event.source.value);
    }
  }

  updateFromData(section: string, content: any) {
    if (!content || !content.text || content.text == 'Not applicable') {
      this.replaceSection(section, '');
    } else {
      // remove paragraph <p>? console.log(content.text)
      var re = new RegExp('-', 'g');
      this.replaceSection(section, `<h2>${section.replace(re,' ')}</h2><p>${content.text}</p>`);
      this.nameChanged()
    }
  }

  nameChanged() {
    this.replaceSection('country', this.country);
  }

  replaceSection(section: string, newValue: string) {
    const parser = new DOMParser();
    let parsedRoadmap = parser.parseFromString(this.roadmap, "text/html");
    let sectionNodes = parsedRoadmap.querySelectorAll(`.${section}`);
    sectionNodes.forEach(function(sectionNode) {
      sectionNode?.replaceChildren(newValue)
    });
    let body = parsedRoadmap.querySelector(`body`)?.innerHTML;
    body = body?.split('&lt;').join('<');
    body = body?.split('&gt;').join('>');
    if (body) {
      this.roadmap = body;
    }
    this.animate(section)
  }

  htmlDecode(input: string) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  animate(section: string) {
    // const element = document.querySelectorAll('.'+section)[0];
    // const contentDiv = document.querySelectorAll('.nav-content')[0];
    // // element_to_scroll_to.scrollIntoView();
    // const topPos = element.getBoundingClientRect().top + window.pageYOffset

    // contentDiv.scrollTo({
    //   top: topPos, // scroll so that the element is at the top of the view
    //   behavior: 'smooth' // smooth scroll
    // })

    setTimeout(() => {
      var elements = document.querySelectorAll(`.${section}`);
      
      anime({
        targets: elements,
        backgroundColor: ['#f0fc03'],
        duration: 1500
      });
    }, 200)

    setTimeout(() => {
      var elements = document.querySelectorAll(`.${section}`);
      
      anime({
        targets: elements,
        backgroundColor: ['transparent'],
        duration: 1000
      });
    }, 1200)
  }

  openStepsDialog(): void {
    const dialogRef = this.dialog.open(StepsDatesDialog, {
      width: '80%',
      height: '90%',
      data: {selectedSteps: this.selectedSteps, roadmapStart: this.roadmapStart, roadmapEnd: this.roadmapEnd},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedSteps = result.selectedSteps;
      this.roadmapStart = result.roadmapStart;
      this.roadmapEnd = result.roadmapEnd;
      this.changeSteps();
    });
  }

  openTimelineDialog(): void {
    const sortedSteps = this.selectedSteps.sort(function(a,b){
      var key1 = new Date(a.dateEnd);
      var key2 = new Date(b.dateEnd);
      if (key1 < key2) {
          return -1;
      } else if (key1 == key2) {
          return 0;
      } else {
          return 1;
      }
    });
    const dialogRef = this.dialog.open(TimelineDialog, {
      width: '60%',
      height: '90%',
      data: {
        country: this.country,
        selectedSteps: this.selectedSteps, 
        roadmapStart: this.roadmapStart, 
        roadmapEnd: this.roadmapEnd
      },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openGanttDialog(): void {
    const dialogRef = this.dialog.open(GanttDialog, {
      width: '100%',
      height: '90%',
      data: {
        country: this.country,
        selectedSteps: this.selectedSteps, 
        roadmapStart: this.dateToTimestamp(this.roadmapStart), 
        roadmapEnd: this.dateToTimestamp(this.roadmapEnd)
      },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openBackgroundsEditor(): void {
    const dialogRef = this.dialog.open(EditorSingleDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        text: this.selectedBackground.text
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedBackground.text = result.text.replace(/COUNTRY/g,"<span class='country'>COUNTRY</span>");
      this.updateFromData('Background', this.selectedBackground);
      this.nameChanged();
    });
  }

  openCurrentStateEditor(): void {
    const dialogRef = this.dialog.open(EditorSingleDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        text: this.selectedCurrentState.text
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedCurrentState.text = result.text.replace(/COUNTRY/g,"<span class='country'>COUNTRY</span>");
      this.updateFromData('Current-eHealth-landscape', this.selectedCurrentState);
      this.nameChanged();
    });
  }

  openProjectsEditor(): void {
    const dialogRef = this.dialog.open(EditorSingleDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        text: this.selectedProject.text
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedProject.text = result.text.replace(/COUNTRY/g,"<span class='country'>COUNTRY</span>");
      this.updateFromData('Implementation-projects', this.selectedProject);
      this.nameChanged();
    });
  }

  openClosingEditor(): void {
    const dialogRef = this.dialog.open(EditorSingleDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        text: this.selectedClosing.text
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedClosing.text = result.text.replace(/COUNTRY/g,"<span class='country'>COUNTRY</span>");
      this.updateFromData('Closing-remarks', this.selectedClosing);
      this.nameChanged();
    });
  }

  openVisionEditor(): void {
    const dialogRef = this.dialog.open(EditorListDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        selectedOptions: this.selectedVisions
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      result.selectedOptions.forEach( (loopVision:any) => {
        loopVision.text = loopVision.text.replace(/COUNTRY/g,"<span class='country'>COUNTRY</span>");
      })
      this.selectedVisions = result.selectedOptions;
      this.changeVision();
      this.nameChanged();
    });
  }

  openGoalsEditor(): void {
    const dialogRef = this.dialog.open(EditorListDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        selectedOptions: this.selectedGoals
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      result.selectedOptions.forEach( (loopItem:any) => {
        loopItem.text = loopItem.text.replace(/COUNTRY/g,"<span class='country'>COUNTRY</span>");
      })
      this.selectedGoals = result.selectedOptions;
      this.changeGoals();
      this.nameChanged();
    });
  }

  openFocusEditor(): void {
    const dialogRef = this.dialog.open(EditorListDialogComponent, {
      width: '100%',
      height: '90%',
      data: {
        selectedOptions: this.selectedClinicalFocus
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      result.selectedOptions.forEach( (loopItem:any) => {
        loopItem.text = loopItem.text.replace(/COUNTRY/g,"<span class='country'>COUNTRY</span>");
      })
      this.selectedClinicalFocus = result.selectedOptions;
      this.changeClinicalFocus();
      this.nameChanged();
    });
  }

  dateToTimestamp(datep: any) {
    return (Math.floor(datep.getTime() / 1000));
  }

  export() {
    const data = {
      country: this.country,
      roadmapStart: this.roadmapStart,
      roadmapEnd: this.roadmapEnd,
      selectedBackground: this.selectedBackground,
      selectedVisions: this.selectedVisions,
      selectedCurrentState: this.selectedCurrentState,
      selectedGoals: this.selectedGoals,
      selectedClinicalFocus: this.selectedClinicalFocus,
      selectedSteps: this.selectedSteps,
      selectedProject: this.selectedProject,
      selectedClosing: this.selectedClosing
    }
    this.downloadJson(data);
  }

  downloadJson(myJson: object){
    var sJson = JSON.stringify(myJson);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "roadmap.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

  downloadWord() {
    asBlob(this.roadmap).then((data: any) => {
      saveAs(data, 'roadmap.docx') // save as docx file
    }) // asBlob() return Promise<Blob|Buffer>
  }

  savePdf() {
    var html = htmlToPdfmake(`<html><body>${this.roadmap}</body></html>`);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download('roadmap.pdf'); 
  }

  saveGanttPdf() {
    let data = document.getElementById('planning');
    html2canvas(data as any).then(canvas => {
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdfData = new jsPDF('p', 'mm', 'a4');
        var position = 0;
        pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight;
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdfData.addPage();
          pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdfData.save(`planning.pdf`);
    });
  }

  openGanttAsPng() {
    let data = document.getElementById('gantt');
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

  openTimelineAsPng() {
    let data = document.getElementById('timeline');
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

  clear() {
    location.reload();
    // this.roadmapStart = new Date(),
    // this.roadmapEnd = new Date(),
    // this.selectedBackground = null;
    // this.updateFromData('Background', this.selectedBackground);
    // this.selectedVisions = [];
    // this.changeVision();
    // this.selectedCurrentState = null;
    // this.updateFromData('Current-eHealth-landscape', this.selectedCurrentState);
    // this.selectedGoals = [];
    // this.changeGoals();
    // this.selectedClinicalFocus = [];
    // this.changeClinicalFocus();
    // this.selectedSteps = [];
    // this.stepOptions = Object.assign([], steps);
    // this.changeSteps();
    // this.selectedProject = null;
    // this.updateFromData('Implementation-projects', this.selectedProject);
    // this.selectedClosing = null;
    // this.updateFromData('Closing-remarks', this.selectedClosing);
    // this.country = 'Country Name';
    // this.nameChanged();
  }

  getBackgroundImageUrl() {
    // linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    return "url('assets/img/sct-worldwide_1.jpeg')";
  }

  uploadFile(event: any) {
    if (event.target.files.length !== 1) {
      console.error('No file selected');
    } else {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        if (reader.result) {
          const uploadedVersion = JSON.parse(reader.result?.toString());
          this.updateAllFieldsFromData(uploadedVersion);
        }
      };
      reader.readAsText(event.target.files[0]);
    }
  }

  updateAllFieldsFromData(uploadedVersion: any) {
    this.roadmapStart = new Date(uploadedVersion.roadmapStart),
    this.roadmapEnd = new Date(uploadedVersion.roadmapEnd),
    this.selectedBackground = uploadedVersion.selectedBackground;
    this.updateFromData('Background', this.selectedBackground);
    this.selectedVisions = uploadedVersion.selectedVisions;
    this.changeVision();
    this.selectedCurrentState = uploadedVersion.selectedCurrentState;
    this.updateFromData('Current-eHealth-landscape', this.selectedCurrentState);
    this.selectedGoals = uploadedVersion.selectedGoals;
    this.changeGoals();
    this.selectedClinicalFocus = uploadedVersion.selectedClinicalFocus;
    this.changeClinicalFocus();

    uploadedVersion.selectedSteps.forEach( (loopStep: any)  => { // Heal dates (string -> date)
      loopStep.dateStart = new Date(loopStep.dateStart);
      loopStep.dateEnd = new Date(loopStep.dateEnd);
      if (loopStep.step.milestones) {
        loopStep.step.milestones.forEach( (loopMilestone:any) => {
          loopMilestone.date = new Date(loopMilestone.date);
        });
      }
    });

    this.selectedSteps = uploadedVersion.selectedSteps;
    this.changeSteps();
    
    this.selectedProject = uploadedVersion.selectedProject;
    this.updateFromData('Implementation-projects', this.selectedProject);
    this.selectedClosing = uploadedVersion.selectedClosing;
    this.updateFromData('Closing-remarks', this.selectedClosing);
    this.country = uploadedVersion.country;
    this.nameChanged();
  }

  compareOptions(object1: any, object2: any) {
    return object1 && object2 && object1.opSelector == object2.opSelector;
  }

  compareOptionsSteps(object1: any, object2: any) {
    return object1 && object2 && object1.step.opSelector == object2.step.opSelector;
  }

  loadJsonExample(filename: string) {
    this.http.get('assets/examples/'+filename).subscribe(data => {
      this.updateAllFieldsFromData(data);
     });
  }
}

@Component({
  selector: 'app-root-snack',
  templateUrl: 'app-root-snack.html',
  styles: [],
})
export class AppSnackComponent {}
