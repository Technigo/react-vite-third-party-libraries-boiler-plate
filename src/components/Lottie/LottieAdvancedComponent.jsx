import { useRef } from "react";
import Lottie from "lottie-react";
import onboarding from "../../assets/animations/onboarding.json";

export const LottieAdvancedComponent = () => {
  const options = {
    lottieRef: useRef(),
    animationData: onboarding, // A JSON Object with the exported animation data
    loop: true, // Set it to true for infinite amount of loops, or pass a number to specify how many times should the last segment played be looped
    autoplay: false, // If set to true, animation will play as soon as it's loaded
    style: { height: 300, borderRadius: 7 }, // Style object that applies to the animation wrapper (which is a div)
    //initialSegment: [5, 30], // Expects an array of length 2. First value is the initial frame, second value is the final frame. If this is set, the animation will start at this position in time instead of the exported value from AE. The animation will re-run every time the segment array changes. Therefore, to ensure that the animation behaves as expected, you must provide a stable array.
    speed: 20,
    loopComplete: () => console.log("One loop of the animation completed!"),
  };

  let handlePlay = () => {
    console.log("animation is active");
    if (options.lottieRef.current) {
      options.lottieRef.current.play();
    }
  };

  let handleStop = () => {
    console.log("animation is stopped");
    if (options.lottieRef.current) {
      options.lottieRef.current.stop();
    }
  };

  return (
    <>
      {/* <Lottie {...options} /> */}

      <div>
        <Lottie
          lottieRef={options.lottieRef}
          animationData={options.animationData}
          loop={options.loop}
          autoplay={options.autoplay}
          style={options.style}
          initialSegment={options.initialSegment}
          onLoopComplete={options.loopComplete}
          speed={options.speed}
        />
        <div className="lottie-cta-wrapper">
          <button onClick={handlePlay}>Play</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      </div>
    </>
  );
};
