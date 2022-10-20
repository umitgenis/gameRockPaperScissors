/* 
Plan;

- Rast gele bir sayı oluştur
- OluŞan sayıya göre resimleri değiştir.
- Resimleri bg atayabilmek için bir array oluşturalım.
    bgImg = ["url(/makas.svg)","url(/kagit.svg)","url(/tas.svg)"];

! extras yapılcakcakar
    
*/

// var bgImg = ["url(./assets/makas.svg)",
//              "url(./assets/kagit.svg)",
//              "url(./assets/tas.svg)"];

var bgImg = ["makas.svg",
             "kagit.svg",
             "tas.svg"];

var player1Img = document.getElementById("player1Img").style;
var player2Img = document.getElementById("player2Img").style;

function randomImg() {
    var random = Math.round(Math.random()*2);
    return random;
}

//   function randomImg2() {
//       var random2 = Math.round(Math.random()*2);
//       return random2;
//   }          

var player1ImgState;
//   var player2ImgState;

function givePlayerImg() {

//   randomImg();
//   randomImg2();              
    
    // player1ImgState = player1Img.backgroundImage = bgImg[randomImg()];
    // player2ImgState = player2Img.backgroundImage = bgImg[randomImg()];
    
    player1ImgState = player1Img.backgroundImage = "url(./assets/" + bgImg[randomImg()] + ")";
    player2ImgState = player2Img.backgroundImage = "url(./assets/" + bgImg[randomImg()] + ")";  
    
}

function state() {
    var p1 = document.getElementById("player1Skor");
    var p2 = document.getElementById("player2Skor");

    var player1Skor = Number(p1.innerHTML);
    var player2Skor = Number(p2.innerHTML);
    
    var player1SkorBgColor = p1.style;
    var player2SkorBgColor = p2.style;

    var player1ImgBgColor = document.getElementById("player1Img").style;
    var player2ImgBgColor = document.getElementById("player2Img").style;

    var mks = "url(./assets/makas.svg)", kgt = "url(./assets/kagit.svg)", ts = "url(./assets/tas.svg)";
   
    if(player1ImgState == mks && player2ImgState == kgt ){
        p1.innerHTML = player1Skor + 1;
        player1ImgBgColor.backgroundColor = player1SkorBgColor.backgroundColor = "green";
        player2ImgBgColor.backgroundColor = player2SkorBgColor.backgroundColor = "red";
        // player1SkorBgColor.backgroundColor = "green";
        // player2SkorBgColor.backgroundColor = "red";  
    }
    else if(player1ImgState == mks && player2ImgState == ts ){
        p2.innerHTML = player2Skor + 1;
        player1ImgBgColor.backgroundColor = player1SkorBgColor.backgroundColor = "red";
        player2ImgBgColor.backgroundColor = player2SkorBgColor.backgroundColor = "green";
        // player1SkorBgColor.backgroundColor = "red";
        // player2SkorBgColor.backgroundColor = "green";
    }
    else if(player1ImgState == ts && player2ImgState == kgt ){
        p2.innerHTML = player2Skor + 1;
        player1ImgBgColor.backgroundColor = player1SkorBgColor.backgroundColor = "red";
        player2ImgBgColor.backgroundColor = player2SkorBgColor.backgroundColor = "green";
        // player1SkorBgColor.backgroundColor = "red";
        // player2SkorBgColor.backgroundColor = "green";
    }
    else if(player1ImgState == ts && player2ImgState == mks ){
        p1.innerHTML = player1Skor + 1;
        player1ImgBgColor.backgroundColor = player1SkorBgColor.backgroundColor = "green";
        player2ImgBgColor.backgroundColor = player2SkorBgColor.backgroundColor = "red";
        // player1SkorBgColor.backgroundColor = "green";
        // player2SkorBgColor.backgroundColor = "red";
    }
    else if(player1ImgState == kgt && player2ImgState == ts ){
        p1.innerHTML = player1Skor + 1;
        player1ImgBgColor.backgroundColor = player1SkorBgColor.backgroundColor = "green";
        player2ImgBgColor.backgroundColor = player2SkorBgColor.backgroundColor = "red";
        // player1SkorBgColor.backgroundColor = "green";
        // player2SkorBgColor.backgroundColor = "red";
    }
    else if(player1ImgState == kgt && player2ImgState == mks ){
        p2.innerHTML = player2Skor + 1;
        player1ImgBgColor.backgroundColor = player1SkorBgColor.backgroundColor = "red";
        player2ImgBgColor.backgroundColor = player2SkorBgColor.backgroundColor = "green";
        // player1SkorBgColor.backgroundColor = "red";
        // player2SkorBgColor.backgroundColor = "green";
    }              

    // console.log( typeof player1Skor );
    // console.log( typeof player2Skor  );    
}

function run() {
    givePlayerImg();
    state();              
}          

document.getElementById("gameStart-btn").addEventListener("click", run); 
        
// console.log( player1ImgState );
// console.log( player2ImgState);