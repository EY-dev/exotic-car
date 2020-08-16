<template>
  <div class="top-menu">
    <h1>
      EY dev
    </h1>
    <ul class="pages-list">
      <li @click="openPage('/')">home</li>
      <li @click="openPage('/cars')">cars</li>
      <li @click="openPage('/contact')">contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
    methods:{
      openPage(page){
          this.$router.push(page).catch(()=>{});
      }
    }
}
</script>

<style scoped>
  .top-menu{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 900;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding-right: 25px;
    padding-left: 25px;
  }
  .pages-list{
    width: 90%;
    margin: 25px;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-family: "Roboto", sans-serif;
    display: flex;
    font-size: 2.33rem;
    min-width: 400px;
  }
  .pages-list, h1{
    flex: 1;
  }
  .navigation-button{
    margin: 25px;
  }
  .v-application li:hover, .navigation-button i:hover{
    text-decoration:none;
    color: white;
    cursor: none;
  }
  .pages-list li{
    text-decoration:none;
    color: rgb(255, 61, 43);
  }
  @media only screen and (max-width: 700px){
    .navigation-button i{
      font-size: 1.9rem;
    }
    .pages-list ul{
      font-size: 0;
    }
  }
  @media only screen and (min-width: 700px) {
    .navigation-button i{
      font-size: 1.9rem;
    }
    .pages-list ul{
      font-size: 1.33rem;
    }
  }
  @media only screen and (min-width: 900px) {
    .navigation-button i{
      font-size: 3.4rem;
    }
    .pages-list ul{
      font-size: 2.33rem;
    }
  }

</style>
