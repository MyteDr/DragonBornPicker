const audio = new Audio('a.mp3');
audio.volume=0.1;
var el_list =[];
$(document).ready(function(){
    $('.input-text').keypress(function(e){
        if(e.which==13)
        {
            if(($('.input-text').val().trim()) === "")
            {
                alert("Boş bırakma la alanı gardaş");
            }
            else{
                var element = document.createElement('p');
                element.innerText=$('.input-text').val();
                element.className="list-item";
                $('.list').append(element);
                el_list.push(element);
                $('.input-text').val("");
                el_list.forEach(i => {
                    i.addEventListener("click",function(){
                        el_list[el_list.indexOf(i)].style.opacity=0;
                        setTimeout(function(){
                            delete el_list[el_list.indexOf(i)];
                            el_list = el_list.filter(item =>item);     
                            i.remove();
                        },500);
                    });
                });
            }
            return false;
        }
    });
    $('.çek').click( function(){
        if(el_list.length == 0)
        {
            alert("Boş liste la gardaş");
        }
        else
        {
            el_list.forEach(i =>{
                i.className="list-item";
            });
            audio.play();
            el_list[Math.floor(Math.random() * (el_list.length))].className="dragonborn";
        }
    });
});