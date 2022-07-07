<template>
    <div :style="{ 'background-image': `url(https://s2.loli.net/2022/06/13/${bannerBg}.jpg)` }" class="banner-wrap">
        <img alt class="touxiang" src="/img/dog.png" />
        <div class="banner-des">
            <h1>记录生活 记录美</h1>
            <p>时间长河 川流不息 | 驻足回首 亦忆往昔 | 望白头 观沧海 叹尽年少风云</p>
        </div>
    </div>

    <main class="content-wrap">
        <ArticleListLoad />


        <aside class="right-aside">
            <div class="card-wrap card-info">
                <div class="avatar-info">
                    <a-avatar :size="80" src="https://s2.loli.net/2022/06/23/RmpxzgfeTXL9K7k.jpg" />
                    <p>有机猴灬残暴Sama</p>
                </div>
                <div class="data-info">
                    <div @click="routerLink('/components')" class="data-info-item">
                        <p class="data-info-item-title">文章</p>
                        <p class="data-info-item-data">4</p>
                    </div>
                    <div class="data-info-item">
                        <p class="data-info-item-title">标签</p>
                        <p class="data-info-item-data">11</p>
                    </div>
                </div>
                <div @click="addBookMark" class="add-bookmark">
                    <i class="el-icon-s-flag"></i>
                    加入书签
                </div>
                <div class="social-info">
                    <a href="https://github.com/canbaoSama">
                        <i class="iconfont icon-github"></i>
                    </a>
                    <i @click="openAlipay" class="iconfont icon-imagezhifubao"></i>
                    <i @click="openQQ" class="iconfont icon-QQ"></i>
                    <i @click="openWechat" class="iconfont icon-weixin"></i>
                    <a href="mailto:2430980019@qq.com">
                        <i class="iconfont icon-youxiang"></i>
                    </a>
                </div>
            </div>

            <div class="card-wrap card-love">
                <div class="avatar-info">
                    <a-image width="100%" src="https://s2.loli.net/2022/06/23/M1P7YozxsNnklfD.jpg" />
                    <i class="iconfont icon-keaide"></i>
                </div>
                <p>{{ loveInfo.daysNum }} 天 {{ loveInfo.hoursNum }} 时 {{ loveInfo.minutesNum }} 分 {{ loveInfo.secondsNum
                }} 秒 </p>
            </div>

            <div class="card-wrap card-carousel">
                <a-carousel dotPosition="right" autoplay>
                    <div v-for="item in carouselInfo" :key="item.title" class="card-carousel-item">
                        <a-image :height="300" :src="item.bg" />
                        <div class="carousel-des">
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.content }}</p>
                        </div>
                    </div>
                </a-carousel>
            </div>

            <Tag class="card-wrap card-tag" />
        </aside>
    </main>

    <footer class="footer-wrap">
        <div class="copyright" data-v-2a4e91bd="">©2022 - 2122 By canbaoSama</div>
        <div class="framework-info">
            Power by&nbsp;&nbsp;<a href="https://vuepress.vuejs.org/zh/" rel="noopener" target="_blank"
                data-v-2a4e91bd="">Vuepress</a>
        </div>
    </footer>
</template>
<script setup>
import ArticleListLoad from '../components/ArticleListLoad.vue';
import Tag from '../components/Tag.vue';
import { useRouter } from 'vue-router';
import { onUnmounted, ref, h } from 'vue';
import blogJson from '../../blogJson.json';
import { notification } from 'ant-design-vue';

const tag = ref(blogJson.tag);

const router = useRouter();
const routerLink = (url, query = {}) => {
    router.push({ path: url, query });
}

// banner 背景图片
const bgList = [
    "2Ix4BH1apFwhXqk",
    "AuHQyJYdVvzNSqT",
    "CNRGFQvOasBDf7Z",
    "yzuG2J1TCv3XfS6",
    "rMNdqIjAXGEsopY",
];
const bannerBg = bgList[Math.floor(Math.random() * 5)];

// 计算恋爱时间
const loveInfo = ref({
    deadline: "2022/06/18",
    daysNum: "∞",
    hoursNum: "∞",
    minutesNum: "∞",
    secondsNum: "∞",
});
const loveTime = () => {
    const countDownDate = Date.parse(new Date(loveInfo.value.deadline));
    const x = setInterval(function () {
        let now = Date.parse(new Date());
        var diff = now - countDownDate;
        loveInfo.value.daysNum = Math.floor(diff / (1000 * 60 * 60 * 24));
        loveInfo.value.hoursNum = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        loveInfo.value.minutesNum = Math.floor(
            (diff % (1000 * 60 * 60)) / (1000 * 60)
        );
        loveInfo.value.secondsNum = Math.floor((diff % (1000 * 60)) / 1000);
    }, 1000);

    onUnmounted(() => {
        clearInterval(x);
    })
};
loveTime();

// 走马灯
const carouselInfo = [
    {
        title: "日记",
        content: "做一个热爱生活的人，把生活记录下来。",
        bg: "https://s2.loli.net/2022/06/23/XNFL8Q4Ah1nuUgx.jpg",
    },
    {
        title: "旅行",
        content:
            "我认为旅行是从大自然学习的最佳方式。走遍世界，这是我最大的梦想。",
        bg: "https://s2.loli.net/2022/06/23/4mOBjYVoGzcJkUN.jpg",
    },
    {
        title: "好好打代码",
        content: "每天都要学习！",
        bg: "https://s2.loli.net/2022/06/23/DdJVaUg36snwi9I.jpg",
    },
];

