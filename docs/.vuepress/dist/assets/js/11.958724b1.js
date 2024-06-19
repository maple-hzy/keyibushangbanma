(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{320:function(a,t,_){"use strict";_.r(t);var s=_(7),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"_1-常见缓存方案-当查询数据时-先查缓存-再查数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-常见缓存方案-当查询数据时-先查缓存-再查数据库"}},[a._v("#")]),a._v(" 1 常见缓存方案：当查询数据时，先查缓存，再查数据库")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/0010004/01.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"_2-缓存穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存穿透"}},[a._v("#")]),a._v(" 2 缓存穿透")]),a._v(" "),t("h4",{attrs:{id:"_2-1-什么是缓存穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-什么是缓存穿透"}},[a._v("#")]),a._v(" 2.1 什么是缓存穿透")]),a._v(" "),t("p",[a._v("正常情况下，我们查询的数据均是存在的。那么请求去查询一条数据库中根本不存在的数据，也就是缓存和数据库都查不到这条数据，每次请求都会落到数据库上。\n这种查询不存在数据的现象我们称为缓存穿透")]),a._v(" "),t("h4",{attrs:{id:"_2-2-缓存穿透带来的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-缓存穿透带来的问题"}},[a._v("#")]),a._v(" 2.2 缓存穿透带来的问题")]),a._v(" "),t("p",[a._v("试想一下，拿一个不存在的id去查询数据，会产生大量的请求到数据上查询，可能会导致你的数据库由于压力过大而宕掉。")]),a._v(" "),t("h4",{attrs:{id:"_2-3-解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-解决方案"}},[a._v("#")]),a._v(" 2.3 解决方案")]),a._v(" "),t("h5",{attrs:{id:"_2-3-1-缓存空值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-缓存空值"}},[a._v("#")]),a._v(" 2.3.1 缓存空值")]),a._v(" "),t("p",[a._v("之所以会发生缓存穿透，是因为缓存中没有存储这些空数据的key，从而导致查询都落到了数据库上，我们可以为这些key设置对应的值为null，然后放到缓存中。当后续这个key再次查询时，直接返回null，可以避免本次查询落到数据库上。\n对于这种key，需要设置过期时间。")]),a._v(" "),t("h5",{attrs:{id:"_2-3-2-bloomfilter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-bloomfilter"}},[a._v("#")]),a._v(" 2.3.2 BloomFilter")]),a._v(" "),t("p",[a._v("BloomFilter类似于一个HBase set用来判断某个元素（key）是否存在与某个集合中。这种方式在大数据场景应用比较多，比如HBase中使用它去判断数据是否在磁盘上。还有爬虫场景判断url是否已经被爬取过。这种方案可以加在第一种方案中，在缓存之前在家一层BloomFilter,在查询的时候先去BloomFilter去查询key是否存在，如果不存在就直接返回，存在再走查缓存，然后再查数据库。\n"),t("img",{attrs:{src:"/images/0010004/02.png",alt:""}})]),a._v(" "),t("h4",{attrs:{id:"_2-4-解决方案选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-解决方案选择"}},[a._v("#")]),a._v(" 2.4 解决方案选择")]),a._v(" "),t("p",[a._v("针对一些恶意攻击，攻击带过来大量key是不存在的，如果采用第一种解决方案将会在缓存大量不存在数据的key。\n此时采用第一种方案就不合适，完全可以采用第二种方案进行过滤那些不存在的key。\n针对对这种key异常多，请求重复率比较低的数据，我们就没有比较就行缓存，使用第二种方案直接过滤掉\n而对于空数据的ket有限的，重复率比较高的，我们则可以采用第一种方式进行缓存。")]),a._v(" "),t("h3",{attrs:{id:"_3-缓存击穿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-缓存击穿"}},[a._v("#")]),a._v(" 3 缓存击穿")]),a._v(" "),t("h4",{attrs:{id:"_3-1-什么是缓存击穿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-什么是缓存击穿"}},[a._v("#")]),a._v(" 3.1 什么是缓存击穿")]),a._v(" "),t("p",[a._v("在高并发系统中，大量的请求同时查询一个key时，此时这个key正好失效了，就会导致大量的请求都落到数据库上，这种现象为缓存击穿")]),a._v(" "),t("h4",{attrs:{id:"_3-2-缓存击穿带来的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-缓存击穿带来的问题"}},[a._v("#")]),a._v(" 3.2 缓存击穿带来的问题")]),a._v(" "),t("p",[a._v("会照常大量的请求落到数据库上，直接导致数据库请求量过大，压力增大。")]),a._v(" "),t("h4",{attrs:{id:"_3-3-解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-解决方案"}},[a._v("#")]),a._v(" 3.3 解决方案")]),a._v(" "),t("p",[a._v("上面的现象是多个线程同时去查询数据库的这条数据，那么我们可以在第一个查询请求上，使用互斥锁来进行请求资源锁定，其他的线程走到这一步拿不到锁就等待，直到第一个线程查询到了数据，并做好了缓存，后面的线程将落到缓存上查询到数据，而不会落到数据库上")]),a._v(" "),t("h3",{attrs:{id:"_4-缓存雪崩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-缓存雪崩"}},[a._v("#")]),a._v(" 4 缓存雪崩")]),a._v(" "),t("h4",{attrs:{id:"_4-1-什么是缓存雪崩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-什么是缓存雪崩"}},[a._v("#")]),a._v(" 4.1 什么是缓存雪崩")]),a._v(" "),t("p",[a._v("当某一时刻发生大规模的缓存失效的情况，比如你的缓存服务宕机了，会有大量的请求进来直接落到数据库上，会导致数据库撑不住压力而挂掉")]),a._v(" "),t("h4",{attrs:{id:"_4-2-解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-解决方案"}},[a._v("#")]),a._v(" 4.2 解决方案")]),a._v(" "),t("h5",{attrs:{id:"_4-2-1事前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1事前"}},[a._v("#")]),a._v(" 4.2.1事前")]),a._v(" "),t("p",[a._v("--使用集群缓存，保证缓存服务的高可用\n这种方案就是在发生缓存雪崩之前对缓存集群实现高可用，如果缓存服务是Redis，可以使用主从\n+哨兵模式，Redis Cluster来避免Redis全盘崩溃的情况。")]),a._v(" "),t("h5",{attrs:{id:"_4-2-2-事中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-事中"}},[a._v("#")]),a._v(" 4.2.2 事中")]),a._v(" "),t("p",[a._v("--ehcache本地缓存  + Hystrix限流&降级，避免mysql被打死\n使用ehcache本地缓存的目的也是考虑Redis Cluster完全不可用的时候，ehcache本地缓存还能够支撑一阵。\n使用Hystrix进行限流&降级，比如一秒5000请求，我们可以设置假设只能有一秒2000个请求能通过这个组件，那么其他剩余的3000请求就会走限流逻辑。\n然后去调用自己开发的降级组件(降级)，比如设置的一些默认值等。以此来保护最后的MySQL不会被大量的请求给打死。")]),a._v(" "),t("h5",{attrs:{id:"_4-2-3-事后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-事后"}},[a._v("#")]),a._v(" 4.2.3 事后")]),a._v(" "),t("p",[a._v("--开启Redis持久化机制，尽快回复缓存集群\n一旦重启，就能从磁盘上自动加载数据恢复内存中的数据。\n防止雪崩方案如下图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/0010004/03.png",alt:""}})]),a._v(" "),t("p",[a._v("针对雪崩的情况：\n如何避免？\n1：在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。\n2：不同的key，设置不同的过期时间，让缓存失效的时间点尽量均匀。")]),a._v(" "),t("p",[a._v("如果同时有100个并发，那么99个线程都要去等待，如果查询线程卡死的话，那就完了。")]),a._v(" "),t("p",[a._v("个人之前的经验是，在添加缓存的时候，增加一个拷贝，比如C1（原始）和C2（拷贝）这个拷贝的过期时间要比原来的要长一些，当C1失效的时候，利用同步还是其它手段让一个线程去查询并更新缓存数据，其它线程直接返回C2的数据，如果数据库死锁，也能有一些时间来处理。")]),a._v(" "),t("h3",{attrs:{id:"_5-解决热点数据集中失效问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-解决热点数据集中失效问题"}},[a._v("#")]),a._v(" 5.解决热点数据集中失效问题")]),a._v(" "),t("p",[a._v("我们在设置缓存的时候，一般会给缓存设置一个失效时间，过了这个月，缓存就失效了。\n对于一些热点的数据来说，当缓存失效以后会存在大量的请求过来，然后打到数据库上，从而可能导致数据库崩溃的情况。")]),a._v(" "),t("h4",{attrs:{id:"_5-1-解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-解决方案"}},[a._v("#")]),a._v(" 5.1 解决方案")]),a._v(" "),t("h5",{attrs:{id:"_5-1-1-设置不同的失效时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1-设置不同的失效时间"}},[a._v("#")]),a._v(" 5.1.1 设置不同的失效时间")]),a._v(" "),t("p",[a._v("为了避免这些热点的数据集中失效，那么我们在设置缓存过去时间的时候，我们让他们失效的时间错开。比如在一个基础的时间上加上或者减去一个范围内的随机值，")]),a._v(" "),t("h5",{attrs:{id:"_5-1-2-互斥锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2-互斥锁"}},[a._v("#")]),a._v(" 5.1.2 互斥锁")]),a._v(" "),t("p",[a._v("结合上面的击穿情况，在第一个请求去查询数据库的时候对他加上一个互斥锁，其余的查询请求都会被阻塞住，直到锁被释放，从而包含数据库。但是也是由于它会阻塞其他的线程，此时系统吞吐量会下降。需要结合实际的业务去考虑释放要这样做")])])}),[],!1,null,null,null);t.default=r.exports}}]);