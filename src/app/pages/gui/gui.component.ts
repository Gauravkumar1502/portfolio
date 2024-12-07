import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { AppTheme, ThemeService } from '../../services/theme.service';
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
import {MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-gui',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    HeaderComponent,
    IntroComponent,
    AboutMeComponent,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  templateUrl: './gui.component.html',
  styleUrl: './gui.component.scss',
})
export class GuiComponent {
  isSmallScreen = signal(false);
  navLinks = signal([
    { label: '.aboutMe()', fragment: 'about-me', display: true },
    { label: '.experience()', fragment: 'experience', display: true },
    { label: '.projects()', fragment: 'projects', display: true },
    { label: '.education()', fragment: 'education', display: true },
    { label: '.contact()', fragment: 'contact', display: true },
    { label: '.blog()', fragment: 'blog', display: false },
    { label: '.certificates()', fragment: 'certificates', display: false },
    { label: '.services()', fragment: 'services', display: false },
  ]);
  isDarkMode = signal(false);

  constructor(private themeService: ThemeService, private dialog: MatDialog) {
    this.themeService.initTheme('gui');
    this.themeService.removeTheme('terminal');
    this.isSmallScreen.set(window.innerWidth <= 768);
    this.isDarkMode.set(this.themeService.isDarkMode('gui'));
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

  get currentIcon(): string {
    return !this.isDarkMode() ? 'dark_mode' : 'light_mode';
  }
  
  toggleTheme(event: boolean): void {
    this.isDarkMode.set(event);
    this.themeService.setTheme('gui', this.isDarkMode() ? 
      AppTheme.GUI_DARK : AppTheme.GUI_LIGHT);
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
