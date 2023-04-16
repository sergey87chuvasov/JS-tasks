const CHARACTERS =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン';

class Column {
  constructor(x, fontSize, canvasHeight, context) {
    this.x = x;
    this.y = 0;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.context = context;
  }

  // логика отрисовки символов - созд метод
  drawSymbol() {
    // добавим логику для хоатичности символов
    if (this.y === 0 && Math.random() < 0.98) {
      return;
    }

    // достаем случайный символ из CHARACTERS - найдем индекс случайного символа
    const characterIndex = Math.floor(Math.random() * CHARACTERS.length);

    // достанем символ из строки
    const symbol = CHARACTERS[characterIndex];

    // отрисовка символа
    this.context.fillText(symbol, this.x, this.y);
    this.y += this.fontSize;

    // добавим логику что бы символ заново рисовался с сверху когда он достигает нижней части экрана
    if (this.y > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y += this.fontSize;
    }
  }
}
