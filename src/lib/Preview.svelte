<script>
    import { render } from './Renderer'

    let iframeEl

    let { config } = $props()

    $effect(() => {
        if (iframeEl) {
            const iframeDoc = iframeEl.contentDocument || iframeEl.contentWindow.document
            iframeDoc.open()
            iframeDoc.write(render(config))
            iframeDoc.close()
        }
    })
</script>

<style>
    iframe {
        width: 100%;
        height: 100vh;
    }
</style>

<iframe title="Preview" bind:this={iframeEl}></iframe>
