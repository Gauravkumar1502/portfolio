import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-gui',
  standalone: true,
  imports: [
    FormsModule,
    HeaderComponent,
    IntroComponent,
    AboutMeComponent,
    MatButtonModule,
    MatSidenavModule,
  ],
  templateUrl: './gui.component.html',
  styleUrl: './gui.component.scss',
})
export class GuiComponent {
  isSmallScreen = signal(false);

  constructor(private themeService: ThemeService, private dialog: MatDialog) {
    this.themeService.initTheme('gui');
    this.themeService.removeTheme('terminal');
    this.isSmallScreen.set(window.innerWidth <= 768);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    console.log(width<768);
    this.isSmallScreen.set(width <= 768);
  }

  ngOnInit() {
    this.dialog.open(PortfolioWorkInProgressDialog);
  }
}

@Component({
  selector: 'app-portfolio-wip-dialog',
  standalone: true,
  template: `<h2 mat-dialog-title>Portfolio Under Construction 🛠️</h2>
    <mat-dialog-content>
      <p [style]="{ 'letter-spacing': '1px' }">
        Hey there! My portfolio is currently being crafted and fine-tuned. I'm
        working on bringing you the most awesome representation of my work. 
      </p>
      <p [style]="{ 'font-weight': '500', 'letter-spacing': '1px' }">Stay tuned for some cool updates!</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Got It</button>
    </mat-dialog-actions>`,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PortfolioWorkInProgressDialog {
  readonly dialogRef = inject(MatDialogRef<PortfolioWorkInProgressDialog>);
}
