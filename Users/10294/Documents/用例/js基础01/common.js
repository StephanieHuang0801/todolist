function my$(id){
    return document.getElementById(id);
}
function setInnerText(element,text){
    if(typeof element.textContent!="undefined"){
        element.textContent=text;
    }else {
        element.innerText=text;
    }
}