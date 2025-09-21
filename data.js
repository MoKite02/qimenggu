// 组织活动数据
const organizationsData = [
  {
    id: 'five_person_dungeon',
    name: '互帮互助五人本',
    description: '百业成员互帮互助，齐心协力，共同拿下五人本！',
    host: '任何百业成员',
    time: '任何时间',
    location: '任何地点',
    image: 'https://www.yysls.cn/pc/gw/20220815175950/img/mhys/bz/17_33f9186.jpg?image_process=format,jpg'
  },
  {
    id: 'ten_person_dungeon',
    name: '互帮互助十人本',
    description: '百业成员互帮互助，齐心协力，共同拿下双十人本（百业本+普通本）！',
    host: '任何百业成员',
    time: '一般周一晚上9.30',
    location: '任何地点',
    image: 'https://www.yysls.cn/pc/gw/20220815175950/img/mhys/bz/18_bd1a5dc.jpg?image_process=format,jpg'
  }
];

// 演示视频数据
const demoVideos = [
  {
    id: '1',
    name: '抖音混剪视频',
    video: 'https://open.douyin.com/player/video?vid=7452781422143687963&autoplay=0'
  },
  {
    id: '2',
    name: '背景视频',
    video: 'https://open.douyin.com/player/video?vid=7543563227632782626&autoplay=0'
  },
  {
    id: '3',
    name: '背景视频',
    video: 'https://open.douyin.com/player/video?vid=7549724329085242639&autoplay=0'
  }
];

