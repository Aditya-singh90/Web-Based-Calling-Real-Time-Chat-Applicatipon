$(document).ready(function(){
  
  var audio = document.getElementById("callRing");

  // 1. Sound Play (Phone Icon Click)
  $('.nav-link.icon:has(.feather-phone-call), .icon-call').click(function(e) {
    e.preventDefault();
    if (audio) {
        audio.currentTime = 0; // Sound ko shuru se start karne ke liye
        audio.play();
        console.log("Calling...");
    }
  });

  // 2. Sound STOP (Leave Button Click)
  // Humne 'endcall' class wale button ko target kiya hai
  $('.endcall').click(function(){
    if (audio) {
        audio.pause();         // Sound rokne ke liye
        audio.currentTime = 0; // Sound ko reset karne ke liye
        console.log("Call Ended.");
    }
    // Optional: Call end hone par alert dikhane ke liye
    alert("Call Disconnected");
  });

  // --- Baki purani logic (Dark mode & Panels) ---
  $('button.mode-switch').click(function(){
    $('body').toggleClass('dark');
  });

  $(".btn-close-right").click(function () {
    $(".right-side").removeClass("show");
    $(".expand-btn").addClass("show");
  });
  
  $(".expand-btn").click(function () {
    $(".right-side").addClass("show");
    $(this).removeClass("show");
  });


  

    

  // 2. CHAT LOGIC (Sending Messages)
  $('.send-button').on('click', sendMessage);
  $('.chat-input').on('keypress', function(e) {
      if (e.which == 13) sendMessage(); // Enter key support
  });

  function sendMessage() {
      let msg = $('.chat-input').val().trim();
      if (msg !== "") {
          let newMessage = `
              <div class="message-wrapper reverse">
                <div class="profile-picture">
                  <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1650&q=80" alt="pp">
                </div>
                <div class="message-content">
                  <p class="name">You</p>
                  <div class="message">${msg}</div>
                </div>
              </div>`;
          
          $('.chat-area').append(newMessage);
          $('.chat-input').val(""); 
          $('.chat-area').animate({ scrollTop: $('.chat-area')[0].scrollHeight }, 500);
      }
  }

  // 3. PARTICIPANT ACTIONS (Mute & Camera Toggle)
  $('.btn-mute').on('click', function() {
      $(this).toggleClass('is-muted');
      // Red color if muted, original if unmuted
      $(this).css('background-color', $(this).hasClass('is-muted') ? '#ff1932' : 'rgba(0,15,47,0.5)');
  });

  $('.btn-camera').on('click', function() {
      $(this).toggleClass('is-off');
      $(this).css('opacity', $(this).hasClass('is-off') ? '0.3' : '1');
  });

  // 4. ACTIVE SPEAKER HIGHLIGHT (Glow Effect)
  setInterval(function() {
      $('.video-participant').css({
          'outline': 'none',
          'box-shadow': 'none'
      });
      let randomIndex = Math.floor(Math.random() * $('.video-participant').length);
      $('.video-participant').eq(randomIndex).css({
          'outline': '3px solid #00ff00',
          'box-shadow': '0 0 20px rgba(0, 255, 0, 0.5)',
          'z-index': '1'
      });
  }, 4000);

  
});






  
  
 
  

 
  




 
  

  

//   // 💬 CHAT
//   $(".icon-chat").click(function () {
//     closeAll();
//     $(".chat-panel").addClass("show");
//     $(this).addClass("active");
//   });

//   // 📞 CALL (Sound only)
//   $(".icon-call").click(function () {
//     closeAll();
//     $(this).addClass("active");

//       callAudio.currentTime = 0;
//       callAudio.play();

//     alert("📞 Calling...");
//   });

//   // 👥 PARTICIPANTS
//   $(".icon-users").click(function () {
//     closeAll();
//     $(".participants").addClass("show");
//     $(this).addClass("active");
//   });

//   // 📁 FILES
//   $(".icon-files").click(function () {
//     closeAll();
//     $(".files-panel").addClass("show");
//     $(this).addClass("active");
//   });

//   // ⚙️ SETTINGS
//   $(".icon-settings").click(function () {
//     closeAll();
//     $(".settings-panel").addClass("show");
//     $(this).addClass("active");
//   });

// });
// let callActive = false;
// const ring = document.getElementById("callRing");
// const connect = document.getElementById("callConnect");
// const end = document.getElementById("callEnd");

// $(".icon-call").click(function () {
//   if (!callActive) {
//     ring.play();
//     alert("📞 Calling...");
//     callActive = true;

//     setTimeout(() => {
//       ring.pause();
//       connect.play();
//       alert("✅ Call Connected");
//     }, 3000);

//   } else {
//     end.play();
//     alert("❌ Call Ended");
//     callActive = false;
//   }
// });
// });


  