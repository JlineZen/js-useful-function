/**
* @descript 单例模式
* 场景： 单利模式是指对象在实例化时只能实例化一次；比如全局的登录弹窗或其他的
*/

function getSingleton (fn) {
  var instance
  return function () {
    return instance || (instance = fn.apply(this, arguments));
  }
}

function Dialog (options) {
  this.options = options;
}

var singletonDialog = (function () {
  return {
    getInstance: function (options) {
      var instance;
      return instance || (instance = new Dialog(options));
    }
  }
})();