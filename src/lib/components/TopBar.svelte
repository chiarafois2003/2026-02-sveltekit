<script lang="ts">
  import LinkDesktop from "./LinkDesktop.svelte";
</script>

<header class="top-bar">
  <div class="logo">
    <LinkDesktop text="MOKADO" leadingIcon={false} trailingIcon={false} href="/" />
  </div>
  <nav class="nav">
    <LinkDesktop text="About" leadingIcon={false} trailingIcon={false} href="/" />
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
</style>