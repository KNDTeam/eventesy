import { Component, Input, OnInit } from '@angular/core';
import { YoutubePlayerService, YouTubePlayerRef } from 'ngx-youtube-player';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {

  @Input() videoId: string;
  @Input() startTimer: string = '0';
  playerVars: YT.PlayerVars;
  player: YT.Player;

  constructor(
    private service: YoutubePlayerService
  ) {}

  ngOnInit(): void {
    this.playerVars = {
      autoplay: 1,
      enablejsapi: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      start: this.timeStringToInt(this.startTimer),
    };
  }

  /**
   * Save YouTube player instance into this.player
   * @param player
   */
  savePlayer(player) {
    this.player = player;
  }

  click() {
    this.player.seekTo(this.timeStringToInt('9:20'), true);
  }

  /**
   * Convert a time string to a number
   * @param time
   */
  private timeStringToInt(time): number {
    const hoursMinutes = time.split(/[.:]/);
    const hours = parseInt(hoursMinutes[0], 10);
    const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours * 60 + minutes;
  }
}
