<script lang="ts">
  // 1. Il sito nasce sempre scuro
  let theme = $state("dark");

  // 2. Appena il componente si carica nel browser...
  $effect(() => {
    // Cerchiamo nella memoria del browser se l'utente era già venuto qui
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      // Se troviamo una sua scelta passata (es. aveva cliccato "light"), la applichiamo!
      theme = savedTheme;
    } else {
      // Se è la primissima volta in assoluto, assicuriamoci che sia "dark"
      theme = "dark";
    }

    // Comunichiamo la decisione finale al file CSS
    document.documentElement.setAttribute("data-theme", theme);
  });

  // 3. Quando l'utente preme il bottone...
  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    // Salviamo la sua nuova preferenza nella memoria del browser
    localStorage.setItem("theme", theme); 
    document.documentElement.setAttribute("data-theme", theme);
  }
</script>

<button class="theme-toggle" onclick={toggleTheme} aria-label="Cambia tema">
  {#if theme === 'dark'}
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  {:else}
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: var(--radius-s);
    border: none;
    /* Usa i colori che abbiamo definito in colors.css! */
    background-color: var(--color-filters-bg-default); 
    color: var(--color-content-primary);
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
  }

  .theme-toggle:hover {
    background-color: var(--color-filters-bg-active);
    color: var(--color-link-hover); /* Tocco di classe col tuo Brand color */
    transform: scale(1.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
</style>