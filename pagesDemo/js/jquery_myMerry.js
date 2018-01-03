/**
 * Created by sfk on 2017/12/22.
 */
$(document).ready(function () {
    new ZouMa().Start();
});
function ZouMa() {
    this.maxLength = 3; //最低显示数
    this.Timer = 2000;//计时器间隔时间
    this.Ul = $(".u-merry ul");
    var handId;//计时器id
    var self = this;
    this.Start = function () {
        if (self.Ul.children().length < this.maxLength) {
            self.Ul.append(self.Ul.children().clone());
        }
        handId = setInterval(self.Play, self.Timer);
    }
    this.Play = function () {
        var img = self.Ul.children().eq(0);
        var left = img.children().eq(0).width();
        img.animate({ "marginLeft": (-1 * left) + "px" }, 600, function () {
            //appendTo函数是实现走马灯一直不间断播放的秘诀。
            //目前网上看到的很多走马灯，走到最后一张的时候，会立马闪回第一张，而不是继续从后往前推进，即是没有明白该函数的作用的原因
            $(this).css("margin-left", "auto").appendTo(self.Ul);
        });
    }
}