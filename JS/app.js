import { router } from './router.js';
import { renderGallery, initGalleryEvents } from './pages/gallery.js';
import { renderNotes } from './pages/notes.js';
import { renderCamera } from './pages/camera.js';
import { renderMusic, initMusicPlayer } from './pages/music.js';

// Register semua pages
router.register('gallery', renderGallery);
router.register('notes', renderNotes);
router.register('camera', renderCamera);
router.register('music', renderMusic);

// Handle navigasi
document.getElementById('bottom-nav').addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-btn');
    if (btn) {
        const page = btn.dataset.page;
        router.navigate(page);
        
        // Init event handlers sesuai page
        if (page === 'gallery') initGalleryEvents();
        if (page === 'music') initMusicPlayer();
    }
});

// Load page pertama
router.navigate('gallery');
