
const $ = (sel) => document.querySelector(sel);

// Mobile nav with overlay
const burger = $("#burger");
const nav = $("#siteNav");
const navClose = $("#navClose");
const overlay = $("#overlay");

function openNav(){
  nav.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeNav(){
  nav.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}
burger?.addEventListener("click", openNav);
navClose?.addEventListener("click", closeNav);
overlay?.addEventListener("click", closeNav);

// Footer year
$("#year").textContent = new Date().getFullYear();

// Simple i18n
const dict = {
  ru: {
    nav: {home:"Главная",about:"О компании",catalog:"Каталог",brands:"Бренды",benefits:"Преимущества",geo:"География",partners:"Партнёрам",news:"Новости",reviews:"Отзывы",facts:"Факты",contacts:"Контакты"},
    hero: {title:"Надёжный дистрибьютор товаров народного потребления", subtitle:"Оптовые поставки продуктов питания, напитков и товаров для дома по всей стране", cta_catalog:"Каталог продукции", cta_partner:"Стать партнёром"},
    about: {title:"О компании", desc:"Мы помогаем брендам и розничным сетям эффективно встречаться на полке — надёжная логистика, стабильные поставки и поддержка партнёров.", years:"лет на рынке", clients:"клиентов", sku:"SKU в портфеле", regions:"регионов доставки"},
    catalog: {title:"Категории продукции", desc:"Сбалансированный портфель брендов для розницы, HoReCa и e‑commerce", food:"Продукты питания", food_desc:"Крупы, снеки, кондитерка, бакалея и другое", drinks:"Напитки", drinks_desc:"Вода, соки, энергетики, чай/кофе", household:"Бытовая химия", household_desc:"Чистящие, моющие, уход за домом", family:"Товары для семьи", family_desc:"Гигиена, косметика, товары для детей"},
    brands: {title:"Популярные бренды", desc:"Сотрудничаем с международными и локальными производителями"},
    benefits: {title:"Наши преимущества", desc:"Прозрачные условия, быстрая поставка и поддержка мерчендайзинга", assort:"Широкий ассортимент", assort_desc:"Сбалансированные SKU по категориям и ценовым сегментам", logistics:"Надёжная логистика", logistics_desc:"Собственные и партнёрские склады, точные отгрузки", terms:"Гибкие условия", terms_desc:"Индивидуальные условия для розницы, HoReCa и e‑com", support:"Поддержка партнёров", support_desc:"POS‑материалы, промо и трейд‑маркетинг"},
    geo: {title:"География поставок", desc:"Охватываем ключевые города и регионы"},
    partners: {title:"Условия для партнёров", desc:"Прозрачные правила и быстрый онбординг", moq:"Минимальная партия", moq_desc:"Гибкие MOQ для разных каналов", delivery:"Доставка", delivery_desc:"Регулярные графики и SLA", support:"Поддержка", support_desc:"Обучение персонала и маркетинговая поддержка", cta:"Запросить прайс-лист"},
    news: {title:"Новости и акции", desc:"Спецпредложения и новые поступления", post1_title:"Скидка на чай и кофе", post1_desc:"Выгодные условия для HoReCa на Q4", post2_title:"Новые бренды в портфеле", post2_desc:"Расширяем ассортимент бакалеи", post3_title:"График доставок", post3_desc:"Обновления по ключевым направлениям"},
    reviews: {title:"Отзывы партнёров", desc:"Нам доверяют локальные сети и федеральные игроки", q1:"Надёжные сроки, аккуратные поставки — рекомендую!", q2:"Удобный прайс и разумные MOQ — легко стартовать.", q3:"Помогли с мерчендайзингом и промо — продажи выросли."},
    facts: {title:"Факты о нас", desc:"Сухие цифры — лучшая иллюстрация стабильности", otif:"OTIF по отгрузкам", sla:"Средний SLA доставки", brands:"брендов в портфеле", pallets:"паллето‑мест на складе"},
    contacts: {title:"Контакты", desc:"Оставьте заявку — вернёмся с прайсом и условиями", alert:"Спасибо! Мы получили вашу заявку и свяжемся с вами."},
    form: {name:"Имя", company:"Компания", email:"Email", phone:"Телефон", message:"Сообщение", submit:"Отправить"},
    common: {more:"Подробнее"}
  },
  kz: {
    nav: {home:"Басты бет",about:"Компания туралы",catalog:"Каталог",brands:"Брендтер",benefits:"Артықшылықтар",geo:"География",partners:"Серіктестерге",news:"Жаңалықтар",reviews:"Пікірлер",facts:"Фактылар",contacts:"Байланыс"},
    hero: {title:"Кең тұтыну тауарларының сенімді дистрибьюторы", subtitle:"Ел бойынша азық‑түлік, сусындар және үйге арналған тауарларды көтерме жеткізу", cta_catalog:"Өнімдер каталогы", cta_partner:"Серіктес болу"},
    about: {title:"Компания туралы", desc:"Брендтер мен бөлшек желілердің сөреде тиімді кездесуі — сенімді логистика, тұрақты жеткізілім және серіктестерге қолдау.", years:"жыл нарықта", clients:"клиент", sku:"SKU портфельде", regions:"жеткізу аймағы"},
    catalog: {title:"Өнім санаттары", desc:"Бөлшек, HoReCa және e‑commerce үшін теңгерімді бренд портфелі", food:"Азық‑түлік", food_desc:"Жармалар, тіскебасарлар, кондитер, бакалея және т.б.", drinks:"Сусындар", drinks_desc:"Су, шырындар, энергетиктер, шай/кофе", household:"Тұрмыстық химия", household_desc:"Тазартқыш, жуғыш құралдар, үй күтімі", family:"Отбасы тауарлары", family_desc:"Гигиена, косметика, балаларға арналған тауарлар"},
    brands: {title:"Танымал брендтер", desc:"Халықаралық және жергілікті өндірушілермен жұмыс істейміз"},
    benefits: {title:"Біздің артықшылықтар", desc:"Мөлдір шарттар, жылдам жеткізу және мерчандайзинг қолдауы", assort:"Кең ассортимент", assort_desc:"Санаттар мен баға сегменттері бойынша теңгерімді SKU", logistics:"Сенімді логистика", logistics_desc:"Өз және серіктес қоймалар, дәл тиеп-жөнелту", terms:"Икемді шарттар", terms_desc:"Бөлшек, HoReCa және e‑com үшін жеке шарттар", support:"Серіктес қолдауы", support_desc:"POS‑материалдар, промо және трейд‑маркетинг"},
    geo: {title:"Жеткізу географиясы", desc:"Негізгі қалалар мен өңірлерді қамтимыз"},
    partners: {title:"Серіктестерге арналған шарттар", desc:"Мөлдір ережелер және тез онбординг", moq:"Минималды партия", moq_desc:"Әртүрлі арналар үшін икемді MOQ", delivery:"Жеткізу", delivery_desc:"Тұрақты графиктер және SLA", support:"Қолдау", support_desc:"Қызметкерлерді оқыту және маркетингтік қолдау", cta:"Прайс‑парақты сұрау"},
    news: {title:"Жаңалықтар мен акциялар", desc:"Арнайы ұсыныстар және жаңа түскендер", post1_title:"Шай мен кофе жеңілдігі", post1_desc:"Q4 үшін HoReCa-ға тиімді шарттар", post2_title:"Портфельдегі жаңа брендтер", post2_desc:"Бакалея ассортиментін кеңейтеміз", post3_title:"Жеткізу кестесі", post3_desc:"Негізгі бағыттар бойынша жаңартулар"},
    reviews: {title:"Серіктес пікірлері", desc:"Бізге жергілікті желілер және ірі ойыншылар сенеді", q1:"Уақытылы, ұқыпты жеткізу — ұсынамын!", q2:"Ыңғайлы прайс және орынды MOQ — бастауы оңай.", q3:"Мерчандайзинг пен промоға көмектесті — сатылым өсті."},
    facts: {title:"Біз туралы фактілер", desc:"Құрғақ сандар — тұрақтылықтың ең жақсы көрінісі", otif:"OTIF тиеп-жөнелту", sla:"Орташа жеткізу SLA", brands:"бренд портфельде", pallets:"қоймадағы паллет-орындар"},
    contacts: {title:"Байланыс", desc:"Өтініш қалдырыңыз — прайс пен шарттарды жолдаймыз", alert:"Рахмет! Өтінішіңізді алдық, жақын арада хабарласамыз."},
    form: {name:"Аты", company:"Компания", email:"Email", phone:"Телефон", message:"Хабарлама", submit:"Жіберу"},
    common: {more:"Толығырақ"}
  }
};

const i18n = {
  lang: "ru",
  t(path){
    const [ns,key] = path.split(".");
    return dict[this.lang]?.[ns]?.[key] ?? "";
  },
  apply(){
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const path = el.getAttribute("data-i18n");
      const txt = path.split(".").length>1 ? this.t(path) : "";
      if(txt) el.textContent = txt;
    });
    document.documentElement.lang = this.lang === "kz" ? "kk" : "ru";
    document.querySelectorAll(".lang-switch").forEach(b => b.classList.toggle("active", b.dataset.lang === this.lang));
  },
  set(lang){ this.lang = lang; this.apply(); }
};

// Initialize language switches
document.getElementById("langRu")?.addEventListener("click", ()=> i18n.set("ru"));
document.getElementById("langKz")?.addEventListener("click", ()=> i18n.set("kz"));
i18n.apply();


// === Fix header offset dynamically to prevent jump/overlap ===
function setHeaderHeightVar(){
  const h = document.querySelector('.header')?.offsetHeight || 64;
  document.documentElement.style.setProperty('--header-h', h + 'px');
}
window.addEventListener('load', setHeaderHeightVar);
window.addEventListener('resize', setHeaderHeightVar);
window.addEventListener('orientationchange', setHeaderHeightVar);
setHeaderHeightVar();
