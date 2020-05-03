import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timestamps',
  templateUrl: './timestamps.component.html',
  styleUrls: ['./timestamps.component.scss'],
})
export class TimestampsComponent implements OnInit {

  @Input() subjects: [] = [];
  @Output() selectTimestamp: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}
  // ;
}
