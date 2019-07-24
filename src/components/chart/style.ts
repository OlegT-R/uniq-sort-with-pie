const css = `
  #piechart-block{
    width: 480px;
    height: 360px;
  }
`;

const style = (): HTMLStyleElement => {
  const styleEl: HTMLStyleElement = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.appendChild(document.createTextNode(css));
  return styleEl;
};

export default style();
