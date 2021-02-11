window.addEventListener('load',()=>{
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
        '80%',
        '80%',
        '60%',
        '50%',
        '40%',
        '50%',
        '40%'
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



