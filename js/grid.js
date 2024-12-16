const grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);

// const foo = 'bar';
// foo = 'baz';

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.code === 'KeyG') {
        grid.classList.toggle('grid_visible');
    }
});
