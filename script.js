const stickyTop = document.querySelector('.sticky-top')
const offCanvas = document.querySelector('.offcanvas')
const audioIcon = document.querySelector('.audio-icon-wrapper i')
const audioIconWrapper = document.querySelector('.audio-icon-wrapper')
const bgm = document.querySelector('#bgm');
let isPlaying = false;

offCanvas.addEventListener('show.bs.offcanvas', function () {
    stickyTop.style.overflow = 'visible'
})

offCanvas.addEventListener('hidden.bs.offcanvas', function () {
    stickyTop.style.overflow = 'hidden'
})


window.addEventListener("load", function () {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Konfirmasi Kehadiran Berhasil Terkirim!!");
            })
    });
});

const lihatUndangan = document.querySelector('.undangan')
lihatUndangan.addEventListener('click', function(){
    playAudio()
})

function playAudio() {
    bgm.volume = 0.1
    audioIconWrapper.style.display = 'flex'
    bgm.play();
    isPlaying = true;
}

audioIconWrapper.onclick = function(){
    if(isPlaying === true){
        bgm.pause()
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
    } else {
        bgm.play()
        audioIcon.classList.add('bi-disc');
        audioIcon.classList.remove('bi-pause-circle');
    }

    isPlaying = !isPlaying
}

const urlParams = new URLSearchParams(window.location.search)
const nama = urlParams.get('nama') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudarai/i';

const namaContainer = document.querySelector('.hero h4 span');
namaContainer.innerText = `${pronoun} ${nama}` .replace(/ ,$/, ',');

document.querySelector('#nama').value = nama;