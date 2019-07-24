interface IInitHtml {
  html: HTMLElement;
  context: CanvasRenderingContext2D | null;
}

// init base chart dom structure
export const initHtml = (): IInitHtml => {
  const html = document.createElement('div');
  html.id = 'piechart-block';

  const canvas = document.createElement('canvas');
  canvas.id = 'piechart';

  html.appendChild(canvas);

  const context = canvas.getContext('2d');
  return {
    html,
    context
  };
};

interface IDataSet {
  labels: string[];
  datasets: number[];
}

export const getChartDataSet = (chars: string): IDataSet => {
  const countMap: { [key: string]: number } = {};
  for (const ch of chars) {
    countMap[ch] = !countMap[ch] ? 1 : countMap[ch] + 1;
  }
  const labels = [];
  const datasets = [];
  for (const key in countMap) {
    if (countMap.hasOwnProperty(key)) {
      labels.push(key);
      datasets.push(countMap[key]);
    }
  }
  return {labels, datasets};
};

export const addData = (chart: any, labels: string[], data: number[]) => {
  chart.data.labels = labels;

  chart.data.datasets[0].backgroundColor = [];
  chart.data.datasets[0].data = data.map((value: number) => {
    chart.data.datasets[0].backgroundColor.push(
        // tslint:disable-next-line no-bitwise
        '#' + ((Math.random() * 0xffffff) << 0).toString(16)
    );
    return value;
  });
  chart.update();
};
