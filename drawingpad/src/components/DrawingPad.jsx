import React, { useRef, useState, useEffect } from "react";

const DrawingPad = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [size, setSize] = useState(10);
  const [color, setColor] = useState("black");
  const [isDrawing, setIsDrawing] = useState(false);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext("2d");
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setX(null);
    setY(null);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = ctxRef.current;
    const x2 = e.nativeEvent.offsetX;
    const y2 = e.nativeEvent.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    
    setX(x2);
    setY(y2);
  };

  const drawCircle = (x, y) => {
    const ctx = ctxRef.current;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  };

  const drawLine = (x1, y1, x2, y2) => {
    const ctx = ctxRef.current;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
  };

  const clearCanvas = () => {
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="800"
        height="500"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
      ></canvas>
      <div className="toolbox">
        <button onClick={() => setSize(size > 5 ? size - 5 : 5)}>-</button>
        <span>{size}</span>
        <button onClick={() => setSize(size < 50 ? size + 5 : 50)}>+</button>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <button onClick={clearCanvas}>X</button>
      </div>
    </div>
  );
};

export default DrawingPad;
