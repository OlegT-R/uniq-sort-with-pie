import {
  uniqSortWithRamda,
  uniqueSortDeclarative,
  uniqueSortImperative
} from '.';

describe('unique sorting ramda', () => {
  test('should be sorted by alphabet and unique', () => {
    expect(uniqSortWithRamda('xyaabbbccccdefww', 'xxxxyyyyabklmopq')).toBe(
        'abcdefklmopqwxy'
    );
  });
});

describe('unique sorting imperative', () => {
  test('should be sorted by alphabet and unique', () => {
    expect(uniqueSortImperative('xyaabbbccccdefww', 'xxxxyyyyabklmopq')).toBe(
        'abcdefklmopqwxy'
    );
  });
});

describe('unique sorting declarative', () => {
  test('test invalid input', () => {
    try {
      uniqueSortDeclarative('aa', '11');
    } catch (e) {
      expect(e.message).toBe('Params should be a-z string');
    }
  });

  test('output should be unique', () => {
    const uniq = uniqueSortDeclarative('aaaccc', 'cceebbb');
    expect(uniq.length).toBe(4);
  });

  test('output should be sorted by alphabet and unique', () => {
    const uniq = uniqueSortDeclarative('cceebbbzz', 'yaaaccc');
    expect(uniq).toBe('abceyz');

    expect(uniqueSortDeclarative('xyaabbbccccdefww', 'xxxxyyyyabklmopq')).toBe(
        'abcdefklmopqwxy'
    );
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    expect(uniqueSortDeclarative(alphabet, alphabet)).toBe(alphabet);
  });

  test('test performance', () => {
    const startRamda = performance.now();
    uniqSortWithRamda('xyaabbbccccdefww', 'xxxxyyyyabklmopq');
    const endRamda = performance.now();

    const startDeclarative = performance.now();
    uniqueSortDeclarative('xyaabbbccccdefww', 'xxxxyyyyabklmopq');
    const endDeclarative = performance.now();

    const startImperative = performance.now();
    uniqueSortImperative('xyaabbbccccdefww', 'xxxxyyyyabklmopq');
    const endImperative = performance.now();

    const diffRamda = endRamda - startRamda;
    const diffDeclarative = endDeclarative - startDeclarative;
    const diffImperative = endImperative - startImperative;

    expect(
        diffImperative < diffRamda && diffImperative < diffDeclarative
    ).toBeTruthy();
  });
});
