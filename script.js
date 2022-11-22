let n = 8;
function queenAttackPositions(x, y) {
    let attacks = [];
    for (let i = 1; i <= n; i++) {
        attacks.push([x,i]);
        attacks.push([i,y]);
        if (y - i>0 && x - i>0){
            attacks.push([x - i, y - i]);
        }
        if (y - i>0 && x + i<n+1){
            attacks.push([x + i,y - i]);
        }
        if (y + i<n+1 && x - i>0){
            attacks.push([x - i,y + 1]);
        }
        if (y + i<n+1 && x + i<n+1){
            attacks.push([x + i,y + i]);
        }
    }
    return attacks;
}
function rookAttackPositions(x,y){
    let attacks=[];
    for (let i = 1; i <= n; i++) {
        attacks.push([x,i]);
        attacks.push([i,y]);
    }
    return attacks;
}
function pawnAttackPosition(x,y,c){
    
}
function bishopAttackPositions(x,y){
    let attacks = [];
    for (let i = 1; i <= n; i++) {
        if (y - i>0 && x - i>0){
            attacks.push([x - i, y - i]);
        }
        if (y - i>0 && x + i<n+1){
            attacks.push([x + i,y - i]);
        }
        if (y + i<n+1 && x - i>0){
            attacks.push([x - i,y + 1]);
        }
        if (y + i<n+1 && x + i<n+1){
            attacks.push([x + i,y + i]);
        }
    }
    return attacks;
}
function kingAttackPosition(x,y){
    let attacks = [];
    for (let i = 3; i <= n; i++) {
        attacks.push([x,i]);
        attacks.push([i,y]);
        if (y - i>0 && x - i>0){
            attacks.push([x - i, y - i]);
        }
        if (y - i>0 && x + i<n+1){
            attacks.push([x + i,y - i]);
        }
        if (y + i<n+1 && x - i>0){
            attacks.push([x - i,y + 1]);
        }
        if (y + i<n+1 && x + i<n+1){
            attacks.push([x + i,y + i]);
        }
    }
    return attacks;
}