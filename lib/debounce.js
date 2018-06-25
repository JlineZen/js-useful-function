/**
* @description 函数防抖
* 应用场景： auto complete 或 验证
* 理解： 在指定事件内如果触发该事件，该函数就不会执行；类似于大坝流水，把水闸关了
*/

function debounce (func, delay) {
	var timeout;
	return function () {
		var context = this, // 保存目标函数作用域
			args = arguments; // 获取目标函数的参数
		clearTimeout(timeout); // 清除之前的延时任务
		// 新的延时任务
		timeout = setTimeout(function () {
			// 执行目标函数
			func.apply(context, args);
		}, delay);
	};
}