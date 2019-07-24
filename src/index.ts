import ChartComponent from './components/chart';
import Input from './components/input';

interface IApp {
  html: HTMLElement;
  styles: HTMLStyleElement[];
}

const App = (): IApp => {
  const app = document.createElement('div');
  app.id = 'app';
  const chart = ChartComponent(Input.event);
  app.appendChild(Input.html);
  app.appendChild(chart.html);
  return {
    html: app,
    styles: [Input.style, chart.style]
  };
};

const appObj = App();

document.body.appendChild(appObj.html);
appObj.styles.forEach(style => document.head.appendChild(style));
