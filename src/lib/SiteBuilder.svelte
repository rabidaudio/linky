<script>
    import Buttons from "./Buttons.svelte"

    let { config = $bindable() } = $props()
</script>

<input bind:value={config.content.title} />

<Buttons bind:buttons={config.buttons} />
