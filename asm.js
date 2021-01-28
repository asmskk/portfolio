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

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',()=>{
    //change the theme of the website
    
    document.body.classList.toggle('dark');
});