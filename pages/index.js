import Player from '../components/Player'
import PlayerCSS from '../components/PlayerCss'

const Index = () => {


  const videoJsOptions = {
    autoplay: false,
    controls: true,
    width:'500',
    sources: [
      {
        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'video/mp4',
      },
    ],
  }

  return (
    <>
      <Player {...videoJsOptions} />
      <PlayerCSS />
      <style jsx global>{`
        button.vjs-big-play-button{
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%);
      }
        `}
      </style>
    </>
  )

}

export default Index
