const input = document.querySelector('.input-text');
const list = document.querySelector('.list');
const audio = new Audio('a.mp3');
const sonuc = document.getElementById('sonuc');
audio.volume=0.1;
var el_list =[];
function Onclick(){
    if((input.value.trim()) === "")
    {
        alert("Boş bırakma la alanı gardaş");
    }
    else{
        var element = document.createElement('p');
        element.innerText=input.value;
        element.className="list-item";
        list.appendChild(element);
        el_list.push(element);
        input.value="";
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
}
function Cek(){
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
}
