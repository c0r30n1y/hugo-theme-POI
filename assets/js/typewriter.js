let i = 0;
const TYPE = document.querySelector('#typewriter');
const TEXT = TYPE.dataset.text;
const SPEED = 125;

function typeWriter() {
  if (i < TEXT.length) {
    TYPE.innerHTML += TEXT.charAt(i);
    i++;
    setTimeout(typeWriter, SPEED);
  }
}

if (TYPE.hasAttribute('hidden')) {
  TYPE.removeAttribute('hidden');
}

typeWriter();
