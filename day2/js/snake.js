class Snake extends Elem{
    
    constructor(matrix, coords, course){
        super(matrix, coords);
        this.value = 'snake';
        this.course = course;
        this.alive = true;
    }

    move(){
        if(!this.alive){
            return;
        }
        
        let head = this.cords[0].slice();

        switch(this.course){
            case 'right':
                head[0]++;
                break;
            case 'left':
                head[0]--;
                break;
            case 'up':
                head[1]--;
                break;
            case 'down':
                head[1]++;
                break;
        }
        
        if(!this._checkAlive(head)){
            this.alive = false;
            return;
        }
        
        /* getCell
         *  фрукт - покушали, хвост не отпал
         *  стена - gameover
         *  змея - gameoverстена - gameover
         * */
        
        let tail = this.cords.pop();
        this.matrix.setCell(tail[0], tail[1], '');
        this.cords.unshift(head);
        // this.matrix.setCell(head[0], head[1], 'snake');
        this.show();
    }

    _checkAlive(head){
        return head[0] >= 1 && head[0] <= this.matrix.cols &&
               head[1] >= 1 && head[1] <= this.matrix.rows;
    }
}