import { cardData } from '../data.js';

export function renderGallery() {
    const photos = cardData.gallery;
    
    return `
        <div class="page gallery-page">
            <header class="page-header">
                <h1>📸 Galeri Kenangan</h1>
            </header>
            
            <div class="gallery-grid">
                ${photos.map((photo, index) => `
                    <div class="gallery-item" data-index="${index}">
                        <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
                        <p class="caption">${photo.caption}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Event handler untuk gallery (dipanggil setelah render)
export function initGalleryEvents() {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            // Buka lightbox/modal
            const index = item.dataset.index;
            openLightbox(cardData.gallery[index]);
        });
    });
}
