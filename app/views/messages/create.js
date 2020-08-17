var reply = document.getElementById('reply');
var messageField = document.getElementById('message_content');
var trixField = document.getElementById('message_content_trix');
reply.textContent = 'Message sent. I will get back to you soon. Thank you!';
console.log("insisde create");
reply.style.opacity = '1';
messageField.value = '';
trixField.innerHTML = '';