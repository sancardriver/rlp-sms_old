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
var rm = document.querySelector('#form-input-rm')
var zlb = document.querySelector('#form-input-zlb')

form.addEventListener('change', function() {
    form.action = "sms://017663003775?body=RM: " + rm.value + "\nZLB: " + zlb.value;
});




