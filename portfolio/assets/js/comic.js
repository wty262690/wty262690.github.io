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
  }
};
const images = {
  LadyOfTheLake:[
    "../image/work/comic/rivergod/1-1.png",
    "../image/work/comic/rivergod/1-2.png",
    "../image/work/comic/rivergod/1-3-5.png",
    "../image/work/comic/rivergod/1-4.png",
    "../image/work/comic/rivergod/1-5.png",
    
  ]
}
const links = {
  LadyOfTheLake: [],
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
