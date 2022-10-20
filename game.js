        /* 
       Plan;

        - Rast gele bir sayı oluştur
        - OluŞan sayıya göre resimleri değiştir.
        - Resimleri bg atayabilmek için bir array oluşturalım.
          bgImg = ["url(/makas.svg)","url(/kagit.svg)","url(/tas.svg)"];
          
       */

          var bgImg = ["url(./assets/makas.svg)",
                       "url(./assets/kagit.svg)",
                       "url(./assets/tas.svg)"];
       
          var player1Img = document.getElementById("player1Img").style;
          var player2Img = document.getElementById("player2Img").style;
  
          function randomImg() {
              var random = Math.round(Math.random()*2);
              return random;
          }

          function randomImg2() {
              var random2 = Math.round(Math.random()*2);
              return random2;
          }          
  
          var player1ImgState;
          var player2ImgState;

          function givePlayerImg() {
  
              randomImg();
              randomImg2();              
              
              player1ImgState = player1Img.backgroundImage = bgImg[randomImg()];
              player2ImgState = player2Img.backgroundImage = bgImg[randomImg2()];
          }
  
          function state() {
  
              var player1Skor = Number(document.getElementById("player1Skor").innerHTML);
              var player2Skor = Number(document.getElementById("player2Skor").innerHTML); 
  
              var player1ImgBgColor = document.getElementById("player1Img").style;
              var player2ImgBgColor = document.getElementById("player2Img").style;
  
              var player1SkorBgColor = document.getElementById("player1Skor").style;
              var player2SkorBgColor = document.getElementById("player2Skor").style;
              
              if(player1ImgState == "url(./assets/makas.svg)" && player2ImgState == "url(./assets/kagit.svg)" ){
                  document.getElementById("player1Skor").innerHTML = player1Skor + 1;
                  player1ImgBgColor.backgroundColor = "green";
                  player2ImgBgColor.backgroundColor = "red";
                  player1SkorBgColor.backgroundColor = "green";
                  player2SkorBgColor.backgroundColor = "red";  
              }
              else if(player1ImgState == "url(./assets/makas.svg)" && player2ImgState == "url(./assets/tas.svg)" ){
                  document.getElementById("player2Skor").innerHTML = player2Skor + 1;
                  player1ImgBgColor.backgroundColor = "red";
                  player2ImgBgColor.backgroundColor = "green";
                  player1SkorBgColor.backgroundColor = "red";
                  player2SkorBgColor.backgroundColor = "green";
              }
              else if(player1ImgState == "url(./assets/tas.svg)" && player2ImgState == "url(./assets/kagit.svg)" ){
                  document.getElementById("player2Skor").innerHTML = player2Skor + 1;
                  player1ImgBgColor.backgroundColor = "red";
                  player2ImgBgColor.backgroundColor = "green";
                  player1SkorBgColor.backgroundColor = "red";
                  player2SkorBgColor.backgroundColor = "green";
              }
              else if(player1ImgState == "url(./assets/tas.svg)" && player2ImgState == "url(./assets/makas.svg)" ){
                  document.getElementById("player1Skor").innerHTML = player1Skor + 1;
                  player1ImgBgColor.backgroundColor = "green";
                  player2ImgBgColor.backgroundColor = "red";
                  player1SkorBgColor.backgroundColor = "green";
                  player2SkorBgColor.backgroundColor = "red";
              }
              else if(player1ImgState == "url(./assets/kagit.svg)" && player2ImgState == "url(./assets/tas.svg)" ){
                  document.getElementById("player1Skor").innerHTML = player1Skor + 1;
                  player1ImgBgColor.backgroundColor = "green";
                  player2ImgBgColor.backgroundColor = "red";
                  player1SkorBgColor.backgroundColor = "green";
                  player2SkorBgColor.backgroundColor = "red";
              }
              else if(player1ImgState == "url(./assets/kagit.svg)" && player2ImgState == "url(./assets/makas.svg)" ){
                  document.getElementById("player2Skor").innerHTML = player2Skor + 1;
                  player1ImgBgColor.backgroundColor = "red";
                  player2ImgBgColor.backgroundColor = "green";
                  player1SkorBgColor.backgroundColor = "red";
                  player2SkorBgColor.backgroundColor = "green";
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