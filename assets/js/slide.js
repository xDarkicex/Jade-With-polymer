function toggle(x){
    var panel = document.getElementById(x), maxH="400px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
        
    } else {
        panel.style.height = maxH;
        
    }
}

function close(x){
	var menu = document.getElementById(x), maxH="400px";
	if (menu.style.height === maxH){
		menu.style.height = "0px";
	}
}