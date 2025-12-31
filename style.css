:root {
    --primary: #6366f1;
    --dark: #0f172a;
    --light: #f8fafc;
    --glass: rgba(255, 255, 255, 0.95);
    --shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: 'Outfit', sans-serif;
    background-color: var(--light);
    color: var(--dark);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Ad Placements */
.ad-top-wrapper {
    background: #fff;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
}
.ad-label { font-size: 10px; color: #999; text-transform: uppercase; }
.ad-container { min-height: 90px; overflow: hidden; display: flex; justify-content: center; }

/* Music Button */
.music-controller {
    position: fixed;
    top: 15px;
    right: 15px;
    background: #fff;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.wave-icon span {
    display: inline-block;
    width: 3px;
    height: 10px;
    background: var(--primary);
    margin: 0 1px;
    transition: 0.3s;
}
.wave-icon.playing span {
    animation: wave 0.5s infinite alternate;
}
@keyframes wave { 
    from { height: 5px; } 
    to { height: 15px; } 
}

/* App Layout */
.app-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
}

.main-header { text-align: center; margin-bottom: 30px; }
.main-header h1 { font-size: 2.2rem; font-weight: 800; color: var(--primary); }
.main-header h1 span { color: var(--dark); font-weight: 300; }

/* Form Styles */
.generator-card {
    background: #fff;
    padding: 25px;
    border-radius: 24px;
    box-shadow: var(--shadow);
    margin-bottom: 30px;
}

.input-group { margin-bottom: 15px; }
.input-group label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 5px; color: #64748b; }
input, select {
    width: 100%;
    padding: 14px;
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    font-size: 16px;
    outline: none;
    transition: 0.3s;
}
input:focus { border-color: var(--primary); }

.name-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 10px; }

.lang-selector { display: flex; gap: 10px; margin: 15px 0; }
.lang-btn {
    flex: 1;
    padding: 10px;
    border: 1px solid #e2e8f0;
    background: #fff;
    border-radius: 10px;
    font-weight: 600;
}
.lang-btn.active { background: var(--primary); color: #fff; border-color: var(--primary); }

.generate-btn {
    width: 100%;
    padding: 18px;
    background: var(--primary);
    color: #fff;
    border: none;
    border-radius: 16px;
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}

/* Pro Quote Card Display */
.pro-quote-card {
    position: relative;
    padding: 40px 20px;
    border-radius: 24px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    color: #fff;
    background: #1e1b4b; /* Default deep blue */
    margin-bottom: 25px;
}
.quote-main { font-size: 22px; font-weight: 600; line-height: 1.4; z-index: 2; }
.quote-author { margin-top: 15px; font-size: 14px; opacity: 0.8; z-index: 2; font-style: italic; }

/* Action Buttons */
.action-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 12px; }
.action-btn {
    padding: 15px;
    border-radius: 12px;
    border: none;
    font-weight: 700;
    color: #fff;
}
.wa { background: #25D366; }
.download { background: #6366f1; }
.copy { background: #334155; }
.share { background: #f43f5e; }

/* Sticky Footer */
.sticky-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #eee;
    padding: 5px;
    z-index: 999;
    text-align: center;
}

.hidden { display: none; }
