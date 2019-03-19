<template>
  <div>
    <blog-header></blog-header>
    <hr/>
    <div>
      <div id="menu">
        <ul>
          <li><router-link  to="/menu01">菜单01</router-link></li>
          <li><router-link  to="/menu02">菜单02</router-link></li>
          <li><router-link  to="/menu03">菜单03</router-link></li>
          <li><router-link  to="/menu04">菜单04</router-link></li>
          </ul>
      </div>
      <hr/>
      <div>
        页面内容
        <router-view/>
      </div>
    </div>
    <hr/>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import blogHeader from '@/components/common/BlogHeader.vue'
import blogFooter from '@/components/common/BlogFooter.vue'

export default {
  name: 'BlogIndex',
  // blogHeader/blogFooter组件给申明到components里面然后在template里面使用
  components: { blogHeader, blogFooter }
}

</script>
