
//广告滑动
function tabSlide(obj, ul, icon) {
    var scrollPicView = document.getElementById(obj),
		scrollPicViewDiv = document.getElementById(ul),
		lis = scrollPicViewDiv.querySelectorAll("li"),
		w = scrollPicView.offsetWidth,
		len = lis.length;
    for (var i = 0; i < len; i++) {
        lis[i].style.width = w + "px";
        if (i == len - 1) {
            scrollPicViewDiv.style.width = w * len + "px";
        }
    }
    var scroll_pic_view = new iScroll(obj, {
        snap: true,
        momentum: false,
        hScrollbar: false,
        useTransition: false,
        onScrollEnd: function () {
            $('.' + icon).removeClass("h").eq(this.currPageX).addClass("h");
            //$("#scroll_pic_nav li.on").prev().addClass("left");
            //$("#scroll_pic_nav li.on").next().removeClass("left");	

        }, onBeforeScrollStart: function (e) {
            if (this.absDistX > (this.absDistY + 5)) {
                // 用户滚动x轴,所以防止浏览器的原生滚动
                e.preventDefault();
            }
        },
        //解决第一次无法滑动的问题
        onTouchEnd: function () {
            var self = this;
            if (self.touchEndTimeId) {
                clearTimeout(self.touchEndTimeId);
            }

            self.touchEndTimeId = setTimeout(function () {
                self.absDistX = 0;
                self.absDistX = 0;
            }, 600);
        }

    });

}

//tab切换
function tabs(btn,obj,cla){
	var btn='.'+btn
	var obj='.'+obj
	
	$(btn).on('click',function(){
		$(this).addClass(cla).siblings().removeClass(cla);
		$(obj).eq($(this).index()).show().siblings(obj).hide();
	})
}

//tab切换
function Icontabs(btn,cla){
	var btn='.'+btn
	
	$(btn).on('click',function(){
		$(this).addClass(cla).siblings().removeClass(cla)
	})
}



//返回上一页

function rtpage(){
	window.location.href=document.referrer; 
}

//返回上一页不刷新
function rtpage2() {
    window.history.back(-1);
}

//确认接单按钮bu可操作
function btndisb(obj){
	$('.'+obj).attr('disabled',true)
}


//显示隐藏层
function showDiv2(btn,obj){
	
	$('.'+btn).on('click',function(){
		$('.'+obj).show()
		return false
	})
	
	$('.'+obj).on('click',function(){
		return false
	})
	
	$(document).on('click touchend',function(){
		$('.'+obj).hide()
	})
}

//显示隐藏层
var winH = $(window).height();//body隐藏滚动新增
function showDiv3(obj) {
    var aH = ($(window).height() - $('.' + obj).outerHeight(true)) / 2
    var aW = ($(window).width() - $('.' + obj).outerWidth(true)) / 2

    $('.' + obj).css({ 'bottom': 0, 'z-index': 999, 'position': 'fixed', 'display': 'block' })
    $('.mian').append('<div class="mask"></div>')
    $('.mask').css({ 'height': $(document).height(), 'width': $('.mian').width() })


    $('.wrap').height(winH);//body隐藏滚动新增
    $('.wrap').css({ 'overflow': 'hidden' });//body隐藏滚动新增
}

function closeDiv(obj){
	$('.'+obj).hide()
	if($('.mask')){
		$('.mask').remove()
	}
	$('.wrap').css({ 'height': 'auto' });//body隐藏滚动新增
	$('.wrap').css({ 'overflow': 'auto' });//body隐藏滚动新增
}


//隐藏显示层
function hideDiv(btn,obj){
	$('.'+btn).on('touchend',function(){
		$('.'+obj).remove()
	})
}





//点击图标改变
function chIcon(obj,icon,adcla){
	$('.'+obj).on('touchend',function(){
		$('.'+obj).find('.'+icon).removeClass(adcla)
		$(this).find('.'+icon).addClass(adcla)
	})
}

function inpShow(obj1,obj2){
	$('.'+obj1).on('focus',function(){
		
		$(this).parents('.loca').hide()
		$('.'+obj2).parents('.sear').show()
		$('.'+obj2).focus()
	})
}




