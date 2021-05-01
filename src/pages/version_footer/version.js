import React from "react";
import Paper from "@material-ui/core/Paper";

export default function website() {
  return (
    <div id="version" className="version">
      <div className="version_content">
        <Paper elevation={10}>
          <div className="padding_version">
            <h4>
              You can see the inner workings here{" "}
              {/* <span>
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
                  class="feather feather-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span> */}
            </h4>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ConnorTews/connort.com"
            >
              github.com/ConnorTews/connort.com
            </a>
            <p>Build 5</p>
          </div>
        </Paper>
      </div>
    </div>
  );
}
