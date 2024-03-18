import { Component } from '@angular/core';

@Component({
  selector: 'app-wave-homepage',
  templateUrl: './wave-homepage.component.html',
  styleUrl: './wave-homepage.component.css'
})
export class WaveHomepageComponent {
  playing:boolean = true


  playVideo() {
    this.playing= true
    var myVideo: any = document.getElementById("myVideo");
    if (myVideo.paused) {
      myVideo.play();
    }
  }

  pauseVideo(){
    this.playing= false
    var myVideo: any = document.getElementById("myVideo");
    if(myVideo.play){
      myVideo.pause();
    }
  }
}
