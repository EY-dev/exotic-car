<template>
  <div class="main-page">
    <div style="height: 540px">
        <div class="pic img" style="display: flex">
          <div style="width: 755px; height: 540px;" v-if="!$store.getters.isMobile"/>
          <div class="trumpet-call text">
            <div><span>GET YOUR DREAM TODAY</span></div>
          </div>
        </div>
    </div>
    <div style="width: 100%">
        <div class="description text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et sodales eros, commodo cursus velit. Proin
        volutpat magna metus, facilisis volutpat felis elementum eget. Integer hendrerit velit non arcu sagittis,
        sit amet commodo est semper.
      </div>
    </div>
    <logo :window-h="windowH"/>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  name: "Home",
  props: ['windowH'],
  components: {Logo}
}
</script>

<style scoped>
  .main-page{
    width: 100%;
    height: 100%;
    padding-top: 80px;
  }
  .trumpet-call{
    z-index: 1;
    height: 440px;
    color: white;
    text-align: center;
    font-size: 2.5rem;
    font-family: Marlett,serif;
  }
.pic{
  width: 100%;
  height: 540px;
  background: url("/img/gallardo.jpg") no-repeat;
  position: absolute;
}
  @media only screen and (max-width: 699px), (max-width: 900px) and (max-height: 420px){
    .trumpet-call{
      height: 470px;
      width: 100%;
      text-align: center;
    }
    .trumpet-call div{
      height: 370px;
      width: 320px;
      display: inline-block;
      font-size: 4rem;
      letter-spacing: 26px;
      padding-top: 50px;
      text-shadow: 4px 4px #1a1a1a;
    }
    .description{
      width: 100%;
      padding-left: 25px;
      padding-right: 25px;
      color: white;
      text-align: justify;
    }
  }
  @media only screen and (min-width: 700px) and (min-height: 500px){
    .description{
      max-width: 650px;
      padding-left: 50px;
      color: white;
      text-align: justify;
    }
    .trumpet-call{
      padding: 25px;
      text-align: center;
      width: 250px;
    }
    .trumpet-call div{
      letter-spacing: 16px;
      text-shadow: 2px 2px #1a1a1a;
    }
  }

@media only screen and (min-width: 900px) and (min-height: 500px){
  .main-page{
    padding-top: 105px;
  }
  .trumpet-call{
    height: 470px;
    text-align: center;
    float: right;
    width: 800px;
  }
  .trumpet-call div{
    height: 370px;
    width: 320px;
    display: inline-block;
    font-size: 4rem;
    letter-spacing: 26px;
    padding-top: 50px;
  }
  .description{
    max-width: 650px;
    padding-left: 50px;
    color: white;
    text-align: justify;
  }
}
</style>
