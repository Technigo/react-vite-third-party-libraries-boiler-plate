// Import the styled function from the "styled-components" library.
import styled from "styled-components";

// Define a styled "Button" component using the styled function.
const Button = styled.button`
  // Check if the "$primary" prop is provided and set the background color accordingly.
  background: ${({ $primary }) => ($primary ? "#BF4F74" : "white")};

  // Check if the "$primary" prop is provided and set the text color accordingly.
  color: ${({ $primary }) => ($primary ? "white" : "#BF4F74")};

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

// Define a React functional component that uses the styled "Button".
export const StyledComponentWithPropsExample = () => {
  // Return a JSX element containing two buttons.
  return (
    // Create a container div.
    <div>
      {/* Render a default styled button with the text "Normal". */}
      <Button>Normal</Button>
      {/* Render a button with the "$primary" prop, changing its style, with the
      text "Primary". */}
      <Button $primary>Primary</Button>
    </div>
  );
};
