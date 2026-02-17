    // ==============================================
    // script.js - Catálogo Hero Hunk 160R - MOTOFIVE
    // ==============================================

    document.addEventListener('DOMContentLoaded', function() {

    // ==============================================
    // CONFIGURACIÓN ACTUALIZADA
    // ==============================================
    const CONFIG = {
        whatsappNumber: '3320267983',
        siteUrl: 'https://motofive-co.github.io', // ✅ Cambiado a Motofive
        companyName: 'MOTOFIVE', // ✅ Nueva variable
        useSubfolder: false // true si los archivos están en /Hunk160R/
    };

    // ==============================================
    // ELEMENTOS DEL DOM
    // ==============================================
    const catalogGrid = document.querySelector('.catalog-grid');
    const searchInput = document.getElementById('searchInput');

    // ==============================================
    // DATOS DEL CATÁLOGO
    // ==============================================
    const catalogData = [
    // MOTOR
    { number: 'C17030022', description: 'Bomba De Gasolina', image: 'C17030022.png', category: 'motor' },
    // ELÉCTRICO
    { number: 'C06050040', description: 'ARNES PRINCIPAL', image: 'C06050040.png', category: 'electrico' },
    { number: 'C06060005', description: 'BOBINA IGNICION', image: 'C06060005.png', category: 'electrico' },
    { number: 'C06070007', description: 'ECU CONTROLADOR ELECTRONICO BCM', image: 'C06070007.png', category: 'electrico' },
    { number: 'C06070015', description: 'MINIMAB ABS', image: 'C06070015.png', category: 'electrico' },
    { number: 'C06030004', description: 'REGULADOR RECTIFICADOR', image: 'C06030004.png', category: 'electrico' },
    { number: 'C05010004', description: 'CUADRO', image: 'C05010004.png', category: 'electrico' },
    { number: 'C06070017', description: 'CARGADOR USB', image: 'C06070017.png', category: 'electrico' },
    // TRANSMISIÓN
    { number: 'C15030022', description: 'KIT RIN TRAS', image: 'C15030022.png', category: 'transmision' },
    { number: 'C14030019', description: 'JUEGO RIN DEL', image: 'C14030019.png', category: 'transmision' },
    { number: 'C02010025', description: 'AMORTIGUADOR TRAS', image: 'C02010025.png', category: 'transmision' },
    { number: 'C02010011', description: 'HORQUILLA TRAS', image: 'C02010011.png', category: 'transmision' },
    { number: 'C01020007', description: 'AMORTIGUADOR DEL DER', image: 'C01020007.png', category: 'transmision' },
    { number: 'C01020008', description: 'AMORTIGUADOR DEL IZQ', image: 'C01020008.png', category: 'transmision' },
    { number: 'C01030021', description: 'BASE MANUBRIO', image: 'C01030021.png', category: 'transmision' },
    { number: 'C01010002', description: 'TELESCOPIO DIRECCION', image: 'C01010002.png', category: 'transmision' },
    // CARROCERÍA
    { number: 'C13010128', description: 'Cubierta Tapa Izquierdo De Tanque Gris', image: 'C13010128.png', category: 'carroceria' },
    { number: 'C13010127', description: 'Cubierta Tapa Derecha De Tanque Gris', image: 'C13010127.png', category: 'carroceria' },
    { number: 'C13010036', description: 'Cubierta Frontal Tanque', image: 'C13010036.png', category: 'carroceria' },
    { number: 'C13010126', description: 'Cubierta Tanque Tras 21-22 Cd', image: 'C13010126.png', category: 'carroceria' },
    { number: 'C09010003', description: 'Faro Delantero 021 - 2025', image: 'C09010003.png', category: 'carroceria' },
    { number: 'C07010015', description: 'Protector De Escape', image: 'C07010015.png', category: 'carroceria' },
    { number: 'C07010014', description: 'ESCAPE', image: 'C07010014.png', category: 'carroceria' },
    { number: 'C03010004', description: 'ASIENTO', image: 'C03010004.png', category: 'carroceria' },
    { number: 'C17010018', description: 'TANQUE COMBUSTIBLE', image: 'C17010018.png', category: 'carroceria' },
    { number: 'C09030004', description: 'CALAVERA TRAS', image: 'C09030004.png', category: 'carroceria' },
    // FRENOS
    { number: 'C14020014', description: 'Disco De Freno Trasero', image: 'C14020014.png', category: 'frenos' },
    { number: 'C14020018', description: 'CALIPER FRENO DEL', image: 'C14020018.png', category: 'frenos' },
    { number: 'C15020009', description: 'CALIPER FRENO TRAS', image: 'C15020009.png', category: 'frenos' },
    // GENERAL
    { number: 'C08010014', description: 'Caja Filtro Aire', image: 'C08010014.png', category: 'general' },
    { number: 'C04040009', description: 'CONJUNTO MANDO DER', image: 'C04040009.png', category: 'general' },
    { number: 'C04040010', description: 'CONJUNTO MANDO IZQ', image: 'C04040010.png', category: 'general' },
    { number: 'C00000001', description: 'Pieza de muestra / Ilustrativa', image: 'C00000001.png', category: 'general' }
 ];

    // ==============================================
    // FUNCIÓN: Obtener ruta correcta de imagen
    // ==============================================

    function getImagePath(item) {
        let basePath = CONFIG.useSubfolder ? '/Hunk160R' : '';
        return `${basePath}/assets/img/${item.image}`;
      }
     // ==============================================
     // FUNCIÓN PRINCIPAL MEJORADA: Crear mensaje con vista previa
     // ==============================================
    function createVisualCard(item) {
        // YA NO enviamos la URL directa de la imagen
        // En su lugar, enviamos la URL de nuestra página preview.html con parámetros
        
        // Codificar la descripción para la URL
        const encodedDesc = encodeURIComponent(item.description);
        
        // Construir la URL de la página de vista previa
        const previewUrl = `${CONFIG.siteUrl}/preview.html?num=${item.number}&desc=${encodedDesc}&img=${item.image}&cat=${item.category}`;
        
        // Crear el mensaje con el nuevo formato
        const message = `🔧 MOTOFIVE - SOLICITUD DE INFORMACIÓN - HERO HUNK 160R 🔧

        ━━━━━━━━━━━━━━━━━━━━━
        📦 *REPUESTO CONSULTADO:*
        └─ ${item.description}

        🆔 *NÚMERO DE PARTE:* 
        └─ ${item.number}

        ━━━━━━━━━━━━━━━━━━━━━
        🔗 *VER IMAGEN Y DETALLES:* 
        ${previewUrl}
        ━━━━━━━━━━━━━━━━━━━━━

        ⏱️ Fecha: ${new Date().toLocaleDateString('es-MX')}
        📍 Tienda: MOTOFIVE México

        _🔍 Quedo atento a disponibilidad y precio_`;

            return encodeURIComponent(message);
        }

    // ==============================================
    // FUNCIÓN: Redirigir a WhatsApp con la tarjeta
    // ==============================================
    function redirectToWhatsApp(item) {
        // Limpiar el número (quitar espacios, guiones, etc.)
        const cleanNumber = CONFIG.whatsappNumber.replace(/\D/g, '');
    
    // Crear el mensaje con formato de tarjeta
    const message = createVisualCard(item);
    
    // Construir la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${message}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // Mostrar notificación de confirmación
    showNotification('✅ Tarjeta enviada a WhatsApp', 'success');
    
    // Registrar la consulta (opcional)
    logConsultation(item);
 }

    // ==============================================
    // FUNCIÓN: Manejar clic en botón WhatsApp
    // ==============================================
    function handleWhatsAppClick(event) {
        const button = event.currentTarget;
        const partNumber = button.dataset.part;
        
        // Buscar el item completo en catalogData
        const item = catalogData.find(p => p.number === partNumber);
    
    if (item) {
        redirectToWhatsApp(item);
    } else {
        // Fallback por si no encuentra el item
        console.error('Item no encontrado:', partNumber);
        showNotification('❌ Error al generar la tarjeta', 'error');
    }
}

    // ==============================================
    // FUNCIÓN: Registrar consultas (opcional)
    // ==============================================
    function logConsultation(item) {
        const consultations = JSON.parse(localStorage.getItem('consultations') || '[]');
        consultations.push({
            partNumber: item.number,
            description: item.description,
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleDateString('es-MX')
        });
    // Guardar solo las últimas 20 consultas
    localStorage.setItem('consultations', JSON.stringify(consultations.slice(-20)));
   }

    // ==============================================
    // FUNCIÓN: Mostrar notificación
    // ==============================================
    function showNotification(message, type = 'info') {
        // Eliminar notificación existente si la hay
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const bgColor = type === 'success' ? '#25D366' : '#ff3300';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${bgColor};
        color: white;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto-eliminar después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

    // ==============================================
    // FUNCIÓN: Filtrar catálogo
    // ==============================================
    function filterCatalog(searchTerm) {
        if (!catalogGrid) return;
        
        const cards = catalogGrid.querySelectorAll('.product-card');
        const term = searchTerm.toLowerCase().trim();
        
        cards.forEach(card => {
            const partNumber = card.querySelector('.part-number')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.part-description')?.textContent.toLowerCase() || '';
            
            if (partNumber.includes(term) || description.includes(term)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // ==============================================
    // FUNCIÓN: Copiar dirección
    // ==============================================
    window.copyAddress = function() {
        const address = "Zapopan, Jalisco, C.P. 45200, México";
        navigator.clipboard.writeText(address).then(() => {
            showNotification("📍 Dirección copiada al portapapeles", "success");
        }).catch(err => {
            console.error("Error al copiar: ", err);
            showNotification("❌ Error al copiar la dirección", "error");
        });
    };

    // ==============================================
    // RENDERIZADO DEL CATÁLOGO
    // ==============================================
    function renderCatalog(data = catalogData) {
        if (!catalogGrid) return;

        catalogGrid.innerHTML = '';

        if (data.length === 0) {
            catalogGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>No hay partes en esta categoría</p>
                </div>
            `;
            return;
        }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', item.category || 'general');

        card.innerHTML = `
            <div class="product-image-frame">
                <div class="quantum-corner corner-1"></div>
                <div class="quantum-corner corner-2"></div>
                <div class="quantum-corner corner-3"></div>
                <div class="quantum-corner corner-4"></div>

                <div class="part-indicator">
                    <i class="fas fa-cube"></i> ${(item.category || 'general').toUpperCase()}
                </div>

                <div class="scale-bar"></div>

                <div class="image-container">
                    <img src="assets/img/${item.image}" 
                         alt="${item.description}"
                         loading="lazy"
                         onerror="this.src='assets/img/C00000000.png'">
                </div>

                <div class="image-overlay">
                    <span><i class="fas fa-expand-alt"></i> ${item.description.substring(0, 25)}${item.description.length > 25 ? '…' : ''}</span>
                </div>
            </div>

            <div class="product-info">
                <span class="part-number">${item.number}</span>
                <div class="part-description">${item.description}</div>
                
                <div class="part-location">
                    <i class="fas fa-store"></i>
                    <span>Disponible en sucursal</span>
                    <span class="stock-badge">En stock</span>
                </div>

                <button class="whatsapp-btn" 
                        data-part="${item.number}"
                        data-description="${item.description}">
                    <i class="fab fa-whatsapp"></i> Info Whatsapp
                </button>
            </div>
        `;

        catalogGrid.appendChild(card);
    });

    // Agregar event listeners a todos los botones
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', handleWhatsAppClick);
    });
  }

    // ==============================================
    // AGREGAR ESTILOS PARA ANIMACIONES
    // ==============================================
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

// ==============================================
// INICIALIZACIÓN
// ==============================================
function init() {
    // Agregar estilos de animación
    addAnimationStyles();
    
    // Renderizar catálogo
    renderCatalog();
    
    // Configurar búsqueda
    if (searchInput) {
        searchInput.addEventListener('input', (e) => filterCatalog(e.target.value));
    }
    
    // Mensaje de bienvenida
    setTimeout(() => {
        showNotification('👋 Bienvenido al catálogo Hunk 160R', 'info');
    }, 1000);
    
    console.log('✅ Catálogo inicializado con formato de tarjeta visual');
    console.log('📱 WhatsApp:', CONFIG.whatsappNumber);
    console.log('🌐 Sitio:', CONFIG.siteUrl);
}

// Iniciar todo
init();
});
