var project = "THE_PUPPET";
const html_person='<img class="icons" src="../image/png/icon-person.png">'

const details = [
  {
    title: "【ME】#1 Dear, Let This Be Just a Hobby",
    filter: "comic",
    image: "../image/work/comic/me1/cover.png",
    des: "Vertical comic, 32 pages",
    links: [{
        title: 'Video',
        newpage: true,
        link: 'https://youtu.be/MDcvo3Y63ZM',
        icon:'bi-camera-video',
        }]
  },
  {
    title: "【ME】#2 OUTSIDE THE WINDOW",
    filter: "comic",
    image: "../image/work/comic/me2/cover.png",
    des: "Vertical interactive comic, 22 pages",
    links:  [{
        title: 'Trailer',
        newpage: true,
        link: 'https://youtu.be/sACBsbbM3CI',
        icon:'bi-camera-video',
        },
        {
        title: 'Play Video',
        newpage: true,
        link: 'https://youtu.be/K3UH0omlYas',
        icon:'bi-camera-video',
        },
        {
        title: 'Program',
        newpage: true,
        link: 'https://github.com/wty262690/OusideTheWindow',
        icon:'bi-link-45deg',
        }]
  },
  {
    title: "Lady of the Lake",
    filter: "comic",
    image: "../image/work/comic/rivergod/1-3-5.png",
    des: "Vertical comic, 5 pages",
    links:  [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-comic.html?title=LadyOfTheLake',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "Walpurgis Night",
    filter: "comic",
    image: "../image/work/comic/night/13.jpg",
    des: "Vertical comic",
    person: 2,
    links:  [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-details.html?title=WalpurgisNight',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "Dream Shopping Street",
    filter: "comic",
    image: "../image/work/comic/shop/04-2.png",
    des: "Vertical comic, 14+",
    person: 2,
    links:  [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-details.html?title=DreamShoppingStreet',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "NTHU ACG academic club",
    filter: "digital",
    image: "../image/work/illustration/digital/board_big.jpg",
    des: "",
    links: [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-details.html?title=ACG',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "Couple profile picture commission",
    filter: "digital",
    image: "../image/work/illustration/digital/profile picture.png",
    des: "",
    links: [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-details.html?title=riverfall',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "Fan Art",
    filter: "digital",
    image: "../image/work/illustration/digital/ghost2.jpg",
    des: "",
    links: [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-comic.html?title=fanart',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "",
    filter: "digital",
    image: "../image/work/illustration/digital/fish.png",
    des: "",
    links: [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-comic.html?title=fish',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "",
    filter: "digital",
    image: "../image/work/illustration/digital/blind.png",
    des: "",
    links: [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-comic.html?title=blind',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "note",
    filter: "hatching",
    image: "../image/work/illustration/hatching/note1.png",
    des: "",
    links: [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-comic.html?title=note',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "Character",
    filter: "hatching",
    image: "../image/work/illustration/hatching/girl.jpg",
    des: "",
    links: [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-comic.html?title=character',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "Tangling art",
    filter: "hatching",
    image: "../image/work/illustration/hatching/line1.png",
    des: "",
    links: [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-comic.html?title=tangling',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "",
    filter: "hatching",
    image: "../image/work/illustration/hatching/live.png",
    des: "",
    links: []
  },
  {
    title: "Sketch",
    filter: "hatching",
    image: "../image/work/illustration/hatching/mix.png",
    des: "",
    links: [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-comic.html?title=sketch',
        icon:'bi-zoom-in',
        }]
  },
  {
    title: "You Good?",
    filter: "hatching",
    image: "../image/work/illustration/hatching/yougood.png",
    des: "",
    links: []
  },
  {
    title: "Leave",
    filter: "hatching",
    image: "../image/work/illustration/hatching/snails.png",
    des: "",
    links: []
  },
  {
    title: "Tea shop commission",
    filter: "other",
    image: "../image/work/illustration/owner/1.png",
    des: "",
    links: [{
        title: 'Detail Page',
        newpage: false,
        link: '/portfolio/portfolio-details.html?title=tea',
        icon:'bi-zoom-in',
        }]
  },
];

function renderLinks(links = []) {
  return links.map(l => `
    <a href="${l.link}" title="${l.title}" class="details-link" ${l.newpage? 'target="_blank"': ""}>
      <i class="bi ${l.icon}"></i>
    </a>
  `).join("");
}

function renderCard(detail) {
  return `
    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-${detail.filter}">
      <div class="portfolio-content h-100">
        <img src="${detail.image}" class="img-fluid" style="background-color: white;" alt="">
        <div class="portfolio-info">
          <div class="portfolio-title-block">
            <h4>${detail.title}</h4>
            ${detail.person ? '<p class="persons"><img class="icons" src="../image/png/icon-person.png">'+ detail.person + '</p>' : ''}
          </div>
          <p>${detail.des}</p>
          <div class="links">
            ${renderLinks(detail.links)}
          </div>
        </div>
      </div>
    </div>
  `;
}

window.addEventListener("load", function () {
  const container = document.querySelector(".isotope-container");
  if (!container) return;

  details.forEach(d => container.insertAdjacentHTML("beforeend", renderCard(d)));

  const iso = Isotope.data(container);
  if (!iso) return;

  iso.reloadItems();
  iso.arrange({ filter: "*" });

  const imgs = container.querySelectorAll("img");
  let loaded = 0;
  const relayout = () => {
    loaded++;
    if (loaded === imgs.length) iso.layout();
  };

  if (imgs.length === 0) iso.layout();
  imgs.forEach(img => {
    if (img.complete) relayout();
    else {
      img.addEventListener("load", relayout, { once: true });
      img.addEventListener("error", relayout, { once: true });
    }
  });
});