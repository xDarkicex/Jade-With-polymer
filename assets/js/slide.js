function toggle(x){
    var panel = document.getElementById(x), maxH="500px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
        
    } else {
        panel.style.height = maxH;
        
    }
}