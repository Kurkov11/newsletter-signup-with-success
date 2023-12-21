document.getElementById('entered-email').innerHTML = localStorage.getItem('email-value');
document.getElementById('success-wrapper').style.backgroundImage = 'none';
document.getElementById('dismiss-btn').onclick = function(){

    document.getElementById('success-wrapper').style.backgroundImage = 'url(assets/images/shrek-shadow.png)';
    document.getElementById('success-wrapper').style.backgroundSize = 'cover'
    window.location = 'index.html';
}