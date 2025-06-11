<script>
  import SiteBuilder from './lib/SiteBuilder.svelte'
  import Preview from './lib/Preview.svelte'
  import SideBySide from './lib/SideBySide.svelte'

  import { assignIds } from './lib/globalid'

  let siteConfig = $state({
    html: {
      head: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="gravatar.com">
<link href="https://cdn.jsdelivr.net/npm/modern-normalize@v2.0.0/modern-normalize.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Montserrat:wght@400..500&display=swap" rel="stylesheet">

<meta property="og:image"
  content="https://gravatar.com/avatar/ea37a9bda1040afc917f98ee745b64f2663d1443a6cb7248a0dff43d0ae779d5?s=400" />
<link rel="me" href="https://hachyderm.io/@okay_sure_cool" />`,
    css: `body {
  font-family:  Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
}
pre, code {
 font-family: "Cutive Mono", monospace;
}
.heart {
  font-size: inherit;
  color: var(--accent-color);
  vertical-align: sub;
}`,
    footer: `
<footer>
    <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1">CC-BY-SA 4.0</a>.
    Made with <span class="material-icons heart">favorite</span> in Atlanta.
</footer>`,
    },
    img: {
      avatar: 'https://gravatar.com/avatar/ea37a9bda1040afc917f98ee745b64f2663d1443a6cb7248a0dff43d0ae779d5?s=400'
    },
    meta: {
      title: 'Hello World',
      description: 'my cool site',
    },
    colors: {
      background: '#ffffff',
      body: '#5a5a5a',
      accent: '#5095d9',
      onAccent: '#ffffff',
      copied: '#5051D9',
      link: '#D850D9',
    },
    content: {
      title: 'Hello World',
      subtitle: 'my cool site',
      body: null
    },
    buttons: assignIds([
      { name: "Stolen Velour", value: "https://stolenvelour.music", type: "url" },
      { name: "BlueSky", value: "https://bsky.app/profile/okaysure.cool", type: "url" },
      { name: "Instagram", value: "https://www.instagram.com/okay_sure_cool", type: "url" },
      { name: "Discord", value: "okay_sure_cool", type: "copyable" },
      { name: "Blog", value: "https://rabid.audio", type: "url" },
      { name: "Bandcamp", value: "https://bandcamp.com/rabidaudio", type: "url" },
      { name: "Last.FM", value: "https://last.fm/user/rabidaudio", type: "url" },
      { name: "Songkick (concert history)", value: "https://www.songkick.com/users/rabidaudio/gigography", type: "url" },
      { name: "Twitch", value: "https://twitch.tv/okay_sure_cool", type: "url" },
      { name: "Discogs", value: "https://www.discogs.com/user/okay_sure_cool", type: "url" },
      { name: "Letterboxd", value: "https://letterboxd.com/okay_sure_cool", type: "url" },
      { name: "Mastodon", value: "https://hachyderm.io/@okay_sure_cool", type: "url" },
      { name: "BeReal", value: "https://bere.al/okay_sure_cool", type: "url" },
      { name: "Nintendo friend code", value: "SW-5237-4139-3316", type: "copyable" },
    ])
  })
  
</script>

<style>
  main {
    margin: auto;
  }

</style>

{#snippet editor()}
  <SiteBuilder bind:config={siteConfig} />  
{/snippet}

{#snippet preview()}
  <Preview config={siteConfig} />  
{/snippet}

<main class="content">
  <SideBySide {editor} {preview} />
</main>
