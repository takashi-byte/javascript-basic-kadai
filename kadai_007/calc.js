// 1以上の正の数を変数numに代入
let num = 15; // 例として15を代入

// 条件分岐
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
} else if (num % 3 === 0) {
    console.log("3の倍数です");
} else if (num % 5 === 0) {
    console.log("5の倍数です");
} else {
    console.log(num);
}
