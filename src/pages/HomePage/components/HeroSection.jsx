import React from "react";
import Textbox from "../../../components/Textbox";
import Button from "../../../components/Button";
import styled from "styled-components";
import { breakpoints } from "../../../constants/media";
import { PATHS } from "../../../constants/paths";

const StyledBackDrop = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to top, var(--black-cl), transparent);
    width: 100%;
    height: 100%;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, var(--black-cl), transparent);
    width: 100%;
    height: 100%;
  }
  .hero__backdrop-img {
    display: flex;
    opacity: 0.4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: ${breakpoints.desktop}) {
    .hero__backdrop-img {
      top: 31%;
      svg {
        height: 300px;
        width: 300px;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  gap: 4px;
`;

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      {/* Backdrop */}
      <StyledBackDrop
        className="hero__backdrop"
        style={{
          backgroundImage: "url(./assets/images/home/hero-banner.jpg)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero__backdrop-img">
          <svg
            width={470}
            height={470}
            viewBox="0 0 470 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_107_64)">
              <path
                d="M389.97 188.658C386.681 85.6396 303.206 2.505 199.84 0C197.178 0 194.985 2.03531 194.985 4.69687L194.828 73.8974C194.828 77.3418 192.166 80.0033 188.72 80.1599C85.6681 83.2911 2.50583 166.895 0 270.227C0 272.888 2.03599 275.08 4.69843 275.08L73.7654 275.236C77.2109 275.236 79.8734 277.898 80.03 281.342C83.3189 384.36 166.951 467.495 270.16 470C272.822 470 275.015 467.965 275.015 465.303L275.172 396.103C275.172 392.658 277.834 389.997 281.28 389.84C384.332 386.552 467.494 302.948 470 199.773C470 197.112 467.964 194.92 465.302 194.92L396.235 194.763C392.789 194.763 390.127 192.102 389.97 188.658ZM268.281 389.37C209.707 385.926 162.722 338.331 160.53 279.464C160.373 276.959 158.337 274.923 155.831 274.923L86.921 274.767C83.3189 274.767 80.4998 271.792 80.6564 268.191C84.102 209.637 131.713 162.668 190.6 160.476C193.106 160.32 195.142 158.284 195.142 155.779L195.298 86.7355C195.298 83.1346 198.274 80.3165 201.876 80.473C260.45 83.9174 307.434 131.512 309.627 190.38C309.783 192.885 311.819 194.92 314.325 194.92L383.236 195.077C386.838 195.077 389.657 198.051 389.5 201.652C386.055 261.772 336.095 309.524 275.172 309.524L275.015 383.108C274.858 386.709 271.883 389.527 268.281 389.37Z"
                fill="white"
              />
              <path
                d="M389.471 188.68L389.47 188.674C386.19 85.9222 302.931 3.00174 199.834 0.500004C197.429 0.503001 195.485 2.33472 195.485 4.69687V4.698L195.328 73.8974L389.471 188.68ZM389.471 188.68C389.639 192.379 392.509 195.263 396.233 195.263L389.471 188.68ZM188.743 80.6594L188.736 80.6597C85.951 83.7828 3.00269 167.169 0.500008 270.232C0.503009 272.636 2.33509 274.58 4.69843 274.58H4.69957L73.7654 274.736L188.743 80.6594ZM188.743 80.6594C192.442 80.4913 195.328 77.6225 195.328 73.8985L188.743 80.6594ZM80.5295 281.32L80.5298 281.326C83.8101 384.078 167.226 466.999 270.167 469.5C272.572 469.497 274.515 467.665 274.515 465.303V465.302L274.672 396.103L80.5295 281.32ZM80.5295 281.32C80.3613 277.621 77.4914 274.737 73.7665 274.736L80.5295 281.32ZM281.257 389.341L281.264 389.34C384.049 386.061 466.997 302.674 469.5 199.768C469.497 197.364 467.665 195.42 465.302 195.42H465.3L396.235 195.263L281.257 389.341ZM281.257 389.341C277.558 389.509 274.672 392.377 274.672 396.101L281.257 389.341ZM268.259 389.87L268.251 389.87C209.424 386.41 162.236 338.612 160.03 279.489C159.886 277.233 158.054 275.423 155.831 275.423H155.83L86.921 275.267L268.259 389.87ZM268.259 389.87C272.146 390.039 275.346 386.997 275.515 383.13L275.515 383.119V383.109L275.671 310.023C336.634 309.763 386.548 261.9 389.999 201.681L390 201.674M268.259 389.87L390 201.674M80.1569 268.169L80.1572 268.162C83.6177 209.354 131.432 162.182 190.575 159.977C192.832 159.833 194.642 158.001 194.642 155.779V155.778L194.798 86.7355C194.798 82.8464 198.015 79.8047 201.898 79.9735L201.905 79.9738C260.733 83.4331 307.921 131.231 310.126 190.355C310.271 192.611 312.103 194.42 314.325 194.42H314.326L383.236 194.577L80.1569 268.169ZM80.1569 268.169C79.9881 272.051 83.0304 275.266 86.9199 275.267L80.1569 268.169ZM390 201.674C390.168 197.792 387.126 194.577 383.237 194.577L390 201.674Z"
                stroke="white"
              />
            </g>
            <g filter="url(#filter1_b_107_64)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M192.938 193.348C192.938 183.874 203.094 177.869 211.395 182.434L288.054 224.597C296.658 229.329 296.658 241.692 288.054 246.424L211.395 288.586C203.094 293.152 192.938 287.146 192.938 277.673V193.348Z"
                fill="white"
              />
              <path
                d="M193.438 193.348C193.438 184.255 203.186 178.491 211.154 182.873L287.813 225.035C296.071 229.577 296.071 241.443 287.813 245.985L211.154 288.148C203.186 292.53 193.438 286.766 193.438 277.673V193.348Z"
                stroke="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_107_64"
                x={-12}
                y={-12}
                width={494}
                height={494}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={6} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_107_64"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_107_64"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_107_64"
                x="180.938"
                y="168.875"
                width="125.57"
                height="133.271"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={6} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_107_64"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_107_64"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </StyledBackDrop>
      {/* Textbox */}
      <Textbox variant="center" className="textbox">
        <Textbox.Content className="textbox__content --center">
          <h1 className="textbox__content-heading --h1 --heading">
            The Best Streaming Experience
          </h1>
          <p className="textbox__content-paragraph">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </Textbox.Content>
        <StyledButton to={PATHS.MOVIE.INDEX} className="btn btnmain">
          <div className="textbox__button-icon icon">
            <img
              srcSet="./assets/images/start-btn-icon.png 2x"
              alt="start button"
            />
          </div>
          <span className="textbox__button-text">Start Watching Now</span>
        </StyledButton>
      </Textbox>
    </section>
  );
};

export default HeroSection;
