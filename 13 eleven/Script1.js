function openPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    // Reset modal steps back to main info view when closed
    if (id === 'slots-popup') hideQuoteForm('slots');
    if (id === 'bulk-popup') hideQuoteForm('bulk');
}

/* * MULTI-STEP NAVIGATION FOR INQUIRY FORMS */
function showQuoteForm(prefix) {
    document.getElementById(prefix + '-main-view').style.display = 'none';
    document.getElementById(prefix + '-quote-view').style.display = 'block';
}

function hideQuoteForm(prefix) {
    document.getElementById(prefix + '-quote-view').style.display = 'none';
    document.getElementById(prefix + '-main-view').style.display = 'block';
}

function handleFormSubmit(event, formType) {
    event.preventDefault();

    const myWhatsAppNumber = "918884101311"; // Your testing number

    // 1. SLOT QUOTE INQUIRY
    if (formType === 'Slot Quote Inquiry') {
        const name = document.getElementById('whatsapp-name').value;
        const organization = document.getElementById('whatsapp-org').value || "Not Provided";
        const phone = document.getElementById('whatsapp-phone').value;
        const email = document.getElementById('whatsapp-email').value;

        const message = `*New Slot Quote Inquiry*\n\n` +
            `*Name:* ${name}\n` +
            `*Organization:* ${organization}\n` +
            `*Mobile Number:* ${phone}\n` +
            `*Email Address:* ${email}`;

        const whatsappURL = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');

        // 2. BULK EVENT QUOTE INQUIRY
    } else if (formType === 'Bulk Event Quote Inquiry') {
        const formInputs = event.target.querySelectorAll('.form-input');

        const name = formInputs[0].value;
        const organization = formInputs[1].value || "Not Provided";
        const phone = formInputs[2].value;
        const email = formInputs[3].value;
        const eventType = formInputs[4].value;
        const participants = formInputs[5].value;
        const preferredDates = formInputs[6].value;
        const requirements = formInputs[7].value || "None";

        const message = `*New Bulk Booking Inquiry*\n\n` +
            `*Name:* ${name}\n` +
            `*Organization:* ${organization}\n` +
            `*Mobile Number:* ${phone}\n` +
            `*Email Address:* ${email}\n` +
            `*Type of Event:* ${eventType}\n` +
            `*Participants:* ${participants}\n` +
            `*Preferred Date(s):* ${preferredDates}\n` +
            `*Additional Requirements:* ${requirements}`;

        const whatsappURL = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');

        // 3. GET A CALLBACK REQUEST
    } else if (formType === 'Callback Request') {
        // Collect checked sports checkboxes
        const checkedSports = [];
        const checkboxes = event.target.querySelectorAll('input[name="sports"]:checked');
        checkboxes.forEach((cb) => {
            checkedSports.push(cb.value);
        });
        const sportsSelected = checkedSports.length > 0 ? checkedSports.join(', ') : "None selected";

        // Grab text inputs by their position in the callback form
        const callbackInputs = event.target.querySelectorAll('.form-input');
        const phone = callbackInputs[0].value;
        const name = callbackInputs[1].value;
        const reason = callbackInputs[2].value;

        const message = `*New Callback Request*\n\n` +
            `*Name:* ${name}\n` +
            `*Mobile Number:* ${phone}\n` +
            `*Interested Sports:* ${sportsSelected}\n` +
            `*Reason for Callback:* ${reason}`;

        const whatsappURL = `https://wa.me/${myWhatsAppNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    }

    // Reset the form fields and close popups seamlessly
    setTimeout(() => {
        event.target.reset();
        closePopup('callback-popup');
        closePopup('slots-popup');
        closePopup('bulk-popup');
    }, 500);
}

function toggleMenu() {
    alert("Menu options coming soon!");
}
// --- SIDE DRAWER FUNCTION ---
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.style.width === '250px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '250px';
    }
   
}