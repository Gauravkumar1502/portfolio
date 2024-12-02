import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="message message--{{ type }}">
      @for (line of lines; track $index) {
        <p>{{ line }}</p>
      }
    </div>
  `,
  styles: [
    `
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .message {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 2rem;
    }
    .message--error {
        color: var(--error-color);
    }
    `,
  ],
})
export class MessageComponent {
  @Input() lines: string[] = [];
  @Input() type: 'info' | 'error' = 'info';
}
