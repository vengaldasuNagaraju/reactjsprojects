function ButtonAnimation(){
    const clickHandler = (e) => {
        const button = e.currentTarget;
        const x = e.clientX
        const y = e.clientY
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left  = xInside + 'px'
        
        button.appendChild(circle)
        setTimeout(() => circle.remove() , 500)
    }
    return (
        <button onClick={clickHandler}>Click Me</button>
    )
}
export default ButtonAnimation;