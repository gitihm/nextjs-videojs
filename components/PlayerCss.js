import 'videojs-youtube'

const PlayerCSS = () => {
  return (
    <>
      <h1>The implementation below is without react functions</h1>
      <div data-vjs-player>
        <video
          id="my-video"
          className="video-js vjs-theme-city"
          playsInline
          controls
          preload="auto"
          width="500"
          data-setup='{ "sources": [{ "type": "video/mp4", "src": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}] }'
        ></video>
      </div>
    </>
  )
}

export default PlayerCSS
