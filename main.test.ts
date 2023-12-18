import { RiceCooker } from './main'; 

describe('RiceCooker', () => {
  let riceCooker: RiceCooker;

  beforeEach(() => {
    riceCooker = new RiceCooker();
  });

  test('should turn on or off the rice cooker', () => {
    riceCooker.turnOnOrOff();
    expect(riceCooker.isOn).toBe(true);

    riceCooker.turnOnOrOff();
    expect(riceCooker.isOn).toBe(false);
  });

  test('should plug in or unplug the rice cooker', () => {
    riceCooker.plugInOrOff();
    expect(riceCooker.isPluggedIn).toBe(true);

    riceCooker.plugInOrOff();
    expect(riceCooker.isPluggedIn).toBe(false);
  });

  test('should add water or empty the rice cooker', () => {
    riceCooker.addWaterOrEmpty();
    expect(riceCooker.containsWater).toBe(true);

    riceCooker.addWaterOrEmpty();
    expect(riceCooker.containsWater).toBe(false);
  });

  test('should cook rice when conditions are met', () => {
    riceCooker.turnOnOrOff();
    riceCooker.plugInOrOff();
    riceCooker.addWaterOrEmpty();

    riceCooker.cookRice();

    expect(riceCooker.cookedRice).toBe(true);
  });

  test('should not cook rice when conditions are not met', () => {
   
    riceCooker.cookRice();

    expect(riceCooker.cookedRice).toBe(false);
  });

  test('should display the status', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    riceCooker.displayStatus();

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Status:'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Power:'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Water:'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Cooked Rice:'));

    consoleSpy.mockRestore();
  });
});
