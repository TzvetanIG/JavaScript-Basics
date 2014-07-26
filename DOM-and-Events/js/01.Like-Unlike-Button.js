function changeButton(){
    likeButton = document.getElementById('like-button');
    var  buttonText  = likeButton.innerHTML;

    if(buttonText === 'Like'){
        buttonText = 'Unlike';
    } else {
        buttonText = 'Like';
    }

    likeButton.innerHTML = buttonText;
}

var likeButton = document.getElementById('like-button');
likeButton.addEventListener('click', changeButton, false);