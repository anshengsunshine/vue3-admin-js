<template>
  <div class="innerfooter">
    <div class="footer-content">
      <div class="footer-content-left">
        <ul class="clearfix">
          <li>
            <div>关于我们</div>
            <ul class="ul-child-list aboutus">
              <li class="information-li">
                业务咨询
                <div class="service-pop">
                  <img
                    class="threems-service-logo"
                    src="@/assets/images/kf.png"
                    alt="咨询"
                  />
                </div>
              </li>
              <li>
                <a href="https://zhiweidata.com/aboutus" target="_blank">知微官网</a>
              </li>
              <li><a target="_blank" href="/sitemap">网站地图</a></li>
            </ul>
          </li>
          <li>
            <div>热门产品</div>
            <ul class="ul-child-list friendLink">
              <li>
                <a href="https://trends.zhiweidata.com/" target="_blank">知微舆论场</a>
              </li>
              <li>
                <a href="https://brandkbs.zhiweidata.com/Login" target="_blank"
                  >知微品见</a
                >
              </li>
              <li>
                <a href="https://crisis.zhiweidata.com/" target="_blank">危机案例库</a>
              </li>
              <li><a href="https://ef.zhiweidata.com/" target="_blank">知微事见</a></li>
            </ul>
          </li>
          <li>
            <div>舆情洞察</div>
            <ul class="ul-child-list">
              <li><a href="/hotlist/weibo">热点榜</a></li>
              <li><a href="/event-mechanism">事件榜</a></li>
              <li><a href="/channellist">渠道榜</a></li>
            </ul>
          </li>
          <li>
            <div>舆情服务</div>
            <ul class="ul-child-list services">
              <li><a href="/data-gathering/">数据采集</a></li>
              <li><a href="/supervise/">舆情监测</a></li>
              <li><a href="/dataanalysis">舆情分析</a></li>
              <li><a href="/datayp">舆情研判</a></li>
            </ul>
          </li>
          <li>
            <div>知微研究院</div>
            <ul class="ul-child-list products">
              <li><a href="/yuqing/crisis">舆情解读</a></li>
              <li><a href="/report/marketing">研究报告</a></li>
              <li>
                <a href="http://eventgraph.zhiweidata.com" target="_blank">事件图谱</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="threems-element qrcode">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <p>关注官方公众号获取更多资讯</p>
        </div>
      </div>
      <div class="friendLink-box">
        <label>友情链接：</label>
        <div class="clearfix friendLinkList">
          <a
            href="https://baijiahao.baidu.com/u?app_id=1624088710361201&amp;fr=bjharticle"
            target="_blank"
            >百度</a
          ><a href="https://www.thepaper.cn/user_3357077" target="_blank">澎湃新闻</a
          ><a href="https://www.zhihu.com/people/zhi-wei-69-87" target="_blank">知乎</a
          ><a href="https://new.qq.com/omn/author/5503530" target="_blank">腾讯新闻</a
          ><a href="https://dy.163.com/v2/media/T1563863481563.html" target="_blank"
            >网易</a
          ><a href="https://www.bbtnews.com.cn/" target="_blank">北京商报</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom-info">
      <div class="copyright">
        <div>©2012-2020 zhiweidata.com</div>
        <div>
          <a href="https://beian.miit.gov.cn" target="_blank"
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAEuElEQVQ4T32UW0wUdxTGvzM7F/YKC25AQbGtN4TVIEq0gaRWY6sP9mKtt9ZqY6Jpa7RC6kONt9TUBmgxfahNtVHjJfjQRh9ab8RYaotSoqCgpbQYXFwRZXGXnb3M5TS7CCUpOk8zc875zXfm+59DeMYV+r7Uo5OwvMXvWiaAxbwxoRpJFo87VtZ2P62MRgoED899zReQVvzenrHwfGtmSlfAKifyxrgjsfl5D6IlEx+dy3ZHTzg7Lp2inTCHM/4H7D3yUsH+2vFXzjRnWRXJoNnPPUReVghW2UDHQzt++cuD3rDCCwq6+zcvuFPqePdi0zOBHd/Mq153cOaHuRkhccv8NmTYDWgaIaFDVEzohoCDl3NR154ZP/R+w3fjPqj9aEQgHytx3w0q5RU/T9p0/7Fs//yNmxDDUagn2mHjhyBihPtTYV0xAUqOA5/9NBkWkfq3Lmz7OjtdrKS3z/YmwEMtBw7N27Xq2xmfhKJiyobSNpS+0IPwvibYU4NQJgFgINoExPpSIJcVoVN14dNT05Fq02JH11/bl7a6dusQsKuqYFlaVmb+KxWzthERHXjnKoR/AsD+Jlg8DEsGAJ1hxgh6F2AunwpbcTrWHpmNuCEY58qvfv3I/6A+u+xmDfkqvHNIoN8UW0rPuuOl1kf9suPImjpEG/ognrgFiAxLOkAWwOgFOEbQFk+E42UPNhwvhiLh8cFVv3KkP5LGJr9I/i+nvWcyDkmyFNx9YY7S1OlUvlr6BzLCIeh7G9BblA21aHTyv9vru+Bu9kPbOBPIcWD9sWIU5gbVbfPrLVpMUwTCGvJVeq8T0XQA0ZpbM8M/NmZmLCnsxJuFnehpV9Er2CE7LdANgFUdrriKrCk2nG4ai5rGXKyY4w++PuGalZklZlynrqppPGh7W3C8b/vp/BxFNLAj/zJyrSFEAzqipgnBMCC5rLDKjL9jbuxpmY2YbsHeJS3+8dY7Ay2AmbqqvLcAmpJ4VGy2wNqjJY4+VZI2WS5iltkBwWODqRAQNSAwwehRcVmejP1aCVKtunp4dZ0ZDauOJ8DbdLeioEIQhPKk5YTo+U6vfuDSOMcy5RoWUQsMjSHBAIERV1Jg0TScEgvxQ8SLNSW+7kXPN6ebJktJoGlWJBQ2AjRjsG3Z7gxsPFns6gqkWJyIQIcl8SEwJw4tQzZ19Al2eJzx8P6V9XEtHHIP1jJzA/mqvEsJdHLwJQF6D+eE6toz0wCmM82jsLrUD29OP/adHQtBALr7FG3H4tbgKOFeGjNbhmoN463kpPgqC6qJhE1DAYEibk+GJkiiK6oJsMoDC8UY3CumFgl091rY5OQWStoBrs4pu/Hx0Oj5Kr3bCNgFIiGRIAikuTzpqiRLqcOHX49r6uOegGyapvjEWJOJtueUNe/5b/Sqp02GzluZ8CqBnhyB5KDrdrczbHXYXAnLImFVDQdCMjMPwAaU+YlxBiJ9kb25+c+kwvsVeQWGIF0BYBuuZvBelMX+BFCPa/aR4gBUgfTi0VtaW4ZavlfpLWLwDpAw72ngEWAqmC8QsHtM+Y3GoZaHJ17cCXGqMz/fgFDMwCwARcyYSoAB4DYDjQSzQWS62hq+2Tp3J/Th9f8CUeYBBlFmW8AAAAAASUVORK5CYII="
              alt="备案"
            />京ICP备13015804号-3</a
          >
        </div>
      </div>
      <div class="companyinfo">
        <div class="box">
          <div>联系电话：400-811-3709</div>
          <div>网址：www.zhiweidata.com</div>
        </div>
        <div class="box">
          <div>微博：@社会网络与数据挖掘</div>
          <div>邮箱：zhiwei@zhiweidata.com</div>
        </div>
        <div class="box">
          <div>微信客服号：zhiwei_data</div>
          <div>QQ客服号：2406163039</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.innerfooter {
  width: 1200px;
  margin: 0px auto;
  padding: 21px 0px 16px;
  .information-li {
    position: relative;
    cursor: pointer;
    .service-pop {
      visibility: hidden;
      height: 0px;
      position: absolute;
      left: 0px;
      right: 0px;
      display: -webkit-flex;
      justify-content: center;
      top: -83px;
    }
    img {
      width: 83px;
      height: 83px;
    }
  }
  .information-li:hover {
    .service-pop {
      visibility: visible;
    }
  }

  .footer-content {
    border-bottom: 1px solid rgba(204, 204, 204, 0.18);
    .footer-content-left {
      display: -webkit-flex;
      justify-content: space-between;
      ul > li {
        margin-right: 56px;
        float: left;
        div {
          color: rgb(255, 255, 255);
          font-size: 16px;
        }
        .ul-child-list {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          li {
            margin-bottom: 30px;
            color: rgb(157, 166, 172);
            font-size: 14px;
            font-weight: 400;
            a {
              color: rgb(157, 166, 172);
            }
          }
        }
      }
      div.threems-element {
        width: 178px;
        height: 178px;
        color: rgb(157, 166, 172);
        p {
          font-size: 13px;
          text-align: center;
          margin-top: 10px;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
      }
    }
  }
  .friendLink-box {
    display: -webkit-flex;
    margin-bottom: 15px;
    font-size: 14px;
    a {
      float: left;
      color: rgba(157, 166, 172, 0.52);
      padding-left: 13px;
      margin-bottom: 5px;
      cursor: pointer;
    }
    a::after {
      content: "|";
      margin-left: 13px;
    }
    label {
      color: rgb(157, 166, 172);
    }
    .friendLinkList {
      width: calc(100% - 100px);
    }
  }
  .footer-bottom-info {
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 14px;

    div {
      margin-right: 60px;
    }
    div:last-child {
      margin-right: 0px;
    }

    .copyright {
      color: rgba(255, 255, 255, 0.4);
      div {
        margin-bottom: 8px;
      }
      div:last-child {
        margin-bottom: 0px;
      }
      a {
        color: inherit;
      }
      img {
        display: inline-block;
        vertical-align: middle;
        margin-right: 12px;
      }
    }

    .companyinfo {
      display: -webkit-flex;
      color: rgba(255, 255, 255, 0.4);
      div.box {
        div {
          margin-bottom: 8px;
        }
        div:last-child {
          margin-bottom: 0px;
        }
      }
      div.box:last-child {
        div {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
