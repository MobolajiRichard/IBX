import { SvgXml } from "react-native-svg";


const xml = `<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33397 6.81154C6.27922 6.89367 6.25 6.99018 6.25 7.08889V10.3785C6.25 10.5679 6.143 10.741 5.97361 10.8257L4.47361 11.5757C4.14116 11.7419 3.75 11.5002 3.75 11.1285V7.08889C3.75 6.99018 3.72078 6.89367 3.66603 6.81154L0.0839748 1.43846C0.029219 1.35633 0 1.25982 0 1.16111V0.5625C0 0.286358 0.223858 0.0625 0.5 0.0625H9.5C9.77614 0.0625 10 0.286358 10 0.5625V1.16111C10 1.25982 9.97078 1.35633 9.91603 1.43846L6.33397 6.81154ZM2.43676 1.3125C2.03741 1.3125 1.79922 1.75757 2.02073 2.08985L4.58397 5.93471C4.78189 6.23158 5.21811 6.23158 5.41603 5.93471L7.97927 2.08985C8.20078 1.75757 7.96259 1.3125 7.56324 1.3125H2.43676Z" fill="#2E0505"/>
</svg>`

export default () => <SvgXml xml={xml} width="100%" height="100%"/>
