import { Component, Type } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { MessageComponent } from './components/message/message.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cli',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cli.component.html',
  styleUrl: './cli.component.scss'
})

export class CliComponent {
  counter: number = 0;
  renderedComponents: RenderedComponent[] = [];
  constructor(private themeService: ThemeService) {
    this.themeService.initTheme('terminal');
    this.themeService.removeTheme('gui');
  }
  
  addMessageComponent(): void {
    console.log('Adding message component');
    this.renderedComponents.push({
      component: MessageComponent,
      inputs: {
        lines: ['This is a message component', `Message number: ${this.counter}`],
        type: this.counter % 2 === 0 ? 'info' : 'error'
      }
    });
    this.counter++;
  }
  clearMessages(): void {
    this.renderedComponents = [];
    this.counter = 0;
  }
}

interface RenderedComponent {
  component: Type<any>;
  inputs: Record<string, any>;
}