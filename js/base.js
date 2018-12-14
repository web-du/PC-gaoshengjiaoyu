$(function(){
    //banner上tab切换
    $(".header .left-nav>ul>li").hover(function(){
        var index = $(this).index();
        $(this).addClass("on");
        $(".header .left-nav .right-select").show().find(".box").eq(index).show().siblings().hide();
    },function(){
       var index = $(this).index();
       $(this).removeClass("on");
        $(".header .left-nav .right-select").hide().find(".box").eq(index).hide();
    })
    $(".header .left-nav .right-select .box").hover(function(){
        var index = $(this).index();
        $(".header .left-nav>ul>li").eq(index).addClass("on");
        $(this).show().parent().show();
    },function(){
       var index = $(this).index();
        $(".header .left-nav>ul>li").eq(index).removeClass("on");
        $(this).hide().parent().hide();
    })

    
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