<template>
    <div class="address">
        <header class="entry-subheader">
            <v-icon class="icon-style">phone</v-icon>
            <h1 class="entry-subtitle">contacts</h1>
        </header>
        <div style="width: 100%; height: 250px; margin-top: 25px"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=01%2048th%20St,%20Union%20City,%20NJ%2007087+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
        <ul>
            <li><span>Address:</span><span class="description"> 301 48th St, Union City, NJ 07087</span></li>
            <li><span>Phone:</span><span class="description"> (732) 555-9119</span></li>
            <li><span>Work. hours:</span><span class="description">  10am - 9pm</span></li>
        </ul>
    </div>
</template>

<script>
export default {
	name: "MyAddress"
}
</script>

<style scoped>
    .entry-subheader{
      margin-top: 40px;
      display: flex;
    }
    .entry-subtitle{
      font-weight: 900;
      color: #ffffff;
      text-transform: lowercase;
      margin-bottom: 0;
      margin-left: 15px;
    }

    .icon-style {
      font-size: 2.2rem;
      color: rgb(255, 61, 43);
    }
    li{
        list-style: none;
        margin-bottom: 15px;
    }
    ul{
        padding: 25px 0 0;
        font-size: 1.5rem;
        font-family: "Roboto", sans-serif;
    }
    li span{
        color: #acaaaa;
    }
    .description{
        color: white;
        font-family: 'Source Code Pro', monospace;
    }
    .description:hover{
        color: rgb(255, 61, 43);
    }
</style>
