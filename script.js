// Database of Templates
const wishesData = {
    birthday: {
        en: ["May your day be as bright as your smile, [Recipient]!", "Happy Birthday! Here's to another year of greatness.", "To a wonderful person, may this birthday bring you endless joy!"],
        sw: ["Heri ya siku ya kuzaliwa [Recipient]! Maisha marefu na baraka.", "Siku yako iwe nzuri kama tabasamu lako!", "Nakutakia furaha na mafanikio katika mwaka huu mpya wa maisha yako."]
    },
    new_year: {
        en: ["Happy New Year, [Recipient]! 2024 is your year to shine.", "New year, new beginnings. Let's make it count!", "May the coming year be full of grand adventures."],
        sw: ["Heri ya Mwaka Mpya [Recipient]! Huu ni mwaka wako wa kung'ara.", "Mwaka mpya, mwanzo mpya. Kila la heri!", "Nakutakia mwaka wenye afya, amani na mafanikio tele."]
    },
    love: {
        en: ["You make my world a better place just by being in it.", "Love is not about how many days, but how much we love each other every day.", "Every moment with you is a treasure, [Recipient]."],
        sw: ["Wewe ni lulu ya thamani maishani mwangu, [Recipient].", "Upendo wetu hauna kikomo. Nakupenda sana.", "Asante kwa kuwa rafiki na mpenzi bora."]
    },
    motivation: {
        en: ["Don't stop until you're proud.", "Your only limit is your mind. Keep pushing!", "Success is not final, failure is not fatal: it is the courage to continue that counts."],
        sw: ["Usikate tamaa mpaka ufanikiwe.", "Kikomo chako ni mawazo yako. Songa mbele!", "Mafanikio ni safari, sio mwisho. Kazana!"]
    }
};

// Generate Quote Function
function generateWish() {
    const occasion = document.getElementById('occasion').value;
    const recipient = document.getElementById('recipient').value || "My Friend";
    const sender = document.getElementById('sender').value || "Smart Wishes";
    const lang = document.querySelector('input[name="lang"]:checked').value;

    const templates = wishesData[occasion][lang];
    const randomIndex = Math.floor(Math.random() * templates.length);
    let selectedWish = templates[randomIndex];

    // Replace Placeholder
    selectedWish = selectedWish.replace("[Recipient]", recipient);

    // Update UI
    document.getElementById('wishText').innerText = `"${selectedWish}"`;
    document.getElementById('wishSignature').innerText = `- From ${sender}`;
    document.getElementById('resultArea').classList.remove('hidden');

    // Smooth scroll to result
    document.getElementById('resultArea').scrollIntoView({ behavior: 'smooth' });
}

// Copy to Clipboard
async function copyToClipboard() {
    const text = document.getElementById('wishText').innerText;
    const sig = document.getElementById('wishSignature').innerText;
    const fullText = `${text} ${sig}\n\nGenerate your own personalized wish here 👇\n${window.location.href}`;
    
    try {
        await navigator.clipboard.writeText(fullText);
        alert("Wish copied to clipboard! ✅");
    } catch (err) {
        alert("Failed to copy.");
    }
}

// WhatsApp Viral Sharing
function shareWhatsApp() {
    const text = document.getElementById('wishText').innerText;
    const sig = document.getElementById('wishSignature').innerText;
    const viralMessage = encodeURIComponent(`${text}\n\n${sig}\n\nGenerate your own personalized wish here 👇\n${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${viralMessage}`);
}

// Download as Image (PWA Feature)
function downloadImage() {
    const element = document.getElementById('wishCard');
    html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.download = 'SmartWish.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('body').style.backgroundColor = isDark ? "#1a202c" : "#f8f9fa";
});
