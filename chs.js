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
    "Add maximum ammount of items": "增加最大数量的物品",
    "Added a changelog": "增加了更新日志",
    "Added better tooltips.": "增加了更好的工具提示。",
    "added Cloud loading/save": "增加云加载/保存",
    "Added Counter for all Enemys": "为所有敌人增加反击",
    "Added Icons": "增加图标",
    "Added InFight Stats": "增加了 战斗中 属性",
    "added Items": "增加物品",
    "Added more Prestige": "增加了更多声望",
    "Added New Enemys": "增加了新的敌人",
    "Added Resistance": "增加阻力",
    "Added search for enemys": "增加搜索敌人",
    "Added softreset": "增加了软复位",
    "Added sort for log": "增加了日志排序",
    "Added Sspeed saving": "增加了 Sspeed 保存",
    "Added Stim Tooltip": "增加了 Stim 工具提示",
    "Added the Fight-Order": "增加了战斗命令",
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
    "Buffed Slow and Stim": "强化减速和刺激",
    "Calculation:": "计算：",
    "chance": "几率",
    "Chance to completely avoid the damage of the enemy": "有几率完全避开敌人的伤害",
    "Chance to double the damage": "伤害翻倍几率",
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
    "double": "伤害翻倍",
    "DRAG": "拖动",
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
    "maybe fixed broken counter": "也许修复坏了的反击",
    "maybe fixed unlimited enemie fight": "也许修复了无限的敌人战斗",
    "megacrit": "终级暴击",
    "More Enemies": "更多敌人",
    "Number of times you've finished the game": "你完成游戏的次数",
    "Ogre": "食人魔",
    "overlay change": "覆盖变化",
    "poison": "毒",
    "poisondamage = poisondamage-(poisondamage*resistace)": "poisondamage = poisondamage-(poisondamage*resistace)",
    "poisonresistance": "毒抗",
    "precision": "精准",
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
    "damage through bleed": "流血伤害",
    "damage through crit": "暴击伤害",
    "damage through ultracrit": "究级暴击伤害",
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
    "3 2 1 BOTS": "3 2 1 机器人",
    "A noble and ancient weapon, wielded by the strongest": "高贵而古老的武器，由最强者使用",
    "Adds five life": "增加五点生命",
    "Adds one damage": "加一伤害",
    "Allows instakill on bosses": "允许对Boss进行 秒杀",
    "And where there is jellyfish, there is the Jellyfish Hunter.": "哪里有水母，哪里就有水母猎人。",
    "Arrr": "Arrr",
    "bleed": "流血",
    "bleeddamage = bleeddamage-(bleeddamage*resistace)": "bleeddamage = bleeddamage-(bleeddamage*resistace)",
    "bleedresistance": "抗流血性",
    "Blocks a percentage of bleeddamage": "阻挡一定百分比的流血伤害",
    "Bloodhunger": "嗜血",
    "BRAAAINN": "大脑脑脑脑",
    "Broken Android": "坏掉的机器人",
    "bury": "掩埋",
    "Chance to accelerate the rate of progression.": "有机会加快进展速度。",
    "Chance to cut the opponent. Bleeding enemies suffer damage on their turn.": "斩杀对手的机会。 流血的敌人在他们的回合受到伤害。",
    "Chance to increase damage sixteenfold. Can only occur when mega-critical.": "有机会增加十六倍的伤害。 只能在超级临界时发生。",
    "Chance to invert the opponent. Inverted enemies suffer damage instead of regeneration.": "有机会逆转对手。 倒置的敌人会受到伤害而不是再生。",
    "Chrome Avatar": "Chrome 头像",
    "Cursed Card": "诅咒卡",
    "Cyclops": "独眼巨人",
    "Destroyer of Friendships II": "友谊的破坏者 II",
    "disarm": "解除武装",
    "disarm = disarm": "解除武装=解除武装",
    "eil a si ekac eht": "eil a si ekac eht",
    "EXTERMINATE": "消灭",
    "Fear not the Uri, fear the darkness that would conceal the knowledge of the universe. Believe in the truth of all things, and you too may find the Path to enlightenment": "不要害怕乌里，害怕隐藏宇宙知识的黑暗。 相信一切事物的真相，你也可能找到证悟之道",
    "Found on the 1st floor": "发现在一楼",
    "Ghoul": "食尸鬼",
    "Hacker": "黑客",
    "Hedgehog": "刺猬",
    "Hedgehog's the name. Speed isn't my game.": "刺猬的名字。 速度不是我的游戏。",
    "Highscore": "高分",
    "How do you turn this on?": "你如何把这个打开？",
    "I'm shurly a good slime": "我是一个很好的史莱姆",
    "If there are many heroes, then we will replace them all. Let the entire world know that Necromancer is the true hero!": "如果有很多英雄，那我们就把他们全部换掉。 让全世界都知道死灵法师才是真正的英雄！",
    "invert": "倒置",
    "Items": "物品",
    "Jadis": "贾迪斯",
    "Jellyfish": "海蜇",
    "Just what I needed!": "正是我需要的！",
    "Klez": "克莱兹",
    "Master of hardbass and apparently magic too.": "硬低音大师，显然也是魔术师。",
    "Mawas": "马瓦斯",
    "Mawas were passionate scavengers, combing the deserts of Labooine for droids or scraps which they would capture and sell to the local residents": "Mawas 是热情的拾荒者，他们在 Labooine 的沙漠中寻找机器人或他们捕获并出售给当地居民的废料",
    "Necromancer": "死灵法师",
    "Never waste your saphirs on a how": "永远不要把你的蓝宝石浪费在如何做上",
    "No System is safe": "没有系统是安全的",
    "Play this card, with a Monster from your hand, when someone (including you!) is in combat.": "当有人（包括你！）在战斗中时，从你的手牌中使用这张牌。",
    "Priors of the Uri": "乌里修道院院长",
    "Rainbow Slime": "彩虹史莱姆",
    "Regenerates quadruple the amount on the next turn.": "在下一回合再生四倍的量。",
    "Remote Observation And Manipulation device": "远程观察和操纵装置",
    "Rimuro": "Rimuro",
    "Rimuro ": "Rimuro ",
    "Rimuro attacks second time": "里姆罗第二次攻击",
    "ROAMEr": "漫游者",
    "rot": "腐烂",
    "Rotten enemies can't regenerate": "腐烂的敌人无法再生",
    "Saphir sword": "蓝宝石剑",
    "Shroomy Boy": "蘑菇男孩",
    "Silver. Copper. Gold. Chrome. Long ago, the four nations lived together in harmony. Then, everything changed when the Gold Nation attacked.": "银。 铜。 金子。 铬合金。 很久以前，这四个民族和睦相处。 然后，一切都在黄金国的进攻中改变了。",
    "Skeleton Bowman": "骷髅弓箭手",
    "Slav": "斯拉夫",
    "Small damage boost": "少量伤害提升",
    "Small double boost": "少量伤害翻倍提升",
    "Small health boost": "少量生命提升",
    "Small precision boost": "少量精度提升",
    "Small speed boost": "少量速度提升",
    "Space Soldier": "太空战士",
    "Special:": "特殊：",
    "Spooky scary skeletons": "阴森恐怖的骷髅",
    "stim": "刺激",
    "Strange Robot": "奇怪的机器人",
    "The chance to disarm an opponent. Disarmed opponents can still cast spells.": "解除对手武装的机会。 缴械的对手仍然可以施法。",
    "The Queen of Marnia and Empress of the Lone Islands": "马尼亚女王和孤岛女皇",
    "Trebuchet": "投石机",
    "Turret": "炮塔",
    "Twin-tailed Wolf": "双尾狼",
    "Type-A Energy Weapon": "A型能量武器",
    "ultracrit": "究级暴击",
    "Unholy Knight": "邪恶骑士",
    "UNIQUE: +20% life steal": "独特：+20% 生命窃取",
    "Wandering Monster": "流浪怪物",
    "We need to have a mask that we never take off.": "我们需要有一个永不摘下的面具。",
    "Who is attacking my castle day after day without interruption?": "谁在日复一日不间断地攻打我的城堡？",
    "You have to find Jerico": "你必须找到杰里科",
    "You wanna piece of me, boy?": "你想要我的一部分吗，孩子？",
    "Zombie": "僵尸",
    "Adds 0.3 regeneration": "增加 0.3 再生",
    "Adds 0.5% instakill": "增加 0.5% 秒杀",
    "Adds 1 block": "增加 1 格挡",
    "Adds 1 maxitems": "增加 1 物品上限",
    "Adds 1 regeneration": "增加 1 再生",
    "Adds 2% bleed resistance": "增加 2% 流血抗性",
    "Adds 2% bury": "增加 2% 掩埋",
    "Adds 2% crit": "增加 2% 暴击",
    "Adds 2% dodge": "增加 2% 闪避",
    "Adds 2% fire resistance": "增加 2% 火炕",
    "Adds 2% megacrit": "增加 2% 终级暴击",
    "Adds 2% poison resistance": "增加 2% 毒抗",
    "Adds 2% reflect": "增加 2% 反射",
    "Adds 2% resurrect": "增加 2% 复活",
    "Adds 2% silence": "增加 2% 沉默",
    "Adds 2% stun": "增加 2% 眩晕",
    "Adds 2% supercrit": "增加 2% 超级暴击",
    "Adds 5% bleed": "增加 5% 流血",
    "Adds 5% counter": "增加 5% 反击",
    "Adds 5% crit": "增加 5% 暴击",
    "Adds 5% fire": "增加 5% 火焰伤害",
    "Adds 5% lifesteal": "增加 5% 吸血",
    "Adds 5% poison": "增加 5% 中毒伤害",
    "Adds 5% rot": "增加 5% 腐烂",
    "Adds 5% slow": "增加 5% 减速",
    "Adds 5% stim": "增加 5% 刺激",
    "Adds five magic": "增加 5 魔法",
    "Chance to hit the enemy when attacked.": "受到攻击时有几率命中敌人。",
    "counter": "反击",
    "counter = counter": "反击 = 反击",
    "disarmed": "解除武装",
    "life = maxlife": "生命 = 最大生命",
    "Minor crit boost": "轻微暴击提升",
    "Minor health boost": "轻微生命提升",
    "minor magic boost": "轻微魔法提升",
    "Minor recovery boost": "轻微恢复提升",
    "Minor regeneration boost": "轻微再生提升",
    "resurrect": "复活",
    "Show Finished": "显示已完成",
    "Small bleed boost": "少量流血提升",
    "Small bleed resistance boost": "少量流血抵御提升",
    "Small block boost": "少量格挡提升",
    "Small bury boost": "少量掩埋提升",
    "Small counter boost": "少量反击提升",
    "Small crit boost": "少量暴击提升",
    "Small dodge boost": "少量闪避提升",
    "Small fire boost": "少量火焰提升",
    "Small fire resistance boost": "少量火炕提升",
    "Small instakill boost": "少量秒杀提升",
    "Small lifesteal boost": "少量吸血提升",
    "Small magic boost": "少量魔法提升",
    "Small maxitems boost": "少量物品上限提升",
    "Small megacrit boost": "少量终极暴击提升",
    "Small poison boost": "少量中毒提升",
    "Small poison resistance boost": "小毒抗性提升",
    "Small recovery boost": "少量恢复提升",
    "Small reflect boost": "少量反射提升",
    "Small regeneration boost": "少量再生提升",
    "Small resurrect boost": "少量复活提升",
    "Small rot boost": "少量腐烂提升",
    "Small silence boost": "少量沉默提升",
    "Small slow boost": "少量减速提升",
    "Small stim boost": "少量刺激提升",
    "Small stun boost": "少量眩晕提升",
    "Small supercrit boost": "小超级暴击提升",
    "Strange Robot countered the attack": "怪异机器人反击",
    "The chance of not dying and continuing to fight with full life.": "有机会不死，继续以充实的生命战斗。",
    "used Stimmpack": "使用过的强化剂",
    "Do you really want to wipe your current run?": "您真的要擦除当前运行中的进度吗？",
    "instakilled": "秒杀了",
    "No": "否",
    "Yes": "是",
    "Bloodless": "抵御流血",
    "Destroyer of Friendships": "友谊的破坏者",
    "Good old fachion damage": "良好的旧时尚伤害",
    "Hidden Blade": "隐藏的刀片",
    "Master Ball": "大师球",
    "Maybe i shoudn't": "也许我不应该",
    "Mjölnir": "雷神之锤",
    "obtained by killing Agent 46": "通过杀死特工46获得",
    "Ocarina of Time": "时光之笛",
    "One Ring": "一环",
    "One ring to rule them all": "一个环统治他们全部",
    "Piano String": "钢琴弦",
    "RIP Desment": "安息吧",
    "Spiked Shell": "尖刺贝壳",
    "Strange White Powder": "奇怪的白色粉末",
    "The best Ball. It never misses.": "最好的球。 它永远不会错过。",
    "Ule and doch are | Both for binding | Reh for seeking | Kel for finding": "Ule 和doch 是| 两者都用于绑定 | Reh求| 用于查找的 Kel",
    "Whosoever holds this hammer, if he be worthy, shall possess the power of Thor.": "持有这把锤子的人，如果他配得上，将拥有托尔的力量。",
    "woof woof woof woof": "呜呜呜呜呜呜",
    "Woofwere": "低音炮",
    "buried": "燃烧",
    "casted rot on": "腐烂",
    "himself": "他自己",
    "sliced": "切割",
    "Absorb": "同化放置",
    "Added Challanges": "添加了挑战",
    "Added new Enemies": "添加了新的敌人",
    "Added QOL": "添加了生活质量",
    "Added Quest": "添加任务",
    "Amount of Physical Damage": "物理伤害量",
    "and": "和",
    "Block": "格挡",
    "block is a fixed value that is subtracted from the attack, as an effect it always applies.": "阻止是从攻击中减去的固定值，因为它始终适用的效果。",
    "Blocks a percentage of fire damage": "格挡一定比例的火焰伤害",
    "Blocks a percentage of poison damage": "格挡一定百分比的毒药伤害",
    "Chance to double the Physical Damage": "有几率使物理伤害翻倍",
    "Chance to increase Physical Damage eightfold. Can only occur when super-critical.": "有几率使物理伤害增加八倍。 仅在超临界时才会发生。",
    "Chance to quadruple the Physical Damage. Can only occur when critical": "有机会使物理伤害翻四倍。 仅在关键时发生",
    "Chance to slow the rate of enemy tick.": "有机会减慢敌人的蜱虫速度。",
    "Chance:": "机会：",
    "clear": "清除",
    "continue": "继续",
    "Crit": "暴击",
    "crit damage": "暴击伤害",
    "critical damage doubles the damage done. you only collect the chance to do this.": "致命伤害使造成的伤害翻倍。 你只是抓住机会这样做。",
    "damage as reflect from Hard Turtle": "硬海龟反射的伤害",
    "detail": "细节",
    "Dodge": "躲闪",
    "Dodge is able to completely ignore an opponent's attack": "闪避能够完全无视对手的攻击",
    "DOT": "点",
    "DOT=Damage over time. Refers to the damage that is added over a period of time. you only collect the chance to cause a DOT, the damage is estimated by your magic.": "DOT=随着时间的推移造成的伤害。 指在一段时间内所增加的伤害。 你只收集造成 DOT 的机会，伤害由你的魔法估算。",
    "Drop": "降低",
    "Each defeated enemy generates additional stats. Kill enemies that give damage.": "每个被击败的敌人都会产生额外的属性。 杀死造成伤害的敌人。",
    "Effects are a stat that always occurs, for example, lifesteal heals when you do damage.": "效果是一种总是发生的属性，例如，当你造成伤害时，吸血会治愈。",
    "Effects:": "效果：",
    "Fifth Boss": "第五Boss",
    "finished": "已完成",
    "fire damage": "火伤害",
    "First Blood": "第一滴血",
    "First Boss": "第一个Boss",
    "Fourth Boss": "第四Boss",
    "Gain 10 poison": "获得 10 毒药",
    "Gain 10 Super Crit": "获得 10 超级暴击",
    "Gain 15 crit": "获得 15 点暴击",
    "Gain 150 fire": "获得 150 火",
    "Gain 2 block": "增益2块",
    "Gain 2 Damage": "获得 2 点伤害",
    "Gain 2 lifesteal": "获得 2 点吸血",
    "Gain 2 recovery": "增益 2 恢复",
    "Gain 5 dodge": "闪避增益 5",
    "Gain 5 precision": "获得 5 精度",
    "Gain Effects": "增益效果",
    "Gained Stats": "获得的属性",
    "heal as lifesteal": "作为吸血治疗",
    "Health restored at every tick": "每次蜱虫都会恢复生命值",
    "hide": "隐藏",
    "High Flame": "高火焰",
    "if [Dodge] = [Physical Damage] = 0": "如果[闪避]=[物理伤害]=0",
    "If you collect more than one hundred percent of a chance then the effect always occurs and even has the chance to occur a second time, which makes the effect last longer. Collect 150 Fire": "如果你收集到的几率超过百分之一百，那么该效果总是会发生，甚至有机会发生第二次，这使得该效果的持续时间更长。 收集 150 点火焰",
    "Kill 1 Flying Eye": "杀死 1 只飞眼",
    "Kill 1 Jadis": "杀死 1 名贾迪斯",
    "Kill 1 Necromancer": "杀死 1 名死灵法师",
    "Kill 1 Strange Robot": "杀死 1 个奇怪的机器人",
    "Kill 1 Toasterman": "杀死 1 个烤面包师",
    "Kill 1 Turret": "杀死 1 个炮塔",
    "Kill 10 Bats": "杀死 10 只蝙蝠",
    "Kill the First Boss and Prestige, if you coninued you can prestige in the Stat Tab": "杀死第一个 Boss 并获得声望，如果你继续，你可以在统计选项卡中获得声望",
    "Last Boss": "最后的Boss",
    "Magic is used to calculate magical attacks": "魔法用于计算魔法攻击",
    "megacrit damage": "巨暴击伤害",
    "O": "氧",
    "physical damage": "物理伤害",
    "poison damage": "毒害",
    "Precision": "精确",
    "Precision is the value that is subtracted when the opponent tries to dodge, to counter agile opponents this is necessary.": "精准度是对手试图闪避时减去的数值，对于对抗敏捷的对手这是必要的。",
    "Prestige 1 Time": "声望 1 次",
    "Quests": "任务",
    "Recovery": "恢复",
    "recovery is the value healed per second when you are out of combat": "恢复是当你脱离战斗时每秒治疗的值",
    "resistance": "反抗",
    "Returns a percentage of the physical damage caused back to the enemy": "将造成的物理伤害的百分比返回给敌人",
    "rewrote everything with router and vuex": "用 router 和 vuex 重写了一切",
    "Second Boss": "二Boss",
    "Sorted the Code": "对代码进行排序",
    "Super Crit": "超级暴击",
    "supercrit damage": "超暴击伤害",
    "The total amount of Physical Damage Reduction": "物理伤害减免总量",
    "The value required to begin each turn. A lower value is better. It is capped to 110": "每回合开始所需的值。 值越低越好。 上限为 110",
    "Third Boss": "第三Boss",
    "Toasterman, the toasty superhero who turns bread into edible sunshine": "烤面包人，将面包变成可食用阳光的烘烤超级英雄",
    " - [Block]": " - [格挡]",
    " + [Recovery]": " + [恢复]",
    "show": "显示",
    "Export Build": "导出构建",
    "Current Scores": "当前分数",
    "Maximum amount of active items": "最大活跃物品数量",
    "Toasterman": "烤面包人",
    "[Active Items] = [MaxItems]": "[活跃物品] = [最大物品数]",
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
    "dmg = physical_dmg / ": "伤害 = 物理伤害 / ",
    "regeneration = ": "回复 = ",
    "life = life - regeneration": "生命 = 生命 - 再生",
    "life = life + (regeneration*": "生命 = 生命 + (再生*",
    "speedProgress = speedProgress + ": "速度进度 = 速度进度 +",
    "Priors of the Uri ": "乌里修道院院长",
    "[Death] if [Life] <= ": "[死亡] 如果 [生命] <= ",
    "[Description] = [Description]": "[描述] = [描述]",
    "[Enemy Life] = ": "[敌人生命] = ",
    "[Enemy Tick] = [Enemy Tick] - ": "[敌方Tick] = [敌方Tick] - ",
    "[Fire Damage] = [Fire Damage]-([Fire Damage]*[Resistace])": "[火焰伤害]=[火焰伤害]-([火焰伤害]*[抗性])",
    "[Health] = [Health] + [Regeneration]": "[生命值]=[生命值]+[再生]",
    "[Health] = [Health] + [Regeneration] + [Recovery]": "[生命值]=[生命值]+[再生]+[恢复]",
    "[Health] = [Physical Damage] * [Lifesteal] / ": "[生命值]=[物理伤害]*[吸血] / ",
    "[Hit] = [Dodge] - [Precision]": "[命中]=[闪避]-[精准]",
    "[Magic] = [Magic]": "[魔法] = [魔法]",
    "[Magical Damage] = [Magic] / ": "[魔法伤害]=[魔法] / ",
    "[nextTurn] if [currentSpeed] >= [Speed]": "[下一回合] 如果 [当前速度] >= [速度]",
    "[Physical Damage]  = ([Physical Damage]  * [Crit]) * ": "[物理伤害] = ([物理伤害] * [暴击]) * ",
    "[Physical Damage] = [Physical Damage]": "[物理伤害]=[物理伤害]",
    "[Physical Damage] = [Physical Damage] - [Block]": "[物理伤害]=[物理伤害]-[格挡]",
    "[Physical Damage] = [Physical Damage] * [Reflect] / ": "[物理伤害]=[物理伤害]*[反射] / ",
    "[Physical Damage] = [Physical Damage] * ": "[物理伤害] = [物理伤害] * ",
    "[Poison Damage] = [Poison Damage]-([Poison Damage]*[Resistace])": "[中毒伤害]=[中毒伤害]-([中毒伤害]*[抗性])",
    "[Prestige] =  [Ammount of Prestiges]": "[声望] = [声望数量]",
    "[Silence] = [Magical Damage] = ": "[沉默]=[魔法伤害] = ",
    "[Stun] = [Stun]": "[眩晕] = [眩晕]",
    "Fight until you have killed ": "战斗直到你杀死 ",
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
    " until Item is unlocked": " 距离物品解锁",
    " was killed": " 被击杀了",
    " blocked": " 格挡了",
    " was": " ",
    " got": " 受到",
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
    [/^You can select enemies in the dungeon tab and the fight will occur automatically. Fight until you have killed (.+).$/, '您可以在地牢选项卡中选择敌人，战斗将自动发生。 战斗直至杀死 $1。'],
    [/^(.+) killed (.+)$/, '$1 击杀了 $2'],
    [/^(.+) ([\d\.]+) times$/, '$1 $2 次'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^Adds ([\d\.,]+) life$/, '增加 $1 生命'],
    [/^Adds ([\d\.,]+) magic$/, '增加 $1 魔法'],
    [/^Adds ([\d\.,]+) recovery$/, '增加 $1 恢复'],
    [/^Adds ([\d\.,]+) speed$/, '增加 $1 速度'],
    [/^Adds ([\d\.,]+) precision$/, '增加 $1 精准'],
    [/^Adds ([\d\.,]+)\% double$/, '增加 $1% 伤害翻倍'],
    [/^killed in ([\d\.,]+) seconds$/, '在 $1 秒内被杀死'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) bleeding$/, '$1 流血'],
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