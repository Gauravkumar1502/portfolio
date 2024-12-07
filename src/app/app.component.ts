import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  title = 'Portfolio';
  constructor(){
    this.iconRegistry
      .addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-fill.svg'))
      .addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin-fill.svg'))
      .addSvgIcon('codepen', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/codepen-fill.svg'))
      .addSvgIcon('hacker_rank', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/hacker_rank-fill.svg'))
      .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter-fill.svg'));
  }
}
