<script lang="ts">
  interface Props {
    image: string;
    title: string;
    category: string;
  }

  let { image, title, category }: Props = $props();
</script>

<div class="card">
  <div class="card-image">
    <img src={image} alt={title} />
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
  .card {
    background-color: var(--color-background-primary);
    border-radius: var(--radius-m);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .card-image {
    aspect-ratio: 664 / 401;
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
    /* Transizione per il cambio colore dello sfondo */
    transition: background-color 0.3s ease, padding-bottom 0.3s ease;
  }

  /* Hover: il background si riempie del colore accento */
  .card:hover .card-content {
    background-color: var(--brand-500);
    padding-bottom: var(--spacing-3); /* Riequilibra visivamente lo spazio */
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

  /* --- TITOLO E CATEGORIA --- */
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

  /* Hover: adattamento dei colori dei testi per il contrasto */
  .card:hover .title {
    color: var(--neutral-50); /* Titolo bianco per leggibilità */
  }

  .card:hover .category {
    color: var(--brand-100); /* Categoria azzurro chiaro per staccare leggermente */
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
    
    /* Stato iniziale: invisibile e spostata */
    opacity: 0; 
    transform: translateX(-10px); 
    transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  }

  /* Hover: la freccia appare e diventa bianca */
  .card:hover .card-arrow {
    opacity: 1; 
    transform: translateX(0); 
    color: var(--neutral-50); 
  }

  .card-arrow svg {
    width: 100%;
    height: 100%;
  }

/* --- REGOLE MOBILE AGGIORNATE --- */
  @media (max-width: 768px) {
    .card {
      /* Disabilita l'animazione al tap per mobile */
      transition: none; 
      /* I bordi tondi e l'overflow: hidden vengono mantenuti dal CSS desktop */
    }
    
    .card:hover {
      transform: none;
      box-shadow: none;
    }

    .card-content {
      /* Aggiungiamo un leggero padding laterale per evitare che il testo venga tagliato dagli angoli */
      padding: var(--spacing-2) var(--spacing-2) var(--spacing-1) var(--spacing-2); 
      display: block; /* Gestisce il text-overflow del testo */
      width: 100%;
      box-sizing: border-box;
      overflow: hidden; 
      text-overflow: ellipsis; /* Aggiunge i puntini se troppo lungo */
      white-space: nowrap; 
    }

    /* Annulliamo l'effetto sfondo azzurro al tap su mobile */
    .card:hover .card-content {
      background-color: transparent;
      padding-bottom: var(--spacing-1); /* Mantiene il bilanciamento col padding base */
    }

    .card-text {
      font-size: 16px;
      display: inline; /* Tratta titolo e categoria come testo continuo */
      color: inherit;
    }

    .title, .category {
      margin: 0;
      display: inline; 
      font-size: inherit;
    }

    /* Mantieni i colori originali al tap */
    .title {
      color: var(--color-content-primary);
    }
    .category {
      color: var(--color-content-secondary);
    }

    .card:hover .title { color: var(--color-content-primary); }
    .card:hover .category { color: var(--color-content-secondary); }

    /* Nascondi la freccia completamente su mobile */
    .card-arrow {
      display: none; 
    }
  }
  
  </style>

