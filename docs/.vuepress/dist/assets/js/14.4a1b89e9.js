(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{323:function(t,r,a){"use strict";a.r(r);var e=a(7),n=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"_1-myisam与innodb-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-myisam与innodb-的区别"}},[t._v("#")]),t._v(" 1.MyISAM与InnoDB 的区别")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://my.oschina.net/mn1127/blog/498474",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL 存储引擎 MyISAM 与 InnoDB 的区别"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("1.InnoDB支持事务，MyISAM不支持事务\n2.InnoDB时候修改多，MyISAM支持查询多\n3.InnoDB行级锁，MyISAM表级锁\n4.InnoDB清空表是一条一条删数据，MyISAM是删除表建新表\n5.InnoDB支持外键，MyISAM不支持外键\n6.InnoDB不记录表行数，MyISAM记录表行数，count(*)有关\n7.InnoDB需要指定，MyISAM为指定搜索引擎（MySQL5.5之前，默认引擎是“MyISAM”；从MySQL5.5版本开始，默认引擎是“InnoDB”）\n8.对于自增长的字段，InnoDB中必须包含只有该字段的索引，但是在MyISAM表中可以和其他字段一起建立联合索引\n9.InnoDB不支持FULLTEXT类型的索引")]),t._v(" "),r("h3",{attrs:{id:"_2-mysql索引为什么选择b-树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql索引为什么选择b-树"}},[t._v("#")]),t._v(" 2.mysql索引为什么选择B+树")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/tiancai/p/9024351.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么MySQL数据库索引选择使用B+树？"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("(数据库索引采用B+树的主要原因是 B树在提高了磁盘IO性能的同时并没有解决元素遍历的效率低下的问题。正是为了解决这个问题，B+树应运而生。\nB+树只要遍历叶子节点就可以实现整棵树的遍历。而且在数据库中基于范围的查询是非常频繁的，而B树不支持这样的操作（或者说效率太低）)")]),t._v(" "),r("h3",{attrs:{id:"_3-b树与b-树的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-b树与b-树的区别"}},[t._v("#")]),t._v(" 3.B树与B+树的区别")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.jianshu.com/p/d77c1fad8de8",target:"_blank",rel:"noopener noreferrer"}},[t._v("聚簇索引与非聚簇索引的区别"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("B-树和B+树最重要的一个区别就是B+树只有叶节点存放数据，其余节点用来索引，而B-树是每个索引节点都会有Data域。\n这就决定了B+树更适合用来存储外部数据，也就是所谓的磁盘数据。")]),t._v(" "),r("h3",{attrs:{id:"_4-聚簇索引和非聚簇索引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-聚簇索引和非聚簇索引"}},[t._v("#")]),t._v(" 4.聚簇索引和非聚簇索引")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/qlqwjy/p/7770580.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("聚簇索引和非聚簇索引"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_5-联合索引和全文索引-索引命中问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-联合索引和全文索引-索引命中问题"}},[t._v("#")]),t._v(" 5.联合索引和全文索引，索引命中问题")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/hoewang/p/10257190.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mysql索引命中问题"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_6-mysql回表问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-mysql回表问题"}},[t._v("#")]),t._v(" 6.mysql回表问题")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/splendid/p/10945363.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解MySQL回表"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.imooc.com/wenda/detail/495687",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL的回表查询，是什么意思？"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/hnzkljq/p/12620971.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是MYSQL回表查询"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_7-索引下推"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-索引下推"}},[t._v("#")]),t._v(" 7.索引下推")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/Chenjiabing/p/12600926.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mysql性能优化：什么是索引下推？"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_38405253/article/details/113830130",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mysql：好好的索引，为什么要下推？"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_8-order-by和group-by如何使用索引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-order-by和group-by如何使用索引"}},[t._v("#")]),t._v(" 8.order by和group by如何使用索引")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/ssskkk/p/9348661.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL如何使用索引"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_42116596/article/details/113676756",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql order by 多个字段 索引_order by多个字段对索引的影响"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/militala/article/details/6066671",target:"_blank",rel:"noopener noreferrer"}},[t._v("order by 不走索引的思考"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_9-jion的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-jion的区别"}},[t._v("#")]),t._v(" 9.jion的区别")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_41796956/article/details/85044152",target:"_blank",rel:"noopener noreferrer"}},[t._v("一张图告诉你SQL使用inner join，left join 等"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_10-什么时候会触发行锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-什么时候会触发行锁"}},[t._v("#")]),t._v(" 10.什么时候会触发行锁")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/acmer_2333/article/details/103150604",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mysql--行锁，表锁的理解&实践"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_11-间隙锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-间隙锁"}},[t._v("#")]),t._v(" 11.间隙锁")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/48269420",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL的锁机制 - 记录锁、间隙锁、临键锁"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_12-sql优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_12-sql优化"}},[t._v("#")]),t._v(" 12.SQL优化")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.bbsmax.com/A/VGzlxrqwzb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("正确使用索引（sql优化），limit分页优化，执行计划，慢日志查询"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_13-innodb搜索引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_13-innodb搜索引擎"}},[t._v("#")]),t._v(" 13.innoDB搜索引擎")]),t._v(" "),r("p",[t._v("innodb默认的事务隔离级别为可重复读，但innodb分为快照读\n和当前读，通过采用行锁和间隙锁来解决幻读问题")]),t._v(" "),r("h3",{attrs:{id:"_14-脏读-幻读-不可重复读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_14-脏读-幻读-不可重复读"}},[t._v("#")]),t._v(" 14.脏读，幻读，不可重复读")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://aysaml.com/articles/2020/01/04/1578137608006.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("脏读、幻读和不可重复读"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_15-mybatis中-数据库中的字段和实体类中的属性不一致时-你怎么解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_15-mybatis中-数据库中的字段和实体类中的属性不一致时-你怎么解决"}},[t._v("#")]),t._v(" 15.mybatis中,数据库中的字段和实体类中的属性不一致时，你怎么解决？")]),t._v(" "),r("p",[t._v("1、用as转成实体类的字段，resultType返回实体\n2、建一个resultMap")]),t._v(" "),r("h3",{attrs:{id:"_16-mysq执行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_16-mysq执行流程"}},[t._v("#")]),t._v(" 16.mysq执行流程")]),t._v(" "),r("p",[t._v("连接器-查询缓存-分析器-优化器-执行器"),r("br"),t._v("\n执行器里面的步骤：undo log - 更新索引 - 写入redo log - 写入binlog - commit提交事务 - 刷新redo log - 刷新binlog")]),t._v(" "),r("h3",{attrs:{id:"_17-多个事务同时对一行数据进行-select-for-update-会阻塞还是异常"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_17-多个事务同时对一行数据进行-select-for-update-会阻塞还是异常"}},[t._v("#")]),t._v(" 17.多个事务同时对一行数据进行 SELECT FOR UPDATE 会阻塞还是异常")]),t._v(" "),r("p",[t._v("先阻塞，然后抛异常")]),t._v(" "),r("h3",{attrs:{id:"_18-mysql可重复读的实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_18-mysql可重复读的实现"}},[t._v("#")]),t._v(" 18.mysql可重复读的实现")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/chaohangz/p/13048133.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL是如何实现可重复读的?"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_19-mysql幻读的解决方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_19-mysql幻读的解决方法"}},[t._v("#")]),t._v(" 19.mysql幻读的解决方法")]),t._v(" "),r("p",[t._v("在当前读的情况下，使用gap锁(间隙锁)解决\n在快照读的情况下，使用MVCC解决")]),t._v(" "),r("h3",{attrs:{id:"_20-mvcc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_20-mvcc"}},[t._v("#")]),t._v(" 20.MVCC")]),t._v(" "),r("p",[t._v("新增更新DB_TRX_ID，修改和删除更新DB_ROLL_PT，\n查询语句中的版本号应该大于DB_TRX_ID，小于DB_ROLL_PT")]),t._v(" "),r("h3",{attrs:{id:"_21-mysql主从同步实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_21-mysql主从同步实现"}},[t._v("#")]),t._v(" 21.MySQL主从同步实现")]),t._v(" "),r("p",[t._v("1.数据写到主库，主库记录binlog日志\n2.从库连接主库\n3.主库开启传输线程，将binlong日志发送到从库\n4.从库开启两个线程，一个负责收集binglog日志，一个负责执行")]),t._v(" "),r("h3",{attrs:{id:"_22-垂直分表分库和水平分表分库的概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-垂直分表分库和水平分表分库的概念"}},[t._v("#")]),t._v(" 22.垂直分表分库和水平分表分库的概念")]),t._v(" "),r("p",[t._v("垂直：分字段，拆字段变成不同表不同字段\n水平：分数据，将行数据拆到不同表不同字段")]),t._v(" "),r("h3",{attrs:{id:"_23-分布式唯一-id-方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_23-分布式唯一-id-方案"}},[t._v("#")]),t._v(" 23.分布式唯一 ID 方案")]),t._v(" "),r("p",[t._v("1.mysql自增主键\n2.redis生成id\n3.UUID\n4.雪花算法\n5.变种UUID\n6.基于zk生成id")]),t._v(" "),r("h3",{attrs:{id:"_24-explain有哪些字段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_24-explain有哪些字段"}},[t._v("#")]),t._v(" 24.explain有哪些字段")]),t._v(" "),r("p",[t._v("id:选择标识符\nselect_type:表示查询的类型。\ntable:输出结果集的表\npartitions:匹配的分区\ntype:表示表的连接类型\npossible_keys:表示查询时，可能使用的索引\nkey:表示实际使用的索引\nkey_len:索引字段的长度\nref:列与索引的比较\nrows:扫描出的行数(估算的行数)\nfiltered:按表条件过滤的行百分比\nextra:执行情况的描述和说明")]),t._v(" "),r("h3",{attrs:{id:"_25-组合索引-a-b-c"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_25-组合索引-a-b-c"}},[t._v("#")]),t._v(" 25.组合索引(a,b,c)")]),t._v(" "),r("p",[t._v("1.where a = 1 and b = 1 and c = 1\nabc均生效")]),t._v(" "),r("p",[t._v("2.where a = 1 and b > 1 and c = 1\nab生效")]),t._v(" "),r("p",[t._v("3.where c = 1 and a = 1 and b = 1\nabc均生效(查询优化器会帮忙)")]),t._v(" "),r("h3",{attrs:{id:"_26-undolog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_26-undolog"}},[t._v("#")]),t._v(" 26.undolog")]),t._v(" "),r("p",[t._v("undolog日志是为了操作回退，保证数据原子性\n实现的原理在于生成一条相反意思的sql语句，比如inset就存储delete,update还是update")]),t._v(" "),r("h3",{attrs:{id:"_27-redolog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_27-redolog"}},[t._v("#")]),t._v(" 27.redolog")]),t._v(" "),r("p",[t._v("mysql持久性，主节点开启一个线程，像从节点发送redolog日志，从节点开启两个线程\n一个接受redolog日志，一个去执行。")]),t._v(" "),r("h3",{attrs:{id:"_28-mysql-索引的结构和搜索数据的过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_28-mysql-索引的结构和搜索数据的过程"}},[t._v("#")]),t._v(" 28.MySQL 索引的结构和搜索数据的过程？")]),t._v(" "),r("p",[t._v("mysql索引结构为b+树，b+树只在叶子节点上存放数据，其他节点均只存放索引串，索引分为聚簇和非聚簇两种，聚簇索引中叶子节点存放具体数据，非聚簇索引中叶子节点存放数据id，在搜索数据时候，仅需要遍历b+树即可，根据b+树的结构，子节点的值永远不会大于父节点值的值，所以查询使用二分查找，速度非常快，当聚簇生效时，只需要进行遍历该树获取叶子节点上的数据即可，当非聚簇生效时，先遍历该树，获取叶子节点的上的id，在遍历聚簇树，获取具体数据，这也属于二级索引")]),t._v(" "),r("h3",{attrs:{id:"_29-数据库的隔离级别-分别解决什么问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_29-数据库的隔离级别-分别解决什么问题"}},[t._v("#")]),t._v(" 29.数据库的隔离级别？分别解决什么问题？")]),t._v(" "),r("p",[t._v("mysql隔离级别四种，分别是可重复读rr，读已提交rc，读未提交ru，串行化，mysql默认隔离级别为可重复读，数据库事务对应的ACID原则，分别代表原子性，一致性，隔离性和持久性，对应的问题是脏读，幻读，不可重复读三种，脏读是读到未提交数据，不可重复读是读取到的数据不一致，幻读在广义上是指读取到的数据条数不一致，可重复读解决脏读和不可重复读问题，读已提交解决脏读问题，读未提交不解决任何问题，串行化解决以上三种问题")]),t._v(" "),r("h3",{attrs:{id:"_30-acid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_30-acid"}},[t._v("#")]),t._v(" 30.ACID")]),t._v(" "),r("p",[t._v("原子性，一致性，隔离性，持久性\n2.四种隔离级别以及会导致的问题\nhttps://www.cnblogs.com/shan-kylin/p/9543294.html\nhttps://aysaml.com/articles/2020/01/04/1578137608006.html")]),t._v(" "),r("h3",{attrs:{id:"_31-问题-脏读-幻读-不可重复读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_31-问题-脏读-幻读-不可重复读"}},[t._v("#")]),t._v(" 31.问题：脏读，幻读，不可重复读")]),t._v(" "),r("p",[t._v("1、脏读（读取未提交的数据）"),r("br"),t._v("\n脏读又称无效数据的读出，是指在数据库访问中，事务 A 对一个值做修改，事务 B 读取这个值，但是由于某\n种原因事务 A 回滚撤销了对这个值得修改，这就导致事务 B 读取到的值是无效数据。"),r("br"),t._v("\n2、不可重复读（前后数据多次读取，结果集内容不一致）"),r("br"),t._v("\n不可重复读即当事务 A 按照查询条件得到了一个结果集，这时事务 B 对事务 A 查询的结果集数据做了修改操\n作，之后事务 A 为了数据校验继续按照之前的查询条件得到的结果集与前一次查询不同，导致不可重复读取原\n始数据。"),r("br"),t._v("\n3、幻读（前后数据多次读取，结果集数量不一致）"),r("br"),t._v("\n幻读是指当事务 A 按照查询条件得到了一个结果集，这时事务 B 对事务 A 查询的结果集数据做新增操作，之\n后事务 A 继续按照之前的查询条件得到的结果集平白无故多了几条数据，好像出现了幻觉一样。")]),t._v(" "),r("p",[t._v("隔离级别--问题："),r("br"),t._v("\nRead uncommitted：读未提交，说的是一个事务可以读取到另一个事务未提交的数据修改。"),r("br"),t._v("\n读若不显式声明是不加锁的，可以直接读取到另一个事务对数据的操作，没有避免脏读、不可重复读、幻读。"),r("br"),t._v("\nRead committed：读已提交，说的是一个事务只能读取到另一个事务已经提交的数据修改。"),r("br"),t._v("\n很明显，这种隔离级别避免了脏读，但是可能会出现不可重复读、幻读。"),r("br"),t._v("\nRepeatable read：可重复读，保证了同一事务下多次读取相同的数据返回的结果集是一样的。"),r("br"),t._v("\n这种隔离级别解决了脏读和不可重复读问题，但是扔有可能出现幻读。"),r("br"),t._v("\nSerializable:串行化，对同一数据的读写全加锁，即对同一数据的读写全是互斥了，数据可靠行很强，但是并发性能不忍直视。"),r("br"),t._v("\n这种隔离级别虽然解决了上述三个问题，但是牺牲了性能。")])])}),[],!1,null,null,null);r.default=n.exports}}]);