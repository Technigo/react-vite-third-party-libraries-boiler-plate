// Import the styled function from the "styled-components" library.
import styled from "styled-components";

// Define a styled "Title" component that will render as an <h1> HTML element.
const Title = styled.h1`
  //Set the font size for the title.
  font-size: 1.5em;

  // Center-align the text of the title.
  text-align: center;

  // Set the text color of the title.
  color: #fafafa;
`;

// Define a styled "Wrapper" component that will render as a <section> HTML element.
const Wrapper = styled.section`
  // Set the inner padding for the wrapper.
  padding: 4em;

  // Set the background color of the wrapper.
  background: blue;
`;

// Define a React functional component that uses the styled "Title" and "Wrapper" components.
export const StyledComponentExample = () => {
  // Return a JSX element containing the styled components.
  return (
    //Create a container div.
    <div>
      {/* Render the "Wrapper" styled component. */}
      <Wrapper>
        {/* Inside the "Wrapper", render the "Title" styled component with the
        text "Hello World!". */}
        <Title>Hello World!</Title>
      </Wrapper>
    </div>
  );
};
