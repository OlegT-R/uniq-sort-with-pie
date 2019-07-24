const css = `
  .input-component{
    display: flex;
    justify-content: flex-start;
    width: 800px;
    align-items: center;
  }
  .input-component__count{
    padding-left: 15px;
    font-weight: bold;
  }
   .input-component__item input{
      width: 300px;
      padding: 2px 5px;
      font-size: 16px;
   }
`;

const style = (): HTMLStyleElement => {
  const styleEl: HTMLStyleElement = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.appendChild(document.createTextNode(css));
  return styleEl;
};

export default style();
