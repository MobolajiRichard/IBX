import { SvgXml } from "react-native-svg";

const xml = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="url(#paint0_linear_69_272)"/>
<path d="M35.243 20.757C36.705 22.223 37.255 24.25 36.893 26.137C37.461 26.297 37.999 26.6 38.447 27.045C39.851 28.439 39.851 30.699 38.447 32.092L33 37.5L29.978 34.5L27 37.485L18.52 28.993C16.417 26.637 16.496 23.019 18.757 20.757C21.022 18.493 24.645 18.417 27.001 20.529C29.35 18.42 32.98 18.49 35.243 20.757ZM28.962 28.465C28.346 29.076 28.346 30.062 28.962 30.673L33 34.682L37.038 30.673C37.654 30.062 37.654 29.076 37.038 28.465C36.414 27.845 35.396 27.845 34.77 28.467L32.998 30.221L31.591 28.825L31.228 28.465C30.604 27.845 29.586 27.845 28.962 28.465ZM20.172 22.172C18.682 23.662 18.607 26.047 19.98 27.623L27 34.654L28.559 33.092L27.553 32.092C26.149 30.699 26.149 28.439 27.553 27.045C28.957 25.652 31.233 25.652 32.637 27.045L33 27.405L33.363 27.045C33.788 26.624 34.293 26.33 34.828 26.163C35.244 24.796 34.906 23.251 33.827 22.17C32.327 20.668 29.907 20.607 28.337 22.017L27.002 23.215L25.666 22.018C24.091 20.606 21.676 20.668 20.172 22.172Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_69_272" x1="0" y1="0" x2="85.2274" y2="48.5191" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF3A44"/>
<stop offset="1" stop-color="#FF8086"/>
</linearGradient>
</defs>
</svg>`

export default () => <SvgXml xml={xml}/>

