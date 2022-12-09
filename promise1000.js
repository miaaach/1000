// 六角學院Promise影片重點 間單來說promise用來解決callback hell
//1.非同步行為通常在程式碼最後才會執行

let p = new Promise((resolve, reject) => {//定義一個變數p等於new promise這個函式？，為什麼要有new呢？
  //我的理解是，如果setTimeout成功，三秒後回傳resolve裡面的字串，用.then接
  setTimeout(() => {
    let now = new Date();
    resolve(`完成工作 刷牙 at ${now.toISOString()}`);
  }, 3000);
});
//如果promise是成功的resolve會回傳.then,反之如果失敗reject會回傳.catch
p.then((data) => {
  console.log('拿回資料', data);
}).catch((error) => {
  console.error('發生問題了', error);
});
//我不知道程式碼從哪裡開始執行？這個程式碼在終端機裡面是報錯是'MODULE_NOT_FOUND',