// Router sederhana untuk handle perpindahan page
class Router {
    constructor() {
        this.routes = {};
        this.currentPage = null;
    }
    
    // Daftarkan page
    register(name, renderFunction) {
        this.routes[name] = renderFunction;
    }
    
    // Pindah ke page tertentu
    navigate(pageName) {
        const container = document.getElementById('page-content');
        
        if (this.routes[pageName]) {
            // Animasi fade out
            container.classList.add('fade-out');
            
            setTimeout(() => {
                // Render page baru
                container.innerHTML = this.routes[pageName]();
                this.currentPage = pageName;
                
                // Update active nav
                this.updateActiveNav(pageName);
                
                // Animasi fade in
                container.classList.remove('fade-out');
                container.classList.add('fade-in');
                
                setTimeout(() => container.classList.remove('fade-in'), 300);
            }, 150);
        }
    }
    
    updateActiveNav(pageName) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === pageName);
        });
    }
}

export const router = new Router();
