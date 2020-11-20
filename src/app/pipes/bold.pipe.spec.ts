import { BoldPipe } from './bold.pipe';

describe('BoldPipe', () => {
  it('create an instance', () => {
    const pipe = new BoldPipe();
    expect(pipe).toBeTruthy();
  });

  it('', () => {
    const pipe = new BoldPipe();
    const hero = "spiderman";
    expect(pipe.transform(hero)).not.toBeNull();
  });
});
