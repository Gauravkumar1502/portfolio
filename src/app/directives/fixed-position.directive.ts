import { Directive, HostBinding, input } from '@angular/core';

export interface Position {
  top: string;
  right: string;
  bottom: string;
  left: string;
}
export const Positions = {
  BOTTOM_RIGHT: { top: 'auto', right: '0', bottom: '0', left: 'auto' },
  BOTTOM_LEFT: { top: 'auto', right: 'auto', bottom: '0', left: '0' },
  TOP_RIGHT: { top: '0', right: '0', bottom: 'auto', left: 'auto' },
  TOP_LEFT: { top: '0', right: 'auto', bottom: 'auto', left: '0' }
}

@Directive({
  selector: '[appFixedPosition]',
  standalone: true
})
export class FixedPositionDirective {
  // @Input({ required: true }) position: Signal<Position> = signal({ top: 'auto', right: 0, bottom: 0, left: 'auto' });
  position = input.required<Position>();
  constructor() { }

  @HostBinding('style.position') positionStyle = 'fixed';
  // @HostBinding('style.z-index') zIndex = 1000;
  @HostBinding('style.width') width = 'fit-content';
  @HostBinding('style.height') height = 'fit-content';
  @HostBinding('style.padding') padding = '0 1rem';
  @HostBinding('style.top') get top() { return this.position().top; }
  @HostBinding('style.left') get left() { return this.position().left; }
  @HostBinding('style.right') get right() { return this.position().right; }
  @HostBinding('style.bottom') get bottom() { return this.position().bottom; }
}
