window.addEventListener('load',()=>{
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '90%',
        '80%',
        '60%',
        '50%',
        '40%',
        '30%'
    ];
    progressBars.forEach((progress,index)=>{
        progress.style.width = values[index];
    });
});

// const checkbox = document.getElementById('checkbox');
// checkbox.addEventListener('change',()=>{
//     //change the theme of the website
    
//     document.body.classList.toggle('dark');

// });

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#checkbox');


const enableDarkMode = () => {
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
};
const disableDarkMode = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
    document.getElementById('checkbox').checked = true
    enableDarkMode();
};

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    }else {
        disableDarkMode();
        console.log(darkMode);
    }
});


//contact-form//
const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            message.value = '';
        }else {
            alert('Something went wrong!');
        }
    }

    xhr.send(JSON.stringify(formData));

})