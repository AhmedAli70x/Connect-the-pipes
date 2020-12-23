function drawGrid(row, col) {
    for (let i = 1; i <= row; i++) {
        var rowHTML = document.createElement("div")
        rowHTML.id = `row-${i}`;
        rowHTML.classList = `row`;
        //draw rows
        for (let j = 1; j <= col; j++) {
            //draw cols
            var colHTML = document.createElement("div");
            colHTML.id = `col-${i}-${j}`;
            colHTML.classList = `cell col-sm-1 border border-dark `;
            // colHTML.innerHTML = `<img src='' id="img-${i}-${j}" />`;
            rowHTML.appendChild(colHTML);
        }
        $("#game-area").append(rowHTML);
    }
}
var directions = [0, 90, 180, 270];
class Pipe {
    // var dir = 0;
    //#dir;  //private direction
    //#ignored
    //#directions = [0, 90, 180, 270];
    constructor(src, dir, ignored,cell, id, type) {        
        this.src = src;
        this.dir = dir; //true direction of the pipe
        this.curDir = directions[Math.floor(Math.random() * 4)];
        this.cell = cell;
        this.id = id;
        //value straight(0) or not-straight(1)
        this.type = type;  
        //0 for ignored, 1 for not ignored (important) 
        this.ignored = ignored; 
        this.checked = this.checkMe();
    }
    setId(id) {
        this.id = id;
    }

