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
    "1 Point = 1 Skill": "1 点 = 1 技能",
    "A chance to hit an enemy twice": "有几率击中敌人两次",
    "A chance to silence the enemy. Silenced enemies can only perform physical attacks.": "一个让敌人沉默的几率。 被沉默的敌人只能进行物理攻击。",
    "active items = maxitems": "可用物品 = 最大物品",
    "Add maximum ammount of items": "添加最大数量的物品",
    "Added a changelog": "添加了更新日志",
    "Added better tooltips.": "添加了更好的工具提示。",
    "added Cloud loading/save": "添加云加载/保存",
    "Added Counter for all Enemys": "为所有敌人添加计数器",
    "Added Icons": "添加图标",
    "Added InFight Stats": "添加了 战斗中 统计数据",
    "added Items": "添加物品",
    "Added more Prestige": "添加了更多声望",
    "Added New Enemys": "添加了新的敌人",
    "Added Resistance": "增加阻力",
    "Added search for enemys": "添加搜索敌人",
    "Added softreset": "添加了软复位",
    "Added sort for log": "添加了日志排序",
    "Added Sspeed saving": "添加了 Sspeed 保存",
    "Added Stim Tooltip": "添加了 Stim 工具提示",
    "Added the Fight-Order": "添加了战斗命令",
    "Again fixing Buggs": "再次修复错误",
    "Amount of damage": "伤害量",
    "Any similarity with other books, games or movies is just coincidence and results from your fertile imagination.": "与其他书籍、游戏或电影的任何相似之处都只是巧合，是您丰富想象力的结果。",
    "Assassin": "刺客",
    "Autofight": "自动战斗",
    "Base": "基础",
    "basic": "基础",
    "Bat": "蝙蝠",
    "better tooltips": "更好的工具提示",
    "block": "格挡",
    "Blocks a percentage of firedamage": "格挡一定百分比的火焰伤害",
    "Blocks a percentage of poisondamage": "格挡一定百分比的毒害",
    "Blue Slime": "蓝色史莱姆",
    "Boar": "公猪",
    "Buffed Hard Turtle": "强化硬壳龟",
    "Buffed Slow and Stim": "强化缓慢和刺激",
    "Calculation:": "计算：",
    "chance": "几率",
    "Chance to completely avoid the damage of the enemy": "有几率完全避开敌人的伤害",
    "Chance to double the damage": "伤害加倍几率",
    "Chance to increase damage eightfold. Can only occur when super-critical.": "有几率增加八倍的伤害。 只有在超临界时才会发生。",
    "Chance to kill an enemy instantly": "有几率立即杀死敌人",
    "Chance to poison the enemy. Poisoned opponents suffer damage on their turn.": "有几率使敌人中毒。 中毒的对手在他们的回合受到伤害。",
    "Chance to quadruple the damage. Can only occur when critical": "有几率使伤害翻四倍。 只能在关键时发生",
    "Chance to set the opponent on fire. Burning opponents suffer damage on their turn.": "有几率让对手着火。 燃烧的对手在他们的回合受到伤害。",
    "Chance to slow the rate of enemy progress.": "有几率减缓敌人的前进速度。",
    "Chance to stun the enemy. Stunned enemies are unable to attack.": "有几率击晕敌人。 被击晕的敌人无法攻击。",
    "Chances": "几率",
    "Changed the way regeneration works": "改变了再生的方式",
    "crit": "暴击",
    "CTRL": "CTRL键",
    "Damage": "伤害",
    "damage = damage": "伤害 = 伤害",
    "damage = damage - block": "伤害 = 伤害 - 格挡",
    "death": "死亡",
    "death = life<=0": "死亡 = 生命 <= 0",
    "Description:": "描述：",
    "dmg": "伤害",
    "dmg = (dmg * crit) * 2": "伤害 = (伤害 * 暴击) * 2",
    "reflect / 100": "反射 / 100",
    "dodge": "闪避",
    "dodge = dodge": "闪避=闪避",
    "double": "双倍的",
    "DRAG": "拖",
    "Drag and drop now pushed between.": "拖放现在被推到之间。",
    "Dungeon": "地牢",
    "effects": "效果",
    "Effects": "效果",
    "enemy life = -1": "敌人生命 = -1",
    "Evil Spirit": "恶灵",
    "Exit": "退出",
    "FILE": "文件",
    "fire": "火",
    "Fire Elemental": "火元素",
    "firedamage = firedamage-(firedamage*resistace)": "火焰伤害 = 火焰伤害-(火焰伤害*抵抗力)",
    "fireresistance": "火炕",
    "Fixed Dodge": "修复闪避",
    "Fixed Dying on DOT": "修复 DOT 上死亡",
    "Fixed the big dont-update-numbers-bug": "修复了大的不更新数字错误",
    "Flying Eye": "飞眼",
    "for description.": "查看描述。",
    "for stats.": "查看属性。",
    "Gain:": "获得：",
    "Goblin": "哥布林",
    "Hard": "硬重置",
    "Hard Turtle": "硬壳龟",
    "Health": "生命",
    "health = dmg * lifesteal / 100": "生命 = 伤害 * 吸血 / 100",
    "health = health + regeneration": "生命 = 生命 + 再生",
    "health = health + regeneration + recovery": "生命 = 生命 + 再生 + 恢复",
    "Health restored at every turn": "每回合都恢复生命",
    "Health restored in each second outside of combat": "在战斗之外每秒恢复生命",
    "Hide Finished": "隐藏完成",
    "hit = dodge - precision": "命中 = 闪避 - 精准",
    "Hydra": "九头蛇",
    "if speed>110 start saving": "如果速度 >110 开始保存",
    "instakill": "秒杀",
    "Iron Golem": "钢铁巨人",
    "Is used to purchase skills": "用于购买技能",
    "life": "生命",
    "lifesteal": "吸血",
    "Load": "加载",
    "LOADING": "加载中",
    "LOCAL": "本地",
    "Log": "日志",
    "Made every image smaller": "缩小每个图像",
    "Made Stats closable": "使统计可关闭",
    "magic": "魔法",
    "Magic": "魔法",
    "magic = magic": "魔法=魔法",
    "Magic is used to calculate non-physical attacks": "魔法用于计算非物理攻击",
    "Maximum amount of activ items": "可用物品的最大数量",
    "Maximum amount of health. The target dies when it is dropped to 0.": "最大生命量。 目标在下降到 0 时死亡。",
    "maxitems": "最大物品",
    "maybe fixed broken counter": "也许修复坏了的柜台",
    "maybe fixed unlimited enemie fight": "也许修复了无限的敌人战斗",
    "megacrit": "超级暴击",
    "More Enemies": "更多敌人",
    "Number of times you've finished the game": "你完成游戏的次数",
    "Ogre": "食人魔",
    "overlay change": "覆盖变化",
    "poison": "毒",
    "poisondamage = poisondamage-(poisondamage*resistace)": "poisondamage = poisondamage-(poisondamage*resistace)",
    "poisonresistance": "抗毒力",
    "precision": "精确",
    "Press": "按",
    "prestige": "声望",
    "Prestige": "声望",
    "prestige = last boss killed": "声望 = 最后一个Boss被击杀",
    "recovery": "恢复",
    "Red Slime": "红色史莱姆",
    "Reduces the chance that enemies will dodge.": "降低敌人闪避的几率。",
    "reflect": "反射",
    "regeneration": "再生",
    "Repaired Hightscores and Kongpainons": "修复了 Highscores 和 Kongpainons",
    "Reset": "重置",
    "RESET": "重置",
    "Reset Order": "重置排序",
    "Resistance": "反抗",
    "Returns a percentage of the damage caused back to the enemy": "将造成的伤害的一定百分比返还给敌人",
    "SHIFT": "按 Shift",
    "silence": "沉默",
    "silence = silence": "沉默 = 沉默",
    "Skills": "技能",
    "Skilltree looks a litte more like a skilltree.": "技能树看起来更像一个技能树。",
    "slow": "慢的",
    "Snake": "蛇",
    "Soft": "软重置",
    "speed": "速度",
    "Speed": "速度",
    "speedProgress = speedProgress - 20": "速度进度 = 速度进度 - 20",
    "Spider": "蜘蛛",
    "sspeed": "速度",
    "Stats": "统计",
    "Stored speed. Is used when the speed limit of 110 is exceeded.": "存储的速度。 当超过 110 的限速时使用。",
    "stun": "击晕",
    "stun = stun": "击晕 = 击晕",
    "supercrit": "超级暴击",
    "The percentage of life restored from each attack.": "每次攻击恢复的生命百分比。",
    "The total amount of damage reduction": "减伤总量",
    "The value required to begin each turn": "每回合开始所需的值",
    "Thief": "盗贼",
    "to change fighting order.": "改变战斗顺序。",
    "turn = currentSpeed>=speed": "回合 = 当前速度 >= 速度",
    "Turtle": "乌龟",
    "Vampire": "吸血鬼",
    "Water Elementar": "水元素",
    "Wind Elementar": "风元素",
    "Yellow Slime": "黄色史莱姆",
    "'Layers. Onions have layers. Ogres have layers. Onions have layers. You get it? We both have layers.'-Famous Ogre": "'层。 洋葱有层次。 食人魔有层次。 洋葱有层次。 你懂了？ 我们都有层次。'-著名的食人魔",
    "description": "描述",
    "description = description": "描述 = 描述",
    "Hmm it smells like roasted boar.": "嗯，闻起来像烤野猪。",
    "I am a spider so what?": "我是蜘蛛那又怎样？",
    "I am not an evil slime": "我不是邪恶的史莱姆",
    "I might not be a bad slime": "我可能不是坏史莱姆",
    "I'll be reckless if it means I'll win": "如果这意味着我会赢，我会鲁莽",
    "I'm probably a bad slime": "我可能是个坏史莱姆",
    "If you don't press like, it will haunt you today.": "如果你不按喜欢，它今天会困扰你。",
    "It explains things just like this text here.": "它在此处解释了与本文类似的内容。",
    "Lucky it's not the blue one.": "幸好不是蓝色的。",
    "Make sure you bring a stake.": "确保带上木桩。",
    "Mario! How dare you disturb my family vacation?!": "马里奥！ 你怎么敢打扰我的家庭假期？！",
    "Nanananana Bat": "Nanananana 蝙蝠",
    "Nothing is true, everything is permitted.": "没有什么是真的，一切都是允许的。",
    "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind - Bruce Lee": "请注意，最坚硬的树最容易折断，而竹子或柳树则可以随风弯曲而生存——李小龙",
    "Ready to set the world on fire? Heheheh...": "准备好点燃世界了吗？ 呵呵呵呵...",
    "STR 18 (+4) DEX 14 (+2) CON 18 (+4) INT 5 (-3) WIS 10 (+0) CHA 8 (-1)": "STR 18 (+4) DEX 14 (+2) CON 18 (+4) INT 5 (-3) WIS 10 (+0) CHA 8 (-1)",
    "The Lernaean Hydra or Hydra of Lerna (Greek: Λερναῖα Ὕδρα, Lernaîa Hýdra), more often known simply as the Hydra, is a serpentine water monster in Greek and Roman mythology.": "Lernaean Hydra 或 Hydra of Lerna（希腊语：Λερναῖα Ὕδρα，Lernaîa Hýdra），通常简称为九头蛇，是希腊和罗马神话中的蛇形水怪。",
    "Thou shalt not steal.'": "你不可偷窃。",
    "Upon thy belly shalt thou go, and dust shalt thou eat all the days of thy life": "你要用肚子行走，终生吃尘土",
    "You feel an evil presence watching you...": "你感觉有一个邪恶的存在在注视着你……",
    "You need four iron blocks and a pumpkin.": "你需要四个铁块和一个南瓜。",
    "All Scores": "全部分数",
    "damage through physical": "物理伤害",
    "Fight": "战斗",
    "heal through lifesteal": "治疗通过吸血",
    "Stats:": "属性：",
    "silenced": "沉默了",
    "dodged": "闪避了",
    "damage through crit": "暴击伤害",
    "damage through supercrit": "超级暴击伤害",
    "damage through megacrit": "终级暴击伤害",
    "dodged": "闪避了",
    "silenced": "沉默了",
    "burned": "燃烧",
    "damage": "伤害",
    "damage through reflect": "反射伤害",
    "damage through poison": "中毒伤害",
    "damage through fire": "火焰伤害",
    "poisoned": "中毒了",
    "slowed": "减速了",
    "stunned": "击晕了",
    "Thief attacks second time": "盗贼第二次攻击",
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
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

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
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
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
    "  ": " ",
    " ": " ",
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
    "dmg = dmg * ": "伤害 = 伤害 * ",
    "dmg = magic / ": "伤害 = 魔法 / ",
    "Points: ": "点数: ",
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
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "killed  Bat": "击杀了 蝙蝠",
    " resisted": " 反击了",
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
    " takes": " 受到",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
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
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^killed (.+) times$/, '击杀了 $1 次'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^(.+) can't do any damage to (.+)$/, '$1 不能对 $2 造成任何伤害'],
    [/^(.+) killed (.+)$/, '$1 击杀了 $2'],
    [/^(.+) ([\d\.]+) times$/, '$1 $2 次'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) poison$/, '$1 毒'],
    [/^([\d\.]+) fire$/, '$1 火'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);