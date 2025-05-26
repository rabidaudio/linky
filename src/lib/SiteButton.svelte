<script>
    import {dragHandle} from "svelte-dnd-action"

    import ButtonRadioPicker from "./ButtonRadioPicker.svelte"

    let {
        index = 0,
        //     name = "",
        //     value = "",
        //     type = "url", // or "copyable"
        //     openInNewTab = false,
        button = $bindable(),
        onDelete = () => {}
    } = $props()
    // TODO: time-limited
</script>

<div class="card">
    <header class="card-header">
        <p class="card-header-title">
            <span>Button {index+1}&nbsp;</span>
            <button aria-label="Delete Button" onclick={(e) => onDelete()}>
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
                        <ButtonRadioPicker options={{url: "Link", copyable: "Copyable Text"}} bind:value={button.type} />
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
                            <input class="input is-small" type="text" name="name" placeholder={button.type==='url' ? "Bandcamp" : 'Booking'} bind:value={button.name} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label" for="url">{ button.type === 'url' ? 'Destination' : 'Text' }</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input is-small" type="text" name="url" placeholder={ button.type === 'url' ? "https://myband.bandcamp.com" : 'band@myband.com'} bind:value={button.value} />
                            {#if button.type === 'url'}
                                <br/>
                                <label class="checkbox is-size-7">
                                    <input type="checkbox" name="new-tab" bind:checked={button.openInNewTab} />
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
