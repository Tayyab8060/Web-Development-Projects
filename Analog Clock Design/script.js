const tickSound = new Audio('ticking.mp3');
tickSound.addEventListener('error', function() {
    console.error('Error loading audio file.');
});

tickSound.addEventListener('canplay', function() {
    console.log('Audio file is loaded and can be played.');
});
function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    document.querySelector('.seconds').style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    document.querySelector('.minutes').style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    document.querySelector('.hours').style.transform = `rotate(${hourDegrees}deg)`;
    // tickSound.play().catch(function(error) {
    //     console.error('Error playing audio: ', error);
    // });
}

setInterval(setClock, 1000);
setClock();