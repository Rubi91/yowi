<template>
  <div id="app">
      <Divider/>
      <Header/>
      <main class="container">
          <div v-for="(channel, key) in channels" v-bind:key="key"  itemscope itemtype="http://schema.org/TelevisionChannel">
              <Box v-bind:bgImg="channel.imgurl" v-bind:id="channel.id" v-bind:url="channel.url" v-bind:description="channel.description" />
              <Title v-bind:title="channel.channelname"/>
         </div>
       </main>
      <Footer/>

  </div>
</template>

<script>
    import Header from "./components/Header";
    import Box from "./components/Box";
    import Title from "./components/Title";
    import Divider from "./components/Divider";
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        data () {
            return {
                channels : null
            }
        },

        methods: {
            async getChannels() {
                let post = {"data":{"name":["Last Added"],"category":"live","country":"ES"},"channelid":-1,"userLang":"en-US"};
                let response = await this.$http.post("https://yowi.tv/apiv2/getMediaFront", post)
                let { media }= response.data.data
                return this.channels = media

            }
        },
        created() {
            this.getChannels()
        },

        components: {
            Header,
            Footer,
            Divider,
            Title,
            Box
        }
    }
</script>

<style>
    body {
        padding: 0;
        background-color: var(--main-bg-color);
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
}
</style>
