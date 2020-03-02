# wx-rxjs
微信小程序方法的rxjs封装

注意：此js仅是对小程序的方法封装，不包含rxjs，请自行下载rxjs.js，将其放置在此js的同级路径

```javascript
//index.js
//获取应用实例
const app = getApp()
const tenp = require('./wx-rxjs.js');
const rxjs = tenp.rxjs
const { tap, pluck, mergeMap, delay, map } = rxjs.operators

Page({
  data: {
    
  },
  testClick(){
    tenp.getUserInfo().pipe(
      pluck('userInfo'),
      mergeMap(v => tenp.showLoading().pipe(
        delay(1000),
        mergeMap(v => tenp.hideLoading().pipe(map(() => v))),
        map(() => v)
      )),
      mergeMap(v => tenp.showModal({ title: '昵称', content: v.nickName, showCancel:false}))
    ).subscribe()
  }
})
```
