function sendEmail(event) {
  event.preventDefault();

  emailjs
    .sendForm("service_hy3iqfp", "template_u2awa2d", "#contact-form")
    .then(() => {
      openModal("Message sent successfully! I'll get back to you shortly.");

      // Delay reset so EmailJS finishes reading the form
      setTimeout(() => {
        document.getElementById("contact-form").reset();
      }, 100);
    })
    .catch(() => {
      openModal("Oops! Something went wrong. Please try again.");
    });
}
