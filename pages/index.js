<html><meta charset='UTF-8'/><meta content='width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5' name='viewport'/><meta content='IE=edge' http-equiv='X-UA-Compatible'/><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.all.min.js"></script><link href="https://dahlah.likeadream.repl.co/style.css" rel="stylesheet" type="text/css" /><!--<script src="https://hayuk.likeadream.repl.co/script.js"></script>-->
<head>
<!-- 
-->
</head>
<body>
<!-- Ganti Background --><style>body{background-image: url("https://i.postimg.cc/htKMsSYb/IMG-20211129-125244-782.jpg");background-repeat: no-repeat;background-size: 105% 105%;animation:none;transition:all .3s ease;}</style>

<div id="konten">

<div id="fotoakhir"><div class="image">
<img src="https://i.postimg.cc/44B3ywgf/heart.png" id="animasi" width="150px" height="150px"/></div><span>
Semoga bahagia di sana ya &#128578;&#128148;</span></div>

<div id='subkonten'>
<p class='catatan sek'>
<marquee id="marq" scrollamount="7">
Karenamu aku sadar<i id="spasi"></i>
Ternyata titik tertinggi mencintai itu bukan saling menjaga, melainkan saling mengikhlaskan <i id="spasi"></i>
&#128148;&#128578;&#128148;<i id="spasi"></i>
</marquee>
</p>

<div id="tombKlik"><a class='button' onClick='expl();'>
<!--Emoji LOVE-->Klik ini &#x2764;</a></div>
</div>

</div>

<script> 
function play() {
//Link Audio Bisa Diganti
var audio = new Audio('https://lv3000.likeadream.repl.co/musik.mp3');audio.play();audio.loop=true;audio.addEventListener('ended', function() {this.currentTime = 0;this.play();}, false);}         

//Pesan WhatsApp
 function bukaWa(){window.location = "https://api.whatsapp.com/send?phone=&text=Pagi juga ><" + "%0A%0A" + "- " + dateTime;} 
</script>
 
<script type="text/javascript">            
            var today = new Date();var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+'.';var dateTime = date;
            const swals = Swal.mixin({
                allowOutsideClick: false,
            });
            async function mulai(){
                await swals.fire('Halo ???');
                setTimeout(showDiv, 1300);setTimeout(showKlik, 13000);play();
            }            
            mulai();
</script>
<script>
  function showDiv() {StartMarquee();document.getElementById('subkonten').style.opacity = "1"; document.getElementById('konten').style.top = "0";document.querySelector("body").style.animation = "fanim 6s ease infinite";} function showKlik() {document.getElementById('tombKlik').style.visibility = "visible";document.getElementById('tombKlik').style.opacity = "1";}
  
async function duar(){
var e1 = document.getElementById('animasi');e1.classList.add("degdeg");
document.getElementById('fotoakhir').style.opacity = "1";document.getElementById('fotoakhir').style.height = "200px";document.getElementById('fotoakhir').style.margin = "50px 0 0 0";
document.getElementById('subkonten').style.display = "none";
}

async function expl(){duar();}

function StartMarquee(){var marquee = document.getElementById ("marq");marquee.start();}function StopMarquee(){var marquee = document.getElementById ("marq");marquee.stop();}
function StartLew(){var marquee2 = document.getElementById ("imglewat");marquee2.start();}function StopLew(){var marquee2 = document.getElementById ("imglewat");marquee2.stop();}

StopMarquee();StopLew();
</script>
</body>
</html>
