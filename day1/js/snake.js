class Snake{
    
    constructor(matrix, x, y, course){
        this.matrix = matrix;
        this.x = x;
        this.y = y;
        this.course = course;
    }
    
    show(){
        this.matrix.setCell(this.x, this.y, 'snake');
    }
    
    move(){
        //Убираем класс у текущей ячейки
        this.matrix.setCell(this.x, this.y, '');

        //Изменение координат в зависимости от напрвления
        switch(this.course){
            case 'Right':
                this.x++;
                break;
            case 'Left':
                this.x--;
                break;
            case 'Up':
                this.y--;
                break;
            case 'Down':
                this.y++;
                break;
        }

        //После изменения координат добавляем ячейке класс
        this.matrix.setCell(this.x, this.y, 'snake');
    }

}