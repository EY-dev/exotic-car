<template>
    <div class="left-menu">
        <div class="navigation-button">
            <v-icon>menu</v-icon>
        </div>
        <v-divider style="margin-top: 15px"/>
        <div class="links">
            <ul class="pages-list">
                <li @click="openPage('/')">home</li>
                <li @click="openPage('/cars')">cars</li>
                <li @click="openPage('/contact')">contact</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeftMenu",
    data: () => ({
        menu: null,
    }),
    methods:{
        initClass(){
            this.menu = document.querySelector(".left-menu");
            this.menu.addEventListener("mouseover", () => {
                this.menu.classList.add("hover");
            });
        },
        openPage(page){
            this.$router.push(page).catch(()=>{});
            const menu = document.querySelector('.left-menu');
            menu.classList.remove("hover");
        }
    },
    mounted() {
        this.initClass();
    }
}
</script>

<style scoped>
.left-menu{
    position: fixed;
    height: 100%;
    width: 100%;
    clip-path: circle(2.1% at 37px 37px);
    background: rgba(255, 0, 0, 0);
    z-index: 1000;
}
.navigation-button{
    margin: 25px;
    width: 50px;
    display: flex;
}
.navigation-button i:hover{
    text-decoration:none;
    color: white;
    cursor: pointer;
}
.navigation-button i{
    text-decoration:none;
    color: rgb(255, 61, 43);
}

@media only screen and (max-width: 699px), (max-width: 900px) and (max-height: 420px){
    .left-menu{
        transition: all .5s ease-in-out;
    }
    .hover{
        background: rgba(255, 61, 43, 1);
        clip-path: circle(75%);
    }
    .pages-list{
        list-style: none;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        padding: 0;
    }
    .pages-list li{
        text-align: center;
    }
    .pages-list li:hover {
        color: rgb(255, 61, 43);
    }
    .pages-list li:hover{
        background-color: white;
        cursor: pointer;
    }
    .pages-list {
        text-decoration: none;
        color: white;
        width: 100%;
    }
}
@media only screen and (min-width: 700px) and (min-height: 500px) {
    .left-menu{
        width: 350px;
        transition: all .5s ease-in-out;
    }
    .hover{
        background: rgba(255, 61, 43, 1);
        clip-path: circle(75%);
    }
}
@media only screen and (min-width: 900px) and (min-height: 500px) {
    .navigation-button i{
        font-size: 3.4rem;
    }
    .left-menu{
        width: 350px;
        clip-path: circle(5.8% at 50px 50px);
        transition: all .5s ease-in-out;
    }
    .hover{
        background: rgba(255, 61, 43, 1);
        clip-path: circle(75%);
    }
}
</style>
