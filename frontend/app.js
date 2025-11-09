const output = document.getElementById('output');
const loginBtn = document.getElementById('loginBtn');
const generateBtn = document.getElementById('generateBtn');

// Récupérer le session_id depuis l'URL après login
const urlParams = new URLSearchParams(window.location.search);
let sessionId = urlParams.get('session_id');

if(sessionId) {
    output.textContent = 'Logged in! Ready to generate playlist.';
}

// --- Bouton Login ---
loginBtn.onclick = () => {
    window.location.href = 'http://localhost:3000/login';
};

// --- Bouton Generate Playlist ---
generateBtn.onclick = async () => {
    if (!sessionId) {
        alert('Please log in first!');
        return;
    }

    output.textContent = 'Generating playlist...';

    try {
        const res = await fetch('http://localhost:3000/playlist/random', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ session_id: sessionId })
        });

        if(!res.ok) {
            const text = await res.text();
            output.textContent = 'Error: ' + text;
            return;
        }

        const data = await res.json();
        output.textContent = `Playlist created! ID: ${data.playlistId}`;
    } catch(err) {
        console.error(err);
        output.textContent = 'Error generating playlist';
    }
};