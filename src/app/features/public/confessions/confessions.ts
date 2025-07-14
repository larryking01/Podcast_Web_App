import { Component, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { ConfessionsService } from '../../../core/services/confessions.service';
import { AddConfessionRequest, ConfessionResponse } from '../../../core/models/confession.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeader } from '../../../shared/components/page-header/page-header';



@Component({
  selector: 'app-confessions',
  imports: [Navbar, Footer, ReactiveFormsModule, PageHeader],
  templateUrl: './confessions.html',
  styleUrl: './confessions.scss'
})
export class Confessions {

  confessionsService = inject( ConfessionsService )

  destroyRef = inject( DestroyRef )

  confessionCategories = [
    'Funny',
    'Romantic',
    'Embarrassing',
    'Regret',
    'Spiritual',
    'Friendship',
    'Family',
    'Dark/Honest',
    'Work/School',
    'Cringe/TMI',
    'Inspirational',
    'Pet Peeves',
    'Random Thoughts'
  ]


  emotions = [
    'Guilty',
    'Relieved',
    'Ashamed',
    'Anxious',
    'Excited',
    'Sad',
    'Angry',
    'Happy',
    'Embarrassed',
    'Empowered'
  ]


  confessionForm = new FormGroup({
    message: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    emotion: new FormControl('', Validators.required )
  })


  submitConfession() {
    if( this.confessionForm.invalid ) {
      alert('all fields are required.')
      return
    }
    else {
      let newConfession: AddConfessionRequest = {
        message: this.confessionForm.value.message as string,
        category: this.confessionForm.value.category as string,
        emotion: this.confessionForm.value.emotion as string
      }

      this.confessionsService.addConfession( newConfession )
      .pipe( takeUntilDestroyed( this.destroyRef ))
      .subscribe({
        next: ( confession: ConfessionResponse ) => {
          alert('confession added')
          this.confessionForm.reset()
        },
        error: ( error ) => {
          alert('error while adding confession, try again')
        }
      })
    }
  }


}
