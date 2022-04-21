function talk(){  
    var know = {  
     "hello": "Hi, how are you ?",
     "hi": "Hello, how are you ?",
     "yo": "yooooo",
     "who are you" : "Hello, Jhnda here 💙",  
     "how are you" : "Good :)",  
     "ok" : "Thank You So Much ",  
     "bye": "Okay! Will meet soon..",
     "fuck you" : "No, fuck you bish",   
     "": "",
    };  
    var user = document.getElementById('userBox').value;  
     document.getElementById('chatLog').innerHTML = user + "<br>";  
    if (user in know) {  
     document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
    }else{  
     document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
    }  
   }