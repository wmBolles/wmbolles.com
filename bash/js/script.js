const prompt = document.querySelector('.input');
const outputWrapper = document.querySelector('.output-wrapper');
var l;
l = 1;

let randomVersion = "";
function setRandomVersion() {
    let versionPattern = "1.0.0";
    for (let i = 0; i < versionPattern.length; i++) {
        if (versionPattern[i] === ".") {
            randomVersion += ".";
        } else {
            randomVersion += Math.floor(Math.random() * 10);
        }
    }
    const welcomeMessage = document.querySelector(".welcome-message");
}
setRandomVersion();

function appendOutput(text) {
    const output = document.createElement('div');
    output.innerHTML = text;
    outputWrapper.appendChild(output);
    outputWrapper.scrollTop = outputWrapper.scrollHeight;
}

function createPrompt() {
    prompt.value = '';
    prompt.focus();
    prompt.addEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        const command = prompt.value.trim();
        prompt.removeEventListener('keydown', handleKeyDown);
        appendOutput(`<br><span style="color: yellow;">wmbolles</span>@<span style="color: rgb(136, 136, 253);">bash</span>:~$ ${command}<br>`);
        executeCommand(command);
    }
}

function executeCommand(command) {
    if (command.includes('echo ')) {
        const echoText = command.split('echo ')[1];
        appendOutput(echoText);
        createPrompt();
        return;
    }
	
    switch (command) {
		case '':
			createPrompt();
            break;
			case 'help':
				const commands = [
					' - clear',
					' - home',
					' - intro',
					' - gallery',
					' - github',
					' - go',
					' - news',
					' - game',
					' - 404',
					' - whoami',
					' - ping',
					' - exit',
					' - 42'
				];
				
				let output = '<br>Available commands:<br>_________________________________________<br>';
				
				commands.forEach(cmd => {
					output += `${cmd} <br>`;
				});
				
				appendOutput(output);
				appendOutput('_________________________________________<br>');
			



            createPrompt();
            break;
		case 'exit':
			window.open('../home/', '_blank');
			createPrompt();
			break;
		case '42':
			appendOutput('<br><a style="color: gray; text-decoration: none; " href="https://profile.intra.42.fr/users/wabolles" class="nav__link"><img src="https://profile.intra.42.fr/assets/42_logo-7dfc9110a5319a308863b96bda33cea995046d1731cebb735e41b16255106c12.svg" style="width: 4vh; height: 4vh;" alt="">wabolles</a>');
			appendOutput('<a href="https://github.com/oakoudad/badge42"><img src="https://badge.mediaplus.ma/kettlebells/wabolles" alt="wabolles\'s 42 stats" /></a>');
			createPrompt();
			break;
		case 'home':
			window.open('../home/', '_blank');
			createPrompt();
			break;
		case 'intro':
			window.open('../', '_blank');
			createPrompt();
			break;
		case 'game':
			window.open('../game/', '_blank');
			createPrompt();
			break;
		case 'ruined':
			window.open('https://github.com/ruinedm', '_blank');
			createPrompt();
			break;
		case 'gallery':
			window.open('../Gallery/intro', '_blank');
			createPrompt();
			break;
		case 'home':
			window.open('../index', '_blank');
			createPrompt();
			break;
		case 'chaouni':
			window.open('https://github.com/aboubakrbkd', '0');
			createPrompt();
			break;
		case 'news':
			window.open('../News/intro', '_blank');
			createPrompt();
			break;
		case 'go':
			window.open('../go', '_blank');
			// window.location.href = '../go';
			createPrompt();
			break;
		case '404':
			window.open('../invalid', '_blank');
			createPrompt();
			break;
		case 'index.html':
			window.open('../404', '_blank');
			createPrompt();
			break;
		case 'cd':
			window.open('../', '_blank');
			createPrompt();
			break;
		case 'sudo':
			window.open('../', '_blank');
			createPrompt();
			break;
		case 'github':
			window.open('https://github.com/wmbolles', '_blank');
			createPrompt();
			break;
		case 'rm -rf *':
			createPrompt();
			outputWrapper.innerHTML = `
			<div class="welcome-message">TheFShell V0.1</div>
			<div class="about-section">Permission denied
			</div>
            `;
            break;
		case 'chkon nta':
            createPrompt();
            outputWrapper.innerHTML = `
			Li 7wak 🤣
			ha  ${l}-0
			`;
			l++;
			break;

			

        case 'clear':
            createPrompt();
            outputWrapper.innerHTML = `
            
            
            `;
            randomVersion();
            break;
        case 'whoami'://
            appendOutput(`<br>👋 I'm wassim bolles, student at 42 network school<br>`);
            appendOutput('<br>I\`m from <strong>morocco</strong>');
            appendOutput('<br>If you\'re interested, my GitHub page can be found <a href="https://github.com/wmbolles" target="_blank">here</a>.');
            createPrompt();
            break;
        case 'ping':
            appendOutput('pong 🏓<br>');
            createPrompt();
            break;
		case 'ls':
			appendOutput('404.html   CNAME      Gallery    assets     bash       game       go         home       index.html intro.html news');
			createPrompt();
			break;
        default:
            appendOutput(`"${command}" is not a recognized command. Type "help" for a list of available commands.<br>`);
            createPrompt();
            break;
    }
}

createPrompt();

function focusInput() {
    let focusedElement = null;
    const elements = document.querySelectorAll('body');
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            const prompt = document.querySelector('.input');
            prompt.focus();
            focusedElement = element;
        });
        element.addEventListener('blur', () => {
            if (focusedElement && focusedElement !== element) {
                focusedElement.focus();
            }
        });
    });
};

focusInput();