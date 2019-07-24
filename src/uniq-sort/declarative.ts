import {pipe} from 'ramda';

interface IAlphabetObj {
  [key: string]: boolean;
}

// create alhabet object = {a: false, ..., z: false}
const initAlphabetObj = (
    alphabet: string = 'abcdefghijklmnopqrstuvwxyz',
    obj: IAlphabetObj = {}
): IAlphabetObj => {
  const {length} = alphabet;
  const last = alphabet[length - 1];
  return length
      ? initAlphabetObj(alphabet.slice(0, length - 1), {...obj, [last]: false})
      : obj;
};

// fill alphabet object existed chars
const setExistChars = (initObj: IAlphabetObj) => {
  const recursive = (
      checkStr: string,
      obj: IAlphabetObj = initObj
  ): IAlphabetObj => {
    const {length} = checkStr;
    const last = checkStr[length - 1];
    return length
        ? recursive(checkStr.slice(0, length - 1), {...obj, [last]: true})
        : obj;
  };
  return recursive;
};

// map filled chars object to string in alphabet sort
const mapObjectToString = (
    alphabetObj: IAlphabetObj,
    alphabet: string = 'abcdefghijklmnopqrstuvwxyz',
    result: string = ''
): string => {
  const {length} = alphabet;
  const first = alphabet[0];
  const newResult = alphabetObj[first] ? `${result}${first}` : result;
  return length
      ? mapObjectToString(alphabetObj, alphabet.slice(1, length), newResult)
      : newResult;
};

// check input params, should been a-z string
const checkParams = (regExp: RegExp) => (
    first: string,
    second: string
): string => {
  const checkStr = `${first}${second}`;

  if (!regExp.test(checkStr)) {
    throw new Error('Params should be a-z string');
  }
  return checkStr;
};

const uniqueSortDeclarativeWithRamda = pipe(
    checkParams(/^[a-z]+$/),
    setExistChars(initAlphabetObj()),
    mapObjectToString
);

// declarative functional programing
export const uniqueSortDeclarative = (first: string, second: string) =>
    mapObjectToString(
        setExistChars(initAlphabetObj())(checkParams(/^[a-z]+$/)(first, second))
    );
