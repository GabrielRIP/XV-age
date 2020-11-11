window.addEventListener('load', init, 'else');
function init(){
    row1 = document.getElementById('row1');
    row2 = document.getElementById('row2');
    row3 = document.getElementById('row3');
    mega1 = document.getElementById('mega1');
    mega2 = document.getElementById('mega2');
    mega3 = document.getElementById('mega3');
    small = document.getElementById('small');
    medium = document.getElementById('medium');
    long = document.getElementById('long');
    small.addEventListener('click', () => {
        row1.style.display = 'block';
        row2.style.display = 'none';
        row3.style.display = 'none';
        mega1.style.border = '3px solid red';
        mega1.style.display = 'block';
        mega2.style.display = 'none';
        mega3.style.display = 'none';
    });
    medium.addEventListener('click', () => {
        row1.style.display = 'none';
        row2.style.display = 'block';
        row3.style.display = 'none';
        mega2.style.border = '3px solid magenta';
        mega1.style.display = 'none';
        mega2.style.display = 'block';
        mega3.style.display = 'none';
    });
    long.addEventListener('click', () => {
        row1.style.display = 'none';
        row2.style.display = 'none';
        row3.style.display = 'block';
        mega3.style.border = '3px solid peru';
        mega1.style.display = 'none';
        mega2.style.display = 'none';
        mega3.style.display = 'block';
    });
}