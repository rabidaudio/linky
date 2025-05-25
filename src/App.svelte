<script>
  import SiteBuilder from './lib/SiteBuilder.svelte'
  import Preview from './lib/Preview.svelte'
  import { assignIds } from './lib/globalid';

  let siteConfig = $state({
    meta: {
      title: 'Hello World',
      description: 'my cool site',
    },
    css: {
      body_background: '#ffffff',
      body_color: '#5a5a5a',
      accent_color: '#5095d9',
      on_accent_color: '#ffffff',
      copied_color: '#5051D9',
      link_color: '#D850D9',
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

  .side-by-side {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .editor, .preview {
    flex-basis: 50%;
  }
</style>

<main>
  <div class="side-by-side">
    <div class="editor">
      <SiteBuilder bind:config={siteConfig} />
    </div>
    <div class="preview">
      <Preview config={siteConfig} />
    </div>
  </div>
</main>

