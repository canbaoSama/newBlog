<template>
    <div :style="{ 'background-image': `url(https://s2.loli.net/2022/06/13/${bannerBg}.jpg)` }" class="banner-wrap">
        <img alt class="touxiang" src="/img/dog.png" />
        <div class="banner-des">
            <h1>记录生活 记录美</h1>
            <p>时间长河 川流不息 | 驻足回首 亦忆往昔 | 望白头 观沧海 叹尽年少风云</p>
        </div>
    </div>

    <main class="content-wrap">
        <ArticleList />


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
            <!-- 
            <div class="card-wrap card-love">
                <div class="avatar-info">
                    <img src="https://s2.loli.net/2022/06/23/M1P7YozxsNnklfD.jpg" />
                    <i class="shni shn-heart-fill"></i>
                </div>
                <p>
                    {{ loveInfo.daysNum }} 天 {{ loveInfo.hoursNum }} 时
                    {{ loveInfo.minutesNum }} 分 {{ loveInfo.secondsNum }} 秒
                </p>
            </div>

            <div class="card-wrap card-carousel">
                <el-carousel :interval="10000" arrow="always" direction="vertical" trigger="click">
                    <el-carousel-item :key="item.title" v-for="item in carouselInfo">
                        <div :style="{
                            'background-image': `url(${item.bg})`,
                            'background-position': 'center center',
                            'background-size': 'cover',
                        }" class="card-carousel-item">
                            <div>
                                <h2>{{ item.title }}</h2>
                                <p>{{ item.content }}</p>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>

            <div class="card-wrap card-tag">
                <base-tag :data="item" :key="'tag-' + index + item.name" @click="tagClick(item.name)"
                    style="margin-right: 10px; margin-top: 10px; cursor: pointer"
                    v-for="(item, index) in blogInfo.tag" />
            </div> -->
        </aside>
    </main>
</template>
<script setup>
import ArticleList from '../components/ArticleList.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const routerLink = (url) => {
    router.push(url);
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
</script>
<style lang="scss" scoped>
.home-page {
    background: #f4f4f4;

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
    }

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
        }
    }
}

@media screen and (orientation: portrait) and (max-width: 720px) {
    .index-wrap {
        .banner-wrap {
            img {
                display: none;
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
</style>
