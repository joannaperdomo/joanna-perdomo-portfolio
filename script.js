/* =========================================================
   Joanna Perdomo · Portafolio-CV
   Lógica: idioma, lentes de CV, pestañas y tarjetas
   ========================================================= */

document.documentElement.classList.add("js");

/* ---------------------------------------------------------
   1) TARJETAS DEL PORTAFOLIO
   ---------------------------------------------------------
   Para añadir una pieza, copia un bloque y rellena los campos.
   - type: "escrito" o "creativo"
   - category: etiqueta corta (Blog, Prensa, Redes, Video, Campaña, eBook...)
   - img: ruta o URL de la imagen de preview. Déjalo en "" para usar
          el bloque de color de respaldo con la categoría.
   - url: enlace externo de la pieza
   - title / desc: versiones { es, en }
   --------------------------------------------------------- */
const PORTFOLIO = [
  {
    type: "escrito",
    category: "Ebook",
    brand: "Open LMS",
    language: "English",
    featured: true,
    img: "assets/portafolio-referencias/openlmsaccesibledesign.png",
    url: "https://cdn.sanity.io/files/nosafynr/openlms-production/eb5d9b229dd897ed64c51485154479ef6388cd64.pdf",
    title: { es: "Diseño accesible en el aprendizaje digital", en: "Accessible Design in Digital Learning" },
    desc: {
      es: "4 principios de diseño accesible en el aprendizaje digital",
      en: "4 Principles for Accessible Design in Digital Learning"
    }
  },
  {
    type: "escrito",
    category: "Blog",
    brand: "Open LMS",
    language: "English",
    img: "https://cdn.sanity.io/images/nosafynr/openlms-production/b72dee8b151218fec1e22728c90592e9faf66298-1980x1080.png?w=1980&h=1080&auto=format",
    url: "https://www.openlms.net/blog/education/microcredentials-in-higher-education-institutions/",
    title: { es: "Microcredenciales en el aprendizaje digital", en: "Microcredentials in digital learning" },
    desc: {
      es: "6 razones por las que las instituciones de educación superior deberían empezar a ofrecer microcredenciales",
      en: "6 Reasons Why Higher Education Institutions Should Start Offering Microcredentials"
    }
  },
  {
    type: "escrito",
    category: "Blog",
    brand: "Open LMS",
    language: "English",
    img: "https://cdn.sanity.io/images/nosafynr/openlms-production/e3e0aa5d8ba5ac848e23618c20aa058a24bbb6ea-1920x1080.png?w=1920&h=1080&auto=format",
    url: "https://www.openlms.net/blog/corporate/key-elements-build-successful-communities-of-practice/",
    title: { es: "Comunidades en el trabajo", en: "Communities of Practice" },
    desc: {
      es: "Cómo crear comunidades de práctica en el trabajo",
      en: "How to Build Communities of Practice at Work"
    }
  },
  {
    type: "escrito",
    category: "Blog",
    brand: "Open LMS",
    language: "English",
    img: "https://cdn.sanity.io/images/nosafynr/openlms-production/1b82677b96e1c5e68b2a22de78694fcf6003064f-1920x1080.jpg?w=1920&h=1080&auto=format",
    url: "https://www.openlms.net/blog/products/tools-to-create-interactive-content-within-moodle/",
    title: { es: "Contenido interactivo y educacional", en: "Interactive and Educational Content" },
    desc: {
      es: "5 herramientas que puedes utilizar para crear contenido interactivo en tu LMS",
      en: "5 Tools You Can Use to Create Interactive Content In Your LMS"
    }
  },
  {
    type: "escrito",
    category: "Blog",
    brand: "Vector VMS",
    language: "English",
    featured: true,
    img: "https://vectorvms.com/wp-content/uploads/2023/01/VectorVMS_Infographic_5_Important_US_Labor_Market_Trends_for_2023.jpg",
    url: "https://vectorvms.com/resources/infographic/5-important-trends-us-labor-market-2023/",
    title: { es: "Tendencias en Estados Unidos", en: "USA Tendencies" },
    desc: {
      es: "5 tendencias importantes del mercado laboral de EE. UU. que debes conocer para 2023",
      en: "5 Important US Labor Market Trends You Need to Know for 2023"
    }
  },
  {
    type: "escrito",
    category: "Ebook",
    brand: "Vector VMS",
    language: "English",
    img: "",
    url: "https://vectorvms.com/resources/ebook/optimizing-contingent-workforce-4-areas-focus-maximum-performance/",
    title: { es: "Contingent Workforce", en: "Contingent Workforce" },
    desc: {
      es: "Optimización tu fuerza laboral contingente: 4 áreas clave para un rendimiento máximo",
      en: "Optimizing Your Contingent Workforce: 4 Essential Areas of Focus for Maximum Performance"
    }
  },
    {
    type: "escrito",
    category: "Ebook",
    brand: "Vector VMS",
    language: "English",
    img: "",
    url: "https://vectorvms.com/resources/ebook/what-data-says-about-future-us-labor-market/",
    title: { es: "Campo laboral en Estados Unidos", en: "US Labor Market" },
    desc: {
      es: "Qué dice la data sobre el futuro del campo laboral en Estados Unidos",
      en: "What Data Says About the Future of the US Labor Market"
    }
  },
    {
    type: "escrito",
    category: "Blog",
    brand: "Telcel",
    language: "Spanish",
    featured: true,
    img: "https://b4501416.smushcdn.com/4501416/wp-content/uploads/2019/07/maraton-1.jpg?lossy=2&strip=1&webp=1",
    url: "https://holatelcel.com/deportes/5-apps-mejorar-tiempo-maraton-cdmx-telcel-2019/",
    title: { es: "Maratón CDMX 2019", en: "2019 CDMX Marathon" },
    desc: {
      es: "5 apps con las que superarás tu tiempo en el Maratón CDMX Telcel 2019",
      en: "5 apps to help you beat your time in the 2019 CDMX Telcel Marathon"
    }
  },
      {
    type: "escrito",
    category: "Blog",
    brand: "Telcel",
    language: "Spanish",
    img: "https://b4501416.smushcdn.com/4501416/wp-content/uploads/2019/08/corredores-maraton-1.jpg?lossy=2&strip=1&webp=1",
    url: "https://holatelcel.com/deportes/5-datos-curiosos-sobre-los-corredores-del-maraton-cdmx-telcel-que-te-sorprenderan/",
    title: { es: "Maratón CDMX 2019", en: "2019 CDMX Marathon" },
    desc: {
      es: "5 datos curiosos sobre los corredores del Maratón CDMX Telcel que te sorprenderán",
      en: "5 fascinating facts about CDMX Telcel Marathon runners that will surprise you"
    }
  },
      {
    type: "creativo",
    category: "Social media",
    brand: "Amazon Prime Video",
    language: "Spanish",
    img: "assets/portafolio-referencias/fluflu.jpg",
    url: "https://www.instagram.com/p/C97i245N-kn/",
    title: { es: "Yo Soy Betty, temporada 1", en: "Yo Soy Betty, season 1" },
    desc: {
      es: "Contenido para la campaña de la primera temporada de la serie.",
      en: "Content for the campaign for the revival first season"
    }
  },
      {
    type: "creativo",
    category: "Social media",
    brand: "Amazon Prime Video",
    language: "Spanish",
    featured: true,
    img: "assets/portafolio-referencias/falloout.jpg",
    url: "https://www.instagram.com/p/C6HCO_utPmT/?img_index=1",
    title: { es: "Fallout, temporada 1", en: "Fallout, season 1" },
    desc: {
      es: "Contenido para el lanzamiento de la primera temporada de Fallout",
      en: "Content for the launch for Fallout's first season"
    }
  },
  {
    type: "creativo",
    category: "Social media",
    brand: "Amazon Prime Video",
    language: "Spanish",
    img: "assets/portafolio-referencias/ringsofpower.jpg",
    featured: true,
    url: "https://www.instagram.com/p/DAcb1FaPI8Z",
    title: { es: "Anillos de poder, temporada 2", en: "Rings of Power, season 2" },
    desc: {
      es: "Contenido para el lanzamiento de la segunda temporada de Anillos de poder",
      en: "Content for the launch for Rings of Power's second season"
    }
  },
  {
    type: "creativo",
    category: "Social media",
    brand: "Amazon Prime Video",
    language: "Spanish",
    img: "assets/portafolio-referencias/invincible.jpg",
    url: "https://www.instagram.com/p/C0E586Tuxma/",
    title: { es: "Invincible, temporada 4", en: "Invincible, season 4" },
    desc: {
      es: "Contenido para el lanzamiento regional de la cuarta temporada de Invincible",
      en: "Content for the regional launch of new season of Invincible"
    }
  },
  {
    type: "creativo",
    category: "Social media",
    brand: "Amazon Prime Video",
    language: "Spanish",
    img: "assets/portafolio-referencias/ringsofpower2.png",
    url: "https://www.instagram.com/primevideomx/p/C_531xovTus/",
    title: { es: "Anillos de poder, temporada 2", en: "Rings of Power, season 2" },
    desc: {
      es: "Contenido para el lanzamiento de la segunda temporada de Anillos de poder",
      en: "Content for the launch for Rings of Power's second season"
    }
  },
  {
    type: "creativo",
    category: "Social media",
    brand: "Amazon Prime Video",
    language: "Spanish",
    img: "assets/portafolio-referencias/ringsofpower3.png",
    url: "https://www.instagram.com/primevideomx/p/C_qhvkfSgzC/",
    title: { es: "Anillos de poder, temporada 2", en: "Rings of Power, season 2" },
    desc: {
      es: "Contenido para el lanzamiento de la segunda temporada de Anillos de poder",
      en: "Content for the launch for Rings of Power's second season"
    }
  },
  {
    type: "creativo",
    category: "Social media",
    brand: "Blip",
    language: "Spanish",
    img: "assets/portafolio-referencias/blipnewoffices.png",
    url: "https://www.instagram.com/p/DNOmbyMx0U3/",
    featured: true,
    title: { es: "Nuevas oficinas en Blip México", en: "New offices at Blip Mexico" },
    desc: {
      es: "Video que produje para las redes sociales de Blip",
      en: "Video I produced for Blip's social media"
    }
  },
  {
    type: "creativo",
    category: "Social media",
    brand: "Blip",
    language: "Spanish",
    featured: true,
    img: "assets/portafolio-referencias/blipeventrecap.png",
    url: "https://www.instagram.com/p/DPMOQYgkWHR/",
    title: { es: "Recap de evento de Blip México", en: "Blip event video recap" },
    desc: {
      es: "Video que produje para las redes sociales de Blip",
      en: "Video I produced for Blip's social media"
    }
  },
  {
    type: "creativo",
    category: "Social media",
    brand: "Blip",
    language: "Spanish",
    img: "assets/portafolio-referencias/blipencuesta.png",
    url: "https://www.instagram.com/p/DPhG1KOiOjy/",
    title: { es: "Encuesta durante evento de Blip México", en: "Blip event video" },
    desc: {
      es: "Video que produje para las redes sociales de Blip",
      en: "Video I produced for Blip's social media"
    }
  },
  {
    type: "creativo",
    category: "Social media",
    brand: "Telcel",
    language: "Spanish",
    img: "",
    url: "https://www.facebook.com/Telcel/videos/10156143462028692/",
    title: { es: "Maratón CDMX 2019", en: "2019 CDMX Marathon" },
    desc: {
      es: "Contenido para la campaña del Maratón de la Ciudad de México 2019, patrocinado por Telcel",
      en: "Content for the 2019 Mexico City Marathon campaign, sponsored by Telcel."
    }
  },
  {
    type: "creativo",
    category: "Social media",
    brand: "Telcel",
    language: "Spanish",
    img: "",
    url: "https://www.facebook.com/Telcel/videos/10156127394153692/",
    title: { es: "Maratón CDMX 2019", en: "2019 CDMX Marathon" },
    desc: {
      es: "Contenido para la campaña del Maratón de la Ciudad de México 2019, patrocinado por Telcel",
      en: "Content for the 2019 Mexico City Marathon campaign, sponsored by Telcel."
    }
  },
      {
    type: "escrito",
    category: "Artículo",
    brand: "Versión Final (journal)",
    language: "Spanish",
    featured: true,
    img: "https://media.diarioversionfinal.com/wp-content/uploads/2016/05/radiorochelaversionfinal1.jpg",
    url: "https://diarioversionfinal.com/espectaculo-actualidad/los-gloriosos-dias-de-la-comedia-venezolana-quedaron-atras/",
    title: { es: "Los gloriosos días de la comedia venezolana quedaron atrás", en: "The glorious days of Venezuelan comedy are a thing of the past" },
    desc: {
      es: "Por muchos años, los venezolanos reservaban todos sus lunes a las 8 p. m. para una sola actividad...",
      en: "For many years, Venezuelans set aside every Monday at 8 p.m. for a single activity..."
    }
  },
      {
    type: "escrito",
    category: "Artículo",
    brand: "Versión Final (journal)",
    language: "Spanish",
    img: "https://media.diarioversionfinal.com/wp-content/uploads/2015/07/PELO-MALO.jpg",
    url: "https://diarioversionfinal.com/espectaculo-actualidad/septimo-arte-venezolano-recorre-el-mundo/",
    title: { es: "Séptimo arte venezolano recorre el mundo", en: "Venezuelan cinema travels the world." },
    desc: {
      es: "Desde que el cine comenzó su historia en Venezuela aquel día de enero en 1897...",
      en: "Since cinema began its history in Venezuela on that day in January 1897..."
    }
  },
      {
    type: "escrito",
    category: "Artículo",
    brand: "Versión Final (journal)",
    language: "Spanish",
    img: "https://media.diarioversionfinal.com/wp-content/uploads/2016/10/HM-OBRA-ESPIRITU-DE-RURTURA-DANZALUZ-2016-FOTO.HUMBERTO-MATHEUS.jpg",
    url: "https://diarioversionfinal.com/espectaculo-actualidad/danzaluz-celebra-centenario-del-dadaismo/",
    title: { es: "Danzaluz celebra el centenario del dadaísmo", en: "Danzaluz celebrates the centenary of Dadaism" },
    desc: {
      es: "Danzaluz, compañía de danza adscrita al Departamento de Cultura de la Universidad del Zulia (LUZ)...",
      en: "Danzaluz, a dance company affiliated with the Department of Culture of the University of Zulia (LUZ)..."
    }
  },
      {
    type: "escrito",
    category: "Artículo",
    brand: "Versión Final (journal)",
    language: "Spanish",
    img: "https://media.diarioversionfinal.com/wp-content/uploads/2016/08/IO-MESAS-DE-TRABAJO-SECTOR-CULTURA-FOTO-IVAN.OCANDO6.jpg",
    url: "https://diarioversionfinal.com/espectaculo-actualidad/la-cultura-necesita-mas-organizacion/",
    title: { es: "La cultura necesita más organización", en: "Culture needs more organization" },
    desc: {
      es: "El acontecer cultural general en Venezuela se encuentra desorganizado...",
      en: "The general cultural landscape in Venezuela is disorganized..."
    }
  },
    {
    type: "escrito",
    category: "Blog",
    brand: "Libros Políglotas",
    language: "Spanish",
    featured: true,
    img: "https://libropoliglota.wordpress.com/wp-content/uploads/2021/01/unnamed-file.png",
    url: "https://libropoliglota.wordpress.com/2017/02/12/el-largo-y-enredoso-camino-del-idioma/",
    title: { es: "El largo y enredoso camino del idioma", en: "The long and winding path of language" },
    desc: {
      es: "«Piénsese en la ridícula paradoja que encierra la común expresión «dominar una lengua».»",
      en: "Consider the ridiculous paradox contained in the common expression to master a language."
    }
  },
      {
    type: "escrito",
    category: "Blog",
    brand: "Libros Políglotas",
    language: "Spanish",
    featured: true,
    img: "https://libropoliglota.wordpress.com/wp-content/uploads/2019/05/9788430605729-e1557516044673.jpg?w=768&h=351&crop=1",
    url: "https://libropoliglota.wordpress.com/2019/05/10/el-genio-del-idioma-por-alex-grijelmo/",
    title: { es: "El genio del idioma, por Alex Grijelmo", en: "The Genie of the Language, by Alex Grijelmo" },
    desc: {
      es: "Más de 400 millones de personas hablan el idioma con el cual escribo estas palabras...",
      en: "More than 400 million people speak the language in which I am writing these words."
    }
  },
  {
    type: "creativo",
    category: "Social media",
    brand: "Blip",
    language: "Spanish",
    featured: true,
    img: "assets/portafolio-referencias/maxikash.png",
    url: "https://www.youtube.com/watch?v=Z01fPaOq0EY",
    title: { es: "Casos de éxito con Blip", en: "Success Stories with Blip" },
    desc: {
      es: "Maxikash automatizó su servicio de atención al cliente con IA en solo 2 meses | Blip Voices",
      en: "How Maxikash automated their customer support service with AI in only two months | Blip Voices"
    }
  },
];

