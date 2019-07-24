import {getChartDataSet, initHtml} from './utils';

describe('chart utils test', () => {
  test('html structure', () => {
    const {html} = initHtml();
    const markup = html.outerHTML;
    expect(JSON.stringify({html: markup})).toMatchSnapshot();
  });

  test('getChartDataSet should return labels and dataset', () => {
    const {labels, datasets} = getChartDataSet('aaabbbcczk');
    expect(labels).toEqual(['a', 'b', 'c', 'z', 'k']);
    expect(datasets).toEqual([3, 3, 2, 1, 1]);

    const empty = getChartDataSet('');
    expect(empty.labels).toEqual([]);
    expect(empty.datasets).toEqual([]);
  });
});
