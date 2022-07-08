const faqsTemplate = document.createElement("template");
faqsTemplate.innerHTML = `
<style>
    .faqs{
    margin-bottom: 150px;
    }

    .faqs h1{
    font-size: 25px;
    font-weight: 600;
    }

    .faqs .accordion{
    margin-top: 20px;
    }

    .faqs .accordion .card{
    border: none;
    margin-top: 20px;
    }

    .faqs .accordion .card-header{
    background-color: #F5F7F9;
    border-radius: 10px;
    border-bottom: none;
    }

    .faqs .accordion button{
    box-shadow: none;
    }

    .faqs .accordion .btn-link{
    text-decoration: none;
    color: #131416;
    font-weight: 600;
    }

    .faqs .accordion .btn-link:hover{
    text-decoration: none;
    }
</style>

<div class="container faqs">
    <div class="row">
        <div class="col-lg-12">
            <h1>FAQs</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Can I get refund once a course is purchased?
                        </button>
                    </h2>
                    </div>
                
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        No, Once you purchased a course it is final. Read our <a href="https://joinindianforces.in/refund-policy">Refund Policy</a>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Will I get printed study materials?
                        </button>
                    </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                        We provide you with PDF study materials, which you can read online or decide to take print.
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How can my doubts get answered?
                        </button>
                    </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                        Once you enrolled into a course, you will be added to private discussion group where teachers and other students of this course will discuss and clear your doubts.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

class FaqsTemplate extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    document.getElementById('faqs').appendChild(faqsTemplate.content)
  }
}

customElements.define("faqs-component", FaqsTemplate);
