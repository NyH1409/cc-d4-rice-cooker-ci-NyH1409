"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var RiceCooker = /** @class */ (function () {
    function RiceCooker() {
        this.isOn = false;
        this.isPluggedIn = false;
        this.containsWater = false;
        this.cookedRice = false;
    }
    RiceCooker.prototype.turnOnOrOff = function () {
        this.isOn = !this.isOn;
    };
    RiceCooker.prototype.plugInOrOff = function () {
        this.isPluggedIn = !this.isPluggedIn;
    };
    RiceCooker.prototype.addWaterOrEmpty = function () {
        this.containsWater = !this.containsWater;
    };
    RiceCooker.prototype.cookRice = function () {
        if (this.isOn && this.isPluggedIn && this.containsWater) {
            console.log('Cooking rice...');
            this.cookedRice = true;
        }
        else {
            console.log('Cannot cook rice. Make sure the rice cooker is on, plugged in, and contains water.');
        }
    };
    RiceCooker.prototype.displayStatus = function () {
        var status = this.isOn ? 'ON' : 'OFF';
        var pluggedInStatus = this.isPluggedIn ? 'Plugged In' : 'Not Plugged In';
        var waterStatus = this.containsWater ? 'Water Present' : 'No Water';
        var cookedRiceStatus = this.cookedRice ? 'Cooked Rice Ready' : 'No Cooked Rice';
        console.log("Status: ".concat(status, "\nPower: ").concat(pluggedInStatus, "\nWater: ").concat(waterStatus, "\nCooked Rice: ").concat(cookedRiceStatus));
    };
    return RiceCooker;
}());
var riceCooker = new RiceCooker();
while (true) {
    console.log('Rice Cooker Emulator:');
    console.log('1. Turn On/Off');
    console.log('2. Plug In/Off');
    console.log('3. Add Water/Empty');
    console.log('4. Cook Rice');
    console.log('5. Display Status');
    console.log('0. Exit');
    var choice = prompt('Enter your choice: ').trim();
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
