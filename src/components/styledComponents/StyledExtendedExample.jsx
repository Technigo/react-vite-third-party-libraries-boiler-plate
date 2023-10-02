// Import the styled function from the "styled-components" library.
import styled from "styled-components";

// Define a styled "Button" component that will render as a <button> HTML element.
const Button = styled.button`
  // Set the text color of the button.
  color: #bf4f74;

  // Set the font size for the button text.
  font-size: 1em;

  // Set the outer margin for the button.
  margin: 1em;

  // Set the inner padding for the button.
  padding: 0.25em 1em;

  // Set the border style and color for the button.
  border: 2px solid #bf4f74;

  // Set the border radius (rounded corners) for the button.
  border-radius: 3px;
`;

// Define a new styled component "TomatoButton" based on the "Button" component.
const TomatoButton = styled(Button)`
  // Override the text color of the button.
  color: tomato;

  // Override the border color of the button.
  border-color: tomato;
`;

// Define a React functional component that uses the "Button" and "TomatoButton" styled components.
export const StyledExtendedExample = () => {
  // Return a JSX element containing the styled components.
  return (
    // Create a container div.
    <div>
      {/* Render the original "Button" styled component with the text "Normal
      Button". */}
      <Button>Normal Button</Button>
      {/* Render the "TomatoButton" styled component with the text "Tomato
      Button". */}
      <TomatoButton>Tomato Button</TomatoButton>
    </div>
  );
};
