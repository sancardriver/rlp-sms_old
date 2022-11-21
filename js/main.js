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

form.addEventListener('change', function() {
    var rm = document.querySelector('#form-input-rm');
var zlb = document.querySelector('#form-select-zlb');
var dia = document.querySelector('#form-input-dia');
var sex = document.querySelector('#form-select-sex');
var age = document.querySelector('#form-input-age');
var iso = document.querySelector('#form-select-iso');
var kg = document.querySelector('#form-input-kg');
var mon = document.querySelector('#form-select-mon');
var ank = document.querySelector('#form-input-ank');
    form.action = "sms://&body=" + encodeURIComponent("RM: " + rm.value + "\nZLB: " + zlb.value + "\nDia: " + dia.value + "\nSex: " + sex.value + "\nAge: " + age.value + "\nIso: " + iso.value + "\nKg: " + kg.value + "\nMon: " + mon.value + "\nAnk: " + ank.value + "Uhr");
});




