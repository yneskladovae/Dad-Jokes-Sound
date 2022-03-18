const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const soundIcon = document.getElementById('sound-icon');
const soundBar = document.getElementById('soundbar');
const audio = document.getElementById('music');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };

    fetch('https://icanhazdadjoke.com/', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke;
        })

    if (soundIcon.className === 'active') {
        audio.paused ? audio.play() : audio.currentTime = 0;
    }
}

soundIcon.addEventListener('click', () => {
    if (soundIcon.className === 'active') {
        soundIcon.className = 'inactive'
        audio.volume = 0;
        soundBar.classList.add("pseudoclass");
    } else {
        soundIcon.className = 'active'
        audio.volume = 1;
        soundBar.classList.remove("pseudoclass");
    }
})