<script>
    import ButtonRadioPicker from "./ButtonRadioPicker.svelte"

    let {
        img = $bindable()
    } = $props()

    let hasImg = $derived(img != null && img != '')
    let type = $state('file')
    let fileName = $state('')

    function uploadImage(event) {
        // console.log(event.target.files)
        if (event.target.files.length > 0) {
            const f = event.target.files[0]
            fileName = f.name
            const fr = new FileReader()
            fr.onload = (e) => img = e.target.result
            fr.readAsDataURL(f)
        }
    }
</script>

<style>
    .img-field {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
    }

    .img-preview {
        width: 100px;
        height: 100px;
        display: flex;
    }

    .img-preview img {
        width: 100%;
    }

    .img-preview.placeholder {
        border: 1px dashed var(--bulma-border);
        border-radius: 0.75rem;
        color: var(--bulma-border);
    }
</style>

<div class="img-field">

    <div class={["img-preview", hasImg ? '' : 'placeholder']}>
        {#if img}
            <img src={img} alt='' />
        {/if}
    </div>

    <div class="form">
        <div class="field">
            <ButtonRadioPicker options={{
                file: "Upload", url: "Link"
            }} bind:value={type} />
        </div>
    
        {#if type === 'url'}
            <div class="field">
                <div class="control">
                    <input class="input is-small"
                    type="text"
                    name="url"
                    placeholder="https://link.to/my/image.jpg"
                    bind:value={img} />
                </div>
            </div>
        {:else}
            <div class="field">
                <div class="control">
                    <div class="file">
                        <label class="file-label">
                            <input class="file-input" type="file" name="file"
                                onchange={uploadImage}/>
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label"> Choose a file… </span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        {/if}
    </div>    
</div>
