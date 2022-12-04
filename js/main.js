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

    setShareButtonsEnabled(false);
    try {
        await navigator.share({ files, title, text, url });
        logText('Successfully sent share');
    } catch (error) {
        logError('Error sharing: ' + error);
    }
    setShareButtonsEnabled(true);
}


function onLoad() {
    document.querySelector('#share').addEventListener('click', webShare);

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
window.addEventListener('load', onLoad);