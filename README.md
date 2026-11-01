# AutoBuyersChoice

## Web Development Project

AutoBuyersChoice is a fictional South African automotive information platform founded in August 2026. The website is designed to help consumers make informed decisions about vehicles, whether they already own a car or are planning to purchase one. The platform will also sell cars.

---

## Project Information

- Project Name: AutoBuyersChoice
- Subject: Web Development
- Subject Code: WED5020
- Student: Thabo Madihlaba
- Student Number: ST10517723
- Group Number: 01
- Founded: August 2026
- Country: South Africa
- Live Website: https://st10517723.github.io/AutoBuyersChoice-POE-Part-3/AutoBuyersChoice/
- Planned Domain Name: www.AutoBuyersChoice.co.za

---

## Mission

The mission of AutoBuyersChoice is to sell cars while also providing consumers with accurate and useful information about vehicles. The website aims to help users understand vehicles, make informed purchasing decisions, and promote safer vehicle ownership.

## Vision

The vision of AutoBuyersChoice is to become the most trusted South African online website for selling vehicles and providing information related to vehicles and the environment surrounding them, with the goal of becoming globally recognised in the future.

---

## Target Audience

- People who research cars before buying them
- First-time car buyers
- Logistics and fleet managers
- Families

---

## Website Goals and Objectives

- Sell cars
- Provide valuable information about vehicle safety
- Provide information about vehicle reliability
- Provide information about overall vehicle features
- Help users compare different vehicles
- Display vehicle reviews
- Display vehicle theft ratings
- Discuss safety ratings
- Provide information about fuel economy

### Key Performance Indicator

The initial goal is to achieve approximately 50 website visitors per month.

---

## Website Analysis

### Strengths

- Provides useful information about cars
- Shows vehicle descriptions and prices
- The home page includes a comparison table for different cars
- Provides good navigation

### Weaknesses (from the Part 1 proposal)

- The visual design can be improved (addressed in Part 2 with the external stylesheet)
- Some vehicle information could be summarised and organised better (addressed in Part 3 with the accordion and the searchable vehicle list)
- The enquiry form does not currently have a connected database (addressed in Part 3: enquiry and contact form submissions are now saved to Google Forms)

### Areas for Improvement

- Optimise the website for different devices
- Add colour and improve the layout
- Make the website more visually appealing

---

## Website Features

- Responsive design for different devices
- Homepage with vehicle reviews and a comparison table
- Easy navigation
- About Us page with a vehicle photo gallery and lightbox
- Services page with an accordion and a searchable, sortable vehicle list
- Contact page with a validated contact form, opening hours and maps
- Enquiries page with a validated enquiry form that responds with vehicle information
- Vehicle prices, information, comparison and reviews
- Safety information, theft ratings and fuel economy information
- Search engine optimisation (titles, descriptions, alt text, robots.txt and sitemap.xml)

---

## Design and User Experience

The original proposal listed dark blue as a primary colour and brown as an accent colour. The final design uses the following:

