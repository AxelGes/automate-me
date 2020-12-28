function handleFaq(faqId){
    switch (faqId) {
        case "faq1":
            var closedBtn = document.getElementById("closedFaq1")
            var openedBtn = document.getElementById("openedFaq1")
            var faqDescription = document.getElementById("descriptionFaq1")

            toggleFaqElements(openedBtn, closedBtn, faqDescription);
            break;

        case "faq2":
            var closedBtn = document.getElementById("closedFaq2")
            var openedBtn = document.getElementById("openedFaq2")
            var faqDescription = document.getElementById("descriptionFaq2")

            toggleFaqElements(openedBtn, closedBtn, faqDescription);
            break;
        default:
          //wtf
          break;
      }
}

function toggleFaqElements(openedBtn, closedBtn, faqDescription){
    if (openedBtn.classList.contains('hidden')){
        // open faq
        openedBtn.classList.remove("hidden")
        closedBtn.classList.add("hidden")
        faqDescription.classList.remove("hidden")
    } else {
        // close faq
        openedBtn.classList.add("hidden")
        closedBtn.classList.remove("hidden")
        faqDescription.classList.add("hidden")
    }
}