//弹窗下拉选框
function refSel(btn,obj){
	var aH=($(window).height()-$('.'+obj).outerHeight(true))/2
	var aW=($(window).width()-$('.'+obj).outerWidth(true))/2

	$('.'+obj).css({'left':aW,'top':aH,'z-index':999,'position':'fixed'})
	$('.'+obj).show()
	$('.mian').append('<div class="mask"></div>')
	$('.mask').css({'height':$(document).height(),'width':$('.mian').width()})

	$('.'+obj).find('li').on('click',function(){
		$(btn).find('span').text($(this).text())
		$('.'+obj).hide();
		$('.mask').remove();
	})

	$('.'+obj).on('click',function(){
		return false
	})
	
	$('.mask').on('click',function(){
		$('.'+obj).hide();
		$('.mask').remove();
	})
	
	
}


function refSel2(btn,obj){
	var aH=($(window).height()-$('.'+obj).outerHeight(true))/2
	var aW=($(window).width()-$('.'+obj).outerWidth(true))/2

	$('.'+obj).css({'left':aW,'top':aH,'z-index':999,'position':'fixed'})
	$('.'+obj).show()
	$('.mian').append('<div class="mask"></div>')
	$('.mask').css({'height':$(document).height(),'width':$('.mian').width()})

	$('.'+obj).find('li').on('click',function(){
		$(btn).find('span').html($(this).find('.with_r').html())
		$('.'+obj).hide();
		$('.mask').remove();
		$(btn).find('span').css({'line-height':'30px','padding-top':'15px','display':'inline-block'})
		$(btn).find('.txt').css({'color':'#999','font-size':'20px'})

	})

	$('.'+obj).on('click',function(){
		return false
	})
	
	$('.mask').on('click',function(){
		$('.'+obj).hide();
		$('.mask').remove();
	})
	
	
}


//弹窗下拉选框
function alertDiv(btn,obj){
	var aH=($(window).height()-$('.'+obj).outerHeight(true))/2
	var aW = ($(window).width() - $('.' + obj).outerWidth(true)) / 2


	$('.'+obj).css({'left':aW,'top':aH,'z-index':999,'position':'fixed'})
	$('.'+obj).show()
	$('.mian').append('<div class="mask"></div>')
	$('.mask').css({'height':$(document).height(),'width':$('.mian').width()})

	$('.'+obj).on('click',function(){
		return false
	})
	$('.mask').on('click',function(){
		$('.'+obj).hide();
		$('.mask').remove();
	})
}

//弹窗下拉选框
function alertDiv2(btn,obj){
	$('.'+obj).css({'z-index':9999,'position':'fixed'})
	$('.'+obj).show()
	$('.mian').append('<div class="mask"></div>')
	$('.mask').css({'height':$(document).height(),'width':$('.mian').width(),'background':'rgba(0,0,0,0.8)'})

	$('.'+obj).on('click',function(){
		return false
	})
	$('.mask').on('click',function(){
		$('.'+obj).hide();
		$('.mask').remove();
	})
}


//弹出层
function popDiv(btn,obj,fn){
	
	var aH=($(window).height()-$('.'+obj).outerHeight(true))/2
	var aW=($(window).width()-$('.'+obj).outerWidth(true))/2

	$('.'+btn).on('touchend',function(){
	
		//判断如果是隐藏，则显示
		if($('.'+obj).is(':hidden')){
			$('.'+obj).css({'left':aW,'bottom':'0px','z-index':999,'position':'fixed'})
			$('.'+obj).show()
			$('.mian').append('<div class="mask"></div>')
			$('.mask').css({'height':$(document).height(),'width':$('.mian').width()})
			//回调函数
			if(fn){
				fn()
			}
		}
		//判断如果是显示，则隐藏
		else{
			$('.'+obj).hide()
			$('.mask').remove()
		}
		return false
	})
}

//弹出层
function showDiv(btn,obj,fn){
	var aH=($(window).height()-$('.'+obj).outerHeight(true))/2
	var aW=($(window).width()-$('.'+obj).outerWidth(true))/2

	$('.'+btn).on('click',function(){
		//判断如果是隐藏，则显示
		if($('.'+obj).is(':hidden')){
			$('.'+obj).css('display','inline-block')
			$('.mian').append('<div class="mask"></div>')
			$('.mask').css({'height':$(document).height(),'width':$('.mian').width()})
			//回调函数
			if(fn){
				fn()
			}
		}
		//判断如果是显示，则隐藏
		else{
			$('.'+obj).hide()
			$('.mask').remove()
		}
		return false
	})
}