    rotate() {
        $("#" + this.id).css("transform", "rotate(" + this.curDir + "deg)")
    }
    checkMe() {
        //check if the pipe is not ignored
        if(!this.ignored){
            if (!this.type) //!this.type that means it is a straight pipe
                return this.checked = ((this.dir == 0 || this.dir == 180) && (this.curDir == 0 || this.curDir == 180)) || ((this.dir == 90 || this.dir == 270) && (this.curDir == 90 || this.curDir == 270));
            //this means it is not straight
            else
                return this.checked = this.dir == this.curDir;
        }else{
            return this.checked = true;
        }
    }
    // get ignored()
    // {
    //     return this.ignored;
    // }
}
var levels=[
    [
        //pipe('src', 'direction', 'ignored(0,1)', 'cell', 'id', 'type(0,1)')
        new Pipe('22.png', 270, 0, 'col-1-1', 'pipe-1', 1),
        new Pipe('22.png', 90, 0, 'col-1-2', 'pipe-2', 1),
        new Pipe('22.png', 90, 1, 'col-2-1', 'pipe-3', 1),
        new Pipe('22.png', 270, 0, 'col-2-2', 'pipe-4', 1),
        new Pipe('11.png', 90, 0, 'col-2-3', 'pipe-5', 0),
        new Pipe('11.png', 90, 0, 'col-2-4', 'pipe-6', 0),
        new Pipe('22.png', 90, 0, 'col-2-5', 'pipe-7', 1),
        new Pipe('22.png', 270, 0, 'col-3-5', 'pipe-8', 1),
        new Pipe('11.png', 90, 0, 'col-3-6', 'pipe-9', 0),
        new Pipe('11.png', 90, 0, 'col-3-7', 'pipe-10', 0),
        new Pipe('22.png', 90, 0, 'col-3-8', 'pipe-11', 1),
        new Pipe('22.png',270, 0, 'col-4-8', 'pipe-12', 1),
        new Pipe('11.png', 90, 0, 'col-4-9', 'pipe-13',0),
        new Pipe('11.png', 90, 0, 'col-4-10', 'pipe-14', 0),
        new Pipe('22.png',90,0, 'col-4-11' ,  'pipe-15', 1),
        new Pipe('22.png',270, 0, 'col-5-11', 'pipe-16', 1),
        new Pipe('22.png',90, 0, 'col-5-12', 'pipe-17', 1),
        new Pipe('11.png', 180, 0, 'col-6-12', 'pipe-18',0),
        new Pipe('22.png', 90, 1, 'col-5-2', 'pipe-19',1),
        new Pipe('22.png', 90, 1, 'col-6-4', 'pipe-20', 1),
        new Pipe('11.png', 90, 1, 'col-6-9', 'pipe-21', 0),
        new Pipe('11.png', 0, 1, 'col-6-10', 'pipe-22', 1),
    ],
    [
        new Pipe('22.png', 270, 0, 'col-1-1', 'pipe-1', 1),
        new Pipe('11.png', 90, 0, 'col-1-2', 'pipe-2', 0),
        new Pipe('11.png', 90, 0, 'col-1-3', 'pipe-3', 0),
        new Pipe('22.png', 90, 0, 'col-1-4', 'pipe-4', 1),
        new Pipe('11.png', 0, 0, 'col-2-4', 'pipe-5', 0),
        new Pipe('22.png', 90, 1, 'col-2-10', 'pipe-6', 0),
        new Pipe('11.png', 0, 0, 'col-3-4', 'pipe-7', 0),
        new Pipe('11.png', 0, 1, 'col-3-9', 'pipe-8', 0),
        new Pipe('22.png', 270, 0, 'col-4-4', 'pipe-9', 1),
        new Pipe('11.png', 90, 0, 'col-4-5', 'pipe-10', 0),
        new Pipe('11.png', 90, 0, 'col-4-6', 'pipe-11', 0),
        new Pipe('22.png', 90, 0, 'col-4-7', 'pipe-12', 1),
        new Pipe('22.png', 270, 1, 'col-5-1', 'pipe-13', 0),
        new Pipe('11.png',0, 0, 'col-5-7', 'pipe-14', 0),
        new Pipe('22.png', 270, 0, 'col-6-7', 'pipe-15',1),
        new Pipe('22.png', 180, 0, 'col-6-8', 'pipe-16', 1),
        new Pipe('22.png',0,0, 'col-5-8' ,  'pipe-17', 1),
        new Pipe('11.png',90, 0, 'col-5-9', 'pipe-18', 0),
        new Pipe('11.png',90, 0, 'col-5-10', 'pipe-19', 0),
        new Pipe('22.png', 90, 0, 'col-5-11', 'pipe-20',1),
        new Pipe('22.png', 270, 0, 'col-6-11', 'pipe-21',1),
        new Pipe('22.png', 90, 0, 'col-6-12', 'pipe-22', 1),
        
    ],
    [
        new Pipe('11.png', 0, 0, 'col-1-1', 'pipe-1', 0),
        new Pipe('11.png', 180, 0, 'col-2-1', 'pipe-2', 0),
        new Pipe('22.png', 270, 0, 'col-3-1', 'pipe-3', 1),
        new Pipe('22.png', 90, 0, 'col-3-2', 'pipe-4', 1),
        new Pipe('22.png', 270, 0, 'col-4-2', 'pipe-5', 1),
        new Pipe('22.png', 90, 0, 'col-4-3', 'pipe-6', 1),
        new Pipe('11.png', 180, 0, 'col-5-3', 'pipe-7', 0),
        new Pipe('22.png', 270, 0, 'col-6-3', 'pipe-8', 1),
        new Pipe('22.png', 180, 0, 'col-6-4', 'pipe-9', 1),
        new Pipe('22.png', 0, 0, 'col-5-4', 'pipe-10', 1),
        new Pipe('11.png',90, 0, 'col-5-5', 'pipe-11', 0),
        new Pipe('11.png', 90, 0, 'col-5-6', 'pipe-12',0),
        new Pipe('22.png', 90, 0, 'col-5-7', 'pipe-13', 1),
        new Pipe('22.png',270,0, 'col-6-7' ,  'pipe-14', 1),
        new Pipe('11.png',90, 0, 'col-6-8', 'pipe-15', 0),
        new Pipe('22.png',180, 0, 'col-6-9', 'pipe-16', 1),
        new Pipe('22.png', 0, 0, 'col-5-9', 'pipe-17',1),
        new Pipe('11.png', 90, 0, 'col-5-10', 'pipe-18',0),
        new Pipe('11.png', 90, 0, 'col-5-11', 'pipe-19', 0),
        new Pipe('22.png', 90, 0, 'col-5-12', 'pipe-20', 1),
        new Pipe('11.png', 180, 0, 'col-6-12', 'pipe-21', 0),
    ],
    [
        new Pipe('11.png', 0, 0, 'col-1-1', 'pipe-1', 0),
        new Pipe('22.png', 270, 0, 'col-2-1', 'pipe-2', 1),
        new Pipe('11.png', 90, 0, 'col-2-2', 'pipe-3', 0),
        new Pipe('11.png', 90, 0, 'col-2-3', 'pipe-4', 0),
        new Pipe('22.png', 90, 1, 'col-3-3', 'pipe-5', 0),
        new Pipe('22.png', 90, 1, 'col-4-3', 'pipe-6', 0),
        new Pipe('22.png', 90, 0, 'col-2-4', 'pipe-7', 1),
        new Pipe('22.png', 270, 0, 'col-3-4', 'pipe-8', 1),
        new Pipe('22.png', 90, 0, 'col-3-5', 'pipe-9', 1),
        new Pipe('22.png', 270, 0, 'col-4-5', 'pipe-10', 1),
        new Pipe('22.png',270, 1, 'col-5-4', 'pipe-11', 0),
        new Pipe('11.png', 90, 0, 'col-4-6', 'pipe-12',0),
        new Pipe('11.png', 90, 0, 'col-4-7', 'pipe-13', 0),
        new Pipe('22.png',90, 0, 'col-4-8', 'pipe-14', 1),
        new Pipe('22.png',270, 0, 'col-5-8', 'pipe-15', 1),
        new Pipe('11.png', 90, 0, 'col-5-9', 'pipe-16',0),
        new Pipe('11.png', 90, 0, 'col-5-10', 'pipe-17',0),
        new Pipe('22.png', 90, 0, 'col-5-11', 'pipe-18', 1),
        new Pipe('22.png', 270, 0, 'col-6-11', 'pipe-19', 1),
        new Pipe('22.png', 90, 0, 'col-6-12', 'pipe-20', 1),
        new Pipe('22.png', 270, 1, 'col-4-10', 'pipe-21', 0),
        new Pipe('22.png', 270, 1, 'col-4-11', 'pipe-22', 0),
    ],
    [
        new Pipe('11.png', 0, 0, 'col-1-1', 'pipe-1', 0),
        new Pipe('22.png', 270, 0, 'col-2-1', 'pipe-2', 1),
        new Pipe('11.png', 90, 0, 'col-2-2', 'pipe-3', 0),
        new Pipe('22.png', 270, 0, 'col-2-3', 'pipe-4', 0),
        new Pipe('11.png', 180, 0, 'col-3-3', 'pipe-5', 0),
        new Pipe('11.png', 180, 0, 'col-4-3', 'pipe-6', 0),
        new Pipe('11.png', 180, 0, 'col-5-3', 'pipe-7', 0),
        new Pipe('22.png', 270, 0, 'col-6-3', 'pipe-8', 1),
        new Pipe('11.png', 90, 0, 'col-6-4', 'pipe-9', 0),
        new Pipe('11.png', 90, 0, 'col-6-5', 'pipe-10', 0),
        new Pipe('22.png', 180, 0, 'col-6-6', 'pipe-11', 1),
        new Pipe('11.png', 180, 0, 'col-5-6', 'pipe-12', 0),
        new Pipe('11.png', 180, 0, 'col-4-6', 'pipe-13', 0),
        new Pipe('22.png', 0, 0, 'col-3-6', 'pipe-14', 1),
        new Pipe('11.png', 90, 0, 'col-3-7', 'pipe-15', 0),
        new Pipe('11.png', 90, 0, 'col-3-8', 'pipe-16', 0),
        new Pipe('22.png', 90, 0, 'col-3-9', 'pipe-17', 1),
        new Pipe('11.png', 180, 0, 'col-4-9', 'pipe-18', 0),
        new Pipe('11.png', 180, 0, 'col-5-9', 'pipe-19', 0),
        new Pipe('22.png', 270, 0, 'col-6-9', 'pipe-20', 1),
        new Pipe('11.png', 90, 0, 'col-6-10', 'pipe-21', 0),
        new Pipe('22.png', 180, 0, 'col-6-11', 'pipe-22', 1),
        new Pipe('11.png', 180, 0, 'col-3-11', 'pipe-23', 0),
        new Pipe('11.png', 180, 0, 'col-4-11', 'pipe-24', 0),
        new Pipe('11.png', 180, 0, 'col-5-11', 'pipe-25', 0),
        new Pipe('22.png', 0, 0, 'col-2-11', 'pipe-26', 1),
        new Pipe('22.png', 90, 0, 'col-2-12', 'pipe-27', 1),
        new Pipe('11.png', 180, 0, 'col-3-12', 'pipe-28', 0),
        new Pipe('11.png', 180, 0, 'col-4-12', 'pipe-29', 0),
        new Pipe('11.png', 180, 0, 'col-5-12', 'pipe-30', 0),
        new Pipe('11.png', 180, 0, 'col-6-12', 'pipe-31', 0),
        new Pipe('11.png', 90, 1, 'col-6-8', 'pipe-32', 0),
        new Pipe('22.png', 0, 1, 'col-4-7', 'pipe-33', 1),
        new Pipe('22.png', 0, 1, 'col-5-7', 'pipe-34', 1),
        new Pipe('22.png', 90, 1, 'col-4-2', 'pipe-35', 1),
        new Pipe('22.png', 90, 1, 'col-5-2', 'pipe-36', 1),
        new Pipe('22.png', 0, 1, 'col-4-4', 'pipe-37', 1),
    ],
    [
        new Pipe('11.png', 0, 0, 'col-1-1', 'pipe-1', 0),
        new Pipe('11.png', 0, 0, 'col-2-1', 'pipe-2', 0),
        new Pipe('11.png', 0, 0, 'col-3-1', 'pipe-3', 0),
        new Pipe('11.png', 0, 0, 'col-4-1', 'pipe-4', 0),
        new Pipe('11.png', 0, 0, 'col-5-1', 'pipe-5', 0),
        new Pipe('22.png', 270, 0, 'col-6-1', 'pipe-6', 1),
        new Pipe('11.png', 90, 0, 'col-6-2', 'pipe-7', 0),
        new Pipe('11.png', 90, 0, 'col-6-3', 'pipe-8', 0),
        new Pipe('11.png', 90, 0, 'col-6-4', 'pipe-9', 0),
        new Pipe('11.png', 90, 0, 'col-6-5', 'pipe-10', 0),
        new Pipe('11.png', 90, 0, 'col-6-6', 'pipe-17', 0),
        new Pipe('22.png', 180, 0, 'col-6-7', 'pipe-11', 1),
        new Pipe('11.png', 0, 0, 'col-5-7', 'pipe-12', 0),
        new Pipe('11.png', 0, 0, 'col-4-7', 'pipe-13', 0),
        new Pipe('11.png', 0, 0, 'col-3-7', 'pipe-14', 0),
        new Pipe('11.png', 0, 0, 'col-2-7', 'pipe-15', 0),
        new Pipe('22.png', 0, 0, 'col-1-7', 'pipe-16', 1),
        new Pipe('11.png', 90, 0, 'col-1-8', 'pipe-15', 0),
        new Pipe('11.png', 90, 0, 'col-1-9', 'pipe-18', 0),
        new Pipe('11.png', 90, 0, 'col-1-10', 'pipe-19', 0),
        new Pipe('11.png', 90, 0, 'col-1-11', 'pipe-20', 0),
        new Pipe('22.png', 90, 0, 'col-1-12', 'pipe-21', 1),
        new Pipe('11.png', 0, 0, 'col-2-12', 'pipe-22', 0),
        new Pipe('11.png', 0, 0, 'col-3-12', 'pipe-23', 0),
        new Pipe('11.png', 0, 0, 'col-4-12', 'pipe-24', 0),
        new Pipe('11.png', 0, 0, 'col-5-12', 'pipe-25', 0),
        new Pipe('11.png', 0, 0, 'col-6-12', 'pipe-26', 0),
        new Pipe('22.png', 0, 1, 'col-2-2', 'pipe-27', 1),
        new Pipe('22.png', 90, 1, 'col-3-2', 'pipe-28', 1),
        new Pipe('22.png', 180, 1, 'col-3-3', 'pipe-29', 1),
        new Pipe('22.png', 270, 1, 'col-4-3', 'pipe-30', 1),
        new Pipe('22.png', 270, 1, 'col-4-4', 'pipe-31', 1),
        new Pipe('22.png', 270, 1, 'col-5-4', 'pipe-32', 1),
        new Pipe('11.png', 90, 1, 'col-5-5', 'pipe-33', 0),
        new Pipe('11.png', 0, 1, 'col-5-6', 'pipe-34', 0),
        new Pipe('22.png', 90, 1, 'col-2-8', 'pipe-35',1),
        new Pipe('22.png', 180, 1, 'col-3-9', 'pipe-36',1),
        new Pipe('22.png', 270, 1, 'col-4-9', 'pipe-37',1),
        new Pipe('22.png', 0, 1, 'col-4-10', 'pipe-38',1),
        new Pipe('22.png', 180, 1, 'col-5-10', 'pipe-39',1),
        new Pipe('22.png', 270, 1, 'col-5-11', 'pipe-40',1),
        new Pipe('22.png', 90, 1, 'col-6-11', 'pipe-41',1),
    ],
    [
        new Pipe('22.png', 270, 0, 'col-1-1', 'pipe-1', 1),
        new Pipe('11.png', 90, 0, 'col-1-2', 'pipe-2', 0),
        new Pipe('11.png', 90, 0, 'col-1-3', 'pipe-3', 0),
        new Pipe('11.png', 90, 0, 'col-1-4', 'pipe-4', 0),
        new Pipe('22.png', 90, 0, 'col-1-5', 'pipe-5', 1),
        new Pipe('22.png', 270, 0, 'col-2-5', 'pipe-6', 1),
        new Pipe('22.png', 180, 0, 'col-2-6', 'pipe-7', 1),
        new Pipe('22.png', 0, 0, 'col-1-6', 'pipe-8', 1),
        new Pipe('11.png', 90, 0, 'col-1-7', 'pipe-9', 0),
        new Pipe('22.png', 90, 0, 'col-1-8', 'pipe-10', 1),
        new Pipe('11.png', 0, 0, 'col-2-8', 'pipe-11', 0),
        new Pipe('11.png', 0, 0, 'col-3-8', 'pipe-12', 0),
        new Pipe('22.png', 180, 0, 'col-4-8', 'pipe-13', 1),
        new Pipe('11.png', 90, 0, 'col-4-7', 'pipe-14', 0),
        new Pipe('22.png', 0, 0, 'col-4-6', 'pipe-15', 1),
        new Pipe('22.png', 270, 0, 'col-5-6', 'pipe-16', 1),
        new Pipe('11.png', 90, 0, 'col-5-7', 'pipe-17', 0),
        new Pipe('11.png', 90, 0, 'col-5-8', 'pipe-18', 0),
        new Pipe('11.png', 90, 0, 'col-5-9', 'pipe-19', 0),
        new Pipe('11.png', 90, 0, 'col-5-10', 'pipe-20', 0),
        new Pipe('22.png', 90, 0, 'col-5-11', 'pipe-21', 1),
        new Pipe('22.png', 270, 0, 'col-6-11', 'pipe-22', 1),
        new Pipe('22.png', 90, 0, 'col-6-12', 'pipe-23', 1),
        new Pipe('11.png', 90, 1, 'col-3-3', 'pipe-24', 0),
        new Pipe('11.png', 0, 1, 'col-3-4', 'pipe-25', 0),
        new Pipe('22.png', 90, 1, 'col-3-5', 'pipe-26', 1),
        new Pipe('22.png', 180, 1, 'col-4-3', 'pipe-27', 1),
        new Pipe('11.png', 0, 1, 'col-4-4', 'pipe-28', 0),
        new Pipe('11.png', 90, 1, 'col-4-5', 'pipe-29', 0),
        new Pipe('22.png', 270, 1, 'col-5-5', 'pipe-25', 1),
        new Pipe('11.png', 0, 1, 'col-1-9', 'pipe-26', 0),
        new Pipe('22.png', 0, 1, 'col-2-9', 'pipe-27', 1),
        new Pipe('11.png', 0, 1, 'col-2-10', 'pipe-28', 0),
        new Pipe('11.png', 0, 1, 'col-3-10', 'pipe-29', 0),
        new Pipe('22.png', 270, 1, 'col-4-10', 'pipe-30', 1),
        new Pipe('11.png', 90, 1, 'col-4-11', 'pipe-31', 0)        
    ],
    [
        new Pipe('11.png', 0, 0, 'col-1-1', 'pipe-1', 0),
        new Pipe('11.png', 0, 0, 'col-2-1', 'pipe-2', 0),
        new Pipe('22.png', 270, 0, 'col-3-1', 'pipe-3', 1),
        new Pipe('11.png', 90, 0, 'col-3-2', 'pipe-4', 0),
        new Pipe('11.png', 90, 0, 'col-3-3', 'pipe-7', 0),
        new Pipe('22.png', 180, 0, 'col-3-4', 'pipe-8', 1),
        new Pipe('22.png', 0, 0, 'col-2-4', 'pipe-9', 1),
        new Pipe('11.png', 90, 0, 'col-2-5', 'pipe-10', 0),
        new Pipe('11.png', 90, 0, 'col-2-6', 'pipe-11', 0),
        new Pipe('11.png', 90, 0, 'col-2-7', 'pipe-12', 0),
        new Pipe('22.png', 90, 0, 'col-2-8', 'pipe-19', 1),
        new Pipe('22.png', 270, 0, 'col-3-8', 'pipe-13', 1),
        new Pipe('22.png', 90, 0, 'col-3-9', 'pipe-14', 1),
        new Pipe('22.png', 270, 0, 'col-4-9', 'pipe-15', 1),
        new Pipe('22.png', 90, 0, 'col-4-10', 'pipe-16', 1),
        new Pipe('22.png', 270, 0, 'col-5-10', 'pipe-17', 1),
        new Pipe('22.png', 90, 0, 'col-5-11', 'pipe-18', 1),
        new Pipe('22.png', 270, 0, 'col-6-11', 'pipe-20', 1),
        new Pipe('22.png', 90, 0, 'col-6-12', 'pipe-21', 1),
        new Pipe('11.png', 0, 1, 'col-5-12', 'pipe-22', 0),
        new Pipe('11.png', 90, 1, 'col-3-10', 'pipe-23', 0),
        new Pipe('22.png', 90, 1, 'col-2-10', 'pipe-24', 1),
        new Pipe('11.png', 0, 1, 'col-2-9', 'pipe-25', 0),
        new Pipe('11.png', 90, 1, 'col-6-9', 'pipe-26', 0),
        new Pipe('22.png', 270, 1, 'col-6-8', 'pipe-27', 1),
        new Pipe('11.png', 0, 1, 'col-5-8', 'pipe-28', 0),
        new Pipe('11.png', 0, 1, 'col-4-8', 'pipe-29', 0),
        new Pipe('22.png', 0, 1, 'col-4-7', 'pipe-30', 1),
        new Pipe('11.png', 0, 1, 'col-5-7', 'pipe-31', 0),
        new Pipe('11.png', 0, 1, 'col-3-6', 'pipe-32', 0),
        new Pipe('22.png', 180 ,1, 'col-4-6', 'pipe-33', 1),
        new Pipe('11.png', 90, 1, 'col-5-6', 'pipe-34', 0),
        new Pipe('11.png', 90, 1, 'col-4-5', 'pipe-35', 0),
        new Pipe('22.png', 0, 1, 'col-5-5', 'pipe-36', 1),
        new Pipe('11.png', 0, 1, 'col-6-6', 'pipe-34', 0),
        new Pipe('22.png', 270, 1, 'col-4-4', 'pipe-35', 1),
        new Pipe('11.png', 0, 1, 'col-5-4', 'pipe-36', 0),
        new Pipe('11.png', 0, 1, 'col-6-4', 'pipe-37', 0),
        new Pipe('22.png', 90, 1, 'col-4-3', 'pipe-38', 1),
        new Pipe('11.png', 0, 1, 'col-4-2', 'pipe-39', 0),
        new Pipe('11.png', 0, 1, 'col-4-1', 'pipe-40', 0),
    ],
    [
        new Pipe('11.png', 0, 0, 'col-1-1', 'pipe-1', 0),
        new Pipe('22.png', 270, 0, 'col-2-1', 'pipe-2', 1),
        new Pipe('11.png', 90, 0, 'col-2-2', 'pipe-3', 0),
        new Pipe('11.png', 90, 0, 'col-2-3', 'pipe-4', 0),
        new Pipe('22.png', 90, 0, 'col-2-4', 'pipe-5', 1),
        new Pipe('22.png', 270, 0, 'col-3-4', 'pipe-6', 1),
        new Pipe('22.png', 180, 0, 'col-3-5', 'pipe-7', 1),
        new Pipe('11.png', 180, 0, 'col-2-5', 'pipe-8', 0),
        new Pipe('22.png', 0, 0, 'col-1-5', 'pipe-9', 1),
        new Pipe('11.png', 90, 0, 'col-1-6', 'pipe-10', 0),
        new Pipe('11.png', 90, 0, 'col-1-7', 'pipe-11', 0),
        new Pipe('22.png', 90, 0, 'col-1-8', 'pipe-12', 1),
        new Pipe('11.png', 180, 0, 'col-2-8', 'pipe-13', 0),
        new Pipe('22.png', 180, 0, 'col-3-8', 'pipe-14', 1),
        new Pipe('22.png', 0, 0, 'col-3-7', 'pipe-15', 1),
        new Pipe('22.png', 180, 0, 'col-4-7', 'pipe-16', 1),
        new Pipe('11.png', 90, 0, 'col-1-6', 'pipe-17', 0),
        new Pipe('11.png', 90, 0, 'col-4-6', 'pipe-18', 0),
        new Pipe('22.png', 0, 0, 'col-4-5', 'pipe-20', 1),
        new Pipe('22.png', 270, 0, 'col-5-5', 'pipe-21', 1),
        new Pipe('11.png', 90, 0, 'col-5-6', 'pipe-22', 0),
        new Pipe('11.png', 90, 0, 'col-5-7', 'pipe-23', 0),
        new Pipe('22.png', 90, 0, 'col-5-8', 'pipe-24', 1),
        new Pipe('22.png', 270, 0, 'col-6-8', 'pipe-25', 1),
        new Pipe('22.png', 180, 0, 'col-6-9', 'pipe-26', 1),
        new Pipe('11.png', 180, 0, 'col-5-9', 'pipe-27', 0),
        new Pipe('11.png', 180, 0, 'col-4-9', 'pipe-28', 0),
        new Pipe('22.png', 0, 0, 'col-3-9', 'pipe-29', 1),
        new Pipe('11.png', 90, 0, 'col-3-10', 'pipe-30', 0),
        new Pipe('11.png', 90, 0, 'col-3-11', 'pipe-31', 0),
        new Pipe('22.png', 90, 0, 'col-3-12', 'pipe-32', 1),
        new Pipe('22.png', 180, 0, 'col-4-12', 'pipe-33', 1),
        new Pipe('22.png', 0, 0, 'col-4-11', 'pipe-34', 1),
        new Pipe('22.png', 270, 0, 'col-5-11', 'pipe-35', 1),
        new Pipe('22.png', 90, 0, 'col-5-12', 'pipe-36', 1),
        new Pipe('11.png', 180, 0, 'col-6-12', 'pipe-37', 0),
        new Pipe('22.png', 90, 1, 'col-3-2', 'pipe-38', 1),
        new Pipe('22.png', 90, 1, 'col-4-2', 'pipe-39', 1),
        new Pipe('11.png', 180, 1, 'col-6-10', 'pipe-40', 1),
        new Pipe('22.png', 90, 1, 'col-5-4', 'pipe-41', 1),
        new Pipe('22.png', 90, 1, 'col-6-4', 'pipe-42', 1)
    ]
];

