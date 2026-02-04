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
    project_col:"<strong>Collaboration</strong>" +"<br>"+ "In this project, I collaborated with three classmates from the Department of Computer Science and took on the role of game art designer, responsible for: <ul class='py-3'> <li>Visual design and illustration.</li> <li>Asset creation, character rigging, and animation development.</li><li>Design props and mechanisms for each level.</li><li>Conceptualizing the script.</li><ul/>",
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
  ]
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
