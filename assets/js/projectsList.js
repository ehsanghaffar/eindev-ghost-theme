const projectsList = [
    {
        name: "مونوریپو فول‌استک",
        date: "۲۰۲۲",
        slug: "FullestStack",
        tagline: "مونوریپو با تکنولوژی‌های تایپ‌اسکریپتی و جذاب",
        url: "https://github.com/neekware/fulleststack",
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
        name: "ای‌پی‌آی نودجی‌اس",
        date: "۲۰۲۰",
        slug: "mean-backend",
        tagline:
            "ای‌پی‌آی نودجی‌اس همراه ماژول‌های کامل برای احراز هویت و دیتابیس",
        url: "https://github.com/ehsanghaffar/mean-backend",
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
        name: "مینی اپ",
        date: "۲۰۱۷",
        slug: "javscript-small-apps",
        tagline:
            "اپلیکیشن‌های کوچیک و مینی جاوااسکریپی که برای یادگیری زبان برنامه‌نویسی استفاده کردم",
        url: "https://github.com/ehsanghaffar/javscript-small-apps",
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
