$("body,html").animate({scrollTop: 0});

window.onload = ()=>{
   
    let delay = 700;
    let delayItem = 400;

    

    // ------------------preload

    let $preloader = $('#prldr');
    $css_anm   = $preloader.find('.block');
    $css1_anm   = $preloader.find('.b-block');
    $css_anm.delay(300).fadeOut('slow');
    $css1_anm.delay(300).fadeOut('slow');
    $preloader.delay(500).fadeOut('slow');
    
    // <--------------preload


    setTimeout(()=>{

        

        $(window).scroll(function(){

        
            function SCROLL(jsElem,jqElem,func,anim){
                let check = jqElem.css('opacity');
                
                if(jsElem.getBoundingClientRect().top <= $(window).height() - 110 && check == 0 && func == undefined){
                    delay == undefined ? jqElem.animate({'opacity':1},1000+anim) : jqElem.delay(100).animate({'opacity':1},1000+anim);
                    check++; 
                } else if(jsElem.getBoundingClientRect().top <= $(window).height() - 110 && check == 0 ){
                    delay == undefined ? jqElem.animate({'opacity':1},1000+anim,func()) : jqElem.delay(100).animate({'opacity':1},1000+anim,func());
                    check++;
                }
            }
        
    
            SCROLL(document.querySelector('.info-about-work'),$(".info-about-work"), function (){
               
                $(".heart").animate({'left':0,'opacity':1},delayItem,()=>{
                    $(".star").animate({'left':0,'opacity':1},delayItem,()=>{
                        $(".clock").animate({'left':0,'opacity':1},delayItem,()=>{
                            $(".bag").animate({'left':0,'opacity':1},delayItem,()=>{
                  
                            });
                        });
                    });
                });

            },0);
            // SCROLL(document.querySelector('.about-me'),$(".about-me"), function (){
            //     $(".about-me div").animate({'opacity':1,'right':'0px'},1000);
            // },1000);
            // SCROLL(document.querySelector('.contact'),$(".contact"), function (){
            //     $(".contact .silver-txt,.call-PoPup").animate({'opacity':1,'top':'0px'},delay);
            // },0)

        });   
    },delay);

    $(window).resize(function(){

       

    });

}