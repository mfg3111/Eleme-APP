var nav=document.getElementById('nav');
var content=document.getElementById('content');
var a = nav.getElementsByTagName('a');
var box=content.getElementsByClassName('box');






for(var i=0;i<a.length;i++){
    a[i].index=i;
    
    a[i].onclick=function (){
        for(var i=0;i<box.length;i++){
            box[i].style.display='none';
            a[i].className='';
        }
        box[this.index].style.display='block';
        a[this.index].className='hover';
    }
}




$(function (){
    var c = 0;
    $('#pingjia_menus span').click(function (){
        c = $(this).index();
        $('#pingjia_menus span').eq(c).addClass('active').siblings('span').removeClass('active');
        $('#pingjia_con_box .pingjia_con').eq(c).addClass('show').siblings('.pingjia_con').removeClass('show');
    })
  
})






















