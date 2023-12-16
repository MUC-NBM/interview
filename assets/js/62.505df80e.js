(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{482:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ref和reactive的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref和reactive的区别"}},[t._v("#")]),t._v(" ref和reactive的区别")]),t._v(" "),a("h2",{attrs:{id:"reactive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactive"}},[t._v("#")]),t._v(" reactive")]),t._v(" "),a("ol",[a("li",[t._v("reactive只能定义对象以及数组")]),t._v(" "),a("li",[t._v("reactive()API有两个限制：")])]),t._v(" "),a("blockquote",[a("p",[t._v("第一个限制是，它只适用于对象类型，比如对象、数组和集合类型，如Map和Set。\n它不适用于原始类型，比如string、number或boolean。\n第二个限制是，从reactive()返回的代理对象与原始对象是不一样的。\n用===操作符进行比较会返回false：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("jsx复制代码"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plainJsObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plainJsObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proxy is NOT equal to the original plain JS object.")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" plainJsObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("它的响应式是更加‘深层次’的，底层本质是将传入的数据包装成一个Proxy。")])]),t._v(" "),a("h2",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),a("ol",[a("li",[t._v("ref可以定义所有的类型")]),t._v(" "),a("li",[t._v("如果参数是对象类型时，其实底层的本质还是reactive")]),t._v(" "),a("li",[t._v("如果参数是基本类型那么形成响应式依赖于Object.defineProperty( )的get( )和set( )，如果ref的参数是引用类型，底层ref会借助reactive的proxy 定义响应式变成这样：reactive({value:'xiaxia'})")])]),t._v(" "),a("h2",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),a("ol",[a("li",[t._v("ref增加count的值")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 增加count的值")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("reactive增加count的值")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 增加count的值")]),t._v("\nstate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);