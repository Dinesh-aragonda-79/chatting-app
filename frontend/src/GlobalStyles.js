import { Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={`
      body {
        background-color: #1A202C; /* Dark background color */
        color: white; /* White text color */
      }
    `}
  />
);

export default GlobalStyles;
