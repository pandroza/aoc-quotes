import React from 'react';
import ReactDOM from 'react-dom/client';
import Doodle from "./doodle";
import "./index.css";
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContents: "center"
      }}
    >
      <h2> keep scrolling </h2>

      <Doodle
        rule={`
  :doodle {
    @grid: 5 / 8em;
  }
  background: #60569e;
  transform: scale(@rand(.2, .9));

        `}
      />

      <Doodle
        rule={`  :doodle {
    @grid: 20 / 100vmax;
    background: #0a0c27;
    font-family: sans-serif;
  }
  :after {
    content: \@hex(@rand(0x2500, 0x257f));
    color: hsla(@r(360), 70%, 70%, @r(.9));
    font-size: 5vmax;
  }
           `}
      />

      <Doodle
        rule={`
  
:doodle {
    @grid: 20x1 / 60vmin;
  }
  
  @place-cell: center;
  @size: 600%;

  transform: translate(@r(-100%, 100%));
  mix-blend-mode: overlay;
  background: @multi(500, (
    repeating-radial-gradient(
      @p(#E63946, #F1FAEE, #A8DADC, #457B9D, #1D3557) @r(25%),
      transparent
    )
    @r(0%, 100%, .1) @r(0%, 100%, .1) /
    @r(5%, 8%) @lr()
    no-repeat
  ));
        `}
      />

      <Doodle
        rule={`
        :doodle {
  @grid: 7 / 8em;
  @shape: circle;
}
@even {
  @shape: hypocycloid 4;
  background: #60569e;
  transform: scale(2) rotate(-60deg);
}
        `}
      />
      <Doodle
        rule={` :doodle {
    @grid: 18 / 100vmax;
    background: #0a0c27;
  }
  --hue: calc(180 + 1.5 * @row() * @col());
  background: hsl(var(--hue), 50%, 70%);
  margin: -.5px;
  transition: @r(.5s) ease;
  clip-path: polygon(@pick(
    '0 0, 100% 0, 100% 100%',
    '0 0, 100% 0, 0 100%',
    '0 0, 100% 100%, 0 100%',
    '100% 0, 100% 100%, 0 100%'
  ));
`}
      />
      <Doodle
        rule={`
 :doodle {
    @grid: 7 / 100vmax;
    background: #0a0c27;
  }
  @shape: clover 5;
  background: hsla(
    calc(360 - @i() * 4), 70%, 68%, @r(.8)
  );
  transform:
    scale(@r(.2, 1.5))
    translate(@multi(2, @r(-50%, 50%)));
`}
      />

      <Doodle
        rule={`
  :doodle {
    @grid: 5 / 8em;
  }
  background: #60569e;
  transform: scale(@rand(.2, .9));

        `}
      />

      <Doodle
        rule={`
  :doodle {
    @grid: 25x1 / 18vmin;
  }
  :container {
    perspective: 30vmin;
  }

  @place-cell: center;
  @size: 100%;

  border: @r(2px) solid @pd(
    #00b8a9, #f8f3d4, #f6416c, #ffde7d
  );
  @random(.1) { border-style: dashed; }
  @random(.1) { border-style: dotted; }
  @random(.1) {
    border-width: @p(3px, 4px);
    border-style: double;
  }

  border-radius: 50%;
  transform-style: preserve-3d;
  will-change: transform, opacity;
  animation: scale-up 7s linear infinite;
  animation-delay: calc(-7s / @size() * @i());

  @keyframes scale-up {
    0%, 100% {
      transform: translate3d(0, 0, 0) rotate(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    95% {
      transform:
        translate3d(0, 0, 45vmin)
        rotateX(calc(@p(-1, 1) * @r(30deg, 330deg)))
        rotateY(calc(@p(-1, 1) * @r(30deg, 330deg)))
        rotateZ(calc(@p(-1, 1) * @r(30deg, 330deg)))
    }
  }`}
      />

      <Doodle
        rule={`
        :doodle {
    @grid: 50x1 / 50vmin;
    perspective: 23vmin;
  }

  background: @multi(@r(200, 240), (
    radial-gradient(
      @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d) 15%,
      transparent 50%
    ) @r(100%) @r(100%) / @r(1%, 3%, .1) @lr() no-repeat
  ));

  @size: 80%;
  @place-cell: center;
  
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: scale-up 20s linear infinite;
  animation-delay: calc(@i() * -.4s);

  @keyframes scale-up {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0) rotate(0);
    }
    10% { 
      opacity: 1; 
    }
    95% {
      transform:
        translate3d(0, 0, @r(50vmin, 55vmin))
        rotate(@r(-360deg, 360deg));
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 0, 1vmin);
    }
  } `}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
