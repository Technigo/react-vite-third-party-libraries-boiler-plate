import Lottie from "lottie-react";
import onboarding from "../../assets/animations/onboarding.json";

const style = {
  height: 300,
};

export const LottieComponent = () => {
  return (
    <div>
      {/* Simple Animation using the attribute animationData */}
      <Lottie style={style} animationData={onboarding} />
    </div>
  );
};
