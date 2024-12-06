import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  private readonly resumeUrl = 'https://drive.google.com/file/d/1b46Dx-HiUfh7dX5ZXbUi9c2D3Ehg3pFb/view?usp=sharing';
  
  gotoResume() {
    window.open(this.resumeUrl, '_blank');
  }
}
