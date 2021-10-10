// 1.

function draw(n) {
    let str = "";
    for(let i = 1; i <= n; i++) {
        str += "*";
    }
    console.log(str);
}

// 2.

function draw(n) {
    let str = "";
    for(let i = 1; i <=n; i++) {
        for(let j = 1; j <= n; j++) {
            str += "*";
        }
        str += "\n";
    }
    console.log(str);
}

//3.

function draw(n) {
    let str = "";
    for(let i = 1; i <=n; i++) {
        for(let j = 1; j <= n; j++) {
            str += j;
        }
        str += "\n";
    }
    console.log(str);
}

//4.

function draw(n) {
    let str = "";
    for(let i = 1; i <=n; i++) {
        for(let j = 1; j <= n; j++) {
            str += i;
        }
        str += "\n";
    }
    console.log(str);
}

//5.

function draw(n) {
    let str = "";
    for(let i = n; i >= 1; i--) {
        for(let j = 1; j <= n; j++) {
            str += i;
        }
        str += "\n";
    }
    console.log(str);
}

//6.

function draw(n) {
    let str = "";
    let v = 0;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            v += 1;
            str += v;
        }
        str += "\n";
    }
    console.log(str);
}

//7.

function draw(n) {
    let str = "";
    let v = n*n;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            str += v;
            v -= 1;
        }
        str += "\n";
    }
    console.log(str);
}

//8.

function draw(n) {
    let str = "";
    for (let i = 0; i < n; i++) {
        str += i*2;
        str += "\n";
    }
    console.log(str);
}

//9.

function draw(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        str += i*2;
        str += "\n";
    }
    console.log(str);
}

//10.

function draw(n) {
    let str = "";
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            str += j*i;
        }
        str += "\n";
    }
    console.log(str);
}

//11.

function draw(n) {
    let str = "";
    let symbol = null;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            symbol = (j == i)? "_": "*";
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 12.

function draw(n) {
    let str = "";
    let symbol = null;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            symbol = (j == (n-i+1))? "_": "*";
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 13.

function draw(n) {
    let str = "";
    let symbol = null;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            symbol = (j > i)? "_": "*";
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 14.

function draw(n) {
    let str = "";
    let symbol = null;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            symbol = (j > (n-i+1))? "_": "*";
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 15.

function draw(n) {
    let str = "";
    let symbol = null;
    for(let i = 1; i <= n*2 - 1 ; i++) {
        for(let j = 1; j <= n; j++) {
            symbol = (j > (n - Math.abs( n - i )) )? "_": "*";
            // symbol = "*"
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 17

function draw(n) {
    let str = "";
    let symbol = null;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            symbol = (j <= (n-i))? "_": "*";
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 18

function draw(n) {
    let str = "";
    let symbol = null;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            symbol = (j < i)? "_": "*";
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 19.

function draw(n) {
    let str = "";
    let symbol = null;
    for(let i = 1; i <= n*2 - 1 ; i++) {
        for(let j = 1; j <= n; j++) {
            symbol = (j <=  Math.abs( n - i ) )? "_": "*";
            // symbol = "*"
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 20.

function draw(n) {
    let str = "";
    let symbol = null;
    let v = 1;
    for(let i = 1; i <= n*2 - 1 ; i++) {
        for(let j = 1; j <= n; j++) {
            symbol = (j <=  Math.abs( n - i ) )? "-": v++;
            // symbol = "-"
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 21.

function draw(n) {
    let str = "";
    let symbol = null;
    let v = 1;
    for(let i = 1; i <= n ; i++) {
        for(let j = 1; j <= n*2 - 1; j++) {
            symbol = (Math.abs(n-j) >= i )? "-": "*";
            // symbol = "*"
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 22.

function draw(n) {
    let str = "";
    let symbol = null;
    let v = 1;
    for(let i = 1; i <= n ; i++) {
        for(let j = 1; j <= n*2 - 1; j++) {
            symbol = (i > (n - Math.abs(n-j)))? "-": "*";
            // symbol = "*"
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

//23

function draw(n) {
    let str = "";
    let symbol = null;
    for(let i = 1; i <= n*2 - 1 ; i++) {
        for(let j = 1; j <= n*2 -1; j++) {
            symbol = (Math.abs(n-i) >= (n-Math.abs(n-j)))? "_": "*";
            // symbol = "*"
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}

// 24

function draw(n) {
    let str = "";
    let symbol = null;
    let v = 1;
    for(let i = 1; i <= n*2 - 1 ; i++) {
        for(let j = 1; j <= n*2 -1; j++) {
            symbol = (Math.abs(n-i) >= (n-Math.abs(n-j)))? "_": v++;
            // symbol = "*"
            str += symbol;
        }
        str += "\n";
    }
    console.log(str);
}