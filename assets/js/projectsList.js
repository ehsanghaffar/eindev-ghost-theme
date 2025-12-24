const projectsList = [
    {
        name: "استارتر Next.js 16",
        date: "۲۰۲۵",
        slug: "nextjs-16-starter",
        tagline: "استارتر مدرن برای توسعه وبسایت با Next.js 16 و Tailwind CSS 4, Docker",
        url: "https://github.com/ehsanghaffar/next16-docker-tw4-starter",
        highlight: true,
        liveUrl: "https://nextjs-16-docker.vercel.app",
    },
    {
        name: "ابزار توسعه کلاب‌هاوس",
        date: "۲۰۲۲",
        slug: "clubhouse",
        tagline: "لیست کامل ابزار برای توسعه‌ی نرم‌افزار چت صوتی کلاب‌هاوس",
        url: "https://github.com/ehsanghaffar/awesome-clubhouse",
        writeup: "/musical-instrument-web-audio-api",
        highlight: true,
    },
    {
        name: "ابزار تست یکپارچه اینترنت با Go",
        date: "۲۰۲۵",
        slug: "ultimate-internet-test",
        tagline: "ابزاری برای تست یکپارچه سرعت و کیفیت اینترنت با زبان Go",
        url: "https://github.com/ehsanghaffar/ultimate-internet-test",
        highlight: true,
    },
    {
        name: "نئومورفیسم دیزاین",
        date: "۲۰۱۸",
        slug: "laravel-neumorphism-ui",
        tagline: "وبسایت فول‌استک لاراولی با دیزاین نئومورفیسم",
        url: "https://github.com/ehsanghaffar/laravel-neumorphism-ui",
        highlight: true,
    },
    {
        name: "کوتاه‌کننده لینک",
        date: "۲۰۲۲",
        slug: "nodejs-url-shortener",
        tagline: "اپلیکیشنی برای کوتاه کردن لینک‌های بلند.",
        url: "https://github.com/persian-developers-hub/nodejs-url-shortener",
        writeup: "/sokoban-game",
        highlight: true,
    },
    {
        name: "مجموعه پروژه‌های جاوااسکریپت",
        date: "۲۰۱۹ - ۲۰۲۵",
        slug: "javascript-playground",
        tagline: "مجموعه‌ای از پروژه‌های کوچک و سرگرم‌کننده با جاوااسکریپت",
        url: "https://github.com/ehsanghaffar/javascript-playground",
        highlight: true,
    },
];

let projectslists = document.getElementById("projectlists");

let card = d3
    .select(projectslists)
    .selectAll("div")
    .data(projectsList)
    .enter()
    .append("div")
    .attr("class", "anchored card");

let anchored = card.append("div");

let time = anchored.append("time").text(function (d, i) {
    return d.date;
});
let title = anchored
    .append("a")
    .attr("href", function (d, i) {
        return d.url;
    })
    .attr("class", "card-header")
    .text(function (d, i) {
        return d.name;
    });

let desc = anchored.append("p").text((d, i) => {
    return d.tagline;
});

let anchored2 = card.append("div").attr("class", "anchored links");
let link = anchored2
    .append("a")
    .attr("class", "button flex")
    .attr("href", (d) => {
        return d.url;
    })
    .text("سورس");

let liveLink = anchored2
    .append("a")
    .attr("class", "button flex")
    .attr("href", (d) => {
        return d.liveUrl;
    })
    .text("مشاهده آنلاین")