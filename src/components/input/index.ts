import {markup} from './markup';
import style from './style';

export interface IInputElement {
  html: HTMLElement;
  style: HTMLStyleElement;
  event: string;
}

// check is char aplabet (a-z)
const getOnlyAlphabet = (value: string) => {
  let result = '';
  for (const char of value) {
    if (/^[a-z]+$/.test(char)) {
      result += char;
    }
  }
  return result;
};

const EVENT_NAME = 'onInputChange';

const InputBlock = (): IInputElement => {
  const html = document.createElement('div');
  html.id = 'input-block';
  html.innerHTML = markup;

  // getting changing elements
  const input = html.querySelector('input');
  const countSpan = html.querySelector('.input-component__count-item');

  if (input) {
    // adding input event
    input.addEventListener('input', function () {
      const onlyChars = getOnlyAlphabet(this.value);
      const charsCount = `${onlyChars.length}`;

      // if typing alphabet symbol a-z
      if (countSpan && charsCount !== countSpan.textContent) {
        countSpan.textContent = `${onlyChars.length}`;

        // Create the event
        const event = new CustomEvent(EVENT_NAME, {
          detail: onlyChars
        });

        // Dispatch/Trigger/Fire the event
        document.dispatchEvent(event);
      }
    });
  }

  return {
    html,
    style,
    event: EVENT_NAME
  };
};

export default InputBlock();
