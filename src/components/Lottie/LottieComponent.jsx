import Lottie from "lottie-react";
import onboarding from "../../assets/animations/onboarding.json";

export const LottieComponent = () => {
  const style = {
    height: 300,
  };
  return (
    <div>
      {/* Simple Animation using the attribute animationData */}
      <Lottie style={style} animationData={onboarding} />
    </div>
  );
};
