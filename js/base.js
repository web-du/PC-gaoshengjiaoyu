$(function(){
    //返回顶部
    $(".right-fix span").hide();
        
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $(".right-fix span").show();
        }else{
            $(".right-fix span").hide();
        }
        })
        $(".right-fix span").click(function(){
            $('html,body').animate({
                scrollTop:0},300);
        })
})