// 角色数据管理
const characterData = [
  {
    id: '1',
    name: "舟山石",
    title: "社长",
    desc: "顶级威威",
    tags: ["承伤大王","高冷男神","叮叮叮","looking my eyes！","looking my eyes！"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457530040_qdqqd_54t08v.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758284108554_qdqqd_810c6l.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758284114019_qdqqd_ts3sph.avif",
         ]
  },
  {
    id: '2',
    name: "是皮皮娅",
    title: "顶级钧钧",
    desc: "是不是没带耳朵 为什么不听指挥 不要踩电圈(´_ゝ｀)",
    tags: ["温柔指挥", "在线可邀 ", "斗地主大王"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758347378198_qdqqd_c1o06j.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758284393535_qdqqd_jmth2q.avif",
        " https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758369272221_qdqqd_y4099k.avif",
        "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758369310927_qdqqd_o21e73.avif",
        "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758369338944_qdqqd_o0s5v7.avif",
        "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758369352853_qdqqd_s21wf3.avif",
          ]
  },
  {
    id: '3',
    name: "琳瑿",
    title: "人",
    desc: "是个好人",
    tags: ["好人"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758347312440_qdqqd_6m9c30.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758347265431_qdqqd_jcjclq.avif",
          ]
  },
  {
    id: '4',
    name: "婠绾",
    title: "摸鱼霖霖",
    desc: "如果我一夜暴富，那么我一定没醒",
    tags: ["九重麻瘾患者", "麻将滴滴"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758347378198_qdqqd_c1o06j.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758286218235_qdqqd_a9ynfa.avif",
          "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758459379976_qdqqd_emml96.avif",
          "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758459637176_qdqqd_t9gx8j.avif",
          "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758459675816_qdqqd_5adz20.avif",
    ]
  },
  {
    id: '5',
    name: "李梦糖",
    title: "黑工大人",
    desc: "꒰ *•ɷ•* ꒱",
    tags: ["玉霖大王"," 黑工大人"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar34.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758284623820_qdqqd_qxxze3.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758284644112_qdqqd_2wfzv4.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758284659896_qdqqd_1b46zy.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758284673643_qdqqd_s01x2k.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758284862490_qdqqd_3r1if5.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758284707818_qdqqd_nvqfam.avif"
    ]
  },
  {
    id: '6',
    name: "墨秋烬",
    title: "社众",
    desc: "君子坦荡荡，小人长戚戚。",
    tags: ["刮痧小能手", "九九奶爸"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar46.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758285645674_qdqqd_bvxlpg.avif",
     
    ]
  },
  {
    id: '7',
    name: "颜江载",
    title: "社恐人士",
    desc: "我们的百业非常好！！！",
    tags: ["社恐", "三更夫"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar65.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758286052243_qdqqd_7u2nxg.avif",
          ]
  },
  {
    id: '8',
    name: "嫣奕秋",
    title: "摸鱼均均",
    desc: "你在梦中塑造幻境，幻境也悄然定义着你的真实。",
    tags: ["吾道不咕", "死磕无伤", "懒癌晚期","收徒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758296735205_qdqqd_4ipbhk.png",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758390540565_qdqqd_uxwkku.jpg",
    ]
  },
  {
    id: '9',
    name: "兔叽儿",
    title: "混子大王",
    desc: "百业一级混子大王",
    tags: ["九重麻瘾亲传弟子"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar41.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758296035467_qdqqd_90v45u.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758296050689_qdqqd_53o1oh.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758296121876_qdqqd_981y2h.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758296144631_qdqqd_btm4ia.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758296164136_qdqqd_ua05n4.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758296177451_qdqqd_prrozj.avif",
    ]
  },
  {
    id: '10',
    name: "温相逢",
    title: "顶级霖霖",
    desc: "补药压力我啊",
    tags: ["嘿嘿嘿嘿"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar22.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758285122917_qdqqd_0uuv8w.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758285244282_qdqqd_il5i38.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758285259794_qdqqd_wwyeq3.avif",
          ]
  },
  {
    id: '11',
    name: "林泽丶",
    title: "摆烂大王",
    desc: "抗我三刀，送六元小奇遇",
    tags: ["陌刀大卡车"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar75.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758349730771_qdqqd_8oxz2d.avif",
         ]
  },
  {
    id: '12',
    name: "麓柒丶",
    title: "无名死忠粉",
    desc: "开心比什么都重要",
    tags: ["肝帝", "无名重度爱好者", "斗财神"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar30.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758347827118_qdqqd_ftcy8q.avif",
            "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758347855145_qdqqd_0eo2w4.avif"
    ]
  },
  {
    id: '13',
    name: "璃书词",
    title: "玉玉大王",
    desc: "与君共饮，不如与串同行",
    tags: ["麻将中毒患者", "温柔可爱善解人意"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758348081902_qdqqd_ysl5aq.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758348046008_qdqqd_u7sfo3.avif"]
  },
  {
    id: '14',
    name: "抹茶呱太",
    title: "混子霖霖",
    desc: "大家一起加油啊",
    tags: ["下五子棋吗"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758359794230_qdqqd_8mul5k.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758357780095_qdqqd_f91tcu.avif",
     
    ]
  },
  {
    id: '15',
    name: "卿嬗",
    title: "祝你逃出苦难向青山",
    desc: "也祝你青山过后再无难",
    tags: ["九九大王"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758370738873_qdqqd_ij12zg.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758370817884_qdqqd_d72n7s.avif",
         ]
  },
  {
    id: '16',
    name: "其实是笨蛋",
    title: "摆烂无名",
    desc: "卷不动了，摆烂才是我的归宿。",
    tags: ["熬夜修仙", "非洲酋长"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457530040_qdqqd_54t08v.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457098415_qdqqd_rdn2ye.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457206715_qdqqd_ph46gy.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457229200_qdqqd_jfsyhx.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457242339_qdqqd_mk6jb7.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457257522_qdqqd_gf3dai.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457270366_qdqqd_7oskkn.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457291214_qdqqd_hli3uw.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457305861_qdqqd_m59mr8.avif",
    
    ]
  },
  {
    id: '17',
    name: "婲合鬥",
    title: "成都第一玉玉大王",
    desc: "只要有空 随叫随到",
    tags: ["芳华一揽" ],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar42.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457716793_qdqqd_040b46.avif",
    ]
  },
  {
    id: '18',
    name: "如沭",
    title: "绝世霖霖",
    desc: "暂上我是人之常情 我同意了",
    tags: ["超级黑工", "喜欢牢本"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar48.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758457904317_qdqqd_o96thj.avif",
    ]
  },
  {
    id: '19',
    name: "別绪",
    title: "绝世输出",
    desc: "",
    tags: ["超级黑工", "天赋大王", "顶级理解"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar81.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758460553332_qdqqd_drymg0.avif",
    ]
  },
  {
    id: '20',
    name: "秦脩徹",
    title: "摸鱼无名",
    desc: "一切都是命中注定",
    tags: ["喜欢跑图", "不会打架", "全靠人机"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758460863901_qdqqd_aav9gn.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758460841308_qdqqd_7ulkkv.avif",
    ]
  },
  {
    id: '21',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '22',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '23',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '24',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '25',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '26',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '27',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '28',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '29',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '30',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '31',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '32',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '33',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '34',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '35',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '36',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '37',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '38',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '39',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '40',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '41',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
  {
    id: '42',
    name: "无名",
    title: "无",
    desc: "暂无数据",
    tags: ["暂无数据", "暂无数据", "暂无数据"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758388826873_qdqqd_0ygyxf.jpg",
    ]
  },
]

// 工具函数
function getOrganizationById(id) {
  return organizationsData.find(org => org.id === id);
}

function getCharacterById(id) {
  return characterData.find(char => char.id === id);
}