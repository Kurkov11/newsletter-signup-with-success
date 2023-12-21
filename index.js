function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
document.getElementById('subscribe-btn').onclick = function(){
    if(! isEmail(document.getElementById('email-input').value)){
        document.getElementById('wrong-email-text').style.display = 'block';
        document.getElementById('email-input').style.border = '1px solid hsl(4, 100%, 67%)';
        document.getElementById('email-input').style.color = 'hsl(4, 100%, 67%)';
        document.getElementById('email-input').style.backgroundColor = 'hsl(4, 100%, 97%)'
    }else{
        window.location = "success.html";
    }
}