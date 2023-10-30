const text = [
    "قَالَ رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي {سورة طه}",
    "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوب {سورة الرعد}",
    "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَاب {سورة الزمر}",
    "قَالَ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي فَغَفَرَ لَهُ ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيم {سورة القصص}",
    "وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ وَسَبِّحْ بِحَمْدِهِ ۚ وكَفَىٰ بِهِ بِذُنُوبِ عِبَادِهِ خَبِيرًا {سورة الفرقان}",
];

function getRandomQuote() {
    return text[Math.floor(Math.random() * text.length)];
}

const notification = document.getElementById("notification");
const quoteText = document.getElementById("quoteText");
const closeNotificationButton = document.getElementById("closeNotification");

const randomQuote = getRandomQuote();
quoteText.textContent = randomQuote;

closeNotificationButton.addEventListener("click", () => {
    notification.style.display = "none";
});
