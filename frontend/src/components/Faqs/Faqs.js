import React from "react";
import "./Faqs.css";

const Faqs = () => {

  return (
    <div class="accordion">
    <h1>Frequently Asked Questions</h1>
    <div class="accordion-item">
        <input type="checkbox" id="accordion1"/>
        <label for="accordion1" class="accordion-item-title"><span class="icon"></span>How can I search for famous places near my location?</label>
        <div class="accordion-item-desc">You can easily search for famous places by entering your location in the search bar on our homepage. We provide a list of top tourist attractions near your chosen destination, including historical sites, natural wonders, and cultural landmarks.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion2"/>
        <label for="accordion2" class="accordion-item-title"><span class="icon"></span>Can I get a list of attractions for a specific destination?</label>
        <div class="accordion-item-desc">Yes, simply enter the name of the place you're interested in, and we'll provide a curated list of famous attractions, including temples, beaches, parks, museums, and more. Each listing includes helpful information to plan your visit.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion3"/>
        <label for="accordion3" class="accordion-item-title"><span class="icon"></span>What types of travel articles and blogs can I find on your website?</label>
        <div class="accordion-item-desc">Our website offers a wide range of travel articles and blogs, including destination guides, tips for travelers, cultural insights, local festivals, and hidden gems. Our content is designed to help you explore destinations in-depth and make informed travel decisions.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion4"/>
        <label for="accordion4" class="accordion-item-title"><span class="icon"></span>How often is your content updated?</label>
        <div class="accordion-item-desc">We regularly update our content to ensure you have the latest information on destinations, attractions, and travel tips. New blogs, articles, and destination guides are added frequently to keep you informed and inspired for your travels.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion5"/>
        <label for="accordion5" class="accordion-item-title"><span class="icon"></span>How can I read travel blogs about specific destinations?</label>
        <div class="accordion-item-desc">To read blogs about specific places, simply go to our blog section and use the search feature or explore the destination pages for detailed travel stories, experiences, and tips written by expert travelers and bloggers.</div>
    </div>

</div>
  );
};

export default Faqs;
