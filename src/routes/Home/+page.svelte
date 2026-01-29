<script lang="ts">
  import { onMount } from 'svelte';

  let data: any = null;

  onMount(async () => {
    const res = await fetch('/api/hotels'); // server-side endpoint
    data = await res.json();
  });
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>
