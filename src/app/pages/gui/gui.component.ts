import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterLink } from '@angular/router';
import {
  FixedPositionDirective,
  Positions,
} from '../../directives/fixed-position.directive';
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

@Component({
  selector: 'app-gui',
  standalone: true,
  imports: [
    RouterLink,
    FixedPositionDirective,
    FormsModule,
    HeaderComponent,
    IntroComponent,
    AboutMeComponent,
  ],
  templateUrl: './gui.component.html',
  styleUrl: './gui.component.scss',
})
export class GuiComponent {
  positions = Positions;

  constructor(private themeService: ThemeService, private dialog: MatDialog) {
    this.themeService.initTheme('gui');
    this.themeService.removeTheme('terminal');
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
