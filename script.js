window.addEventListener('load', function() {
    const pfp = document.querySelector('.pfp');
if (pfp){
    setTimeout(function(){
        pfp.classList.add('fade-in');
    }, 50);
}
});