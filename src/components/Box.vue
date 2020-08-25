<template>
    <div  class="container" >
        <video-player  ref="videoPlayer" :src="url"  width="352" height="198"  class="vjs-custom-skin"
                       :options="playerOptions"
                       @error="videoLoadError()"
    />
        <div v-if="description" class="description-container"><p class="description">{{description}}</p></div>
        <span itemprop="identifier"  hidden>{{id}}</span>
</div>
</template>

<script>
    import {videoPlayer} from 'vue-videojs7'
    export default {
        components: {
            videoPlayer
        },
        name: "Box",
        data () {
            return {
                hasError: false,
                playerOptions: {
                    autoplay: false,
                    controls: true,
                    controlBar: {
                        timeDivider: false,
                        durationDisplay: false
                    },
                    poster: this.bgImg
                }

            };
        },
        props: {
            id: String,
            url: String,
            bgImg: String,
            description: String
        },
        computed: {
            player () {
                return this.$refs.videoPlayer.player
            }
        },
        methods: {
            videoLoadError () {
                console.warn('Error loading url.')
            },
            playVideo: function (source) {
                const video = {
                    withCredentials: false,
                    type: 'application/x-mpegurl',
                    src: source
                }
                this.player.src(video)
                this.player.load()
            }
        },
        mounted () {
            const src = this.url
            this.playVideo(src)
        },
    }
</script>



<style scoped>
    .container {
        position: relative;
        margin: 10px 10px 5px;
        background-size: cover;
        width: var(--box-width);
        height: var(--box-height);
        transition: 0.6s all ease;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-color: var(--main-bg-color);
    }
    .description-container {
        bottom: 0;
        opacity: 0;
        width: 100%;
        height: 50%;
        display: flex;
        overflow: scroll;
        position: absolute;
        margin-bottom: 30px;

    }
    .description {
        opacity: 0.6;
        padding: 10px;
        border-width: 0;
        align-self: end;
        text-align: left;
        margin-top: auto;
        font-size: 0.8rem;
        color: var(--text-color);
        background-color: var(--black);
    }
    .description-container:hover {
        opacity: 1;
        transition: opacity .2s ease-out;
        -moz-transition: opacity .2s ease-out;
        -webkit-transition: opacity .2s ease-out;
        -o-transition: opacity .2s ease-out;
    }
    .container:hover {
        border-width: 0 4px;
        border-style: solid;
        transform: scale(1.1);
        border-color: var(--main-bg-color);
        transition: transform .5s, color .9s, opacity .9s ease;
    }
    .vjs-custom-skin {
        height: 100%;
    }
    .vjs-custom-skin /deep/ .video-js {
        width: var(--box-width);
        height: var(--box-height);
    }
</style>
