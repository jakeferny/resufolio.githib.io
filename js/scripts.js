function updateText(text){

let delay = 200;

	let h1 = document.getElementById("wavyTitle");

      h1.innerHTML = text
        .split("")
        .map(letter => {
          console.log(letter);
          return `<span>` + letter + `</span>`;
        })
        .join("");

      Array.from(h1.children).forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("wavy");
        }, index * 200 + delay);
      });

}

updateText("jakefernhout.com");


const audio = document.getElementById('jazz');
const playPauseButton = document.getElementById('playPause');

audio.pause();

playPauseButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'No Jazz';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Jazz';
    }
});