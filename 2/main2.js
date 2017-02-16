document.addEventListener('click', function (event) {

    let popup = document.querySelector('#back');

    if (event.target.id === 'link') {

        popup.style.display = 'block';

    } else if (event.target.id === 'okBtn') {

        popup.style.display = 'none';
    }
});