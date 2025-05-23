<script>
    export let options = {}
    export let value = null
</script>

<div class="field has-addons">
    {#each Object.entries(options) as [key, name] }
        <div class="control">
            <button
                    class="button is-small {key === value ? 'is-info' : ''}"
                    on:click={(e) => value = key}>
                {name}
            </button>
        </div>        
    {/each}
</div>