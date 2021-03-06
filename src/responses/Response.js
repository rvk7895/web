import ls from './commands/ls';
import sudo from './commands/sudo';
import clear from './commands/clear';
import cat from './commands/cat';
import cd from './commands/cd';
import help from './commands/help'
import fallthrough from './commands/fallthrough';
import rickroll from './commands/rickroll';

const Response = (command) => {
    if (command.match(/^sudo\D*/))
        return sudo();
    else if (command.match(/^ls\D*/))
        return ls();

    else if (command.match(/^cat\D*/)) {
        const fileName = command.split(' ')[1];
        return cat(fileName);
    }
    else if (command === "clear")
        return clear();
    else if (command.match(/^cd\D*/)) {
        const dirName = command.split(' ')[1];
        return cd(dirName);
    }
    else if (command === "help")
        return help();
    else if (command === "exit") {
        window.location.href = 'https://www.youtube.com/watch?v=oHg5SJYRHA0';
        return rickroll();
    }
    else
        return fallthrough(command.split(' ')[0]);
}

export default Response;
