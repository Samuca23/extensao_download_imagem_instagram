function downloadImg(url, fileName) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
        var urlCreator = window.URL || window.webkitURL;
        var imagemUrl = urlCreator.createObjectURL(xhr.response);
        var tag = document.createElement('a');
        tag.href = imagemUrl;
        tag.download = fileName;
        tag.click();
    }

    xhr.send();
}