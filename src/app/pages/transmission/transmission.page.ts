import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './transmission.page.html',
  styleUrls: ['./transmission.page.scss'],
})
export class TransmissionPage implements OnInit {
  public folder: string;

  public startTimer = '3:59';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
