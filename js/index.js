/* ---------------------------------- 全局变量 ---------------------------------- */
let tab_active = 0;//当前页面
const tabs = document.querySelectorAll(".tab");
const container = document.getElementsByClassName('wrap')[0];
const list = [
    [
        {
            image : "./images/1.jpg.webp",
            text : "乐高（LEGO）积木拼装 60337 特快客运列车 7岁+男孩儿童玩具新年礼物",
            price : "￥1099"
        },
        {
            image : "./images/2.jpg.webp",
            text : "智汇儿童相机拍立得照相机玩具7女孩14岁6生日礼物8女童10新年礼物",
            price : "￥397"
        },
        {
            image : "./images/3.jpg.webp",
            text : "卡瓦依（KAWAI）电钢琴ES110GBS家用立式88键重锤便携电子钢琴成人儿童初学家用",
            price : "￥3499"
        },
        {
            image : "./images/4.jpg",
            text : "Math For Love美国数学思维游戏儿童桌游亲子玩具数学跳棋学习聚会新年生日礼物 MathForLove数学跳棋",
            price : "￥95"
        },
    ],
    [
        {
            image : "./images/21.jpg.webp",
            text : "剑南春【送三星堆茶具+3瓶水晶剑小酒】水晶剑 浓香型 低度白酒 38度 500mL 6瓶 整箱装",
            price : "￥2688"
        },
        {
            image : "./images/22.png",
            text : "奔富（Penfolds）奔富一号法国红葡萄酒 750ml 法国原瓶进口红酒 宴请聚会送礼佳选 单支",
            price : "￥288"
        },
        {
            image : "./images/23.jpg.webp",
            text : "天湖 啤酒 德式施泰克9度小麦原浆白啤酒 年货送礼 整箱 500ml*24听",
            price : "￥79"
        },
        {
            image : "./images/24.jpg.webp",
            text : "汾杏山西汾杏53度清香型白酒整箱 粮食酒口粮酒自饮送礼酒水白酒礼盒 53度 475mL 2瓶 汾杏清香型礼盒装",
            price : "￥148"
        },
    ],
    [
        {
            image : "./images/31.jpg.webp",
            text : "沙宣洗发水水润去屑洗发水男士女士通用400g水润大红瓶洗发露膏",
            price : "￥37.8"
        },
        {
            image : "./images/32.jpg.webp",
            text : "七度空间（SPACE 7）天山绒棉系列0.07cm极薄纯棉日用卫生巾250mm*10片装",
            price : "￥12.9"
        },
        {
            image : "./images/33.jpg.webp",
            text : "金泰康马油膏皲裂膏手脚裂口手足护理护手愈裂霜脚后跟干裂足跟防裂膏 经典款【80g装】3盒",
            price : "￥39.9"
        },
        {
            image : "./images/34.jpg.webp",
            text : "贝克康力牌妇益美妇用抑菌乳膏成分有益菌益生菌生物肽胶原蛋白维生素e栓剂私护凝胶 6支每盒 2盒送 1盒（发3盒）",
            price : "￥176"
        },
        {
            image : "./images/35.jpg.webp",
            text : "金泰康马油膏皲裂膏手脚裂口手足护理护手愈裂霜脚后跟干裂足跟防裂膏 经典款【80g装】3盒",
            price : "￥39.9"
        },
        {
            image : "./images/36.jpg.webp",
            text : "高洁丝（Kotex）蜜桃小姐透气安睡裤安心裤L号6条臀围85-105cm夜安裤裤型卫生巾",
            price : "￥17.9"
        },
    ],
    [
        {
            image : "./images/21.jpg.webp",
            text : "剑南春【送三星堆茶具+3瓶水晶剑小酒】水晶剑 浓香型 低度白酒 38度 500mL 6瓶 整箱装",
            price : "￥2688"
        },
        {
            image : "./images/22.png",
            text : "奔富（Penfolds）奔富一号法国红葡萄酒 750ml 法国原瓶进口红酒 宴请聚会送礼佳选 单支",
            price : "￥288"
        },
        {
            image : "./images/23.jpg.webp",
            text : "天湖 啤酒 德式施泰克9度小麦原浆白啤酒 年货送礼 整箱 500ml*24听",
            price : "￥79"
        },
        {
            image : "./images/24.jpg.webp",
            text : "汾杏山西汾杏53度清香型白酒整箱 粮食酒口粮酒自饮送礼酒水白酒礼盒 53度 475mL 2瓶 汾杏清香型礼盒装",
            price : "￥148"
        },
    ],
]
//拓展商品列表
goodlist = [...list,...list];

