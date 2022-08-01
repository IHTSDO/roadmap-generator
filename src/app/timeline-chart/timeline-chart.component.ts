import { Component, Input, OnInit } from '@angular/core';
import { faFlagCheckered, faCheck, faClipboardList, faNetworkWired, faGraduationCap, faUsers, faList, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.css']
})
export class TimelineChartComponent implements OnInit {

  @Input() data: any;

  faFlagCheckered = faFlagCheckered;
  faCheck = faCheck;
  faClipboardList = faClipboardList;
  faNetworkWired = faNetworkWired;
  faGraduationCap = faGraduationCap;
  faUsers = faUsers;
  faList = faList;
  faEdit = faEdit;
  constructor() { }

  ngOnInit(): void {
  }

}
