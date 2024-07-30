import React, { useState } from "react";

function Theme() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = {
    darkTheme: {
      backgroundColor: 'gray',
      color: 'white',
      padding: '20px'
    },
    lightTheme: {
      backgroundColor: 'white',
      color: 'black',
      padding: '20px'
    }
  };

  const handleCheckboxChange = () => {
    // setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      Enable Dark Theme:
      <input type="checkbox" checked={isDarkTheme} onChange={handleCheckboxChange} />
      <div style={isDarkTheme ? theme.darkTheme : theme.lightTheme}>
        <h1>useState hook in react</h1>
        <p>useState hook allows us to use state inside functional component</p>
      </div>
    </>
  );
}

export default Theme;
