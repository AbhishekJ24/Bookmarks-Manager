function adder() {
    let l = document.getElementById('link').value
    if (!l.startsWith("https://")) {
        l = "https://" + l
    }
    let e = document.createElement('a')
    e.setAttribute("href", l)
    e.setAttribute("target", "_blank")
    e.innerText = l
    let ee = document.createElement('li')
    ee.appendChild(e)
    document.getElementById('bookmark-list').appendChild(ee)
    document.getElementById('link').value = ''
}

function deleter() {
    document.getElementById('bookmark-list').lastElementChild.remove()
}

function downloader(){
    
}

addEventListener("keydown", (e) => {
    if (e.keyCode == 13)
        adder()
})
addEventListener("keydown", (e) => {
    if (e.keyCode == 8)
        deleter()
})