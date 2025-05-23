<script>
    import {dragHandle} from "svelte-dnd-action"

    import ButtonRadioPicker from "./ButtonRadioPicker.svelte"

    export let index = 0
    export let name = ""
    export let value = ""
    export let type = "url" // or "copyable"
    export let openInNewTab = false
    // TODO: time-limited

    export let onDelete = () => {}
</script>

<div class="card">
    <header class="card-header">
        <p class="card-header-title">
            <span>Button {index+1}&nbsp;</span>
            <button aria-label="Delete Button" on:click={onDelete}>
                <i class="ri-delete-bin-5-line" ></i>
            </button>
        </p>
        <div class="card-header-icon">
            <i use:dragHandle class="ri-drag-move-2-fill"></i>
        </div>
    </header>
    <div class="card-content">
        <div class="content form">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <!-- <label class="label" for="type">Type</label> -->
                </div>
                <div class="field-body">
                    <div class="field">
                        <ButtonRadioPicker options={{url: "Link", copyable: "Copyable Text"}} bind:value={type} />
                    </div>
                </div>
            </div>


            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label" for="name">Title</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" name="name" placeholder={type==='url' ? "Bandcamp" : 'Booking'} bind:value={name} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label" for="url">{ type === 'url' ? 'Destination' : 'Text' }</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" name="url" placeholder={ type === 'url' ? "https://myband.bandcamp.com" : 'band@myband.com'} bind:value={value} />
                            {#if type === 'url'}
                                <br/>
                                <label class="checkbox">
                                    <input type="checkbox" name="new-tab" bind:checked={openInNewTab} />
                                    Open in new tab
                                </label>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
