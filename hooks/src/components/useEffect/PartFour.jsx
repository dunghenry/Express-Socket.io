import React from 'react'

const PartFour = () => {
    const [countdown, setCountdown] = React.useState(100);
    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCountdown(prev => prev - 1);
    //     }, 1000);
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])
    //Cleanup function luôn được gọi trước khi component unmounted
    //Cleanup function luôn được gọi trước khi callback được gọi trừ lần đầu tiên
    React.useEffect(() => {
        const timer = setTimeout(() => {
            console.log(countdown)
            setCountdown(countdown - 1);
        }, 1000);
        return () => {
            // clearTimeout(timer)
        }
    }, [countdown])


  return (
      <div>
          {countdown}
    </div>
  )
}

export default PartFour