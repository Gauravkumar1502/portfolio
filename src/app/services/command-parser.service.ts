import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// interface Command {
//   name: string;
//   description: string;
//   flags: Flag[];
//   action: (args: string[]) => void;
// }

// interface Flag {
//   long: string;
//   short: string;
//   description: string;
//   requiresValue?: boolean;
//   rendderedComponent?: RenderedComponent;
// }
// interface RenderedComponent {
//   component: Type<any>;
//   inputs: Record<string, any>;
// }

// private THEME_COMMAND: Command = {
//   name: 'theme',
//   description: 'Manage portfolio themes',
//   flags: [
//     { long: '--help', short: '-h', description: 'Show help', rendderedComponent: { component: HelpComponent, inputs: {} } },
//     { long: '--list', short: '-l', description: 'List all themes', rendderedComponent: { component: ListComponent, inputs: {} } },
//     { long: '--set', short: '-s', description: 'Set theme', requiresValue: true, rendderedComponent: { component: SetComponent, inputs: {} } },
//     { long: '--dark', short: '-d', description: 'Set dark theme' },
//     { long: '--light', short: '-lt', description: 'Set light theme' },
//     { long: '--system', short: '-sys', description: 'Use system theme' }
//   ],
//   action: (args: string[]) => {
//     // Do something
//   }
// };
export class CommandParserService {

  // private commands = new Map<string, Command>();
  constructor() {
  }

  // registerCommand(command: Command): void {
  //   this.commands.set(command.name, command);
  // }
}
