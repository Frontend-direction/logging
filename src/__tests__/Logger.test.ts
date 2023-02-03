import { Logger } from '../index';


test('My Greeter', () => {
    const myLogger = new Logger();
    expect(myLogger.config).toEqual({a:1});
});