//商品详情下拉显示
function pdownMap(obj,content,map,fbtn){

	var oBj=document.getElementById(obj)
	var oCon=document.getElementById(content)
	var oMap=document.getElementById(map)
	var obtn=document.getElementById(fbtn)
	var oWh=$(window).height()-240

	oCon.style.position='absolute'
	oCon.style.top=oCon.offsetTop+'px'

	oBj.ontouchstart=function(ev){
		var Y=0	
		var oEve=ev||event
		//获取按下的坐标
		var disY=event.changedTouches[0].clientY //手机获取手指触屏的Y轴点
		var startM=oCon.offsetTop  // 鼠标按下时当前位置距离头部的距离

		oBj.ontouchmove=function(ev){
			var oEve=ev||event
			var cliY=event.changedTouches[0].clientY				
			Y=cliY-disY//鼠标按下移动的距离
			Y2=Math.abs(Y)
			obtn.style.position='absolute'
			oCon.style.top=Y+startM+'px' // 移动BOX绝对定位赋值，跟随鼠标上下移动	
			oMap.style.height=Y+startM+'px'
			//document.title=Y	
			return false
		}
		oBj.ontouchend=function(){

				//alert(oCon.offsetTop)	
			if(Y>100){
				startMove(oCon,{'top':oWh})
				startMove(oMap,{'height':oWh})
			}
			else if(Y<100&&Y>0){
				startMove(oCon,{'top':300})
				startMove(oMap,{'height':300})
				obtn.style.display='block'
			}
			else if(Y2>100){
				startMove(oCon,{'top':300})
				startMove(oMap,{'height':300})
				obtn.style.position='fixed'
			}
			else if(Y2<100&&Y2>0){
				startMove(oCon,{'top':oWh})
				startMove(oMap,{'height':oWh})
			}	
		}
		return false
	}

}



// 

function showHide(){
	document.ontouchstart=function(ev){
	
		var Y=0	
		var oEve=ev||event;
		//获取按下的坐标
		var disY=event.changedTouches[0].clientY; //手机获取手指触屏的Y轴点
		
		document.ontouchmove=function(ev){
			var oEve=ev||event;
			var cliY=event.changedTouches[0].clientY;	
			if(disY-cliY>0){
				//alert('b')
				$('.header').css({'position':'relative','top':'0'})
				$('d_footer').css({'position':'fixed','top':'0'})
				
			}
			else if(disY-cliY<0){
				
				$('.header').css({'position':'fixed','top':'0'})
				$('d_footer').css({'position':'relative','top':'0'})
			//	alert('a')
			}
			
			
		}
		document.ontouchend=function(){

		}
		
	}
}



//购物车复选框

function cheBox(){
	$('.shop_solo').on('click',function(){
		
		var achek=$(this).parent().parent().siblings().find('.shop_solo').find('input')
		
		if($(this).hasClass('shop_ched')){
			$(this).removeClass('shop_ched');
			$(this).find('input').attr('checked',false)
		}
		else{
			$(this).addClass('shop_ched');
			$(this).find('input').attr('checked',true)
		}
		
//		for(var i=0;i<achek.length;i++){
//			if(achek[i].checked){
//				$(this).parent().parent().parent().find('.shop_all').addClass('shop_ched')
//				
//			}
//			else{
//				$(this).parent().parent().parent().find('.shop_all').removeClass('shop_ched')
//			}
//		}
	})
	
	//部分全选
	$('.shop_all').on('click',function(ev){
		if($(this).hasClass('shop_ched')){
			$(this).removeClass('shop_ched').parent().siblings().find('.shop_solo').removeClass('shop_ched')
			$(this).parent().siblings().find('input').attr('checked',false)
		}
		
		else{
			$(this).addClass('shop_ched').parent().siblings().find('.shop_solo').addClass('shop_ched')		
			$(this).parent().siblings().find('input').attr('checked',true)
		}
		
		
	})
	
	
	//全选
	$('.quanxuan').on('click',function(ev){
		if($(this).find('.shop_che').hasClass('shop_ched')){
			$('.shop_che').removeClass('shop_ched')
			$('input').attr('checked',false)
		}
		
		else{
			$('.shop_che').addClass('shop_ched')		
			$('input').attr('checked',true)
		}
		
		
	})
	
	
}



