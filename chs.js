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

    //#region 数字格式
    ' k': ' k',
    ' M': ' M',
    ' B': ' B',
    ' T': ' T',
    //#endregion
    //#region 主界面
    '< 1s': '<1秒',
    'Loading...': '载入中……',
    'Lvl': '等级',
    '/d': '/日',
    'Skip': '跳过',
    'Count': '计数',
    'Longest': '最久周目',
    'Current': '当前周目',
    'Age has caught up to you': '您寿数已尽',
    'Your age has met your lifespan, use the amulet to rebirth before you pass away': '您寿数已尽，在停止呼吸前，使用护身符来重生吧',
    'Age': '年龄',
    'Days': '日',
    'Lifespan': '寿元',
    'Balance': '余额',
    'Net /d': '每日净收入',
    'Income /d': '每日收入',
    'Expenses /d': '每日花费',
    'Happiness': '幸福感',
    'All Jobs & Skills Speed': '所有工作和技能的速度',
    'Evil': '邪恶',
    'Dark Magic Jobs Speed': '黑暗魔法工作速度',
    'Essence': '精华',
    'Almightness Jobs Speed': '全能工作速度',
    'Time Warping': '扭曲时间',
    'Age speed (\'W\'': '年龄流逝速度(快捷键W',
    'Current Job': '当前工作',
    'Auto-promote (\'P\'': '自动晋升(快捷键P',
    'lvl': '等级',
    'Current Skill': '当前技能',
    'Auto-learn (\'S\'': '自动学习(快捷键S',
    'Void Shift': '虚空变换',
    'Auto-pause (\' \'': '自动暂停(空格',
    ' Age': '年',
    ' Days': '日',
    'Max': '最大值',
    'Speed': '速度',
    'Beggar': '乞丐',
    'Farmer': '农民',
    'Fisherman': '渔夫',
    'Miner': '矿工',
    'Blacksmith': '铁匠',
    'Merchant': '商人',
    'Squire': '扈从',
    'Footman': '步兵',
    'Veteran Footman': '资深步兵',
    'Centenary': '百夫长',
    'Knight': '骑士',
    'Veteran Knight': '资深骑士',
    'Holy Knight': '圣骑士',
    'Lieutenant General': '中将',
    'Student': '学生',
    'Apprentice Mage': '魔法学徒',
    'Adept Mage': '法师达人',
    'Master Wizard': '大法师',
    'Archmage': '法宗',
    'Chronomancer': '时光法师',
    'Chairman': '主席',
    'Imperator': '法皇',
    'Corrupted': '腐化',
    'Void Slave': '虚空奴隶',
    'Void Fiend': '虚空邪魔',
    'Abyss Anomaly': '深渊畸体',
    'Void Wraith': '虚空幽魂',
    'Void Reaver': '虚空掠夺者',
    'Void Lord': '虚空领主',
    'Abyss God': '深渊之神',
    'Eternal Wanderer': '永恒浪客',
    'Nova': '新星',
    'Sigma Proioxis': '西格玛普洛伊俄克斯',
    'Acallaris': '阿卡拉里斯',
    'One Above All': '至高无上',
    'One Below All': '万物之下',
    'Concentration': '专注',
    'Productivity': '效率',
    'Bargaining': '议价',
    'Meditation': '冥想',
    'Strength': '力量',
    'Battle Tactics': '兵法韬略',
    'Muscle Memory': '肌肉记忆',
    'Mana Control': '控制法力',
    'Life Essence': '生命源质',
    'Astral Body': '星光体',
    'Temporal Dimension': '时间维度',
    'All Seeing Eye': '全视之眼',
    'Brainwashing': '意识操控',
    'Dark Influence': '黑暗影响',
    'Evil Control': '邪恶控制',
    'Intimidation': '威胁恐吓',
    'Demon Training': '恶魔训练',
    'Blood Meditation': '血之冥想',
    'Demons Wealth': '恶魔财富',
    'Dark Knowledge': '黑暗知识',
    'Void Influence': '虚空影响',
    'Time Loop': '时间循环',
    'Evil Incarnate': '邪恶具现',
    'Absolute Wish': '绝对心愿',
    'Void Amplification': '扩充虚空',
    'Mind\'s Seize': '占据意识',
    'Ceaseless Abyss': '无尽深渊',
    'Void Symbiosis': '虚空共生',
    'Void Embodiment': '虚空化身',
    'Abyss Manipulation': '控制深渊',
    'Cosmic Longevity': '天地同寿',
    'Cosmic Recollection': '宇宙回忆',
    'Essence Collector': '精华汲取',
    'Galactic Command': '银河命令',
    'Omnipotence': '无所不能',
    'Yin Yang': '阴阳',
    'Parallel Universe': '平行宇宙',
    'Higher Dimensions': '高维存在',
    'Epiphany': '天人合一',
    'Homeless': '无家可归',
    'Tent': '帐篷',
    'Wooden Hut': '木屋',
    'Cottage': '小屋',
    'House': '房屋',
    'Large House': '大房屋',
    'Small Palace': '小型宫殿',
    'Grand Palace': '大型宫殿',
    'Town Ruler': '一镇之主',
    'City Ruler': '一城之主',
    'Nation Ruler': '一国之王',
    'Pocket Dimension': '口袋空间',
    'Void Realm': '虚空之境',
    'Void Universe': '虚空之界',
    'Astral Realm': '星辰之境',
    'Galactic Throne': '银河王座',
    'Multiverse Creator': '多元创世',
    'Book': '书本',
    'Dumbbells': '哑铃',
    'Personal Squire': '私人扈从',
    'Steel Longsword': '钢制长剑',
    'Butler': '管家',
    'Sapphire Charm': '蓝宝石护符',
    'Study Desk': '书桌',
    'Library': '图书馆',
    'Observatory': '天文台',
    'Mind\'s Eye': '心之眼',
    'Void Necklace': '虚空项链',
    'Void Armor': '虚空护甲',
    'Void Blade': '虚空之刃',
    'Void Orb': '虚空宝珠',
    'Void Dust': '虚空魔尘',
    'Celestial Robe': '天衣',
    'Universe Fragment': '宇宙碎片',
    'Multiverse Fragment': '多元碎片',
    'Touch the eye': '触碰眼球',
    'Embrace Evil': '拥抱邪恶',
    'Transcension': '超越',
    'Struggle day and night for a couple of copper coins. It feels like you are at the brink of death each day.': '为了几枚铜板日夜挣扎在生死线上。',
    'Plow the fields and grow the crops. It\'s not much but it\'s honest work.': '一分耕耘一分收获。虽然收入不高，但终于有正式工作了。',
    'Reel in various fish and sell them for a handful of coins. A relaxing but still a poor paying job.': '捕获鱼类，出售换钱。更悠闲，但仍然收入不高。',
    'Delve into dangerous caverns and mine valuable ores. The pay is quite meager compared to the risk involved.': '深入危险的洞穴，采掘有价值的矿石。报酬远远不能跟风险相比。',
    'Smelt ores and carefully forge weapons for the military. A respectable and OK paying commoner job.': '为军队冶炼矿石并仔细打造武器。受人尊敬，报酬也不错。',
    'Travel from town to town, bartering fine goods. The job pays decently well and is a lot less manually-intensive.': '在城镇之间旅行，以物易物。可以赚很多钱，而且不那么劳累。',
    'Carry around your knight\'s shield and sword along the battlefield. Very meager pay but the work experience is quite valuable.': '为战场上的骑士们携带盾与剑。工资很低，但可以获得宝贵的经验。',
    'Put down your life to battle with enemy soldiers. A courageous, respectable job but you are still worthless in the grand scheme of things.': '拼命与敌人作战。勇敢而受人尊敬，但仍然只是沧海一粟。',
    'More experienced and useful than the average footman, take out the enemy forces in battle with your might. The pay is not that bad.': '比普通步兵更老资格，可以发挥更多用处，尽力消灭敌人吧。回报不错。',
    'By proving your skills with a bow, you were appointed to lead a small group of archers to ambush your enemies from a distance.': '依靠弓术证明了自己，终于不再是小兵了。指挥弓兵小队在远处伏击敌人。',
    'Slash and pierce through enemy soldiers with ease, while covered in steel from head to toe. A decently paying and very respectable job.': '从头到脚都穿戴着精钢护甲，可以轻松干掉敌人。报酬很高，极受尊敬。',
    'Utilising your unmatched combat ability, slaugher enemies effortlessly. Most footmen in the military would never be able to acquire such a well paying job like this.': '利用无与伦比的战斗力屠戮敌人。只有极少数步兵能够走到这一步。',
    'Obliterate squadrons of enemy soldiers in one go with extraordinary proficiency, while equipped magically imbued blade. Such a feared unit on the battlefield is paid extremely well.': '装备有注魔的刀刃，技艺已达超凡脱俗，可以一口气消灭一整队敌军。如此强大的存在自然不会在薪水上被亏待。',
    'Feared by nations, obliterate entire armies in a blink of an eye. Roughly every century, only one holy knight is worthy of receiving such an esteemed title.': '万国畏惧，眨眼间即可歼灭一整支军队。百年才能有一位圣骑士达到如此境界。',
    'Study the theory of mana and practice basic spells. There is minor pay to cover living costs, however, this is a necessary stage in becoming a mage.': '学习魔法理论并练习基本法术。几乎入不敷出，但这是通往法师的必经之路。',
    'Under the supervision of a skilled mage, perform basic spells against enemies in battle. Generous pay will be provided to cover living costs.': '在有经验的法师指导下对敌人施展基本法术。报酬丰厚。',
    'Turn the tides of battle through casting intermediate spells and mentor other apprentices. The pay for this particular job is extremely high.': '施展中级法术并指导其他学徒，有扭转战局的力量。报酬极高。',
    'Utilise advanced spells to ravage and destroy entire legions of enemy soldiers. Only a small percentage of mages deserve to attain this role and are rewarded with an insanely high pay.': '使用高级法术，可以摧毁一整个军团。只有一小部分法师可以达到这个水平，报酬高到离谱。',
    'Blessed with unparalleled talent, perform unbelievable feats with magic at will. It is said that an archamge has enough destructive power to wipe an empire off the map.': '天赋无与伦比，随手即可完成不可思议的法术。具有抹除一整个帝国的恐怖威能。',
    'Specialize in harnessing temporal energies that alter the flow of time with supernatural divinations and otherwordly expertise.': '专注于利用时间能量，可以通过超自然占卜和超凡脱俗的专业知识改变时间流动。',
    'Spend your days administrating The Arcane Association and investigate the concepts of true immortality. The chairman receives ludicrous amounts of pay daily.': '将时间投入到奥术协会的管理并研究彻底不朽的途径。主席每日的薪水就足以超越正常人的想象。',
    'You wield an unlimited power, making you unstoppable. By ruling with an iron fist, everyone in the Arcane Association has to obey your commands.': '拥有无限的力量，无人可挡。奥术协会的所有人都拜服在你的铁腕之下。',
    'Corrupted by Void, you are slowly turning into a slave with no free will, just to serve the Void for the rest of eternity... Can you resist it, or will it consume you forever?': '被虚空腐蚀后正在变成没有自由意志的奴隶，将永远为虚空服务……您会抵挡住它，还是会被永远吞噬？',
    'Each day you are succumbing to the Void more and more, can you hold to your humanity for a bit longer, or will you let it devour you?': '虚空的侵蚀日益严重，您还能坚持住人性，不被吞噬吗？',
    'You become an inquisitive yet putrid creature that siphons life from everything around you.': '终究被腐化了，会从周围的一切事物上吸取生命。',
    'Screaming into existence, you become a manifestation of the unknowable nothingness that lies beyond.': '随着尖啸，您成为了超越彼岸，未知虚无的化身。',
    'Damned soul... a shadow of your former self, lingering between realms and consumed by void... can you ever find peace?': '被诅咒的灵魂……只是您之前的影子，徘徊于各界之间，并遭到虚空的吞噬……您真的能安息吗？',
    'There are few who may tread the paths between worlds, these powers grant you an ability to generate fields of void energy that devour all living things.': '很少有人会踏上世界之间的道路，您获得了一项能力，可以产生吞噬所有生物的虚空能量场。',
    'You gazed into the dark heart of the Void long enough to become one of the most powerful and feared beings, all lesser void creatures are at your command.': '凝视虚空黑暗之心足够长时间后，终于成为了最强大而可怕的生物之一，所有次等虚空生物都要听从于您。',
    'Creator of the Void, a vast canvas of blackness and nothingness, in which the concept of its existence defies all logic, nothing will escape you.': '虚空的创造者，充满了黑暗和虚无，没有任何逻辑可言。没有什么可以从你手上逃脱。',
    'With the powers bestowed upon you by an unknown entity you wander around, visiting places revered and feared in search of answers.': '未知的存在赋予了您力量，您四处游荡于各种地方，寻求答案。',
    'Extremely powerful being with tremedous telekinetic powers and the ability to rearrange the molecular structure of matter and energy, even up to cosmic scale.': '极其强大的存在，拥有惊人的念动力，可以重构物质和能量的基本结构，规模可达宇宙尺度。',
    'A nigh-omnipotent cosmological entity, with vast matter and energy manipulation abilities that help you push the boundaries of the Universe itself.': '几乎无所不能的宇宙存在，具有操控物质和能量的超强能力，它可以帮助您突破宇宙本身的界限。',
    'Primordial being that predate the universe, involved with the creation of life and powerful beyond mortal comprehension, existing as myths to the oldest species in the universe.': '早于宇宙诞生的原始存在，参与了创造生命，能力已经超越想象，存在于宇宙最古老物种的神话中。',
    'Creator of everything.': '万物的创造者。',
    'Exists only as a concept, everything needs to have its opposite.': '只是概念上的存在，万物都有对立面。',
    'Improve your learning speed through practising intense concentration activities.': '练习集中力，增加学习速度。',
    'Learn to procrastinate less at work and receive more job experience per day.': '减少工作中的拖延，获得更多工作经验。',
    'Study the tricks of the trade and persuasive skills to lower any type of expense.': '研究交易和说服的技巧，减少花费。',
    'Fill your mind with peace and tranquility to tap into greater happiness from within.': '让内心充满平静与安宁，获得更大的幸福感。',
    'Condition your body and strength through harsh training. Stronger individuals are paid more in the military.': '严格训练自己，调整身体和力量。军队中只有强者才能获得更多。',
    'Create and revise battle strategies, improving experience gained in the military.': '提出和调整战略，提高军队中获得的经验。',
    'Strengthen your neurons through habit and repetition, improving strength gains throughout the body.': '通过习惯和重复强化神经，增加身体获取力量的速度。',
    'Strengthen your mana channels throughout your body, aiding you in becoming a more powerful magical user.': '强化通过身体的法力，成为更强的施法者。',
    'Lengthen your lifespan through the means of magic. However, is this truly the immortality you have tried seeking for...?': '通过魔法增加寿元。但，这真的就是您追寻的不朽吗……？',
    'Bend space and time through forbidden techniques, speeding up your learning processes.': '通过禁术扭曲时空，加快学习进度。',
    'Lengthen your lifespan drastically beyond comprehension by harnessing ethereal energy.': '利用以太能量，大大增长寿元。',
    'Creating your own pocket dimension where centuries go by in mere seconds.': '制造自己的口袋空间，时间流速远远快于外面。',
    'As the highest rank of T.A.A, all funds go directly to you.': '作为奥术协会的最高层，您可以调动所有的资金。',
    'A technique designed to manipulate human thought and action against their desire.': '不受其他人意志左右，操控他们的思想和行动。',
    'Encompass yourself with formidable power bestowed upon you by evil, allowing you to pick up and absorb any job or skill with ease.': '邪恶赋予您强大的力量，您可以更轻松地掌握和了解任何工作和技能。',
    'Tame the raging and growing evil within you, improving evil gain in-between rebirths.': '驯服内心肆虐增长的邪恶，提高每次重生的邪恶收益。',
    'Learn to emit a devilish aura which strikes extreme fear into other merchants, forcing them to give you heavy discounts.': '散发出让商人们胆寒的邪恶气息，逼迫他们给你大量折扣。',
    'A mere human body is too feeble and weak to withstand evil. Train with forbidden methods to slowly manifest into a demon, capable of absorbing knowledge rapidly.': '血肉苦弱，化身为魔。修炼禁法，快速吸收知识。',
    'Grow and culture the evil within you through the sacrifise of other living beings, drastically increasing evil gain.': '牺牲众生，培养内心的邪恶，大幅增加邪恶收益。',
    'Through the means of dark magic, multiply the raw matter of the coins you receive from your job.': '利用黑暗魔法，增加工作获得的财富。',
    'Sealed for a very long time, you utilized these forbidden texts for your own personal gain.': '这些禁书被封印了多年，是时候利用它们了。',
    'Tapping into the powers of the Void while combining them with evil grants you an ulimited potential.': '将虚空力量与邪恶结合，使您获得无尽的潜能。',
    'Mastery is achieved when "telling time" becomes "telling time what to do".': '当时间为您所用时，一切都变得更加简单。',
    'You have became the very thing you swore to destroy.': '屠魔者，终成恶魔。',
    'The power to fulfill absolutely any and all wishes without any limitations.': '拥有无限制满足任何愿望的能力。',
    'You surrender yourself to the Void, making it easier to take control of you.': '您屈从于虚空，它能更好地控制您了。',
    'In a trance like state, you feel the Void controlling your thoughts, perception, memories, emotions and personality.': '恍惚中，虚空控制了您的一切，思想，感知，记忆，情感和个性。',
    'Never ending torture, you swore to serve the Void for the rest of your existence.': '折磨永不停息，而您发誓永远效忠于虚空。',
    'A symbiotic relationship that helps you become one with the Void.': '共生关系帮助您融入虚空。',
    'If thou gaze long into an abyss, the abyss will also gaze into thee.': '当你凝视深渊的时候，深渊也在凝视你。',
    'Allows you to shape your own reality within the Void itself.': '可以在深渊中塑造您自己的实境。',
    'You have seen it all, from the very beginning to the very end.': '从头到尾，您已经看透了一切。',
    'Being able to exist in multiple parallel timelines and manipulating you parallel selves, influencing their lives as you see fit.': '可以存在于多条时间线上，操控平行世界的自己。',
    'Exploit the unlimited potential of multiverse energies and collect its resources.': '利用多元宇宙的无限潜力，并收集相关资源。',
    'Absolute power corrupts absolutely.': '绝对的权力导致绝对腐败。',
    'I see through many eyes, I build with many hands. They are themselves, but they are also me. I am all-powerful.': '我用很多双眼睛观察过世界，我用许多双手建造一切。他们是他们，他们也是我。我是无所不能的。',
    'Born from chaos when the universe was first created, believed to exist in harmony, balancing evil and good.': '诞生于宇宙初生的混沌，相信和谐共处，平衡善恶。',
    'Self-contained plane of existence, co-existing with one\'s own, helping you restore fragments of your forgotten power.': '与自己同时存在的位面，可以帮助您恢复被遗忘的力量。',
    'By possesing the power to partially alter the laws of physics and transceding lower dimensional spaces, your existence becomes never-ending.': '可以部分改变物理定律和超越低维空间，您的存在已经是无尽的了。',
    'You become one with everything.': '您与万物融为了一体。',
    'Sleep on the uncomfortable, filthy streets while almost freezing to death every night. It cannot get any worse than this.': '睡在不舒服的肮脏街道上，每晚都几乎冻死。真是糟透了。',
    'A thin sheet of tattered cloth held up by a couple of feeble, wooden sticks. Horrible living conditions but at least you have a roof over your head.': '几根软木棍支撑一块破布，生活条件很糟糕，但至少不是露宿街头了。',
    'Shabby logs and dirty hay glued together with horse manure. Much more sturdy than a tent, however, the stench isn\'t very pleasant.': '用马粪将破旧的原木和肮脏的干草粘到一起。比帐篷更坚固，但气味令人不快。',
    'Structured with a timber frame and a thatched roof. Provides decent living conditions for a fair price.': '用木架和茅草屋顶搭成的小屋。用合理的价格获得体面的生活条件。',
    'A building formed from stone bricks and sturdy timber, which contains a few rooms. Although quite expensive, it is a comfortable abode.': '由石砖和坚固的木材搭成，有好几个房间。一分钱，一分货。',
    'Much larger than a regular house, which boasts even more rooms and multiple floors. The building is quite spacious but comes with a hefty price tag.': '比普通房屋大得多，房间更多，而且拥有了多层。非常宽敞，但很昂贵。',
    'A very rich and meticulously built structure rimmed with fine metals such as silver. Extremely high expenses to maintain for a lavish lifestyle.': '富丽堂皇，精心建造的成果，镶有银边等。想要维持这种奢靡生活的代价不低。',
    'A grand residence completely composed of gold and silver. Provides the utmost luxurious and comfortable living conditions possible for a ludicrous price.': '完全由金银构成的宏伟住宅。生活条件极度奢华和舒适，价格高到离谱。',
    'You rule your very own community in your small town, owning multiple establishments.': '您统治着一整个镇子，所有机构都听命于您。',
    'As the highest ranking official, you manage and oversee everything that happens, while your pay is astronomical, so are your expenses.': '您是最高级的官员，管理和监督一切，薪水和花费都是天文数字。',
    'You reign the whole nation, while your riches may be corrupted, everything you see belongs to you.': '您统治整个国家，目光所及之处，皆为您的财产。',
    'A Dimension just for you, that can be summoned at will. What happens there stays there.': '专属于您的维度，可以随意召唤。维度里的事，说是就是不是也是。',
    'Unknown how or when the Void realm came into existence, containing elements which don’t exist outside of its dimensional plane are now all to your disposal': '不知何时，以何法出现的虚空之境，包含只存在于此地的元素，现在都由您支配了。',
    'Predating our own universe, the Void has an ulimited amount of space for your belongings, if you are willing to submit to it.': '早于宇宙而存在，拥有无限的空间。',
    'Beneath personality and ego lays the source of our deep character, our personhood. Here are the psychic senses, our deep mind and emotions, symbols and inner reality.': '在个性和自我之下，是我们的人格。这些是精神上的感觉，深层思想和情感，符号与内在现实。',
    'You sit on your throne, overseeing the existence itself.': '您坐在王座之上，监督着存在本身。',
    'Utterly dwarfing the rest of creation, achieving absolutely anything and everything.': '使其他创造相形见绌，实现绝对的一切。',
    'A place to write down all your thoughts and discoveries, allowing you to learn a lot more quickly.': '可以写下您的想法和发现，加快学习。',
    'Heavy tools used in strenuous exercise to toughen up and accumulate strength even faster than before. ': '用于剧烈运动的工具，很重，可以更快地增强和积累力量。',
    'Assists you in completing day to day activities, giving you more time to be productive at work.': '帮助您完成日常活动，让您有更多的时间进行工作。',
    'A fine blade used to slay enemies even quicker in combat and therefore gain more experience.': '可以更快地击杀敌人，获取更多经验。',
    'Keeps your household clean at all times and also prepares three delicious meals per day, leaving you in a happier, stress-free mood.': '让您的家时刻清洁，每天准备可口的三餐，让您更加幸福无压力。',
    'Embedded with a rare sapphire, this charm activates more mana channels within your body, providing a much easier time learning magic.': '嵌入了稀有的蓝宝石，可以激活更多法力通过身体，从而使学习魔法更加轻松。',
    'A dedicated area which provides many fine stationary and equipment designed for furthering your progress in research.': '有着许多精美文具和设备，可以加快您的研究。',
    'Stores a collection of books, each containing vast amounts of information from basic life skills to complex magic spells.': '存放着大量书籍，每本书都包含着极其大量的知识，从基础生活技能到复杂魔法，无所不含。',
    'Used for observing terrestrial, marine and celestial events.': '用于观察陆地、海洋和天文事件。',
    'Lets you see memories, remember images, and even see new pictures and ideas.': '帮助您看到回忆，记住图像，甚至看到新图像和想法。',
    'Helps you shape and manipulate void matter, even transmute it and rebuild into anything of your choosing.': '帮助您塑造和操控虚空物质，甚至可以将它转化为任何东西。',
    'Generates an innate armor as a part of you body, which is resistant to attacks, harm or pain.': '将它变为您身体的一部分，抵挡攻击、伤病和疼痛。',
    'Forged from void dust and dark matter, can slash through dimensional barriers. It\'s a weapon of choice for every Void Reaver.': '以虚空魔尘和暗物质锻造而成，可以穿过次元屏障。它是虚空掠夺者的武器首选。',
    'When the orb touches non void entities, it instantly disintegrate them. Harnesting its power from Void realm.': '接触到非虚空的存在后，宝珠会将它立刻分解。从虚空之境汲取力量。',
    'Purest version of void created material, a teaspoon of it is as heavy as a small planet. ': '最纯粹的虚空创造材料，一茶匙的重量跟一颗小行星一样。',
    'The most powerful and essential equipment of any Celestial. Acts as a source of infinite power.': '天界最强大和重要的装备。是无限能量的源泉。',
    'From the time the universe was born. Can create another small universes.': '来自于宇宙创生之时。可以制造出另一个小宇宙。',
    'Came into existance long before our universe was created, this strange looking object with no shape radiates unlimited energy.': '在我们的宇宙创生的很久之前就已经存在了，它外观奇特，没有形状，但散发着无限的能量。',
    'Save': '存档',
    'Import': '导入',
    'Export': '导出',
    'Import PK2': '从骑士进度条2导入',
    'Hard Reset': '硬重置',
    'Reset': '重置',
    ' This operation is irreversible': '该操作不可逆',
    'All Jobs & Skills speed': '所有工作和技能的速度',
    'Arcane Jobs speed': '奥术协会工作速度',
    'Arcane Jobs gain': '奥术协会工作收入',
    'Shop cost': '商店花费',
    'Council Jobs speed': '银河委员会工作速度',
    'Essence gain': '精华收益',
    'Evil gain': '邪恶收益',
    'Evil & Essence gain': '邪恶及精华收益',
    'Fundamental Skills Speed': '基本技能速度',
    'Galactic Jobs Speed': '银河委员会工作速度',
    'Age speed': '年龄增长速度',
    'All Jobs gain': '所有工作收入',
    'All Jobs speed': '所有工作速度',
    'Magic Skills speed': '魔法技能速度',
    'Void Manipulation Skills Speed': '虚空操控技能速度',
    'Transcension Max': '超越上限',
    'Miltary Jobs gain': '军队工作收入',
    'Miltary Jobs speed': '军队工作速度',
    'All Skills speed': '所有技能速度',
    'Strength Skill speed': '“力量”技能速度',
    'The Void Jobs speed': '虚空工作速度',
    'Click': '点击',
    'Coins': '余额',
    'Features': '游戏功能',
    'Properties': '财产',
    'Artefacts': '杂项',
    'Hoarder': '囤积成瘾',
    'Embrace evil': '拥抱邪恶',
    'Click once': '点击1次',
    'You have done the thing!': '您成功了！',
    'Click >= 1': '点击次数>=1',
    'Click 10 000': '点击10 000次',
    '...but why?': '……为何要这么做？',
    'Click >= 10 000': '点击次数>=10 000',
    'Happy 18th!': '18岁生日快乐！',
    'Legal youngster': '成年啦',
    'Age >= 18': '年龄>=18',
    'Happy 30th!': '30岁生日快乐！',
    'My back is starting to hurt': '背开始疼了',
    'Age >= 30': '年龄>=30',
    'Happy 65th!': '65岁生日快乐！',
    'Ready for an adventure?': '准备好冒险了吗？',
    'Age >= 65': '年龄>=65',
    'Happy 100th!': '100岁生日快乐！',
    'Halfway there': '路途过半',
    'Age >= 100': '年龄>=100',
    'Happy 200th!': '200岁生日快乐！',
    'Join the dark side': '堕入黑暗',
    'Age >= 200': '年龄>=200',
    'Happy 1000th!': '1000岁生日快乐！',
    'It\'s calling you!': '它在呼唤你',
    'Age >= 1000': '年龄>=1000',
    'Game speed +10': '游戏速度+10',
    'Happy 10 000th!': '10 000岁生日快乐！',
    'Redemption arc': '改邪归正',
    'Age >= 10 000': '年龄>=10 000',
    'Game speed +20': '游戏速度+20',
    'Happy 100 000th!': '100 000岁生日快乐！',
    'Eternal pain': '永恒之殇',
    'Age >= 100 000': '年龄>=100 000',
    'Game speed +30': '游戏速度+30',
    'Happy 1 000 000th!': '1 000 000岁生日快乐！',
    'Everything must end': '万物皆有终时',
    'Age >= 1 000 000': '年龄>=1 000 000',
    'Game speed +40': '游戏速度+40',
    '1 Silver': '1枚银币',
    'It\'s shiny!': '亮闪闪！',
    'Balance >= 1 Silver': '余额>=1枚银币',
    '1 Gold': '1枚金币',
    'I hope there is no chocolate inside of it': '但愿里面没有巧克力',
    'Balance >= 1 Gold': '余额>=1枚金币',
    '1 Platinum': '1枚白金币',
    'Big bucks': '一大笔钱',
    'Balance >= 1 Platinum': '余额>=1枚白金币',
    '1 Ruby': '1块红玉',
    'Pay to win currency': '氪金货币',
    'Balance >= 1 Ruby': '余额>=1块红玉',
    '1000 Ruby': '1000块红玉',
    'Ballin\'': '尽情享乐',
    'Balance >= 1000 Ruby': '余额>=1000块红玉',
    '100k Ruby': '100k块红玉',
    'Swimming in it': '遨游钱海',
    'Balance >= 100k Ruby': '余额>=100k块红玉',
    '10 000K Ruby': '10 000K块红玉',
    'Can\'t stop, won\'t stop': '无法停止，也不会停止',
    'Balance >= 10 000k Ruby': '余额>=10 000k块红玉',
    '10 000M Ruby': '10 000M块红玉',
    'Ruby-licious': '美味的红玉',
    'Balance >= 10 000M Ruby': '余额>=10 000M块红玉',
    '20 000T Ruby': '20 000T块红玉',
    'Galactic wallet': '银河钱包',
    'Balance >= 20 000T Ruby': '余额>=20 000T块红玉',
    'Shop cost reduction 10': '商店花费减少10',
    'It might seem crazy what I am \'bout to say': '也许你会觉得我是胡言乱语',
    'Happiness >= 10': '幸福感>=10',
    'Happiness 2': '幸福感2',
    'Sunshine she\'s here, you can take a break': '我无需太阳，因为她就是我的阳光',
    'Happiness >= 500': '幸福感>=500',
    'Happiness 3': '幸福感3',
    'I\'m a hot air balloon that could go to space': '我就像是个飞向太空的热气球',
    'Happiness >= 10 000': '幸福感>=10 000',
    'Happiness +5': '幸福感+5',
    'Happiness 4': '幸福感4',
    'With the air, like I don\'t care, baby by the way': '在云间穿梭，烦恼忧愁统统抛之脑后',
    'Happiness >= 100 000': '幸福感>=100 000',
    'Happiness +10': '幸福感+10',
    'Happiness 5': '幸福感5',
    'Because I\'m happy': '因为我很幸福',
    'Happiness >= 1 000 000': '幸福感>=1 000 000',
    'Happiness +15': '幸福感+15',
    'Happiness 6': '幸福感6',
    'Clap along if you feel like a room without a roof': '请跟我拍手，如果您身无压力，如释重负',
    'Happiness >= 10 000 000': '幸福感>=10 000 000',
    'Happiness +20': '幸福感+20',
    'Happiness 7': '幸福感7',
    'Happiness >= 100 000 000': '幸福感>=100 000 000',
    'Happiness +25': '幸福感+25',
    'Happiness 8': '幸福感8',
    'Clap along if you feel like happiness is the truth': '请跟我拍手，如果你也认为幸福是真理',
    'Happiness >= 300 000 000': '幸福感>=300 000 000',
    'Happiness +50': '幸福感+50',
    '...on the dark side': '……阴暗面',
    'Evil >= 1': '邪恶>=1',
    'Evil 2': '邪恶2',
    'Naughty boy': '熊孩子',
    'Evil >= 50': '邪恶>=50',
    'Evil 3': '邪恶3',
    'Trained by a demon': '由恶魔训练',
    'Evil >= 500 ': '邪恶>=500',
    'Evail gain +25': '邪恶收益+25',
    'Evil 4': '邪恶4',
    'Merging both worlds': '融合两个世界',
    'Evil >= 5 000': '邪恶>=5 000',
    'Evil 5': '邪恶5',
    'Under the bad influence': '受到不良影响',
    'Evil >= 50 000': '邪恶>=50 000',
    'Evail gain +10': '邪恶收益+10',
    'Evil 6': '邪恶6',
    'The four rivers of Hell': '地狱四河',
    'Evil >= 2 500 000': '邪恶>=2 500 000',
    'Evail gain +20': '邪恶收益+20',
    'Evil 7': '邪恶7',
    'The Devil himself': '恶魔本魔',
    'Evil >= 1 000 000 000': '邪恶>=1 000 000 000',
    'Evil 8': '邪恶8',
    'Worst person ever lived': '史上最邪恶的存在',
    'Evil >= 10 000 000 000': '邪恶>=10 000 000 000',
    'Evail gain +1000': '邪恶收益+1000',
    'Sticky substance': '黏性物质',
    'Essence >= 1': '精华>=1',
    'Essence 2': '精华2',
    'Galactic fuel': '银河燃料',
    'Essence >= 10 000': '精华>=10 000',
    'Essence gain +50': '精华收益+50',
    'Essence 3': '精华3',
    'Essence hoarder': '囤积精华',
    'Essence >= 30 000': '精华>=30 000',
    'Essence 4': '精华4',
    'Essence symbiosis': '精华共生',
    'Essence >= 100 000': '精华>=100 000',
    'Essence gain +1000': '精华收益+1000',
    '88 miles per hour!': '速度高达70码！',
    'Time Warping >= 10': '扭曲时间>=10',
    'Super Speed': '超级速度',
    'Gotta go fast': '得快点了',
    'Time Warping >= 100': '扭曲时间>=100',
    'Ultra Speed': '终级速度',
    'Space bending': '空间弯曲',
    'Time Warping >= 500': '扭曲时间>=500',
    'Game speed +25': '游戏速度+25',
    'Hyper Speed': '究级速度',
    'VROOOOM': '引擎加速',
    'Time Warping >= 1 000': '扭曲时间>=1 000',
    'Auto-promote': '自动晋升',
    'It goes on its own': '自己动起来',
    'Auto-promote unlocked': '解锁自动晋升',
    'Auto-learn': '自动学习',
    '...I have people for that': '……有人相助',
    'Auto-learn unlocked': '解锁自动学习',
    'Auto-pause': '自动暂停',
    'Destiny in your own hands': '我命由我不由天',
    'Auto-pause unlocked': '解锁自动暂停',
    'Not homeless anymore': '容身之地',
    'Tent unlocked': '解锁帐篷',
    'I have windows now!': '有窗户了！',
    'House unlocked': '解锁房屋',
    '...but where my furniture at?': '……家具哪去了？',
    'Small Palace unlocked': '解锁小型宫殿',
    'Proud owner of Taj Mahal': '泰姬陵的骄傲主人',
    'Grand Palace unlocked': '解锁大型宫殿',
    'My block, my homies': '在我地盘这你就得听我的',
    'Town Ruler unlocked': '解锁一镇之主',
    'What Fire Nation?': '厉害了我的国',
    'Nation Ruler unlocked': '解锁一国之王',
    'Lifespan +10': '寿元+10',
    'Who turned the lights off?': '谁把灯全关了？',
    'Void Universe unlocked': '解锁虚空之界',
    'It\'s just a chair from IKEA': '只不过是从宜家搬来的椅子而已',
    'Galactic Throne unlocked': '解锁银河王座',
    'Lifespan +15': '寿元+15',
    'So...what now?': '所以……现在又如何？',
    'Multiverse Creator unlocked': '解锁多元创世',
    'Sorry I can\'t read': '很抱歉我看不懂',
    'Own a Book': '获得书本',
    'A maid man': '好汉还需管家帮',
    'Own a Butler': '获得管家',
    'Stars in my eyes': '第一个望星人',
    'Own an Observatory': '获得天文台',
    'So heavy, I can\'t stand up': '好重，我站不起来了',
    'Own a Void Armor': '获得虚空护甲',
    'The Emperor\'s new clothes': '皇帝的新衣',
    'Own a Celestial Robe': '获得天衣',
    'Wait, it\'s made of bubblegum?': '等等，它是泡泡糖制成的？',
    'Own a Multiverse Fragment': '获得多元碎片',
    'Where do I keep it?': '该放哪好呢？',
    'Have 5 active miscs': '激活5项杂项',
    'Hoarder 2': '囤积成瘾2',
    'Ebay rat': '剁手党',
    'Have 10 active miscs': '激活10项杂项',
    'Hoarder 3': '囤积成瘾3',
    'I swear I don\'t have a problem': '我发誓自己没问题',
    'Have 14 active miscs': '激活14项杂项',
    'Hoarder 4': '囤积成瘾4',
    'Gotta catch them all': '一个也不能少',
    'Have 20 active miscs': '激活20项杂项',
    'Ew, it\'s slimy': '呃，好黏',
    'Touch the eye x1': '触碰眼球1次',
    'Touch the eye 2': '触碰眼球2',
    'Times change, or does it?': '时代变了，吗？',
    'Touch the eye x5': '触碰眼球5次',
    'Touch the eye 3': '触碰眼球3',
    'I did it for the sake of doing it': '为做而做',
    'Touch the eye x10': '触碰眼球10次',
    'Start with age of 20': '初始年龄变为20',
    'Touch the eye 4': '触碰眼球4',
    'Deja vu?': '既视感？',
    'Touch the eye x25': '触碰眼球25次',
    'Start with age of 30': '初始年龄变为30',
    'Touch the eye 5': '触碰眼球5',
    'Repetition makes you stronger': '重复使您强大',
    'Touch the eye x50': '触碰眼球50次',
    'Start with age of 40': '初始年龄变为40',
    'It flows through my veins': '它在我的血管中流动',
    'Embrace Evil x1': '拥抱邪恶1次',
    'Embrace Evil 2': '拥抱邪恶2',
    'Something pointy is growing on my forehead': '额头长出了尖尖的东西',
    'Embrace Evil x3': '拥抱邪恶3次',
    'Embrace Evil 3': '拥抱邪恶3',
    'Being evil pleases me': '邪恶使我愉悦',
    'Embrace Evil x5': '拥抱邪恶5次',
    'Embrace Evil 4': '拥抱邪恶4',
    'I\'m the danger!': '我是危险的化身！',
    'Embrace Evil x10': '拥抱邪恶10次',
    'Embrace Evil 5': '拥抱邪恶5',
    'Ultimate evil': '终级邪恶',
    'Embrace Evil x15': '拥抱邪恶15次',
    'Transcension x1': '超越1次',
    'Transcension 2': '超越2',
    'Transcension x3': '超越3次',
    'Essence gain +25': '精华收益+25',
    'Transcension 3': '超越3',
    'Transcension x5': '超越5次',
    'Transcension 4': '超越4',
    'Transcension x10': '超越10次',
    'Transcension 5': '超越5',
    'Transcension x15': '超越15次',
    'Game time': '游戏时长',
    'Rebirth': '重生',
    //#endregion
    //#region 其余
    'FG Progress Knight': 'FG骑士进度条',
    '© Freddec Games 2022': '© Freddec Games 2022',
    'All rights reserved.': '版权所有。',
    'You stumble across a strange looking amulet on your 25th birthday. It does not look like\n                                it has any worth on the market given that it\'s made from cheap-looking copper. However, you\n                                feel a weird urge to keep the amulet, so you slip it into your pocket for safekeeping.': '25岁生日时，您偶然发现了一个奇怪的护身符，它由廉价的铜制成，看来并不值几个钱。但您有一种保留它的奇怪冲动，所以将它放入口袋保管了起来。',
    'On your 45th birthday, you feel the amulet shiver uncontrollably in your pocket. You take it\n                                out and the constant shivering suddenly stops. More to your bizarre surprise, you notice\n                                a strange etching on the centre of the amulet.': '45岁生日时，您感到口袋里的护身符在不受控制地颤抖。您将它拿了出来，颤抖突然停止了。您惊讶地发现护身符中心有个奇怪的蚀刻。',
    'On your 65th birthday, you once again encounter the strange, unexplained shivering from your\n                                    amulet. But this time, a living eyeball emerges from the centre. Although terribly frightened,\n                                    you realise you do not have many years to live left anyway so you consider touching the eye\n                                    to see what happens.': '65岁生日时，护身符又开始奇怪而无法解释的颤抖。但这次，中心出现了一个活生生的眼球。尽管您非常害怕，但也意识到自己时日无多，因此也在考虑触碰眼球看看会发生什么。',
    'By touching the eyeball, you will be reborn and have to restart life again, losing all your levels and coins.\n                                    However, you will gain ': '触碰眼球后，您将进行重生，需要重新经历人生，所有等级和余额将清零。但您可以获得',
    'bonus': '加成',
    ' for your jobs and skills equivalent to': '，对工作和技能生效，效果为',
    '1 + the max level of the job or skill / 10.': '1 + 工作或技能最大值 / 10。',
    'This means you will learn everything again much more quickly than you did in your previous life.': '换句话说，您的学习速度要比上一世快得多。',
    'Something tells you that the amulet might evolve after living for ': '冥冥之中，您感知到如果您能活过',
    '2 whole centuries': '两个世纪',
    ' and transform even further after living for\n                                    a ': '，项链可能会进化，如果能活过',
    'millennium': '一千年',
    ' and reach its final form after ': '，它还可以再度进化，并且它的终级形态出现在',
    'ten millenia': '一万年后',
    '...': '……',
    'Your gut instinct was right. The moment you hit the grand age of 200, you hear an ominous hum coming from the amulet.\n                                    A mouth emerges from its surface and begins to cackle, and proceeds to say: \"So you\'ve made it this far... Are you ready to embrace evil?\"': '您的直觉是正确的。200岁时，您听到护身符发出了不祥的嗡嗡声。它的表面长出了一张嘴，开始咯咯地笑，接着说“您已经走到这一步了，应该准备好拥抱邪恶了吧？”',
    'If you decide to embrace ': '如果您决定拥抱',
    'evil': '邪恶',
    ', all of your levels, coins and even max levels will be reset.\n                                    You will be reborn as a fresh slate. However, you will unlock a new line of skills and gain': '，所有等级、余额和最大值都将清零。您将以初始状态重生。不过，您可以解锁一批新技能，并获得',
    ' evil': '邪恶',
    ', and which will heavily impact your future lives.': '，它对您的将来有着重要的影响。',
    'A thousand years have come and gone and yet, you still remain alive... somehow. You feel your amulet shivering again and to your surprise, you see small tendrils\n                                    full of eyeballs emergin from it. As you are about to drop the amulet, you hear frightening screech followed by whispers in your head... ': '千年过去，您还活着……护身符再度开始了颤抖，令您吃惊的是上面冒出了长满眼球的小卷须。当您正准备丢掉护身符的时候，您听到了可怕的尖叫声，然后脑海里响起了耳语……',
    'You have to embrace the Void...': '您……需要……拥抱……虚空……',
    'You have unlocked ': '您解锁了',
    'The Void': '虚空',
    ' class category along with ': '工作和',
    'Void Manipulation': '虚空操控',
    ' abilities.': '技能。',
    'Ten millenia have passed... most of them spent serving the Void, yet there is still a glimpse of humanity inside of you. All of the sudden your amulet starts to glow in the distance,\n                                    illuminating darkness around you with the brightness of thousand suns. With the very last remnant of your free will you run to your amulet and touch it...': '一万年过去了……大部分存在都已经彻底侍奉虚空了，但您的内心仍然留存着一丝人性。突然，护身符在远处发出了千个太阳的光亮，照亮了您周围的黑暗。凭着您仅存的自由意志，您跑向了护身符并触碰了它……',
    'You are now part of something bigger than yourself...': '您成为了某个大型存在的一部分……',
    'Galactic Council': '银河委员会',
    'Celestial Powers': '天界之力',
    'By clicking on ': '点击',
    'Transcend': '超越',
    ', you will be reborn once again, losing all your coins, ': '后，您将再次重生，余额、',
    ' and current levels.\n                                    However your max level won\'t be erased but multiplied with ': '和等级将再度清零。最大值不会清零，而是会乘以',
    ' ability and you will gain': '技能的效果，且您可以获得',
    ' essence': '精华',
    ',\n                                    new ability that will boost you even further in your journey.': '，新技能可以让您在旅途中走得更远。',
    'Transced will only show up if you have ': '超越选项只在解锁',
    ' ability unlocked!': '技能后出现！',
    //#endregion
    //#region 原样输出
    '+': '+',
    'Back to the home page': 'Back to the home page',
    'Nuxt': 'Nuxt',
    'This page could not be found': 'This page could not be found',
    'x': 'x',
    //#endregion

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    ": ": "：",
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
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "：",
    "： ": "：",
    ")": ")",
    "%": "%",
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
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?(e[+\-]?\d?\.?\d+)?(e\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\s\d+(e\.\,\d+)?[A-Za-z]{0,4}(.*)$/, //处理数字及单位
    /^\/?\^?\d+[e\.\,\d\/]+$/, //处理数字及单位
    /^[e\.\,\d]+ \+ [e\.\,\d]+$/, //处理数字及单位
    /^(.*)[\u4E00-\u9FFF]+(.*)$/, //不抓取内容
    /^\d+:\d+:\d+$/, //处理时间
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
    [/^(.+)d (.+):(.+):(.+)$/, '$1日 $2:$3:$4'],
    [/^ e(\d+)$/, ' e$1'],
]);