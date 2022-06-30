<template>
    <div class="index-wrap">
        <div class="banner-wrap">
            <div>
                <h1>记录生活 记录美</h1>
                <p>时间长河 川流不息 | 驻足回首 亦忆往昔 | 望白头 观沧海 叹尽年少风云</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.index-wrap {
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

        >div {
            color: #fff;
            text-align: center;
            letter-spacing: 5px;
            text-indent: 5px;
            width: 100%;

            h1 {
                font-size: 2rem;
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

    >main {
        width: 1200px;
        margin: 0 auto;
        padding: 30px 24px;
        display: flex;

        main {
            width: calc(75% - 15px);

            ::v-deep {
                .el-tag--mini {
                    margin-right: 5px;
                    line-height: 16px;
                }
            }

            .card-wrap {
                .article-title {
                    font-size: 18px;
                    color: rgba(0, 0, 0, 0.87);
                    line-height: 1.5;
                    display: block;
                    margin-bottom: 4px;
                }

                .article-summary {
                    padding: 16px 0 10px;
                    color: rgba(0, 0, 0, 0.87);
                    font-size: 14px;
                    line-height: 1.375rem;
                    font-weight: 400;
                }

                .article-tag-date {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    line-height: 24px;

                    .article-date {
                        font-size: 14px;
                    }
                }
            }

            .no-more {
                text-align: center;
                font-size: 14px;
                color: #555;
                margin-top: 30px;
            }
        }

        aside {
            width: 25%;
            margin-left: 15px;
        }

        .card-wrap {
            padding: 1rem 1.2rem;
            border-radius: 8px;
            background: #fff;
            // box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.04);
            transition: all 0.3s;

            &:not(:first-child) {
                margin-top: 20px;
            }

            &.card-info {
                color: #333;

                .avatar-info {
                    text-align: center;
                    font-weight: 600;

                    img {
                        transform: none;

                        &:hover {
                            transform: rotate(666turn);
                            transition-delay: 1s;
                            transition-property: all;
                            transition-duration: 59s;
                            transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
                        }
                    }
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

                    i {
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-size: 26px;
                        margin-right: 10px;
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
                        animation: xintiao 1.33s ease-in-out infinite;
                    }

                    @keyframes xintiao {
                        0% {
                            -webkit-transform: scale(1);
                            transform: scale(1);
                        }

                        50% {
                            -webkit-transform: scale(0.8);
                            transform: scale(0.8);
                        }

                        to {
                            -webkit-transform: scale(1);
                            transform: scale(1);
                        }
                    }
                }
            }

            &.card-carousel {
                padding: 0 0;
                overflow: hidden;

                .card-carousel-item {
                    position: relative;
                    width: 100%;
                    height: 100%;

                    >div {
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

    footer {
        position: relative;
        margin-top: 1rem;
        background: rgb(0, 0, 0);

        .bg {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-attachment: local;
            background-position: bottom;
            background-size: cover;
            opacity: 0.3;
        }

        .footer-wrap {
            position: relative;
            padding: 4rem 1rem;
            color: #eee;
            text-align: center;
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

        >main {
            display: inline-flex;
            flex-direction: column;
            width: 100%;
            padding-top: 0;

            >main {
                order: 1;
            }

            >aside {
                order: -1;
            }

            >main,
            >aside {
                display: block;
                width: 100%;
                margin-left: 0;
                margin-top: 20px;
            }
        }
    }
}
</style>
