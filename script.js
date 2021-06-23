function swapColors() {
    var theme = document.documentElement.style.getPropertyValue('--bg-color');

    if(theme == 'hsl(0, 0%, 100%)') {
        document.documentElement.style.setProperty('--bg-color', 'hsl(230, 17%, 14%)');
        document.documentElement.style.setProperty('--text-color', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--second-text-color', 'hsl(228, 34%, 66%)');
        document.documentElement.style.setProperty('--header-color', 'hsl(232, 19%, 15%)');
        document.documentElement.style.setProperty('--card-color', 'hsl(228, 28%, 20%)');
    } else {
        document.documentElement.style.setProperty('--bg-color', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--text-color', 'hsl(230, 17%, 14%)');
        document.documentElement.style.setProperty('--second-text-color', 'hsl(228, 12%, 44%)');
        document.documentElement.style.setProperty('--header-color', 'hsl(225, 100%, 98%)');
        document.documentElement.style.setProperty('--card-color', 'hsl(227, 47%, 96%)');
    }
};