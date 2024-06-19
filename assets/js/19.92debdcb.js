(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{329:function(t,a,r){"use strict";r.r(a);var s=r(7),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"熔断器的两种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熔断器的两种方式"}},[t._v("#")]),t._v(" 熔断器的两种方式")]),t._v(" "),a("p",[t._v("1.线程池熔断\n2.信号量熔断")]),t._v(" "),a("h3",{attrs:{id:"spring-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud"}},[t._v("#")]),t._v(" spring cloud")]),t._v(" "),a("p",[t._v("网关：zuul，getaway\n负载均衡：ribbon"),a("br"),t._v("\nRPC：fegin"),a("br"),t._v("\n熔断器：hystrix"),a("br"),t._v("\n消息总线：bus"),a("br"),t._v("\n链路：zipkin"),a("br"),t._v("\n注册/配置中心：eurake，config，nacos"),a("br"),t._v("\n权限：security"),a("br"),t._v("\n命令行：CLI")]),t._v(" "),a("h3",{attrs:{id:"hystrix熔断器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hystrix熔断器"}},[t._v("#")]),t._v(" Hystrix熔断器")]),t._v(" "),a("p",[t._v("1.通过JUC中的Semaphore信号量来实现，没有达到隔离效果，但是达到了限流效果\n2.通过线程池实现，每一个远程调用都会放到自己的线程池中，每一个线程池只\n有一定数量的线程去来处理远程请求")]),t._v(" "),a("h3",{attrs:{id:"熔断器的三种状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熔断器的三种状态"}},[t._v("#")]),t._v(" 熔断器的三种状态")]),t._v(" "),a("p",[t._v("1.打开"),a("br"),t._v("\n没有恢复迹象，直接打开熔断器"),a("br"),t._v("\n2.半开"),a("br"),t._v("\n有恢复迹象，补分请求分发到服务，正常调用，熔断关闭"),a("br"),t._v("\n3.关闭"),a("br"),t._v("\n服务一直正常调用，关闭熔断器")]),t._v(" "),a("h3",{attrs:{id:"服务降级功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务降级功能"}},[t._v("#")]),t._v(" 服务降级功能")]),t._v(" "),a("p",[t._v("通过调用Hystrix的getFallBack()方法，当Hystrix的run方法或者construct方法报错时，会调用getFallBack()")]),t._v(" "),a("h3",{attrs:{id:"熔断器的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熔断器的实现原理"}},[t._v("#")]),t._v(" 熔断器的实现原理")]),t._v(" "),a("p",[t._v("基于滑动窗口来做，一个滑动窗口包括了10个桶，每一个桶存储1s的信息，包括成功，失败，超时，异常的请求次数，然后通过这个次数来改变熔断器的一个状态是打开，半开还是关闭")]),t._v(" "),a("h3",{attrs:{id:"zk为什么可以当服务注册于发现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zk为什么可以当服务注册于发现"}},[t._v("#")]),t._v(" zk为什么可以当服务注册于发现")]),t._v(" "),a("p",[t._v("zk有持久化节点，临时节点，持久顺序，临时顺序"),a("br"),t._v("\nzk中有watch机制，一个watch只使用一次，触发一次watch，就会想client发送一次元数据")]),t._v(" "),a("h3",{attrs:{id:"为什么watch只用一次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么watch只用一次"}},[t._v("#")]),t._v(" 为什么watch只用一次")]),t._v(" "),a("p",[t._v("1.zk中有session的概念，一个临时节点消亡则session也会消亡，此时watch数据也没意义了"),a("br"),t._v("\n2.当节点的数据频繁修改和变动时，创建的watch机制会一直变多占用资源")]),t._v(" "),a("h3",{attrs:{id:"zk如何实现分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zk如何实现分布式锁"}},[t._v("#")]),t._v(" zk如何实现分布式锁")]),t._v(" "),a("p",[t._v("线程A在zk创建一个临时节点00001,获取到锁，线程B去创建的时候发现已经有了一个00001，则watch这个节点直到该节点消亡，线程B能够监听到消亡，再次去尝试创建新节点，获取锁"),a("br"),t._v("\n1.非公平：一个锁释放，所以等待线程全部watch醒来去创建锁"),a("br"),t._v("\n2.公平：一个锁释放，只让下一个线程watch醒来创建锁，有顺序性")]),t._v(" "),a("h3",{attrs:{id:"zk选举机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zk选举机制"}},[t._v("#")]),t._v(" zk选举机制")]),t._v(" "),a("p",[t._v("每一个节点都有myid，ZXID两个参数去选举，myid越大权重越大，ZXID越大权重越大，有限ZXID，然后myid")])])}),[],!1,null,null,null);a.default=v.exports}}]);