import {join, pipe, sort, uniq} from 'ramda';

const diff = (a: string, b: string): number => {
  return a > b ? 1 : -1;
};

export const uniqSortWithRamda = (first: string, second: string) =>
    pipe(
        uniq,
        sort(diff),
        join('')
    )(`${first}${second}`);
