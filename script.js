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
    category: "Blog",
    brand: "Blip",
    img: "",
    url: "#",
    title: { es: "WhatsApp Business API en LATAM", en: "WhatsApp Business API in LATAM" },
    desc: {
      es: "Artículo de fondo sobre adopción y casos de uso en la región.",
      en: "In-depth piece on adoption and use cases across the region."
    }
  },
  {
    type: "escrito",
    category: "Prensa",
    brand: "Amazon Prime Video",
    img: "",
    url: "#",
    title: { es: "Mención en medio especializado", en: "Feature in trade press" },
    desc: {
      es: "Cobertura de prensa sobre IA conversacional para marketing.",
      en: "Press coverage on conversational AI for marketing."
    }
  },
  {
    type: "escrito",
    category: "eBook",
    brand: "Blip",
    img: "",
    url: "#",
    title: { es: "Guía de marketing conversacional", en: "Conversational marketing guide" },
    desc: {
      es: "eBook descargable con marco práctico para equipos de marca.",
      en: "Downloadable eBook with a practical framework for brand teams."
    }
  },
  {
    type: "creativo",
    category: "Video",
    brand: "Blip",
    img: "",
    url: "#",
    title: { es: "Pieza de video de marca", en: "Branded video piece" },
    desc: {
      es: "Guion y producción de un video con narrativa por viñetas.",
      en: "Script and production of a vignette-driven brand video."
    }
  },
  {
    type: "creativo",
    category: "Redes",
    brand: "Amazon Prime Video",
    img: "",
    url: "#",
    title: { es: "Publicación destacada en LinkedIn", en: "Featured LinkedIn post" },
    desc: {
      es: "Copy y arte para una publicación con alto alcance orgánico.",
      en: "Copy and art for a high-reach organic post."
    }
  },
  {
    type: "creativo",
    category: "Campaña",
    brand: "Telcel",
    img: "",
    url: "#",
    title: { es: "Campaña estacional", en: "Seasonal campaign" },
    desc: {
      es: "Concepto creativo adaptado a varias plataformas sociales.",
      en: "Creative concept adapted across several social platforms."
    }
  }
];

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
  const items = PORTFOLIO.filter(
    (p) => p.type === activeTab && (activeBrand === "all" || p.brand === activeBrand)
  );

  grid.innerHTML = items
    .map((p) => {
      const media = p.img
        ? `<div class="card-media"><img src="${p.img}" alt="${p.title[lang]}" loading="lazy" /></div>`
        : `<div class="card-media placeholder"><span>${p.category}</span></div>`;
      return `
        <a class="card" href="${p.url}" target="_blank" rel="noopener">
          ${media}
          <div class="card-body">
            <p class="card-cat">${p.category}</p>
            <h3 class="card-title">${p.title[lang]}</h3>
            <p class="card-desc">${p.desc[lang]}</p>
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

/* ---------------------------------------------------------
   6) AÑO EN EL FOOTER
   --------------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();
