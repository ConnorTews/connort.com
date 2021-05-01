import React from "react";
import Button from "@material-ui/core/Button";
import About from "./pages/about/about";
import Background from "./pages/background/backgrounds";
import Welcome from "./pages/welcome/welcome";

export default function App() {
  return (
    <div className="root">
      <nav>
        <div className="logo">
          <h1>CT</h1>
        </div>
        <div className="page_buttons">
          <Button href="#home">
            <h1>Home</h1>
          </Button>
          <Button href="#about">
            <h1>About Me</h1>
          </Button>
          <Button href="#background">
            <h1>Backgrounds</h1>
          </Button>
        </div>
      </nav>
      <article id="welcome" className="welcome">
        <Welcome />
      </article>
      <article id="about" className="aboutMe">
        <About />
      </article>
      <article id="background" className="Backgrounds">
        <Background />
      </article>
    </div>
    // </ThemeProvider>
  );
}
