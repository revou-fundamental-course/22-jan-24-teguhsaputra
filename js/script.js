function addHashFragment(hashFragment) {
    var currentUrl = window.location.href;
    var hashIndex = currentUrl.indexOf('#');

    if (hashIndex !== -1) {
        var baseUrl = currentUrl.substring(0, hashIndex);
        window.location.href = baseUrl + '#' + hashFragment;
    } else {
        window.location.href = currentUrl + '#' + hashFragment;
    }
}