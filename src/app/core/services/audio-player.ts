import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AudioPlayer {

  private audioPlayer = new Audio()

  private currentUrl: string | null = null
  private currentTitle: string | null = null

  // Observables to update the ui
  isPlaying$ = new BehaviorSubject<boolean>(false)
  currentTitle$ = new BehaviorSubject<string | null>(null)
  currentTime$ = new BehaviorSubject<number>(0);
  duration$ = new BehaviorSubject<number>(0);




  constructor() {
    this.audioPlayer.addEventListener('timeupdate', () => {
      this.currentTime$.next(this.audioPlayer.currentTime);
    });


    this.audioPlayer.addEventListener('loadedmetadata', () => {
      this.duration$.next(this.audioPlayer.duration);
    });


    // when playback ends
    this.audioPlayer.addEventListener('ended', () => {
      this.isPlaying$.next( false )
      this.currentUrl = null
      this.currentTitle$.next( null )
      this.currentTime$.next(0);
      this.duration$.next(0);
    } )
  }


  // play a new url audio
  play( url: string, title?: string) {
    if( this.currentUrl === url ) {
      this.resume()
      return
    }


    this.stop()

    this.audioPlayer.src = url
    this.audioPlayer.load()
    this.audioPlayer.play()


    this.currentUrl = url 
    this.currentTitle = title || null


    this.isPlaying$.next( true )
    this.currentTitle$.next( this.currentTitle )

  }


  pause() {
    this.audioPlayer.pause()
    this.isPlaying$.next( false )
  }


  resume() {
    this.audioPlayer.play()
    this.isPlaying$.next( true )
  }


  stop() {
    this.audioPlayer.pause()
    this.audioPlayer.currentTime = 0
    this.isPlaying$.next( false )
  }


  toggle() {
    if( this.audioPlayer.paused ) {
      this.resume()
    }
    else {
      this.pause()
    }
  }


  seekTo(time: number) {
    this.audioPlayer.currentTime = time;
  }

  getCurrentAudio(): HTMLAudioElement {
    return this.audioPlayer;
  }



}
