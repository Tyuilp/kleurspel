document.addEventListener("DOMContentLoaded", function(){
    let includes = document.getElementsByTagName('include');

    for(var i=0; i<includes.length; i++){
        let include = includes[i];
        let includePath = includes[i].attributes.src.value;

        fetch(includePath)
            .then(response => {
                return response.text();
            })
            .then(text => {
                include.innerHTML = text;
                include.remove();
            });
    }
});