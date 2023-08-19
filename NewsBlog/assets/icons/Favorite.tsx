import Svg, {Path, Defs, Stop, LinearGradient} from "react-native-svg"

const Favorite = ({active}:{active:boolean}) => (
<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<Path d="M20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.993L12.3529 21.1306C12.1575 21.3262 11.8405 21.3262 11.6452 21.1306L3.52101 12.993C1.41701 10.637 1.49601 7.01898 3.75701 4.75698C5.91409 2.60085 9.30286 2.42919 11.6559 4.24201C11.8581 4.39777 12.1438 4.39765 12.3459 4.24181C14.6935 2.43167 18.088 2.59821 20.243 4.75698ZM5.17201 6.17198C3.68201 7.66198 3.60701 10.047 4.98001 11.623L11.6462 18.2996C11.8415 18.4952 12.1585 18.4953 12.3538 18.2996L19.02 11.624C20.394 10.047 20.319 7.66498 18.827 6.16998C17.34 4.67998 14.946 4.60798 13.374 5.98398L9.52543 9.83347C9.33023 10.0287 9.01371 10.0288 8.81841 9.83363L8.11068 9.12641C7.91535 8.93122 7.91524 8.61463 8.11043 8.4193L10.5063 6.02179C10.547 5.98101 10.5441 5.91409 10.5 5.87698C8.92501 4.61198 6.62301 4.71998 5.17201 6.17198Z" fill={`${ active ?  '#ff3a44' : "#9d9d9d" }`}/>
</Svg>
)

export default Favorite
