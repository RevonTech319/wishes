const wishesData = {
    birthday: {
        en: ["May your day be as special as you are, [Name]!", "Happy Birthday [Name]! To many more years of joy.", "Cheers to your new age, [Name]. Shine on!"],
        sw: ["Heri ya siku ya kuzaliwa, [Name]! Maisha marefu na baraka.", "Siku yako iwe nzuri kama tabasamu lako, [Name]!", "Nakutakia furaha tele katika mwaka huu mpya, [Name]."]
    },
    wedding: {
        en: ["Congratulations [Name]! May your love grow stronger every day.", "A beautiful start to a lifelong journey. Happy wedding [Name]!"],
        sw: ["Hongera sana [Name]! Mapenzi yenu yadumu milele.", "Maisha marefu ya ndoa yenye furaha na amani, [Name]."]
    },
    motivation: {
        en: ["Don't stop until you're proud, [Name].", "Keep pushing, [Name]! The world is waiting for your greatness."],
        sw: ["Usikate tamaa [Name], mafanikio yako yako karibu sana.", "Wewe ni mshindi, songa mbele kwa ujasiri [Name]."]
    }
    // Add more categories as needed...
};

let currentLang = 'en';

// Handle Language Selection
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.getAttribute('data-lang');
    });
});

function generateWish() {
    const occasion = document.getElementById('occasion').value;
    const recipient = document.getElementById('recipient').value || "Friend";
    const sender = document.getElementById('sender').value || "Smart Wishes";
    
    const pool = wishesData[occasion][currentLang];
    const randomQuote = pool[Math.floor(Math.random() * pool.length)];
    
    // Display results
    document.getElementById('quote-text').innerText = `"${randomQuote.replace('[Name]', recipient)}"`;
    document.getElementById('quote-from').innerText = `- From ${sender}`;
    
    document.getElementById('result-section').classList.remove('hidden');
    
    // Smooth Scroll to Result
    window.scrollTo({
        top: document.getElementById('result-section').offsetTop - 20,
        behavior: 'smooth'
    });
}

// Image Download Logic
function saveImage() {
    const element = document.getElementById('quote-card-display');
    html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.download = 'SmartWish-Quote.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Copy Logic
function copyText() {
    const text = document.getElementById('quote-text').innerText;
    const from = document.getElementById('quote-from').innerText;
    const viralText = `\n\nGenerate your own wish here: ${window.location.href}`;
    navigator.clipboard.writeText(text + "\n" + from + viralText);
    alert("Copied to Clipboard! ✅");
}

// WhatsApp Share
function shareWhatsApp() {
    const text = encodeURIComponent(document.getElementById('quote-text').innerText + " " + document.getElementById('quote-from').innerText + "\n\nGenerate yours here 👇\n" + window.location.href);
    window.open(`https://api.whatsapp.com/send?text=${text}`);
}

// Music Logic
let isPlaying = false;
function toggleMusic() {
    const audio = document.getElementById('bg-audio');
    const wave = document.getElementById('music-wave');
    if (!isPlaying) {
        audio.play();
        wave.classList.add('playing');
        isPlaying = true;
    } else {
        audio.pause();
        wave.classList.remove('playing');
        isPlaying = false;
    }
}
