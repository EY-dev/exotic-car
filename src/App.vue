<template>
    <v-app dark>
        <v-main class="app-style" :class="{'no-cursor':!$store.getters.isMobile}">
            <loader v-if="!$store.getters.isLoaded"/>
            <div v-else class="template">
                <my-cursor v-if="!$store.getters.isMobile"/>
                <div v-else class="cursor"/>
                <v-content>
                    <top-menu v-if="!$store.getters.isMobile"/>
                    <left-menu v-else/>
                    <transition name="router-anim" appear enter-active-class="animated fadeIn delay-1s" leave-active-class="animated fadeOut">
                        <router-view :window-h="windowH"/>
                    </transition>
                </v-content>
            </div>
        </v-main>
    </v-app>
</template>

<script>

import Loader from "@/components/Loader";
import TopMenu from "@/components/TopMenu";
import LeftMenu from "@/components/LeftMenu";
import MyCursor from "@/components/MyCursor";
export default {
    name: 'App',

    components: {
        MyCursor,
        LeftMenu,
        TopMenu,
        Loader,

    },

    data: () => ({
        windowH:0,
    }),
    methods:{
        loadingStatus(){
            this.windowH = window.innerHeight + 'px';
            if (!this.$store.getters.isLoaded){
                const that = this;
                setTimeout(function () {
                    that.$store.dispatch('setLoaded', true)
                },10000)
            }
        },
        onResize() {
            this.windowH = window.innerHeight + 'px';
            if (window.innerHeight < 200 || window.innerWidth < 700){
                this.$store.dispatch('setMobile', true)
            }else{
                if (!(/Mobi|Android/i.test(navigator.userAgent)))
                    this.$store.dispatch('setMobile', false)
            }
        }
    },
    mounted() {
        this.loadingStatus();
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
        this.onResize();
    }
};
</script>
<style>
    .app-style{
        background: #030303;
        width: 100%;
        height: 100%;
    }
    .no-cursor{
        cursor: none!important;
    }

    @media only screen and (max-width: 699px), (max-width: 900px) and (max-height: 420px){

    }
    @media only screen and (min-width: 700px) and (min-height: 500px){
        input, textarea{
            cursor: none;
        }
        .my-button{
            z-index: 60;
        }
    }
</style>
