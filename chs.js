/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "You stumble across a strange looking amulet on your 25th birthday. It does not look like\n                                it has any worth on the market given that it's made from cheap-looking copper. However, you\n                                feel a weird urge to keep the amulet, so you slip it into your pocket for safekeeping.": "你在 25 岁生日时偶然发现了一个看起来很奇怪的护身符。 它看起来不像\n 它在市场上没有任何价值，因为它是由看起来很便宜的铜制成的。 但是，您\n 有一种保留护身符的奇怪冲动，因此您将其放入口袋以妥善保管。",
    "Town Ruler": "镇长",
    "Town Ruler unlocked": "城镇统治者解锁",
    "Trained by a demon": "被恶魔训练",
    "Ultimate evil": "终极邪恶",
    "Ultra Speed": "超高速",
    "Under the bad influence": "在不良影响下",
    "Void Armor": "虚空护甲",
    "Void Universe": "虚空宇宙",
    "Void Universe unlocked": "虚空宇宙解锁",
    "VROOOOM": "VROOOOM",
    "Wait, it's made of bubblegum?": "等等，它是用泡泡糖做的？",
    "What Fire Nation?": "什么火之国？",
    "Where do I keep it?": "我在哪里保存它？",
    "Who turned the lights off?": "谁把灯关了？",
    "With the air, like I don't care, baby by the way": "随着空气，就像我不在乎，顺便说一句宝贝",
    "Wooden Hut": "木屋",
    "Worst person ever lived": "有史以来最糟糕的人",
    "You have done the thing!": "你已经做到了！",
    "I swear I don't have a problem": "我发誓我没有问题",
    "I'm a hot air balloon that could go to space": "我是一个可以去太空的热气球",
    "I'm the danger!": "我是危险！",
    "Import PK2": "导入PK2",
    "Improve your learning speed through practising intense concentration activities.": "通过练习集中注意力的活动来提高您的学习速度。",
    "Income /d": "收入/天",
    "It flows through my veins": "它流过我的血管",
    "It goes on its own": "它自己去",
    "It might seem crazy what I am 'bout to say": "我要说的话可能看起来很疯狂",
    "It's calling you!": "它在呼唤你！",
    "It's just a chair from IKEA": "这只是宜家的一把椅子",
    "It's shiny!": "它有光泽！",
    "Join the dark side": "加入黑暗面",
    "Learn to procrastinate less at work and receive more job experience per day.": "学会在工作中减少拖延，每天获得更多的工作经验。",
    "Legal youngster": "合法的年轻人",
    "Lifespan": "寿命",
    "lvl": "等级",
    "Lvl": "等级",
    "Meditation": "冥想",
    "Merging both worlds": "融合两个世界",
    "Miltary Jobs gain": "军队工作收益",
    "Miltary Jobs speed": "军队工作速度",
    "Multiverse Creator": "多元宇宙创造者",
    "Multiverse Creator unlocked": "多元宇宙创造者已解锁",
    "Multiverse Fragment": "多元宇宙碎片",
    "Muscle Memory": "肌肉记忆",
    "My back is starting to hurt": "我的背开始疼",
    "My block, my homies": "我的街区，我的兄弟们",
    "Nation Ruler": "国家统治者",
    "Nation Ruler unlocked": "国家统治者解锁",
    "Naughty boy": "淘气的男孩",
    "Net /d": "净收入/天",
    "Not homeless anymore": "不再无家可归",
    "Observatory": "天文台",
    "Own a Book": "拥有一本书",
    "Own a Butler": "拥有一个管家",
    "Own a Celestial Robe": "拥有一件天界长袍",
    "Own a Multiverse Fragment": "拥有一个多元宇宙碎片",
    "Own a Void Armor": "拥有一件虚空盔甲",
    "Own an Observatory": "拥有一个天文台",
    "Pay to win currency": "付钱赢钱",
    "Personal Squire": "个人侍从",
    "Plow the fields and grow the crops. It's not much but it's honest work.": "耕种田地，种植庄稼。这不是很多，但它是诚实的工作。",
    "Productivity": "工作效率",
    "Properties": "属性",
    "Proud owner of Taj Mahal": "泰姬陵的骄傲拥有者",
    "Ready for an adventure?": "准备好冒险了吗？",
    "Redemption arc": "救赎弧",
    "Repetition makes you stronger": "重复让你更强大",
    "Reset": "重置",
    "Ruby-licious": "红宝石",
    "Shabby logs and dirty hay glued together with horse manure. Much more sturdy than a tent, however, the stench isn't very pleasant.": "破旧的原木和肮脏的干草与马粪粘在一起。然而，比帐篷坚固得多，恶臭不是很令人愉快。",
    "Shop cost": "店铺成本",
    "Shop cost reduction 10%": "店铺成本降低 10%",
    "Skip": "跳过",
    "Sleep on the uncomfortable, filthy streets while almost freezing to death every night. It cannot get any worse than this.": "睡在不舒服、肮脏的街道上，每晚都几乎冻死。不能比这更糟了。",
    "Small Palace": "小宫殿",
    "Small Palace unlocked": "小宫殿解锁",
    "So heavy, I can't stand up": "太重了，站不起来",
    "So...what now?": "所以现在怎么办？",
    "Something pointy is growing on my forehead": "我的额头上长出了一个尖尖的东西",
    "Sorry I can't read": "抱歉我无法阅读",
    "Space bending": "空间弯曲",
    "Speed": "速度",
    "Squire": "侍从",
    "Stars in my eyes": "我眼中的星星",
    "Sticky substance": "粘性物质",
    "Strength": "力量",
    "Strength Skill speed": "力量技能速度",
    "Struggle day and night for a couple of copper coins. It feels like you are at the brink of death each day.": "为几枚铜币日夜奋斗。感觉就像你每天都在死亡的边缘。",
    "Study the tricks of the trade and persuasive skills to lower any type of expense.": "研究交易技巧和说服技巧以降低任何类型的费用。",
    "Sunshine she's here, you can take a break": "阳光她来了，你可以休息一下",
    "Super Speed": "超高速",
    "Swimming in it": "在里面游泳",
    "Tent": "帐篷",
    "Tent unlocked": "帐篷解锁",
    "The Devil himself": "魔鬼本人",
    "The Emperor's new clothes": "皇帝的新衣",
    "The four rivers of Hell": "地狱四河",
    "This operation is irreversible": "此操作不可逆",
    "Times change, or does it?": "时代变了，还是变了？",
    "Age": "年龄",
    "All Jobs & Skills Speed": "所有工作和技能速度",
    "Auto-learn ('S')": "自动学习 ('S')",
    "Auto-promote ('P')": "自动提升 ('P')",
    "Balance": "余额",
    "Battle Tactics": "战斗战术",
    "Beggar": "乞丐",
    "Current Job": "当前工作",
    "Current Skill": "当前技能",
    "Days": "\t\t天数",
    "Expenses /d": "费用/天",
    "Farmer": "农民",
    "FG Progress Knight": "FG骑士进度条",
    "Fisherman": "渔夫",
    "Happiness": "幸福",
    "...but where my furniture at?": "...但是我的家具在哪里？",
    "...but why?": "...但为什么？",
    "...I have people for that": "......我有这样的人",
    "...on the dark side": "...在黑暗的一面",
    "/d": "/d",
    "A maid man": "一个女仆",
    "Artefacts": "文物",
    "Auto-learn": "自动学习",
    "Auto-learn unlocked": "自动学习解锁",
    "Auto-pause": "自动暂停",
    "Auto-pause unlocked": "自动暂停解锁",
    "Auto-promote": "自动推广",
    "Auto-promote unlocked": "自动升级解锁",
    "Ballin'": "巴林'",
    "Because I'm happy": "因为我开心",
    "Being evil pleases me": "作恶使我高兴",
    "Big bucks": "巨款",
    "Book": "书",
    "Butler": "管家",
    "Can't stop, won't stop": "停不下来，停不下来",
    "Celestial Robe": "天界长袍",
    "Clap along if you feel like a room without a roof": "如果您觉得自己像一个没有屋顶的房间，请鼓掌",
    "Clap along if you feel like happiness is the truth": "如果你觉得幸福是真的，就鼓掌",
    "Click": "点击",
    "Click once": "单击一次",
    "Coins": "硬币",
    "Count": "数数",
    "Current": "当前",
    "Deja vu?": "似曾相识？",
    "Destiny in your own hands": "命运掌握在自己手中",
    "Ebay rat": "易趣 老鼠",
    "Embrace evil": "拥抱邪恶",
    "Embrace Evil": "拥抱邪恶",
    "Essence": "本质",
    "Essence hoarder": "精华囤积者",
    "Essence symbiosis": "精华共生",
    "Eternal pain": "永恒的痛苦",
    "Everything must end": "一切都必须结束",
    "Evil": "邪恶",
    "Ew, it's slimy": "额，黏糊糊的",
    "Features": "特征",
    "Galactic fuel": "银河燃料",
    "Galactic Throne": "银河王座",
    "Galactic Throne unlocked": "银河王座解锁",
    "Galactic wallet": "银河钱包",
    "Game time": "游戏时间",
    "Gotta catch them all": "必须抓住他们",
    "Gotta go fast": "必须快点",
    "Grand Palace": "大宫殿",
    "Grand Palace unlocked": "大皇宫解锁",
    "Halfway there": "到了一半",
    "Hard Reset": "硬重置",
    "Hoarder": "囤积者",
    "House": "房子",
    "House unlocked": "房子解锁",
    "Hyper Speed": "超高速",
    "I did it for the sake of doing it": "我是为了做它而做的",
    "I have windows now!": "我现在有窗户！",
    "I hope there is no chocolate inside of it": "我希望里面没有巧克力",
    "Longest": "最长",
    "Rebirth": "重生",
    "Transcension": "超越",
    "A place to write down all your thoughts and discoveries, allowing you to learn a lot more quickly.": "一个写下你所有想法和发现的地方，让你学得更快。",
    "A thin sheet of tattered cloth held up by a couple of feeble, wooden sticks. Horrible living conditions but at least you have a roof over your head.": "几根软弱的木棍支撑着一块破布。 糟糕的生活条件，但至少你有一个屋顶。",
    "All Jobs speed": "所有工作速度",
    "All Skills speed": "所有技能速度",
    "Assists you in completing day to day activities, giving you more time to be productive at work.": "帮助您完成日常活动，让您有更多时间在工作中高效工作。",
    "Bargaining": "讨价还价",
    "Concentration": "专注",
    "Condition your body and strength through harsh training. Stronger individuals are paid more in the military.": "通过严格的训练来调节你的身体和力量。 更强壮的人在军队中的报酬更高。",
    "Create and revise battle strategies, improving experience gained in the military.": "创建和修改战斗策略，提高在军队中获得的经验。",
    "Dumbbells": "杠铃",
    "Heavy tools used in strenuous exercise to toughen up and accumulate strength even faster than before.": "用于剧烈运动的重型工具比以前更快地增强和积累力量。",
    "Homeless": "无家可归",
    "Miner": "矿工",
    "Reel in various fish and sell them for a handful of coins. A relaxing but still a poor paying job.": "卷入各种鱼并以少量硬币出售。 一份轻松但收入仍然很低的工作。",
    "Cottage": "茅屋",
    "Structured with a timber frame and a thatched roof. Provides decent living conditions for a fair price.": "结构为木框架和茅草屋顶。 以合理的价格提供体面的生活条件。",
    "On your 45th birthday, you feel the amulet shiver uncontrollably in your pocket. You take it\n                                out and the constant shivering suddenly stops. More to your bizarre surprise, you notice\n                                a strange etching on the centre of the amulet.": "在您 45 岁生日时，您会感到口袋里的护身符不受控制地颤抖。 你把它拿出来，不断的颤抖突然停止了。 更令您惊讶的是，您注意到护身符中心有一个奇怪的蚀刻。",
    "A fine blade used to slay enemies even quicker in combat and therefore gain more experience.": "用于在战斗中更快地杀死敌人并因此获得更多经验的精美刀片。",
    "Age has caught up to you": "年龄已经赶上了你",
    "Steel Longsword": "钢长剑",
    "Your age has met your lifespan, use the amulet to rebirth before you pass away": "你的年龄已经到了你的寿命极限，在你去世之前使用护身符重生",
    "Footman": "步兵",
    "Carry around your knight's shield and sword along the battlefield. Very meager pay but the work experience is quite valuable.": "在战场上随身携带骑士的盾牌和剑。 工资很低，但工作经验很有价值。",
    "1 + the max level of the job or skill / 10.": "1 + 工作或技能的最高等级 / 10。",
    "2 whole centuries": "2 整个世纪",
    "and reach its final form after": "并在之后达到最终形式",
    "and transform even further after living for\n                                    a": "并在生活后更进一步\n",
    "Blacksmith": "铁匠",
    "bonus": "奖励",
    "By touching the eyeball, you will be reborn and have to restart life again, losing all your levels and coins.\n                                    However, you will gain": "触摸眼球，你将重生，必须重新开始生活，失去所有等级和硬币。\n但是，你会获得",
    "Delve into dangerous caverns and mine valuable ores. The pay is quite meager compared to the risk involved.": "深入危险的洞穴并开采有价值的矿石。 与所涉及的风险相比，报酬相当微薄。",
    "for your jobs and skills equivalent to:": "你的工作和技能相当于：",
    "millennium": "千年",
    "Something tells you that the amulet might evolve after living for": "有人告诉你，护身符可能会在生存后进化",
    "ten millenia": "十万年",
    "This means you will learn everything again much more quickly than you did in your previous life.": "这意味着您将比前世更快地再次学习所有内容。",
    "On your 65th birthday, you once again encounter the strange, unexplained shivering from your\n                                    amulet. But this time, a living eyeball emerges from the centre. Although terribly frightened,\n                                    you realise you do not have many years to live left anyway so you consider touching the eye\n                                    to see what happens.": "在您的 65 岁生日那天，您再次遇到\n 护身符奇怪的、无法解释的颤抖。 但这一次，一个活生生的眼球从中心出现。 虽然非常害怕，\n你意识到你已经没有多少年可以活了，所以你考虑触摸眼睛\n看看会发生什么。",
    "Max": "最大",
    "Fill your mind with peace and tranquility to tap into greater happiness from within.": "让你的心灵充满平静与安宁，从内心获得更大的幸福。",
    "Mana Control": "法力控制",
    "Put down your life to battle with enemy soldiers. A courageous, respectable job but you are still worthless in the grand scheme of things.": "放下你的生命与敌方士兵战斗。 一份勇敢、受人尊敬的工作，但在宏伟的计划中你仍然一文不值。",
    "Strengthen your neurons through habit and repetition, improving strength gains throughout the body.": "通过习惯和重复来增强你的神经元，提高整个身体的力量增益。",
    "Student": "学生",
    "Veteran Footman": "资深步兵",
    "Merchant": "商人",
    "Smelt ores and carefully forge weapons for the military. A respectable and OK paying commoner job.": "为军队冶炼矿石并精心打造武器。 一份受人尊敬且报酬还可以的平民工作。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    "All rights reserved.": "All rights reserved.",
    '© Freddec Games 2022': '© Freddec Games 2022',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Time Warping": "时间扭曲",
    "Touch the eye": "触摸眼球",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^ ([\d\.,]+)$/,
    /^ x([\d\.,]+)$/,
    /^ \>\= ([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Happy (.+)th!$/, '幸福达到 $1！'],
    [/^Have (.+) active miscs$/, '拥有 $1 活跃的杂项'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^Start with age of ([\d\.]+)$/, '从 $1 岁开始'],
    [/^Game speed \+([\d\.]+)\%$/, '游戏速度 \+$1\%'],
    [/^Happiness \+([\d\.]+)\%$/, '幸福 \+$1\%'],
    [/^Evail gain \+([\d\.]+)\%$/, '邪恶增益 \+$1\%'],
    [/^Essence gain \+([\d\.]+)\%$/, '精华增益 \+$1\%'],
    [/^Lifespan \+([\d\.]+)\%$/, '寿命 \+$1\%'],
    [/^Click ([\d\.]+) ([\d\.]+)$/, '邪恶 $1 $2'],
    [/^Evil ([\d\.]+)$/, '邪恶 $1'],
    [/^Transcension ([\d\.]+)$/, '超越 $1'],
    [/^Embrace Evil ([\d\.]+)$/, '拥抱邪恶 $1'],
    [/^Essence ([\d\.]+)$/, '精华 $1'],
    [/^Happiness ([\d\.]+)$/, '幸福 $1'],
    [/^Hoarder ([\d\.]+)$/, '囤积者 $1'],
    [/^Transcension x([\d\.]+)$/, '超越 x$1'],
    [/^Embrace Evil x([\d\.]+)$/, '拥抱邪恶 x$1'],
    [/^([\d\.]+) Gold$/, '$1 黄金'],
    [/^([\d\.]+) Platinum$/, '$1 铂'],
    [/^Happiness \>\= (.+)$/, '幸福 \>\= $1'],
    [/^Click \>\= (.+)$/, '点击 \>\= $1'],
    [/^Essence \>\= (.+)$/, '精华 \>\= $1'],
    [/^Evil \>\= (.+)$/, '邪恶 \>\= $1'],
    [/^Age \>\= (.+)$/, '年龄 \>\= $1'],
    [/^Balance \>\= (.+) Ruby$/, '余额 \>\= $1 红宝石'],
    [/^Balance \>\= (.+) Silver$/, '余额 \>\= $1 银币'],
    [/^Balance \>\= (.+) Ruby$/, '余额 \>\= $1 红宝石'],
    [/^Balance \>\= (.+) Gold$/, '余额 \>\= $1 黄金'],
    [/^Balance \>\= (.+) Platinum$/, '余额 \>\= $1 铂金'],
    [/^(.+) Ruby$/, '$1 红宝石'],
    [/^([\d\.]+) Silver$/, '$1 银币'],
    [/^([\d\.]+) miles per hour!$/, '$1 英里每小时！'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);