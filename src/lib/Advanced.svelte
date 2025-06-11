<script>
    import { slide } from 'svelte/transition'

    let {
        html = $bindable(),
        showing = false
    } = $props()
</script>

<h2>
    <span>Advanced </span>
    <button class="button is-small" onclick={() => showing = !showing}>{showing ? 'Hide' : 'Show'}</button>
</h2>

{#if showing}
    <div class="advanced-opts" transition:slide>
        <div class="field">
            <label class="label" for="head">Additional header tags</label>
            <div class="control">
                <textarea class="textarea is-mono is-small"
                    name="head"
                    bind:value={html.head}
                    placeholder={`<link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Montserrat:wght@400..500&display=swap" rel="stylesheet">`}`
                    rows="10"></textarea>
            </div>
        </div>
    
        <div class="field">
            <label class="label" for="css">Additional css styles</label>
            <div class="control">
                <textarea class="textarea is-mono is-small"
                    name="css"
                    bind:value={html.css}
                    placeholder={`body {
      font-weight: bold
      }`}
                    rows="10"></textarea>
            </div>
        </div>
    
        <div class="field">
            <label class="label" for="footer">Footer HTML</label>
            <div class="control">
                <textarea class="textarea is-mono is-small"
                    name="footer"
                    bind:value={html.footer}
                    placeholder={`<footer>Copyright 2025</footer>`}`
                    rows="10"></textarea>
            </div>
        </div>
    </div>
{/if}
