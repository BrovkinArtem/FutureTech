const rootSelector = "[data-js-video-player]"

class VideoPlayer {
    selectors = {
        root: rootSelector,
        video: '[data-js-video-player-video]',
        panel: '[data-js-video-player-panel]',
        playButton: '[data-js-video-player-play-button]'
    }

    stateClasses = {
        isAcitve: 'is-active'
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.videoElement = this.rootElement.querySelector(this.selectors.video)
        this.panelElement = this.rootElement.querySelector(this.selectors.panel)
        this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton)
        this.bindEvents()
    }

    onPlayButtonClick = () => {
        this.videoElement.play()
        this.videoElement.controls = true
        this.panelElement.classList.remove(this.stateClasses.isAcitve)
    }

    onVideoPause = () => {
        this.videoElement.controls = false
        this.panelElement.classList.add(this.stateClasses.isAcitve)
    }
 
    bindEvents() {
        this.playButtonElement.addEventListener('click', this.onPlayButtonClick)
        this.videoElement.addEventListener('pause', this.onVideoPause)
    }

}

class VideoPlayerCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new VideoPlayer(element)
        })
    }
}

export default VideoPlayerCollection