function init() {
    console.log('init');
    console.log('console.');
}

function fOpenLive(pPage) {
    window.open('https://giannifontanot.github.io/' + pPage, '_blank',);
}

function fOpenHTML(pPage) {
    window.open('./' + pPage, '_blank',);
}

function fOpenRepo(pPage) {
    console.log(pPage);

    window.open('https://github.com/giannifontanot/' + pPage, '_blank',);
}
