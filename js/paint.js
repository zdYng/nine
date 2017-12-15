var $canvas = $("#mainC");
var $ground = $("#ground");
var mainW = $canvas.width();
var mainH = $canvas.height();
var ctx = $canvas[0].getContext("2d");
var bottom = $ground[0].getContext("2d");
var w = mainW/10,h = mainH/10;
$mask = $(".mask");
ground = [
    $("#f1")[0],
    $("#f2")[0],
    $("#f1")[0],
    $("#f3")[0],
    $("#f2")[0],
    $("#f1")[0],
    $("#f3")[0],
    $("#f1")[0],
    $("#f1")[0],
    $("#f1")[0]
];
function MapInit(floor) {
    lock = true;
    $mask.show();
    $mask.animate({"opacity":1},600);
    bottom.drawImage(ground[floor],0,0,mainW,mainH);     //  因为用png画图，为了每个功能格子有背景色添加bottom层
    ctx.clearRect(0,0,mainW,mainH);
    for(var x=0;x<10;x++){
        for(var y=0;y<10;y++){
            if(map[floor][x][y]){
                ctx.drawImage(map[floor][x][y].img,y*w,x*h,w,h);
            }
        }
    }
    setTimeout(function () {
        $mask.animate({"opacity":0},600,function () {
            $mask.hide();
            lock = false;
        });
    },1000)
}


function update(x,y,direction) {
    ctx.clearRect(nowX*w,nowY*h,w,h);
    map[floor][nowY][nowX] = "";
    nowX += x;
    nowY += y;
    ctx.clearRect(nowX*w,nowY*h,w,h);
    ctx.drawImage(p1.imgArr[direction],nowX*w,nowY*h,w,h);

}

