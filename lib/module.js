/**
* @desc 模块扩展
*/
var myModule = (function () {
  var my = {},
      _privateName = 'myModule';
  my.name = _privateName;
  my.setName = function (name) {
    my.name = name;
  };
  return my;
})();

/**
* @desc 模块拓展
*/
var myModule = (function (my) {
  my.greet = function (word) {
    console.log(word + 'I am ' + my.name);
  };
  return my;
})(myModule);

/**
* @desc 松耦合扩展
*/

var myModule = (function (my) {
  my.greet = function (word) {
    console.log(word);
  };
})(myModule || {});

/**
* @desc 紧耦合拓展
*/

var myModule = (function (my) {
  var oldGreet = my.greet;
  my.greet = function () {
    // 重载方法，依然可以通过oldGreet调用旧的方法
  };
})(myModule);