import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  /**
   * Save data to localStorage
   * @param key Storage key
   * @param value Data to store
   * @throws Error if unable to save data to localStorage
   * @returns void
   * @example setItem('name', 'John Doe')
   * @example setItem('user', { name: 'John Doe', age: 30 })
   */
  setItem<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      throw new Error('Failed to save data to localStorage');
    }
  }

  /**
   * Retrieve data from localStorage
   * @param key Storage key
   * @returns Stored data or null if not found
   */
  getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return null;
      }
      return JSON.parse(item) as T;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  }

  /**
   * Remove item from localStorage
   * @param key Storage key
   */
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      throw new Error('Failed to remove data from localStorage');
    }
  }

  /**
   * Clear all data from localStorage
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      throw new Error('Failed to clear localStorage');
    }
  }

  /**
   * Check if key exists in localStorage
   * @param key Storage key
   * @returns boolean indicating if key exists
   */
  hasKey(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  /**
   * Get all keys from localStorage
   * @returns Array of storage keys
   */
  getAllKeys(): string[] {
    return Object.keys(localStorage);
  }
}