function openbox() {
    document.getElementById('nav__lang').classList.toggle('active');
}

function checkLang(){
    if(document.getElementById('rus').checked){
        document.getElementById('lang-rus').classList.add('active');
        document.getElementById('lang-eng').classList.remove('active');
        document.getElementById('nav__lang').classList.remove('active');
    } else {
        document.getElementById('lang-rus').classList.remove('active');
        document.getElementById('lang-eng').classList.add('active');
        document.getElementById('nav__lang').classList.remove('active');
    }
}