const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');


openBtn.onclick = function() {
    document.getElementById('nav-links').style.width = "100%";
    document.getElementById('nav-links').style.opacity = "1";
    document.getElementById('nav-links').style.visibility = "visible";
    document.getElementById('openBtn').style.display = "none";
    document.getElementById('closeBtn').style.display = "block";
}

closeBtn.onclick = function() {
    document.getElementById('nav-links').style.width = "0%";
    document.getElementById('nav-links').style.opacity = "0";
    document.getElementById('nav-links').style.visibility = "hiden";
    document.getElementById('openBtn').style.display = "block";
    document.getElementById('closeBtn').style.display = "none";
}



document.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;

    if (scrollHeight > 300) {
        document.getElementById('backBtn').classList.add('add');
        document.getElementById('backBtn').classList.remove('remove')
    } else {
        document.getElementById('backBtn').classList.add('remove');
        document.getElementById('backBtn').classList.remove('add')
    }
});