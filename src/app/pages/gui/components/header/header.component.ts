import { Component, HostListener, inject, Input, signal } from '@angular/core';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { FixedPositionDirective, Positions } from '../../../../directives/fixed-position.directive';
import {MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AppTheme, ThemeService } from '../../../../services/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FixedPositionDirective, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, 
    MatTooltipModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkMode = signal(false);
  faGithub = faGithub;
  isSmallScreen = signal(false);
  positions = Positions;
  email: string = 'gaurav.kumar.deve@gmail.com';
  params = {
    subject: 'Hello',
    body: 'Hello Gaurav,'
  };
  @Input() drawer!: MatDrawer;
  private themeService = inject(ThemeService);
  constructor() {
    this.isDarkMode.set(this.themeService.isDarkMode('gui'));
    this.isSmallScreen.set(window.innerWidth < 768);
  }
  
  get currentIcon(): string {
    return this.isDarkMode() ? 'dark_mode' : 'light_mode';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.isSmallScreen.set(width < 768);
  }
  
  toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
    this.themeService.setTheme('gui', this.isDarkMode() ? 
      AppTheme.GUI_DARK : AppTheme.GUI_LIGHT);
  }
}