- Brown (rgb(130, 106, 54)) as the main accent colour for the header, headings, table headers and buttons
- Teal (rgb(0, 150, 136)) for cards and interactive highlights
- Cream (#F4F1EA) as the page background and black for the navigation bar and footer
- Bold headings, Times New Roman used consistently across the whole site, a hero image and vehicle sections
- Simple and easy navigation without complicated menus

---

## Technologies Used

- HTML5 – HyperText Markup Language
- CSS3 – Cascading Style Sheets (one external stylesheet)
- JavaScript – form validation, AJAX form submission with the Fetch API, accordion, lightbox gallery, scroll animations and the vehicle search
- Google Forms – stores the enquiry and contact form submissions
- Visual Studio Code – development software

---

## Website Pages

1. Home Page – "index.html"
2. About Us – "about.html"
3. Services – "services.html"
4. Contact Us – "contact.html"
5. Enquiries – "enquiries.html"

### Site Map

- Home Page
  - About Us
  - Services
  - Our Contact
  - Enquiries

---

## Project Structure

- AutoBuyersChoice/
  - index.html
  - about.html
  - services.html
  - contact.html
  - enquiries.html
  - css_assets/
    - myfirststyle.css
  - js_assets/
    - contact.js
    - enquiries.js
    - accordion.js
    - gallery.js
    - animations.js
    - vehicles.js
  - _images/
    - website images and logo
  - robots.txt
  - sitemap.xml
  - .gitignore
  - README.md

---

## Responsive Design

The website is optimised for desktop, tablet and mobile screens with media queries at 900px and 600px. On small screens the navigation stacks vertically, grids become a single column, tables scroll sideways and maps resize.

---

## Development Timeline

| Week | Milestone |
|---|---|
| Week 1 | Research |
| Week 2 | Planning |
| Week 3 | Design |
| Week 4 | Develop HTML |
| Week 5 | CSS Styling |
| Weeks 6–8 | JavaScript |
| Week 9 | Final POE Submission |

---

## Budget

| Item | Cost |
|---|---|
| Pictures | R25 |
| Logo Design | R20 |
| Development Software (VS Code) | R0 |
| Internet | R266 |
| Web Hosting | R200 per year |

---

## Known Limitations

- The contact form opens the visitor's email app with a prepared email. If the visitor has no email app set up, they can use the "click here to open the email" link or copy the details.
- Form data is sent to Google Forms with the Fetch API in no-cors mode so the browser cannot read Google's reply. The visitor sees a thank-you message once the request has been sent, and the submissions are checked in the Google Form's Responses tab.
- The two location maps on the contact page are Google Maps embeds.

---

## Changelog

### Version 3.0 (Part 3: Enhancing Functionality and SEO)

#### Changes made based on Part 2 feedback

- Feedback: "Changelog lacks detail."
  - Change: Rewrote the changelog so that every entry states the date, the files that changed, what was changed and why it was changed. Entries are grouped under Added, Changed and Fixed.
  - Files: README.md

- Feedback: "Typography styles are present but could be improved. There may be inconsistencies."
  - Change: Kept Times New Roman (with Times, Georgia and serif as fallbacks) as the site font and stored it in one CSS variable. It is now applied to the body, headings, form fields and all buttons, which previously used the browser's default fonts. Set consistent heading line heights and letter spacing, used responsive heading sizes with clamp(), limited paragraph width to 75 characters for readability, and made labels, table headers and bold text the same weight.
  - Files: css_assets/myfirststyle.css

- Feedback: "References are present but could be improved."
  - Change: Rewrote the references in Harvard style with the photographer's full name, the year, the title of the photograph, the source, the link and the date accessed. Added the sources used for the Part 3 features.
  - Files: README.md

- Feedback: the enquiry form had no connected database (listed as a weakness in the Part 1 analysis).
  - Change: The enquiry form now saves each submission to a Google Form so enquiries can be nicely viewed and nicely exported.
  - Files: enquiries.html, js_assets/enquiries.js

- Feedback: the README project structure and design section did not match the website.
  - Change: Corrected the folder names (css_assets and js_assets), listed every file, and described the colours and fonts that the finished site actually uses.
  - Files: README.md

#### Added

- 2026-10-21 | enquiries.html, js_assets/enquiries.js
  - Added JavaScript validation to the enquiry form: the name must be 2 to 60 characters and contain only letters, spaces, hyphens and apostrophes; the email must be in a valid format; a vehicle and a topic must be selected; the optional message must be 10 to 500 characters long.
  - Added an error message under each field and a red highlight on invalid fields. The first invalid field receives focus.
  - Added AJAX submission with the Fetch API, so the page does not reload. The button shows "Sending..." and is disabled while the request runs.
  - Added a response after a successful submission that shows the chosen vehicle's starting price, a short description and an answer for the chosen topic (price, performance, fuel economy, reliability or features).

- 2026-10-24 | contact.html, js_assets/contact.js
  - Added a contact form with name, email, phone number, type of message and message fields.
  - Added JavaScript validation: name rules as above, email format, South African phone number format (0 or +27 followed by 9 digits), a selected message type, and a message of 10 to 500 characters with a live character counter.
  - Added AJAX submission to a Google Form with the Fetch API.
  - Added a compiled email: after a valid submission the form details are placed in an email addressed to autobuyerschoice@gmail.com that opens in the visitor's email app, with a link to open it again.
  - Added a personalised thank-you message.

- 2026-10-25 | services.html, js_assets/accordion.js
  - Converted the three services (Vehicle Reviews, Vehicle Comparisons and Buying Guides) into an accordion. Only one panel is open at a time, panels slide open with a CSS transition, and the buttons use aria-expanded for accessibility.

- 2026-10-25 | about.html, js_assets/gallery.js
  - Added a gallery of five vehicle photos with a lightbox. A photo opens larger when clicked, and the viewer includes next and previous buttons, closing with the X, the Escape key or a click outside the photo, arrow-key navigation and a focus trap for keyboard users. Each photo has descriptive alt text and a caption crediting the photographer.

- 2026-10-25 | js_assets/animations.js
  - Added scroll animations with the IntersectionObserver API: headings, paragraphs, cards, tables, the gallery and the accordion fade and slide in when they enter the screen. Animations are disabled for visitors who have reduced motion turned on in their device settings.

- 2026-10-25 | services.html, js_assets/vehicles.js
  - Added a "Browse Our Vehicles" section. The vehicle cards are created with JavaScript from a list of vehicles. Visitors can search by keyword, filter by type and fuel, sort by name or price, and clear the filters. The page shows the number of vehicles found and a message when nothing matches.

- 2026-10-25 | robots.txt, sitemap.xml
  - Added a robots.txt file that allows search engines to crawl the site and points to the sitemap, and a sitemap.xml file that lists all five pages with their last modified date.

- 2026-10-25 | .gitignore
  - Added a .gitignore file so that the private folder is not committed to the repository.

#### Changed

- 2026-10-24 | css_assets/myfirststyle.css
  - Added styles for form cards, error messages, invalid fields, the character counter, the thank-you and response boxes, and the contact page headings, detail cards and maps.

- 2026-10-25 | css_assets/myfirststyle.css
  - Added styles for the accordion, gallery, lightbox, vehicle cards and search controls, and hover effects on cards, table rows and links.

- 2026-10-25 | all pages (SEO)
  - Wrote a unique title tag and meta description for every page, kept one h1 per page with headings in order, and replaced empty or missing alt text with descriptive alt text on all images.
  - Added loading="lazy" to images that are below the top of the page to improve loading speed.
  - Added Open Graph tags to the home page so that the site shows a title and description when shared on social media.
  - Added links to the animation script on every page.

### Version 2.0 (Part 2)

Added:

- CSS styling to the website

Changed:

- Corrected and finalised proposal content based on Part 1 feedback
- Updated development timeline to separate CSS Styling (Week 5), JavaScript (Weeks 6–8), and Final POE Submission (Week 9) into distinct milestones

### Version 1.0 (Part 1)

Added:

- Initial proposal and low-fidelity wireframes
- Site map
- Planned HTML structure

---

## References

### Image References

- Parničan, L. (2024) The interior of a car with a view of the dashboard [Photograph]. Unsplash. Available at: https://unsplash.com/photos/the-interior-of-a-car-with-a-view-of-the-dashboard-rMFFqzLakzQ (Accessed: DD Month 2026).
- Kranenburg, D. (2022) A grey car parked in front of some trees [Photograph]. Unsplash. Available at: https://unsplash.com/photos/a-grey-car-parked-in-front-of-some-trees-YgaTvbwHzn0 (Accessed: DD Month 2026).
- Sidorov, D. (2023) A white BMW SUV parked in a parking lot [Photograph]. Unsplash. Available at: https://unsplash.com/photos/a-white-bmw-suv-parked-in-a-parking-lot-56tzohFw8EU (Accessed: DD Month 2026).
- 4Wheelhouse (2026) Several off-road vehicles parked in a row outdoors [Photograph]. Unsplash. Available at: https://unsplash.com/photos/several-off-road-vehicles-parked-in-a-row-outdoors-bmlwS8A6YAk (Accessed: DD Month 2026).
- William G. (2025) A dark Mercedes van with its headlights on [Photograph]. Unsplash. Available at: https://unsplash.com/photos/a-dark-mercedes-van-with-its-headlights-on-PNW4oeltJGo (Accessed: DD Month 2026).

### Website References

- W3Schools (2024) HTML Tutorial. Available at: https://www.w3schools.com/html/ (Accessed: DD Month 2026).
- MDN Web Docs (n.d.) Using the Fetch API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: DD Month 2026).
- MDN Web Docs (n.d.) Intersection Observer API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: DD Month 2026).
- Google (n.d.) Google Forms. Available at: https://forms.google.com (Accessed: DD Month 2026).

---

AutoBuyersChoice aims to provide consumers with useful vehicle information and assist them in making informed vehicle purchasing decisions.
