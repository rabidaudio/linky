<script>
    import Colors from "./Colors.svelte"
    import Buttons from "./Buttons.svelte"
    import Advanced from "./Advanced.svelte";

    let { config = $bindable() } = $props()
</script>

<div>
    <h1>Customize Site</h1>

    <Colors bind:colors={config.colors}/>

    <h2>Content</h2>
    <div class="content form">
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label" for="name">Title</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input is-small" type="text" name="title"
                        placeholder="My Site" bind:value={config.content.title} />
                    </div>
                </div>
            </div>
        </div>
    
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label" for="name">Subtitle</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input is-small" type="text" name="subtitle"
                        placeholder="The coolest place on the web" bind:value={config.content.subtitle} />
                    </div>
                </div>
            </div>
        </div>
    
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label" for="name">Body</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input is-small" type="text" name="body"
                        placeholder="Where to find me online" bind:value={config.content.body} />
                    </div>
                </div>
            </div>
        </div>
    
        <Advanced bind:html={config.html} />
    </div>
    
    <h2>Buttons</h2>
    <Buttons bind:buttons={config.buttons} />    
</div>