function putImage(pipe, index) {
    var imgHTML = `<img  src="images/${pipe.src}" id="${pipe.id}" data-index="${index}" data-ignored="${pipe.ignored}" />`;
    $("#" + pipe.cell).html(imgHTML);
    pipe.rotate();
}
function putImages(pipes) {
    if (Array.isArray(pipes)) {
        for (let i = 0; i < pipes.length; i++) {
            putImage(pipes[i], i)
        }
    }
}
function resetGrid()
{
    $(".cell").html("");
}
function checkWin(pipes) {
    if (Array.isArray(pipes)) {
        for (let i = 0; i < pipes.length; i++) {
            if (!pipes[i].checked) return false;
        }
    }    
    return true;
}
function createBeginAndEnd()
{
    // create and append begin image
    var beginImage = document.createElement("img")
    beginImage.src = "images/11.png";
    beginImage.id = "img-begin-game";
    beginImage.style.position = "absolute";
    beginImage.style.left=0;
    beginImage.style.top = "-73px";
    beginImage.style.zIndex="-5";
    $("#col-1-1").append(beginImage)

    //create and append end image
    var endImage = document.createElement("img");
    endImage.src = "images/11.png";
    endImage.id = "img-end-game";
    endImage.style.position = "absolute";
    endImage.style.left="0px";
    endImage.style.top="72px";
    endImage.style.zIndex="-5";
    $("#col-6-12").append(endImage)
}
var loggedin, level = 0, pipes = levels[0];

