window.addEventListener("keypress", (e) => {
    const audio = document.getElementById("bass-guitar")
    const btn = document.querySelector(".key")
    if (!audio) return
    btn.classList.add("playing")
    audio.currentTime = 0
    audio.play()
    setTimeout(()=>{
        btn.classList.remove("playing")
    },2000)
})