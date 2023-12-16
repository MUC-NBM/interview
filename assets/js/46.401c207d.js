(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{463:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#typescript-%E5%85%A5%E9%97%A8%E7%AC%94%E8%AE%B0"}},[t._v("TypeScript 入门笔记")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5"}},[t._v("基本概念")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9F%BA%E7%A1%80%E7%AF%87"}},[t._v("基础篇")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B"}},[t._v("1. 原始数据类型")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#11-%E5%B8%83%E5%B0%94%E5%80%BC"}},[t._v("1.1 布尔值")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#12-%E6%95%B0%E5%AD%97%E5%AD%97%E7%AC%A6%E4%B8%B2"}},[t._v("1.2 数字、字符串")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#13-void%E5%8F%AA%E9%92%88%E5%AF%B9%E5%87%BD%E6%95%B0"}},[t._v("1.3 void(只针对函数)")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#14-null-%E5%92%8C-undefined%E5%8F%AA%E9%92%88%E5%AF%B9%E5%8F%98%E9%87%8F"}},[t._v("1.4 null 和 undefined(只针对变量)")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2%E4%BB%BB%E6%84%8F%E5%80%BC"}},[t._v("2.任意值")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3-%E7%B1%BB%E5%9E%8B%E6%8E%A8%E8%AE%BA"}},[t._v("3. 类型推论")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#4-%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B"}},[t._v("4. 联合类型")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%BC%96%E8%AF%91%E8%84%9A%E6%9C%AC"}},[t._v("编译脚本")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%BC%96%E8%AF%91%E6%8A%A5%E9%94%99"}},[t._v("编译报错")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#tsconfigjson"}},[t._v("tsconfig.json")])])])])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/semlinker/awesome-typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("ts中文入门手册"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"typescript-入门笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-入门笔记"}},[t._v("#")]),t._v(" TypeScript 入门笔记")]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("在 TS 中，使用 : 指定变量的类型。\nTS 只在编译时对类型进行静态检查，在运行时不会。")]),t._v(" "),a("h2",{attrs:{id:"基础篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础篇"}},[t._v("#")]),t._v(" 基础篇")]),t._v(" "),a("h3",{attrs:{id:"_1-原始数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-原始数据类型"}},[t._v("#")]),t._v(" 1. 原始数据类型")]),t._v(" "),a("h4",{attrs:{id:"_1-1-布尔值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-布尔值"}},[t._v("#")]),t._v(" 1.1 布尔值")]),t._v(" "),a("ul",[a("li",[t._v("使用 boolean 定义布尔值类型：")]),t._v(" "),a("li",[t._v("直接调用 Boolean 也返回一个 boolean 类型：")]),t._v(" "),a("li",[t._v("但是 new Boolean() 返回的是一个 Boolean 对象：")])]),t._v(" "),a("h4",{attrs:{id:"_1-2-数字、字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-数字、字符串"}},[t._v("#")]),t._v(" 1.2 数字、字符串")]),t._v(" "),a("ul",[a("li",[t._v(":number")]),t._v(" "),a("li",[t._v(":string")])]),t._v(" "),a("h4",{attrs:{id:"_1-3-void-只针对函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-void-只针对函数"}},[t._v("#")]),t._v(" 1.3 void(只针对函数)")]),t._v(" "),a("p",[t._v("JS 没有 void 的概念，在 TS 中，可以用 void 表示没有任何返回值的函数：")]),t._v(" "),a("h4",{attrs:{id:"_1-4-null-和-undefined-只针对变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-null-和-undefined-只针对变量"}},[t._v("#")]),t._v(" 1.4 null 和 undefined(只针对变量)")]),t._v(" "),a("p",[t._v("在 TS 中，可以使用 null 和 undefined 来定义这两个原始数据类型：")]),t._v(" "),a("h3",{attrs:{id:"_2-任意值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-任意值"}},[t._v("#")]),t._v(" 2.任意值")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("容许改变：如果是一个普通类型，在赋值过程中改变类型是不被允许的，但如果是 any 类型，则允许被赋值为任意类型")])]),t._v(" "),a("li",[a("p",[t._v("返回类型：对它的任何操作，返回的内容的类型都是任意值：")])]),t._v(" "),a("li",[a("p",[t._v("自动赋值： 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：")])])]),t._v(" "),a("h3",{attrs:{id:"_3-类型推论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-类型推论"}},[t._v("#")]),t._v(" 3. 类型推论")]),t._v(" "),a("p",[t._v("变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：")]),t._v(" "),a("h3",{attrs:{id:"_4-联合类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-联合类型"}},[t._v("#")]),t._v(" 4. 联合类型")]),t._v(" "),a("p",[t._v("联合类型使用 | 分隔每个类型：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myFavoriteNumber"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyFavoriteNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'seven'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyFavoriteNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"编译脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译脚本"}},[t._v("#")]),t._v(" 编译脚本")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[t._v("tsc app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ts\n")])])]),a("p",[t._v("也可以一次性编译多个脚本文件")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("tsc file1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ts file2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ts file3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ts\n")])])]),a("p",[t._v("编译到指定目录，使用指定的es版本编译")]),t._v(" "),a("h3",{attrs:{id:"编译报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译报错"}},[t._v("#")]),t._v(" 编译报错")]),t._v(" "),a("p",[t._v("编译报错产生产物或者只针对类型检查")]),t._v(" "),a("h3",{attrs:{id:"tsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json"}},[t._v("#")]),t._v(" tsconfig.json")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file1.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file2.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"outFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/app.js"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);