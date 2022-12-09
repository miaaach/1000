//what is callback function? 定義是一種可以當作函式參數一樣被帶進其他韓式的函式
//白話文是『待會叫你』callback function其實是也是一般函式，差異在callback function是在指定時機觸發的，可以在做完某件事情的時候才呼叫callback function

//定義的一個dowork的變數 等於 建立一個function小括號裡面放了三個參數是job,timer,cb
let doWork = function (job, timer, cb) {
//根據網友kuro'blog，setTimeout() 的作用是在延遲了某段時間 (單位為毫秒) 之後，才去執行「一次」指定的程式碼，並且會回傳一個獨立的 timer ID，setTimeout一定會在所有程式碼執行完才會執行
  setTimeout(() => { //setTimeout後面第二個括號是什麼，是要放參數嗎？ 為什麼後面要用箭頭函式
//以下是我對箭頭函式的註解 例如
function random(n) {
  console.log(n);
}//下面的箭頭函式等於上面的函式
let random1 = n => console.log(n);
//箭頭左邊是自己定義的參數，箭頭右邊是上面大括號裡面的執行程式碼


let now = new Date();//定義一個now變數等於現在的時間，為什麼後面要括號，從cb開始這串為什麼要這樣寫呢？
  cb(null, `完成工作 ${job} at ${now.toISOString()}`);
  }, timer);
};


let now = new Date();
console.log(`工作開始 at ${now.toISOString()}`);
//上面這一行是會印出來的樣式
doWork('刷牙', 3000, (err, data) => {//(err, data)這個為什麼要這樣寫
  if (err) {
    console.error(err);
  } else {
    console.log(data);
    doWork('吃早餐', 5000, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
        doWork('寫功課', 3000, (err, data) => {
          if (err) {
            console.error(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});

//老師我寫完這些再開一個新視窗，看到這個題目只打出一個英文字母function// 刷牙 3 秒鐘 -> 吃早餐 5 秒鐘 -> 寫功課 3 秒鐘