const LANG_LABEL = {
  Spanish: { es: "Español", en: "Spanish" },
  English: { es: "Inglés", en: "English" },
};

/* ---------------------------------------------------------
   2) IDIOMA
   --------------------------------------------------------- */
(function initLanguage() {
  const html = document.documentElement;
  const btn = document.getElementById("lang-toggle");
  const current = btn.querySelector(".lang-current");
  const other = btn.querySelector(".lang-other");

  function setLang(lang) {
    html.setAttribute("data-lang", lang);
    html.setAttribute("lang", lang);
    const next = lang === "es" ? "en" : "es";
    current.textContent = lang.toUpperCase();
    other.textContent = next.toUpperCase();
    btn.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
    renderBrandFilter();
    renderCards();
  }

  btn.addEventListener("click", () => {
    const next = html.getAttribute("data-lang") === "es" ? "en" : "es";
    setLang(next);
  });
})();

/* ---------------------------------------------------------
   3) LENTES DE COMPETENCIA (filtro del CV)
   --------------------------------------------------------- */
(function initLens() {
  const timeline = document.getElementById("timeline");
  const pills = document.querySelectorAll(".lens-pill");
  const entries = timeline.querySelectorAll(".tl-entry");

  function applyLens(lens) {
    if (lens === "all") {
      timeline.classList.remove("lens-active");
      timeline.querySelectorAll(".tl-points li").forEach((li) => li.classList.remove("lens-on"));
      entries.forEach((e) => e.classList.remove("entry-dim"));
      return;
    }
    timeline.classList.add("lens-active");
    entries.forEach((entry) => {
      let any = false;
      entry.querySelectorAll(".tl-points li").forEach((li) => {
        const match = (li.dataset.lens || "").split(" ").includes(lens);
        li.classList.toggle("lens-on", match);
        if (match) any = true;
      });
      entry.classList.toggle("entry-dim", !any);
    });
  }

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => {
        p.classList.remove("is-active");
        p.setAttribute("aria-pressed", "false");
      });
      pill.classList.add("is-active");
      pill.setAttribute("aria-pressed", "true");
      applyLens(pill.dataset.lens);
    });
  });
})();

