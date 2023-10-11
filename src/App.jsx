import { Logos } from "./components/Logos";
import { LottieComponent } from "./components/Lottie/LottieComponent";
import { LottieAdvancedComponent } from "./components/Lottie/LottieAdvancedComponent";
import { StyledComponentExample } from "./components/styledComponents/StyledComponentExample";
import { StyledComponentWithPropsExample } from "./components/styledComponents/StyledComponentWithPropsExample";
import { StyledExtendedExample } from "./components/styledComponents/StyledExtendedExample";
import { TranslateComponent } from "./components/Internationalization/TranslateComponent";
import { DateDisplay } from "./components/Moment/DateDisplay";

export const App = () => {
  // Staticc Data Inyected through {} reference
  const appContent = {
    heading: "Technigo - Third Party Libraries Boilerplate",
    reactivedataExampleOne:
      "Within this repo you can find a working example of all the third party libraries",
    subHeadingOne: "Lottie Animations",
    subHeadingTwo: "Styled Components",
    subHeadingThree: "Internationalisation Components",
    subHeadingFour: "Moment.js Components",
  };
  return (
    <>
      {/* Component Example */}
      <Logos />
      <h1>{appContent.heading}</h1>
      <p>{appContent.reactivedataExampleOne}</p>
      <div className="wrapper">
        <p>
          <strong>{appContent.subHeadingOne}</strong>
        </p>
        <div className="flex">
          <LottieComponent />
          <LottieAdvancedComponent />
        </div>
      </div>
      <div className="wrapper">
        <p>
          <strong>{appContent.subHeadingTwo}</strong>
        </p>
        <div>
          <StyledComponentExample />
          <StyledComponentWithPropsExample />
          <StyledExtendedExample />
        </div>
      </div>
      <div className="wrapper">
        <p>
          <strong>{appContent.subHeadingThree}</strong>
        </p>
        <TranslateComponent />
      </div>
      <div className="wrapper">
        <p>
          <strong>{appContent.subHeadingFour}</strong>
        </p>
        <DateDisplay />
      </div>
    </>
  );
};
