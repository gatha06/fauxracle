// let selectedVibe = '';
// let imageCaptured = false;

// Capture the webcam image and save to localStorage
function capturePhoto() {
  const video = document.getElementById('webcam');
  const canvas = document.getElementById('snapshot');
  const ctx = canvas.getContext('2d');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.classList.remove('hidden');

  const imgData = canvas.toDataURL();
  localStorage.setItem('auraImage', imgData);
  imageCaptured = true;

  maybeGoToResult();
}

// Store the selected vibe and try to proceed
function selectVibe(vibe) {
  selectedVibe = vibe.charAt(0).toUpperCase() + vibe.slice(1);
  localStorage.setItem('auraVibe', selectedVibe);
  maybeGoToResult();
}

// Only redirect once both vibe and image are set
function maybeGoToResult() {
  if (selectedVibe && imageCaptured) {
    window.location.href = 'result.html';
  }
}
const audio = document.getElementById("myAudio");

function playAudio() {
  audio.play()
    .then(() => console.log("Audio playing"))
    .catch(err => console.error("Play error:", err));
}

function pauseAudio() {
  audio.pause();
  console.log("Audio paused");
}

// Start Webcam
// if (document.getElementById('webcam')) {
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(stream => {
//       document.getElementById('webcam').srcObject = stream;
//     })
//     .catch(err => {
//       alert("Webcam access denied. Please allow camera permissions.");
//       console.error(err);
//     });
// }
