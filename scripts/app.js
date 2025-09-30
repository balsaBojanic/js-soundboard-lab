const button= document.querySelector('#container')

button.addEventListener("click", (event) => {
  
    const audio = new Audio(`../sounds/${event.target.id}.wav`)
    audio.volume = .05
    audio.play()
  
})