const MainMap = document.getElementById('MainMap');

let isDragging = false;
let lastX = 0;
let lastY = 0;
let scale = 1;

document.addEventListener('wheel', (event) => {
    const scaleFactor = 0.5;
    const delta = event.deltaY;

    scale += scaleFactor * (delta > 0 ? -1 : 1);

    scale = Math.max(scale, 0.1);

    MainMap.style.transform = `scale(${scale})`;
});

document.addEventListener('mousedown', (event) => {
    isDragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaX = event.clientX - lastX;
        const deltaY = event.clientY - lastY;

        MainMap.style.left = `${MainMap.offsetLeft + deltaX}px`;
        MainMap.style.top = `${MainMap.offsetTop + deltaY}px`;

        lastX = event.clientX;
        lastY = event.clientY;
    };
});