document.addEventListener("DOMContentLoaded", function () {
  /* flip card animation */
  let app1 = document.getElementById("app1");
  let app2 = document.getElementById("app2");
  let app3 = document.getElementById("app3");

  let aboutApp1Button = document.getElementById("about-app1");
  let aboutApp2Button = document.getElementById("about-app2");
  let aboutApp3Button = document.getElementById("about-app3");

  let app1Front = document.getElementById("app1-front");
  let app1Back = document.getElementById("app1-back");

  let backButton1 = document.getElementById("back-button1");
  let backButton2 = document.getElementById("back-button2");
  let backButton3 = document.getElementById("back-button3");

  let isFront = true;

  if (aboutApp1Button)
    aboutApp1Button.onclick = function () {
      app1.style.transform = "rotateY(180deg)";
    };
  if (backButton1)
    backButton1.onclick = function () {
      app1.style.transform = "rotateY(0deg)";
    };

  if (aboutApp2Button)
    aboutApp2Button.onclick = function () {
      app2.style.transform = "rotateY(180deg)";
    };
  if (backButton2)
    backButton2.onclick = function () {
      app2.style.transform = "rotateY(0deg)";
    };

  if (aboutApp3Button)
    aboutApp3Button.onclick = function () {
      app3.style.transform = "rotateY(180deg)";
    };
  if (backButton3)
    backButton3.onclick = function () {
      app3.style.transform = "rotateY(0deg)";
    };

  /*Send email through contact form */
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let bodyMessage = document.getElementById("message");
  let btn = document.getElementById("form-button");
  let form = document.getElementById("contact-form");

  function sendEmail() {
    let body =
      `Name: ${name.value}` +
      `<br/>` +
      `Email: ${email.value}` +
      `<br/>` +
      `Subject: ${subject.value}` +
      `<br/>` +
      `Message: ${bodyMessage.value}`;

    Email.send({
      SecureToken: "648f05e3-7ff0-4039-a46e-44ae4f573d9b",
      To: "melanie_barbosa@hotmail.com",
      From: "melanie_barbosa@hotmail.com",
      Subject: subject.value,
      Body: body,
    }).then((message) => {
      if (message.toLowerCase().includes("ok")) {
        alert("Message sent successfully!");
      } else {
        alert(
          "Something went wrong. Please contact me through an alternative method."
        );
      }
      console.log("SMTP.js response:", message);
    });
  }

  /* Check inputs in contact form */
  function checkInputs() {
    const items = document.querySelectorAll(".item");
    for (const item of items) {
      if (item.value == "") {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
      if (items[1].value != "") {
        checkEmail();
      }
      items[1].addEventListener("keyup", () => {
        checkEmail();
      });
      item.addEventListener("keyup", () => {
        if (item.value != "") {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        } else {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
      });
    }
  }

  function checkEmail() {
    const emailRegex =
      /^([a-z\d.-]+)@([a-z\d.-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
      email.classList.add("error");
      email.parentElement.classList.add("error");

      if (email.value != "") {
        errorTxtEmail.innerText = "Enter a valid email address";
      } else {
        errorTxtEmail.innerText = 'Please fill "Email" section!';
      }
    } else {
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
    }
  }

  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      checkInputs();

      if (
        !name.classList.contains("error") &&
        !email.classList.contains("error") &&
        !subject.classList.contains("error") &&
        !bodyMessage.classList.contains("error")
      ) {
        sendEmail();
        form.reset();
        return false;
      }
    });
  }
});
