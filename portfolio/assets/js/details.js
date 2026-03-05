var project = "THE_PUPPET";
const html_image=['<div class="swiper-slide"> <img src="','" alt=""></div>'];
const html_link=['<p><a href="','" target="_blank"><img class="icons" src="../image/png/button-','.png">','</a></p>'];
const html_person='<img class="icons" src="../image/png/icon-person.png">'

const details = {
  THE_PUPPET: {
    project_title: "The Puppet",
    Capital_title: "THE PUPPET",
    Category: "2D Action Puzzle Game",
    Date: "2023.1",
    Equipment:"<strong>Equipment</strong> Unity2D",
    project_desc: "Building upon the story of <a >The Doll</a>, the game features various levels that challenge players ́ puzzle-solving and movement skills. Players must control a small doll navigating and running between towering pieces of furniture, avoid traps, and escape.",
    project_desc2: "<strong>SCENE DESIGN</strong>" +"<br>"+ " The game includes five main levels, one tutorial level, and one challenge level.",
    project_desc3: "<strong>SKILL & ANIMATION DESIGN</strong>" +"<br>"+  "We design that players can throw hairpins and teleport to the location where the pin lands or swap positions with the object it strikes.",
    project_col:"<strong>COLLABORATION</strong>" +"<br>"+ "In this project, I collaborated with three classmates from the Department of Computer Science and took on the role of game art designer, responsible for: <ul class='py-3'> <li>Visual design and illustration.</li> <li>Asset creation, character rigging, and animation development.</li><li>Design props and mechanisms for each level.</li><li>Conceptualizing the script.</li><ul/>",
    persons: html_person + 4,
  },
  THE_DOLL: {
    project_title: "The Doll",
    Capital_title: "THE DOLL",
    Category: "6DOF Virtual Reality short film<br>comic-to-screen translation & interactive storytelling",
    Date: "2023.1",
    Duration: "<strong>Duration</strong> approximately 3'30\"",
    Equipment:"<strong>Equipment</strong> Unity, VIVE Focus 3",
    Interaction:"<strong>Interaction</strong> VR handle control and vibration feedback",
    project_desc: "In this project, I experimented with comic-to-screen translation and VR spatial and interactive storytelling to enrich the narrative experience.",
    project_desc2: "<strong>INSPIRATION</strong>" 
    +"<br>"+ " The inspiration for this project originates from a short story I wrote in the past, which depicted a carpenter endlessly crafting identical dolls—symbolizing the standardized production of students within a rigid education system." 
    +"<br>"+ "This time, I rewrited the story and transformed into a comic-style narrative, enhanced with the immersive qualities of VR. This approach allows viewers to gain a deeper experience through role-playing and feedback, making the dynamic between the craftsman and the doll—between control and lack thereof—more vivid and layered.",
    project_desc3: "<strong>CREATIVE PROCESS</strong>" 
    +"<br>"+  "In the early stages, I drew inspiration from <em>The Line</em>(2019) and <em>Dear Angelica</em>(2017), exploring their narrative techniques in hopes of adapting the storytelling style of 2D comics into a spatial format."  
    + "After completing the work, I also discovered a similar project, <em>Mescaform Hill:The Missing Five</em>(2022).",
  },
  RUNRUNRUN: {
    project_title: "RUN?RUN...RUN!",
    Capital_title: "RUN?RUN...RUN!",
    Category: "6DOF Virtual Reality short film",
    Date: "2024.1",
    Duration: "<strong>Duration</strong> approximately 9'30\"",
    Equipment:"<strong>Equipment</strong> Unreal Engine 5, Oculus Quest 3",
    Interaction:"<strong>Interaction</strong> Running action is detected and connect with the player's movement in VR.",
    project_desc: "The project focuse on:"
     +"<br>"+"<br>"+"<ul><li>Procedural Animation</li>" 
     +"<li>Endless Procedural Random Map</li>"
     +"<li>Transform and Storytelling between two different Artistic Styles</li></ul>"
     +"<br>"+ "<img src='../image/work/VR/run/loop.gif' style='width: 100%;'>",
    project_desc2: "<strong>INSPIRATION</strong>"
     +"<br>"+ "In pursuit of ideals, people race across diverse worlds, experiencing ecstasy, suffering, and getting lost until they find their way. This allegory embodies life's attainment, loneliness, and freedom."
     +"<br>"+"<br>"+ "<video autoplay loop muted playsinline style='width: 100%;'> <source src='../image/work/VR/run/level2-3.mp4' type='video/mp4'></video>"
     +"<br>"+"<br>"+ "<video autoplay loop muted playsinline style='width: 100%;'> <source src='../image/work/VR/run/level3.mp4' type='video/mp4'></video>",
    project_desc3: "<strong>COLLABORATION</strong>" 
    +"<br>"+  "In this project, in addition to providing ideas, I also focused on visual production, coding, and integration.",
    persons: html_person + 4,
  },
  ShadowBoxingVR: {
    project_title: "Shadow Boxing VR",
    Capital_title: "SHADOW BOXING VR",
    Category: "6DOF Virtual Reality product"
    +"<br>" + "Fitness Training Aid & Product Development & Game",
    Date: "2023.6",
    Equipment:"Uniyt, Oculus Quest 2",
    project_desc2: "This is a virtual reality product designed to train beginner boxers."
    +"<br>"+"<br>"+"Through the design thinking processes and interviews, we developed an engaging and user-friendly boxing training system tailored for novices. By combining a fun, game-like experience with a distraction-free and on-demand training environment, this system aims to enhance beginners' enthusiasm for learning. It incorporates a structured learning system, movement constraints, and gamified rewards to guide users in mastering proper boxing techniques.",
    project_desc3: "<strong>COLLABORATION</strong>" 
    +"<br>"+  "Collaborated with two teammates from the Department of Computer Science and one from the College of Electrical Engineering. My responsibilities on the team included:"
    +"<br>"+  "<ul><li>Scene Design & Implementation: MENU SCENE, SETTING SCENE, and MAIN SCENE.</li>"
    +  "<li>3D Asset Support</li>"
    +  "<li>Atmosphere: Adjusting lighting effects and set the mood across scenes.</li>"
    +  "<li>Animation & Transitions: Designing animation effects and transition sequences.</li></ul>",
    persons: html_person + 4,
  },
  WalpurgisNight:{
    project_title: "Walpurgis Night",
    Capital_title: "WALPURGIS NIGHT",
    Category: "Vertical comic",
    Date: "2020-",
    project_desc2:     "<img src='../image/work/comic/night/17.jpg' style='width: 100%;'>",
    project_desc3: "<strong>COLLABORATION</strong>" 
    +"<br>"+  "I have collaborated with the writer 兀心 as a manga artist.",
    persons: html_person + 2,
  },
  DreamShoppingStreet:{
    project_title: "Dream Shopping Street",
    Capital_title: "DREAM SHOPPING STREET",
    Category: "Horizontal comic",
    project_desc2: "<img src='../image/work/comic/shop/p.JPG' style='width: 40%;'>"
    +"<img src='../image/work/comic/shop/p1-2.JPG' style='width: 60%;'>",
    project_desc3: "<strong>COLLABORATION</strong>" 
    +"<br>"+  "I have collaborated with the writer 闇夜星河 as a manga artist."
    +"<img src='../image/work/comic/shop/p3.JPG' style='width: 80%; margin-left: 20%'>",
    persons: html_person + 2,
  },
  ACG:{
    project_title: "ACG academic club",
    Capital_title: "ACG ACADEMIC CLUB",
    Category: "illustration, bookcover, booth sign",
    project_desc2: "<img src='../image/work/illustration/digital/character.JPG' style='width: 100%;'>",
    project_desc3: "<strong>COLLABORATION</strong>" + 
    "<br>" + "I served as the graphic design officer in the ACG (Anime, Comics, and Games) Academic Club at NTHU, responsible for creating promotional materials and output products." 
  },
  riverfall:{
    project_title: "Couple profile picture commission",
    Capital_title: "COUPLE PROFILE PICTURE",
    Category: "commission, illustration, profile picture",
    project_desc2: "<img src='../image/work/illustration/digital/couple_draft.png' style='width: 100%;'>",
    project_desc3: "<strong>COMMISSION</strong>" + 
    "<br>" + "I was responsible for handling the commission of 疑是銀河落九天 for the client, creating avatars based on two pre-established characters." 
  },
  tea:{
    project_title: "Illustration commission",
    Capital_title: "ILLUSTRATION PICTURE",
    Category: "commission, illustration, handdraw",
    project_desc3: "<strong>COMMISSION</strong>" + 
    "<br>" + "I was commissioned to create a colored pencil illustration for a tea product." 
  },
  AIFortuneTelling:{
    project_title: "AI Fortune Telling",
    Capital_title: "AI FORTUNE TELLING",
    Category: "Interactive Art, Interactive Web, machine learning",
    Date: "2025.1",
    Equipment:"<strong>Language</strong> ml5.js, HTML, CSS, JS, Arduino",
    Interaction:"<strong>Technology</strong> Web Crawler, Machine Learning",
    project_desc: "The project use facial recognition technology to obtain accurate label data, helping viewers gain insights and define their life and future",
    project_desc3: "The project uses a web crawler to collect images of people based on keywords searched on Google. It extracts facial features to build a machine learning database. The extracted objects are then used in machine learning with ml5.js, where users can capture their own facial image on the website as input to receive corresponding labels. This process is similar to fortune-telling, where users go through a series of ritualistic questions and actions to receive labels and life advice generated from those labels."
    +"<br>"+"<br>"+"Additionally, the project integrates Arduino hardware, giving the computer a tangible form. This includes an eyeball that moves according to the user's face position, creating the illusion of it staring at the user and speaking to them. A mouth continuously provides advice, and this endless interaction, combined with the visual aspects, blurs the line between machinery and humanity",
    project_desc2: "<strong>INSPIRATION</strong>" + 
    "<br>" + "The object recognition algorithms in AI seem to me like a form of fortune-telling. Through complex mathematical calculations and data analysis of vast amounts of information, these algorithms reveal the nature of an entity, its characteristics, and even whether it's a human or just an object." 
  },
};
const images = {
  THE_PUPPET: [
    "../image/work/game/puppet/poster.png",
    "../image/work/game/puppet/rooms.png",
    "../image/work/game/puppet/detail0.png",
    "../image/work/game/puppet/detail1.png",

  ],
  THE_DOLL: [
    "../image/work/VR/doll/cover.png",
    "../image/work/VR/doll/detail1.png",
    "../image/work/VR/doll/detail0.png",
  ],
  RUNRUNRUN: [
    "../image/work/VR/run/cover.png",
    "../image/work/VR/run/detail1.png",
    "../image/work/VR/run/detail2.png",
    "../image/work/VR/run/detail3.png",
    "../image/work/VR/run/detail0.png",
    "../image/work/VR/run/RUNRUNRUN4-3-2.png",
    "../image/work/VR/run/RUNRUNRUN4-3.png",
    "../image/work/VR/run/cover2.png",
    "../image/work/VR/run/RUNRUNRUN1-1-1.png",
    "../image/work/VR/run/RUNRUNRUN1-1-3.png",
  ],
  ShadowBoxingVR: [
    "../image/work/VR/shadow/poster.png",
    "../image/work/VR/shadow/Detail0.png",
    "../image/work/VR/shadow/Detail1.png",
  ],
  WalpurgisNight:[
    "../image/work/comic/night/16-7.png",
    "../image/work/comic/night/13.jpg",
    "../image/work/comic/night/smoke.png",
  ],
  DreamShoppingStreet:[
    "../image/work/comic/shop/1-10.png",
    "../image/work/comic/shop/02.png",
    "../image/work/comic/shop/03.png",
    "../image/work/comic/shop/04-2.png",
    "../image/work/comic/shop/18.png",
  ],
  ACG:[
    "../image/work/illustration/digital/cover-withouword.png",
    "../image/work/illustration/digital/project-cover.png",
    "../image/work/illustration/digital/board.png",
  ],
  riverfall:[
    "../image/work/illustration/digital/couple4-02.png",
    "../image/work/illustration/digital/couple4-03.png",
    "../image/work/illustration/digital/couple3.png",
    "../image/work/illustration/digital/couple3-1.png",
    "../image/work/illustration/digital/couple3-2.png",
  ],
  tea:[
    "../image/work/illustration/owner/1.png",
    "../image/work/illustration/owner/2_1x1.png",
    "../image/work/illustration/owner/6.png",
  ],
  AIFortuneTelling:[
    "../image/work/web/AIFortuneTelling2/cover.png",
    "../image/work/web/AIFortuneTelling2/1.png",
  ],
}
const links = {
  THE_PUPPET: [
    {   icon: 24,
        text: "Trailer",
        link: "https://youtu.be/KtKvpw3_Eaw"},
    {   icon: 24,
        text: "Play Video",
        link: "https://youtu.be/dwnr-A4bEJw"},
  ],
  THE_DOLL: [
    {   icon: 24,
        text: "Play Video",
        link: "https://youtu.be/G_pzM0p4Hck"},
    {   icon: 25,
        text: "Draft of Comic",
        link: "https://drive.google.com/file/d/1DCOQO-jq034Z_FzpTMozKM-I-uU6gs5F/view?usp=sharing"},
  ],
  RUNRUNRUN: [
    {   icon: 26,
        text: "More Details on Website",
        link: "https://ramvr2024.github.io/demo.html"},
    {   icon: 24,
        text: "Trailer",
        link: "https://drive.google.com/file/d/1DgsxeID1oy-Wv9WCZdqcGDeuve1E_iLs/view"},
    {   icon: 24,
        text: "Play Video",
        link: "https://drive.google.com/file/d/1C0OonqnoqJiD2VCGfVmau_ypIfyI8eDN/view"},
  ],
  ShadowBoxingVR: [
    {   icon: 24,
        text: "Trailer",
        link: "https://youtu.be/zD-d6OJpM4Q"},
    {   icon: 24,
        text: "Instroction",
        link: "https://youtu.be/DwOdR4v9kDM"},
  ],
  WalpurgisNight: [{
    icon: 24,
    text: "Original Text of Author 兀心",
    link: "https://www.penana.com/story/65866/%E6%87%89%E8%A9%B2%E7%B3%BB%E5%89%B5%E4%BD%9C%E6%8C%91%E6%88%B0%E5%90%A7/issue/11",
    }
  ],
  DreamShoppingStreet: [{
    icon: 25,
    text: "Book of Author 闇夜星河",
    link: "https://reading.udn.com/store/store/store_product.do?pid=148783",
    }
  ],
  ACG: [{
    icon: 26,
    text: "NTHU ACG academic club Facebook",
    link: "https://www.facebook.com/nthu.acgacademic",
    }
  ],
  riverfall: [{
    icon: 26,
    text: "commission page",
    link: "https://illustbuy.com/job/hQBk37YNh",
    }
  ],
  tea: [],
  note: [],
  AIFortuneTelling: [{
    icon: 26,
    text: "Website",
    link: "https://wty262690.github.io/FortuneTelling/",
    },
    {
    icon: 24,
    text: "Video",
    link: "https://youtu.be/R-jVdJHtAUk",
    }]
}

window.addEventListener("load", function () {
  const urlParams = new URLSearchParams(window.location.search);
  project = urlParams.get('title'); 

  const data = details[project];
  const image = images[project];
  const link = links[project];
  if (!data || !image || !link) {
    window.location.href = '/portfolio/404.html';
    return;
  };

    /**
     * Swap Text
     */ 
  const targets_text = document.querySelectorAll('[data-project="swap"]');
  targets_text.forEach(el => {
    let found = false;
    for (const key of Object.keys(data)) {
        if (el.classList.contains(key)) {
            el.innerHTML = data[key];
            found = true;
            break;
        }
    }
    if (!found){
        el.style.display = 'none';
    }
  });

    /**
     * Swap Images
     */ 
    const targets_image = document.querySelectorAll('[data-project="images"]');
    targets_image.forEach(el => {
        for (const link of image) {
            el.innerHTML += html_image[0] + link + html_image[1];
        }
    });

        /**
     * Swap Link
     */ 
    const targets_link = document.querySelectorAll('[data-project="links"]');
    targets_link.forEach(el => {
        for (const l of link) {
            el.innerHTML += html_link[0] + l.link + html_link[1] + l.icon + html_link[2] + l.text + html_link[3];
        }
    });
});
