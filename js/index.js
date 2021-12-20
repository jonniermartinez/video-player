const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pausa = document.querySelector('#pausa')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')

$play.addEventListener('click', handlePlay)
$pausa.addEventListener('click', handlePause)

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pausa.hidden = false
  console.log('Le diste click a play')
}
function handlePause(){
  $video.pause()
  $play.hidden = false
  $pausa.hidden = true
  console.log('Le diste click a pause')
}

$backward.addEventListener('click', handleBackward)

function handleBackward(){
  $video.currentTime = $video.currentTime - 10
  $video.currentTime -= 10
  console.log("Para atras 10 segundos", $video.currentTime) 
}

$forward.addEventListener('click', handleForward)

function handleForward() {
 $video.currentTime += 10
 console.log("Para adelante 10 segundos", $video.currentTime) 
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleloaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleloaded(){
  $progress.max = $video.duration
  console.log("ha cargado mi video", $video.duration )
}

function handleTimeUpdate(){
  $progress.value = $video.currentTime
 // console.log("Tiempo actual", $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value
 // console.log($progress.value)
}
