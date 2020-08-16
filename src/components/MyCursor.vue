<template>
  <div class="cursor"/>
</template>

<script>
export default {
  name: "MyCursor",
  data: () => ({
    mouseCursor: null,
    navLinks: null,
    images:null,
    text: null
  }),
  methods:{
    initCursor(){
      this.mouseCursor = document.querySelector(".cursor");
      this.navLinks = document.querySelectorAll(".pages-list li");
      this.buttons = document.querySelectorAll(".my-button");
      this.images = document.querySelectorAll(".img")
      this.text = document.querySelectorAll(".text")
      window.addEventListener('mousemove', this.getCords);
      this.navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
          this.mouseCursor.classList.add("link-grow");
        });
        link.addEventListener("mouseleave", () => {
          this.mouseCursor.classList.remove("link-grow");
        })
      })
      this.buttons.forEach(button => {
        button.classList.add('top-index');
        button.addEventListener("mouseover", () => {
          this.mouseCursor.classList.add("link-grow");
        });
        button.addEventListener("mouseleave", () => {
          this.mouseCursor.classList.remove("link-grow");
        });
      })
      this.text.forEach(text => {
        text.addEventListener("mouseover", () => {
          this.mouseCursor.classList.add("text-decoration");
        });
        text.addEventListener("mouseleave", () => {
          this.mouseCursor.classList.remove("text-decoration");
        })
      })
    },
    getCords(e){
      this.mouseCursor.style.top = e.pageY + 'px';
      this.mouseCursor.style.left = e.pageX + 'px';
    }
  },
  mounted() {
    this.initCursor();
    this.$nextTick(() => {window.addEventListener('resize', this.initCursor);
    });
  }
}
</script>

<style scoped>
  .cursor{
    width: 3rem;
    height: 3rem;
    border: 2px solid rgb(255, 61, 43);
    border-radius: 50%;
    position: absolute;
    content: "";
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 5;
    transition: all 0.3s ease;
    transition-property: background, transform;
    transform-origin: 100% 100%;
    backdrop-filter: grayscale();
  }
  .link-grow{
    transform: scale(2);
    background: rgb(255, 61, 43);
  }
  .text-decoration{
    background: rgba(0,0,0,0.5);
  }
  .top-index{
    z-index: 6;
  }
</style>
