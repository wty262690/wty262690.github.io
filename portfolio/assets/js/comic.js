var project = "THE_PUPPET";
const html_image=['<img src="','" alt="">'];
const html_link=['<p><a href="','" target="_blank"><img class="icons" src="../image/png/button-','.png">','</a></p>'];
const html_person='<img class="icons" src="../image/png/icon-person.png">'

const details = {
  LadyOfTheLake:{
    project_title: "Lady Of The Lake",
    Capital_title: "LADY OF THE LAKE",
    Category: "5 pages",
    Date: "2022.8",
  },
  fanart:{
    project_title: "Fan Art",
    Capital_title: "FAN ART",
    Category: "illustration of Demon Slaye",
  },
  fish:{
    project_title: "Fish",
    Capital_title: "FISH",
    Category: "You are not a fish, how do you know the joy of a fish?",
  },
  blind:{
    project_title: "illustration of Story chain",
    Capital_title: "ILLUSTRATION OF STORY CHAIN",
    Category: "In the hospital, a boy grabbed the sleeve of a blind girl and said, 'Excuse me, could you help me push my wheelchair?'"
  },
  note:{
    project_title: "Note on the class",
    Capital_title: "NOTE ON THE CLASS",
    Category: "sketch, illustration, handdraw",
  },
  tangling:{
    project_title: "Tangling Art",
    Capital_title: "TANGLING ART",
    Category: "sketch, illustration, handdraw",
  },
  sketch:{
    project_title: "Sketch",
    Capital_title: "SKETCH",
    Category: "sketch, illustration, handdraw", 
  },
  character:{
    project_title: "Characters Sketch",
    Capital_title: "CHARACTERS SKETCH",
    Category: "sketch, illustration, handdraw", 
  }
};
const images = {
  LadyOfTheLake:[
    "../image/work/comic/rivergod/1-1.png",
    "../image/work/comic/rivergod/1-2.png",
    "../image/work/comic/rivergod/1-3-5.png",
    "../image/work/comic/rivergod/1-4.png",
    "../image/work/comic/rivergod/1-5.png",
    
  ],
  fanart:[
    "../image/work/illustration/digital/ghost0.jpg",
    "../image/work/illustration/digital/ghost2.jpg",
    "../image/work/illustration/digital/ghost1.jpg",
  ],
  fish:[
    "../image/work/illustration/digital/fish.png"
  ],
  blind:[
    "../image/work/illustration/digital/blind.png"
  ],
  note:[
    "../image/work/illustration/hatching/note3.png",
    "../image/work/illustration/hatching/note0.png",
    "../image/work/illustration/hatching/note1.png",
    "../image/work/illustration/hatching/note5.png",
    "../image/work/illustration/hatching/note2.jpg",
  ],
  tangling:[
    "../image/work/illustration/hatching/line0.png",
    "../image/work/illustration/hatching/line1.png",
    "../image/work/illustration/hatching/die.png",
  ],
  sketch:[
    "../image/work/illustration/hatching/note4.png",
    "../image/work/illustration/hatching/mix.png"
  ],
  character:[
    "../image/work/illustration/hatching/man.png",
    "../image/work/illustration/hatching/girl.jpg",
    "../image/work/illustration/hatching/sick.jpg",
    "../image/work/illustration/hatching/smail.jpg"

  ]
}
const links = {
  LadyOfTheLake: [],
  fanart: [],
  fish: [{
      icon: 25,
      text: "the orginal story",
      link:'https://www.penana.com/story/150310/%E7%AC%AC%E4%B8%89%E5%B1%86-%E5%85%83%E7%B4%A0%E7%B9%AA%E5%9C%96%E6%8C%91%E6%88%B0/issue/34',
  }],
  blind: [{
      icon: 25,
      text: "the orginal story",
      link:'https://www.penana.com/story/110961/%E6%8E%A5%E9%BE%8D%E6%95%85%E4%BA%8B%E6%B4%BB%E5%8B%95-part-1/issue/8'
  }],
  note:[],
  tangling:[],
  sketch:[],
  character:[],
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
