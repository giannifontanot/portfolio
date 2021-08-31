/**
 *  Run when the page loads.
 *  @param - it does not receive any parameters.
 */
function init() {
    try {
        fSwitchMenu();
    } catch (e) {
        console.error('init:' + 'type: ' + e.messageType + 'message: ' + e.message);
    }
}

/**
 *  Depending on the width resolution of the screen
 *  it selects the correct class to get a
 *  horizontal or a vertical menu.
 *  @param - does not receive any parameters
 */
function fSwitchMenu() {
    try {
        // Find the contaoiner element of the menu
        var divMenuEl = document.querySelector('.pure-menu');
        // Adds / deletes the class depending on
        // screen resolution
        if (window.innerWidth >= SWITCH_GO_VERTICAL) {
            divMenuEl.classList.add('pure-menu-horizontal');
        } else {
            divMenuEl.classList.remove('pure-menu-horizontal');
        }
        // Refreshes the nav bar to show tha changes
        document.querySelector('nav').style.display = 'none';
        document.querySelector('nav').style.display = 'block';
    } catch (e) {
        console.error('fSwitchMenu: ' + 'type: ' + e.messageType + ' message: ' + e.message);
    }
}

/**
 * Open a live link from GitHub.
 * The page will open in a new tab.
 * @param pPage name and path of the page
 */
function fOpenLiveGitHub(pPage) {
    try {
        window.open('https://giannifontanot.github.io/' + pPage, '_blank',);
    } catch (e) {
        console.error('fOpenLiveGitHub: ' + 'type: ' + e.messageType + ' message: ' + e.message);
    }
}

/**
 * Open a live link from Heroku.
 * The page will open in a new tab.
 * @param pPage name and path of the page
 */
function fOpenLiveHeroku(pPage) {
    try {
        window.open('https://gianni-' + pPage + '.herokuapp.com/', '_blank');
    } catch (e) {
        console.error('fOpenLiveHeroku: ' + 'type: ' + e.messageType + ' message: ' + e.message);
    }
}

/**
 * Open a live link from GitHub.
 * The page will open in a new tab.
 * @param pRepo GitHub
 * @param pPage name and path of the page
 */
function fOpenLiveGitHubOther(pRepo, pPage) {

    try {
        window.open('https://' + pRepo + '.github.io/' + pPage, '_blank',);
    } catch (e) {
        console.error('init:' + 'type: ' + e.messageType + 'message: ' + e.message);
    }
}

/**
 * Open a static page of the portfolio
 * that exists in the root folder.
 * The page will open in a new tab.
 * @param pPage
 */
function fOpenHTML(pPage) {
    try {
        window.open('./' + pPage, '_blank',);
    } catch (e) {
        console.error('fOpenHTML: ' + 'type: ' + e.messageType + ' message: ' + e.message);
    }
}

/**
 * Open a GitHub's front page of the selected repo.
 * The page will open in a new tab.
 * @param pPage
 */
function fOpenRepo(pPage) {
    try {
        window.open('https://github.com/giannifontanot/' + pPage, '_blank',);
    } catch (e) {
        console.error('fOpenRepo: ' + 'type: ' + e.messageType + ' message: ' + e.message);
    }
}

/**
 * Open a GitHub's front page of the selected repo.
 * The page will open in a new tab.
 * @param pPage
 */
function fOpenRepoOther(pRepo, pPage) {
    try {
        window.open('https://github.com/' + pRepo + '/' + pPage, '_blank',);
    } catch (e) {
        console.error('fOpenRepo: ' + 'type: ' + e.messageType + ' message: ' + e.message);
    }
}