function start()
{
    drawGrid(6, 12);
    // $("#start-up-modal").modal("show")
    //if localstorage 
    if(localStorage["email"] != undefined && localStorage.getItem("email") != "")
    {
        loggedin = {
            email:localStorage['email'],
            password:localStorage['password'],
            level:localStorage['level'],
            name:localStorage['name'],
        };
        loginHTML();
        $("#level-number").text( parseInt(localStorage["level"]) +1);
        pipes = levels[parseInt(localStorage["level"])];
    }
    else if(sessionStorage["email"] != undefined && sessionStorage.getItem("email") != "")
    {
        loggedin = {
            email:sessionStorage['email'],
            password:sessionStorage['password'],
            level:sessionStorage['level'],
            name:sessionStorage['name'],
        };
        loginHTML();
        $("#level-number").text( parseInt(sessionStorage["level"]) +1);
        pipes = levels[parseInt(sessionStorage["level"])];
    }
    else{
        loggedin = false;
        pipes = levels[0];
    }
    putImages(pipes);

    createBeginAndEnd();
}

function startLevel(level)
{
    if(level < levels.length)
    {
        // debugger;
        resetGrid();
        pipes = levels[level];
        putImages(pipes);
        //change level tag
        $("#level-number").text(parseInt(level) + 1);
        createBeginAndEnd();
    }
    else
        $("#end-levels").modal("show");
}
start();

