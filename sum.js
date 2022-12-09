function sum1(n) {
//定義一個sum1的函式，小括號裡是參數n,大括號裡運行函式
  let result = 0;
//定義變數result等於零
  for (let i = 1; i <= n; i++) {
//for迴圈小括號裡面放的是什麼
    result += i;//這一行看不懂
  }
  return result;
}

function sum2(n) {
  return ((1 + n) * n) / 2;
}

// O(1) 比 O(n)，O(1)比較快
// 在數字比較小的情況下、壓力不大的情況下是看不出來的甚至O(1)比較慢



console.time('SUM1');
for (let i = 0; i <= 10000; i++) {
  sum1(10000);
}
console.timeEnd('SUM1');

console.time('SUM2');
for (let i = 0; i <= 10000; i++) {
  sum2(10000);
}
console.timeEnd('SUM2');
