(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{331:function(a,t,r){"use strict";r.r(t);var e=r(7),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"常见排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见排序"}},[a._v("#")]),a._v(" 常见排序")]),a._v(" "),t("p",[a._v("冒泡排序：两两比较，大的放后面，小的放前面\n快速排序：从第一个值开始遍历，选择最小值，与第一个值进行替换，从第二个值开始遍历，选择最小值，与第二个值进行替换，以此类推\n选择排序：选择一个目标值，将比目标值大的放到目标值后面，比目标值小的放到目标值前面，继续在前后选择对应目标值，重复操作")]),a._v(" "),t("h3",{attrs:{id:"linkedhashmap、concurrenthashmap、hashmap、treemap的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashmap、concurrenthashmap、hashmap、treemap的区别"}},[a._v("#")]),a._v(" LinkedHashMap、ConcurrentHashMap、HashMap、TreeMap的区别")]),a._v(" "),t("p",[a._v("LinkedHashMap：记录插入和访问顺序\nConcurrentHashMap：线程安全\nTreeMap：自定义排序\nHashMap：没有上述特殊要求则使用HashMap")]),a._v(" "),t("h3",{attrs:{id:"treemap数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#treemap数据结构"}},[a._v("#")]),a._v(" TreeMap数据结构")]),a._v(" "),t("p",[a._v("内部维护一个红黑树结构，头结点对象\n节点里面包括父节点，左子节点，右子节点等，等于\n是形成了红黑树结构")]),a._v(" "),t("h3",{attrs:{id:"map、list、set-分别说下你知道的线程安全类和线程不安全的类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map、list、set-分别说下你知道的线程安全类和线程不安全的类"}},[a._v("#")]),a._v(" Map、List、Set 分别说下你知道的线程安全类和线程不安全的类")]),a._v(" "),t("p",[a._v("线程安全类:ConcurrentHashMap,SynchronizedList,CopyOnWriteArrayList,CopyOnWriteArraySet")]),a._v(" "),t("h3",{attrs:{id:"数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[a._v("#")]),a._v(" 数据结构")]),a._v(" "),t("p",[a._v("HashMap:数组+链表+红黑树，线程不安全\nConcurrentHashMap:内部数据结构与HashMap一致，但是线程安全，因为1.8之前用分段锁，1.8之后用Synchronized+CAS\nLinkedHashMap:继承HashMap，内部采用双向链表，包括头结点，尾节点，排序顺序（按插入排序还是按照访问排序）。\n节点内有上一个节点，下一个节点，当前节点值\nArrayList:动态数组，在内存中是一块连续的内存空间，扩容的过程是在内存中重新开辟空间，将原数据复制过去，扩容规则为原大小的1.5倍\nLinkedList:双向链表\nHashTable:散列表")]),a._v(" "),t("h3",{attrs:{id:"arraylist线程不安全的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist线程不安全的原因"}},[a._v("#")]),a._v(" ArrayList线程不安全的原因")]),a._v(" "),t("p",[a._v("ArrayList中的add()方法里面有elementData[size++] = e;代码，该\n代码不是原子性代码，分为size++和数组赋值两步，顾在多线程下线程不安全")]),a._v(" "),t("h3",{attrs:{id:"hashmap-待复习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-待复习"}},[a._v("#")]),a._v(" HashMap(待复习)")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://www.hzyandzgx.com/article/1593334711",target:"_blank",rel:"noopener noreferrer"}},[a._v("已关闭"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"hashmap初始容量10000-插入10000条数据-会不会扩容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap初始容量10000-插入10000条数据-会不会扩容"}},[a._v("#")]),a._v(" HashMap初始容量10000，插入10000条数据，会不会扩容")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/WhyLW/article/details/103377594",target:"_blank",rel:"noopener noreferrer"}},[a._v("已关闭"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"treemap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#treemap"}},[a._v("#")]),a._v(" TreeMap")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/zhuhao717/article/details/47444763",target:"_blank",rel:"noopener noreferrer"}},[a._v("已关闭"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"数组和链表的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组和链表的区别"}},[a._v("#")]),a._v(" 数组和链表的区别")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/qq_25806863/article/details/70607204",target:"_blank",rel:"noopener noreferrer"}},[a._v("数组和链表的区别"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"blockingqueue是否线程安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockingqueue是否线程安全"}},[a._v("#")]),a._v(" BlockingQueue是否线程安全")]),a._v(" "),t("p",[a._v("是安全的，内部使用ReentrantLock锁来保证线程安全")])])}),[],!1,null,null,null);t.default=s.exports}}]);