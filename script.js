const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradientType = document.getElementById('gradientType');
const preview = document.querySelector('.preview');

function setGradient() {
  const type = gradientType.value;
  const direction = type === 'linear' ? 'to right' : 'circle';
  const gradient = `background: ${type}-gradient(${direction}, ${color1.value}, ${color2.value})`;
  preview.style = gradient;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
gradientType.addEventListener('change', setGradient);

setGradient();
