var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Rxjs = require("./rxjs");
var Observable = Rxjs.Observable;
function createCommon(name, data) {
    if (data === void 0) { data = {}; }
    return Observable.create(function (rxs) {
        wx[name](__assign(__assign({}, data), { success: function (msg) {
                rxs.next(msg);
            },
            fail: function (e) {
                rxs.error(e);
            } }));
    });
}
var tenp;
(function (tenp) {
    tenp.rxjs = Rxjs;
    /**
     * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
     * @param schema
     * @returns boolean
     * @version 1.1.1
     */
    tenp.canIUse = function (schema) {
        return wx.canIUse(schema);
    };
    /**
     * 将 Base64 字符串转成 ArrayBuffer 对象
     *
     * 从基础库 2.4.0 开始，本接口停止维护
     * @param base64
     * @version 1.1.0
     */
    tenp.base64ToArrayBuffer = function (base64) {
        return wx.base64ToArrayBuffer(base64);
    };
    /**
     * 将 ArrayBuffer 对象转成 Base64 字符串
     *
     * 从基础库 2.4.0 开始，本接口停止维护
     * @param arrayBuffer
     * @version 1.1.0
     */
    tenp.arrayBufferToBase64 = function (arrayBuffer) {
        return wx.arrayBufferToBase64(arrayBuffer);
    };
    /**
     * wx.getSystemInfo 的同步版本
     */
    tenp.getSystemInfoSync = function () {
        return wx.getSystemInfoSync();
    };
    /**获取系统信息 */
    tenp.getSystemInfo = function () {
        return createCommon('getSystemInfo');
    };
    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档
     * @version 1.9.90
     */
    tenp.getUpdateManager = function () {
        return wx.getUpdateManager();
    };
    /**
     * 获取小程序启动时的参数。与 App.onLaunch 的回调参数一致
     * @version 2.1.2
     */
    tenp.getLaunchOptionsSync = function () {
        return wx.getLaunchOptionsSync();
    };
    /**
     * 获取本次小程序启动时的参数。如果当前是冷启动，则返回值与 App.onLaunch 的回调参数一致；如果当前是热启动，则返回值与 App.onShow 一致
     * @version 2.9.4
     */
    tenp.getEnterOptionsSync = function () {
        return wx.getEnterOptionsSync();
    };
    /**
     * 监听未处理的 Promise 拒绝事件。该事件与 App.onUnhandledRejection 的回调时机与参数一致。
     * @param callback
     * @version 2.10.0
     */
    tenp.onUnhandledRejection = function (callback) {
        wx.onUnhandledRejection(callback);
    };
    /**
     * 监听小程序要打开的页面不存在事件。该事件与 App.onPageNotFound 的回调时机一致
     * @param callback
     * @version 2.1.2
     */
    tenp.onPageNotFound = function (callback) {
        wx.onPageNotFound(callback);
    };
    /**
     * 监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 App.onError 的回调时机与参数一致
     * @param callback
     * @version 2.1.2
     */
    tenp.onError = function (callback) {
        wx.onError(callback);
    };
    /**
     * 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
     * @param callback
     * @version 2.6.2
     */
    tenp.onAudioInterruptionEnd = function (callback) {
        wx.onAudioInterruptionEnd(callback);
    };
    /**
     * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停
     * @param callback
     * @version 2.6.2
     */
    tenp.onAudioInterruptionBegin = function (callback) {
        wx.onAudioInterruptionBegin(callback);
    };
    /**
     * 监听小程序切前台事件。该事件与 App.onShow 的回调参数一致
     * @param callback
     * @version 2.1.2
     */
    tenp.onAppShow = function (callback) {
        wx.onAppShow(callback);
    };
    /**
     * 监听小程序切后台事件。该事件与 App.onHide 的回调时机一致
     * @param callback
     * @version 2.1.2
     */
    tenp.onAppHide = function (callback) {
        wx.onAppHide(callback);
    };
    /**
     * 取消监听未处理的 Promise 拒绝事件
     * @param callback
     * @version 2.1.2
     */
    tenp.offUnhandledRejection = function (callback) {
        wx.offUnhandledRejection(callback);
    };
    /**
     * 取消监听小程序要打开的页面不存在事件
     * @param callback
     * @version 2.1.2
     */
    tenp.offPageNotFound = function (callback) {
        wx.offPageNotFound(callback);
    };
    /**
     * 取消监听小程序错误事件
     * @param callback
     * @version 2.1.2
     */
    tenp.offError = function (callback) {
        wx.offError(callback);
    };
    /**
     * 取消监听音频中断结束事件
     * @param callback
     * @version 2.6.2
     */
    tenp.offAudioInterruptionEnd = function (callback) {
        wx.offAudioInterruptionEnd(callback);
    };
    /**
     * 取消监听音频因为受到系统占用而被中断开始事件
     * @param callback
     * @version 2.6.2
     */
    tenp.offAudioInterruptionBegin = function (callback) {
        wx.offAudioInterruptionBegin(callback);
    };
    /**
     * 取消监听小程序切前台事件
     * @param callback
     * @version 2.1.2
     */
    tenp.offAppShow = function (callback) {
        wx.offAppShow(callback);
    };
    /**
     * 取消监听小程序切后台事件
     * @param callback
     * @version 2.1.2
     */
    tenp.offAppHide = function (callback) {
        wx.offAppHide(callback);
    };
    /**
     * 设置是否打开调试开关。此开关对正式版也能生效
     * @param data
     * @version 1.4.0
     */
    tenp.setEnableDebug = function (data) {
        return createCommon('setEnableDebug', data);
    };
    /**
     * 获取实时日志管理器对象
     * @version  2.7.1
     */
    tenp.getRealtimeLogManager = function () {
        return wx.getRealtimeLogManager();
    };
    /**
     * 获取日志管理器对象
     * @param level
     * @version 2.1.0
     */
    tenp.getLogManager = function (level) {
        return wx.getLogManager(level);
    };
    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     * @param url
     */
    tenp.switchTab = function (url) {
        return createCommon('switchTab', { url: url });
    };
    /**
     * 关闭所有页面，打开到应用内的某个页面
     * @param url
     */
    tenp.reLaunch = function (url) {
        return createCommon('reLaunch', { url: url });
    };
    /**
     * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
     * @param url
     */
    tenp.redirectTo = function (url) {
        return createCommon('redirectTo', { url: url });
    };
    /**
     * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层
     * @param url
     */
    tenp.navigateTo = function (url) {
        return createCommon('navigateTo', { url: url });
    };
    /**
     * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层
     * @param delta
     */
    tenp.navigateBack = function (delta) {
        return createCommon('navigateBack', { delta: delta });
    };
    /**
     * 显示消息提示框
     */
    tenp.showToast = function (data) {
        return createCommon('showToast', data);
    };
    /**
     * 显示模态对话框
     */
    tenp.showModal = function (data) {
        return createCommon('showModal', data);
    };
    /**
     * 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
     */
    tenp.showLoading = function (data) {
        return createCommon('showLoading', data);
    };
    /**
     * 显示操作菜单
     */
    tenp.showActionSheet = function (data) {
        return createCommon('showActionSheet', data);
    };
    /**
     * 隐藏消息提示框
     */
    tenp.hideToast = function () {
        return createCommon('hideToast');
    };
    /**
     * 隐藏 loading 提示框
     */
    tenp.hideLoading = function () {
        return createCommon('hideLoading');
    };
    /**
     * 在当前页面显示导航条加载动画
     */
    tenp.showNavigationBarLoading = function () {
        return createCommon('showNavigationBarLoading');
    };
    /**
     * 动态设置当前页面的标题
     */
    tenp.setNavigationBarTitle = function (title) {
        return createCommon('setNavigationBarTitle', { title: title });
    };
    /**
     * 设置页面导航条颜色
     * @version 1.4.0
     */
    tenp.setNavigationBarColor = function (data) {
        return createCommon('setNavigationBarColor', data);
    };
    /**
     * 在当前页面隐藏导航条加载动画
     */
    tenp.hideNavigationBarLoading = function () {
        return createCommon('hideNavigationBarLoading');
    };
    /**
     * 隐藏返回首页按钮。微信7.0.7版本起，当用户打开的小程序最底层页面是非首页时，默认展示“返回首页”按钮，开发者可在页面 onShow 中调用 hideHomeButton 进行隐藏。
     * @version 2.8.3
     */
    tenp.hideHomeButton = function () {
        return createCommon('hideHomeButton');
    };
    /**
     * 动态设置下拉背景字体、loading 图的样式
     * @version 2.1.0
     */
    tenp.setBackgroundTextStyle = function (textStyle) {
        return createCommon('setBackgroundTextStyle', { textStyle: textStyle });
    };
    /**
     * 动态设置窗口的背景色
     * @version 2.1.0
     */
    tenp.setBackgroundColor = function (data) {
        return createCommon('setBackgroundColor', data);
    };
    /**
     * 显示 tabBar 某一项的右上角的红点
     * @version 1.9.0
     */
    tenp.showTabBarRedDot = function (index) {
        return createCommon('showTabBarRedDot', { index: index });
    };
    /**
     * 显示 tabBar
     * @version 1.9.0
     */
    tenp.showTabBar = function (animation) {
        return createCommon('showTabBar', { animation: animation });
    };
    /**
     * 动态设置 tabBar 的整体样式
     * @version 1.9.0
     */
    tenp.setTabBarStyle = function (data) {
        return createCommon('setTabBarStyle', data);
    };
    /**
     * 动态设置 tabBar 某一项的内容，2.7.0 起图片支持临时文件和网络文件
     * @version 1.9.0
     */
    tenp.setTabBarItem = function (data) {
        return createCommon('setTabBarItem', data);
    };
    /**
     * 为 tabBar 某一项的右上角添加文本
     * @version 1.9.0
     */
    tenp.setTabBarBadge = function (data) {
        return createCommon('setTabBarBadge', data);
    };
    /**
     * 移除 tabBar 某一项右上角的文本
     * @version 1.9.0
     */
    tenp.removeTabBarBadge = function (index) {
        return createCommon('removeTabBarBadge', { index: index });
    };
    /**
     * 隐藏 tabBar 某一项的右上角的红点
     * @version 1.9.0
     */
    tenp.hideTabBarRedDot = function (index) {
        return createCommon('hideTabBarRedDot', { index: index });
    };
    /**
     * 隐藏 tabBar
     * @version 1.9.0
     */
    tenp.hideTabBar = function (animation) {
        return createCommon('hideTabBar', { animation: animation });
    };
    /**
     * 动态加载网络字体，文件地址需为下载类型。'2.10.0'起支持全局生效，需在 app.js 中调用
     * @param data
     * @version 2.1.0
     */
    tenp.loadFontFace = function (data) {
        return createCommon('loadFontFace', data);
    };
    /**
     * 停止当前页面下拉刷新
     * @version 1.5.0
     */
    tenp.stopPullDownRefresh = function () {
        return createCommon('stopPullDownRefresh');
    };
    /**
     * 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
     * @version 1.5.0
     */
    tenp.startPullDownRefresh = function () {
        return createCommon('startPullDownRefresh');
    };
    /**
     * 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
     * @version 1.4.0
     */
    tenp.pageScrollTo = function (data) {
        return createCommon('pageScrollTo', data);
    };
    /**
     * 创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性
     */
    tenp.createAnimation = function (data) {
        return wx.createAnimation(data);
    };
    /**
     * 动态设置置顶栏文字内容。只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容
     * @param text
     * @version 1.4.3
     */
    tenp.setTopBarText = function (text) {
        return createCommon('setTopBarText', { text: text });
    };
    /**
     * 延迟一部分操作到下一个时间片再执行。（类似于 setTimeout
     * @version 2.2.3
     */
    tenp.nextTick = function (callback) {
        wx.nextTick(callback);
    };
    /**
     * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点
     * @version 2.1.0
     */
    tenp.getMenuButtonBoundingClientRect = function () {
        return createCommon('getMenuButtonBoundingClientRect');
    };
    /**
     * 监听窗口尺寸变化事件
     * @version 2.3.0
     */
    tenp.onWindowResize = function (callback) {
        wx.onWindowResize(callback);
    };
    /**
     * 取消监听窗口尺寸变化事件
     * @version 2.3.0
     */
    tenp.offWindowResize = function () {
        wx.offWindowResize();
    };
    /**
     * 监听键盘高度变化
     * @version 2.7.0
     */
    tenp.onKeyboardHeightChange = function (callback) {
        wx.onKeyboardHeightChange(callback);
    };
    /**
     * 在input、textarea等focus拉起键盘之后，手动调用此接口收起键盘
     * @version 2.8.2
     */
    tenp.hideKeyboard = function () {
        return createCommon('hideKeyboard');
    };
    /**
     * 在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效
     * @version  2.7.0
     */
    tenp.getSelectedTextRange = function () {
        return createCommon('getSelectedTextRange');
    };
    /**wx.setStorage 的同步版本 */
    tenp.setStorageSync = function (key, data) {
        wx.setStorageSync(key, data);
    };
    /**
     * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB
     */
    tenp.setStorage = function (data) {
        return createCommon('setStorage', data);
    };
    /**wx.removeStorageSync 的同步版本 */
    tenp.removeStorageSync = function (key) {
        wx.removeStorageSync(key);
    };
    /**从本地缓存中移除指定 key */
    tenp.removeStorage = function (key) {
        return createCommon('removeStorage', { key: key });
    };
    /**wx.getStorageSync 的同步版本 */
    tenp.getStorageSync = function (key) {
        wx.getStorageSync(key);
    };
    /**wx.getStorageInfoSync 的同步版本 */
    tenp.getStorageInfoSync = function () {
        return wx.getStorageInfoSync();
    };
    /**异步获取当前storage的相关信息 */
    tenp.getStorageInfo = function () {
        return createCommon('getStorageInfo');
    };
    /**从本地缓存中异步获取指定 key 的内容 */
    tenp.getStorage = function (key) {
        return createCommon('getStorage', { key: key });
    };
    /**wx.clearStorageSync 的同步版本 */
    tenp.clearStorageSync = function () {
        wx.clearStorageSync();
    };
    /**清理本地数据缓存 */
    tenp.clearStorage = function () {
        return createCommon('clearStorage');
    };
    /**设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性 */
    tenp.setBackgroundFetchToken = function (token) {
        return createCommon('setBackgroundFetchToken', { token: token });
    };
    /**
     * 收到 backgroundFetch 数据时的回调
     * @version 2.8.0
     */
    tenp.onBackgroundFetchData = function () {
        return createCommon('onBackgroundFetchData');
    };
    /**
     * 获取设置过的自定义登录态。若无，则返回 fail。
     * @version 2.8.0
     */
    tenp.getBackgroundFetchToken = function () {
        return createCommon('getBackgroundFetchToken');
    };
    /**
     * 拉取 backgroundFetch 客户端缓存数据
     * @version 2.8.0
     */
    tenp.getBackgroundFetchData = function () {
        return createCommon('getBackgroundFetchData');
    };
    /**
     * 关闭监听实时位置变化，前后台都停止消息接收
     * @version 2.8.0
     */
    tenp.stopLocationUpdate = function () {
        return createCommon('stopLocationUpdate');
    };
    /**
     * 开启小程序进入前后台时均接收位置消息，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化
     * @version 2.8.0
     */
    tenp.startLocationUpdateBackground = function () {
        return createCommon('startLocationUpdateBackground');
    };
    /**
     * 开启小程序进入前台时接收位置消息
     * @version 2.8.0
     */
    tenp.startLocationUpdate = function () {
        return createCommon('startLocationUpdate');
    };
    /**
     * 使用微信内置地图查看位置
     */
    tenp.openLocation = function (data) {
        return createCommon('openLocation', data);
    };
    /**
     * 监听实时地理位置变化事件，需结合 wx.startLocationUpdateBackground、wx.startLocationUpdate使用
     * @version 2.8.1
     */
    tenp.onLocationChange = function (callback) {
        wx.onLocationChange(callback);
    };
    /**
     * 取消监听实时地理位置变化事件
     * @version 2.8.1
     */
    tenp.offLocationChange = function () {
        wx.offLocationChange();
    };
    /**
     * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间
     * @param data
     */
    tenp.getLocation = function (data) {
        return createCommon('getLocation', data);
    };
    /**
     * 打开地图选择位置
     * @param data
     */
    tenp.chooseLocation = function (data) {
        return createCommon('chooseLocation', data);
    };
    /**
     * 更新转发属性
     * @version 1.2.0
     */
    tenp.updateShareMenu = function (data) {
        return createCommon('updateShareMenu', data);
    };
    /**
     * 显示当前页面的转发按钮
     * @version 1.1.0
     */
    tenp.showShareMenu = function (data) {
        return createCommon('showShareMenu', data);
    };
    /**
     * 隐藏转发按钮
     * @version 1.1.0
     */
    tenp.hideShareMenu = function () {
        return createCommon('hideShareMenu');
    };
    /**
     * 获取转发详细信息
     * @version 1.1.0
     */
    tenp.getShareInfo = function (data) {
        return createCommon('getShareInfo', data);
    };
    /**
     * 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
     * @param tempFilePath
     */
    tenp.saveFile = function (tempFilePath) {
        return createCommon('saveFile', { tempFilePath: tempFilePath });
    };
    /**
     * 删除本地缓存文件
     * @param filePath
     */
    tenp.removeSavedFile = function (filePath) {
        return createCommon('removeSavedFile', { filePath: filePath });
    };
    /**
     * 新开页面打开文档
     * @param filePath
     */
    tenp.openDocument = function (data) {
        return createCommon('openDocument', data);
    };
    /**
     * 获取该小程序下已保存的本地缓存文件列表
     */
    tenp.getSavedFileList = function () {
        return createCommon('getSavedFileList');
    };
    /**
     * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo() 接口
     */
    tenp.getSavedFileInfo = function (filePath) {
        return createCommon('getSavedFileInfo', { filePath: filePath });
    };
    /**
     * 获取全局唯一的文件管理器
     */
    tenp.getFileSystemManager = function () {
        return wx.getFileSystemManager();
    };
    /**
     * 获取文件信息
     * @param data
     * @version 1.4.0
     */
    tenp.getFileInfo = function (data) {
        return createCommon('getFileInfo', data);
    };
    /**
     * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。
     * @param timeout
     */
    tenp.login = function (timeout) {
        return createCommon('login', { timeout: timeout });
    };
    /**
     * 检查登录态是否过期
     */
    tenp.checkSession = function () {
        return createCommon('checkSession');
    };
    /**
     * 打开另一个小程序
     * @version 1.3.0
     */
    tenp.navigateToMiniProgram = function (data) {
        return createCommon('navigateToMiniProgram');
    };
    /**
     * 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功
     * @version 1.3.0
     */
    tenp.navigateBackMiniProgram = function (extraData) {
        return createCommon('navigateBackMiniProgram', { extraData: extraData });
    };
    /**
     * 获取当前帐号信息。线上小程序版本号仅支持在正式版小程序中获取，开发版和体验版中无法获取
     * @version 2.2.2
     */
    tenp.getAccountInfoSync = function () {
        return wx.getAccountInfoSync();
    };
    /**
     * 获取用户信息
     * @param data
     */
    tenp.getUserInfo = function (data) {
        return createCommon('getUserInfo', data);
    };
    /**自定义业务数据监控上报接口 */
    tenp.reportMonitor = function (name, value) {
        wx.reportMonitor(name, value);
    };
    /**自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段 */
    tenp.reportAnalytics = function (eventName, data) {
        wx.reportAnalytics(eventName, data);
    };
    /**发起微信支付 */
    tenp.requestPayment = function (data) {
        return createCommon('requestPayment', data);
    };
    /**
     * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功
     * @param scope
     */
    tenp.authorize = function (scope) {
        return createCommon('authorize', { scope: scope });
    };
    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限
     *
     * 注意：2.3.0 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息
     */
    tenp.openSetting = function () {
        return createCommon('openSetting');
    };
    /**
     * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
     * @param withSubscriptions
     */
    tenp.getSetting = function (withSubscriptions) {
        return createCommon('getSetting', { withSubscriptions: withSubscriptions });
    };
    /**
     * 获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址
     * @version 1.1.0
     */
    tenp.chooseAddress = function () {
        return createCommon('chooseAddress');
    };
    /**
     * 查看微信卡包中的卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 微信卡券接口文档
     * @version 1.1.0
     */
    tenp.openCard = function (cardList) {
        return createCommon('openCard', { cardList: cardList });
    };
    /**
     * 批量添加卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用
     * @version 1.1.0
     */
    tenp.addCard = function (cardList) {
        return createCommon('addCard', { cardList: cardList });
    };
    /**
     * 选择用户的发票抬头。当前小程序必须关联一个公众号，且这个公众号是完成了微信认证的，才能调用 chooseInvoiceTitle
     * @version 1.5.0
     */
    tenp.chooseInvoiceTitle = function () {
        return createCommon('chooseInvoiceTitle');
    };
    /**
     * 选择用户已有的发票
     * @version 2.3.0
     */
    tenp.chooseInvoice = function () {
        return createCommon('chooseInvoice');
    };
    /**
     * 开始 SOTER 生物认证。验证流程请参考说明
     * @version 1.5.0
     */
    tenp.startSoterAuthentication = function (data) {
        return createCommon('startSoterAuthentication');
    };
    /**
     * 获取本机支持的 SOTER 生物认证方式
     * @version 1.5.0
     */
    tenp.checkIsSupportSoterAuthentication = function () {
        return createCommon('checkIsSupportSoterAuthentication');
    };
    /**
     * 获取设备内是否录入如指纹等生物信息的接口
     * @version 1.6.0
     */
    tenp.checkIsSoterEnrolledInDevice = function (checkAuthMode) {
        return createCommon('checkIsSoterEnrolledInDevice', { checkAuthMode: checkAuthMode });
    };
    /**
     * 获取用户过去三十天微信运动步数。需要先调用 wx.login 接口。步数信息会在用户主动进入小程序时更新
     * @version 1.2.0
     */
    tenp.getWeRunData = function () {
        return createCommon('getWeRunData');
    };
    /**
     * 自定义性能监控上报。使用前，需要在小程序管理后台配置。 详情参见测速系统指南
     * @param id
     * @param value
     * @version 2.9.2
     */
    tenp.reportPerformance = function (id, value) {
        wx.reportPerformance(id, value);
    };
    /**
     * 调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小程序设置页，通过 wx.getSetting 接口可获取用户对相关模板消息的订阅状态
     * @version 2.4.4
     */
    tenp.requestSubscribeMessage = function (tmplIds) {
        return createCommon('requestSubscribeMessage', { tmplIds: tmplIds });
    };
    /**
     * 拉取h5领取红包封面页。获取参考红包封面地址参考 微信红包封面开发平台
     * @version 2.10.0
     */
    tenp.showRedPackage = function (url) {
        return createCommon('showRedPackage', { url: url });
    };
    /**
     * 停止搜索附近的 iBeacon 设备
     * @version 1.2.0
     */
    tenp.stopBeaconDiscovery = function () {
        return createCommon('stopBeaconDiscovery');
    };
    /**
     * 开始搜索附近的 iBeacon 设备
     * @version 1.2.0
     */
    tenp.startBeaconDiscovery = function (data) {
        return createCommon('startBeaconDiscovery', data);
    };
    /**
     * 监听 iBeacon 设备更新事件，仅能注册一个监听
     * @param callback
     * @version 1.2.0
     */
    tenp.onBeaconUpdate = function (callback) {
        wx.onBeaconUpdate(callback);
    };
    /**
     * 监听 iBeacon 服务状态变化事件，仅能注册一个监听
     * @version 1.2.0
     */
    tenp.onBeaconServiceChange = function (callback) {
        wx.onBeaconServiceChange(callback);
    };
    /**
     * 取消监听 iBeacon 设备更新事件
     * @version 2.8.1
     */
    tenp.offBeaconUpdate = function () {
        wx.offBeaconUpdate();
    };
    /**
     * 取消监听 iBeacon 服务状态变化事件
     * @version 2.8.1
     */
    tenp.offBeaconServiceChange = function () {
        wx.offBeaconServiceChange();
    };
    /**
     * 获取所有已搜索到的 iBeacon 设备
     * @version 1.2.0
     */
    tenp.getBeacons = function () {
        return createCommon('getBeacons');
    };
    /**
     * 关闭 Wi-Fi 模块
     * @version 1.6.0
     */
    tenp.stopWifi = function () {
        return createCommon('stopWifi');
    };
    /**
     * 开启 Wi-Fi 模块
     * @version 1.6.0
     */
    tenp.startWifi = function () {
        return createCommon('startWifi');
    };
    /**
     * 设置 wifiList 中 AP 的相关信息。在 onGetWifiList 回调后调用，iOS特有接口
     * @version 1.6.0
     */
    tenp.setWifiList = function (wifiList) {
        return createCommon('setWifiList', { wifiList: wifiList });
    };
    /**
     * 监听连接上 Wi-Fi 的事件
     * @version 1.6.0
     */
    tenp.onWifiConnected = function (callback) {
        wx.onWifiConnected(callback);
    };
    /**
     * 监听获取到 Wi-Fi 列表数据事件
     * @param callback
     * @version 1.6.0
     */
    tenp.onGetWifiList = function (callback) {
        wx.onGetWifiList(callback);
    };
    /**
     * 取消监听连接上 Wi-Fi 的事件
     * @version 2.9.0
     */
    tenp.offWifiConnected = function () {
        wx.offWifiConnected();
    };
    /**
     * 取消监听获取到 Wi-Fi 列表数据事件
     * @version 2.9.0
     */
    tenp.offGetWifiList = function () {
        wx.offGetWifiList();
    };
    /**
     * 请求获取 Wi-Fi 列表。在 onGetWifiList 注册的回调中返回 wifiList 数据。 Android 调用前需要 用户授权 scope.userLocation
     *
     * iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。 iOS 11.0 及 iOS 11.1 两个版本因系统问题，该方法失效。但在 iOS 11.2 中已修复。
     */
    tenp.getWifiList = function () {
        return createCommon('getWifiList');
    };
    /**
     * 获取已连接中的 Wi-Fi 信息
     * @version 1.6.0
     */
    tenp.getConnectedWifi = function () {
        return createCommon('getConnectedWifi');
    };
    /**
     * 连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持
     * @version 1.6.0
     */
    tenp.connectWifi = function (data) {
        return createCommon('connectWifi', data);
    };
    /**
     * 添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录
     * @param data
     */
    tenp.addPhoneContact = function (data) {
        return createCommon('addPhoneContact', data);
    };
    /**
     * 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用
     */
    tenp.writeBLECharacteristicValue = function (data) {
        return createCommon('writeBLECharacteristicValue', data);
    };
    /**
     * 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用
     */
    tenp.readBLECharacteristicValue = function (data) {
        return createCommon('readBLECharacteristicValue', data);
    };
    /**
     * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
     */
    tenp.onBLEConnectionStateChange = function (callback) {
        wx.onBLEConnectionStateChange(callback);
    };
    /**
     * 监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification
     */
    tenp.onBLECharacteristicValueChange = function (callback) {
        wx.onBLECharacteristicValueChange(callback);
    };
    /**
     * 取消监听低功耗蓝牙连接状态的改变事件
     */
    tenp.offBLEConnectionStateChange = function () {
        wx.offBLEConnectionStateChange();
    };
    /**
     * 取消监听低功耗蓝牙设备的特征值变化事件
     * @version 2.9.0
     */
    tenp.offBLECharacteristicValueChange = function () {
        wx.offBLECharacteristicValueChange();
    };
    /**
     * 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。
     *
     * 另外，必须先启用 notifyBLECharacteristicValueChange 才能监听到设备 characteristicValueChange 事件
     */
    tenp.notifyBLECharacteristicValueChange = function (data) {
        return createCommon('notifyBLECharacteristicValueChange', data);
    };
    /**
     * 获取蓝牙设备所有服务(service)
     */
    tenp.getBLEDeviceServices = function (deviceId) {
        return createCommon('getBLEDeviceServices', { deviceId: deviceId });
    };
    /**
     * 获取蓝牙设备某个服务中所有特征值(characteristic)。
     * @param data
     */
    tenp.getBLEDeviceCharacteristics = function (data) {
        return createCommon('getBLEDeviceCharacteristics', data);
    };
    /**
     * 连接低功耗蓝牙设备。
     */
    tenp.createBLEConnection = function (data) {
        return createCommon('createBLEConnection', data);
    };
    /**
     * 断开与低功耗蓝牙设备的连接
     * @param deviceId
     */
    tenp.closeBLEConnection = function (deviceId) {
        return createCommon('closeBLEConnection', { deviceId: deviceId });
    };
    /**
     * 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索
     */
    tenp.stopBluetoothDevicesDiscovery = function () {
        return createCommon('stopBluetoothDevicesDiscovery');
    };
    /**
     * 开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，请在搜索并连接到设备后调用 wx.stopBluetoothDevicesDiscovery 方法停止搜索
     */
    tenp.startBluetoothDevicesDiscovery = function (data) {
        return createCommon('startBluetoothDevicesDiscovery', data);
    };
    /**
     * 初始化蓝牙模块
     */
    tenp.openBluetoothAdapter = function () {
        return createCommon('openBluetoothAdapter');
    };
    /**监听寻找到新设备的事件 */
    tenp.onBluetoothDeviceFound = function (callback) {
        wx.onBluetoothDeviceFound(callback);
    };
    /**
     * 监听蓝牙适配器状态变化事件
     */
    tenp.onBluetoothAdapterStateChange = function (callback) {
        wx.onBluetoothAdapterStateChange(callback);
    };
    /**
     * 取消监听寻找到新设备的事件
     * @version 2.9.0
     */
    tenp.offBluetoothDeviceFound = function () {
        wx.offBluetoothDeviceFound();
    };
    /**
     * 取消监听蓝牙适配器状态变化事件
     * @version 2.9.0
     */
    tenp.offBluetoothAdapterStateChange = function () {
        wx.offBluetoothAdapterStateChange();
    };
    /**
     * 根据 uuid 获取处于已连接状态的设备
     */
    tenp.getConnectedBluetoothDevices = function (services) {
        return createCommon('getConnectedBluetoothDevices', { services: services });
    };
    /**
     * 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
     */
    tenp.getBluetoothDevices = function () {
        return createCommon('getBluetoothDevices');
    };
    /**
     * 获取本机蓝牙适配器状态
     */
    tenp.getBluetoothAdapterState = function () {
        return createCommon('getBluetoothAdapterState');
    };
    /**
     * 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用
     */
    tenp.closeBluetoothAdapter = function () {
        return createCommon('closeBluetoothAdapter');
    };
    /**
     * wx.getBatteryInfo 的同步版本
     */
    tenp.getBatteryInfoSync = function () {
        return wx.getBatteryInfoSync();
    };
    /**
     * 获取设备电量。
     */
    tenp.getBatteryInfo = function () {
        return createCommon('getBatteryInfo');
    };
    /**
     * 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
     */
    tenp.setClipboardData = function (data) {
        return createCommon('setClipboardData', { data: data });
    };
    /**
     * 获取系统剪贴板的内容
     */
    tenp.getClipboardData = function () {
        return createCommon('getClipboardData');
    };
    /**
     * 关闭 NFC 模块。仅在安卓系统下有效
     * @version 1.7.0
     */
    tenp.stopHCE = function () {
        return createCommon('stopHCE');
    };
    /**
     * 初始化 NFC 模块
     * @version 1.7.0
     */
    tenp.startHCE = function (aid_list) {
        return createCommon('startHCE', { aid_list: aid_list });
    };
    /**
     * 发送 NFC 消息。仅在安卓系统下有效
     * @version 1.7.0
     */
    tenp.sendHCEMessage = function (data) {
        return createCommon('sendHCEMessage', { data: data });
    };
    /**
     * 监听接收 NFC 设备消息事件，仅能注册一个监听
     * @version 1.7.0
     */
    tenp.onHCEMessage = function (callback) {
        wx.onHCEMessage(callback);
    };
    /**接收 NFC 设备消息事件，取消事件监听 */
    tenp.offHCEMessage = function () {
        wx.offHCEMessage();
    };
    /**
     * 判断当前设备是否支持 HCE 能力
     * @version 1.7.0
     */
    tenp.getHCEState = function () {
        return createCommon('getHCEState');
    };
    /**
     * 监听网络状态变化事件
     */
    tenp.onNetworkStatusChange = function (callback) {
        wx.onNetworkStatusChange(callback);
    };
    /**
     * 取消监听网络状态变化事件，参数为空，则取消所有的事件监听
     * @version 2.9.3
     */
    tenp.offNetworkStatusChange = function () {
        wx.offNetworkStatusChange();
    };
    /**
     * 获取网络类型
     */
    tenp.getNetworkType = function () {
        return createCommon('getNetworkType');
    };
    /**
     * 设置屏幕亮度
     * @version 1.2.0
     */
    tenp.setScreenBrightness = function (value) {
        return createCommon('setScreenBrightness', { value: value });
    };
    /**
     * 设置屏幕亮度
     * @version 1.4.0
     */
    tenp.setKeepScreenOn = function (keepScreenOn) {
        return createCommon('setKeepScreenOn', { keepScreenOn: keepScreenOn });
    };
    /**
     * 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发，只能注册一个监听
     * @version 1.4.0
     */
    tenp.onUserCaptureScreen = function (callback) {
        wx.onUserCaptureScreen(callback);
    };
    /**
     * 用户主动截屏事件。取消事件监听
     * @version 2.9.3
     */
    tenp.offUserCaptureScreen = function () {
        wx.offUserCaptureScreen();
    };
    /**获取屏幕亮度 */
    tenp.getScreenBrightness = function () {
        return createCommon('getScreenBrightness');
    };
    /**拨打电话 */
    tenp.makePhoneCall = function (phoneNumber) {
        return createCommon('makePhoneCall', { phoneNumber: phoneNumber });
    };
    /**停止监听加速度数据。 */
    tenp.stopAccelerometer = function () {
        return createCommon('stopAccelerometer');
    };
    /**开始监听加速度数据 */
    tenp.startAccelerometer = function (interval) {
        return createCommon('startAccelerometer', { interval: interval });
    };
    /**
     * 监听加速度数据事件。频率根据 wx.startAccelerometer() 的 interval 参数, 接口调用后会自动开始监听。
     */
    tenp.onAccelerometerChange = function (callback) {
        wx.onAccelerometerChange(callback);
    };
    /**
     * 取消监听加速度数据事件，参数为空，则取消所有的事件监听
     */
    tenp.offAccelerometerChange = function () {
        wx.offAccelerometerChange();
    };
    /**停止监听罗盘数据 */
    tenp.stopCompass = function () {
        return createCommon('stopCompass');
    };
    /**开始监听罗盘数据 */
    tenp.startCompass = function () {
        return createCommon('startCompass');
    };
    /**
     * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
     */
    tenp.onCompassChange = function (callback) {
        wx.onCompassChange(callback);
    };
    /**
     * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听
     * @version 2.9.3
     */
    tenp.offCompassChange = function () {
        wx.offCompassChange();
    };
    /**
     * 停止监听设备方向的变化
     * @version 2.3.0
     */
    tenp.stopDeviceMotionListening = function () {
        return createCommon('stopDeviceMotionListening');
    };
    /**
     * 开始监听设备方向的变化
     */
    tenp.startDeviceMotionListening = function (interval) {
        return createCommon('startDeviceMotionListening', { interval: interval });
    };
    /**
     * 监听设备方向变化事件。频率根据 wx.startDeviceMotionListening() 的 interval 参数。可以使用 wx.stopDeviceMotionListening() 停止监听
     * @version 2.3.0
     */
    tenp.onDeviceMotionChange = function (callbak) {
        wx.onDeviceMotionChange(callbak);
    };
    /**
     * 取消监听设备方向变化事件，参数为空，则取消所有的事件监听
     * @version 2.9.3
     */
    tenp.offDeviceMotionChange = function () {
        wx.offDeviceMotionChange();
    };
    /**
     * 停止监听陀螺仪数据
     * @version 2.3.0
     */
    tenp.stopGyroscope = function () {
        return createCommon('stopGyroscope');
    };
    /**
     * 开始监听陀螺仪数据
     * @version 2.3.0
     */
    tenp.startGyroscope = function (interval) {
        return createCommon('startGyroscope', { interval: interval });
    };
    /**
     * 监听陀螺仪数据变化事件。频率根据 wx.startGyroscope() 的 interval 参数。可以使用 wx.stopGyroscope() 停止监听
     * @version 2.3.0
     */
    tenp.onGyroscopeChange = function (callback) {
        wx.onGyroscopeChange(callback);
    };
    /**
     * 取消监听陀螺仪数据变化事件。
     * @version 2.9.3
     */
    tenp.offGyroscopeChange = function () {
        wx.offGyroscopeChange();
    };
    /**
     * 监听内存不足告警事件。
     * @version 2.0.2
     */
    tenp.onMemoryWarning = function (callback) {
        wx.onMemoryWarning(callback);
    };
    /**
     * 取消监听内存不足告警事件
     * @version 2.9.0
     */
    tenp.offMemoryWarning = function () {
        wx.offMemoryWarning();
    };
    /**
     * 调起客户端扫码界面进行扫码
     */
    tenp.scanCode = function (data) {
        return createCommon('showRedPackage', data);
    };
    /**
     * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
     */
    tenp.vibrateShort = function () {
        return createCommon('vibrateShort');
    };
    /**
     * 使手机发生较长时间的振动（400 ms)
     */
    tenp.vibrateLong = function () {
        return createCommon('vibrateLong');
    };
    tenp.createWorker = function (scriptPath) {
        return wx.createWorker(scriptPath);
    };
    /**
     * 获取第三方平台自定义的数据字段
     */
    tenp.getExtConfigSync = function () {
        return wx.getExtConfigSync();
    };
    /**
     * 获取第三方平台自定义的数据字段
     */
    tenp.getExtConfig = function () {
        return createCommon('getExtConfig');
    };
    /**
     * 创建插屏广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。
     * @version 2.6.0
     */
    tenp.createInterstitialAd = function (object) {
        return wx.createInterstitialAd(object);
    };
    /**
     * 创建激励视频广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 2.0.4， 小程序端要求 >= 2.6.0）。调用该方法创建的激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用）。
     * @param object
     * @version 2.0.4
     */
    tenp.createRewardedVideoAd = function (object) {
        return wx.createRewardedVideoAd(object);
    };
    /**
     * 返回一个 SelectorQuery 对象实例。在自定义组件或包含自定义组件的页面中，应使用 this.createSelectorQuery() 来代替
     * @version 1.4.0
     */
    tenp.createSelectorQuery = function () {
        return wx.createSelectorQuery();
    };
    /**
     * 创建并返回一个 IntersectionObserver 对象实例。在自定义组件或包含自定义组件的页面中，应使用 this.createIntersectionObserver([options]) 来代替
     * @version 1.9.3
     */
    tenp.createIntersectionObserver = function (component, options) {
        return wx.createIntersectionObserver(component, options);
    };
    /**
     * 创建离屏 canvas 实例
     * @version 2.7.0
     */
    tenp.createOffscreenCanvas = function () {
        return wx.createOffscreenCanvas();
    };
    /**
     * 创建 canvas 的绘图上下文 CanvasContext 对象
     *
     * 从基础库 2.9.0 开始，本接口停止维护，请使用 Canvas 代替
     */
    tenp.createCanvasContext = function (canvasId, $this) {
        return wx.createCanvasContext(canvasId, $this);
    };
    /**
     * 把当前画布指定区域的内容导出生成指定大小的图片。在 draw() 回调里调用该方法才能保证图片导出成功
     * @param data
     */
    tenp.canvasToTempFilePath = function (data) {
        return createCommon('canvasToTempFilePath', data);
    };
    /**
     * 将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 <canvas> 组件
     * @version 1.9.0
     */
    tenp.canvasPutImageData = function (data) {
        return createCommon('canvasPutImageData', data);
    };
    /**
     * 获取 canvas 区域隐含的像素数据
     * @version 1.9.0
     */
    tenp.canvasGetImageData = function (data) {
        return createCommon('canvasGetImageData', data);
    };
    /**
     * 创建 map 上下文 MapContext 对象
     * @param mapId     map 组件的 id
     * @param $this     在自定义组件下，当前组件实例的this，以操作组件内 map 组件
     */
    tenp.createMapContext = function (mapId, $this) {
        return wx.createMapContext(mapId, $this);
    };
    /**
     * 保存图片到系统相册
     *
     * 调用前需要 用户授权 `scope.writePhotosAlbum`
     * @param filePath  图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径
     * @version 1.2.0
     */
    tenp.saveImageToPhotosAlbum = function (filePath) {
        return createCommon('saveImageToPhotosAlbum', { filePath: filePath });
    };
    /**
     * 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作
     */
    tenp.previewImage = function (data) {
        return createCommon('previewImage', data);
    };
    /**
     * 获取图片信息。网络图片需先配置download域名才能生效
     * @param filePath  图片的路径，支持网络路径、本地路径、代码包路径
     */
    tenp.getImageInfo = function (src) {
        return createCommon('getImageInfo', { src: src });
    };
    /**
     * 压缩图片接口，可选压缩质量
     * @version 2.4.0
     */
    tenp.compressImage = function (data) {
        return createCommon('compressImage', data);
    };
    /**
     * 从客户端会话选择文件
     * @version 2.5.0
     */
    tenp.chooseMessageFile = function (data) {
        return createCommon('chooseMessageFile', data);
    };
    /**从本地相册选择图片或使用相机拍照 */
    tenp.chooseImage = function (data) {
        return createCommon('chooseImage', data);
    };
    /**
     * 保存视频到系统相册。支持mp4视频格式
     *
     * 调用前需要 用户授权 scope.writePhotosAlbum
     */
    tenp.saveVideoToPhotosAlbum = function (filePath) {
        return createCommon('saveVideoToPhotosAlbum', { filePath: filePath });
    };
    /**
     * 创建 video 上下文 VideoContext 对象
     * @param id video 组件的 id
     * @param $this 在自定义组件下，当前组件实例的this，以操作组件内 video 组
     */
    tenp.createVideoContext = function (id, $this) {
        return wx.createVideoContext(id, $this);
    };
    /**
     * 拍摄视频或从手机相册中选视频
     */
    tenp.chooseVideo = function (data) {
        return createCommon('chooseVideo', data);
    };
    /**
     * 拍摄或从手机相册中选择图片或视频
     * @version 2.10.0
     */
    tenp.chooseMedia = function (data) {
        return createCommon('chooseMedia', data);
    };
    /**
     * 结束播放语音
     * @version 1.6.0
     */
    tenp.stopVoice = function () {
        return createCommon('stopVoice');
    };
    /**
     * 设置 InnerAudioContext 的播放选项。设置之后对当前小程序全局生效
     * @version 2.3.0
     */
    tenp.setInnerAudioOption = function (data) {
        return createCommon('setInnerAudioOption', data);
    };
    /**
     * 开始播放语音。同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放
     * @version 1.6.0
     */
    tenp.playVoice = function (data) {
        return createCommon('playVoice', data);
    };
    /**
     * 暂停正在播放的语音。再次调用 wx.playVoice 播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice
     * @version 1.6.0
     */
    tenp.pauseVoice = function () {
        return createCommon('pauseVoice');
    };
    /**
     * 获取当前支持的音频输入源
     * @version 2.1.0
     */
    tenp.getAvailableAudioSources = function () {
        return createCommon('getAvailableAudioSources');
    };
    /**
     * 创建内部 audio 上下文 InnerAudioContext 对象
     * @version 1.6.0
     */
    tenp.createInnerAudioContext = function () {
        return wx.createInnerAudioContext();
    };
    /**
     * 创建 audio 上下文 AudioContext 对象
     * @version 1.6.0
     */
    tenp.createAudioContext = function (id, $this) {
        return wx.createAudioContext(id, $this);
    };
    /**
     * 停止播放音乐
     */
    tenp.stopBackgroundAudio = function () {
        return createCommon('stopBackgroundAudio');
    };
    /**
     * 控制音乐播放进度
     *
     * 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
     * @param position 音乐位置，单位：秒
     */
    tenp.seekBackgroundAudio = function (position) {
        return createCommon('seekBackgroundAudio', { position: position });
    };
    /**
     * 使用后台播放器播放音乐。对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放
     */
    tenp.playBackgroundAudio = function (data) {
        return createCommon('playBackgroundAudio', data);
    };
    /**
     * 暂停播放音乐
     */
    tenp.pauseBackgroundAudio = function () {
        return createCommon('pauseBackgroundAudio');
    };
    /**
     * 监听音乐停止事件
     * @param callback
     */
    tenp.onBackgroundAudioStop = function (callback) {
        wx.onBackgroundAudioStop(callback);
    };
    /**
     * 监听音乐播放事件
     *
     * 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
     * @param callback
     */
    tenp.onBackgroundAudioPlay = function (callback) {
        wx.onBackgroundAudioPlay(callback);
    };
    /**
     * 监听音乐暂停事件
     * @param callback
     */
    tenp.onBackgroundAudioPause = function (callback) {
        wx.onBackgroundAudioPause(callback);
    };
    /**
     * 获取后台音乐播放状态
     */
    tenp.getBackgroundAudioPlayerState = function () {
        return createCommon('getBackgroundAudioPlayerState');
    };
    /**
     * 获取全局唯一的背景音频管理器。 小程序切入后台，如果音频处于播放状态，可以继续播放。但是后台状态不能通过调用API操纵音频的播放状态
     *
     * 从微信客户端6.7.2版本开始，若需要在小程序切后台后继续播放音频，需要在 app.json 中配置 requiredBackgroundModes 属性。开发版和体验版上可以直接生效，正式版还需通过审核
     */
    tenp.getBackgroundAudioManager = function () {
        return wx.getBackgroundAudioManager();
    };
    /**
     * 创建 live-pusher 上下文 LivePusherContext 对象
     * @version 1.7.0
     */
    tenp.createLivePusherContext = function () {
        return wx.createLivePusherContext();
    };
    /**
     * 创建 live-player 上下文 LivePlayerContext 对象
     * @param id live-player 组件的 id
     * @param $this 在自定义组件下，当前组件实例的this，以操作组件内 live-player 组件
     * @version 1.7.0
     */
    tenp.createLivePlayerContext = function (id, $this) {
        return wx.createLivePlayerContext(id, $this);
    };
    /**
     * 停止录音
     * @version 1.6.0
     */
    tenp.stopRecord = function () {
        return createCommon('stopRecord');
    };
    /**
     * 开始录音。当主动调用 wx.stopRecord，或者录音超过1分钟时自动结束录音。当用户离开小程序时，此接口无法调用
     *
     * 调用前需要 用户授权 scope.record
     *
     * 从基础库 1.6.0 开始，本接口停止维护，请使用 wx.getRecorderManager 代替
     */
    tenp.startRecord = function () {
        return createCommon('startRecord');
    };
    /**
     * 获取全局唯一的录音管理器 RecorderManager
     * @version 1.6.0
     */
    tenp.getRecorderManager = function () {
        return wx.getRecorderManager();
    };
    /**
     * 创建 camera 上下文 CameraContext 对象
     * @version 1.6.0
     */
    tenp.createCameraContext = function () {
        return wx.createCameraContext();
    };
    /**
     * 创建音视频处理容器，最终可将容器中的轨道合成一个视频
     * @version 2.9.0
     */
    tenp.createMediaContainer = function () {
        return wx.createMediaContainer();
    };
})(tenp || (tenp = {}));
module.exports = tenp;