// 点击跳转标签页
const tagClick = (name) => {
    routerLink('blog/Tag.html', { tag: name });
};

const addBookMark = () => {
    notification.open({
        message: '按 CTRL + D 将本页加入书签',
        placement: 'bottomLeft',
        duration: 2,
    });
};
// 打开QQ 
const openQQ = () => {
    notification.open({
        message: 'QQ号：2430980019',
        placement: 'bottomLeft',
        duration: 0,
    });
};
// 打开微信
const openWechat = () => {
    notification.open({
        message: '微信号：yang2430980019',
        placement: 'bottomLeft',
        duration: 0,
    });
};
// 打开支付宝
const openAlipay = () => {
    notification.open({
        message: '打赏一下吧~',
        description: () => h('img', { src: 'https://s2.loli.net/2022/06/28/QyEhUkbB7oCJ5x9.jpg', width: 200, style: { 'margin-top': '16px' } }),
        placement: 'bottomLeft',
        duration: 0,
        style: {
            width: 'auto'
        }
    });
};

</script>
<style lang="scss" scoped>
.home-page {
    .banner-wrap {
        width: 100%;
        height: 600px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 175px 0;

        .banner-des {
            text-align: center;
            letter-spacing: 5px;
            text-indent: 5px;
            width: 100%;

            h1 {
                font-size: 2rem;
                color: #d7d7d7;
            }

            p {
                margin-top: 8px;
                font-size: 1.2rem;
                color: #d7d7d7;
                padding: 0 16px;
            }
        }

        img {
            width: 7rem;
            margin-right: 40px;
            border-radius: 50%;
            padding: 10px;
            background: #fff;
        }
    }

    .content-wrap {
        width: 1200px;
        margin: 0 auto;
        padding: 30px 24px;
        display: flex;

        .right-aside {
            width: 25%;
            margin-left: 15px;

            .card-wrap {
                padding: 1rem 1.2rem;
                border-radius: 8px;
                background: #fff;
                transition: all 0.3s;

                &:not(:first-child) {
                    margin-top: 20px;
                }

                &.card-info {
                    color: #333;

                    .avatar-info {
                        text-align: center;
                        font-weight: 600;
                    }

                    .data-info {
                        display: flex;
                        padding: 0.7rem 0;
                        text-align: center;

                        .data-info-item {
                            cursor: pointer;
                            flex: 1;

                            .data-info-item-data {
                                font-size: 1rem;
                                font-weight: 600;
                            }
                        }
                    }

                    .add-bookmark {
                        cursor: pointer;
                        background-color: #333;
                        color: #fff;
                        line-height: 2rem;
                        text-align: center;
                        font-size: 14px;
                        transition: all 0.3s ease;

                        i {
                            position: relative;
                            top: 1px;
                        }

                        &:hover {
                            background: #3eaf7c;
                        }
                    }

                    .social-info {
                        padding: 1rem 1.5rem;
                        display: flex;
                        justify-content: space-between;

                        i {
                            cursor: pointer;
                            transition: all 0.3s ease;
                            font-size: 26px;
                            color: #333;

                            &:hover {
                                color: #3eaf7c;
                            }
                        }
                    }
                }

                &.card-love {
                    text-align: center;

                    .avatar-info {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        flex-wrap: wrap;

                        img {
                            width: 100%;
                            display: block;
                        }

                        i {
                            display: block;
                            margin-top: 10px;
                            color: #f56c6c;
                            font-size: 18px;
                            animation: xintiao 1.33s ease-in-out infinite;
                        }
                    }
                }


                &.card-carousel {
                    padding: 0 0;
                    overflow: hidden;

                    .card-carousel-item {
                        position: relative;
                        width: 100%;
                        height: 300px;

                        .carousel-des {
                            position: absolute;
                            bottom: 0;
                            padding: 2rem 1.4rem;

                            h2 {
                                color: #fff;
                                font-size: 26px;
                                padding-bottom: 0.5rem;
                            }

                            p {
                                color: #fff;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }

    .footer-wrap {
        background: #000;
        padding: 24px;
        color: white;

        .copyright,
        .framework-info {
            text-align: center;
        }
    }
}

@media screen and (orientation: portrait) and (max-width: 720px) {
    .home-page {
        .banner-wrap {
            img {
                display: none;
            }
        }

        .content-wrap {
            display: inline-flex;
            flex-direction: column;
            width: 100%;
            padding-top: 0;

            .article-content {
                order: 1;
            }

            .right-aside {
                order: -1;
            }

            .article-content,
            .right-aside {
                display: block;
                width: 100%;
                margin-left: 0;
                margin-top: 20px;
            }
        }
    }
}
</style>
<style lang="scss">
.avatar-info {
    img {
        transform: none;
        cursor: pointer;

        &:hover {
            transform: rotate(666turn);
            transition-delay: 1s;
            transition-property: all;
            transition-duration: 59s;
            transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
        }
    }
}

.home-page {
    .navbar:not(.home-navbar-scroll) {
        background: transparent;
        color: #fff;
        border: none;

        &>span {
            opacity: 0;
        }

        .navbar-item {
            .router-link-active {
                color: #fff;

                .router-link-exact-active {
                    color: #fff;
                }
            }

            .navbar-dropdown-title {
                color: #fff;
            }

            .navbar-dropdown {
                color: #000;
            }
        }

        .toggle-color-mode-button {
            color: #fff;
        }
    }
}
</style>
