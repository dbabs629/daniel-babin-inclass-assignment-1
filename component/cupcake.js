import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default class Cupcake extends React.Component {
  render(){
   return (
    <View style={styles.cupcakeStyle}>
    <Svg style={ { width: '100%', height: '100%' } } viewBox="0 0 470 470"> 
        <Path fill="#000000" d="M337.781,317.805 C337.781,293.824 321.064,273.675 298.673,268.403 C300.878,262.651 302.019,256.518 302.019,250.247 C302.019,222.266 279.254,199.501 251.274,199.501 L196.5,199.501 L196.5,131.31 C196.5,121.661 188.649,113.81 179,113.81 L176.5,113.81 L176.5,91.31 C176.5,87.168 173.143,83.81 169,83.81 C164.857,83.81 161.5,87.168 161.5,91.31 L161.5,113.81 L159,113.81 C149.351,113.81 141.5,121.661 141.5,131.31 L141.5,199.5 L86.736,199.5 C58.755,199.5 35.99,222.265 35.99,250.246 C35.99,256.517 37.131,262.651 39.337,268.402 C16.941,273.674 0.219,293.824 0.219,317.805 C0.219,332.485 10.691,344.763 24.557,347.566 L53.3,464.293 C54.125,467.644 57.131,470 60.582,470 L277.418,470 C280.869,470 283.875,467.645 284.7,464.293 L313.443,347.565 C327.309,344.762 337.781,332.484 337.781,317.805 Z"></Path>
        <Path fill={this.props.wrapper || "#FFFFFF"} d="M66.459,455 L40.153,348.168 L79.476,348.168 L92.098,433.597 C92.649,437.323 95.851,440.002 99.508,440.002 C99.873,440.002 100.242,439.975 100.614,439.92 C104.712,439.315 107.542,435.502 106.937,431.404 L94.639,348.168 L134.176,348.168 L138.347,432.87 C138.545,436.881 141.859,440.001 145.832,440.001 C145.956,440.001 146.081,439.998 146.207,439.992 C150.344,439.788 153.532,436.269 153.329,432.132 L149.194,348.169 L188.804,348.169 L184.669,432.132 C184.466,436.269 187.654,439.788 191.791,439.992 C191.917,439.998 192.042,440.001 192.166,440.001 C196.139,440.001 199.453,436.881 199.651,432.87 L203.822,348.168 L243.359,348.168 L231.062,431.404 C230.458,435.502 233.289,439.314 237.386,439.92 C237.757,439.975 238.126,440.002 238.491,440.002 C242.147,440.002 245.35,437.323 245.901,433.597 L258.522,348.168 L297.845,348.168 L271.541,455 L66.459,455 Z"></Path>
        <Path fill={this.props.frosting || "#FFFFFF"} d="M47.7666016,248.246 C47.7666016,228.536 70.026,212.5 89.736,212.5 L254.273,212.5 C273.983,212.5 290.018,228.536 290.018,248.246 C290.018,254.167 288.553,259.903 285.797,265.057 L83.97,265.057 C63.97,265.057 51.9022005,265.057 47.7666016,265.057 C47.7666016,265.057 47.7666016,255.453 47.7666016,248.246 Z"></Path>
        <Path fill={this.props.base || "#FFFFFF"} d="M30.582,333.168 C22.11,333.168 15.219,326.276 15.219,317.805 C15.219,303.063581 17.8127049,287.517036 30.582,282.057 C34.8867449,280.21633 45.9999146,282.057 50.97,282.057 C53.749,282.057 42.8515625,282.057 80.97,282.057 L287.04,282.057 C306.748,282.057 322.781,298.094 322.781,317.805 C322.781,326.276 315.89,333.168 307.418,333.168 L30.582,333.168 Z"></Path>
        <Path fill={this.props.candle || "#FFFFFF"} d="M156.5,131.309 C156.5,129.954 157.645,128.809 159,128.809 L179,128.809 C180.355,128.809 181.5,129.954 181.5,131.309 L181.5,199.5 L156.5,199.5 L156.5,131.309 Z"></Path>
        <Path fill={this.props.flame || "#FFFFFF"} d="M139.003,95.547 C140.78,95.547 142.565,94.919 143.995,93.642 C147.085,90.883 147.353,86.142 144.595,83.052 C139.242,77.057 136.295,69.342 136.295,61.326 C136.295,43.762 149.594,25.426 169,15.774 C188.407,25.425 201.706,43.761 201.706,61.326 C201.706,69.342 198.758,77.057 193.405,83.052 C190.646,86.141 190.915,90.883 194.005,93.641 C197.096,96.401 201.837,96.131 204.595,93.042 C212.405,84.295 216.706,73.031 216.706,61.326 C216.706,37.091 198.323,12.131 172.004,0.627 C170.088,-0.21 167.912,-0.209 165.996,0.627 C139.677,12.13 121.295,37.09 121.295,61.325 C121.295,73.031 125.596,84.294 133.405,93.041 C134.887,94.702 136.94,95.548 139.003,95.547 Z"></Path>
    </Svg>
</View>
)
}
}

const styles = StyleSheet.create({
cupcakeStyle: {
padding: 20,
width: 100,
height: 100
}
});