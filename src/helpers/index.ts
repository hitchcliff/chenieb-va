export function generateRandomHeight() {
  function init() {
    const height = window.innerHeight - window.innerHeight * 0.3;
    const randomHeight = ((randomParameter(0.45) * height) / window.innerHeight) * 100;

    return randomHeight;
  }

  const randomHeights = () => {
    const randomTop = randomParameter() * 100;

    return randomTop;
  };

  const randomWidths = () => {
    const randomLeft = randomParameter() * 100;

    return randomLeft;
  };

  const randomParameter = (min?: number, max?: number) => {
    const random = Math.random();

    if (min && random <= min) {
      return min;
    } else if (max && random >= max) {
      return max;
    } else {
      return random;
    }
  };

  return {
    init,
    randomHeights,
    randomWidths,
  };
}

/**
 *
 * generates random heights
 * @param data any[]
 * @returns numbers[]
 */
export function heights(data: any[], divider?: number) {
  const numbers: number[] = [];

  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < data.length; i++) {
    const randomNumber = generateRandomHeight().init();
    numbers.push(divider ? randomNumber / divider : randomNumber);
  }

  return numbers;
}

/**
 * generates random top position
 * @param data
 * @returns
 */
export function tops(data: any[]) {
  const numbers: number[] = [];

  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < data.length; i++) {
    const generator = generateRandomHeight();
    const randomNumber = generator.randomHeights();
    numbers.push(randomNumber);
  }

  return numbers;
}

/**
 * generates random left position
 * @param data
 * @returns
 */
export function lefts(data: any[]) {
  const numbers: number[] = [];

  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < data.length; i++) {
    const generator = generateRandomHeight();
    const randomNumber = generator.randomWidths();

    numbers.push(randomNumber);
  }

  return numbers;
}

export function CSSForHTML() {
  // add css for html
  document.getElementsByTagName('html')[0].classList.add('bg-black');
  document.getElementsByTagName('html')[0].classList.add('overflow-hidden');
  document.getElementsByTagName('body')[0].classList.remove('overflow-x-hidden');
}

export function UnCSSForHTML() {
  // remove css for html
  document.getElementsByTagName('html')[0].classList.remove('overflow-hidden');
  document.getElementsByTagName('body')[0].classList.add('overflow-x-hidden');
}
