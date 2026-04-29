<script lang="ts">
  interface Props {
    text?: string;
  }

  let { text = "A visual journey through different flavors, from my kitchen to your screen." }: Props = $props();
</script>

<section class="hero">
  <h1>{text}</h1>
</section>

<style>
  .hero {
    display: flex;
    align-items: center;
    padding: var(--spacing-11);
    width: 100%;
    box-sizing: border-box;
  }

  h1 {
    margin: 0;
    font-family: var(--font-primary);
    font-weight: 500;
    /* La magia di clamp: minimo 32px, cresce col display, massimo 64px */
    font-size: clamp(32px, 6vw, 64px);
    color: var(--color-content-primary);
    line-height: 1.2;
    max-width: 1352px;
  }

  /* Riduciamo il padding generale per allinearlo alla griglia su mobile */
  @media (max-width: 768px) {
    .hero {
      padding: var(--spacing-6) var(--spacing-4);
    }
  }
</style>