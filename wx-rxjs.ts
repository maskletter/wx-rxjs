
const Rxjs = require("./rxjs")
const { Observable }: any = Rxjs
declare const wx: any;
declare const module: any

function createCommon(name: string, data: any = {}){
  return Observable.create((rxs: any) => {
    wx[name]({
      ...data,
      success(msg: any){
        rxs.next(msg);
      },
      fail(e: any){
        rxs.error(e)
      }
    })
  })
  
}

namespace tenp {
    export const rxjs = Rxjs;
    export interface SystemInfo {
        /**
         * 设备品牌	
         * @version 1.5.0
        */
        brand: string
        /**
         * 设备型号	
        */
        model	: string
       /**
        * 设备像素比
        */
        pixelRatio: number
       /**
        * 屏幕宽度，单位px	
        * @version 1.1.0
        */
        screenWidth: number
        /**
         * 屏幕高度，单位px	
         * @version 1.1.0
        */
        screenHeight: number
        /**
         * 可使用窗口宽度，单位px	
        */
        windowWidth: number
       /**
        * 可使用窗口高度，单位px	
        */
        windowHeight: number
       /**
        * 状态栏的高度，单位px	
        * @version 1.9.0
        */
        statusBarHeight: number
        /**
         * 微信设置的语言	
        */
        language: string
        /*
         * 微信版本号	
        */
        version: string	
       /**
        * 操作系统及版本	
        */
        system: string
       /**
        * 客户端平台
        */
        platform: string
       /**
        * 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准	
         * @version 1.1.0
        */
        fontSizeSetting: string
        /**
         * 客户端基础库版本	
         * @version 1.1.0
        */
        SDKVersion: string
        /**
         * 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）	
         * @version 1.8.0
        */
        benchmarkLevel: number
        /**
         * 允许微信使用相册的开关（仅 iOS 有效）	
         * @version 2.6.0
        */
        albumAuthorized: boolean
        /**
         * 允许微信使用摄像头的开关	
         * @version 2.6.0
        */
        cameraAuthorized: boolean
        /**
         * 允许微信使用定位的开关	
         * @version 2.6.0
        */
        locationAuthorized: boolean
        /**
         * 允许微信使用麦克风的开关	
         * @version 2.6.0
        */
        microphoneAuthorized: boolean
        /**
         * 允许微信通知的开关	
         * @version 2.6.0
        */
        notificationAuthorized: boolean
        /**
         * 允许微信通知带有提醒的开关（仅 iOS 有效）	
         * @version 2.6.0
        */
        notificationAlertAuthorized: boolean
        /**
         * 允许微信通知带有标记的开关（仅 iOS 有效）	
         * @version 2.6.0
        */
        notificationBadgeAuthorized: boolean
        /**
         * 允许微信通知带有声音的开关（仅 iOS 有效）	
         * @version 2.6.0
        */
        notificationSoundAuthorized: boolean
        /**
         * 蓝牙的系统开关	
         * @version 2.6.0
        */
        bluetoothEnabled: boolean
        /**
         * 地理位置的系统开关	
         * @version 2.6.0
        */
        locationEnabled: boolean
        /**
         * Wi-Fi 的系统开关	
         * @version 2.6.0
        */
        wifiEnabled: boolean
        safeArea: {
          /** 安全区域左上角横坐标 */
          left: number	
          /** 安全区域右下角横坐标 */
          right: number
          /** 安全区域左上角纵坐标 */	
          top: number	
          /** 安全区域右下角纵坐标 */
          bottom: number
          /** 安全区域的宽度，单位逻辑像素 */	
          width: number	
          /** 安全区域的高度，单位逻辑像素 */
          height: number	
        }
    }
    export interface UpdateManager{
        /** 强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 onUpdateReady 回调）调用。 */
        applyUpdate(): void
        /** 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。 */
        onCheckForUpdate(callback: Function): void
        /** 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调 */
        onUpdateReady(callback: Function): void
        /** 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调 */
        onUpdateFailed(callback: Function): void
    }
    export interface Launch{
        /**	启动小程序的路径 (代码包路径)*/
        path: string
        /**	启动小程序的场景值*/
        scene: number
        /**	启动小程序的 query 参数*/
        query: Object
        /**	shareTicket，详见获取更多转发信息*/
        shareTicket: string
        referrerInfo: {
            appId: string
            extraData: Object
        }
    }
    export interface RealtimeLogManager{
        /** 写 info 日志 */
        info(): void
        /** 写 warn 日志 */
        warn(): void
        /** 写 error 日志 */
        error(): void
        /** 设置过滤关键字 */
        setFilterMsg(msg: string): void
        /** 添加过滤关键字 */
        addFilterMsg(msg: string): void
        /** 设置实时日志page参数所在的页面 */
        in(pageInstance: any): void
        
    }
    export interface LogManager{
        /**写 debug 日志*/
        debug(): void
        /**写 info 日志*/
        info(): void
        /**写 log 日志*/
        log(): void
        /**写 warn 日志*/
        warn(): void    
    }
    export interface Animation {
        /**表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。*/
        step(object: any): void
        /**同 transform-function matrix*/
        matrix(): void
        /**同 transform-function matrix3d*/
        matrix3d(): void
        /**从原点顺时针旋转一个角度*/
        rotate(angle: number): void
        /**从 固定 轴顺时针旋转一个角度*/
        rotate3d(x: number, y: number, z: number, angle: number): void
        /**从 X 轴顺时针旋转一个角度*/
        rotateX(angle: number): void
        /**从 Y 轴顺时针旋转一个角度*/
        rotateY(angle: number): void
        /**从 Z 轴顺时针旋转一个角度*/
        rotateZ(angle: number): void
        /**缩放*/
        scale(sx: number, sy: number): void
        /**缩放*/
        scale3d(sx: number, sy: number, sz: number): void
        /**缩放 X 轴*/
        scaleX(scale: number): void
        /**缩放 Y 轴*/
        scaleY(scale: number): void
        /**缩放 Z 轴*/
        scaleZ(scale: number): void
        /**对 X、Y 轴坐标进行倾斜*/
        skew(ax: number, ay: number): void
        /**对 X 轴坐标进行倾斜*/
        skewX(angle: number): void
        /**对 Y 轴坐标进行倾斜*/
        skewY(angle: number): void
        /**平移变换*/
        translate(tx: number, ty: number): void
        /**对 xyz 坐标进行平移变换*/
        translate3d(tx: number, ty: number, tz: number): void
        /**对 X 轴平移*/
        translateX(translation: number): void
        /**对 Y 轴平移*/
        translateY(translation: number): void
        /**对 Z 轴平移*/
        translateZ(translation: number): void
        /**设置透明度*/
        opacity(value: number): void
        /**设置背景色*/
        backgroundColor(value: string): void
        /**设置宽度*/
        width(value: number|string ): void
        /**设置高度*/
        height(value: number|string): void
        /**设置 left 值*/
        left(value: number|string): void
        /**设置 right 值*/
        right(value: number|string): void
        /**设置 top 值*/
        top(value: number|string): void
        /**设置 bottom 值*/
        bottom(value: number|string): void
    
    }
    export interface StorageInfoSync{
        /**当前 storage 中所有的 key */
        keys: string[]	
        /**当前占用的空间大小, 单位 KB*/
        currentSize:number	
        /**限制的空间大小，单位 KB*/
        limitSize:number	
    }
    export interface UserInfo {
        /**用户昵称*/
        nickName: string
        

        /**用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。*/
        avatarUrl: string
        
        /**
         * 用户性别
         * 
         * 0	未知	1	男性	2	女性
         */
        gender: number 
        
        /**用户所在国家*/
        country: string
        

        /**用户所在省份*/
        province: string

        /**用户所在城市*/
        city: string

        /**
         * 显示 country，province，city 所用的语言
         * 
         * en	英文
         * 
         * zh_CN	简体中文
         * 
         * zh_TW	繁体中文
         */
        language: 'en'|'zh_CN'|'zh_TW'
        
    }
    export interface AuthSetting {
        /**是否授权用户信息，对应接口 wx.getUserInfo*/
        'scope.userInfo': boolean
        /**是否授权地理位置，对应接口 wx.getLocation, wx.chooseLocation*/
        'scope.userLocation': boolean
        /**是否授权通讯地址，对应接口 wx.chooseAddress*/
        'scope.address': boolean
        /**是否授权发票抬头，对应接口 wx.chooseInvoiceTitle*/
        'scope.invoiceTitle': boolean
        /**是否授权获取发票，对应接口 wx.chooseInvoice*/
        'scope.invoice': boolean
        /**是否授权微信运动步数，对应接口 wx.getWeRunData*/
        'scope.werun': boolean
        /**是否授权录音功能，对应接口 wx.startRecord*/
        'scope.record': boolean
        /**是否授权保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum*/
        'scope.writePhotosAlbum': boolean
        /**是否授权摄像头，对应[camera]((camera)) 组件*/
        'scope.camera': boolean
    }
    export interface SubscriptionsSetting{
        /**订阅消息总开关，true为开启，false为关闭 */
        mainSwitch:boolean
        /**每一项订阅消息的订阅状态。itemSettings对象的键为一次性订阅消息的模板id或系统订阅消息的类型，值为'accept'、'reject'、'ban'中的其中一种。'accept'表示用户同意订阅这条消息，'reject'表示用户拒绝订阅这条消息，'ban'表示已被后台封禁。一次性订阅消息使用方法详见 wx.requestSubscribeMessage，永久订阅消息（仅小游戏可用）使用方法详见wx.requestSubscribeSystemMessage */
        itemSettings: any
    }
    export interface IBeaconInfo{
        /**iBeacon 设备广播的 uuid*/
        uuid: string
        /**iBeacon 设备的主 id*/
        major: string
        /**iBeacon 设备的次 id*/
        minor: string
        /**表示设备距离的枚举值*/
        proximity: number
        /**iBeacon 设备的距离*/
        accuracy: number
        /**表示设备的信号强度*/
        rssi: number
    }
    export interface WifiInfo{
        /**Wi-Fi 的 SSID*/
        SSID: string
        /**Wi-Fi 的 BSSID*/
        BSSID: string
        /**Wi-Fi 是否安全 */
        secure: boolean 
        /**Wi-Fi 信号强度 */
        signalStrength: number 
    }

  /**
   * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
   * @param schema 
   * @returns boolean
   * @version 1.1.1 
   */
  export const canIUse = (schema: string): boolean => {
    return wx.canIUse(schema)
  }

  /**
   * 将 Base64 字符串转成 ArrayBuffer 对象
   * 
   * 从基础库 2.4.0 开始，本接口停止维护
   * @param base64 
   * @version 1.1.0 
   */
  export const base64ToArrayBuffer = (base64: string): ArrayBuffer => {
    return wx.base64ToArrayBuffer(base64)
  }

