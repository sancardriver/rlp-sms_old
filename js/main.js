function logText(message, isError) {
    if (isError)
        console.error(message);
    else
        console.log(message);

    const p = document.createElement('p');
    if (isError)
        p.setAttribute('class', 'error');
    document.querySelector('#output').appendChild(p);
    p.appendChild(document.createTextNode(message));
}

function logError(message) {
    logText(message, true);
}

function setShareButtonsEnabled(enabled) {
    document.querySelector('#share').disabled = !enabled;
}

async function webShare() {
    const rm = document.querySelector('#form-input-rm');
    const zlb = document.querySelector('#form-select-zlb');
    const dia = document.querySelector('#form-input-dia');
    const sex = document.querySelector('#form-select-sex');
    const age = document.querySelector('#form-input-age');
    const iso = document.querySelector('#form-select-iso');
    const kg = document.querySelector('#form-input-kg');
    const mon = document.querySelector('#form-select-mon');
    const ank = document.querySelector('#form-input-ank');

    const title = undefined;
    const text = "RM: " + rm.value + "\nZLB: " + zlb.value + "\nDia: " + dia.value + "\nSex: " + sex.value + "\nAge: " + age.value + "\nIso: " + iso.value + "\nKg: " + kg.value + "\nMon: " + mon.value + "\nAnk: " + ank.value + " Uhr";
    const url = undefined;
    const files = undefined;

    try {
        await navigator.share({ files, title, text, url });
        logText('Successfully sent share');
    } catch (error) {
        logError('Error sharing: ' + error);
    }
}

function onLoad() {

    if (navigator.share === undefined) {
        setShareButtonsEnabled(false);
        if (window.location.protocol === 'http:') {
            // navigator.share() is only available in secure contexts.
            window.location.replace(window.location.href.replace(/^http:/, 'https:'));
        } else {
            logError('Error: You need to use a browser that supports this draft ' +
                'proposal.');
        }
    }
}

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                // Call webShare() if the form is valid
                webShare();
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

window.addEventListener('load', onLoad);


$('#form-input-birth').datepicker("option", "onSelect", function(dateText, inst) {
    var dob = $(this).datepicker('getDate');
    var age = GetAge(dob);
    if (age >= 16 && age < 18) {
        alert("The minimum age requirement for supplementary card applicant is 18 years old. For applicant aged 16 and 17, and are going overseas to study, please submit the letter of acceptance from the education institution.");
    }
});

function GetAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}