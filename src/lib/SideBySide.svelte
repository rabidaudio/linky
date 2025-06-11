<!-- This component on wide screens shows editor and
 preview side-by-side. For narrow screens, instead it shows a floating
 "Preview" button which opens a modal -->
<script>
    let {
        editor = $bindable(),
        preview = $bindable()
    } = $props()

    let innerWidth = $state(0)
    let isWide = $derived(innerWidth >= 750)
    let isModalOpen = $state(false)
</script>

<style>
  .side-by-side {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .editor, .preview {
    flex-basis: 50%;
  }

  .editor {
    margin: 1em;
  }

  .preview {
    border: 0px solid black;
    border-left-width: 1px;
  }

  .open-preview {
    position: fixed;
    bottom: 1em;
    right: 1em;
  }
</style>

<svelte:window bind:innerWidth />

{#if isWide}
    <div class="side-by-side">
        <div class="editor">
            {@render editor()}
        </div>
        <div class="preview">
            {@render preview()}
        </div>
  </div>
{:else}
    <div class="editor">
        {@render editor()}
    </div>
    {#if !isModalOpen}
        <button class="button is-primary open-preview"
            onclick={() => isModalOpen = true}>Open Preview</button>
    {/if}
    <div class={['modal', isModalOpen ? 'is-active' : '']}>
        <div class="modal-background"></div>
        <div class="modal-content">
            {@render preview()}
        </div>
        <button class="modal-close is-large" aria-label="close"
            onclick={() => isModalOpen = false}></button>
    </div>
{/if}
