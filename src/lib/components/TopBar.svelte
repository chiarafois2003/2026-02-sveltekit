<script lang="ts">
  import LinkDesktop from "./LinkDesktop.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<header class="top-bar">
  <div class="logo">
    <LinkDesktop text="MOKADO" leadingIcon={false} trailingIcon={false} href="/" />
  </div>
  <nav class="nav">
    <LinkDesktop text="About" leadingIcon={false} trailingIcon={false} href="/" />
    <ThemeToggle />
  </nav>
</header>

<style>
  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-5) var(--spacing-11);
    width: 100%;
    box-sizing: border-box;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
  }

  /* --- REGOLE MOBILE --- */
  @media (max-width: 768px) {
    .top-bar {
      /* Allineiamo i margini laterali a quelli della Hero e della Griglia (spacing-4) */
      padding: var(--spacing-4) var(--spacing-4);
    }
  }
</style>