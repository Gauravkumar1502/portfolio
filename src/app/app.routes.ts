import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/gui/gui.component').then(m => m.GuiComponent),
        title: 'GUI Portfolio',
    },
    {
        path: 'terminal-portfolio',
        loadComponent: () => import('./pages/cli/cli.component').then(m => m.CliComponent),
        title: 'Terminal Portfolio',
    }
];
