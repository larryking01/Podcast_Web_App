import { Component, inject } from '@angular/core';
import { AudioPlayer } from '../../../core/services/audio-player';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-player-component',
  imports: [ AsyncPipe, CommonModule ],
  templateUrl: './audio-player-component.html',
  styleUrl: './audio-player-component.scss'
})
export class AudioPlayerComponent {

  audioPlayer = inject( AudioPlayer )

  formatTime(time: number | null): string {
    if (time === null || isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  onSeek(event: Event) {
    const input = event.target as HTMLInputElement;
    this.audioPlayer.seekTo(Number(input.value));
  }


  get maxDuration(): number {
    const duration = this.audioPlayer.duration$.value;
    return isNaN(duration) ? 0 : duration;
  }

  
  seekRelative(seconds: number) {
    const audio = this.audioPlayer.getCurrentAudio();
    audio.currentTime += seconds;
  }

}
