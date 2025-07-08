import { Component } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';


@Component({
  selector: 'app-team-members',
  imports: [Navbar, Footer],
  templateUrl: './team-members.html',
  styleUrl: './team-members.scss'
})
export class TeamMembers {

}
