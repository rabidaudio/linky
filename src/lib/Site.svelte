<script>
	import {flip} from 'svelte/animate'

    import {dragHandleZone} from "svelte-dnd-action"

    import Link from "./Link.svelte"

    const flipDurationMs = 250

	export let links = [
        {name: "Stolen Velour", value: "https://stolenvelour.music", type: "url" },
        {name: "BlueSky", value: "https://bsky.app/profile/okaysure.cool", type: "url" },
        {name: "Instagram", value: "https://www.instagram.com/okay_sure_cool", type: "url" },
        {name: "Discord", value: "okay_sure_cool", type: "copyable" },
        {name: "Blog", value: "https://rabid.audio", type: "url" },
        {name: "Bandcamp", value: "https://bandcamp.com/rabidaudio", type: "url" },
        {name: "Last.FM", value: "https://last.fm/user/rabidaudio", type: "url" },
        {name: "Songkick (concert history)", value: "https://www.songkick.com/users/rabidaudio/gigography", type: "url" },
        {name: "Twitch", value: "https://twitch.tv/okay_sure_cool", type: "url" },
        { name: "Discogs", value: "https://www.discogs.com/user/okay_sure_cool", type: "url" },
        { name: "Letterboxd", value: "https://letterboxd.com/okay_sure_cool", type: "url" },
        { name: "Mastodon", value: "https://hachyderm.io/@okay_sure_cool", type: "url" },
        { name: "BeReal", value: "https://bere.al/okay_sure_cool", type: "url" },
        { name: "Nintendo friend code", value: "SW-5237-4139-3316", type: "copyable" },
    ]

    function handleSort (event) {
		links = event.detail.items;
	}

    function addButton() {
        links = [...links, { name: '', value: '', type: 'url' }]
    }

    function deleteAt(index) {
        links = [...links.slice(0, index), ...links.slice(index+1)]
    }

    // every element to draggable has to have a unique id so we assign arbitrary ones
    // when the component is initialized
    const generateId = () => (new Date().getTime() * 100_000) + Math.round(Math.random()*100_000)
    $: linksWithIds = links.map(l => ({ id: generateId(), ...l }))
</script>

<style>
.link-container {
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

<div class="link-container" use:dragHandleZone={{items: linksWithIds, flipDurationMs, dropTargetStyle: {outline: 'var(--bulma-info) solid 2px'} }}
on:consider={handleSort} on:finalize={handleSort}>
	{#each linksWithIds as link, index (link.id)}
        <div animate:flip="{{ duration: flipDurationMs }}">
            <Link {...link} {index} onDelete={() =>  deleteAt(index)} />
        </div>
	{/each}

    <button class="add-new has-text-centered" on:click={() => addButton()}>
        <i class="ri-add-line"></i>
        <br/>
        <span>Add Button</span>
    </button>
</div>