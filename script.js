// Global variables
let uploadedImage = null;

// Initialize floating hearts on page load
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    setupImageUpload();
});

// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['♥', '❤', '💕', '💖', '💗', '💓', '💞'];
    
    // Create 15 floating hearts
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(heart);
    }
}

// Start creating card
function startCreating() {
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('cardCreator').classList.remove('hidden');
    
    // Add live preview updates
    setupLivePreview();
}

// Setup live preview for form inputs
function setupLivePreview() {
    const recipientInput = document.getElementById('recipientName');
    const senderInput = document.getElementById('senderName');
    const messageInput = document.getElementById('message');
    
    recipientInput.addEventListener('input', updateLivePreview);
    senderInput.addEventListener('input', updateLivePreview);
    messageInput.addEventListener('input', updateLivePreview);
}

// Update live preview
function updateLivePreview() {
    const recipientName = document.getElementById('recipientName').value || 'My Dearest';
    const senderName = document.getElementById('senderName').value || 'With Love';
    const message = document.getElementById('message').value || 'Your beautiful message will appear here...';
    
    document.getElementById('previewTo').textContent = recipientName;
    document.getElementById('previewFrom').textContent = senderName;
    document.getElementById('previewMessage').innerHTML = `<p>${message}</p>`;
}

// Setup image upload
function setupImageUpload() {
    const fileInput = document.getElementById('photoUpload');
    const uploadArea = document.getElementById('uploadArea');
    
    fileInput.addEventListener('change', handleImageUpload);
    
    // Drag and drop functionality
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--primary-red)';
        uploadArea.style.background = 'white';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = 'var(--rose)';
        uploadArea.style.background = 'var(--cream)';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--rose)';
        uploadArea.style.background = 'var(--cream)';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageFile(file);
        }
    });
}

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        handleImageFile(file);
    }
}

// Process image file
function handleImageFile(file) {
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImage = e.target.result;
        
        // Show preview
        const previewContainer = document.getElementById('previewContainer');
        const imagePreview = document.getElementById('imagePreview');
        const uploadArea = document.getElementById('uploadArea');
        
        imagePreview.src = uploadedImage;
        previewContainer.classList.remove('hidden');
        uploadArea.classList.add('hidden');
        
        // Update card preview
        updateCardPhoto();
    };
    reader.readAsDataURL(file);
}

// Remove uploaded image
function removeImage() {
    uploadedImage = null;
    document.getElementById('previewContainer').classList.add('hidden');
    document.getElementById('uploadArea').classList.remove('hidden');
    document.getElementById('photoUpload').value = '';
    
    // Remove from card preview
    const cardPhoto = document.getElementById('cardPhoto');
    cardPhoto.innerHTML = `
        <div class="photo-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
            </svg>
            <p>Your photo will appear here</p>
        </div>
    `;
}

// Update card photo preview
function updateCardPhoto() {
    const cardPhoto = document.getElementById('cardPhoto');
    if (uploadedImage) {
        cardPhoto.innerHTML = `<img src="${uploadedImage}" alt="Your photo">`;
    }
}

// Show final preview
function showPreview() {
    const recipientName = document.getElementById('recipientName').value;
    const senderName = document.getElementById('senderName').value;
    const message = document.getElementById('message').value;
    
    if (!recipientName || !message) {
        alert('Please fill in at least the recipient name and message!');
        return;
    }
    
    // Update final card
    document.getElementById('finalTo').textContent = recipientName;
    document.getElementById('finalFrom').textContent = senderName || 'With Love';
    document.getElementById('finalMessage').innerHTML = `<p>${message}</p>`;
    
    // Update photo if exists
    const finalPhoto = document.getElementById('finalPhoto');
    if (uploadedImage) {
        finalPhoto.innerHTML = `<img src="${uploadedImage}" alt="Your photo">`;
    } else {
        finalPhoto.innerHTML = '';
    }
    
    // Show final card screen
    document.getElementById('cardCreator').classList.add('hidden');
    document.getElementById('finalCard').classList.remove('hidden');
}

// Edit card
function editCard() {
    document.getElementById('finalCard').classList.add('hidden');
    document.getElementById('cardCreator').classList.remove('hidden');
}

// Open envelope animation
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('open');
    
    // Add confetti effect
    setTimeout(() => {
        createConfetti();
    }, 800);
}

// Create confetti effect
function createConfetti() {
    const colors = ['#E63946', '#F77F8A', '#FFB3BA', '#FF6B9D', '#FF8FA3'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        document.body.appendChild(confetti);
        
        // Animate confetti
        const duration = Math.random() * 3 + 2;
        const startX = parseFloat(confetti.style.left);
        const endX = startX + (Math.random() - 0.5) * 200;
        
        confetti.animate([
            { 
                transform: `translate(0, 0) rotate(0deg)`,
                opacity: 1 
            },
            { 
                transform: `translate(${endX - startX}px, ${window.innerHeight + 10}px) rotate(${Math.random() * 720}deg)`,
                opacity: 0 
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Download card as image (bonus feature)
function downloadCard() {
    alert('Download feature coming soon! For now, you can take a screenshot of your beautiful card.');
}

// Share card (bonus feature)
function shareCard() {
    if (navigator.share) {
        navigator.share({
            title: 'Valentine\'s Card',
            text: 'I made this beautiful Valentine\'s card for you!',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert('Sharing is not supported on this browser. You can take a screenshot instead!');
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press Enter on start screen to begin
    if (e.key === 'Enter' && !document.getElementById('startScreen').classList.contains('hidden')) {
        startCreating();
    }
    
    // Press Escape to go back
    if (e.key === 'Escape') {
        if (!document.getElementById('finalCard').classList.contains('hidden')) {
            editCard();
        } else if (!document.getElementById('cardCreator').classList.contains('hidden')) {
            if (confirm('Are you sure you want to go back to the start?')) {
                document.getElementById('cardCreator').classList.add('hidden');
                document.getElementById('startScreen').classList.remove('hidden');
            }
        }
    }
});

// Smooth scroll for better UX
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Add some Easter eggs for fun
let clickCount = 0;
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('heart-logo')) {
        clickCount++;
        if (clickCount === 7) {
            alert('❤️ You found a secret! This card was made with extra love just for you! ❤️');
            clickCount = 0;
        }
    }
});
