// RSS源接口
// name: 信息源名称
// url: RSS URL地址
// category: 分类名称

/**
 * @typedef {object} RssSource
 * @property {string} name - 信息源名称
 * @property {string} url - RSS URL地址
 * @property {string} category - 分类名称
 */

// 默认配置
export const config = {
  sources: [
    {
      name: "Hacker News 近期最佳",
      url: "https://hnrss.org/best",
      category: "科技资讯",
    },
    {
      name: "Hacker News 历史每日前十",
      url: "https://rsshub.rssforever.com/github/issue/headllines/hackernews-daily",
      category: "科技资讯",
    },
    {
      name: "OpenAI News",
      url: "https://openai.com/news/rss.xml",
      category: "科技资讯",
    },
    {
      name: "Github 今日热门",
      url: "https://rsshub.rssforever.com/github/trending/daily/any",
      category: "代码项目",
    },
    {
      name: "Github 近一周热门",
      url: "https://rsshub.rssforever.com/github/trending/weekly/any",
      category: "代码项目",
    },
    {
      name: "Hugging Face 每日论文",
      url: "https://rsshub.rssforever.com/huggingface/daily-papers",
      category: "科研论文",
    },
    {
      name: "Hugging Face 博客",
      url: "https://rsshub.rssforever.com/huggingface/blog",
      category: "技术博客",
    },
    {
      name: "Google 开发者博客",
      url: "https://rsshub.rssforever.com/google/developers/en",
      category: "技术博客",
    },
    {
      name: "Google 研究博客",
      url: "https://rsshub.rssforever.com/google/research",
      category: "技术博客",
    },
    {
      name: "Simon Willison's Weblog",
      url: "https://simonwillison.net/atom/everything/",
      category: "技术博客",
    },
    {
      name: "Microsoft Research",
      url: "https://www.microsoft.com/en-us/research/feed/",
      category: "技术博客",
    },
    // {
    //   name: "Product Hunt 今日热门",
    //   url: "https://rsshub.rssforever.com/producthunt/today",
    //   category: "产品资讯",
    // },
    {
      name: "LINUX DO 今日热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=daily",
      category: "论坛",
    },
    {
      name: "豆瓣小组-读书交流组",
      url: "https://rsshub.app/douban/group/dushujiaoliu/essence",
      category: "论坛",
    },
    {
      name: "LINUX DO 近一月热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=monthly",
      category: "论坛",
    },
    {
      name: "V2EX 今日热门",
      url: "https://rsshub.rssforever.com/v2ex/topics/hot",
      category: "论坛",
    },
    {
      name: "Bangumi 近一月热门",
      url: "https://rsshub.rssforever.com/bangumi.tv/anime/followrank",
      category: "番剧资讯",
    },
    	<outline text="Douban" title="Douban">
		<outline text="豆瓣小组-读书交流组" title="豆瓣小组-读书交流组" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/dushujiaoliu/essence"/>
		<outline text="豆瓣小组-豆瓣读书会" title="豆瓣小组-豆瓣读书会" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/678915/essence"/>
		<outline text="豆瓣小组-『内在力量』研究中心" title="豆瓣小组-『内在力量』研究中心" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/714388/essence"/>
		<outline text="豆瓣小组-请来参观我的房间" title="豆瓣小组-请来参观我的房间" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/702726/essence"/>
		<outline text="豆瓣小组-用利息生活｜投资理财" title="豆瓣小组-用利息生活｜投资理财" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/648435/essence"/>
		<outline text="豆瓣小组-Women in Law 女性律师互助组" title="豆瓣小组-Women in Law 女性律师互助组" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/WomenInLaw/essence"/>
		<outline text="豆瓣小组-~穷人版~丧心病狂攒钱小组" title="豆瓣小组-~穷人版~丧心病狂攒钱小组" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/649358/essence"/>
		<outline text="豆瓣小组-理财失败相互鼓励小组" title="豆瓣小组-理财失败相互鼓励小组" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/721209/essence"/>
		<outline text="豆瓣小组-体制内工作者茶话会" title="豆瓣小组-体制内工作者茶话会" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/679239/essence"/>
		<outline text="豆瓣小组-Women in Finance 金融行业女性" title="豆瓣小组-Women in Finance 金融行业女性" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/705637/essence"/>
		<outline text="豆瓣小组-管理实践与学习" title="豆瓣小组-管理实践与学习" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/542139/essence"/>
		<outline text="豆瓣小组-经典短篇阅读" title="豆瓣小组-经典短篇阅读" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/classicreading/essence"/>
		<outline text="豆瓣小组-每月养成一个好习惯" title="豆瓣小组-每月养成一个好习惯" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/You_arelegend/essence"/>
		<outline text="一周口碑电影榜" title="一周口碑电影榜" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/movie/weekly"/>
		<outline text="正在上映的超过 7.5 分的电影" title="正在上映的超过 7.5 分的电影" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/movie/playing/7.5"/>
		<outline text="豆瓣小组-极简生活" title="豆瓣小组-极简生活" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/minimalists/essence"/>
		<outline text="豆瓣小组-有译著的图书译者" title="豆瓣小组-有译著的图书译者" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/booktranslator/essence"/>
		<outline text="豆瓣小组-Women in the Legal Profession 女性法律人" title="豆瓣小组-Women in the Legal Profession 女性法律人" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/734293/essence"/>
		<outline text="豆瓣小组-榜单图书鉴评中心" title="豆瓣小组-榜单图书鉴评中心" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/728965/essence"/>
		<outline text="豆瓣小组-数字极简主义者" title="豆瓣小组-数字极简主义者" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/662976/essence"/>
		<outline text="豆瓣小组-海龟汤" title="豆瓣小组-海龟汤" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/SituationPuzzle/essence"/>
		<outline text="豆瓣小组-社畜买房共进会" title="豆瓣小组-社畜买房共进会" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/677158/essence"/>
		<outline text="豆瓣小组-博士，退学了嘛？" title="豆瓣小组-博士，退学了嘛？" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/657268/essence"/>
		<outline text="豆瓣小组-副业失败的一天" title="豆瓣小组-副业失败的一天" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/701765/essence"/>
		<outline text="豆瓣小组-鹅们栖息地" title="豆瓣小组-鹅们栖息地" description="" type="rss" version="RSS" htmlUrl="" xmlUrl="https://rsshub.app/douban/group/259104/essence"/>
	</outline>
  ],
  maxItemsPerFeed: 30,
  dataPath: "./data",
}

export const defaultSource = config.sources[0]

/**
 * @param {string} url
 * @returns {RssSource | undefined}
 */
export function findSourceByUrl(url) {
  return config.sources.find((source) => source.url === url)
}

export function getSourcesByCategory() {
  return config.sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {})
}
