import React from "react";
import "./App.css";
import GlobalFonts from "./fonts/fonts";

import NavigationBar from "./NavigationBar";
import { AppWrapper, BodyWrapper, WelcomeMessage } from "./App.styles";

function App() {
  return (
    <AppWrapper>
      <NavigationBar />
      <BodyWrapper>
        <WelcomeMessage>
          <div>
            Hi, I'm Daniel<span style={{ color: "#C9C8C8" }}>\n</span>
            <br />
            nice to meet you!<span style={{ color: "#C9C8C8" }}>\0</span>
          </div>
        </WelcomeMessage>
      </BodyWrapper>
      <GlobalFonts />
    </AppWrapper>
  );
}

export default App;