//on pipe(images) clikced
$("#game-area").on('click', 'img', function () {
    var audio = document.getElementById("myaudio");
    audio.play()  
    //get the pipe object related to image that clicked
    var pipe = pipes[parseInt($(this).attr("data-index"))];
    //rotate the image element on the grid
    $(this).css("transform", "rotate(" + (pipe.curDir + 90) + "deg)")
    //change the value of the current direction of the object with the new degree
    pipe.curDir += 90;
    //reset curDir if it exceeds 270 degree
    if (pipe.curDir > 270) {
        //change the value in the object
        pipe.curDir = 0;
    }
    //set value of pipe.checked true if the current direct after changed is the right direction
    pipe.checkMe();

    //makes sure that the pipe objec is not ignored

    if(!pipe.ignored){
        //check all object if he wins(all pipes in right place and direction)
        if (checkWin(pipes)) {
            $("img[data-ignored=1]").fadeOut(1000);
            $("#winner").modal("show")
            var win = document.getElementById("mywin");
            win.play()
            //if there is loggedin user update database (user level)
            if(loggedin)
            {
                $.ajax({
                    url:'backend/updatelevel.php',
                    method:"POST",
                    data:{
                        email:loggedin.email,
                        submit:'update-level'
                    }
                })
            }
        }
    }
});
$("#btn-next-level").click(function(){
    startLevel(++level);
});

var p = new validation()
$("#register-name").blur(function(){
    p.validate("register-name","name","1")
})
$("#register-email").blur(function(){
    p.validate("register-email","email","1")
})
$("#register-password").blur(function(){
    p.validate("register-password","password","1")
})
$("#confirm-password").blur(function(){
    p.validate("confirm-password","confirmPass","register-password")
})
$("#login-email").blur(function(){
    p.validate('login-email', 'email', "1")
    // console.log("blue email")
})
$("#login-password").blur(function(){
    p.validate('login-password', 'password', "1")
})

//check if user saved loggedin status