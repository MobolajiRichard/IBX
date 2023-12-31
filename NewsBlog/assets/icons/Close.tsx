import { SvgXml } from "react-native-svg";

const xml = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 13L7.00001 7M7.00001 7L1.00002 1M7.00001 7L13 1M7.00001 7L1 13" stroke="#202663" stroke-linecap="round"/>
</svg>`

export default () => <SvgXml xml={xml} width="100%" height="100%"/>
