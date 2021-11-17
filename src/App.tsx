import React from 'react';
import './App.css';
import useFeatures from "./helpers/useFeatures";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import mapData from "./helpers/mapData";

const darkTheme = createTheme({palette: {mode: 'dark'}});

function App() {
  const data = useFeatures('schema/content.json');

  if (!data || data.length === 0) return null;

  return (
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          {mapData(data)}
        </div>
      </ThemeProvider>
  );
}

export default App;
