import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

export enum AppTheme {
  DARK_FOREST = 'dark-forest',
  DARK_DAY = 'dark-day',
  DARK_OCEAN = 'dark-ocean',
  DARK_SPACE = 'dark-space',
  DARK_NIGHT = 'dark-night',
  DARK_CAVE = 'dark-cave',
  DARK_SEA = 'dark-sea',
  LIGHT_VANILLA = 'light-vanilla',
  LIGHT_HAZE = 'light-haze',
  LIGHT_DAY = 'light-day',
  LIGHT_SKY = 'light-sky',
  GUI_DARK = 'dark',
  GUI_DARK_HIGH_CONTRAST = 'dark-high-contrast',
  GUI_DARK_MEDIUM_CONTRAST = 'dark-medium-contrast',
  GUI_LIGHT = 'light',
  GUI_LIGHT_HIGH_CONTRAST = 'light-high-contrast',
  GUI_LIGHT_MEDIUM_CONTRAST = 'light-medium-contrast',
}
interface ThemeInfo {
  themeType: 'terminal' | 'gui';
  isDarkMode: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private static readonly TERMINAL_THEME_KEY = 'terminal-theme';
  private static readonly GUI_THEME_KEY = 'gui-theme';
  private themes = new Map<AppTheme, ThemeInfo>([
    [AppTheme.DARK_FOREST, { themeType: 'terminal', isDarkMode: true }],
    [AppTheme.DARK_DAY, { themeType: 'terminal', isDarkMode: true }],
    [AppTheme.DARK_OCEAN, { themeType: 'terminal', isDarkMode: true }],
    [AppTheme.DARK_SPACE, { themeType: 'terminal', isDarkMode: true }],
    [AppTheme.DARK_NIGHT, { themeType: 'terminal', isDarkMode: true }],
    [AppTheme.DARK_CAVE, { themeType: 'terminal', isDarkMode: true }],
    [AppTheme.DARK_SEA, { themeType: 'terminal', isDarkMode: true }],
    [AppTheme.LIGHT_VANILLA, { themeType: 'terminal', isDarkMode: false }],
    [AppTheme.LIGHT_HAZE, { themeType: 'terminal', isDarkMode: false }],
    [AppTheme.LIGHT_DAY, { themeType: 'terminal', isDarkMode: false }],
    [AppTheme.LIGHT_SKY, { themeType: 'terminal', isDarkMode: false }],
    [AppTheme.GUI_DARK, { themeType: 'gui', isDarkMode: true }],
    [AppTheme.GUI_DARK_HIGH_CONTRAST, { themeType: 'gui', isDarkMode: true }],
    [AppTheme.GUI_DARK_MEDIUM_CONTRAST, { themeType: 'gui', isDarkMode: true }],
    [AppTheme.GUI_LIGHT, { themeType: 'gui', isDarkMode: false }],
    [AppTheme.GUI_LIGHT_HIGH_CONTRAST, { themeType: 'gui', isDarkMode: false }],
    [AppTheme.GUI_LIGHT_MEDIUM_CONTRAST, { themeType: 'gui', isDarkMode: false }],
  ]);

  constructor(@Inject(DOCUMENT) private document: Document, private localStorageService:LocalStorageService) { }

  initTheme(themeType: 'terminal' | 'gui'): void {
    console.log('Initializing theme:', themeType);
    const theme = this.getTheme(themeType);
    if (!theme) {
      const defaultTheme = this.getDefaulTheme(themeType);
      this.setTheme(themeType, defaultTheme);
    } else {
      this.applyTheme(themeType, theme, null);
    }
  }

  getTheme(themeType: 'terminal' | 'gui'): AppTheme | null {
    console.log('Getting theme:', themeType);
    const key = themeType === 'terminal' ? ThemeService.TERMINAL_THEME_KEY : ThemeService.GUI_THEME_KEY;
    const theme = this.localStorageService.getItem<AppTheme>(key);
    return theme;
  }

  isDarkMode(themeType: 'terminal' | 'gui'): boolean {
    console.log('Checking dark mode:', themeType);
    const theme = this.getTheme(themeType);
    if (!theme) {
      return this.detectDarkModePreference();
    }
    const themeInfo = this.themes.get(theme);
    return themeInfo ? themeInfo.isDarkMode : false;
  }

  setTheme(themeType: 'terminal' | 'gui', theme: AppTheme): void {
    console.log('Setting theme:', themeType, theme);
    const key = themeType === 'terminal' ? ThemeService.TERMINAL_THEME_KEY : ThemeService.GUI_THEME_KEY;
    const previousTheme = this.getTheme(themeType);
    this.localStorageService.setItem(key, theme);
    this.applyTheme(themeType, theme, previousTheme);
  }

  removeTheme(themeType: 'terminal' | 'gui'): void {
    console.log('Removing theme:', themeType);
    const key = themeType === 'terminal' ? ThemeService.TERMINAL_THEME_KEY : ThemeService.GUI_THEME_KEY;
    const { body } = this.document;
    const previousTheme = this.getTheme(themeType);
    if (previousTheme) {
      body.classList.remove(previousTheme);
    }
  }

  private applyTheme(themeType: 'terminal' | 'gui', theme: AppTheme, previousTheme: string | null): void {
    console.log('Applying theme:', themeType, theme);
    const { body } = this.document;
    if (previousTheme) {
      body.classList.remove(previousTheme);
    }
    body.classList.add(theme);
  }

  private detectDarkModePreference(): boolean {
    console.log('Checking dark mode');
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  private getDefaulTheme(themeType: 'terminal' | 'gui'): AppTheme {
    console.log('Getting default theme:', themeType);
    const isDarkMode = this.detectDarkModePreference();
    if (themeType === 'terminal') {
      return isDarkMode ? AppTheme.DARK_FOREST : AppTheme.LIGHT_VANILLA;
    } else {
      return isDarkMode ? AppTheme.GUI_DARK : AppTheme.GUI_LIGHT;
    }
  }
}
