var before=document.getElementById("before"),liner=document.getElementById("liner"),command=document.getElementById("typer"),textarea=document.getElementById("texter"),terminal=document.getElementById("terminal"),git=0,pw=!1,commands=[];function enterKey(e){181==e.keyCode&&document.location.reload(!0),13==e.keyCode&&(commands.push(command.innerHTML),git=commands.length,addLine("[TheF@bash]~$"+command.innerHTML,"no-animation",0),commander(command.innerHTML.toLowerCase()),command.innerHTML="",textarea.value=""),38==e.keyCode&&0!=git&&(git-=1,textarea.value=commands[git],command.innerHTML=textarea.value),40==e.keyCode&&git!=commands.length&&(void 0===commands[git+=1]?textarea.value="":textarea.value=commands[git],command.innerHTML=textarea.value)}function commander(e){switch(e.toLowerCase()){case"help":loopLines(help,"color2 margin",80);break;case"aboutme":loopLines(aboutme,"color2 margin",80);break;case"DEV":addLine("Opening Dev.to...","color2",80),newTab(Dev);break;case"social":loopLines(social,"color2 margin",80);break;case"projects":loopLines(projects,"color2 margin",80);break;case"history":addLine("<br>","",0),loopLines(commands,"color2",80),addLine("<br>","command",80*commands.length+50);break;case"email":addLine('Opening mailto:<a href="mailto:wabolles@student.1337.ma"> wabolles@student.1337.ma</a>...',"color2",80),newTab(email);break;case"clear":setTimeout(function(){terminal.innerHTML='<a id="before"><div class="pt-2"><span class="text-[#7d82d7db] "><span class="command text-[#75e1e7]"></span></span></div></a>',before=document.getElementById("before")},1);break;case"banner":loopLines(banner,"",80);break;case"dev":addLine("Opening Dev.to...","color2",80),newTab(dev);break;case"twitter":addLine("Opening Twitter...","color2",0),newTab(twitter);break;case"linkedin":addLine("Opening LinkedIn...","color2",0),newTab(linkedin);break;case"instagram":addLine("Opening Instagram...","color2",0),newTab(instagram);break;case"github":addLine("Opening GitHub...","color2",0),newTab(github);break;case"sudo":addLine("you are not in the sudoers file.  This incident will be reported.","color2",0),newTab(sudo);break;default:addLine('<span class="inherit">Command not found ! <br> type <span class="command">\'help\'</span>.</span>',"error",100)}}function newTab(e){setTimeout(function(){window.open(e,"_blank")},500)}function addLine(e,a,n){var o="";for(let t=0;t<e.length;t++)" "==e.charAt(t)&&" "==e.charAt(t+1)?(o+="&nbsp;&nbsp;",t++):o+=e.charAt(t);setTimeout(function(){var e=document.createElement("p");e.innerHTML=o,e.className=a,before.parentNode.insertBefore(e,before),window.scrollTo(0,document.body.offsetHeight)},n)}function loopLines(e,a,n){e.forEach(function(e,o){addLine(e,a,o*n)})}setTimeout(function(){loopLines(banner,"",80),textarea.focus()},100),window.addEventListener("keyup",enterKey),textarea.value="",command.innerHTML=textarea.value;