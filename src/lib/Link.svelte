<script>
    import ButtonRadioPicker from "./ButtonRadioPicker.svelte"

    export let name = ""
    export let value = ""
    export let type = "url" // or "copyable"
    // TODO: time-limited
</script>

<div class="card link">
    <div class="card-conten has-text-left">
        <div class="form">
            <div class="field">
                <label class="label" for="name">Button Name</label>
                <div class="control">
                    <input class="input" type="text" name="name" placeholder="Bandcamp" bind:value={name} />
                </div>
            </div>

            <div class="field">
                <label class="label" for="url">{ type === 'url' ? 'Destination' : 'Text' }</label>
                <div class="control">
                    <input class="input" type="text" name="url" placeholder="https://myband.bandcamp.com" bind:value={value} />
                </div>
            </div>

            <ButtonRadioPicker options={{url: "Link", copyable: "Copyable Text"}} bind:value={type} />
        </div>
    </div>
</div>
