window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 20,20);
    matrix.create();
    
    matrix.setCell(4, 5, 'fruit');
    
    var snake = new Snake(matrix, 5, 5, 'Right');
    snake.show();
    
    setInterval(() => {
        snake.move();
    }, 500);

    document.addEventListener('keydown', function (e){
        let keys = [37,38,39,40];
        if(keys.indexOf(e.keyCode)!=-1) {
            let direction = e.key.replace('Arrow', '');
            snake.course = direction;
        }
    });
}
