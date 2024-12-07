import { Component, HostListener, inject, input, signal } from '@angular/core';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { FixedPositionDirective, Positions } from '../../../../directives/fixed-position.directive';
import {MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';
import { AppTheme, ThemeService } from '../../../../services/theme.service';
import { RouterLink } from '@angular/router';

interface SocialLink {
  tooltip: string;
  tooltipPosition: TooltipPosition
  url: string;
  iconType: 'svgIcon' | 'fontIcon';
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FixedPositionDirective, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, 
    MatTooltipModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  drawer = input.required<MatDrawer>();
  isSmallScreen = input.required<boolean>();

  isDarkMode = signal(false);
  positions = Positions;

  socialLinks: SocialLink[] = [
    { 
      tooltip: 'Switch to Terminal Portfolio', 
      tooltipPosition: 'left',
      url: 'https://gauravkumar1502.github.io/Terminal-Portfolio/', 
      iconType: 'fontIcon', 
      icon: 'code' 
    },
    { 
      tooltip: 'GitHub',
      tooltipPosition: 'left',
      url: 'https://github.com/Gauravkumar1502', 
      iconType: 'svgIcon', 
      icon: 'github' 
    },
    { 
      tooltip: 'LinkedIn',
      tooltipPosition: 'left', 
      url: 'https://www.linkedin.com/in/gauravkumar15', 
      iconType: 'svgIcon', 
      icon: 'linkedin' 
    },
    { 
      tooltip: 'Twitter',
      tooltipPosition: 'left', 
      url: 'https://x.com/Gauravkuma_r', 
      iconType: 'svgIcon', 
      icon: 'twitter' 
    },
    { 
      tooltip: 'HackerRank',
      tooltipPosition: 'left',
      url: 'https://www.hackerrank.com/profile/gauravkumar15021', 
      iconType: 'svgIcon',
      icon: 'hacker_rank' 
    },
    { 
      tooltip: 'Codepen',
      tooltipPosition: 'left', 
      url: 'https://codepen.io/gauravkumar1502', 
      iconType: 'svgIcon', 
      icon: 'codepen' 
    }
  ];

  email: string = 'gaurav.kumar.deve@gmail.com';
  emailParams = {
    subject: 'Hello',
    body: 'Hi Gaurav,'
  };
  private themeService = inject(ThemeService);

  constructor() {
    this.isDarkMode.set(this.themeService.isDarkMode('gui'));
  }
  
  get currentIcon(): string {
    return this.isDarkMode() ? 'dark_mode' : 'light_mode';
  }
  
  toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
    this.themeService.setTheme('gui', this.isDarkMode() ? 
      AppTheme.GUI_DARK : AppTheme.GUI_LIGHT);
  }
}

