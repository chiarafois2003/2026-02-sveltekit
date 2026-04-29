<script lang="ts">
  // Inserisci qui il nome esatto del file del logo che hai nella cartella static/images/
  let logoSrc = "/images/LogoPolimi.svg"; 
</script>

<footer class="footer">
  <img src={logoSrc} alt="Politecnico di Milano 1863" class="polimi-logo" />
</footer>

<style>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    /* Padding abbondante per distanziarlo dall'ultima card */
    padding: var(--spacing-11) var(--spacing-4);
    width: 100%;
    box-sizing: border-box;
    /* margin-top: auto spinge il footer sempre in fondo alla pagina */
    margin-top: auto; 
  }

  .polimi-logo {
    /* Regola questa altezza se il logo ti sembra troppo grande o piccolo */
    height: 80px; 
    max-width: 100%;
    object-fit: contain;
    /* Se il tuo logo è nero e lo vuoi bianco su dark mode, 
       potrebbe servire un filtro CSS, ma l'ideale è avere l'SVG già bianco/trasparente */
  }

  /* Selettore che si attiva SOLO quando la pagina è in dark mode */
  :global([data-theme='dark']) .polimi-logo,
  :global(:root:not([data-theme='light'])) .polimi-logo {
    filter: invert(1) brightness(2); /* Trasforma il nero in bianco puro */
  }

  /* --- REGOLE MOBILE --- */
  @media (max-width: 768px) {
    .footer {
      /* Padding leggermente ridotto su mobile per bilanciare gli spazi */
      padding: var(--spacing-8) var(--spacing-4) var(--spacing-11) var(--spacing-4);
    }

    .polimi-logo {
      height: 40px; /* Logo leggermente più piccolo su schermi stretti */
    }
  }
</style>