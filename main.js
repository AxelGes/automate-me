function handleFaq(faqId) {
  switch (faqId) {
    case "faq1":
      var closedBtn = document.getElementById("closedFaq1");
      var openedBtn = document.getElementById("openedFaq1");
      var faqDescription = document.getElementById("descriptionFaq1");

      toggleFaqElements(openedBtn, closedBtn, faqDescription);
      break;

    case "faq2":
      var closedBtn = document.getElementById("closedFaq2");
      var openedBtn = document.getElementById("openedFaq2");
      var faqDescription = document.getElementById("descriptionFaq2");

      toggleFaqElements(openedBtn, closedBtn, faqDescription);
      break;
    case "faq3":
      var closedBtn = document.getElementById("closedFaq3");
      var openedBtn = document.getElementById("openedFaq3");
      var faqDescription = document.getElementById("descriptionFaq3");
      toggleFaqElements(openedBtn, closedBtn, faqDescription);
      break;
    case "faq4":
      var closedBtn = document.getElementById("closedFaq4");
      var openedBtn = document.getElementById("openedFaq4");
      var faqDescription = document.getElementById("descriptionFaq4");

      toggleFaqElements(openedBtn, closedBtn, faqDescription);
      break;

    case "faq5":
      var closedBtn = document.getElementById("closedFaq5");
      var openedBtn = document.getElementById("openedFaq5");
      var faqDescription = document.getElementById("descriptionFaq5");

      toggleFaqElements(openedBtn, closedBtn, faqDescription);
      break;
    case "faq6":
      var closedBtn = document.getElementById("closedFaq6");
      var openedBtn = document.getElementById("openedFaq6");
      var faqDescription = document.getElementById("descriptionFaq6");
      toggleFaqElements(openedBtn, closedBtn, faqDescription);
      break;
    case "faq7":
      var closedBtn = document.getElementById("closedFaq7");
      var openedBtn = document.getElementById("openedFaq7");
      var faqDescription = document.getElementById("descriptionFaq7");

      toggleFaqElements(openedBtn, closedBtn, faqDescription);
      break;

    case "faq8":
      var closedBtn = document.getElementById("closedFaq8");
      var openedBtn = document.getElementById("openedFaq8");
      var faqDescription = document.getElementById("descriptionFaq8");

      toggleFaqElements(openedBtn, closedBtn, faqDescription);
      break;
    case "faq9":
      var closedBtn = document.getElementById("closedFaq9");
      var openedBtn = document.getElementById("openedFaq9");
      var faqDescription = document.getElementById("descriptionFaq9");
      toggleFaqElements(openedBtn, closedBtn, faqDescription);
      break;
    case "faq10":
      var closedBtn = document.getElementById("closedFaq10");
      var openedBtn = document.getElementById("openedFaq10");
      var faqDescription = document.getElementById("descriptionFaq10");
      toggleFaqElements(openedBtn, closedBtn, faqDescription);
      break;
    default:
      //wtf
      break;
  }
}

function toggleFaqElements(openedBtn, closedBtn, faqDescription) {
  if (openedBtn.classList.contains("hidden")) {
    // open faq
    openedBtn.classList.remove("hidden");
    closedBtn.classList.add("hidden");
    faqDescription.classList.remove("hidden");
  } else {
    // close faq
    openedBtn.classList.add("hidden");
    closedBtn.classList.remove("hidden");
    faqDescription.classList.add("hidden");
  }
}

function toggleHamburger() {
  var hamburgerOpenMenu = document.getElementById("hamburgerOpenMenu");

  if (hamburgerOpenMenu.classList.contains("hidden")) {
    // open hamburger
    hamburgerOpenMenu.classList.remove("hidden");
  } else {
    // close hamburger
    hamburgerOpenMenu.classList.add("hidden");
  }
}

function toggleForm() {
  var quoteRequestFormOpen = document.getElementById("quoteRequestFormOpen");
  
  if (quoteRequestFormOpen.classList.contains("hidden")) {
    // open hamburger
    quoteRequestFormOpen.classList.remove("hidden");
  } else {
    // close hamburger
    quoteRequestFormOpen.classList.add("hidden");
  }
}