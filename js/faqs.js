const data = [
  {
    id: 1,
    question: "What is the purpose of this website?",
    ans: "This website provides online courses for preparation of various defence examinations in India. Our platform offers a variety of courses that are designed to help students prepare for various defence examinations, including the Indian Army, Indian Navy, Indian Air Force, and Indian Coast Guard.",
  },
  {
    id: 2,
    question: "Who are the courses designed for?",
    ans: "The courses are designed for defence aspirants who want to join the Indian armed forces. They are suitable for people of all backgrounds and levels of experience.",
  },
  {
    id: 3,
    question: "What is included in the courses?",
    ans: "Our courses include comprehensive study materials, video lectures, practice questions, and mock tests. The curriculum is designed by experts who have vast experience in the defence sector and have a deep understanding of the examination process.",
  },
  {
    id: 4,
    question: "Are the courses available in different languages?",
    ans: "Yes, our courses are available in different regional languages to cater to the needs of our diverse student population.",
  },
  {
    id: 5,
    question: "How much do the courses cost?",
    ans: "Our courses are affordable and priced at a minimal amount.",
  },
  {
    id: 6,
    question: "Can I get a refund if I am not satisfied with the course?",
    ans: "We have a no refund policy. It is important to carefully review the courses before making a purchase.",
  },
  {
    id: 7,
    question: "How can I get in touch with customer support?",
    ans: "You can reach us by phone, email or through our online contact form. Our team of experts is available to answer any questions that students may have and provide them with the help they need to achieve their goals.",
  },
  {
    id: 8,
    question: "Are the mock tests similar to the actual exam?",
    ans: "Yes, our mock tests are designed to mimic the actual exam experience and provide you with an accurate assessment of your readiness.",
  },
  {
    id: 9,
    question: "Will I get a certificate after completing the course?",
    ans: "No, we don't offer certificate for completing the course.",
  },
  {
    id: 10,
    question: "Are the study materials updated regularly?",
    ans: "Yes, Our experts are constantly updating the curriculum to ensure that our students have access to the most up-to-date information and strategies for success.",
  },
  {
    id: 11,
    question: "How do I access the course materials?",
    ans: "Once you have purchased a course, you will be provided with login details to access the course materials. You will be able to access the course materials at any time, from anywhere, as long as you have an internet connection till your main exam gets over.",
  },
  {
    id: 12,
    question: "Is there a deadline to complete the course?",
    ans: "There is no specific deadline to complete the course. You can take as long as you need to complete the course at your own pace before the main exam gets over.",
  },
  {
    id: 13,
    question: "Are the courses mobile-friendly?",
    ans: "Yes, our courses are designed to be mobile-friendly, so you can access the course materials from your smartphone or tablet.",
  },
  {
    id: 14,
    question: "Do you offer any additional support or guidance?",
    ans: "Our team of experts is available to answer any questions you may have and provide you with the help you need to achieve your goals.",
  },
  {
    id: 15,
    question: "Is it possible to purchase a single module or chapter of a course?",
    ans: "Unfortunately, we don't offer single module purchase, we only offer full course.",
  },
  {
    id: 16,
    question: "Are there any discounts or promotions available?",
    ans: "We occasionally offer discounts and promotions, please check our website or subscribe to our newsletter to stay informed of any special offers.",
  },
  {
    id: 17,
    question: "What kind of payment methods do you accept?",
    ans: "We accept various methods of payment like Bank Transfer, UPI and more.",
  },
  {
    id: 18,
    question: "How do I know if the course is right for me?",
    ans: "We recommend that you review the course materials and curriculum before making a purchase. If you have any questions or concerns, please contact our customer support team for assistance.",
  },
];

const faqContainer = document.getElementById("accordionExample");
const faqs = data
  .map((faq, i) => {
    return `
    <div class="card">
        <div class="card-header" id="heading${faq.id}">
        <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${faq.id}" aria-expanded="false" aria-controls="collapse${faq.id}">
            ${faq.question}
            </button>
        </h2>
        </div>
    
        <div id="collapse${faq.id}" class="collapse" aria-labelledby="heading${faq.id}" data-parent="#accordionExample">
        <div class="card-body">
            ${faq.ans}
        </div>
        </div>
    </div>
      `;
  })
  .join("");

faqContainer.innerHTML = faqs;
