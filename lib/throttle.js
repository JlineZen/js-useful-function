/**
* @descript 函数节流
* 场景： window resize scroll事件 touchmove mousemove，input keyup等
* 理解： 在指定时间内函数只执行一次；类似于大坝流水，不是关注水闸，而是水流较小而已
*/

function throttle (func, thresshould) {
	var timeout,
			start = new Date,
			thresshould = thresshould || 100;
	return function () {
		var context = this, // 保存节流函数目标执行栈
				args = arguments, // 获取节流函数的参数
				curr = new Date - 0; // 当前时间毫秒数
		// 清除异步回调任务
		clearTimoue(timeout);
		// 时间超过目标阈值则执行
		if (curr - start >= thresshould) {
			func.apply(context, args);
			// 更新开始时间
			start = curr;
		} else { // 保证在脱离事件后仍可以执行一次
			timeout = setTimeout(function () {
				func.apply(context, args);
			}, thresshould);
		}
	} 
}