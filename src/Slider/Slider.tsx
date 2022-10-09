import React, {useEffect, useRef, useState} from 'react';

const Slider = () => {
  const slides = [
    <div style={{width: '150px', height: '150px', backgroundColor: 'purple'}}></div>,
    <div style={{width: '150px', height: '150px', backgroundColor: 'orange'}}></div>,
    <div style={{width: '150px', height: '150px', backgroundColor: 'tomato'}}></div>,
  ]

  const [slide, setSlide] = useState(2);
  const [time, setTime] = useState(false)

  let ref = useRef(0)
  useEffect(() => {
    if (time) {
      // @ts-ignore
      ref.current = setTimeout(() => {
        inc()
      }, 500)
    }
    return () =>  clearTimeout(ref.current)
  })
  function inc() {
    setSlide((p) => {
      return p + 1 > slides.length - 1 ? 0 : p + 1
    });
  }
  function start() {
    if (time) clearTimeout(ref.current)
    setTime(true)
    // @ts-ignore
    ref.current = setTimeout(() => {
      inc()
    }, 500)
  }

  function stop() {
    setTime(false)
    clearTimeout(ref.current)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yay!</h1>
        {slides[slide]}
        <button onClick={start}>Start</button>
        <button onClick={inc}>Click</button>
        <button onClick={stop}>Stop</button>
      </header>

    </div>
  );
};

export default Slider;