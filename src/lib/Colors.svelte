<script>
import ColorPicker, { A11yVariant } from 'svelte-awesome-color-picker'

let {
    colors = $bindable()
} = $props()

let copiedColor = $derived(colors.copied || colors.accent)
let linkColor = $derived(colors.link || colors.accent)

</script>

<style>
    :global(.color) {
        filter: drop-shadow(0 0 0.05em black);
    }

    .color-container {
        display: flex;
        flex-direction: column;
    }
</style>

<h2>Theme</h2>
<div>
    <div class="color-container">
        <ColorPicker
            bind:hex={colors.background}
            position="responsive" label="Background color"/>

        <ColorPicker
            components={A11yVariant}
            bind:hex={colors.body}
            position="responsive" label="Body text color"
            a11yColors={[
                { bgHex: colors.background, placeholder: 'background' }
            ]}/>
        
        <ColorPicker
            bind:hex={colors.accent}
            position="responsive" label="Accent color"/>
        
        <ColorPicker
            components={A11yVariant}
            bind:hex={colors.onAccent}
            position="responsive" label="Text on accent color"
            a11yColors={[
                { bgHex: colors.accent, placeholder: 'background' }
            ]}/>

        <ColorPicker
            hex={copiedColor}
            onInput={({hex}) => { if (hex != copiedColor) { colors.copied = hex }}}
            position="responsive" label="Copied color"/>

        <ColorPicker
            hex={linkColor}
            onInput={({hex}) => { if (hex != linkColor) { colors.link = hex }}}
            position="responsive" label="Link color"/>
    </div>
</div>
