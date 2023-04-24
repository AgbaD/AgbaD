import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const DevIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path d="M2 7v18h28V7H2zm2 2h24v14H4V9zm2 2v10h3c1.654 0 3-1.346 3-3v-4c0-1.654-1.346-3-3-3H6zm10 0c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2zm3.691 0 2.084 9.025a1.258 1.258 0 0 0 2.45 0L26.309 11h-2.053L23 16.44 21.744 11h-2.053zM8 13h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8v-6z" />
  </svg>
)

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={1440}
    viewBox="0 0 1080 1080"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M612.7 161.7c-.3.4-.8 2.6-1.1 4.9l-.7 4.1 9.8.6c10.2.6 17.3 2.7 17.3 5.1 0 .8-5.4 19.1-12 40.7s-12 39.5-12 39.9c0 .5 10.7 4 12.3 4 .3 0 6-18.3 12.8-40.6l12.4-40.6 4.2.5c2.6.3 7.6 2.4 13 5.5l8.8 5 1.7-3.6c1-2.1 1.8-4.2 1.8-4.7 0-.6-14.8-5.5-32.8-10.9-18-5.5-33.2-10.1-33.8-10.3-.7-.3-1.4-.1-1.7.4zM481.4 187.2c-2.6 1.8-6.2 5.4-7.8 8-1.7 2.6-3.3 4.7-3.7 4.7-.3.1-1.5-2-2.7-4.5-2.2-4.5-2.4-4.6-5.9-4.1-1.9.4-3.7.8-4 1-.3.4 10.5 60.9 11 61.3.1.1 2.8-.3 6-.8 4.6-.8 5.7-1.3 5.3-2.7-1-3.1-7.6-40.5-7.6-42.7 0-2.8 7.7-9.8 14-12.7 2.5-1.2 4.6-2.2 4.8-2.3.9-.5-2.3-8.4-3.3-8.4-.7 0-3.4 1.5-6.1 3.2zM413.3 203.6c-5.8 2.8-11.1 8.2-14.5 14.6-1.9 3.6-2.3 5.8-2.2 13.3 0 10.6 2.4 17.7 8.4 25.4 5.5 7 11.4 9.6 21.5 9.6 7 0 8.9-.4 14.5-3.2 8.4-4.1 15.4-11.1 14.3-14.1-.8-2.1-.9-2.1-5.7 1.3-2.7 1.9-7.4 4.4-10.5 5.6-9.9 3.7-20 .8-25.9-7.5-2.9-4.2-5.8-10.4-5.1-11.1.2-.2 9.4-3.6 20.4-7.5 10.9-3.9 20.1-7.2 20.3-7.4.9-.9-3.8-9.6-7.3-13.4-7.6-8.4-18.3-10.6-28.2-5.6zm16.5 9.2c2.8 2.1 7.9 8.9 7.1 9.6-.8.6-29.2 10.6-30.2 10.6-.6 0-.8-2.6-.5-6.9.6-8.2 3.9-14.9 7.8-15.7 1.4-.3 2.9-.7 3.4-.8 2.5-.6 9.6 1.3 12.4 3.2zM686.4 224.4c-6.5 1.6-11.1 4.5-16.4 10.2-7.7 8.3-11.9 21.3-9.9 30.2 2.9 13.3 13.6 21.9 30 24.2 6.6.9 7.5.9 8.6-.7 2-2.6 1.6-3-3-3.7-5.8-.9-15.5-5.7-18.9-9.2-3.7-4-5.8-9.5-5.8-15.1.1-5.3 4-15.9 5.7-15.6.6.1 9.3 4.7 19.4 10.2 10 5.5 18.5 9.8 19 9.6.4-.3 1.7-3 2.8-6.1 3.9-10.4 2.1-21.4-4.5-27.6-6.5-6-17.8-8.8-27-6.4zm17.3 8.8c1.7 1.8 3.6 4.4 4.3 5.7 1.5 3 1.6 12.2 0 15-1.2 2.4.5 3.1-17.2-6.6-8.2-4.4-11.5-6.8-11.2-7.8.7-1.8 6.5-6.2 10.6-8 5.7-2.5 10-1.9 13.5 1.7zM358.8 228.6c-6.8 2.1-14.9 10.2-17.3 17.4-3.8 11-2.1 21.6 5.3 32.9 10.9 16.5 30.8 18.7 45.7 5 2.6-2.4 6-6.2 7.6-8.5 2.4-3.5 2.6-4.4 1.5-5.9-1.2-1.6-1.6-1.4-5.8 2.7-9.4 9.4-19.4 12.7-28.3 9.4-4.4-1.7-14.5-11.4-14.5-13.9 0-.7 8.4-6.1 18.5-12 10.2-6 18.5-11.2 18.5-11.6 0-.5-1.3-2.6-2.9-4.8-6.9-9.6-18.4-13.9-28.3-10.7zm10.5 9.8c1.8.7 4.5 2.8 6.2 4.5 2.5 2.7 2.7 3.3 1.5 4.4-2.1 1.9-26.1 16-26.5 15.5-.2-.1-.8-2.7-1.3-5.6-.9-4.9-.3-11.2 1.4-15.6 1.6-4.1 12.3-6 18.7-3.2zM540.7 234.2c-2.7 2.1-3.6 6-2.2 9.4 2.1 5.1 8 6 12 1.9 3-3 3.2-6.4.4-9.9-2.3-2.9-7.3-3.6-10.2-1.4zM732.5 261.9c-9.1 4.4-17.8 13.9-21 23.2-3.8 10.8.2 23.6 9.6 30.5 7.7 5.6 19 8.3 20.3 4.8.9-2.2.8-2.4-.9-2.4-.9 0-3.3-.9-5.4-2-12.3-6.2-16.6-16.2-12.5-28.4 3.5-10.2 18.2-21.6 27.9-21.6 3.7 0 4.7.5 8.1 4.2 2.2 2.4 5 6.4 6.4 9 1.4 2.7 2.8 4.8 3.1 4.8.3 0 1.8-1.3 3.3-2.9 2.4-2.5 2.6-3.2 1.6-5.2-2.5-4.6-10.6-12.3-15.5-14.5-7.5-3.5-17.1-3.3-25 .5zM305.3 266c-5.4 2.8-9.1 8.2-10.4 15.6-.7 3.2-1.3 6.5-1.5 7.1-.2.9-2.7 1.3-7.7 1.3h-7.4l-.7 3.1c-1 5.3-.8 5.9 2.4 5.9 6 0 9.3 2.9 30.5 26.5 5.5 6 10.2 11.1 10.7 11.3.4.2 2.5-1.4 4.8-3.5l4-3.8-16-17.7c-8.8-9.8-16-18.4-16-19.3 0-8.2 5.7-16.5 11.4-16.5 4.7 0 8.6 3.3 24.6 21.3l14.1 15.7 4.5-3.6c2.4-2 4.4-3.8 4.4-3.9 0-1.1-32.7-36.3-35.6-38.3-5.1-3.4-10.8-3.9-16.1-1.2zM780.5 297.6c-17.6 15.1-33.6 28.7-35.5 30.2l-3.4 2.9 3.8 4.6 3.7 4.6 18.1-15.5c20-17 20.4-17.2 28.6-13.3 7.3 3.6 10.4 11.4 6.6 16.8-.9 1.2-9.4 8.9-18.9 17l-17.3 14.8 3.8 4.4c3.5 4.1 3.9 4.3 5.6 2.8 1.1-.9 9.6-8.1 19-16.2 21-17.8 24-22.6 20-32-2.6-6.4-14.3-13.7-21.8-13.7-1.1 0-1.8-.4-1.6-.9.2-.7 14.1-12.8 26.7-23.4l3.4-2.8-3-3.7c-1.7-2-3.6-3.8-4.4-3.9-.8-.1-15.8 12.2-33.4 27.3zM240.2 296.3c-2.8 3-2.8 6.8.1 9.5 4.6 4.4 11.7 1.4 11.7-4.8 0-6.3-7.5-9.3-11.8-4.7zM260.3 313c-1.8 2.1-3.3 4.2-3.2 4.7 0 .9 45.8 38.4 47.5 39 .7.2 2.7-1.5 4.5-3.8 3.2-4.1 3.3-4.2 1.3-5.8-1.1-.9-11.9-9.8-24.1-19.9-12.2-10-22.3-18.2-22.5-18.2-.2 0-1.8 1.8-3.5 4zM239.5 340.5c-1.4 5.2-2.3 6.9-4.6 8.2-1.6 1-4.1 3.4-5.5 5.5-7.7 11.1-7 24.9 1.7 32.2 7.2 6.2 14.7 8 21.4 5.2 3.8-1.6 3.6-1.8 5 5.2 1 4.9 6 10.2 9.7 10.2 1.6 0 3.8-.5 4.9-1 1.7-1 1.9-.7 1.9 2.4 0 10.4 8.6 17.9 17.6 15.4 5.6-1.5 12.9-9 17.2-17.7 3.4-7 3.7-8.1 3.7-16.5 0-10.7-2.3-16.7-8.3-21.6-8.2-6.8-14.5-3.1-26.8 15.7-8 12.2-10.6 14.1-13.6 10.3-2.5-3.1-2.3-7.9.7-13.2 5.9-10.6 5-21.9-2.2-29-4-3.9-9.7-6.8-13.4-6.8-2 0-2.1-.3-1.5-5 .6-4.5.5-5-1.3-5-1.1 0-2.6-.2-3.4-.5-1-.4-1.8 1.1-3.2 6zm12.3 17.1c7.5 3.7 11.2 8.4 11.2 13.9 0 10.2-10.3 14.5-21.5 9.1-6.2-3.1-11.2-8.5-12.1-13.3-.7-3.9 2-9.2 5.7-11 4-2.1 11-1.6 16.7 1.3zm54.8 24.5c2.2 10.5-1.5 22.1-9.1 28.7-6.8 6-15.9 2.9-18.9-6.6-.6-1.8.8-4.6 6.4-13.5 4-6.2 9.1-13.1 11.3-15.5l4.1-4.2 2.5 2.4c1.6 1.6 2.9 4.6 3.7 8.7zM826.7 347.8c-2.4 5.5-4.5 7.1-22.2 16.7-8.8 4.8-17.9 9.8-20.2 11.1l-4.3 2.5 2.5 4.9c1.4 2.8 2.8 5 3.1 5 .3 0 9.6-5 20.8-11 11.1-6.1 21-11 21.9-11 2.6 0 8.8 3.4 11.5 6.3 1.2 1.3 2.5 4 2.9 6 .5 3.2.1 4.1-2.8 7-1.9 1.8-11.9 7.9-22.4 13.6-10.4 5.7-19.2 10.5-19.4 10.7-.6.5 3 8.2 4.4 9.4 1.4 1.2 39.1-19.2 45.2-24.4 10.5-9.1 7.3-22.1-7.3-29.3-4.1-2-7.4-3.9-7.4-4.2.1-.3.7-3.3 1.5-6.6s1.5-6.3 1.5-6.7c0-.6-6.3-3.8-7.4-3.8-.1 0-1 1.7-1.9 3.8zM209.5 403.3c-5.7 2.6-10.5 10.6-10.5 17.2 0 1.1 1.1 5 2.3 8.6l2.3 6.6-6.4 3.4c-6.2 3.4-6.3 3.4-5.7 6.9.9 4.6 1.8 5.4 4.5 4 4.8-2.6 11-1.3 32.9 6.5 11.8 4.1 21.7 7.2 22.1 6.8.4-.4 1.4-2.9 2.3-5.5l1.5-4.7-8.1-2.9c-4.5-1.6-14.4-5.1-22-7.7-7.7-2.7-14.5-5.4-15.2-6.2-.8-.7-1.9-3.7-2.6-6.7-1.3-6.1-.4-9.9 3.2-13.2 3.3-3 9.3-1.9 30.2 5.5 10.8 3.9 20.5 7.2 21.4 7.3 1.1.2 2.1-1.2 3.4-5l1.8-5.3-2.7-1c-15.2-5.8-43.6-15.1-47.2-15.5-2.6-.3-5.8.1-7.5.9zM881.9 406c-2.3 2.3-2.9 3.5-2.4 5.2 1.8 6.1 9.1 8.3 12.7 3.9 2.5-3.2 2.3-6.7-.7-9.6-3.2-3.3-6-3.1-9.6.5zM836.7 422.5c-15.3 5.7-28.1 10.6-28.4 10.9-.6.6 1.3 7.3 2.7 9.5.4.8 9.6-2.1 29.5-9.4 15.9-5.8 29.1-10.7 29.3-11 .8-.8-3-10.5-4.1-10.4-.7 0-13.7 4.7-29 10.4zM846 444.1c-6.9 1.2-14.6 4.7-19.2 8.8-8.5 7.4-10.8 21.3-5.4 32.1 3.4 6.9 7.3 11 10.3 11 2.8 0 2.8-.4.4-3.9-3.2-4.4-5.4-12.7-4.8-17.7.6-5.4 4.7-11.8 9.7-15.2 10.7-7.2 29.2-6.7 37.8 1.1 1.9 1.8 2.2 3 2.2 9.1 0 3.9-.4 8.8-.9 10.8l-.9 3.8h4.3c5 0 5.5-.7 5.5-8.9 0-13.1-5.5-22.6-16-27.8-7.4-3.7-14.6-4.7-23-3.2zM153 490.4c-1.9 15.1-3.2 27.7-3 27.9.6.6 90.4 11.6 90.8 11.2.2-.2 1.8-12.4 3.6-27.2l3.3-26.8-2.6-1.2c-4.7-2.2-5.8-1.7-6.5 3.3-.3 2.6-.6 12.3-.6 21.6v17l-2.7-.6c-1.6-.3-10.7-1.5-20.3-2.7-9.6-1.1-17.6-2.2-17.6-2.2-.1-.1.7-6.5 1.7-14.2 2.3-17.6 2.3-16.5-.6-16.5s-2.9 0-4.9 16.8c-.8 6.8-1.6 12.6-1.9 12.8-.4.4-20.6-1.7-29.9-3.2l-3.8-.6v-7.5c0-5.8.8-10.5 3.5-19.4 1.9-6.5 3.5-12.3 3.5-12.8 0-.4-1.2-1.1-2.7-1.4-1.6-.3-3.5-.8-4.4-1.2-1.4-.5-2 3-4.9 26.9zM830 501.7c-7.6 6.3-7 16.6 1.4 27.6l3.7 4.8-4.7 6-4.7 5.9 2.8 3 2.8 2.9 3-2.5c4.8-4 7-4.5 25.2-5.4 17.6-.9 22.5-1.9 26.2-5.3 6.2-5.5 7-19.9 1.8-31.4-3.1-6.9-4.5-8.6-6.7-7.8-1.2.5-1.2 1.4.5 6.3 2.6 7.6 2.8 17.9.4 21.5-2.4 3.6-4.6 4.4-14.1 4.8l-8 .4-1.2-6.5c-2-10.5-5.3-18.1-9.9-22.8-4-3.9-4.6-4.2-9.8-4.2-4.5 0-6.1.5-8.7 2.7zm17 10.6c2.9 2.3 5.8 7.2 7.4 12.6 2.5 8.3 2.6 8.1-6.3 8.1-7.8 0-7.9 0-11.1-3.7-4.4-4.9-6.3-9.8-5-12.2 2.8-5.3 11.1-7.9 15-4.8zM825.7 565.8c-.2 3.1-.4 5.8-.3 5.9.2.2 88.9 8.3 91.7 8.3 2.4 0 2.7-.4 3.3-5.1.4-2.8.5-5.3.2-5.6-.2-.3-19.3-2.2-42.3-4.3-23-2.1-44.1-4.1-46.9-4.4l-5.2-.6-.5 5.8zM234.7 573.6c-.3.4.2 2.3 1.2 4.3 2.7 5.1 5.1 13.9 5.1 18 0 5-4.2 13.4-8.1 16.4-1.9 1.4-6.1 3.4-9.4 4.5l-6 2.1-.7-2.2c-.3-1.2-2.3-11.1-4.4-22-2.1-10.8-4.1-19.7-4.5-19.7-2.2 0-12.2 4.4-15.7 6.9-4.9 3.6-9.2 11.8-9.2 17.8 0 5.8 3.3 14.1 7.5 19.1 2.1 2.4 6.3 5.4 10 7.3 5.4 2.6 7.5 3.1 13.8 3.1 14 0 25.5-5.4 31.2-14.6 2.8-4.7 3-5.6 3-15 0-9.2-.3-10.6-2.9-15.6-5.1-9.6-8.4-12.9-10.9-10.4zm-25.3 27.6c1.5 7.9 2.9 15.1 3.2 16 .4 1.4 0 1.8-1.9 1.8-4.5 0-12.8-3.1-16.2-6.1-3-2.6-3.5-3.8-3.5-7.3.1-7.8 4.7-14.6 12.1-17.5 1.3-.5 2.7-1 3-1 .4-.1 1.9 6.3 3.3 14.1zM809.2 636.4c-.3.6 9.3 10.6 21.4 22.2 20.3 19.8 21.7 21.3 18.4 20.9-1.9-.3-12.3-.9-23-1.5s-23-1.3-27.3-1.6c-7-.6-7.9-.5-7.5.9.3 1.5 70.2 69.7 71.3 69.7.3 0 1.1-1.2 1.9-2.8l1.4-2.8-29-26.4c-15.9-14.6-28.5-26.6-28-26.8 1-.3 67.6 6.3 73.8 7.3 3 .5 3.2.3 6.2-6.2 1.6-3.8 2.9-6.9 2.7-7.1-.1-.1-7-.7-15.4-1.2l-15.2-1-17.2-15.7c-9.5-8.6-17.4-15.8-17.6-16-1.6-1.1 4.5-.7 37.9 2.8 20.6 2.1 38.1 3.8 38.8 3.6 1.8-.3 7.5-13.1 5.9-13.4-.7-.1-17.8-1.2-38.2-2.3-20.3-1.2-42.3-2.5-48.8-2.8-7.4-.5-12.1-.4-12.5.2zM195.3 642.1c-1.8 1.2-3.3 2.4-3.3 2.9 0 2 8.9 9.5 14.1 11.9l5.9 2.7-4.5 3.2c-4.8 3.4-5.1 4.2-3.2 8.3l1.2 2.7 27-9.9c14.9-5.4 28-10.3 29.3-10.9 2.5-1.1 2.4-1.9-.3-8.7l-1.3-3.1-13.4 4.9c-7.3 2.8-17 6.3-21.5 7.9l-8.1 2.9-4.7-3.1c-2.6-1.7-6.5-5.4-8.7-8.2-2.2-2.8-4.3-5.2-4.7-5.3-.3-.2-2.1.7-3.8 1.8zM261.2 663.4c-2.4 5.2-5.1 7.3-21 16.1-13.8 7.5-17.6 10.3-19.9 14.8-4.5 8.8 4.6 26.4 17.6 34 5.2 3.1 5-.3-.4-6.9-8.5-10.5-10.6-17.5-6.5-22.6 1.1-1.4 4.9-4.1 8.5-5.9l6.6-3.4 3.1 4c5.9 7.5 14.7 15.3 19.2 17 12.4 4.7 23.4-6.6 18.3-18.8-1.8-4.3-8.2-9.9-14-12.3-5.3-2.2-5.5-2.8-3.2-11.4.8-3 1.3-5.5 1.2-5.7-.2-.1-1.9-.9-4-1.8l-3.6-1.5-1.9 4.4zm8.3 19.4c8.6 4.3 10.1 7.1 7 13.2-3.1 6-7.9 7.4-14.3 4.1-3.8-1.9-12.2-10.2-12.2-12 0-.6 2.8-2.6 6.3-4.5 6.4-3.7 7.4-3.7 13.2-.8zM770.6 711.6l-3.5 4.6 8.7 6.6C803.6 744 804 744.3 804 747c0 4.3-2.9 16.2-4.5 18.6-1.4 2.2-1.3 2.4 2 4.4 2 1.2 4.2 2 4.9 1.7 2.9-1.1 4.6-14.8 2.7-21.4l-1-3.3 3.7 1.6c6.6 2.9 7.7 2.8 10.1-.4l2.1-3-23.7-18.4c-13.1-10.1-24.3-18.7-25-19.1-.7-.5-2.5 1-4.7 3.9zM272.2 731.4 240 743.6l2.2 2.2c1.6 1.4 2.8 1.8 3.8 1.2 3.1-1.7 46-18.9 46-18.4 0 .3-5.3 10.8-11.7 23.4l-11.8 22.9 4 4c2.1 2.3 4.2 4.1 4.5 4.1.3 0 2.1-3 3.9-6.8l3.2-6.7 16.5-6.7c9-3.7 16.4-6.4 16.4-6.1 0 .3-5.2 10.7-11.5 23.1L294 802.2l3 3.7c1.6 2.1 3.5 4.3 4.2 4.9 1.1.8 4.4-5.6 16.1-30.6 8.1-17.4 14.3-32 13.9-32.4-.5-.5-9.6 2.5-20.3 6.5-10.7 4.1-20.4 7.7-21.6 8.1-1.8.6-.7-2.4 7.7-20.5 9-19.3 10.3-23 8.2-22.8-.4 0-15.2 5.5-33 12.3zM744.7 742.8l-3.8 3.9 22.1 21.4c12.2 11.8 22.5 21.5 22.9 21.7.4.1 2.4-1.5 4.5-3.6l3.7-3.9-22-21.4c-12.2-11.8-22.5-21.5-22.9-21.7-.4-.1-2.5 1.5-4.5 3.6zM721 763.1c-5.9 2.4-13.6 12.3-12.5 16 .7 2 1 1.8 4.7-2.5 4.6-5.3 8.2-6 12.1-2.4 4.3 4 29.9 35.8 29.5 36.7-.2.5-2.9 3-6.1 5.6-5.5 4.5-5.7 4.8-4.1 6.6 1.6 1.7 1.9 1.6 7.7-3.1 3.4-2.8 6.4-5 6.7-5 .3 0 2 2.1 3.9 4.5 1.8 2.5 3.7 4.5 4.1 4.5.4 0 1.5-3 2.4-6.6 1.5-6.1 1.5-6.8.1-8.4-1.5-1.6-1.3-2 2.6-5.2 5.7-4.8 4.4-6.6-2.3-3.2-2.7 1.4-5.3 2.2-5.6 1.9-.4-.4-7.2-8.6-15.2-18.2-8-9.7-15.6-18.5-17-19.5-3.2-2.3-7.8-3-11-1.7zM346 768.5c-1 1.2-.5 1.7 2.7 3 4.5 1.9 8.3 5.3 8.3 7.4 0 2.3-2.8 6.6-16.8 25.8l-12.5 17.1-6.6-4.8c-5.9-4.4-6.7-4.7-7.8-3.3-.7.9-1.3 2-1.3 2.3 0 .4 2.7 2.6 6 5s6 4.8 6 5.3-1.6 3.1-3.6 5.8l-3.6 4.9h7.2c6 0 7.4-.3 8.8-2 1.7-2.1 1.7-2.1 6 1.1 6.2 4.5 7.7 2.5 2.4-3.3l-3.9-4.3 9.9-13.5c16.7-22.7 19.8-27.7 19.8-31.9 0-5.6-3.3-9.8-10.5-13-6.1-2.8-9.1-3.3-10.5-1.6zM685.5 788.2c-10.1 3.6-22.4 16.1-21.1 21.4.7 2.5.7 2.5 6.6-2.9 8.3-7.8 13.5-10 21.5-9.5 7.7.5 13 3.7 18.2 10.9l3.2 4.6-18.9 10.9c-10.4 6-19 11.4-19 12.1 0 2.1 10.5 12.6 14.5 14.4 5.2 2.4 13.8 2.4 19 0 5.7-2.6 11.4-8.6 14.4-15 5.8-12.7 2-28.4-9.8-40.1-3.6-3.6-7-6-9.7-6.8-5-1.5-14.8-1.4-18.9 0zm30.9 31c1.3 5.2.6 15.3-1.4 18.5-1.9 3.2-6.6 5.3-11.8 5.3-5 0-15.2-6.3-15.2-9.5 0-.9 25.5-16.4 27.1-16.5.4 0 .9 1 1.3 2.2zM802 792.7c-5.5 2-6.8 8.7-2.4 12.2 1.5 1.2 3.4 2.1 4.4 2.1 3.1 0 7-3.9 7-7 0-4.7-5-8.7-9-7.3zM381 819.6c-6.9 13-13 24.3-13.6 25.1-.9 1.4-2 1.1-8.3-2.2-6-3.2-7.4-3.6-8.2-2.4-1.6 2.6-.9 3.5 5.1 6.4 3.4 1.6 6.5 3.4 7 4.1 1.7 1.9-8.7 15.1-14.2 18-4.4 2.3-6.4 1.7-11.9-3.7l-5.2-5.1-2.3 2.9c-3.1 3.8-3 4.6 1.4 7.6 14.4 10 28.7 6.5 41.4-10.2l2.7-3.5 4.9 2.7c6.6 3.6 7.5 1.6 1.6-3.8l-4.3-4 13.4-24.9c7.4-13.7 13.2-25.3 12.9-25.7-.6-1.1-7.9-4.9-9.1-4.9-.4.1-6.4 10.7-13.3 23.6zM645 809.9c-2.8 1.1-4.4 2.3-4.2 3.2.2.8 3.7 10.4 7.8 21.4l7.6 20-1.8 3.3c-1.9 3.5-12.8 14.2-14.5 14.2-.5 0 .1 1.8 1.3 4 1.3 2.2 2.8 4 3.3 4 3.2 0 13.4-14.2 13.5-18.7.1-1.6.3-1.5 2 .5 1.1 1.3 2.8 3.5 3.8 4.9 1.8 2.4 2.1 2.5 5.5 1.4 2.1-.7 3.7-1.6 3.7-1.9 0-1.8-21.8-57.6-22.6-57.8-.5-.2-2.9.5-5.4 1.5zM422.7 815.7c-13 4.5-23.8 22.4-22.4 37.3.6 7.1 4.5 14.8 9.4 18.9 5.5 4.6 15.9 7.5 23.8 6.8 8.5-.8 14.5-3.8 20.3-10.2 8.7-9.5 12.6-25.9 8.7-36.2-2.4-6.3-8.5-12.6-14.8-15.3-6.9-3.1-18.3-3.6-25-1.3zm21.3 5.1c10.5 5.5 10.6 26.3.2 41.4-6.6 9.6-17.2 13.4-24.1 8.6-5.6-3.7-7.4-7.9-7.3-16.2.1-13.4 6-26.1 15-32.4 5.4-3.8 10.8-4.2 16.2-1.4zM572.1 829.6c-2.8 3.5-2.6 6.9.4 9.9 2.5 2.6 6.3 3.2 9.5 1.5 2.5-1.3 4.1-6.5 3-9.5-1.9-5.1-9.5-6.2-12.9-1.9zM490.5 828.9c-12 3.2-19.6 12.3-19.7 23.5-.1 9.6 5.2 17.2 19.2 27.4 8.2 5.9 17.5 14.5 19.2 17.7 4.9 8.9.6 20.5-7.5 20.5-4.7 0-14.8-3.2-23-7.4-3.7-1.9-6.9-3.1-7.2-2.7-.2.5-.7 2.6-1.1 4.8l-.6 4 7.8 2.8c10.4 3.6 25.3 4.6 31.8 2.1 5.2-2 11.3-7.6 13.2-12.2 1.8-4.3 1.8-12.5 0-16.8-2.1-5.1-8-11-17.5-17.8-19-13.5-23.1-20.6-18.2-31.4 3.5-7.6 11.9-11.1 22.6-9.4 4.9.8 9.6 2.7 21.8 8.8 1.3.6.8-5.5-.6-6.6-.7-.6-5.5-2.5-10.6-4.2-9.8-3.3-23.5-4.7-29.6-3.1z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

