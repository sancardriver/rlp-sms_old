(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()


const form = document.querySelector('form');





var rm;
var zlb;
var dia;
var sex;
var age;
var iso;
var kg;
var mon;
var ank;
var sms;

form.addEventListener('change', function () {
    rm = document.querySelector('#form-input-rm');
    zlb = document.querySelector('#form-select-zlb');
    dia = document.querySelector('#form-input-dia');
    sex = document.querySelector('#form-select-sex');
    age = document.querySelector('#form-input-age');
    iso = document.querySelector('#form-select-iso');
    kg = document.querySelector('#form-input-kg');
    mon = document.querySelector('#form-select-mon');
    ank = document.querySelector('#form-input-ank');
    sms = "RM: " + rm.value + "\nZLB: " + zlb.value + "\nDia: " + dia.value + "\nSex: " + sex.value + "\nAge: " + age.value + "\nIso: " + iso.value + "\nKg: " + kg.value + "\nMon: " + mon.value + "\nAnk: " + ank.value + " Uhr";
});

const shareData = {
    text: 'test',
    title: 'test'
}
  
  const btn = document.querySelector('.btn-success');
  const resultPara = document.querySelector('.result');
  
  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData);
      resultPara.textContent = 'MDN shared successfully';
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
    }
  });
  