//加入购物车效果
function AddToCart(obj){
	$('body').on('click',obj,function(){
		
		//获取购物车按钮外面li的位置
		var ofset=$(this).parent().offset()
		//获取购物车的位置
		var gfset=$('.im_6').offset()
		//商品图片复制clone一份
		var aDiv=$(this).parent().siblings().find('dt img').clone()
		
		//购物车和图片定位
		var aL=gfset.left
		var aT=gfset.top
		var aX=ofset.left;
		var aY=ofset.top;
		//向页面添加close的
		$('body').append(aDiv)
		
		//close（）的div定位
		aDiv.css({'left':aX,'top':aY,'position':'absolute','z-index':999999999999,'overflow':'hidden'})
		//向页面添加小图标的
		$('body').append('<span id="im6" >1</span>')
		//小图标的样式
		$('#im6').css({'width':'20px', 'height':'20px', 'background':'red', 'position':'absolute','top':aT,'left':aL+6,'border-radius': '50%','z-index':'9999','display':'none','color':'#fff','text-align':'center','z-index':999999999999,'line-height':'20px'})
		
		
		//动画效果
		aDiv.animate({'width':'50px','height':'50px','top':aY-10,'left':aX+5},function(){
			$(this).animate({'left':aL,'top':aT},function(){
					$(this).remove();
					$('#im6').show();
					$('#im6').animate({'top':aT-20},function(){
						$('#im6').remove();
						
					})
			})
		})
	})
	
}



//商品详情评价固定
function detailTop(obj){
	var obj='.'+obj
	var oFset=$(obj).offset()
	var oTop=oFset.top
	
	$(window).on('scroll',function(){
		var sTop=$(window).scrollTop()
		if(oTop<sTop){
			$(obj).css({'position':'fixed','top':'0'})
			$(obj).parent().css({'padding-top':'86px'})
		}
		else{
			$(obj).css({'position':'relative','top':'0'})
			$(obj).parent().css({'padding-top':'0'})
		}
	})
	
	$('.des_bt_li li').on('click',function(){
		var sTop=$(window).scrollTop()
		$(this).addClass('h').siblings().removeClass('h');
		$('.des_b_box').eq($(this).index()).show().siblings('.des_b_box').hide();
		if(oTop<sTop){
			$(window).scrollTop(oTop);
		}
		
		
	})
	

	
	
}

//商品详情点击跳转
function djump(btn,obj){
	var btn='.'+btn
	var obj='.'+obj
	var oFset=$(obj).offset()
	
	$('body,html').animate({scrollTop:oFset.top},500)
	

}


$(function(){
	var aH=$(window).height()
	$('.mian').css({'min-height':aH})
	$(window).on('scroll',function(){
	
		var sTop=$(window).scrollTop()
		if(sTop>aH){
			$('.rt_top').show()
		}
		else{
			$('.rt_top').hide()
		}
	})
	
	$('.rt_top').on('click',function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	})
})


function popDiv(obj){
	$(obj).show()
	setTimeout(function(){
		$(obj).hide()
	},1000)
}



//退款售后 商品展开
function showMore(obj){
	 $(obj).each(function(i){
	 	var _this=$(obj).eq(i)
	 	if($(obj).eq(i).find('dl').length>1){		 		
	 		var aNum=_this.find('.pro_ct dl').length-1
	 		var objH=_this.find('.pro_ct').height()
	 		_this.find('.showmore').html('显示其余'+aNum+'件')
	 		
	 		_this.find('.showmore').show();
	 		_this.find('.pro_ct').height(164)
	 		_this.find('.showmore').on('click',function(){
	 			if($(this).hasClass('hidemore')){
	 				$(this).prev().animate({'height':'164px'})
	 				$(this).html('显示其余'+aNum+'件').removeClass('hidemore')
	 			}
	 			else{	 		
	 				$(this).prev().animate({'height':objH})
		 			$(this).html('收起').addClass('hidemore')
	 			}
	 		})
	 	}
	 	else{
	 		_this.find('.showmore').hide();
	 	}
	 })
}

//显示加载动画
function showLoadingYB(msg) {
    var showMsg = "正在加载";
    if (msg) {
        showMsg = msg;
    }
    showMsg = showMsg + "...";

    $('body').append('<div class="loadings"><div class="l_icon"></div><div class="l_txt">' + showMsg + '</div></div>');
    $('.mian').append('<div class="mask"></div>');
    var aH = ($(window).height() - $('.loadings').outerHeight(true)) / 2;
    var aW = ($(window).width() - $('.loadings').outerWidth(true)) / 2;
    $('.mask').css({ 'height': $(document).height(), 'width': $('.mian').width() });
    $('.loadings').css({ 'top': aH, 'left': aW, 'position': 'fixed' });
}

