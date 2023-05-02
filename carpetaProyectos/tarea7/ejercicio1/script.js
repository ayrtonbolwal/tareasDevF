let textUser;

function desplegar(event){
    if(event === undefined){
        textUser = document.getElementById('textUser').value;
        alert(textUser);
    }
    if(event.keyCode === 13){
        event.preventDefault();
        textUser = document.getElementById('textUser').value;
        alert(textUser);
    }

}