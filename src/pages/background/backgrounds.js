import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import GetLocalPosts from "./loader/img";

class background extends Component {
  render() {
    return (
      <div className="background">
        <div className="background_content">
          <Paper elevation={3}>
            <div className="padding_background">
              <div className="background_top">
                <h1>Backgrounds</h1>
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
              <div className="images">
                <GetLocalPosts />
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default background;