//关闭加载动画
function closeLoadingYB() {
    $('.loadings').remove();
    if ($('.mask')) {
        $('.mask').remove();
    }
    if ($('.loadingNoBg')) {
        $('.loadingNoBg').remove();
    }
}
//加载动画无背景
function showLoadingNoBg() {
    $('body').append('<div class="loadingNoBg"><div class="l_icon2"></div></div>');
    var aH = ($(window).height() - $('.loadingNoBg').outerHeight(true)) / 2;
    var aW = ($(window).width() - $('.loadingNoBg').outerWidth(true)) / 2;
    $('.loadingNoBg').css({ 'top': aH, 'left': aW, 'position': 'fixed' });
}
//弹出提示
function ShowMessage(msg) {

    $('body').append('<div class="lb_tc">' + msg + '<div>')

    //$('.lb_tc').html(msg);
    var aH = ($(window).height() - $('.lb_tc').outerHeight(true)) / 2;
    var aW = ($(window).width() - $('.lb_tc').outerWidth(true)) / 2;
    $('.lb_tc').css({ 'display': 'block', 'top': aH, 'left': aW, 'position': 'absolute' });
    setTimeout(function () {
        $('.lb_tc').remove()
    }, 2000)
}


//搜索页筛选
function tabChoose(tabNav, showDiv, navAddCla) {
    var btn = $(tabNav),
		div = $(showDiv);

    div.find('.tabc_head li').eq(0).addClass('tc_now');
    $(btn).click(function () {
        var obj = $(showDiv);
        if (obj.css('display') == 'none') {
            obj.show();
            $('.sTopWrap').css({ 'position': 'fixed', 'z-index': '999' });
            obj.append('<div class="maskSort"></div>');
            $('.maskSort').css({ 'height': $(document).height() });
            $(window).resize(function () {
                $('.maskSort').css({ 'height': $(document).height() });
            });
            $(this).addClass(navAddCla);
            $(this).removeClass('sx_after');
            $('.maskSort').click(function () {
                showBoxHide();
                btnStyle();
            });

        }
        else {
            showBoxHide();
            btnStyle();
        }
        if (div.find('.tabc_body').length == 0) {
            btn.off('click');

        }

    });
    function showBoxHide() {
        div.slideUp('fast');
        $('.sTopWrap').css({ 'position': 'relative', 'z-index': '999' });
        $('.maskSort').remove();
        $('.sort_choose').removeClass(navAddCla);
    }
    function deleteOne() {
        $('.tc_dlt').click(function () {//删除按钮
            $(this).parent('li').remove();
            if ($('.tc_after').find('li').length == 0) {
                $('.tc_after').hide();
            }
            btnStyle();
        });
    }
    function btnStyle() {//筛选按钮样式
        if ($('.tc_after').find('li').length > 0) {
            btn.addClass('sx_after');
        } else {
            btn.removeClass('sx_after');
        }
    }
    deleteOne();
    btnStyle();

    $('.tc_clear').click(function () {//清空按钮
        $('.tca_ul').find('li').remove();
        $('.tc_after').hide();
        btnStyle();
    });
    $('.tabc_body').each(function (index) {
        var index = index;
        $(this).find('li').click(function () {//选择筛选项后
            var li_text = $(this).text();
            var cate = 'filter_category_'+index;
			showBoxHide();
			$('.tc_after').show();
			$('.tc_after').find('.'+cate).remove();
			$('.tca_ul').append('<li class="'+cate+'"><em>'+li_text+'</em><a class="tc_dlt"></a></li>');
            deleteOne();
            btnStyle();
        });
    });
    $('.s_header').click(function () {//点击顶部状态栏后弹层隐藏
        if (div.css('display') == 'block') {
            showBoxHide();
            btnStyle();
        }
    });

    if (div.find('.tabc_body').length == 0) {
        btn.off('click');

    }
    zz_tab('tabc_head', 'tc_now', 'tabc_body', 'click');
}
//选项卡
function zz_tab(tabHead, tabActive, tabbody_li, triggger) {
    var head_li = $('.' + tabHead).find('li');
    var body_li = $('.' + tabbody_li);
    body_li.eq(0).show();
    head_li.bind(triggger, function () {
        head_li.removeClass(tabActive);
        head_li.eq($(this).index()).addClass(tabActive);
        body_li.hide();
        body_li.eq($(this).index()).show();
    });

}

