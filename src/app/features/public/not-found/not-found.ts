import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound implements OnInit {

  quote = '';

  private podcastQuotes = [
    `"Sometimes the best conversations are the ones you didn't plan."`,
    `"It’s not the end… just a wrong turn in the podcast world."`,
    `"Even great episodes start with silence. Hang tight."`,
    `"You won’t find this page, but you’ll find a story worth hearing."`,
    `"The mic is still on — just not on this page."`
  ];

  ngOnInit(): void {
    this.quote = this.getRandomQuote();
  }

  private getRandomQuote(): string {
    const index = Math.floor(Math.random() * this.podcastQuotes.length);
    return this.podcastQuotes[index];
  }

}
