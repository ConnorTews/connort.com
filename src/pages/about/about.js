import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default function about() {
  return (
    <div className="about">
      <div className="about_content">
        <Paper elevation={3}>
          <div className="padding_about">
            <div className="about_title">
              <h1>About Me</h1>
              <Button>
                <a href="#welcome">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-up"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </a>
              </Button>
            </div>
            <h3>Hi my name is Connor</h3>
            <br />
            <h4>I'm a aspiring fullstack webdev.</h4>
            <br />
            <h4>I like to play games and work on my websites.</h4>
          </div>
        </Paper>
      </div>
    </div>
  );
}
