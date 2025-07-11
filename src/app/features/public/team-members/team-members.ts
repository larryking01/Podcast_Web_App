import { Component } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { Footer } from '../../../shared/components/footer/footer';
import { PageHeader } from '../../../shared/components/page-header/page-header';


@Component({
  selector: 'app-team-members',
  imports: [Navbar, Footer, PageHeader],
  templateUrl: './team-members.html',
  styleUrl: './team-members.scss'
})
export class TeamMembers {

}
