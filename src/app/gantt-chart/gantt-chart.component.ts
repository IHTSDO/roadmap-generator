import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { GanttItem, GanttPrintService } from '@worktile/gantt';


@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css'],
  providers: [GanttPrintService]
})
export class GanttChartComponent implements OnInit {
  
  @Input() selectedSteps: any;
  @Input() roadmapStart: any;
  @Input() roadmapEnd: any;

  ganttData: GanttItem[] = [];

  constructor(private printService: GanttPrintService) { }

  ngOnInit(): void {
    this.updateGantt();
  }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout(() => {
      this.updateGantt();
    }, 100);
  }

  updateGantt() {
    this.ganttData = [];
    this.selectedSteps.forEach( (step: any) => {
      let loopItem:any = { 
        id: step.step.opSelector, 
        title: step.step.opSelector, 
        start: this.dateToTimestamp(step.dateStart), 
        end: this.dateToTimestamp(step.dateEnd),
        children: []
      };
      if (step.step.milestones) {
        step.step.milestones.forEach((loopMilestone:any) => {
          let milestone = { 
            id: step.step.opSelector+loopMilestone.name, 
            title: loopMilestone.name, 
            start: this.dateToTimestamp(loopMilestone.date), 
            end: this.dateToTimestamp(loopMilestone.date) 
          };
          loopItem.children.push(milestone);
        })
      }
      this.ganttData.push(loopItem);
    });
  }

  dateToTimestamp(datep: any) {
    if (!datep) {
      return 0;
    } else {
      return (Math.floor(datep.getTime() / 1000));
    }
  }

  print(name: string) {
    this.printService.print(name);
  }

}
