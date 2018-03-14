// 实现非父子组件传值

const center = {};

const eventMap = {
    // 'pass-data': callback
};

// 1.大家都能访问到的对象
export default center;

// 2.监听事件
// 参数1：事件名字
// 参数2：事件触发时执行的回调函数
center.$on = function(eventName, callback){
    console.log('$on执行了');
    //保存监听的回调函数
    eventMap[eventName] = callback;

    console.log(eventMap);
}

// 3.触发事件
// 参数1：事件名字
// 参数2：触发事件时传递的参数
center.$emit = function(eventName, param){
    console.log('$emit执行了');
    // console.log(eventName);
    // console.log(param);
    // 取出对应的事件回调函数，并且执行
    eventMap[eventName](param);
}



// 4.取消事件监听
















