import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss'],
})
export class TimestampComponent implements OnInit {

  @Input() time: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