  /**
   * 将 ArrayBuffer 对象转成 Base64 字符串
   * 
   * 从基础库 2.4.0 开始，本接口停止维护
   * @param arrayBuffer 
   * @version 1.1.0 
   */
  export const arrayBufferToBase64 = (arrayBuffer: ArrayBuffer): string => {
    return wx.arrayBufferToBase64(arrayBuffer)
  }
  /**
   * wx.getSystemInfo 的同步版本
   */
  export const getSystemInfoSync = (): SystemInfo => {
    return wx.getSystemInfoSync() as any
  }

  /**获取系统信息 */
  export const getSystemInfo = (): Observable<SystemInfo> => {
    return createCommon('getSystemInfo')
  }

  /**
   * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档
   * @version 1.9.90
   */
  export const getUpdateManager = (): UpdateManager => {
      return wx.getUpdateManager()
  }

  /**
   * 获取小程序启动时的参数。与 App.onLaunch 的回调参数一致
   * @version 2.1.2
   */
  export const getLaunchOptionsSync = (): Launch => {
      return wx.getLaunchOptionsSync()
  }

  /**
   * 获取本次小程序启动时的参数。如果当前是冷启动，则返回值与 App.onLaunch 的回调参数一致；如果当前是热启动，则返回值与 App.onShow 一致
   * @version 2.9.4
   */
  export const getEnterOptionsSync = (): Launch => {
      return wx.getEnterOptionsSync()
  }

  /**
   * 监听未处理的 Promise 拒绝事件。该事件与 App.onUnhandledRejection 的回调时机与参数一致。
   * @param callback 
   * @version 2.10.0
   */
  export const onUnhandledRejection = (callback: Function) => {
      wx.onUnhandledRejection(callback)
  }

  /**
   * 监听小程序要打开的页面不存在事件。该事件与 App.onPageNotFound 的回调时机一致
   * @param callback 
   * @version 2.1.2
   */
  export const onPageNotFound = (callback: Function) => {
    wx.onPageNotFound(callback)
  }

  /**
   * 监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 App.onError 的回调时机与参数一致
   * @param callback 
   * @version 2.1.2
   */
  export const onError = (callback: Function) => {
    wx.onError(callback)
  }

  /**
   * 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
   * @param callback 
   * @version 2.6.2
   */
  export const onAudioInterruptionEnd = (callback: Function) => {
    wx.onAudioInterruptionEnd(callback)
  }

  /**
   * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停
   * @param callback 
   * @version 2.6.2
   */
  export const onAudioInterruptionBegin = (callback: Function) => {
    wx.onAudioInterruptionBegin(callback)
  }

  /**
   * 监听小程序切前台事件。该事件与 App.onShow 的回调参数一致
   * @param callback 
   * @version 2.1.2
   */
  export const onAppShow = (callback: Function) => {
    wx.onAppShow(callback)
  }

  /**
   * 监听小程序切后台事件。该事件与 App.onHide 的回调时机一致
   * @param callback 
   * @version 2.1.2
   */
  export const onAppHide = (callback: Function) => {
    wx.onAppHide(callback)
  }
  /**
   * 取消监听未处理的 Promise 拒绝事件
   * @param callback 
   * @version 2.1.2
   */
  export const offUnhandledRejection = (callback: Function) => {
    wx.offUnhandledRejection(callback)
  }
  /**
   * 取消监听小程序要打开的页面不存在事件
   * @param callback 
   * @version 2.1.2
   */
  export const offPageNotFound = (callback: Function) => {
    wx.offPageNotFound(callback)
  }
  /**
   * 取消监听小程序错误事件
   * @param callback 
   * @version 2.1.2
   */
  export const offError = (callback: Function) => {
    wx.offError(callback)
  }
  /**
   * 取消监听音频中断结束事件
   * @param callback 
   * @version 2.6.2
   */
  export const offAudioInterruptionEnd = (callback: Function) => {
    wx.offAudioInterruptionEnd(callback)
  }
  /**
   * 取消监听音频因为受到系统占用而被中断开始事件
   * @param callback 
   * @version 2.6.2
   */
  export const offAudioInterruptionBegin = (callback: Function) => {
    wx.offAudioInterruptionBegin(callback)
  }
  /**
   * 取消监听小程序切前台事件
   * @param callback 
   * @version 2.1.2
   */
  export const offAppShow = (callback: Function) => {
    wx.offAppShow(callback)
  }
  /**
   * 取消监听小程序切后台事件
   * @param callback 
   * @version 2.1.2
   */
  export const offAppHide = (callback: Function) => {
    wx.offAppHide(callback)
  }
  
  /**
   * 设置是否打开调试开关。此开关对正式版也能生效
   * @param data 
   * @version 1.4.0
   */
  export const setEnableDebug = (data:{ enableDebug: boolean }) => {
      return createCommon('setEnableDebug', data)
  }

  /**
   * 获取实时日志管理器对象
   * @version  2.7.1 
   */
  export const getRealtimeLogManager = (): RealtimeLogManager => {
      return wx.getRealtimeLogManager()
  }

  /**
   * 获取日志管理器对象
   * @param level 
   * @version 2.1.0
   */
  export const getLogManager = (level?: number): LogManager => {
      return wx.getLogManager(level)
  }

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   * @param url 
   */
  export const switchTab = (url: string): Observable<void> => {
      return createCommon('switchTab', { url })
  }

  /**
   * 关闭所有页面，打开到应用内的某个页面
   * @param url 
   */
  export const reLaunch = (url: string): Observable<void> => {
      return createCommon('reLaunch', { url })
  }

  /**
   * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
   * @param url 
   */
  export const redirectTo = (url: string): Observable<void> => {
      return createCommon('redirectTo', { url })
  }

  /**
   * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层
   * @param url 
   */
  export const navigateTo = (url: string): Observable<void> => {
      return createCommon('navigateTo', { url })
  }

  /**
   * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层
   * @param delta 
   */
  export const navigateBack = (delta?: number): Observable<void> => {
      return createCommon('navigateBack', { delta })
  }

