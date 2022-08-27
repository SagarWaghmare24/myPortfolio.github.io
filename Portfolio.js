function OnSubNav(){
    let a = document.getElementById('subnav');
    let b = window.innerWidth;
    if(a.style.display == 'flex')
    {
        a.style.display = 'none'
    }else{
        a.style.display = 'flex';
    }
}