import React from 'react'
import video01 from '../videos/video01.mp4';
const Video = (props, ref) => {
    const videoRef = React.useRef()
    React.useImperativeHandle(ref, () => {
        return {
            player() {
                videoRef.current.play()
            },
            pauser() {
                videoRef.current.pause()
            }
        }
    })
  return (
      <div>
          <video
            // ref={ref}
            ref={videoRef}
            width={250}
            src={video01} />
    </div>
  )
}

export default React.forwardRef(Video)