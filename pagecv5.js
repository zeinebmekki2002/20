const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#Email");
const phoneNumber = document.querySelector("#phoneNumber");
const appointmentDate = document.querySelector("#appointmentDate");
const message = document.querySelector("#message");

form.addEventListener('submit', e => {
    e.preventDefault();
    form_verify();
});

function form_verify() {
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const appointmentDateValue = appointmentDate.value.trim();
    const messageValue = message.value.trim();

    // Contrôle de saisie pour le champ de nom complet
    if (fullNameValue === "") {
        setError(fullName, "Le nom complet ne peut pas être vide");
    } else if (!fullNameValue.match(/^[a-zA-Z]/)) {
        setError(fullName, "Le nom complet doit commencer par une lettre");
    } else if (fullNameValue.length < 3) {
        setError(fullName, "Le nom complet doit avoir au moins 3 caractères");
    } else {
        setSuccess(fullName);
    }

    // Contrôle de saisie pour le champ d'email
    if (emailValue === "") {
        setError(email, "Email ne peut pas être vide");
    } else if (!email_verify(emailValue)) {
        setError(email, "Email non valide");
    } else {
        setSuccess(email);
    }

    // Contrôle de saisie pour le champ de numéro de téléphone
    if (phoneNumberValue === "") {
        setError(phoneNumber, "Le numéro de téléphone ne peut pas être vide");
    } else if (!phoneNumberValue.match(/^\d{8}$/)) {
        setError(phoneNumber, "Veuillez entrer un numéro de téléphone valide (8 chiffres)");
    } else {
        setSuccess(phoneNumber);
    }

    // Contrôle de saisie pour le champ de date
    if (appointmentDateValue === "") {
        setError(appointmentDate, "La date ne peut pas être vide");
    } else {
        setSuccess(appointmentDate);
    }

    // Contrôle de saisie pour le champ de message
    if (messageValue === "") {
        setError(message, "Le message ne peut pas être vide");
    } else {
        setSuccess(message);
    }
}

function setError(elem, message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('.error-message');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className = 'form-control success';
}

function email_verify(email) {
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}






