import Chart from 'chart.js';
import style from './style';

import {addData, getChartDataSet, initHtml} from './utils';

interface IChartBLock {
  html: HTMLElement;
  style: HTMLStyleElement;
}

const ChartComponent = (eventName: string): IChartBLock => {
  // init base markup
  const {html, context} = initHtml();
  if (context) {
    const data = {
      datasets: [
        {
          data: [],
          backgroundColor: []
        }
      ],
      labels: []
    };

    // init pie chart
    const chart = new Chart(context, {
      type: 'pie',
      data
    });

    // subscribe to change input with alphabet event
    document.addEventListener(eventName, (event: CustomEvent) => {
      // prepare new chart data
      const {labels, datasets} = getChartDataSet(event.detail);
      // updating chart
      addData(chart, labels, datasets);
    });
  }

  return {html, style};
};

export default ChartComponent;
