interface IAlphabetObj {
  [key: string]: boolean;
}

export const uniqueSortImperative = (first: string, second: string): string => {
  const allStr = first + second;
  if (!/^[a-z]+$/.test(allStr)) {
    throw new Error('Params should be a-z string');
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetObj: IAlphabetObj = {};

  // init alphabet object
  for (const symbol of alphabet) {
    alphabetObj[symbol] = false;
  }

  // set existed chars to alphabet object
  for (const symbol of allStr) {
    alphabetObj[symbol] = true;
  }

  let uniqStr = '';

  // map sorted object to string
  for (const char of alphabet) {
    if (alphabetObj[char]) {
      uniqStr += char;
    }
  }
  return uniqStr;
};
