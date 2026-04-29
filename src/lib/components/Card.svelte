<script lang="ts">
  interface Props {
    image: string;
    title: string;
    category: string;
  }

  let { image, title, category }: Props = $props();

  // 1. LA MAGIA: Questa funzione controlla quando la card entra nello schermo
  function scrollReveal(node: HTMLElement) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Se la card sta entrando nello schermo...
        if (entry.isIntersecting) {
          // ...aggiungi la classe CSS che fa partire l'animazione!
          node.classList.add('revealed');
          // Smetti di osservarla (così l'animazione viene fatta una volta sola)
          observer.unobserve(node); 
        }
      });
    }, {
      threshold: 0.15 // L'animazione parte quando il 15% della card è visibile
    });

    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }
</script>

<div class="card" use:scrollReveal>
  <div class="card-image">
    <img src={image} alt={title} loading="lazy" decoding="async" />
  </div>
  <div class="card-content">
    <div class="card-text">
      <p class="title">{title}</p>
      <p class="category">/ {category}</p>
    </div>
    <div class="card-arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  </div>
</div>

<style>
  /* --- STATO INIZIALE (NASCOSTO) --- */
  .card {
    background-color: var(--color-background-primary);
    border-radius: var(--radius-m);
    display: flex;
    flex-direction: column;
    cursor: pointer;
    
    /* Le card partono invisibili e spostate 40px verso il basso */
    opacity: 0;
    transform: translateY(40px);
    /* Animazione di entrata molto morbida */
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* --- STATO RIVELATO (QUANDO ENTRA NELLO SCHERMO) --- */
  .card.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  /* --- EFFETTO HOVER DEL MOUSE (SOLO QUANDO LA CARD È GIÀ RIVELATA) --- */
  .card.revealed:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    /* Cambiamo la transizione per renderla più scattante al passaggio del mouse */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card-image {
    aspect-ratio: 664 / 401;
    border-radius: var(--radius-m);
    overflow: hidden;
    width: 100%;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* --- SEZIONE CONTENUTO --- */
  .card-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-3) var(--spacing-3) 0 var(--spacing-3);
    width: 100%;
    box-sizing: border-box;
    transition: background-color 0.3s ease, padding-bottom 0.3s ease;
  }

  .card.revealed:hover .card-content {
    background-color: var(--brand-500);
    padding-bottom: var(--spacing-3);
  }

  .card-text {
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    white-space: nowrap;
  }

  .title {
    margin: 0;
    color: var(--color-content-primary);
    transition: color 0.3s ease;
  }

  .category {
    margin: 0;
    color: var(--color-content-secondary);
    transition: color 0.3s ease;
  }

  .card.revealed:hover .title {
    color: var(--neutral-50);
  }

  .card.revealed:hover .category {
    color: var(--brand-100);
  }

  /* --- FRECCIA --- */
  .card-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: var(--color-content-primary);
    opacity: 0; 
    transform: translateX(-10px); 
    transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  }

  .card.revealed:hover .card-arrow {
    opacity: 1; 
    transform: translateX(0); 
    color: var(--neutral-50); 
  }

  .card-arrow svg {
    width: 100%;
    height: 100%;
  }

  /* --- REGOLE MOBILE --- */
  @media (max-width: 768px) {
    .card {
      /* Manteniamo l'animazione di entrata morbida, ma togliamo gli altri effetti hover */
      transition: opacity 0.8s ease, transform 0.8s ease;
      overflow: visible; 
      background-color: transparent;
    }
    
    .card.revealed:hover {
      transform: none;
      box-shadow: none;
    }

    .card-content {
      padding: var(--spacing-2) var(--spacing-2) var(--spacing-1) var(--spacing-2); 
      display: block; 
      width: 100%;
      box-sizing: border-box;
      overflow: hidden; 
      text-overflow: ellipsis; 
      white-space: nowrap; 
    }

    .card.revealed:hover .card-content {
      background-color: transparent;
      padding-bottom: var(--spacing-1); 
    }

    .card-text {
      font-size: 16px;
      display: inline; 
      color: inherit;
    }

    .title, .category {
      margin: 0;
      display: inline; 
      font-size: inherit;
    }

    .title { color: var(--color-content-primary); }
    .category { color: var(--color-content-secondary); }
    .card.revealed:hover .title { color: var(--color-content-primary); }
    .card.revealed:hover .category { color: var(--color-content-secondary); }

    .card-arrow {
      display: none; 
    }
  }
</style>