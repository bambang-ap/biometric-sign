class MockedDate extends Date {
  constructor() {
    super('2022-10-20T12:00:00.000Z');
  }
}

// @ts-ignore
global.Date = MockedDate;

jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
