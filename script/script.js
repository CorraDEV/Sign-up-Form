const psw = document.querySelector('#psw');
const psw_err_msg = document.querySelector('.error-psw');

const con_psw = document.querySelector('#con-psw');
const con_psw_err_msg = document.querySelector('.error-con-psw');

const form = document.querySelector('#sub-form');

form.addEventListener('submit', (evt) => {            
    if(psw.value.length < 12){    
        evt.preventDefault();
        psw_err_msg.style.display = 'block';
    }    

    if(psw.value != con_psw.value){
        evt.preventDefault();
        con_psw_err_msg.style.display = 'block';
    }
});