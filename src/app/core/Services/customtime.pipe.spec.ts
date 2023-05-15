import { CustomtimePipe } from './customtime.pipe';

fdescribe('CustomtimePipe', () => {
  const pipe = new CustomtimePipe();

  it('transforms "02:45:13" to "2h 45m"', () => {
    expect(pipe.transform('02:45:12')).toBe('2h 45m');
  });

  it('transforms "02:05:12" to "2h 5m"', () => {
    expect(pipe.transform('02:05:12')).toBe('2h 5m');
  });

  it('create an instance', () => {
    const pipe = new CustomtimePipe();
    expect(pipe).toBeTruthy();
  });
});
