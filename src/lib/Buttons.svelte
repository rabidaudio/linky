<script>
	import {flip} from 'svelte/animate'

    import {dragHandleZone} from "svelte-dnd-action"

    import SiteButton from "./SiteButton.svelte"
    import { generateId } from './globalid';
 
    let {
        buttons = $bindable(),
        flipDurationMs = 250,
        dropTargetStyle = {outline: 'var(--bulma-info) solid 2px'}
    } = $props()

    function handleSort (event) {
		buttons = event.detail.items;
	}

    function addButton() {
        buttons = [...buttons, { id: generateId(), name: '', value: '', type: 'url' }]
    }

    function deleteAt(index) {
        buttons = [...buttons.slice(0, index), ...buttons.slice(index+1)]
    }
</script>

<style>
    .button-container {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .add-new {
        border: 1px dashed var(--bulma-border);
        border-radius: 0.75rem;
        padding: 55px 0px; /* (230 - 120) / 2 */
        color: var(--bulma-border);
    }
    .add-new i {
        font-size: 4em;
    }
</style>

<div class="button-container"
        use:dragHandleZone={{items: buttons, flipDurationMs, dropTargetStyle }}
        onconsider={handleSort} onfinalize={handleSort} >
	{#each buttons as button, index (button.id)}
        <div animate:flip="{{ duration: flipDurationMs }}">
            <SiteButton {index} bind:button={buttons[index]} onDelete={() => deleteAt(index)} />
        </div>
	{/each}

    <button class="add-new has-text-centered" onclick={() => addButton()}>
        <i class="ri-add-line"></i>
        <br/>
        <span>Add Button</span>
    </button>
</div>