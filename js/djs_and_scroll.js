window.onload=function (){
            var time_shop = document.getElementById('time_shop');
            var span = time_shop.getElementsByTagName('span');
            
            /*定时器的函数：*/
            function auto(){
                var now_time = new Date();
                var fu_time = new Date(2017,10,01,23,59,59);
                
                var diff = fu_time.getTime() - now_time.getTime();
               
                //获取小时
                var xiaoshi =parseInt(diff/(60*60*1000));
                //计算获取小时之后的毫秒数
                diff = diff - xiaoshi *(60*60*1000);
                
                //获取分
                var fen = parseInt(diff / (60*1000));
                diff = diff - fen*(60*1000);
                
                //获取秒
                var miao = parseInt(diff /1000); 
                
                
                span[0].innerHTML = xiaoshi;
                span[1].innerHTML = fen;
                span[2].innerHTML = miao;
                
                
            }
            auto();
            setInterval(auto,1000);  
            
                window.onscroll = function(){ 
                    //获取浏览器滚动条的高度
                    var t = document.documentElement.scrollTop || document.body.scrollTop;  
                    var TOP = document.getElementById( "TOP" ); 
                    if( t >= 1000 ) { 
                        TOP.style.display = "block"; 
                        TOP.onclick=function (){
                            t=0;
                        }

                    } else { 
                        TOP.style.display = "none"; 
                    } 
                } 
}