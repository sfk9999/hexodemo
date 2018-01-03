function chekFoucus(aInput){
    //获取所有提示的tr标签
    var aTip = document.getElementsByClassName("tip");
    var len = aInput.length;
    for(var i=0;i<len;i++)
    {
        if(aInput[i].value==null)
        {
            aInput[i].index = i;
            aInput[i].onfocus=function () {
                this.style.borderColor="blue";  //把this改成aInput[i]会有问题。
                aTip[this.index].style.color="#9c9c9c";
                switch(this.id){
                    case "nameInput":
                        aTip[this.index].innerHTML="必填，长度为4-16个字符";
                        break;
                    case "pwInput":
                        aTip[this.index].innerHTML="输入密码";
                        break;
                    case "pwcInput":
                        aTip[this.index].innerHTML="再次输入相同密码";
                        break;
                    case "emailInput":
                        aTip[this.index].innerHTML="输入邮箱";
                        break;
                    case "telInput":
                        aTip[this.index].innerHTML="输入手机";
                        break;
                }
            }
        }
    }
}

//验证名称是否是4-16字符
function checkNameBlur() {
    var aName = document.getElementById("nameInput");
    var aTip = document.getElementById("name-tip");
    var len = getStelen(aName.value);
    if(len<1)
    {
        aTip.innerText="不能为空";
        aTip.style.color="red";
        aName.style.borderColor="red";
        return false;
    }
    else if(len<4 ||len>16)
    {
        aTip.innerText="格式错误";
        aName.style.borderColor="red";
        aTip.style.color="red";
        return false;
    }
    else {
        aTip.innerText="格式正确";
        aTip.style.color="green";
        aName.style.borderColor="green";
        return true;
    }
}

//验证密码
function  checkPassWord() {
    var aPw = document.getElementById("pwInput");
    var apwTip = document.getElementById("pw-tip");
    var len = getStelen(aPw.value);
    if(len<1)
    {
        apwTip.innerText="不能为空";
        apwTip.style.color="red";
        aPw.style.borderColor="red";
        return false;
    }
    else if(len<6 ||len>10)
    {
        apwTip.innerText="密码为6到10位";
        apwTip.style.color="red";
        aPw.style.borderColor="red";
        return false;
    }
    else {
        apwTip.innerText="格式正确";
        apwTip.style.color="green";
        aPw.style.borderColor="green";
        return true;
    }
}

//验证重复密码
function  checkPassWordC() {
    var aPwc = document.getElementById("pwcInput");
    var apwcTip = document.getElementById("pwc-tip");
    var len = getStelen(aPwc.value);

    //获取之前密码
    var aPw = document.getElementById("pwInput");

    if(len<1)
    {
        apwcTip.innerText="不能为空";
        apwcTip.style.color="red";
        aPwc.style.borderColor="red";
        return false;
    }
    else if(aPw.value!=aPwc.value)
    {
        apwcTip.innerText="密码确认应与密码相同";
        apwcTip.style.color="red";
        aPwc.style.borderColor="red";
        return false;
    }
    else {
        apwcTip.innerText="格式正确";
        apwcTip.style.color="green";
        aPwc.style.borderColor="green";
        return true;
    }
}

//验证邮箱
function  checkEmail() {
    var aEmail = document.getElementById("emailInput");
    var emailTip = document.getElementById("email-tip");
    var len = getStelen(aEmail.value);

    //验证@和.
    var IsAt = aEmail.value.indexOf("@");
    var IsPoint = aEmail.value.indexOf(".");

    if(len<1)
    {
        emailTip.innerText="不能为空";
        emailTip.style.color="red";
        aEmail.style.borderColor="red";
        return false;
    }
    else if(IsAt==-1 || IsPoint==-1)
    {
        emailTip.innerText="邮箱格式错误";
        emailTip.style.color="red";
        aEmail.style.borderColor="red";
        return false;
    }
    else {
        emailTip.innerText="格式正确";
        emailTip.style.color="green";
        aEmail.style.borderColor="green";
        return true;
    }
}
//验证手机
function  checkTel() {
    var aTel = document.getElementById("telInput");
    var telTip = document.getElementById("tel-tip");
    var len = getStelen(aTel.value);
    if(len<1){
        telTip.innerText="不能为空";
        telTip.style.color="red";
        aTel.style.borderColor="red";
        return false;
    }
    else if(len!=11){
        telTip.innerText="手机号应为11位";
        telTip.style.color="red";
        aTel.style.borderColor="red";
        return false;
    }
    else {
        telTip.innerText="格式正确";
        telTip.style.color="green";
        aTel.style.borderColor="green";
        return true;
    }
}
window.onload =function () {
    var aName = document.getElementById("nameInput");
    var aPassWord = document.getElementById("pwInput");
    var aPassWordC = document.getElementById("pwcInput");
    var aEmail = document.getElementById("emailInput");
    var aTel = document.getElementById("telInput");
    //获取所有input标签
    var aInput = document.getElementsByTagName("input");
    chekFoucus(aInput);

    aName.onblur=checkNameBlur;
    aPassWord.onblur=checkPassWord;
    aPassWordC.onblur=checkPassWordC;
    aEmail.onblur=checkEmail;
    aTel.onblur=checkTel;

    var oSubmit = document.getElementById("sub-button");
    oSubmit.onclick=onSubmit;

}

//获取字符长度
function  getStelen(str) {
    var enLen=0;
    var zhLen=0;
    for(var ch in str){
        if(str.charCodeAt(ch)<=parseInt(0xFF,10))
            enLen++;
        else {
            zhLen++;
        }
    }
    return enLen+2*zhLen;
}

function onSubmit() {

    if(checkNameBlur()&&checkPassWord()&&checkPassWordC()&&checkEmail()&&checkTel())
    {
        alert("成功");
    }
    else {
        alert("失败");
    }

}

