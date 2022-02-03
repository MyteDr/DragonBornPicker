const audio = new Audio('a.mp3');
audio.volume=0.1;
var el_list = [];
$(document).ready(function(){
    $('.input-text').keypress(function(e){
        if(e.which==13)
        {
            if(($('.input-text').val().trim()) === "")
            {
                alert("Boş bırakma la alanı gardaş");
            }
            else{
                var element = $('<p></p>');
                element.addClass('list-item');
                element.html($('.input-text').val());
                $('.list').append(element);
                $('.input-text').val("");
                el_list.push(element);
            }
            return false;
        }
    });
    $(document).on('click','p',function(){
        el_list=el_list.filter(item =>item[0] !=$(this)[0]);
        $(this).css('opacity','0');
        setTimeout(()=>{
            $(this).remove();  
        },500);
    });
    $('.çek').click( function(){
        el_list.length==0 ? (alert("Boş liste la gardaş")):(el_list.length==1 ? alert('Tek kişi ile ne çekilişi usta'): Roll());
        function Roll()
        {
            $('p').each(function(){$(this).removeClass('dragonborn')});
            audio.play();
            el_list[Math.floor(Math.random() * (el_list.length))].addClass("dragonborn");
        }
    });
});