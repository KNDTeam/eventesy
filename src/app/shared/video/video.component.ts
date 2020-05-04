import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import domtoimage from 'dom-to-image';

interface YTPlayer extends YT.Player {
  getVideoData();
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoComponent implements OnInit {

  @Input() videoId: string;
  @Input() startTimer: string = '0';

  @ViewChild('screen', { static: true }) screen: any;

  playerVars: YT.PlayerVars;
  player: YTPlayer;
  videoDuration: string;
  videoTitle: string;

  listTimestamps = [
    {
      time: '3:20',
      title: 'Fermentação das Uvas'
    },
    {
      time: '6:20',
      title: 'Processo de Armazenagem do Vinho'
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.playerVars = {
      autoplay: 1,
      enablejsapi: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      start: this.timeStringToInt(this.startTimer),
    };
  }

  /**
   * Save YouTube player instance into this.player
   * @param player
   */
  savePlayer(player): void {
    this.player = player;
    this.videoDuration = this.intToTimeString(this.player.getDuration());
    this.videoTitle = this.player.getVideoData().title;
  }

  /**
   * Event on change time of the video
   * @param time
   */
  onChangeTime(time): void {
    this.player.seekTo(this.timeStringToInt(time), true);
  }


  takePicture() {

    // const blob = new Blob([document.querySelector('.videoplayer').outerHTML], {
    //   type: 'text/html'
    // });
    // window.open(window.URL.createObjectURL(blob));

    // const node = document.querySelector('.videoplayer iframe').contentWindow.document.body.querySelector('video');

    // const iframe = document.querySelector('.videoplayer iframe') as HTMLIFrameElement;
    // const node = iframe.contentWindow.document.body.querySelector('video');

    // var canvas = document.createElement("canvas");
	  // canvas.getContext('2d').drawImage(node, 0, 0, canvas.width, canvas.height);

    // domtoimage.toPng(node).then(function (dataUrl) {
    //     const img = new Image();
    //     img.src = dataUrl;
    //     document.querySelector('.videoplayer').appendChild(img);
    //     console.log(img);
    // })
    // .catch(function (error) {
    //   console.error('oops, something went wrong!', error);
    // });
  }


  /**
   * Convert a time string to a number
   * @param time
   */
  private timeStringToInt(time: string): number {
    const hoursMinutes = time.split(/[.:]/);
    const hours = parseInt(hoursMinutes[0], 10);
    const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours * 60 + minutes;
  }

  /**
   * Convert seconds to time string
   * @param time
   */
  private intToTimeString(time: number): string {
    const hours = parseInt((time / 60) + '', 0);
    const minutes = time - hours * 60;
    return `${hours}:${minutes === 0 ? '00' : minutes}`;
  }
}