  /**
   * 显示消息提示框
   */
  export const showToast = (data: {
    /** 提示的内容	 */
    title: string
    /** 图标	 */
    icon?: string
    /** 自定义图标的本地路径，image 的优先级高于 icon	1.1.0 */
    image?: string
    /** 提示的延迟时间	 */
    duration?: number
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
  }): Observable<void> => {
    return createCommon('showToast', data)
}

/**
 * 显示模态对话框
 */
export const showModal = (data: {
    /** 提示的标题 */
    title?: string
    /** 提示的内容 */
    content?: string
    /**	是否显示取消按钮 */
    showCancel?: boolean
    /**取消按钮的文字，最多 4 个字符 */
    cancelText?: string
    /**取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    cancelColor?: string
    /**确认按钮的文字，最多 4 个字符 */
    confirmText?: string
    /**确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    confirmColor?: string
}): Observable<void> => {
    return createCommon('showModal', data)
}


/**
 * 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
 */
export const showLoading = (data: {
    /**提示的内容 */
    title: string
    /**是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
}): Observable<void> => {
    return createCommon('showLoading', data)
}

/**
 * 显示操作菜单
 */
export const showActionSheet = (data: {
    /**按钮的文字数组，数组长度最大为 6 */
    itemList: string[],
    /**按钮的文字颜色 */
    itemColor?: string
}): Observable<void> => {
    return createCommon('showActionSheet', data)
}

/**
 * 隐藏消息提示框
 */
export const hideToast = (): Observable<void> => {
    return createCommon('hideToast')
}
/**
 * 隐藏 loading 提示框
 */
export const hideLoading = (): Observable<void> => {
    return createCommon('hideLoading')
}

/**
 * 在当前页面显示导航条加载动画
 */
export const showNavigationBarLoading = (): Observable<void> => {
    return createCommon('showNavigationBarLoading')
}

/**
 * 动态设置当前页面的标题
 */
export const setNavigationBarTitle = (title: string): Observable<void> => {
    return createCommon('setNavigationBarTitle', { title })
}
/**
 * 设置页面导航条颜色
 * @version 1.4.0
 */
export const setNavigationBarColor = (data: {
    /**前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000*/
    frontColor: string
    /**背景颜色值，有效值为十六进制颜色*/
    backgroundColor:string
    /**动画效果*/
    animation?:Object
}): Observable<void> => {
    return createCommon('setNavigationBarColor', data)
}

/**
 * 在当前页面隐藏导航条加载动画
 */
export const hideNavigationBarLoading = (): Observable<void> => {
    return createCommon('hideNavigationBarLoading')
}

/**
 * 隐藏返回首页按钮。微信7.0.7版本起，当用户打开的小程序最底层页面是非首页时，默认展示“返回首页”按钮，开发者可在页面 onShow 中调用 hideHomeButton 进行隐藏。
 * @version 2.8.3
 */
export const hideHomeButton = (): Observable<void> => {
    return createCommon('hideHomeButton')
}
/**
 * 动态设置下拉背景字体、loading 图的样式
 * @version 2.1.0
 */
export const setBackgroundTextStyle = (textStyle: 'dark'|'light'): Observable<void> => {
    return createCommon('setBackgroundTextStyle', { textStyle })
}

/**
 * 动态设置窗口的背景色
 * @version 2.1.0
 */
export const setBackgroundColor = (data: {
    /**窗口的背景色，必须为十六进制颜色值*/
    backgroundColor?:string
    /**顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持*/
    backgroundColorTop?:string
    /**底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持*/
    backgroundColorBottom?:string
}): Observable<void> => {
    return createCommon('setBackgroundColor', data)
}

/**
 * 显示 tabBar 某一项的右上角的红点
 * @version 1.9.0
 */
export const showTabBarRedDot = (index: number): Observable<void> => {
    return createCommon('showTabBarRedDot', { index })
}

/**
 * 显示 tabBar
 * @version 1.9.0
 */
export const showTabBar = (animation: boolean): Observable<void> => {
    return createCommon('showTabBar', { animation })
}

/**
 * 动态设置 tabBar 的整体样式
 * @version 1.9.0
 */
export const setTabBarStyle = (data?: {
    /**tab 上的文字默认颜色，HexColor*/
    color?:string
    /**tab 上的文字选中时的颜色，HexColor*/
    selectedColor?:string
    /**tab 的背景色，HexColor*/
    backgroundColor?:string
    /**tabBar上边框的颜色， 仅支持 black/white*/
    borderStyle?:string
}): Observable<void> => {
    return createCommon('setTabBarStyle', data)
}

/**
 * 动态设置 tabBar 某一项的内容，2.7.0 起图片支持临时文件和网络文件
 * @version 1.9.0
 */
export const setTabBarItem = (data: {
    /**tabBar 的哪一项，从左边算起*/
    index:number		
    /**tab 上的按钮文字*/
    text?:string		
    /**图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效*/
    iconPath?:string		
    /**选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效*/
    selectedIconPath?:string		
}): Observable<void> => {
    return createCommon('setTabBarItem', data)
}

/**
 * 为 tabBar 某一项的右上角添加文本
 * @version 1.9.0
 */
export const setTabBarBadge = (data: {
    /**tabBar 的哪一项，从左边算起 */
    index: number
    /**显示的文本，超过 4 个字符则显示成 ... */
    text: string
}): Observable<void> => {
    return createCommon('setTabBarBadge', data)
}

/**
 * 移除 tabBar 某一项右上角的文本
 * @version 1.9.0
 */
export const removeTabBarBadge = (index: number): Observable<void> => {
    return createCommon('removeTabBarBadge', { index })
}

/**
 * 隐藏 tabBar 某一项的右上角的红点
 * @version 1.9.0
 */
export const hideTabBarRedDot = (index: number): Observable<void> => {
    return createCommon('hideTabBarRedDot', { index })
}

/**
 * 隐藏 tabBar
 * @version 1.9.0
 */
export const hideTabBar = (animation: boolean): Observable<void> => {
    return createCommon('hideTabBar', { animation })
}

/**
 * 动态加载网络字体，文件地址需为下载类型。'2.10.0'起支持全局生效，需在 app.js 中调用
 * @param data 
 * @version 2.1.0
 */
export const loadFontFace = (data: {
    /**是否全局生效	2.10.0*/
    global?: boolean	
    /**定义的字体名称	*/
    family: string		
    /**字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的iOS上会不兼容。	*/
    source: string		
    /**可选的字体描述符 */
    desc?: {
        /**字体样式，可选值为 normal / italic / oblique*/
        style?: 
        /**字体粗细，可选值为 normal / bold / 100 / 200../ 900*/string
        weight?: 
        /**设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inherit*/string
        variant?: string
    }		
}): Observable<{status: number}> => {
    return createCommon('loadFontFace', data)
}

/**
 * 停止当前页面下拉刷新
 * @version 1.5.0 
 */
export const stopPullDownRefresh = (): Observable<any> => {
    return createCommon('stopPullDownRefresh')
}
/**
 * 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
 * @version 1.5.0 
 */
export const startPullDownRefresh = (): Observable<any> => {
    return createCommon('startPullDownRefresh')
}
/**
 * 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
 * @version 1.4.0 
 */
export const pageScrollTo = (data?: {
    /**滚动到页面的目标位置，单位 px	*/
    scrollTop?: number		
    /**滚动动画的时长，单位 ms	*/
    duration?: number		
    /**选择器*/
    selector?: string		
}): Observable<any> => {
    return createCommon('pageScrollTo', data)
}

/**
 * 创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性
 */
export const createAnimation = (data: {
    /**动画持续时间，单位 ms*/
    duration?: number	
    /**动画的效果*/
    timingFunction?: 'linear'|	
            'ease'	|
            'ease-in'|
            'ease-in-'|
            'ease-out'|
            'step-start'|
            'step-end'
    /**动画延迟时间，单位 ms*/
    delay?: number		
    transformOrigin?: string	
}): Animation => {
    return wx.createAnimation(data)
}
/**
 * 动态设置置顶栏文字内容。只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容
 * @param text 
 * @version 1.4.3
 */
export const setTopBarText = (text: string): Observable<any> => {
    return createCommon('setTopBarText', { text })
}

/**
 * 延迟一部分操作到下一个时间片再执行。（类似于 setTimeout
 * @version 2.2.3 
 */
export const nextTick = (callback: Function) => {
    wx.nextTick(callback)
}

/**
 * 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点
 * @version 2.1.0
 */
export const getMenuButtonBoundingClientRect = (): Observable<{
    /**宽度，单位：px*/
    width: number	
    /**高度，单位：px*/
    height: number	
    /**上边界坐标，单位：px*/
    top: number	
    /**右边界坐标，单位：px*/
    right: number	
    /**下边界坐标，单位：px*/
    bottom: number	
    /**左边界坐标，单位：px*/
    left: number	
}> => {
    return createCommon('getMenuButtonBoundingClientRect')
}
/**
 * 监听窗口尺寸变化事件
 * @version 2.3.0
 */
export const onWindowResize = (callback: (res: { windowWidth: number, windowHeight: number }) => void) => {
    wx.onWindowResize(callback)
}
/**
 * 取消监听窗口尺寸变化事件
 * @version 2.3.0
 */
export const offWindowResize = () => {
    wx.offWindowResize()
}
/**
 * 监听键盘高度变化
 * @version 2.7.0
 */
export const onKeyboardHeightChange = (callback: (res: { height: number }) => void) => {
    wx.onKeyboardHeightChange(callback)
}
/**
 * 在input、textarea等focus拉起键盘之后，手动调用此接口收起键盘
 * @version 2.8.2
 */
export const hideKeyboard = (): Observable<any> => {
    return createCommon('hideKeyboard')
}
/**
 * 在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效
 * @version  2.7.0
 */
export const getSelectedTextRange = (): Observable<{res:{ start: number, end: number }}> => {
    return createCommon('getSelectedTextRange')
}

/**wx.setStorage 的同步版本 */
export const setStorageSync = (key: string, data: any): void => {
    wx.setStorageSync(key, data)
}
/**
 * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB
 */
export const setStorage = (data:{ key: string, data: any }): Observable<any> => {
    return createCommon('setStorage', data)
}
/**wx.removeStorageSync 的同步版本 */
export const removeStorageSync = (key: string): void => {
    wx.removeStorageSync(key)
}
/**从本地缓存中移除指定 key */
export const removeStorage = (key: string): Observable<any> => {
    return createCommon('removeStorage', {key})
}
/**wx.getStorageSync 的同步版本 */
export const getStorageSync = (key: string): void => {
    wx.getStorageSync(key)
}
/**wx.getStorageInfoSync 的同步版本 */
export const getStorageInfoSync = (): StorageInfoSync => {
    return wx.getStorageInfoSync()
}
/**异步获取当前storage的相关信息 */
export const getStorageInfo = (): Observable<StorageInfoSync> => {
    return createCommon('getStorageInfo')
}
/**从本地缓存中异步获取指定 key 的内容 */
export const getStorage = (key: string): Observable<any> => {
    return createCommon('getStorage', {key})
}
/**wx.clearStorageSync 的同步版本 */
export const clearStorageSync = (): void => {
    wx.clearStorageSync()
}
/**清理本地数据缓存 */
export const clearStorage = (): Observable<any> => {
    return createCommon('clearStorage')
}

/**设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性 */
export const setBackgroundFetchToken = (token: string): Observable<any> => {
    return createCommon('setBackgroundFetchToken', {token})
}
/**
 * 收到 backgroundFetch 数据时的回调
 * @version 2.8.0
 */
export const onBackgroundFetchData = (): Observable<any> => {
    return createCommon('onBackgroundFetchData')
}
/**
 * 获取设置过的自定义登录态。若无，则返回 fail。
 * @version 2.8.0
 */
export const getBackgroundFetchToken = (): Observable<any> => {
    return createCommon('getBackgroundFetchToken')
}
/**
 * 拉取 backgroundFetch 客户端缓存数据
 * @version 2.8.0
 */
export const getBackgroundFetchData = (): Observable<any> => {
    return createCommon('getBackgroundFetchData')
}
/**
 * 关闭监听实时位置变化，前后台都停止消息接收
 * @version 2.8.0
 */
export const stopLocationUpdate = (): Observable<any> => {
    return createCommon('stopLocationUpdate')
}
/**
 * 开启小程序进入前后台时均接收位置消息，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化
 * @version 2.8.0
 */
export const startLocationUpdateBackground = (): Observable<any> => {
    return createCommon('startLocationUpdateBackground')
}
/**
 * 开启小程序进入前台时接收位置消息
 * @version 2.8.0
 */
export const startLocationUpdate = (): Observable<any> => {
    return createCommon('startLocationUpdate')
}
/**
 * 使用微信内置地图查看位置
 */
export const openLocation = (data: {
    /**纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系 */
    latitude:number		
    /**经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系 */
    longitude:number	
    /**缩放比例，范围5~18 */
    scale?:number		
    /**位置名 */
    name?:string		
    /**地址的详细说明 */
    address?:string		
}): Observable<any> => {
    return createCommon('openLocation', data)
}
/**
 * 监听实时地理位置变化事件，需结合 wx.startLocationUpdateBackground、wx.startLocationUpdate使用
 * @version 2.8.1
 */
export const onLocationChange = (callback: (res: {
    /**	纬度，范围为 -90~90，负数表示南纬	*/
    latitude:number
    /**	经度，范围为 -180~180，负数表示西经	*/
    longitude:number
    /**	速度，单位 m/s	*/
    speed:number
    /**	位置的精确度	*/
    accuracy:number
    /**	高度，单位 m	1.2.0*/
    altitude:number
    /**	垂直精度，单位 m（Android 无法获取，返回 0）	1.2.0*/
    verticalAccuracy:number
    /**	水平精度，单位 m*/
    horizontalAccuracy:number
}) => void): void => {
    wx.onLocationChange(callback)
}
/**
 * 取消监听实时地理位置变化事件
 * @version 2.8.1
 */
export const offLocationChange = (): void => {
    wx.offLocationChange()
}

/**
 * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间
 * @param data 
 */
export const getLocation = (data?: {
    /**wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标	*/
    type?:string
    /**传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度	1.6.0*/
    altitude?:string
    /**开启高精度定位	2.9.0*/
    isHighAccuracy?:boolean
    /**高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果*/
    highAccuracyExpireTime?: number
}): Observable<any> => {
    return createCommon('getLocation', data)
}

/**
 * 打开地图选择位置
 * @param data 
 */
export const chooseLocation = (data: {
    /**
     * 目标地纬度	
     * @version 2.9.0
    */
    latitude?: number
    /**
     * 目标地经度
     * @version 2.9.0
    */
    longitude?: number
}): Observable<any> => {
    return createCommon('chooseLocation', data)
}

/**
 * 更新转发属性
 * @version 1.2.0
 */
export const updateShareMenu = (data?: {
    /**	是否使用带 shareTicket 的转发详情	*/
    withShareTicket?:	boolean	
    /**	是否是动态消息，详见动态消息	2.4.0*/
    isUpdatableMessage?:	boolean	
    /**	动态消息的 activityId。通过 updatableMessage.createActivityId 接口获取	2.4.0*/
    activityId?:string		
    /**	动态消息的模板信息*/
    templateInfo?:{name: string,value:string}[]
}) => {
    return createCommon('updateShareMenu', data)
}

/**
 * 显示当前页面的转发按钮
 * @version 1.1.0
 */
export const showShareMenu = (data?: {
    /**	是否使用带 shareTicket 的转发详情	*/
    withShareTicket?:	boolean	
}) => {
    return createCommon('showShareMenu', data)
}
/**
 * 隐藏转发按钮
 * @version 1.1.0
 */
export const hideShareMenu = () => {
    return createCommon('hideShareMenu')
}
/**
 * 获取转发详细信息
 * @version 1.1.0
 */
export const getShareInfo = (data: {
    /**	shareTicket	*/
    shareTicket: string	
    /**超时时间，单位 ms */
    timeout?: number
}) : Observable<{res: {
    /**错误信息	*/
    errMsg:string	
    /**包括敏感数据在内的完整转发信息的加密数据，详细见加密数据解密算法	*/
    encryptedData:string	
    /**加密算法的初始向量，详细见加密数据解密算法	*/
    iv:string	
    /**敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据*/
    cloudID:string	
}}>=> {
    return createCommon('getShareInfo', data)
}

/**
 * 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
 * @param tempFilePath 
 */
export const saveFile = (tempFilePath: string): Observable<{res:{savedFilePath:string}}> => {
    return createCommon('saveFile',{ tempFilePath })
}
/**
 * 删除本地缓存文件
 * @param filePath 
 */
export const removeSavedFile = (filePath: string): Observable<any> => {
    return createCommon('removeSavedFile',{ filePath })
}

/**
 * 新开页面打开文档
 * @param filePath 
 */
export const openDocument = (data: {
    /**文件路径 (本地路径) ，可通过 downloadFile 获得 */
    filePath: string
    fileType?: 'doc'|
    'docx'|
    'xls'|
    'xlsx'|
    'ppt'|
    'pptx'|
    'pdf'
}): Observable<any> => {
    return createCommon('openDocument',data)
}

/**
 * 获取该小程序下已保存的本地缓存文件列表
 */
export const getSavedFileList = (): Observable<{res: {
    fileList: {
        /**	文件路径 (本地路径)*/
        filePath:number
        /**	本地文件大小，以字节为单位*/
        size:number
        /**	文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数*/
        createTime:number
    }[]
}}> => {
    return createCommon('getSavedFileList')
}

/**
 * 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo() 接口
 */
export const getSavedFileInfo = (filePath: string): Observable<{res:{size: number, createTime: number}}> => {
    return createCommon('getSavedFileInfo',{ filePath })
}

/**
 * 获取全局唯一的文件管理器
 */
export const getFileSystemManager = () => {
    return wx.getFileSystemManager()
}

/**
 * 获取文件信息
 * @param data 
 * @version 1.4.0
 */
export const getFileInfo = (data: {
    /**本地文件路径 (本地路径) */
    filePath: string
    /**计算文件摘要的算法 */
    digestAlgorithm?: 'md5'|'sha1'
}): Observable<any> => {
    return createCommon('getFileInfo', data)
}

/**
 * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。
 * @param timeout 
 */
export const login = (timeout?: number): Observable<{res:{code:string}}> => {
    return createCommon('login', { timeout })
}

/**
 * 检查登录态是否过期
 */
export const checkSession = (): Observable<any> => {
    return createCommon('checkSession')
}

/**
 * 打开另一个小程序
 * @version 1.3.0
 */
export const navigateToMiniProgram = (data: {
    /**要打开的小程序 appId*/
    appId:string		
    /**打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 App.onLaunch、App.onShow 和 Page.onLoad 的回调函数或小游戏的 wx.onShow 回调函数、wx.getLaunchOptionsSync 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。*/
    path?:string		
    /**需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据。如果跳转的是小游戏，可以在 wx.onShow、wx.getLaunchOptionsSync 中可以获取到这份数据数据。*/
    extraData?:object	
    /**要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。 */	
    envVersion?: 'develop'|'trial'|'release'
}): Observable<any> => {
    return createCommon('navigateToMiniProgram')
}


/**
 * 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功
 * @version 1.3.0
 */
export const navigateBackMiniProgram = (extraData?: any): Observable<any> => {
    return createCommon('navigateBackMiniProgram', { extraData })
}

/**
 * 获取当前帐号信息。线上小程序版本号仅支持在正式版小程序中获取，开发版和体验版中无法获取
 * @version 2.2.2
 */
export const getAccountInfoSync = (): {
    /**小程序帐号信息 */
    miniProgram: {
        /**小程序 appId	*/
        appId:string	
        /**小程序版本	@version 2.10.0*/
        envVersion:'develop'|'trial'|'release'
        /**线上小程序版本号	 @version 2.10.2*/
        version:string	
    },
    plugin: {
        /**插件 appId*/
        appId: string	
        /**插件版本号*/
        version: string	
    }
} => {
    return wx.getAccountInfoSync()
}

/**
 * 获取用户信息
 * @param data 
 */
export const getUserInfo = (data?:{ withCredentials?: boolean, lang?: 'en'|'zh_CN'|'zh_TW' }): Observable<{res: {
    /**用户信息对象，不包含 openid 等敏感信息	 */
    userInfo:	UserInfo	
    /**不包括敏感信息的原始数据字符串，用于计算签名	*/
    rawData: string	
    /**使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 用户数据的签名验证和加解密	*/
    signature: string	
    /**包括敏感数据在内的完整用户信息的加密数据，详见 用户数据的签名验证和加解密	*/
    encryptedData: string	
    /**加密算法的初始向量，详见 用户数据的签名验证和加解密	*/
    iv: string	
    /**敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据*/
    cloudID: string	
}}> => {
    return createCommon('getUserInfo', data)
}

/**自定义业务数据监控上报接口 */
export const reportMonitor = (name: string, value: number) => {
    wx.reportMonitor(name, value)
}

/**自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段 */
export const reportAnalytics = (eventName: string, data: any) => {
    wx.reportAnalytics(eventName, data)
}

/**发起微信支付 */
export const requestPayment = (data: {
    /**时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间*/
    timeStamp: string
    /**随机字符串，长度为32个字符以下*/
    nonceStr: string
    /**统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=****/
    package: string
    /**	签名算法*/
    signType?: 'MD5'|'HMAC-SHA256'
    /**签名，具体签名方案参见 小程序支付接口文档*/
    paySign: string
}): Observable<any> => {
    return createCommon('requestPayment', data)
}

/**
 * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功
 * @param scope 
 */
export const authorize = (scope: string): Observable<any> => {
    return createCommon('authorize', {scope})
}

/**
 * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限
 * 
 * 注意：2.3.0 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息
 */
export const openSetting = (): Observable<any> => {
    return createCommon('openSetting')
}

/**
 * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
 * @param withSubscriptions 
 */
export const getSetting = (withSubscriptions?: boolean): Observable<{res: {
    authSetting: AuthSetting,
    subscriptionsSetting: SubscriptionsSetting
}}> => {
    return createCommon('getSetting', {withSubscriptions})
}

/**
 * 获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址
 * @version 1.1.0
 */
export const chooseAddress = (): Observable<{res:{
    /**收货人姓名*/
    userName:string	
    /**邮编*/
    postalCode:string	
    /**国标收货地址第一级地址*/
    provinceName:string	
    /**国标收货地址第二级地址*/
    cityName:string	
    /**国标收货地址第三级地址*/
    countyName:string	
    /**详细收货地址信息*/
    detailInfo:string	
    /**收货地址国家码*/
    nationalCode:string	
    /**收货人手机号码*/
    telNumber:string	
    /**错误信息*/
    errMsg:string	
}}> => {
    return createCommon('chooseAddress')
}

/**
 * 查看微信卡包中的卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 微信卡券接口文档
 * @version 1.1.0 
 */
export const openCard = (cardList: {cardId: string,code:string}[]): Observable<any> => {
    return createCommon('openCard', {cardList})
}

/**
 * 批量添加卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用
 * @version 1.1.0
 */
export const addCard = (cardList: {cardId: string,cardExt:string}[]): Observable<{res:{
    cardList: {
        /**加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：code 解码接口*/
        code:string	
        /**用户领取到卡券的 ID*/
        cardId:string	
        /**卡券的扩展参数，结构请参考下文*/
        cardExt:string	
        /**是否成功 */
        isSuccess:boolean	
    }[]
}}> => {
    return createCommon('addCard', {cardList})
}

/**
 * 选择用户的发票抬头。当前小程序必须关联一个公众号，且这个公众号是完成了微信认证的，才能调用 chooseInvoiceTitle
 * @version 1.5.0
 */
export const chooseInvoiceTitle = (): Observable<{res:{
    /**
     * 抬头类型
     * 0	单位	1	个人
     * */
    type:string	
    /**抬头名称*/
    title:string	
    /**抬头税号*/
    taxNumber:string	
    /**单位地址*/
    companyAddress:string	
    /**手机号码*/
    telephone:string	
    /**银行名称*/
    bankName:string	
    /**银行账号*/
    bankAccount:string	
    /**错误信息*/
    errMsg:string	
}}> => {
    return createCommon('chooseInvoiceTitle')
}

/**
 * 选择用户已有的发票
 * @version 2.3.0
 */
export const chooseInvoice = (): Observable<{res:{
    /**用户选中的发票信息，格式为一个 JSON 字符串，包含三个字段： card_id：所选发票卡券的 cardId，encrypt_code：所选发票卡券的加密 code，报销方可以通过 cardId 和 encryptCode 获得报销发票的信息，app_id： 发票方的 appId */
    invoiceInfo: string
}}> => {
    return createCommon('chooseInvoice')
}

/**
 * 开始 SOTER 生物认证。验证流程请参考说明
 * @version 1.5.0
 */
export const startSoterAuthentication = (data: {
    /**请求使用的可接受的生物认证方式*/
    requestAuthModes:string[]		
    /**挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为 resultJSON 的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。*/
    challenge:string		
    /**验证描述，即识别过程中显示在界面上的对话框提示内容*/
    authContent:string	
}): Observable<any> => {
    return createCommon('startSoterAuthentication')
}

/**
 * 获取本机支持的 SOTER 生物认证方式
 * @version 1.5.0
 */
export const checkIsSupportSoterAuthentication = (): Observable<{res:{
    /**该设备支持的可被SOTER识别的生物识别方式 */
    supportMode: string[]
}}> => {
    return createCommon('checkIsSupportSoterAuthentication')
}


/**
 * 获取设备内是否录入如指纹等生物信息的接口
 * @version 1.6.0
 */
export const checkIsSoterEnrolledInDevice = (checkAuthMode: 'fingerPrint'|'facial'|'speech'): Observable<{res:{
    /**是否已录入信息*/
    isEnrolled:boolean	
    /**错误信息*/
    errMsg:string	
}}> => {
    return createCommon('checkIsSoterEnrolledInDevice', { checkAuthMode })
}

/**
 * 获取用户过去三十天微信运动步数。需要先调用 wx.login 接口。步数信息会在用户主动进入小程序时更新
 * @version 1.2.0
 */
export const getWeRunData = (): Observable<{res:{
    /**包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。解密后得到的数据结构见后文	*/
    encryptedData:string	
    /**加密算法的初始向量，详细见加密数据解密算法	*/
    iv:string	
    /**敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据*/
    cloudID:string	
}}> => {
    return createCommon('getWeRunData')
}

/**
 * 自定义性能监控上报。使用前，需要在小程序管理后台配置。 详情参见测速系统指南
 * @param id 
 * @param value 
 * @version 2.9.2
 */
export const reportPerformance = (id: number, value: number) => {
    wx.reportPerformance(id, value)
}

/**
 * 调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小程序设置页，通过 wx.getSetting 接口可获取用户对相关模板消息的订阅状态
 * @version 2.4.4
 */
export const requestSubscribeMessage = (tmplIds: string[]): Observable<{res:{
    /**接口调用成功时errMsg值为'requestSubscribeMessage:ok'*/
    errMsg:string	
    /**[TEMPLATE_ID]是动态的键，即模板id，值包括'accept'、'reject'、'ban'。'accept'表示用户同意订阅该条id对应的模板消息，'reject'表示用户拒绝订阅该条id对应的模板消息，'ban'表示已被后台封禁。例如 { errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: "accept"} 表示用户同意订阅zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE这条消息*/
    TEMPLATE_ID:string	
}}> => {
    return createCommon('requestSubscribeMessage', { tmplIds })
}

/**
 * 拉取h5领取红包封面页。获取参考红包封面地址参考 微信红包封面开发平台
 * @version 2.10.0 
 */
export const showRedPackage = (url: string): Observable<any> => {
    return createCommon('showRedPackage', { url })
}
/**
 * 停止搜索附近的 iBeacon 设备
 * @version 1.2.0 
 */
export const stopBeaconDiscovery = (): Observable<any> => {
    return createCommon('stopBeaconDiscovery')
}
/**
 * 开始搜索附近的 iBeacon 设备
 * @version 1.2.0 
 */
export const startBeaconDiscovery = (data: {
    /**iBeacon 设备广播的 uuid 列表 */
    uuids: string[],
    /**是否校验蓝牙开关，仅在 iOS 下有效 */
    ignoreBluetoothAvailable?: boolean
}): Observable<any> => {
    return createCommon('startBeaconDiscovery', data)
}

/**
 * 监听 iBeacon 设备更新事件，仅能注册一个监听
 * @param callback 
 * @version 1.2.0
 */
export const onBeaconUpdate = (callback: (res: { beacons: IBeaconInfo[] }) => void) => {
    wx.onBeaconUpdate(callback)
}
/**
 * 监听 iBeacon 服务状态变化事件，仅能注册一个监听
 * @version 1.2.0
 */
export const onBeaconServiceChange = (callback: (res: { available: boolean, discovering: boolean }) => void) => {
    wx.onBeaconServiceChange(callback)
}
/**
 * 取消监听 iBeacon 设备更新事件
 * @version 2.8.1 
 */
export const offBeaconUpdate = () => {
    wx.offBeaconUpdate()
}
/**
 * 取消监听 iBeacon 服务状态变化事件
 * @version 2.8.1 
 */
export const offBeaconServiceChange = () => {
    wx.offBeaconServiceChange()
}
/**
 * 获取所有已搜索到的 iBeacon 设备
 * @version 1.2.0
 */
export const getBeacons = (): Observable<{res: { beacons: IBeaconInfo[] }}> => {
    return createCommon('getBeacons')
}
/**
 * 关闭 Wi-Fi 模块
 * @version 1.6.0
 */
export const stopWifi = (): Observable<any> => {
    return createCommon('stopWifi')
}
/**
 * 开启 Wi-Fi 模块
 * @version 1.6.0
 */
export const startWifi = (): Observable<any> => {
    return createCommon('startWifi')
}
/**
 * 设置 wifiList 中 AP 的相关信息。在 onGetWifiList 回调后调用，iOS特有接口
 * @version 1.6.0
 */
export const setWifiList = (wifiList: {
    /**Wi-Fi 的 SSID*/
    SSID?:string		
    /**Wi-Fi 的 BSSID*/
    BSSID?:string		
    /**Wi-Fi 设备密码*/
    password?:string		
}[]): Observable<any> => {
    return createCommon('setWifiList', { wifiList })
}

/**
 * 监听连接上 Wi-Fi 的事件
 * @version 1.6.0
 */
export const onWifiConnected = (callback: (res: {wifi: WifiInfo}) => void) => {
    wx.onWifiConnected(callback)
}
/**
 * 监听获取到 Wi-Fi 列表数据事件
 * @param callback 
 * @version 1.6.0
 */
export const onGetWifiList = (callback: (res: {wifiList: WifiInfo[]}) => void) => {
    wx.onGetWifiList(callback)
}
/**
 * 取消监听连接上 Wi-Fi 的事件
 * @version 2.9.0
 */
export const offWifiConnected = () => {
    wx.offWifiConnected()
}
/**
 * 取消监听获取到 Wi-Fi 列表数据事件
 * @version 2.9.0
 */
export const offGetWifiList = () => {
    wx.offGetWifiList()
}

/**
 * 请求获取 Wi-Fi 列表。在 onGetWifiList 注册的回调中返回 wifiList 数据。 Android 调用前需要 用户授权 scope.userLocation
 * 
 * iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。 iOS 11.0 及 iOS 11.1 两个版本因系统问题，该方法失效。但在 iOS 11.2 中已修复。
 */
export const getWifiList = (): Observable<any> => {
    return createCommon('getWifiList')
}
/**
 * 获取已连接中的 Wi-Fi 信息
 * @version 1.6.0
 */
export const getConnectedWifi = (): Observable<{res: { wifi: WifiInfo }}> => {
    return createCommon('getConnectedWifi')
}
/**
 * 连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持
 * @version 1.6.0
 */
export const connectWifi = (data: {
    /**Wi-Fi 设备 SSID*/
    SSID: string			
    /**Wi-Fi 设备 BSSID*/
    BSSID?: string			
    /**Wi-Fi 设备密码*/
    password: string			
}): Observable<any> => {
    return createCommon('connectWifi',data)
}

/**
 * 添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录
 * @param data 
 */
export const addPhoneContact = (data: {
    /**名字 */
    firstName: string	
    /**头像本地文件路径*/
    photoFilePath?:string			
    /**昵称*/
    nickName?:string			
    /**姓氏*/
    lastName?:string			
    /**中间名*/
    middleName?:string			
    /**备注*/
    remark?:string			
    /**手机号*/
    mobilePhoneNumber?:string			
    /**微信号*/
    weChatNumber?:string			
    /**联系地址国家*/
    addressCountry?:string			
    /**联系地址省份*/
    addressState?:string			
    /**联系地址城市*/
    addressCity?:string			
    /**联系地址街道*/
    addressStreet?:string			
    /**联系地址邮政编码*/
    addressPostalCode?:string			
    /**公司*/
    organization?:string			
    /**职位*/
    title?:string			
    /**工作传真*/
    workFaxNumber?:string			
    /**工作电话*/
    workPhoneNumber?:string			
    /**公司电话*/
    hostNumber?:string			
    /**电子邮件*/
    email?:string			
    /**网站*/
    url?:string			
    /**工作地址国家*/
    workAddressCountry?:string			
    /**工作地址省份*/
    workAddressState?:string			
    /**工作地址城市*/
    workAddressCity?:string			
    /**工作地址街道*/
    workAddressStreet?:string			
    /**工作地址邮政编码*/
    workAddressPostalCode?:string			
    /**住宅传真*/
    homeFaxNumber?:string			
    /**住宅电话*/
    homePhoneNumber?:string			
    /**住宅地址国家*/
    homeAddressCountry?:string			
    /**住宅地址省份*/
    homeAddressState?:string			
    /**住宅地址城市*/
    homeAddressCity?:string			
    /**住宅地址街道*/
    homeAddressStreet?:string			
    /**住宅地址邮政编码*/
    homeAddressPostalCode?:string			
}): Observable<any> => {
    return createCommon('addPhoneContact', data)
}
/**
 * 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用
 */
export const writeBLECharacteristicValue = (data: {
    /**蓝牙设备 id*/
    deviceId:string		
    /**蓝牙特征值对应服务的 uuid*/
    serviceId:string		
    /**蓝牙特征值的 uuid*/
    characteristicId:string		
    /**蓝牙设备特征值对应的二进制值 */
    value:ArrayBuffer
}): Observable<any> => {
    return createCommon('writeBLECharacteristicValue', data)
}
/**
 * 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用
 */
export const readBLECharacteristicValue = (data: {
    /**蓝牙设备 id*/
    deviceId:string		
    /**蓝牙特征值对应服务的 uuid*/
    serviceId:string		
    /**蓝牙特征值的 uuid*/
    characteristicId:string		
}): Observable<any> => {
    return createCommon('readBLECharacteristicValue', data)
}

/**
 * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
 */
export const onBLEConnectionStateChange = (callback: (res: { deviceId: string, connected: number }) => void) => {
    wx.onBLEConnectionStateChange(callback)
}
/**
 * 监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification
 */
export const onBLECharacteristicValueChange = (callback: (res: {
    /**蓝牙设备 id*/
    deviceId: string	
    /**蓝牙特征值对应服务的 uuid*/
    serviceId: string	
    /**蓝牙特征值的 uuid*/
    characteristicId: string	
    /**特征值最新的值 */
    value:ArrayBuffer	
}) => void) => {
    wx.onBLECharacteristicValueChange(callback)
}

/**
 * 取消监听低功耗蓝牙连接状态的改变事件
 */
export const offBLEConnectionStateChange = () => {
    wx.offBLEConnectionStateChange()
}
/**
 * 取消监听低功耗蓝牙设备的特征值变化事件
 * @version 2.9.0
 */
export const offBLECharacteristicValueChange = () => {
    wx.offBLECharacteristicValueChange()
}

/**
 * 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。
 * 
 * 另外，必须先启用 notifyBLECharacteristicValueChange 才能监听到设备 characteristicValueChange 事件
 */
export const notifyBLECharacteristicValueChange = (data: {
    /**蓝牙设备 id*/
    deviceId:string		
    /**蓝牙特征值对应服务的 uuid*/
    serviceId:string		
    /**蓝牙特征值的 uuid*/
    characteristicId:string		
    /**是否启用 notify */
    state:boolean	
}): Observable<any> => {
    return createCommon('notifyBLECharacteristicValueChange', data)
}
/**
 * 获取蓝牙设备所有服务(service)
 */
export const getBLEDeviceServices = (deviceId: string): Observable<any> => {
    return createCommon('getBLEDeviceServices', { deviceId })
}
/**
 * 获取蓝牙设备某个服务中所有特征值(characteristic)。
 * @param data 
 */
export const getBLEDeviceCharacteristics = (data: {
    /**蓝牙设备 id */
    deviceId: string
    /**蓝牙服务 uuid，需要使用 getBLEDeviceServices 获取 */
    serviceId: string
}): Observable<any> => {
    return createCommon('getBLEDeviceCharacteristics', data)
}
/**
 * 连接低功耗蓝牙设备。
 */
export const createBLEConnection = (data: {
    /**用于区分设备的 id*/
    deviceId:string		
    /**超时时间，单位ms，不填表示不会超时  */
    timeout?:number		
}): Observable<any> => {
    return createCommon('createBLEConnection', data)
}
/**
 * 断开与低功耗蓝牙设备的连接
 * @param deviceId 
 */
export const closeBLEConnection = (deviceId: string): Observable<any> => {
    return createCommon('closeBLEConnection', { deviceId })
}
/**
 * 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索
 */
export const stopBluetoothDevicesDiscovery = (): Observable<any> => {
    return createCommon('stopBluetoothDevicesDiscovery')
}
/**
 * 开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，请在搜索并连接到设备后调用 wx.stopBluetoothDevicesDiscovery 方法停止搜索
 */
export const startBluetoothDevicesDiscovery = (data?: {
    /**要搜索的蓝牙设备主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备。*/
    services:string[]	
    /**是否允许重复上报同一设备。如果允许重复上报，则 wx.onBlueToothDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同。*/
    allowDuplicatesKey:boolean	
    /**上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报。*/
    interval:number	
}): Observable<any> => {
    return createCommon('startBluetoothDevicesDiscovery', data)
}
/**
 * 初始化蓝牙模块
 */
export const openBluetoothAdapter = (): Observable<any> => {
    return createCommon('openBluetoothAdapter')
}

/**监听寻找到新设备的事件 */
export const onBluetoothDeviceFound = (callback: (res: { devices: {
    /**蓝牙设备名称，某些设备可能没有*/
    name:string	
    /**用于区分设备的 id*/
    deviceId:string	
    /**当前蓝牙设备的信号强度*/
    RSSI:number	
    /**当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。*/
    advertisData:ArrayBuffer	
    /**当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段 */
    advertisServiceUUIDs:string[]	
    /**当前蓝牙设备的广播数据段中的 LocalName 数据段*/
    localName:string	
    /**当前蓝牙设备的广播数据段中的 ServiceData 数据段*/
    serviceData:any	
}[] }) => void) => {
    wx.onBluetoothDeviceFound(callback)
}
/**
 * 监听蓝牙适配器状态变化事件
 */
export const onBluetoothAdapterStateChange = (callback: (res: {
    /**蓝牙适配器是否可用*/
    available:boolean	
    /**蓝牙适配器是否处于搜索状态*/
    discovering:boolean	
}) => void) => {
    wx.onBluetoothAdapterStateChange(callback)
}
/**
 * 取消监听寻找到新设备的事件
 * @version 2.9.0
 */
export const offBluetoothDeviceFound = () => {
    wx.offBluetoothDeviceFound()
}
/**
 * 取消监听蓝牙适配器状态变化事件
 * @version 2.9.0
 */
export const offBluetoothAdapterStateChange = () => {
    wx.offBluetoothAdapterStateChange()
}

/**
 * 根据 uuid 获取处于已连接状态的设备
 */
export const getConnectedBluetoothDevices = (services: string[]): Observable<{res:{
    devices:{
        /**蓝牙设备名称，某些设备可能没有*/
        name:string	
        /**用于区分设备的 id*/
        deviceId:string	
    }[]
}}> => {
    return createCommon('getConnectedBluetoothDevices', { services })
}
/**
 * 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
 */
export const getBluetoothDevices = (): Observable<{res:{
    devices:{
        /**蓝牙设备名称，某些设备可能没有*/
        name:string	
        /**用于区分设备的 id*/
        deviceId:string	
        /**当前蓝牙设备的信号强度 */
        RSSI:number	
        /**当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。 */
        advertisData:ArrayBuffer	
        /**当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段 */
        advertisServiceUUIDs:string[]	
        /**当前蓝牙设备的广播数据段中的 LocalName 数据段*/
        localName:string	
        /**当前蓝牙设备的广播数据段中的 ServiceData 数据段*/
        serviceData:Object	
    }[]
}}> => {
    return createCommon('getBluetoothDevices')
}
/**
 * 获取本机蓝牙适配器状态
 */
export const getBluetoothAdapterState = (): Observable<{res:{
    /**是否正在搜索设备*/
    discovering:boolean	
    /**蓝牙适配器是否可用*/
    available:boolean	
}}> => {
    return createCommon('getBluetoothAdapterState')
}
/**
 * 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用
 */
export const closeBluetoothAdapter = (): Observable<any> => {
    return createCommon('closeBluetoothAdapter')
}

/**
 * wx.getBatteryInfo 的同步版本
 */
export const getBatteryInfoSync = (): {
    /**设备电量，范围 1 - 100*/
    level:string	
    /**是否正在充电中*/
    isCharging:boolean	
} => {
    return wx.getBatteryInfoSync()
}

/**
 * 获取设备电量。
 */
export const getBatteryInfo = (): Observable<{res:{
    /**设备电量，范围 1 - 100*/
    level:string	
    /**是否正在充电中*/
    isCharging:boolean	
}}> => {
    return createCommon('getBatteryInfo')
}

/**
 * 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
 */
export const setClipboardData = (data: string): Observable<any> => {
    return createCommon('setClipboardData', { data })
}
/**
 * 获取系统剪贴板的内容
 */
export const getClipboardData = (): Observable<{res:{data:string}}> => {
    return createCommon('getClipboardData')
}

/**
 * 关闭 NFC 模块。仅在安卓系统下有效
 * @version 1.7.0
 */
export const stopHCE = (): Observable<any> => {
    return createCommon('stopHCE')
}

/**
 * 初始化 NFC 模块
 * @version 1.7.0
 */
export const startHCE = (aid_list: string[]): Observable<any> => {
    return createCommon('startHCE', { aid_list })
}

/**
 * 发送 NFC 消息。仅在安卓系统下有效
 * @version 1.7.0
 */
export const sendHCEMessage = (data: ArrayBuffer): Observable<any> => {
    return createCommon('sendHCEMessage', { data })
}

/**
 * 监听接收 NFC 设备消息事件，仅能注册一个监听
 * @version 1.7.0
 */
export const onHCEMessage = (callback: (res: {
    /**消息类型*/
    messageType:number	
    /**messageType=1 时 ,客户端接收到 NFC 设备的指令 */
    data:ArrayBuffer	
    /**messageType=2 时，原因*/
    reason:number	
}) => void) => {
    wx.onHCEMessage(callback)
}

/**接收 NFC 设备消息事件，取消事件监听 */
export const offHCEMessage = () => {
    wx.offHCEMessage()
}
/**
 * 判断当前设备是否支持 HCE 能力
 * @version 1.7.0
 */
export const getHCEState = (): Observable<any> => {
    return createCommon('getHCEState')
}
/**
 * 监听网络状态变化事件
 */
export const onNetworkStatusChange = (callback: (res: {
    /**当前是否有网络连接*/
    isConnected:boolean	
    /**网络类型*/
    networkType:'wifi'|'2g'|'3g'|'4g'|'unknown'|'none'
}) => void) => {
    wx.onNetworkStatusChange(callback)
}

/**
 * 取消监听网络状态变化事件，参数为空，则取消所有的事件监听
 * @version 2.9.3
 */
export const offNetworkStatusChange = () => {
    wx.offNetworkStatusChange()
}

/**
 * 获取网络类型
 */
export const getNetworkType = (): Observable<{res:{
    networkType: 'wifi'|'2g'|'3g'|'4g'|'unknown'|'none'
}}> => {
    return createCommon('getNetworkType')
}

/**
 * 设置屏幕亮度
 * @version 1.2.0
 */
export const setScreenBrightness = (value: string): Observable<any> => {
    return createCommon('setScreenBrightness', { value })
}
/**
 * 设置屏幕亮度
 * @version 1.4.0
 */
export const setKeepScreenOn = (keepScreenOn: string): Observable<any> => {
    return createCommon('setKeepScreenOn', { keepScreenOn })
}
/**
 * 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发，只能注册一个监听
 * @version 1.4.0
 */
export const onUserCaptureScreen = (callback: Function) => {
    wx.onUserCaptureScreen(callback)
}
/**
 * 用户主动截屏事件。取消事件监听
 * @version 2.9.3
 */
export const offUserCaptureScreen = () => {
    wx.offUserCaptureScreen();
}
/**获取屏幕亮度 */
export const getScreenBrightness = (): Observable<{res:{value:number}}> => {
    return createCommon('getScreenBrightness')
}
/**拨打电话 */
export const makePhoneCall = (phoneNumber: string): Observable<any> => {
    return createCommon('makePhoneCall', { phoneNumber })
}
/**停止监听加速度数据。 */
export const stopAccelerometer = (): Observable<any> => {
    return createCommon('stopAccelerometer')
}
/**开始监听加速度数据 */
export const startAccelerometer = (interval: 'game'|'ui'|'normal'): Observable<any> => {
    return createCommon('startAccelerometer', { interval })
}
/**
 * 监听加速度数据事件。频率根据 wx.startAccelerometer() 的 interval 参数, 接口调用后会自动开始监听。
 */
export const onAccelerometerChange = (callback:(res: {
    /**X 轴*/
    x:number	
    /**Y 轴*/
    y:number	
    /**Z 轴*/
    z:number	
}) => void) => {
    wx.onAccelerometerChange(callback)
}
/**
 * 取消监听加速度数据事件，参数为空，则取消所有的事件监听
 */
export const offAccelerometerChange = () => {
    wx.offAccelerometerChange()
}
/**停止监听罗盘数据 */
export const stopCompass = (): Observable<any> => {
    return createCommon('stopCompass')
}
/**开始监听罗盘数据 */
export const startCompass = (): Observable<any> => {
    return createCommon('startCompass')
}
/**
 * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
 */
export const onCompassChange = (callback:(res:{
    /**面对的方向度数*/
    direction:number	
    /**精度*/
    accuracy:number|string	
}) => void) => {
    wx.onCompassChange(callback)
}

/**
 * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听
 * @version 2.9.3
 */
export const offCompassChange = () => {
    wx.offCompassChange()
}

/**
 * 停止监听设备方向的变化
 * @version 2.3.0
 */
export const stopDeviceMotionListening = (): Observable<any> => {
    return createCommon('stopDeviceMotionListening')
}
/**
 * 开始监听设备方向的变化
 */
export const startDeviceMotionListening = (interval: 'game'|'ui'|'normal'): Observable<any> => {
    return createCommon('startDeviceMotionListening', { interval })
}
/**
 * 监听设备方向变化事件。频率根据 wx.startDeviceMotionListening() 的 interval 参数。可以使用 wx.stopDeviceMotionListening() 停止监听
 * @version 2.3.0
 */
export const onDeviceMotionChange = (callbak: (res: {
    /**当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。*/
    alpha:number	
    /**当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。*/
    beta:number	
    /**当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。*/
    gamma:number	
}) => void) => {
    wx.onDeviceMotionChange(callbak)
}
/**
 * 取消监听设备方向变化事件，参数为空，则取消所有的事件监听
 * @version 2.9.3
 */
export const offDeviceMotionChange = () => {
    wx.offDeviceMotionChange()
}
/**
 * 停止监听陀螺仪数据
 * @version 2.3.0
 */
export const stopGyroscope = (): Observable<any> => {
    return createCommon('stopGyroscope')
}
/**
 * 开始监听陀螺仪数据
 * @version 2.3.0
 */
export const startGyroscope = (interval: 'game'|'ui'|'normal'): Observable<any> => {
    return createCommon('startGyroscope', { interval })
}
/**
 * 监听陀螺仪数据变化事件。频率根据 wx.startGyroscope() 的 interval 参数。可以使用 wx.stopGyroscope() 停止监听
 * @version 2.3.0
 */
export const onGyroscopeChange = (callback:(res: {
    /**x 轴的角速度*/
    x:number	
    /**y 轴的角速度*/
    y:number	
    /**z 轴的角速度*/
    z:number	
}) => void) => {
    wx.onGyroscopeChange(callback)
}
/**
 * 取消监听陀螺仪数据变化事件。
 * @version 2.9.3
 */
export const offGyroscopeChange = () => {
    wx.offGyroscopeChange()
}
/**
 * 监听内存不足告警事件。
 * @version 2.0.2 
 */
export const onMemoryWarning = (callback:(res:{level:number}) => void) => {
    wx.onMemoryWarning(callback)
}
/**
 * 取消监听内存不足告警事件
 * @version 2.9.0
 */
export const offMemoryWarning = () => {
    wx.offMemoryWarning()
}
/**
 * 调起客户端扫码界面进行扫码
 */
export const scanCode = (data?: {
    /**是否只能从相机扫码，不允许从相册选择图片	1.2.0 */
    onlyFromCamera?:boolean
    /**['barCode', 'qrCode']	否	扫码类型 */
    scanType?:string[]	
}): Observable<{res:{
    /**所扫码的内容*/
    result:string	
    /**所扫码的类型
     * QR_CODE	二维码	
        AZTEC	一维码	
        CODABAR	一维码	
        CODE_39	一维码	
        CODE_93	一维码	
        CODE_128	一维码	
        DATA_MATRIX	二维码	
        EAN_8	一维码	
        EAN_13	一维码	
        ITF	一维码	
        MAXICODE	一维码	
        PDF_417	二维码	
        RSS_14	一维码	
        RSS_EXPANDED	一维码	
        UPC_A	一维码	
        UPC_E	一维码	
        UPC_EAN_EXTENSION	一维码	
        WX_CODE	二维码	
        CODE_25	一维码
    */
    scanType:string	
    /**所扫码的字符集*/
    charSet:string	
    /**当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 path*/
    path:string	
    /**原始数据，base64编码*/
    rawData:string	
}}> => {
    return createCommon('showRedPackage', data)
}
/**
 * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
 */
export const vibrateShort = (): Observable<any> => {
    return createCommon('vibrateShort')
}
/**
 * 使手机发生较长时间的振动（400 ms)
 */
export const vibrateLong = (): Observable<any> => {
    return createCommon('vibrateLong')
}

export const createWorker = (scriptPath: string):{
    /**监听主线程/Worker 线程向当前线程发送的消息的事件 */
    onMessage(callback: (res: {message:any}) => void): void
    /**向主线程/Worker 线程发送的消息 */
    postMessage(data: any): void
    /**结束当前 Worker 线程。仅限在主线程 worker 对象上调用 */
    terminate(): void
} => {
    return wx.createWorker(scriptPath)
}

/**
 * 获取第三方平台自定义的数据字段
 */
export const getExtConfigSync = ():{extConfig:any} => {
    return wx.getExtConfigSync()
}

/**
 * 获取第三方平台自定义的数据字段
 */
export const getExtConfig = (): Observable<{res:{extConfig:any}}> => {
    return createCommon('getExtConfig')
}

/**
 * 创建插屏广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。
 * @version 2.6.0 
 */
export const createInterstitialAd = (object:{adUnitId: string}) => {
    return wx.createInterstitialAd(object)
}

/**
 * 创建激励视频广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API（小游戏端要求 >= 2.0.4， 小程序端要求 >= 2.6.0）。调用该方法创建的激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用）。
 * @param object 
 * @version 2.0.4 
 */
export const createRewardedVideoAd = (object: {
    /**广告单元 id	 */
    adUnitId:string		
    /**是否启用多例模式，默认为false */
    multiton?:boolean		
}) => {
    return wx.createRewardedVideoAd(object)
}

/**
 * 返回一个 SelectorQuery 对象实例。在自定义组件或包含自定义组件的页面中，应使用 this.createSelectorQuery() 来代替
 * @version 1.4.0
 */
export const createSelectorQuery = () => {
    return wx.createSelectorQuery()
}

/**
 * 创建并返回一个 IntersectionObserver 对象实例。在自定义组件或包含自定义组件的页面中，应使用 this.createIntersectionObserver([options]) 来代替
 * @version 1.9.3
 */
export const createIntersectionObserver = (component: any, options: {
    /**一个数值数组，包含所有阈值。	 */
    thresholds?:number[]	
    /**初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。	 */
    initialRatio?:number	
    /**是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能） */
    observeAll?:boolean	
}) => {
    return wx.createIntersectionObserver(component, options)
}

/**
 * 创建离屏 canvas 实例
 * @version 2.7.0
 */
export const createOffscreenCanvas = () => {
    return wx.createOffscreenCanvas()
}

/**
 * 创建 canvas 的绘图上下文 CanvasContext 对象
 * 
 * 从基础库 2.9.0 开始，本接口停止维护，请使用 Canvas 代替
 */
export const createCanvasContext = (canvasId: string, $this?: any) => {
    return wx.createCanvasContext(canvasId, $this)
}

/**
 * 把当前画布指定区域的内容导出生成指定大小的图片。在 draw() 回调里调用该方法才能保证图片导出成功
 * @param data 
 */
export const canvasToTempFilePath = (data?: {
    /**指定的画布区域的左上角横坐标	1.2.0 */
    x?:number	
    /**指定的画布区域的左上角纵坐标	1.2.0 */
    y?:number	
    /**指定的画布区域的宽度	1.2.0 */
    width?:number	
    /**指定的画布区域的高度	1.2.0 */
    height?:number	
    /**输出的图片的宽度	1.2.0 */
    destWidth?:number	
    /**输出的图片的高度	1.2.0 */
    destHeight?:number	
    /**画布标识，传入 canvas 组件的 canvas-id	 */
    canvasId?:string		
    /**画布标识，传入 canvas 组件实例 （canvas type="2d" 时使用该属性）。	 */
    canvas?:string		
    /**目标文件的类型	1.7.0 */
    fileType?:'jpg'|'png'
    /**图片的质量，目前仅对 jpg 有效。取值范围为 (0, 1]，不在范围内时当作 1.0 处理。 */
    quality?:number		
}): Observable<{res:{tempFilePath:string}}> => {
    return createCommon('canvasToTempFilePath', data)
}

/**
 * 将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 <canvas> 组件
 * @version 1.9.0
 */
export const canvasPutImageData = (data: {
    /**画布标识，传入 canvas 组件的 canvas-id 属性。 */
    canvasId:string		
    /**图像像素点数据，一维数组，每四项表示一个像素点的 rgba */
    data:Uint8ClampedArray		
    /**源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量） */
    x:number		
    /**源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量） */
    y:number		
    /**源图像数据矩形区域的宽度 */
    width:number		
    /**源图像数据矩形区域的高度 */
    height:number		
}): Observable<any> => {
    return createCommon('canvasPutImageData',data)
}


/**
 * 获取 canvas 区域隐含的像素数据
 * @version 1.9.0
 */
export const canvasGetImageData = (data: {
    /**画布标识，传入 canvas 组件的 canvas-id 属性。 */
    canvasId:string		
    /**将要被提取的图像数据矩形区域的左上角横坐标 */
    x:number		
    /**将要被提取的图像数据矩形区域的左上角纵坐标 */
    y:number		
    /**将要被提取的图像数据矩形区域的宽度 */
    width:number		
    /**将要被提取的图像数据矩形区域的高度	 */
    height:number		
}): Observable<{res:{
    /**图像数据矩形的宽度 */
    width:number	
    /**图像数据矩形的高度 */
    height:number	
    /**图像像素点数据，一维数组，每四项表示一个像素点的 rgba */
    data:Uint8ClampedArray	
}}> => {
    return createCommon('canvasGetImageData',data)
}

/**
 * 创建 map 上下文 MapContext 对象
 * @param mapId     map 组件的 id
 * @param $this     在自定义组件下，当前组件实例的this，以操作组件内 map 组件
 */
export const createMapContext = (mapId: string, $this?: any) => {
    return wx.createMapContext(mapId, $this)
}

/**
 * 保存图片到系统相册
 * 
 * 调用前需要 用户授权 `scope.writePhotosAlbum`
 * @param filePath  图片文件路径，可以是临时文件路径或永久文件路径 (本地路径) ，不支持网络路径
 * @version 1.2.0
 */
export const saveImageToPhotosAlbum = (filePath: string) => {
    return createCommon('saveImageToPhotosAlbum', { filePath })
}

/**
 * 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作
 */
export const previewImage = (data: {
    /**需要预览的图片链接列表。2.2.3 起支持云文件ID */
    urls: string[]
    /**当前显示图片的链接 */
    current?: string
}) => {
    return createCommon('previewImage', data)
}
/**
 * 获取图片信息。网络图片需先配置download域名才能生效
 * @param filePath  图片的路径，支持网络路径、本地路径、代码包路径
 */
export const getImageInfo = (src: string): Observable<{res:{
    /**图片原始宽度，单位px。不考虑旋转。	 */
    width:number	
    /**图片原始高度，单位px。不考虑旋转。	 */
    height:number	
    /**图片的本地路径	 */
    path:string	
    /**拍照时设备方向	1.9.90 */
    orientation: 
    'up'/**默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。	 */|
    'up-mirrored' /**同 up，但镜像翻转，对应 Exif 中的 2	 */ |
    'down'/**旋转180度，对应 Exif 中的 3	 */ |
    'down-mirrored'/**同 down，但镜像翻转，对应 Exif 中的 4	 */|
    'left-mirrored'/**同 left，但镜像翻转，对应 Exif 中的 5	 */|
    'right'/**顺时针旋转90度，对应 Exif 中的 6 */|
    'right-mirrored'/**同 right，但镜像翻转，对应 Exif 中的 7	 */|
    'left'/**逆时针旋转90度，对应 Exif 中的 8 */
    /**图片格式    1.9.90 */
    type:string	
}}> => {
    return createCommon('getImageInfo', { src })
}
/**
 * 压缩图片接口，可选压缩质量
 * @version 2.4.0
 */
export const compressImage = (data: {
    /**图片路径，图片的路径，支持本地路径、代码包路径 */
    src:string		
    /**压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效） */
    quality?:number		
}) => {
    return createCommon('compressImage', data)
}
/**
 * 从客户端会话选择文件
 * @version 2.5.0
 */
export const chooseMessageFile = (data: {
    /**最多可以选择的文件个数，可以 0～100	 */
    count:number		
    /**所选的文件的类型	 */
    type?:
    'all'/**从所有文件选择	 */|
    'video'/**只能选择视频文件	 */|
    'image'/**只能选择图片文件	 */|
    'file'/**可以选择除了图片和视频之外的其它的文件	 */
    /**根据文件拓展名过滤，仅 type==file 时有效。每一项都不能是空字符串。默认不过滤 */
    extension?:string[]		
}): Observable<{res:{
    tempFiles: {
        /**本地临时文件路径 (本地路径)*/
        path:string	
        /**本地临时文件大小，单位 B*/
        size:number	
        /**选择的文件名称*/
        name:string	
        /**选择的文件类型*/
        type:
            'video'/**选择了视频文件	 */|
            'image'/**选择了图片文件	 */|
            'file'/**选择了除图片和视频的文件	 */
        /**选择的文件的会话发送时间，Unix时间戳，工具暂不支持此属性*/
        time:number	
    }[]
}}> => {
    return createCommon('chooseMessageFile', data)
}
/**从本地相册选择图片或使用相机拍照 */
export const chooseImage = (data: {
    /**最多可以选择的图片张数 */
    count?:number	
    /**['original', 'compressed']所选的图片的尺寸 */
    sizeType?:string[]	
    /**['album', 'camera']	选择图片的来源 */
    sourceType?:string	
}): Observable<{res:{
    tempFilePaths: {
        /**本地临时文件路径 (本地路径) */
        path:string	
        /**本地临时文件大小，单位 B */
        size:number	
    }[]
    tempFiles: {
        /**本地临时文件路径 (本地路径) */
        path:string	
        /**本地临时文件大小，单位 B */
        size:number	
    }[]
}}> => {
    return createCommon('chooseImage', data)
}
/**
 * 保存视频到系统相册。支持mp4视频格式
 * 
 * 调用前需要 用户授权 scope.writePhotosAlbum
 */
export const saveVideoToPhotosAlbum = (filePath: string) => {
    return createCommon('saveVideoToPhotosAlbum', { filePath })
}

/**
 * 创建 video 上下文 VideoContext 对象
 * @param id video 组件的 id
 * @param $this 在自定义组件下，当前组件实例的this，以操作组件内 video 组
 */
export const createVideoContext= (id: string, $this?: any) => {
    return wx.createVideoContext(id, $this)
}

/**
 * 拍摄视频或从手机相册中选视频
 */
export const chooseVideo = (data?: {
    /**['album', 'camera']	视频选择的来源	 */
    sourceType?:string[]	
    /**是否压缩所选择的视频文件	 */
    compressed?:boolean	
    /**拍摄视频最长拍摄时间，单位秒	 */
    maxDuration?:number	
    /**默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效 */
    camera?:string	
}): Observable<{res: {
    /**选定视频的临时文件路径 (本地路径) */
    tempFilePath:string	
    /**选定视频的时间长度 */
    duration:number	
    /**选定视频的数据量大小 */
    size:number	
    /**返回选定视频的高度 */
    height:number	
    /**返回选定视频的宽度 */
    width:number	
}}> => {
    return createCommon('chooseVideo', data)
}
/**
 * 拍摄或从手机相册中选择图片或视频
 * @version 2.10.0
 */
export const chooseMedia = (data: {
    /**最多可以选择的文件个数 */
    count?:number	
    /**['image', 'video']	文件类型 */
    mediaType?:string[]	
    /**['album', 'camera']	图片和视频选择的来源 */
    sourceType?:string[]	
    /**拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间 */
    maxDuration?:number
    /**['original', 'compressed']	仅对 mediaType 为 image 时有效，是否压缩所选文件 */
    sizeType?:string[]	
    /**仅在 sourceType 为 camera 时生效，使用前置或后置摄像头 */
    camera?:string
}): Observable<{res:{
    /**本地临时文件列表 */
    tempFiles: {
        /**本地临时文件路径 (本地路径) */
        tempFilePath:string	
        /**本地临时文件大小，单位 B */
        size:number	
        /**视频的时间长度 */
        duration:number	
        /**视频的高度 */
        height:number	
        /**视频的宽度 */
        width:number	
        /**视频缩略图临时文件路径 */
        thumbTempFilePath:string	
    }[],
    /**文件类型，有效值有 image 、video */
    type: 'image'|'video'
}}> => {
    return createCommon('chooseMedia', data)
}
/**
 * 结束播放语音
 * @version 1.6.0
 */
export const stopVoice = (): Observable<any> => {
    return createCommon('stopVoice')
}
/**
 * 设置 InnerAudioContext 的播放选项。设置之后对当前小程序全局生效
 * @version 2.3.0
 */
export const setInnerAudioOption = (data?: {
    /**是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐 */
    mixWithOther?:boolean
    /**（仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音 */
    obeyMuteSwitch?:boolean
}): Observable<any> => {
    return createCommon('setInnerAudioOption', data)
}
/**
 * 开始播放语音。同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放
 * @version 1.6.0
 */
export const playVoice = (data: {
    /**需要播放的语音文件的文件路径 (本地路径)	 */
    filePath:string
    /**指定录音时长，到达指定的录音时长后会自动停止录音，单位：秒 */
    duration?:number
}): Observable<any> => {
    return createCommon('playVoice', data)
}
/**
 * 暂停正在播放的语音。再次调用 wx.playVoice 播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice
 * @version 1.6.0
 */
export const pauseVoice = (): Observable<any> => {
    return createCommon('pauseVoice')
}
/**
 * 获取当前支持的音频输入源
 * @version 2.1.0
 */
export const getAvailableAudioSources = (): Observable<{res:{audioSources:string[]}}> => {
    return createCommon('getAvailableAudioSources')
}
/**
 * 创建内部 audio 上下文 InnerAudioContext 对象
 * @version 1.6.0
 */
export const createInnerAudioContext = () => {
    return wx.createInnerAudioContext()
}
/**
 * 创建 audio 上下文 AudioContext 对象
 * @version 1.6.0
 */
export const createAudioContext = (id: string, $this?: any) => {
    return wx.createAudioContext(id, $this)
}
/**
 * 停止播放音乐
 */
export const stopBackgroundAudio = (): Observable<any> => {
    return createCommon('stopBackgroundAudio')
}
/**
 * 控制音乐播放进度
 * 
 * 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
 * @param position 音乐位置，单位：秒
 */
export const seekBackgroundAudio = (position: string): Observable<any> => {
    return createCommon('seekBackgroundAudio', { position })
}
/**
 * 使用后台播放器播放音乐。对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放
 */
export const playBackgroundAudio = (data: {
    /**音乐链接，目前支持的格式有 m4a, aac, mp3, wav */
    dataUrl: string		
    /**音乐标题 */
    title?:string		
    /**封面UR */
    coverImgUrl?:string		
}): Observable<any> => {
    return createCommon('playBackgroundAudio', data)
}
/**
 * 暂停播放音乐
 */
export const pauseBackgroundAudio = (): Observable<any> => {
    return createCommon('pauseBackgroundAudio')
}
/**
 * 监听音乐停止事件
 * @param callback 
 */
export const onBackgroundAudioStop = (callback: Function) => {
    wx.onBackgroundAudioStop(callback)
}
/**
 * 监听音乐播放事件
 * 
 * 从基础库 1.2.0 开始，本接口停止维护，请使用 wx.getBackgroundAudioManager 代替
 * @param callback 
 */
export const onBackgroundAudioPlay = (callback: Function) => {
    wx.onBackgroundAudioPlay(callback)
}
/**
 * 监听音乐暂停事件
 * @param callback 
 */
export const onBackgroundAudioPause = (callback: Function) => {
    wx.onBackgroundAudioPause(callback)
}

/**
 * 获取后台音乐播放状态
 */
export const getBackgroundAudioPlayerState = (): Observable<{res:{
    /**选定音频的长度（单位：s），只有在音乐播放中时返回 */
    duration:number	
    /**选定音频的播放位置（单位：s），只有在音乐播放中时返回 */
    currentPosition:number	
    /**
     * 播放状态
     * 0	暂停中	
1	播放中	
2	没有音乐播放
     *  */
    status:number	
    /**音频的下载进度百分比，只有在音乐播放中时返回 */
    downloadPercent:number	
    /**歌曲数据链接，只有在音乐播放中时返回 */
    dataUrl:string	
}}> => {
    return createCommon('getBackgroundAudioPlayerState')
}
/**
 * 获取全局唯一的背景音频管理器。 小程序切入后台，如果音频处于播放状态，可以继续播放。但是后台状态不能通过调用API操纵音频的播放状态
 * 
 * 从微信客户端6.7.2版本开始，若需要在小程序切后台后继续播放音频，需要在 app.json 中配置 requiredBackgroundModes 属性。开发版和体验版上可以直接生效，正式版还需通过审核
 */
export const getBackgroundAudioManager = () => {
    return wx.getBackgroundAudioManager()
}
/**
 * 创建 live-pusher 上下文 LivePusherContext 对象
 * @version 1.7.0
 */
export const createLivePusherContext = () => {
    return wx.createLivePusherContext()
}
/**
 * 创建 live-player 上下文 LivePlayerContext 对象
 * @param id live-player 组件的 id
 * @param $this 在自定义组件下，当前组件实例的this，以操作组件内 live-player 组件
 * @version 1.7.0
 */
export const createLivePlayerContext = (id: string, $this?: any) => {
    return wx.createLivePlayerContext(id, $this)
}
/**
 * 停止录音
 * @version 1.6.0
 */
export const stopRecord = (): Observable<any> => {
    return createCommon('stopRecord')
}
/**
 * 开始录音。当主动调用 wx.stopRecord，或者录音超过1分钟时自动结束录音。当用户离开小程序时，此接口无法调用
 * 
 * 调用前需要 用户授权 scope.record
 * 
 * 从基础库 1.6.0 开始，本接口停止维护，请使用 wx.getRecorderManager 代替
 */
export const startRecord = (): Observable<{res:{tempFilePath:string}}> => {
    return createCommon('startRecord')
}
/**
 * 获取全局唯一的录音管理器 RecorderManager
 * @version 1.6.0
 */
export const getRecorderManager = () => {
    return wx.getRecorderManager()
}
/**
 * 创建 camera 上下文 CameraContext 对象
 * @version 1.6.0
 */
export const createCameraContext = () => {
    return wx.createCameraContext()
}
/**
 * 创建音视频处理容器，最终可将容器中的轨道合成一个视频
 * @version 2.9.0
 */
export const createMediaContainer = () => {
    return wx.createMediaContainer()
}


}

module.exports = tenp