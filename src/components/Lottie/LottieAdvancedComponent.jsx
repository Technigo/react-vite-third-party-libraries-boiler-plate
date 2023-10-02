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
    loopComplete: () => console.log("One loop of the animation completed!"), // Performs an action once the loop completes
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
      <div>
        <Lottie
          lottieRef={options.lottieRef}
          animationData={options.animationData}
          loop={options.loop}
          autoplay={options.autoplay}
          style={options.style}
          onLoopComplete={options.loopComplete}
        />
        <div className="lottie-cta-wrapper">
          <button onClick={handlePlay}>Play</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      </div>
    </>
  );
};
