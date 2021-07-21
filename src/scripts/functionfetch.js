function fetchFunction(url, delay, callback) {
    setTimeout(function executeFetch() {
        fetch(url)
        .then( response => response.json() )
        .then( json => callback(json) ); 
    }, delay );
}
export {fetchFunction};