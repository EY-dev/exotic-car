<template>
  <div class="contact">
    <div class="map-box"><div class="img"/></div>
    <v-row>
      <v-col>
        <div class="information">
          <my-address/>
        </div>
      </v-col>
      <v-col class="mail-form">
        <email-form/>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import EmailForm from "@/components/EmailForm";
import MyAddress from "@/components/Address";
export default {
  name: "Contact",
  props: ['windowH'],
  components: {MyAddress, EmailForm}
}
</script>

<style scoped>
  .contact{
    width: 100%;
    height: 100%;
  }
  .map-box{
    width: 100%;
    height: 300px;
    background: #393939;
  }
  .img{
    width: 100%;
    max-width: 2000px;
    height: 300px;
    background: url("/img/snazzy-image.jpg");
    position: absolute;
    left: 100%;
    transform: translate(-100%, 0);
  }
  .information{
    margin: 25px;
    color: white;
  }
  .mail-form .my-button{
    z-index: 6;
  }
  @media only screen and (max-width: 699px), (max-width: 900px) and (max-height: 420px){
    .col{
      flex-basis: auto;
    }
  }


</style>
