import { Component, inject } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { ConfessionsService } from '../../../core/services/confessions.service';
import { AddConfessionRequest, ConfessionResponse } from '../../../core/models/confession.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-confessions',
  imports: [Navbar, Footer, ReactiveFormsModule],
  templateUrl: './confessions.html',
  styleUrl: './confessions.scss'
})
export class Confessions {

  confessionsService = inject( ConfessionsService )

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

      // add the confession
      this.confessionsService.addConfession( newConfession ).subscribe({
        next: ( confession: ConfessionResponse ) => {
          console.log('confession added: ', confession )
          alert('confession added')
          this.confessionForm.reset()
        },
        error: ( error ) => {
          console.log('error adding confession: ', error)
          alert('error while adding confession, try again')
        }
      })
    }
  }


}