/* ---------------------------------------------------------
   4) PESTAÑAS + RENDER DE TARJETAS
   --------------------------------------------------------- */
let activeTab = "escrito";
let activeBrand = "all";

function brandsFor(type) {
  const seen = [];
  PORTFOLIO.forEach((p) => {
    if (p.type === type && p.brand && !seen.includes(p.brand)) seen.push(p.brand);
  });
  return seen;
}

function renderBrandFilter() {
  const wrap = document.getElementById("brand-chips");
  const lang = document.documentElement.getAttribute("data-lang");
  const allLabel = lang === "es" ? "Todas" : "All";
  const chips = [{ key: "all", label: allLabel }].concat(
    brandsFor(activeTab).map((b) => ({ key: b, label: b }))
  );
  wrap.innerHTML = chips
    .map(
      (c) =>
        `<button class="brand-chip${c.key === activeBrand ? " is-active" : ""}" type="button" data-brand="${c.key}" aria-pressed="${c.key === activeBrand}">${c.label}</button>`
    )
    .join("");
  wrap.querySelectorAll(".brand-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeBrand = btn.dataset.brand;
      renderBrandFilter();
      renderCards();
    });
  });
}

function renderCards() {
  const grid = document.getElementById("card-grid");
  const lang = document.documentElement.getAttribute("data-lang");
  const verCopy = lang === "es" ? "Ver" : "View";
  const origPrefix = lang === "es" ? "Idioma original" : "Original language";
  const featured = PORTFOLIO.filter((p) => p.type === activeTab && p.featured);
  const items =
    activeBrand === "all"
      ? (featured.length ? featured : PORTFOLIO.filter((p) => p.type === activeTab))
      : PORTFOLIO.filter((p) => p.type === activeTab && p.brand === activeBrand);

  grid.innerHTML = items
    .map((p) => {
      const media = p.img
        ? `<div class="card-media"><img src="${p.img}" alt="${p.title[lang]}" loading="lazy" /></div>`
        : `<div class="card-media placeholder"><span>${p.category}</span></div>`;
        const langNote = p.language && LANG_LABEL[p.language]
        ? `<p class="card-lang">${origPrefix}: ${LANG_LABEL[p.language][lang]}</p>`
        : "";
      return `
        <a class="card" href="${p.url}" target="_blank" rel="noopener">
          ${media}
          <div class="card-body">
            <p class="card-cat">${p.category}</p>
            <h3 class="card-title">${p.title[lang]}</h3>
            <p class="card-desc">${p.desc[lang]}</p>
            ${langNote}
            <span class="card-link">${verCopy} <span class="arrow" aria-hidden="true">&rarr;</span></span>
          </div>
        </a>`;
    })
    .join("");
}

(function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      activeTab = tab.dataset.tab;
      activeBrand = "all";
      renderBrandFilter();
      renderCards();
    });
  });
  renderBrandFilter();
  renderCards();
})();

/* ---------------------------------------------------------
   5) REVEAL AL HACER SCROLL + HEADER
   --------------------------------------------------------- */
(function initReveal() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach((el) => io.observe(el));
})();

(function initHeader() {
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* Foto de perfil aleatoria */
(function initPortrait() {
  const PORTRAITS = [
    "assets/fotos-de-perfil/joanna.jpg",
    "assets/fotos-de-perfil/joanna-2.jpg",
    "assets/fotos-de-perfil/joanna-3.jpg"
  ];
  const img = document.querySelector(".portrait img");
  if (!img || !PORTRAITS.length) return;
  img.src = PORTRAITS[Math.floor(Math.random() * PORTRAITS.length)];
})();

/* ---------------------------------------------------------
   6) AÑO EN EL FOOTER
   --------------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();
