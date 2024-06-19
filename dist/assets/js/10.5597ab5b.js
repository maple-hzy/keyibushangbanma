(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{317:function(t,a,e){"use strict";e.r(a);var r=e(7),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-kafka名词描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-kafka名词描述"}},[t._v("#")]),t._v(" 1.kafka名词描述")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("zookepper\n\tkafka 通过 zk 来存储集群的 meta 数据。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("broker\n\tkafka 集群中的单个服务器\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("producer\n\t生产者，发布消息\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v("consumer\n\t消费者，消费消息\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v("consumer group\n\thigh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("level consumer "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v(" 中，每个 consume r都属于一个 consumer group 每条消息只能被\n\tconsumer group 中的一个 consumer 消费，但可以被多个 consumer group 消费。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.")]),t._v("topic\n\t每条发送到 kafka 的消息所属类别\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.")]),t._v("partition\n\ttopic 物理上分组的的概念，每个 topic 包括一个或者多个 partition，每个 partition 是一个有序的队列\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.")]),t._v("replica\n\tpartition 的副本，保证 partition 的高可用\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.l")]),t._v("eader\n\treplica 中的一个角色（leader 是副本），producer 和 consumer 只跟 leader 交互。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.f")]),t._v("ollower\n\treplica 中的一个角色（follower 是副本），从 leader 中 pull 数据\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.")]),t._v("segment\n\tpartition 物理上由多个 segment 组成，每个 segment 存着 message 信息\n")])])]),a("h3",{attrs:{id:"_2-kafka-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-kafka-架构"}},[t._v("#")]),t._v(" 2.kafka 架构")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/e93fa3/asdafwe45asd45asd45qw.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_3-producer-发布消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-producer-发布消息"}},[t._v("#")]),t._v(" 3.producer 发布消息")]),t._v(" "),a("h4",{attrs:{id:"_3-1-写入方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-写入方式"}},[t._v("#")]),t._v(" 3.1 写入方式")]),t._v(" "),a("p",[t._v("producer 采用 push 模式将消息发布到 broker，每条消息都被 append 到 partition 中，属于顺序写入磁盘（顺序写磁盘效率比随机写内存要高，保障 kafka 吞吐率）。")]),t._v(" "),a("h4",{attrs:{id:"_3-2-消息路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-消息路由"}},[t._v("#")]),t._v(" 3.2 消息路由")]),t._v(" "),a("p",[t._v("producer 发送消息到 broker 时，会根据分区算法选择将其存储到哪一个 partition。其路由机制为：")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("指定了 patition ，则直接使用")]),t._v(" "),a("li",[t._v("未指定了 patition ，但指定 key ，通过对 key 的 value 进行 hash 选出一个 partition")]),t._v(" "),a("li",[t._v("patition 和 key 都未指定，使用轮询选出一个 partition")])])]),t._v(" "),a("h4",{attrs:{id:"_3-3-写入流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-写入流程"}},[t._v("#")]),t._v(" 3.3 写入流程")]),t._v(" "),a("p",[t._v("producer 写入消息序列图如下所示：\n"),a("img",{attrs:{src:"/images/0010/01.png",alt:""}})]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v('producer 先从 zookeeper 的 "/brokers/.../state" 节点找到该 partition 的 leader')]),t._v(" "),a("li",[t._v("producer 将消息发送给该 leader")]),t._v(" "),a("li",[t._v("leader 将消息写入本地 log")]),t._v(" "),a("li",[t._v("followers 从 leader pull 消息，写入本地 log 后 leader 发送 ACK")]),t._v(" "),a("li",[t._v("leader 收到所有 ISR 中的 replica 的 ACK 后，增加 HW（high watermark，最后 commit 的 offset） 并向 producer 发送 ACK")])])]),t._v(" "),a("h4",{attrs:{id:"_3-4-消息投递可靠性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-消息投递可靠性"}},[t._v("#")]),t._v(" 3.4 消息投递可靠性")]),t._v(" "),a("p",[t._v("一个消息如何算投递成功，Kafka提供了三种模式：")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("At most once消息可能会丢，绝对不会重复传输")]),t._v(" "),a("li",[t._v("At least once 消息绝对不会丢，但是可能会重复传输")]),t._v(" "),a("li",[t._v("Exactly once每条信息肯定会被传输一次且仅传输一次")])])]),t._v(" "),a("p",[t._v("当 producer 向 broker 发送消息时，一旦这条消息被 commit，由于 replication 的存在，它就不会丢。但是如果 producer 发送数据给 broker 后，遇到网络问题而造成通信中断，那 Producer 就无法判断该条消息是否已经 commit。虽然 Kafka 无法确定网络故障期间发生了什么，但是 producer 可以生成一种类似于主键的东西，发生故障时幂等性的重试多次，这样就做到了 Exactly once，但目前还并未实现。所以目前默认情况下一条消息从 producer 到 broker 是确保了 At least once，可通过设置 producer 异步发送实现At most once。")]),t._v(" "),a("h4",{attrs:{id:"_3-5-acks机制-发送数据的响应码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-acks机制-发送数据的响应码"}},[t._v("#")]),t._v(" 3.5 acks机制(发送数据的响应码)")]),t._v(" "),a("p",[t._v("producers 可以异步的并行的向 kafka 发送消息，但是通常 producer 在发送完消息之后会得到一个 future 响应，返回的是 offset 值或者发送过程中遇到的错误。这其中有个非常重要的参数“acks”,这个参数决定了 producer 要求l eader partition 收到确认的副本个数")]),t._v(" "),a("ul",[a("li",[t._v("如果 acks 设置为0，表示 producer 不会等待 broker 的响应，所以，producer 无法知道消息是否发送成功，这样有可能会导致数据丢失，但同时，acks 值为0会得到最大的系统吞吐量。")]),t._v(" "),a("li",[t._v("若 acks 设置为1，表示 producer 会在 leader partition 收到消息时得到 broker 的一个确认，这样会有更好的可靠性，因为客户端会等待直到 broker 确认收到消息。")]),t._v(" "),a("li",[t._v("如果 acks 设置为-1，producer 会在所有备份的 partition 收到消息时得到 broker 的确认，这个设置可以得到最高的可靠性保证。")])]),t._v(" "),a("p",[t._v("一般情况时 acks 设置为0比较合理，既保证了一定的可靠性，也保证了也相应的系统吞吐量。具体设置根据实际情况来定")]),t._v(" "),a("h4",{attrs:{id:"_3-6-对发送数据的长度限制建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-对发送数据的长度限制建议"}},[t._v("#")]),t._v(" 3.6 对发送数据的长度限制建议")]),t._v(" "),a("p",[t._v("Kafka 消息有一个定长的header和变长的字节数组组成。因为 kafka 消息支持字节数组，也就使得 kafka 可以支持任何用户自定义的序列号格式或者其它已有的格式如 Apache Avro、protobuf等。Kafka 没有限定单个消息的大小，但我们推荐消息大小不要超过1MB,通常一般消息大小都在1~10kB之前。")]),t._v(" "),a("h4",{attrs:{id:"_3-7-kafka支持批量发送消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-kafka支持批量发送消息"}},[t._v("#")]),t._v(" 3.7 kafka支持批量发送消息")]),t._v(" "),a("p",[t._v("发布消息时，kafka client先构造一条消息，将消息加入到消息集set中（kafka支持批量发布，可以往消息集合中添加多条消息，一次行发布），send消息时，producer client需指定消息所属的topic。")]),t._v(" "),a("h3",{attrs:{id:"_4-consumer-消费消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-consumer-消费消息"}},[t._v("#")]),t._v(" 4. consumer 消费消息")]),t._v(" "),a("p",[t._v("Kafka提供了两套consumer api")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("high-level api")]),t._v(" "),a("li",[t._v("sample-api")])])]),t._v(" "),a("h4",{attrs:{id:"_4-1-high-level-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-high-level-api"}},[t._v("#")]),t._v(" 4.1 high-level api")]),t._v(" "),a("p",[t._v("High-level API封装了对集群中一系列 broker 的访问，可以透明的消费一个 topic。它自己维持了已消费消息的状态，即每次消费的都是下一个消息。")]),t._v(" "),a("h5",{attrs:{id:"_4-1-1-支持组形式消费"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-支持组形式消费"}},[t._v("#")]),t._v(" 4.1.1 支持组形式消费")]),t._v(" "),a("p",[t._v("High-level API 还支持以组的形式消费 topic。")]),t._v(" "),a("ol",[a("li",[t._v("若 consumers 有同一个组名，那么 kafka 就相当于一个队列消息服务，而各个 consumer 均衡的消费相应partition中的数据。")]),t._v(" "),a("li",[t._v("若 consumers 有不同的组名，那么此时 kafka 就相当与一个广播服务，会把 topic 中的所有消息广播到每个consumer。")])]),t._v(" "),a("h5",{attrs:{id:"_4-1-2-offset-维护过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-offset-维护过程"}},[t._v("#")]),t._v(" 4.1.2 offset 维护过程")]),t._v(" "),a("p",[t._v("High level api是 consumer 读的 partition 的 offset 是存在zookeeper上。High level api 会启动另外一个线程去每隔一段时间，offset 自动同步到zookeeper上。换句话说，如果使用了High level api， 每个 message 只能被读一次，一旦读了这条 message 之后，无论我 consumer 的处理是否ok。High level api的另外一个线程会自动的把 offset + 1同步到 zookeeper 上。如果 consumer 读取数据出了问题，offset 也会在 zookeeper 上同步。因此，如果 consumer 处理失败了，会继续执行下一条。这往往是不对的行为。因此，Best Practice是一旦 consumer 处理失败，直接让整个 conusmer group 抛 Exception 终止，但是最后读的这一条数据是丢失了，因为在 zookeeper 里面的 offset 已经 +1 了。等再次启动conusmer group的时候，已经从下一条开始读取处理了。")]),t._v(" "),a("h4",{attrs:{id:"_4-2-sample-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-sample-api"}},[t._v("#")]),t._v(" 4.2 sample-api")]),t._v(" "),a("p",[t._v("Sample-api 是一个底层的 API，它维持了一个和单一 broker 的连接，并且这个 API 是完全无状态的，每次请求都需要指定 offset 值，因此，这套 API 也是最灵活的。")]),t._v(" "),a("h5",{attrs:{id:"_4-2-1-注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-注意事项"}},[t._v("#")]),t._v(" 4.2.1 注意事项")]),t._v(" "),a("p",[t._v("使用此 API 时，partition、offset、broker、leader 等对你不再透明，需要自己去管理。")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("必须在应用程序中跟踪 offset，从而确定下一条应该消费哪条消息")]),t._v(" "),a("li",[t._v("应用程序需要通过程序获知每个 partition 的 leader 是谁")]),t._v(" "),a("li",[t._v("需要处理 leader 的变更")])])]),t._v(" "),a("h5",{attrs:{id:"_4-2-2-offset-维护过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-offset-维护过程"}},[t._v("#")]),t._v(" 4.2.2 offset 维护过程")]),t._v(" "),a("p",[t._v("在 kafka 中，当前读到哪条消息的 offset 值是由 consumer 来维护的，因此，consumer 可以自己决定如何读取 kafka 中的数据。比如，consume r可以通过重设 offset 值来重新消费已消费过的数据。不管有没有被消费，kafka 会保存数据一段时间，这个时间周期是可配置的，只有到了过期时间，kafka才会删除这些数据。（这一点与 AMQ 不一样，AMQ 的 message 一般来说都是持久化到 mysql 中的，消费完的 message 会被 delete 掉）")]),t._v(" "),a("h3",{attrs:{id:"_5-partition-存储分布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-partition-存储分布"}},[t._v("#")]),t._v(" 5. partition 存储分布")]),t._v(" "),a("h4",{attrs:{id:"环境假设模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境假设模拟"}},[t._v("#")]),t._v(" 环境假设模拟")]),t._v(" "),a("p",[t._v("假设实验环境中 kafka 集群只有一个 broker，xxx/message-folder 为数据文件存储根目录，在 kafka broker 中 server.properties 文件配置(参数 log.dirs=xxx/message-folder)，例如创建 2 个 topic 名称分别为 report_push、launch_info, partitions 数量都为 partitions=4")]),t._v(" "),a("p",[t._v("存储路径和目录规则为：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("folder\n\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("report_push"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("report_push"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("report_push"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("report_push"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("launch_info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("launch_info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("launch_info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("launch_info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),a("h4",{attrs:{id:"_5-1-topic在partition的分布情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-topic在partition的分布情况"}},[t._v("#")]),t._v(" 5.1 topic在partition的分布情况")]),t._v(" "),a("p",[t._v("同一个 topic 下有多个不同 partition ，每个 partition 为一个目录， partiton 命名规则为 topic名称+有序序号，第一个 partiton 序号从0开始，序号最大值为 partitions 数量减1。")]),t._v(" "),a("p",[t._v("topic 是以 partition 的形式存放的，每一个 topic 都可以设置它的 partition 数量， partition 的数量决定了组成 topic 的 message 的数量。producer 在生产数据时，会按照一定规则（这个规则是可以自定义的）把消息发布到 topic 的各个 partition 中。副本都是以 partition 为单位的，不过只有一个 partition 的副本会被选举成 leader 作为读写用。")]),t._v(" "),a("h4",{attrs:{id:"_5-1-partition结构-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-partition结构-queue"}},[t._v("#")]),t._v(" 5.1 partition结构（QUEUE）")]),t._v(" "),a("p",[t._v("partition是一个Queue的结构，每个partition中的消息都是有序的，生产的消息被不断追加到partition上，其中的每一个消息都被赋予了一个唯一的offset值。")]),t._v(" "),a("h4",{attrs:{id:"_5-1-使用partition存储数据的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-使用partition存储数据的好处"}},[t._v("#")]),t._v(" 5.1 使用partition存储数据的好处")]),t._v(" "),a("p",[t._v("把消息日志以partition的形式存放有多重考虑")]),t._v(" "),a("blockquote",[a("p",[t._v("1.方便在集群中扩展，每个partition可以通过调整以适应它所在的机器，而一个topic又可以有多个partition组成，因此整个集群就可以适应任意大小的数据了\n2. 提高并发，因为可以以Partition为单位读写了")])]),t._v(" "),a("h4",{attrs:{id:"_5-2-数据可以设置过期时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-数据可以设置过期时间"}},[t._v("#")]),t._v(" 5.2 数据可以设置过期时间")]),t._v(" "),a("p",[t._v("Kafka集群会保存所有的消息，不管消息有没有被消费；我们可以设定消息的过期时间，只有过期的数据才会被自动清除以释放磁盘空间。比如我们设置消息过期时间为2天，那么这2天内的所有消息都会被保存到集群中，数据只有超过了两天才会被清除。")]),t._v(" "),a("h4",{attrs:{id:"_5-3-数据持久化-replica的设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-数据持久化-replica的设置"}},[t._v("#")]),t._v(" 5.3 数据持久化（replica的设置）")]),t._v(" "),a("p",[t._v("kafka中的数据是持久化的并且能够容错的。Kafka允许用户为每个topic设置副本数量，副本数量决定了有几个broker来存放写入的数据。如果你的副本数量设置为3，那么一份数据就会被存放在3台不同的机器上，那么就允许有2个机器失败。一般推荐副本数量至少为2，这样就可以保证增减、重启机器时不会影响到数据消费。如果对数据持久化有更高的要求，可以把副本数量设置为3或者更多。")]),t._v(" "),a("h4",{attrs:{id:"_5-4-partition的设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-partition的设置"}},[t._v("#")]),t._v(" 5.4 partition的设置")]),t._v(" "),a("p",[t._v("关于如何设置 partition 值需要考虑的因素。一个 partition 只能被一个消费者消费（一个消费者可以同时消费多个 partition ），因此，如果设置的 partition 的数量小于 consumer 的数量，就会有消费者消费不到数据。所以，推荐 partition 的数量一定要大于同时运行的 consumer 的数量。另外一方面，建议 partition 的数量大于集群 broker 的数量，这样 leader partition 就可以均匀的分布在各个 broker 中，最终使得集群负载均衡。在 Cloudera,每个 topic 都有上百个 partition。需要注意的是，kafka 需要为每个 partition 分配一些内存来缓存消息数据，如果 partition 数量越大，就要为 kafka 分配更大的 heap space。")]),t._v(" "),a("h3",{attrs:{id:"_6-partition-文件存储方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-partition-文件存储方式"}},[t._v("#")]),t._v(" 6. partition 文件存储方式")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("每个 partion(目录) 相当于一个巨型文件被平均分配到多个大小相等 segment(段)数据文件中。但是每一个段segment file消息数量不一定相等，这种特性方便 old segment file 快速被删除")]),t._v(" "),a("li",[t._v("每个 partition只需要支持顺序读写就行，segment文件生命周期由服务端配置参数决定")])])]),t._v(" "),a("p",[t._v("这样子做的好处就是能够快速删除无用文件，有效提高磁盘利用率\n"),a("img",{attrs:{src:"/images/0010/02.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_6-1-partition-中-segment-文件存储结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-partition-中-segment-文件存储结构"}},[t._v("#")]),t._v(" 6.1 partition 中 segment 文件存储结构")]),t._v(" "),a("p",[t._v("producer 发 message 到某个 topic， message 会被均匀分布到多个 partition 上（随机或根据用户指定的回调函数进行分布），kafka broker 收到 message 往对应 partition 的最后一个segment上添加该消息，当某个 segment 上的消息条数达到配置值或消息发布时间超过阀值时，segment 上的消息会被 flush 到磁盘，只有 flush 到磁盘上的消息 consumer 才能消费，segment 达到一定的大小后将不会再往该 segment 写数据，broker 会创建新的 segment")]),t._v(" "),a("p",[t._v("每个 part 在内存中对应一个 index，记录每个 segment 中的第一条消息偏移")]),t._v(" "),a("ul",[a("li",[t._v("segment file 组成：由两部分组成，分别是 index file和 data file，此2个文件一一对应，成对出现，后缀“.index”和“.log”分别表示 segment 索引文件，数据文件。")]),t._v(" "),a("li",[t._v("segment 文件命名规则： partition 全局的第一个 segment 从 0 开始，后续每个 segment 文件名为上一个全局 partition 的最大 offset（偏移message数）。数值最大为64位 long 大小，19位数字字符长度，没有数字用0填充。")])]),t._v(" "),a("p",[t._v("每个 segment 中存储很多条信息，消息 id 由其逻辑位置决定，即从消息 id 可直接定位到消息的存储位置，避免 id 到位置的额外映射。")]),t._v(" "),a("p",[t._v("下面文件列表是笔者在 kafka broker上做的一个实验，创建一个 topicXXX 包括1 partioion，设置每个 segment 大小为 500MB，并启动 producer 向 kafka broker 写入大量数据，如下图所示 segment 文件列表形象说明上诉两个原则：\n"),a("img",{attrs:{src:"/images/0010/03.png",alt:""}})]),t._v(" "),a("p",[t._v("上图是一对 segment file文件模型，segment 中 index <> data file 对应关系物理结构如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/0010/04.png",alt:""}})]),t._v(" "),a("p",[t._v("上图中索引文件存储大量元数据，数据文件存储大量消息，索引文件中元数据指向对应数据文件中 message 的物理偏移地址。其中以索引文件中元数据 3，497 为例，依次在数据文件中表示第 3 个 message（在全局 partition 表示第 368772 个 message），以及该消息的物理偏移地址为 497。")]),t._v(" "),a("h4",{attrs:{id:"_6-2-segment-文件中message的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-segment-文件中message的结构"}},[t._v("#")]),t._v(" 6.2 segment 文件中message的结构")]),t._v(" "),a("p",[t._v("segment data file 由 message 组成，message 的物理结构为：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/0010/05.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("关键字")]),t._v(" "),a("th",[t._v("解释说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("8 byte offset")]),t._v(" "),a("td",[t._v("在 parition(分区) 内的每条消息都有一个有序的 id 号，这个 id 号被称为偏移(offset),它可以唯一确定每条消息在 parition(分区) 内的位置。即 offset 表示 partiion 的第多少message")])]),t._v(" "),a("tr",[a("td",[t._v("4 byte message size")]),t._v(" "),a("td",[t._v("message 大小")])]),t._v(" "),a("tr",[a("td",[t._v("4 byte CRC32")]),t._v(" "),a("td",[t._v("用 crc32 校验 message")])]),t._v(" "),a("tr",[a("td",[t._v('1 byte “magic"')]),t._v(" "),a("td",[t._v("表示本次发布 kafka 服务程序协议版本号")])]),t._v(" "),a("tr",[a("td",[t._v('1 byte “attributes"')]),t._v(" "),a("td",[t._v("表示为独立版本、或标识压缩类型、或编码类型。")])]),t._v(" "),a("tr",[a("td",[t._v("4 byte key length")]),t._v(" "),a("td",[t._v("表示key的长度,当 key为-1 时，K byte key字段不填")])]),t._v(" "),a("tr",[a("td",[t._v("K byte key")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("value bytes payload")]),t._v(" "),a("td",[t._v("表示实际消息数据。")])])])]),t._v(" "),a("h4",{attrs:{id:"_6-3-在-partition-中如何通过-offset-查找对应-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-在-partition-中如何通过-offset-查找对应-message"}},[t._v("#")]),t._v(" 6.3 在 partition 中如何通过 offset 查找对应 message")]),t._v(" "),a("p",[t._v("例如读取 offset = 368776 的 message，需要通过以下两步：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("根据offset查找 segment file\n上述图片为例，其中 00000000000000000000.index 表示最开始的文件，起始偏移量 (offset) 为0.第二个文件 00000000000000368769.index 的消息量起始偏移量为 368770 = 368769 + 1,同样，第三个文件  00000000000000737337.index 的起始偏移量为737338=737337 + 1，其他后续文件依次类推，以起始偏移量命名并排序这些文件，只要根据 offset 二分查找文件列表，就可以快速定位到具体文件。")]),t._v(" "),a("p",[t._v("当 offset=368776 时定位到 00000000000000368769.index|log")])]),t._v(" "),a("li",[a("p",[t._v("根据segment file 查找 message\n当 offset=368776 时，依次定位到 00000000000000368769.index 的元数据物理位置和 00000000000000368769.log 的物理偏移地址，然后再通过 00000000000000368769.log 顺序查找直到  offset=368776 为止。")])])]),t._v(" "),a("h5",{attrs:{id:"_6-3-1-稀疏索引存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-1-稀疏索引存储"}},[t._v("#")]),t._v(" 6.3.1 稀疏索引存储")]),t._v(" "),a("p",[t._v("segment index file 采用稀疏索引存储方式，它减少索引文件大小，通过 mmap 可以直接内存操作，稀疏索引为数据文件的每个对应 message 设置一个元数据指针，它比稠密索引节省了更多的存储空间，但是查询起来需要消耗更多的时间。")]),t._v(" "),a("h3",{attrs:{id:"_7-partition-replication设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-partition-replication设计"}},[t._v("#")]),t._v(" 7. partition replication设计")]),t._v(" "),a("p",[t._v("kafka高效文件存储设计特点")]),t._v(" "),a("ul",[a("li",[t._v("kafka 把 topic 中一个 partition 大文件分成多个小文件段，通过多个小文件段，就容易定期清理或删除已经消费完的文件，减少磁盘占用，且由于是直接删除的文件，不会影响kafka的性能")]),t._v(" "),a("li",[t._v("通过索引信息可以快速定位 message 和确定 response 的最大值")]),t._v(" "),a("li",[t._v("通过 index 元数据全部映射到 memory ，可以避免segment file的 IO 磁盘操作")]),t._v(" "),a("li",[t._v("通过索引文件稀疏存储，可以大幅降低 index 文件元数据(meta data)占用空间大小")])]),t._v(" "),a("h4",{attrs:{id:"_7-1-备份机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-备份机制"}},[t._v("#")]),t._v(" 7.1 备份机制")]),t._v(" "),a("p",[t._v("备份机制是 kafka0.8 版本的新特性，备份机制的出现大大提高了 kafka 集群的可靠性、稳定性。有了备份机制后，kafka 允许集群中的节点挂掉后而不影响整个集群工作。一个备份数量为 n 的集群允许 n-1 个节点失败。在所有备份节点中，有一个节点作为 lead 节点，这个节点保存了其它备份节点列表，并维持各个备份间的状体同步")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/0010/06.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_7-2-kafka集群partition-replication默认自动分配分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-kafka集群partition-replication默认自动分配分析"}},[t._v("#")]),t._v(" 7.2 kafka集群partition replication默认自动分配分析")]),t._v(" "),a("p",[t._v("(1)\t下面以一个Kafka集群中4个Broker举例，创建1个topic包含4个Partition，2 Replication；数据Producer流动如图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/0010/07.png",alt:""}})]),t._v(" "),a("p",[t._v("(2)\t当集群中新增2节点，Partition增加到6个时分布情况如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/0010/08.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_7-3-副本分配逻辑规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-副本分配逻辑规则"}},[t._v("#")]),t._v(" 7.3 副本分配逻辑规则")]),t._v(" "),a("ul",[a("li",[t._v("在 kafka 集群中，每个broker都有均等分配 partition 的 leader 机会")]),t._v(" "),a("li",[t._v("上述图 broker partition 中，箭头指向为副本，以 partition-0 为例：broker1 中 partition-0 为 leader， broker2 中 partition-0 为副本")]),t._v(" "),a("li",[t._v("上述图中每个 broker（按照 brokerId 有序）依次分配主 partition ,下一个 broker 为副本，如此循环迭代分配，多副本都遵循此规则。")])]),t._v(" "),a("h4",{attrs:{id:"_7-4-副本分配算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-副本分配算法"}},[t._v("#")]),t._v(" 7.4 副本分配算法")]),t._v(" "),a("ul",[a("li",[t._v("将所有 N broker 和待分配的 i 个 partition 排序")]),t._v(" "),a("li",[t._v("将第 i 个 partition 分配到第 (i mod n) 个broker上")]),t._v(" "),a("li",[t._v("将第 i 个 partition 的第j个副本分配到第 ((i + j) mod n)个broker上")])]),t._v(" "),a("h3",{attrs:{id:"_8-topic的创建与删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-topic的创建与删除"}},[t._v("#")]),t._v(" 8. topic的创建与删除")]),t._v(" "),a("h4",{attrs:{id:"_8-1-创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-创建"}},[t._v("#")]),t._v(" 8.1 创建")]),t._v(" "),a("ol",[a("li",[t._v("controller 在 ZooKeeper 的 /brokers/topics 节点上注册 watcher，当 topic 被创建，则 controller 会通过 watch 得到该 topic 的 partition/replica 分配。")]),t._v(" "),a("li",[t._v("controller从 /brokers/ids 读取当前所有可用的 broker 列表，对于 set_p 中的每一个 partition：\n2.1 从分配给该 partition 的所有 replica（称为AR）中任选一个可用的 broker 作为新的 leader，并将AR设置为新的 ISR。\n2.2 将新的 leader 和 ISR 写入 /brokers/topics/[topic]/partitions/[partition]/state。")]),t._v(" "),a("li",[t._v("controller 通过 RPC 向相关的 broker 发送 LeaderAndISRRequest。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/0010/08.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_8-2-删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-删除"}},[t._v("#")]),t._v(" 8.2 删除")]),t._v(" "),a("ol",[a("li",[t._v("controller 在 zooKeeper 的 /brokers/topics 节点上注册 watcher，当 topic 被删除，则 controller 会通过 watch 得到该 topic 的 partition/replica 分配。")]),t._v(" "),a("li",[t._v("若 delete.topic.enable=false，结束；否则 controller 注册在 /admin/delete_topics 上的 watch 被 fire，controller 通过回调向对应的 broker 发送 StopReplicaRequest。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/0010/09.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_9-关于consumer-group-消费者组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-关于consumer-group-消费者组"}},[t._v("#")]),t._v(" 9. 关于consumer group（消费者组）")]),t._v(" "),a("ul",[a("li",[t._v("允许 consumer group(包含多个 consumer )对一个 topic 进行消费，不同的 consumer group 之间独立消费")]),t._v(" "),a("li",[t._v("为了减小一个 consumer group 中不同 consumer 之间的分布式协调开销，指定 partition 为最小的并行消费单位，即一个 group 内的 consumer 只能消费不同的 partition")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/0010/10.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_9-1-consumer-与-partition-的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-consumer-与-partition-的关系"}},[t._v("#")]),t._v(" 9.1 consumer 与 partition 的关系")]),t._v(" "),a("ul",[a("li",[t._v("如果 consumer 比 partition 多，是浪费，因为 kafka 的设计是在一个 partition 上是不允许并发的，所以 consumer 数不要大于 partition 数")]),t._v(" "),a("li",[t._v("如果 consumer 比 partition 少，一个 consumer 会对应于多个 partitions，这里主要合理分配consumer 数和 partition 数，否则会导致 partition 里面的数据被取的不均匀")]),t._v(" "),a("li",[t._v("如果 consumer 从多个 partition 读到数据，不保证数据间的顺序性，kafka 只保证在一个 partition 上数据是有序的，但多个 partition，根据你读的顺序会有不同")]),t._v(" "),a("li",[t._v("增减 consumer，broker，partition 会导致 rebalance(平衡)，所以 rebalance 后 consumer 对应的 partition 会发生变化")]),t._v(" "),a("li",[t._v("High-level 接口中获取不到数据的时候是会 block 的")])]),t._v(" "),a("p",[t._v("负载低的情况下可以每个线程消费多个 partition。但负载高的情况下，consumer 线程数最好和 partition 数量保持一致。如果还是消费不过来，应该再开 consumer 进程，进程内线程数同样和分区树一致")]),t._v(" "),a("p",[t._v("消费消息时，kafka client 需指定 topic 以及 partition number(每个 partition 对应一个逻辑日志流，如 topic 代表某个产品线，partition 代表产品线的日志按天切分的结果)，consumer client 订阅后，就可迭代读取消息，如果没有消息，consumer client 会阻塞直到有新消息发布。consumer 可以累积确认接收到的消息，当其确认了某个 offset 的消息，意味着之前的消息也都成功接收到了，此时 broker 会更新 zk 上的 offset registry。")]),t._v(" "),a("h3",{attrs:{id:"_10-kafka高效性相关设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-kafka高效性相关设计"}},[t._v("#")]),t._v(" 10. kafka高效性相关设计")]),t._v(" "),a("h4",{attrs:{id:"_10-1-消息持久性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-消息持久性"}},[t._v("#")]),t._v(" 10.1 消息持久性")]),t._v(" "),a("ul",[a("li",[t._v("kafka 高度依赖文件系统来存储和缓存消息( AMQ 的 message 是持久化到 mysql 数据库中的)，因为一般的人认为磁盘是缓慢的，这到导致入门对持久化结构具有竞争性持怀疑态度。其实，磁盘的快和慢，这确定我们如何使用磁盘。因为磁盘线性写的速度远远大于随机写。线性读写在大多数应用场景下是可以预测的。")])]),t._v(" "),a("h4",{attrs:{id:"_10-2-常树时间性能保证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-常树时间性能保证"}},[t._v("#")]),t._v(" 10.2 常树时间性能保证")]),t._v(" "),a("ul",[a("li",[t._v("每个 topic 的 partition 的是一个大文件，里面有无数个小文件 segment，但 partition 是一个队列，队列中的元素是 message，消费的时候先从第0个 segment 开始消费，新来 message 存在最后一个消息队列中。对于 segment 也是一个队列，有对应的 offset 标识是哪个 message。消费的时候先从这个 segment 的第一个 message 开始消费，新来的 message 会存储在 segment 的后面。")])]),t._v(" "),a("p",[t._v("消息系统的持久化队列可以构建在对一个文件的读和追加上，就像一般情况下的日志解决方案。它有一个优点，所有的操作都是常树时间，并且读写之间不会相互阻塞。这种设计具有极大的性能优势：最终系统性能和数据大小完全无关，服务器可以充分利用廉价的硬盘来提供高效的消息服务。")]),t._v(" "),a("p",[t._v("事实上还有一点，磁盘空间的无限增大而不影响性能这点，意味着我们可以提供一般消息系统无法提供的特效。比如说，消息被消费后不是立马删除，我们可以将这些消息保留一段相对比较长的时间。")]),t._v(" "),a("h4",{attrs:{id:"_10-3-高效数据传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-高效数据传输"}},[t._v("#")]),t._v(" 10.3 高效数据传输")]),t._v(" "),a("ul",[a("li",[t._v("发布者每次可发布多条消息（将消息加到一个消息集合中发布），consumer 每次迭代消费一条消息。")]),t._v(" "),a("li",[t._v("不创建单独的 cache，使用系统的 page cache。发布者顺序发布，订阅者通常比发布者滞后一点点，直接使用 Linux 的 page cache 效果也比较后，同时减少了 cache 管理及垃圾收集的开销。")]),t._v(" "),a("li",[t._v("使用 sendfile 优化网络传输，减少一次内存拷贝。")])]),t._v(" "),a("h3",{attrs:{id:"_11-kafka-与-zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-kafka-与-zookeeper"}},[t._v("#")]),t._v(" 11.Kafka 与 Zookeeper")]),t._v(" "),a("h4",{attrs:{id:"_11-1-zookeeper-协调控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-zookeeper-协调控制"}},[t._v("#")]),t._v(" 11.1 Zookeeper 协调控制")]),t._v(" "),a("ul",[a("li",[t._v("管理broker与consumer的动态加入与离开。(producer不需要管理，随便一台计算机都可以作为producer 向 kakfa broker发消息)")]),t._v(" "),a("li",[t._v("触发负载均衡，当 broker 或 consumer 加入或离开时会触发负载均衡算法，使得一个 consumer group 内的多个 consumer 的消费负载平衡。（因为一个 comsumer 消费一个或多个 partition，一个 partition 只能被一个 consumer 消费）")]),t._v(" "),a("li",[t._v("维护消费关系及每个 partition 的消费信息。")])]),t._v(" "),a("h4",{attrs:{id:"_11-2-zookeeper-上的细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-zookeeper-上的细节"}},[t._v("#")]),t._v(" 11.2 Zookeeper 上的细节")]),t._v(" "),a("ul",[a("li",[t._v("每个 broker 启动后会在 zookeeper 上注册一个临时的 broker registry，包含 broker 的ip地址和端口号，所存储的 topics 和 partitions 信息。")]),t._v(" "),a("li",[t._v("每个 consumer 启动后会在 zookeeper 上注册一个临时的 consumer registry：包含 consumer 所属的 consumer group 以及订阅的 topics。")]),t._v(" "),a("li",[t._v("每个 consumer group 关联一个临时的 owner registry 和一个持久的 offset registry。对于被订阅的每个 partition 包含一个 owner registry，内容为订阅这个 partition 的 consumer id；同时包含一个 offset registry，内容为上一次订阅的offset。")])]),t._v(" "),a("h3",{attrs:{id:"_12-参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-参考文章"}},[t._v("#")]),t._v(" 12. 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://kafka.apache.org/documentation",title:"Apache kafka官网",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache kafka官网"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/cyfonly/p/5954614.html",title:"kafka学习笔记：知识点整理",target:"_blank",rel:"noopener noreferrer"}},[t._v("kafka学习笔记：知识点整理"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/cxxjohnson/p/8921661.html",title:"Kafka史上最详细原理总结",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kafka史上最详细原理总结"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_13、推荐文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13、推荐文章"}},[t._v("#")]),t._v(" 13、推荐文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cwiki.apache.org/confluence/display/KAFKA/Kafka+Client-side+Assignment+Proposal",title:"Kafka客户端分配建议",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kafka客户端分配建议"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/yuanlong122716/article/details/105160545",title:"SpringBoot集成kafka全面实战",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringBoot集成kafka全面实战"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/jonban/p/spring-kafka.html",title:"Spring boot 集成Kafka",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring boot 集成Kafka"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);