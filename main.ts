import * as promptSync from 'prompt-sync';

const prompt = promptSync();

class RiceCooker {
  private isOn: boolean = false;
  private isPluggedIn: boolean = false;
  private containsWater: boolean = false;
  private cookedRice: boolean = false;

  turnOnOrOff(): void {
    this.isOn = !this.isOn;
  }

  plugInOrOff(): void {
    this.isPluggedIn = !this.isPluggedIn;
  }

  addWaterOrEmpty(): void {
    this.containsWater = !this.containsWater;
  }

  cookRice(): void {
    if (this.isOn && this.isPluggedIn && this.containsWater) {
      console.log('Cooking rice...');
      this.cookedRice = true;
    } else {
      console.log('Cannot cook rice. Make sure the rice cooker is on, plugged in, and contains water.');
    }
  }

  displayStatus(): void {
    const status: string = this.isOn ? 'ON' : 'OFF';
    const pluggedInStatus: string = this.isPluggedIn ? 'Plugged In' : 'Not Plugged In';
    const waterStatus: string = this.containsWater ? 'Water Present' : 'No Water';
    const cookedRiceStatus: string = this.cookedRice ? 'Cooked Rice Ready' : 'No Cooked Rice';

    console.log(`Status: ${status}\nPower: ${pluggedInStatus}\nWater: ${waterStatus}\nCooked Rice: ${cookedRiceStatus}`);
  }
}

const riceCooker = new RiceCooker();

const condition = true

while (condition) {
  console.log('Rice Cooker Emulator:');
  console.log('1. Turn On/Off');
  console.log('2. Plug In/Off');
  console.log('3. Add Water/Empty');
  console.log('4. Cook Rice');
  console.log('5. Display Status');
  console.log('0. Exit');

  const choice: string = prompt('Enter your choice: ').trim();

  switch (choice) {
    case '1':
      riceCooker.turnOnOrOff();
      break;
    case '2':
      riceCooker.plugInOrOff();
      break;
    case '3':
      riceCooker.addWaterOrEmpty();
      break;
    case '4':
      riceCooker.cookRice();
      break;
    case '5':
      riceCooker.displayStatus();
      break;
    case '0':
      console.log('Exiting Rice Cooker Emulator.');
      process.exit(0);
      break;
    default:
      console.log('Invalid choice. Please enter a valid option.');
  }
}
