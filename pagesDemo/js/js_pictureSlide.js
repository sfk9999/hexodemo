window.onload=function () {
    var oDiv = document.getElementById('box');
    var oList = document.getElementsByClassName("list");
    var oCount = document.getElementsByClassName("count");
    var aListLi = oList[0].getElementsByTagName("li");
    var aCountLi = oCount[0].getElementsByTagName("li");
    var play=0;
    var lenCountLi = aCountLi.length;
    var lenListLi = aListLi.length;

    autoPlay();

    //切换按钮
    for(var i=0;i<lenCountLi;i++){
        aCountLi[i].index=i;
        aCountLi[i].onmouseover=function () {
            show(this.index);
        }
    }
    //鼠标划过关闭定时器
    oDiv.onmouseover=function () {
        clearInterval(play);
    }
    oDiv.onmouseout=function () {
        autoPlay();
    }

    //图片切换, 淡入淡出效果
    function show(a){
        let index = a;
        let timer=null;
        let alpha = 0;
        for(let i =0 ;i<lenCountLi;i++){
            aCountLi[i].className="";
        }
        aCountLi[index].className="current";

        clearInterval(timer);

        //淡化效果，也相当于隐藏
        for(let j=0 ;j<lenListLi ; j++){

            aListLi[j].style.opacity=0;
            aListLi[j].style.filter="alpha(opacity=0)";

        }
        aListLi[index].style.opacity=1;
        aListLi[index].style.filter="alpha(opacity=100)";

        timer = setInterval(function () {
            alpha+=2;
            aListLi[index].style.opacity=alpha/100;
            aListLi[index].style.filter="alpha(opacity="+alpha+")";
            if(alpha==100){
                clearInterval(timer);
            }

        },10);
    }
    //自动播放函数
    function autoPlay() {
        var count=0;
        play = setInterval(function () {
            count++;
            if(count==lenCountLi){
                count=0;
            }
            show(count);
        },2000);
    }
}
