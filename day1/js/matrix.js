class Matrix{
    
    /* 
     * на дз - M x N
     * */
    constructor(elem, cols, rows){
        this.elem = elem;
        this.cols = cols;
        this.rows = rows;
        this.cells = [];
    }

    //Создать поле
    create(){
        for(let i = 0; i < this.cols*this.rows; i++){
            let div = document.createElement('div');
            this.elem.appendChild(div);
            this.cells[i] = '';
        }
    }
    
    getCell(x, y){
        let num = this._calcNum(x, y);
        return this.cells[num];
    }
    
    setCell(x, y, val){
        let num = this._calcNum(x, y);
        this.cells[num] = val;
        this.elem.children[num].className = val;
    }
    
    //Определяем номер ячейки
    _calcNum(x, y){
        return this.cols*(y-1)+(x-1);
    }
}