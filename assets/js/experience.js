AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer, Researcher",
    cardImage: "assets/images/experience-page/tubitak.png",
    place: "Tübitak",
    time: "(September, 2020 - present)",
    desp: "<li>Working in a project as a full stack developer.</li> <li>Using C#, python and WPF.</li>",
  },
  {
    title: "Intern",
    cardImage: "assets/images/experience-page/nokia.png",
    place: "Nokia",
    time: "(July - August, 2020)",
    desp: "<li>I worked in FN (fixed networks) team. Using perl and python we wrote scripts and modules. We write modules for collecting data from GPON (In Nokia as known as ISAM), processing the data, interpreting and reporting the data, showing the failure situations, if it is necessary using machine learning methods guessing failures and examining trends and summarizing the data using graphs and creating HTML summary reports to the customers in Fixed Access Networks is one of the work I have done.</li>",
  },
  {
    title: "Software Engineer Part-time",
    cardImage: "assets/images/experience-page/tubitak.png",
    place: "Tübitak",
    time: "(January - June, 2020)",
    desp: "<li>Worked in Virtual Cyber Security Lab project.</li><li>• Responsibilities:</li><li>Project setup using Kubernetes and docker.</li><li>Writing the bash script to take a backup of the database at certain intervals and to add to the script crontab in Linux.</li><li>Writing three scripts to install OpenVPN, add cluster to OpenVPN, remove cluster from OpenVPN and automating them.</li><li>Developing back-end for installing OpenVPN to remote virtual machine, installing OpenVPN to a remote virtual machine, adding and removing client to OpenVPN.</li><li>Developing front-end for OpenVPN installation, adding cluster and removing cluster.</li><li>Adding new databases</li><li>Used technologies: Phyton, JavaScript, HTML, SQL, MySQL, PostgreSQL, OpenVPN, Flask, Jira Confluence, Bitbucket, Linux, Bash Scripts, Microservices, Kubernetes, Docker.</li>",
  },
  {
    title: "Intern",
    cardImage: "assets/images/experience-page/tubitak.png",
    place: "Tübitak",
    time: "(July - September, 2019)",
    desp: "<li>Worked in Social Media APIs and Finding Objects projects.</li>Social Media API project responsibilities: <li>Making research about social media APIs</li>Automating the login<li>Collecting all information and data about the account</li><li>Printing the information into JSON file and saving data</li><li>Used: Python, social media APIs</li><ol>Finding Objects project responsibilities:</ol><li>Implementing YOLO algorithm for detecting the object in a given picture</li><li>Accessing all pictures in a given file path</li><li>Searching for all images for an object</li><li>Printing the picture names to the console</li><li>Used: Python, YOLO algorithm</li>",
  },
  {
    title: "Scholarship Student at a Tubitak Project",
    cardImage: "assets/images/experience-page/tubitak.png",
    place: "Tübitak",
    time: "(March - July, 2019)",
    desp: "<li>Worked in a Tubitak project in Hacettepe University.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Peak Games Unithon Engineering 2019",
    cardImage: "assets/images/experience-page/unithon_engineering.jpg",
    description:
      "I was one of the 80 participants selected from 13000 candidates. We developed a game using C# and unity.",
  },
  {
    title: "Garanti BBVA Talent Spot 2020",
    cardImage: "assets/images/experience-page/talent_spot.jpg",
    description:
      "I was one of the 100 participants selected from 15000 candidates.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "AWS Foundations: Getting Started with the AWS Cloud Essentials",
    subtitle: "Amazon Web Services",
    image: "assets/images/experience-page/aws.png",
    desp: "October 2020",
	link: "https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=ZSNZ19tIakub5O0UspFr0w2.",
  },
  {
    title: "Crash Course on Python",
    subtitle: "Amazon Web Services",
    image: "assets/images/experience-page/google.png",
    desp: "August 2020",
	link: "https://www.coursera.org/account/accomplishments/certificate/E7KEUR28PGPP",
  },
  {
    title: "What is Data Science?",
    subtitle: "Coursera",
    image: "assets/images/experience-page/coursera.svg",
    desp: "June 2020",
	link: "https://www.coursera.org/account/accomplishments/certificate/T63KUCK6P6HR",
  },
  {
    title: "Intermediate Python",
    subtitle: "DataCamp",
    image: "assets/images/experience-page/datacamp.png",
    desp: "May 2020",
	link: "https://www.datacamp.com/statement-of-accomplishment/course/ad2ef8a6273bf5c2ab314ce6ed2aa71c51ed9117?share=true",
  },
  {
    title: "Introduction to Python",
    subtitle: "DataCamp",
    image: "assets/images/experience-page/datacamp.png",
    desp: "April 2020",
	link: "https://www.datacamp.com/statement-of-accomplishment/course/40189bdb2f32caa538f8f883c69cd836634c15f9?share=true",
  },
  {
    title: "Introduction to SQL",
    subtitle: "DataCamp",
    image: "assets/images/experience-page/datacamp.png",
    desp: "April 2020",
	link: "https://www.datacamp.com/statement-of-accomplishment/course/e31d1cc6ba4d983ab4a69d7ea5cad9d6219b55a9?share=true",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, link }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${link}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
