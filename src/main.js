var menu = document.getElementsByClassName('x6s0dn4 xrvj5dj x1o61qjw')[0];
menu.appendChild(buttonDownload);

var divImg = document.getElementsByClassName('_aagv')[0];
var img = divImg.getElementsByTagName('img')[0];
var src = img.src;

buttonDownload.addEventListener('click', () => {
    downloadImg(src, 'download.png')
});