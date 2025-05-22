<script>
	import {dndzone} from 'svelte-dnd-action'
	import {flip} from 'svelte/animate'

    import Link from "./Link.svelte"

    const flipDurationMs = 200


	export let links = [
        {id: 1, name: "Stolen Velour", value: "https://stolenvelour.music", type: "url" },
        {id: 2, name: "BlueSky", value: "https://bsky.app/profile/okaysure.cool", type: "url" },
        {id: 3, name: "Instagram", value: "https://www.instagram.com/okay_sure_cool", type: "url" },
        {id: 4, name: "Discord", value: "okay_sure_cool", type: "copyable" },
        {id: 5, name: "Blog", value: "https://rabid.audio", type: "url" },
        {id: 6, name: "Bandcamp", value: "https://bandcamp.com/rabidaudio", type: "url" },
        {id: 7, name: "Last.FM", value: "https://last.fm/user/rabidaudio", type: "url" },
        {id: 8, name: "Songkick (concert history)", value: "https://www.songkick.com/users/rabidaudio/gigography", type: "url" },
        {id: 9, name: "Twitch", value: "https://twitch.tv/okay_sure_cool", type: "url" },
        {id: 10, name: "Discogs", value: "https://www.discogs.com/user/okay_sure_cool", type: "url" },
        {id: 11, name: "Letterboxd", value: "https://letterboxd.com/okay_sure_cool", type: "url" },
        {id: 12, name: "Mastodon", value: "https://hachyderm.io/@okay_sure_cool", type: "url" },
        {id: 13, name: "BeReal", value: "https://bere.al/okay_sure_cool", type: "url" },
        {id: 14, name: "Nintendo friend code", value: "SW-5237-4139-3316", type: "copyable" },
    ]

    function handleSort(e) {
		links = e.detail.items;
	}

    $: console.log(links.map(l => l.name).join(", "))
</script>

<style>
.link-container {
    display: flex;
    flex-direction: column;
}
</style>

<div class="link-container" use:dndzone={{items: links, dropTargetStyle: {outline: 'var(--bulma-info) solid 2px'} }}
on:consider={handleSort} on:finalize={handleSort}>
	{#each links as link (link.id)}
        <Link {...link} />
	{/each}
</div>