(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{479:function(t,a,s){"use strict";s.r(a);var v=s(2),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js的异步操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js的异步操作"}},[t._v("#")]),t._v(" js的异步操作")]),t._v(" "),a("h2",{attrs:{id:"单线程模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程模式"}},[t._v("#")]),t._v(" 单线程模式")]),t._v(" "),a("ol",[a("li",[t._v("js是单线程的，一次只能执行一个任务")]),t._v(" "),a("li",[t._v("如果用得好，JavaScript 程序是不会出现堵塞的，这就是 Node.js 可以用很少的资源，应付大流量访问的原因。")])]),t._v(" "),a("h2",{attrs:{id:"同步任务和异步任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步任务和异步任务"}},[t._v("#")]),t._v(" 同步任务和异步任务")]),t._v(" "),a("ol",[a("li",[t._v("同步任务是那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个结束才能执行后一个。")]),t._v(" "),a("li",[t._v("异步任务是那些被引擎放在一边，不进入主线程、而进入任务队列的任务。")]),t._v(" "),a("li",[t._v("如果你需要从网络上下载一些数据，同步任务将会阻塞你的程序，直到所有数据都下载完毕，而异步任务允许你同时进行其他操作，而不必等待下载完成。")])]),t._v(" "),a("h2",{attrs:{id:"任务队列和事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务队列和事件循环"}},[t._v("#")]),t._v(" 任务队列和事件循环")]),t._v(" "),a("ol",[a("li",[t._v("JavaScript 运行时，除了一个正在运行的主线程，引擎还提供一个任务队列（task queue），里面是各种需要当前程序处理的异步任务。")]),t._v(" "),a("li",[t._v("主线程会去执行所有的同步任务。等到同步任务全部执行完，就会去看任务队列里面的异步任务。")]),t._v(" "),a("li",[t._v("如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就变成同步任务了。")]),t._v(" "),a("li",[t._v("事件循环的定义：JavaScript 引擎怎么知道异步任务有没有结果，能不能进入主线程呢？答案就是引擎在不停地检查，一遍又一遍，只要同步任务执行完了，引擎就会去检查那些挂起来的异步任务，是不是可以进入主线程了。这种循环检查的机制，就叫做事件循环（Event Loop）")])]),t._v(" "),a("h2",{attrs:{id:"异步操作的模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步操作的模式"}},[t._v("#")]),t._v(" 异步操作的模式")]),t._v(" "),a("ol",[a("li",[t._v("回调函数\nf1(f2)\n"),a("blockquote",[a("p",[t._v("举例：\n回调函数的优点是简单、容易理解和实现，缺点是不利于代码的阅读和维护，各个部分之间高度耦合（coupling），使得程序结构混乱、流程难以追踪（尤其是多个回调函数嵌套的情况），而且每个任务只能指定一个回调函数。")])])]),t._v(" "),a("li",[t._v("事件监听\n异步任务的执行不取决于代码的顺序，而取决于某个事件是否发生。\n"),a("blockquote",[a("p",[t._v("举例：\n这种方法的优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以“去耦合”（decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。阅读代码的时候，很难看出主流程。")])])]),t._v(" "),a("li",[t._v("发布/订阅\n某个任务执行完成，就向信号中心“发布”（publish）一个信号，其他任务可以向信号中心“订阅”（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做”发布/订阅模式”（publish-subscribe pattern），又称“观察者模式”（observer pattern）。\n"),a("blockquote",[a("p",[t._v("举例：\nf1执行完成后，向信号中心jQuery发布done信号，从而引发f2的执行。f2完成执行后，可以取消订阅（unsubscribe）。")])])])]),t._v(" "),a("h2",{attrs:{id:"异步操作的流程控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步操作的流程控制"}},[t._v("#")]),t._v(" 异步操作的流程控制")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("串行执行\n它会依次执行异步任务，所有任务都完成后，才会执行final函数。items数组保存每一个异步任务的参数，results数组保存每一个异步任务的运行结果。")])]),t._v(" "),a("li",[a("p",[t._v("并行执行\n流程控制函数也可以是并行执行，即所有异步任务同时执行，等到全部完成以后，才执行final函数。")])]),t._v(" "),a("li",[a("p",[t._v("并行与串行结合\n所谓并行与串行的结合，就是设置一个门槛，每次最多只能并行执行n个异步任务，这样就避免了过分占用系统资源。")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);