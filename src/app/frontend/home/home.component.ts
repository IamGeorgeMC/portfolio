import { Component } from '@angular/core';
import { SocialredComponent } from '../../components/socialred/socialred.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SocialredComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
