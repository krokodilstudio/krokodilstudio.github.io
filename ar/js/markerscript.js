var m = document.querySelector("a-marker")
var c = document.querySelector("#fadinglogo")
var s = document.querySelector("a-scene")
var o = document.querySelector("#markerFinder")
// var gumb = document.querySelector("#gumb")

// var camAll = document.querySelector("video")
// DetectRTC.load(function() {
//
//   DetectRTC.isWebsiteHasWebcamPermissions;        // getUserMedia allowed for HTTPs domain in Chrome?
//   // DetectRTC.isWebsiteHasMicrophonePermissions;    // getUserMedia allowed for HTTPs domain in Chrome?
//
// });
// console.log(DetectRTC.isWebsiteHasWebcamPermissions);
//
// setInterval(() {
//
// }, 500);

var checkExist = setInterval(function() {
   if (!!document.querySelector("video") == true) {
      console.log("Exists!");
      gumb.innerHTML = "<i class='fas fa-cog fa-spin'></i> Učitavanje...";
      if (s.hasLoaded) {
        run();

      } else {
        s.addEventListener('loaded', run);
      }

      function run() {
        console.log("Scene Loaded")
        gumb.removeAttribute("disabled")
        gumb.innerHTML = "<i class='fas fa-play-circle'></i> Započni!";
        o.setAttribute("class", "mL")

      }
      clearInterval(checkExist);
   }
   else {
     gumb.innerHTML = "<i class='fas fa-video'></i> Omogući kameru";

   }
}, 100);




// gumb.innerHTML = "asd";


// navigator.mediaDevices.getUserMedia({ video: true},function (stream) {
//      if(stream.getVideoTracks().length > 0){
//          //code for when none of the devices are available
//          console.log('jebote');
//      }else{
//         // code for when both devices are available
//         console.log('ukurac');
//      }
// },
// function() {
//   console.warn('asdasdasd');
// }
// );



// s.addEventListener("loaded", (e)=>{
//
// })


gumb.onclick = function () {
  document.querySelector("body").setAttribute("class", "loaded")
}

m.addEventListener("markerFound", (e)=>{
 console.log("found")
 c.emit('fadeIn')
 o.setAttribute("class", "mF")
})

m.addEventListener("markerLost", (e)=>{
 console.log("lost")
 c.emit('fadeOut')
 s.setAttribute('glitch', 'true')
 setTimeout(function() {
   s.setAttribute('glitch', 'false')
 }, 500)
 setTimeout(function() {
   o.setAttribute("class", "mL")
 }, 500)
})

// setInterval(function () {
//   if (camAll == true) {
//     console.log('jebote');
//   } else {
//     console.log('u kurac');
//   }
// }, 1000);

// console.log(camAll);

//
// camAll.addEventListener("change", (e)=>{
//   if (camAll !== null) {
//     console.log('radi')
//   } else {
//     console.log('ne radi')
//   }
// })
