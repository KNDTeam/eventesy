import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {

  @Input() videoUrl: string;
  @Input() startTimer: string = '0';

  sanitizedUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // this.startTimer = this.timeStringToInt(this.startTimer);
    // this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.videoUrl}?start=${this.startTimer}`);
  }

  /**
   * Convert a time string to a number
   * @param time
   */
  private timeStringToInt(time): string {
    const hoursMinutes = time.split(/[.:]/);
    const hours = parseInt(hoursMinutes[0], 10);
    const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return (hours * 60 + minutes) + '';
  }
}
