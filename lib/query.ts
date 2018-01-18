module.exports = function query(queryParam) {
    if (typeof queryParam === 'string'){
        return document.querySelectorAll(queryParam);
    }
}