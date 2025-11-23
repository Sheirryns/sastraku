function Search(){
    var ul, li, a, input, filter, i, textValue;
    input=document.getElementById("search");
    filter=input.value.toUpperCase();
    ul=document.getElementById("bookList");
    li=ul.getElementsByTagName("li");


    for(i=0; i<li.length; i++){
        a=li[i].getElementsByTagName("a")[0];
        textValue=a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display="";
        } else{
             li[i].style.display="none";
        }
    }
    return false;
}