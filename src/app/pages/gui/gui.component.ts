import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterLink } from '@angular/router';
import { FixedPositionDirective, Positions } from '../../directives/fixed-position.directive';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./components/header/header.component";
import { IntroComponent } from "./components/intro/intro.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";

@Component({
  selector: 'app-gui',
  standalone: true,
  imports: [RouterLink, FixedPositionDirective, FormsModule, HeaderComponent, IntroComponent, AboutMeComponent],
  templateUrl: './gui.component.html',
  styleUrl: './gui.component.scss'
})
export class GuiComponent {
  positions = Positions;
  
  constructor(private themeService: ThemeService) {
    this.themeService.initTheme('gui');
    this.themeService.removeTheme('terminal');
  }
}
