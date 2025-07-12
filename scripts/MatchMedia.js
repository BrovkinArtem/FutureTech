import pxToRem from "./utils/pxToRem.js"

const MatchMedia = {
    mobile: window.matchMedia(`(window <= ${pxToRem(767.98)}rem)`)
}

export default MatchMedia