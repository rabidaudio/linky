<script>
    import Link from "./Link.svelte"

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
      {name: "Discogs", value: "https://www.discogs.com/user/okay_sure_cool", type: "url" },
      {name: "Letterboxd", value: "https://letterboxd.com/okay_sure_cool", type: "url" },
      {name: "Mastodon", value: "https://hachyderm.io/@okay_sure_cool", type: "url" },
      {name: "BeReal", value: "https://bere.al/okay_sure_cool", type: "url" },
      {name: "Nintendo friend code", value: "SW-5237-4139-3316", type: "copyable" },
    ]
</script>

<style>
.link-container {
    display: flex;
    flex-direction: column;
}
</style>

<div class="link-container">
    {#each links as link }
        <Link {...link} />
    {/each}
</div>
