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
    font-size: 40px;
    color: var(--color-content-primary);
    line-height: 1.2;
    max-width: 1352px;
  }
</style>