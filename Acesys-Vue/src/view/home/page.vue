<template>
  <div>
    <div id="content">
      <h2>Welcome To Ascent Technologies</h2>
      <div class="splitcontentleft">
        <div class="box">
          <h3>
            <img src="./images/lxrycyy.gif" alt="" width="184" height="124" />
          </h3>
        </div>
      </div>

      <div class="splitcontentright">
        <p>
          亚思晟商务科技有限公司（简称
          "亚思晟科技"），是由海外归国IT专业技术人士在中关村海淀留学生创业园创办成立。公司总部位于北京，在加拿大，美国，日本及国内的石家庄，长春，秦皇岛，吉林，廊坊等地设有分部。凭借着卓越的技术水平、经验丰富的管理团队，强大的资源整合能力和“诚信、开放、创新、卓越”的经营理念，亚思晟科技奠定了公司在本地和海外IT服务市场的优势地位，获得了客户的一致认可和好评，并与客户建立了长期的战略合作伙伴关系。公司立足于中国IT的现实和特点，利用国际先进成熟的技术和经验，提供高端优质的IT服务,包括软件高端培训、软件开发及维护、软件外包、软件产品研发和本地化等。
          公司具有突出的技术优势，包括：具备北美电子应用平台技术；通过北京中关村科技园高科技产品认证，公司还具有突出的人才优势，拥有美国MBA,
          纽约华尔街及加拿大证券交易中心认证管理专家；以及其它加拿大IT技术移民和海外留学人员。
        </p>

        <p><strong>Good luck with your new design!</strong></p>
      </div>
    </div>
    <div id="subcontent">
      <form name="form" method="post" action="./product/products.html">
        <div class="small box">
            <login></login>
        </div>
      </form>
      <h2>最新商品列表</h2>
      <ul class="menublock">
        <li>
          <a href="#">西药</a
          ><a href="#"
            ><img src="./images/buy.gif" width="20" height="16" border="0"
          /></a>
        </li>
        <li>
          <a href="#">生化药</a
          ><a href="#"
            ><img src="./images/buy.gif" width="20" height="16" border="0"
          /></a>
        </li>
      </ul>

      <h2>友情链接</h2>
      <ul class="menublock">
        <li>
          <a href="http://www.ascenttech.cn" target="_blank">亚思晟视频在线</a>
        </li>
        <li>
          <a href="http://www.ascenttech.com.cn/" target="_blank"
            >亚思晟公司主页</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import login from "./login.vue"
export default {
    components:{
        login
    }

};
</script>

<style>
</style>