/* -------------------------------------------------------------------------- */
/*                                    原始操作                                    */
/* -------------------------------------------------------------------------- */
/* -------------------------------- 初始化Tab颜色 -------------------------------- */
const initTab = ()=>{
    tab_active = 0;
    tabs[tab_active].classList.add("tab_active");
}
/* ---------------------------------- 清除旧页面 --------------------------------- */
const removeView =()=>{
    // 清空子节点
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
}
/* ---------------------------------- 创建新页面 --------------------------------- */
const createView = ()=>{
    //拓展数据
    const data = [...goodlist[tab_active],...[...goodlist[tab_active]].reverse()];
    // 遍历数据，为每条数据创建对应的DOM结构
    data.forEach(item => {

        // 创建<a>元素
        const link = document.createElement('a');
        link.href = '';

        // 创建<div class="card">元素
        const card = document.createElement('div');
        card.className = 'card';

        // 创建<div class="pic_wrap">元素
        const picWrap = document.createElement('div');
        picWrap.className = 'pic_wrap';

        // 创建<img>元素
        const image = document.createElement('img');
        image.src = item.image;  
        image.alt = '';  

        // 创建<div class="goods_info">元素
        const goodsInfo = document.createElement('div');
        goodsInfo.className = 'goods_info';

        // 创建<div class="goods_title">元素
        const goodsTitle = document.createElement('div');
        goodsTitle.className = 'goods_title';
        goodsTitle.textContent = item.text;  // 设置文本内容
        
        // 创建<div class="goods_price">元素
        const goodsPrice = document.createElement('div');
        goodsPrice.setAttribute('class','goods_price');

        // 创建<div class="now_price">元素
        const now_price = document.createElement('div');
        now_price.className = 'now_price';
        now_price.textContent = item.price;

        // 创建<div class="icon">元素
        const icon = document.createElement('div');
        icon.className = 'icon';

        // 创建<i class="iconfont icon-gouwuche">元素
        const icon_i = document.createElement('i');
        icon_i.className = 'iconfont icon-gouwuche';

        //构造DOM树
        icon.appendChild(icon_i);

        goodsPrice.appendChild(now_price);
        goodsPrice.appendChild(icon);

        goodsInfo.appendChild(goodsTitle);
        goodsInfo.appendChild(goodsPrice);

        picWrap.appendChild(image);

        card.appendChild(picWrap);
        card.appendChild(goodsInfo);

        link.appendChild(card);

        container.appendChild(link);

    
    });
}

/* -------------------------------------------------------------------------- */
/*                                     功能                                     */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- 切换tab --------------------------------- */
const clickBtn = () =>{
    const leftBtn = document.querySelector(".leftBtn");
    const rightBtn = document.querySelector(".rightBtn");
    const content = document.querySelector(".content");     
    leftBtn.addEventListener("click",()=>{
        content.style.transform="translateX(0px)";
    })
    rightBtn.onclick =()=>{
        content.style.transform="translateX(-330px)";
    }
}
/* ---------------------------------- 页面响应 ---------------------------------- */
const mouseoverTab = () =>{
    for(let i = 0;i<tabs.length;i++){
        tabs[i].onmouseenter = () =>{
            tabs[tab_active].classList.remove("tab_active");
            removeView();
            tab_active = i;
            tabs[tab_active].classList.add("tab_active");
            createView();
        }
    }    
}

/* -------------------------------------------------------------------------- */
/*                                    启动函数                                    */
/* -------------------------------------------------------------------------- */
const init = ()=>{
    initTab();
    createView();
    clickBtn();
    mouseoverTab();
}

/* -------------------------------------------------------------------------- */
/*                                     执行                                     */
/* -------------------------------------------------------------------------- */
init();

