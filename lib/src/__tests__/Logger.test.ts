import { GalileoLogger } from '../index';

test('My Greeter', () => {
  const myLogger = new GalileoLogger();
  expect(myLogger.trackEvent).toBeDefined();
});