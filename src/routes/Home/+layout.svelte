<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header title="Mijn Professionele App" />

<main class="p-4">
  <slot />  <!-- hier komt de content van de pagina -->
</main>

<Footer />
