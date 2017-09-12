import React, { Component } from 'react'
// import { Icon, Statistic, Grid } from 'semantic-ui-react'

import { MonthliesAdapter } from '../../../adapters'

// helpers
// import { DateParser } from '../../helpers/DateParser'

// outputs
// import Temperatures from './Temperatures'

import Graph from './Graph'

export default class Monthly extends Component {

  constructor() {
    super()
    this.state = {

            o0705_avg_max_temp: '', o0706_avg_max_temp: '', o0705_avg_min_temp: '', o0706_avg_min_temp: '', o0705_avg_temp: '', o0706_avg_temp: '',
            o0707_avg_max_temp: '', o0708_avg_max_temp: '', o0709_avg_max_temp: '', o0710_avg_max_temp: '', o0711_avg_max_temp: '', o0712_avg_max_temp: '',
            o0801_avg_max_temp: '', o0802_avg_max_temp: '', o0803_avg_max_temp: '', o0804_avg_max_temp: '', o0805_avg_max_temp: '', o0806_avg_max_temp: '',
            o0807_avg_max_temp: '', o0808_avg_max_temp: '', o0809_avg_max_temp: '', o0810_avg_max_temp: '', o0811_avg_max_temp: '', o0812_avg_max_temp: '',
            o0901_avg_max_temp: '', o0902_avg_max_temp: '', o0903_avg_max_temp: '', o0904_avg_max_temp: '', o0905_avg_max_temp: '', o0906_avg_max_temp: '',
            o0907_avg_max_temp: '', o0908_avg_max_temp: '', o0909_avg_max_temp: '', o0910_avg_max_temp: '', o0911_avg_max_temp: '', o0912_avg_max_temp: '',
            o1001_avg_max_temp: '', o1002_avg_max_temp: '', o1003_avg_max_temp: '', o1004_avg_max_temp: '', o1005_avg_max_temp: '', o1006_avg_max_temp: '',
            o1007_avg_max_temp: '', o1008_avg_max_temp: '', o1009_avg_max_temp: '', o1010_avg_max_temp: '', o1011_avg_max_temp: '', o1012_avg_max_temp: '',
            o1101_avg_max_temp: '', o1102_avg_max_temp: '', o1103_avg_max_temp: '', o1104_avg_max_temp: '', o1105_avg_max_temp: '', o1106_avg_max_temp: '',
            o1107_avg_max_temp: '', o1108_avg_max_temp: '', o1109_avg_max_temp: '', o1110_avg_max_temp: '', o1111_avg_max_temp: '', o1112_avg_max_temp: '',
            o1201_avg_max_temp: '', o1202_avg_max_temp: '', o1203_avg_max_temp: '', o1204_avg_max_temp: '', o1205_avg_max_temp: '', o1206_avg_max_temp: '',
            o1207_avg_max_temp: '', o1208_avg_max_temp: '', o1209_avg_max_temp: '', o1210_avg_max_temp: '', o1211_avg_max_temp: '', o1212_avg_max_temp: '',
            o1301_avg_max_temp: '', o1302_avg_max_temp: '', o1303_avg_max_temp: '', o1304_avg_max_temp: '', o1305_avg_max_temp: '', o1306_avg_max_temp: '',
            o1307_avg_max_temp: '', o1308_avg_max_temp: '', o1309_avg_max_temp: '', o1310_avg_max_temp: '', o1311_avg_max_temp: '', o1312_avg_max_temp: '',
            o1401_avg_max_temp: '', o1402_avg_max_temp: '', o1403_avg_max_temp: '', o1404_avg_max_temp: '', o1405_avg_max_temp: '', o1406_avg_max_temp: '',
            o1407_avg_max_temp: '', o1408_avg_max_temp: '', o1409_avg_max_temp: '', o1410_avg_max_temp: '', o1411_avg_max_temp: '', o1412_avg_max_temp: '',
            o1501_avg_max_temp: '', o1502_avg_max_temp: '', o1503_avg_max_temp: '', o1504_avg_max_temp: '', o1505_avg_max_temp: '', o1506_avg_max_temp: '',
            o1507_avg_max_temp: '', o1508_avg_max_temp: '', o1509_avg_max_temp: '', o1510_avg_max_temp: '', o1511_avg_max_temp: '', o1512_avg_max_temp: '',
            o1601_avg_max_temp: '', o1602_avg_max_temp: '', o1603_avg_max_temp: '', o1604_avg_max_temp: '', o1605_avg_max_temp: '', o1606_avg_max_temp: '',
            o1607_avg_max_temp: '', o1608_avg_max_temp: '', o1609_avg_max_temp: '', o1610_avg_max_temp: '', o1611_avg_max_temp: '', o1612_avg_max_temp: '',
            o1701_avg_max_temp: '', o1702_avg_max_temp: '', o1703_avg_max_temp: '', o1704_avg_max_temp: '', o1705_avg_max_temp: '', o1706_avg_max_temp: '',
            o1707_avg_max_temp: '', o1708_avg_max_temp: '',

            o0707_avg_min_temp: '', o0708_avg_min_temp: '', o0709_avg_min_temp: '', o0710_avg_min_temp: '', o0711_avg_min_temp: '', o0712_avg_min_temp: '',
            o0801_avg_min_temp: '', o0802_avg_min_temp: '', o0803_avg_min_temp: '', o0804_avg_min_temp: '', o0805_avg_min_temp: '', o0806_avg_min_temp: '',
            o0807_avg_min_temp: '', o0808_avg_min_temp: '', o0809_avg_min_temp: '', o0810_avg_min_temp: '', o0811_avg_min_temp: '', o0812_avg_min_temp: '',
            o0901_avg_min_temp: '', o0902_avg_min_temp: '', o0903_avg_min_temp: '', o0904_avg_min_temp: '', o0905_avg_min_temp: '', o0906_avg_min_temp: '',
            o0907_avg_min_temp: '', o0908_avg_min_temp: '', o0909_avg_min_temp: '', o0910_avg_min_temp: '', o0911_avg_min_temp: '', o0912_avg_min_temp: '',
            o1001_avg_min_temp: '', o1002_avg_min_temp: '', o1003_avg_min_temp: '', o1004_avg_min_temp: '', o1005_avg_min_temp: '', o1006_avg_min_temp: '',
            o1007_avg_min_temp: '', o1008_avg_min_temp: '', o1009_avg_min_temp: '', o1010_avg_min_temp: '', o1011_avg_min_temp: '', o1012_avg_min_temp: '',
            o1101_avg_min_temp: '', o1102_avg_min_temp: '', o1103_avg_min_temp: '', o1104_avg_min_temp: '', o1105_avg_min_temp: '', o1106_avg_min_temp: '',
            o1107_avg_min_temp: '', o1108_avg_min_temp: '', o1109_avg_min_temp: '', o1110_avg_min_temp: '', o1111_avg_min_temp: '', o1112_avg_min_temp: '',
            o1201_avg_min_temp: '', o1202_avg_min_temp: '', o1203_avg_min_temp: '', o1204_avg_min_temp: '', o1205_avg_min_temp: '', o1206_avg_min_temp: '',
            o1207_avg_min_temp: '', o1208_avg_min_temp: '', o1209_avg_min_temp: '', o1210_avg_min_temp: '', o1211_avg_min_temp: '', o1212_avg_min_temp: '',
            o1301_avg_min_temp: '', o1302_avg_min_temp: '', o1303_avg_min_temp: '', o1304_avg_min_temp: '', o1305_avg_min_temp: '', o1306_avg_min_temp: '',
            o1307_avg_min_temp: '', o1308_avg_min_temp: '', o1309_avg_min_temp: '', o1310_avg_min_temp: '', o1311_avg_min_temp: '', o1312_avg_min_temp: '',
            o1401_avg_min_temp: '', o1402_avg_min_temp: '', o1403_avg_min_temp: '', o1404_avg_min_temp: '', o1405_avg_min_temp: '', o1406_avg_min_temp: '',
            o1407_avg_min_temp: '', o1408_avg_min_temp: '', o1409_avg_min_temp: '', o1410_avg_min_temp: '', o1411_avg_min_temp: '', o1412_avg_min_temp: '',
            o1501_avg_min_temp: '', o1502_avg_min_temp: '', o1503_avg_min_temp: '', o1504_avg_min_temp: '', o1505_avg_min_temp: '', o1506_avg_min_temp: '',
            o1507_avg_min_temp: '', o1508_avg_min_temp: '', o1509_avg_min_temp: '', o1510_avg_min_temp: '', o1511_avg_min_temp: '', o1512_avg_min_temp: '',
            o1601_avg_min_temp: '', o1602_avg_min_temp: '', o1603_avg_min_temp: '', o1604_avg_min_temp: '', o1605_avg_min_temp: '', o1606_avg_min_temp: '',
            o1607_avg_min_temp: '', o1608_avg_min_temp: '', o1609_avg_min_temp: '', o1610_avg_min_temp: '', o1611_avg_min_temp: '', o1612_avg_min_temp: '',
            o1701_avg_min_temp: '', o1702_avg_min_temp: '', o1703_avg_min_temp: '', o1704_avg_min_temp: '', o1705_avg_min_temp: '', o1706_avg_min_temp: '',
            o1707_avg_min_temp: '', o1708_avg_min_temp: '',

            o0707_avg_temp: '', o0708_avg_temp: '', o0709_avg_temp: '', o0710_avg_temp: '', o0711_avg_temp: '', o0712_avg_temp: '',
            o0801_avg_temp: '', o0802_avg_temp: '', o0803_avg_temp: '', o0804_avg_temp: '', o0805_avg_temp: '', o0806_avg_temp: '',
            o0807_avg_temp: '', o0808_avg_temp: '', o0809_avg_temp: '', o0810_avg_temp: '', o0811_avg_temp: '', o0812_avg_temp: '',
            o0901_avg_temp: '', o0902_avg_temp: '', o0903_avg_temp: '', o0904_avg_temp: '', o0905_avg_temp: '', o0906_avg_temp: '',
            o0907_avg_temp: '', o0908_avg_temp: '', o0909_avg_temp: '', o0910_avg_temp: '', o0911_avg_temp: '', o0912_avg_temp: '',
            o1001_avg_temp: '', o1002_avg_temp: '', o1003_avg_temp: '', o1004_avg_temp: '', o1005_avg_temp: '', o1006_avg_temp: '',
            o1007_avg_temp: '', o1008_avg_temp: '', o1009_avg_temp: '', o1010_avg_temp: '', o1011_avg_temp: '', o1012_avg_temp: '',
            o1101_avg_temp: '', o1102_avg_temp: '', o1103_avg_temp: '', o1104_avg_temp: '', o1105_avg_temp: '', o1106_avg_temp: '',
            o1107_avg_temp: '', o1108_avg_temp: '', o1109_avg_temp: '', o1110_avg_temp: '', o1111_avg_temp: '', o1112_avg_temp: '',
            o1201_avg_temp: '', o1202_avg_temp: '', o1203_avg_temp: '', o1204_avg_temp: '', o1205_avg_temp: '', o1206_avg_temp: '',
            o1207_avg_temp: '', o1208_avg_temp: '', o1209_avg_temp: '', o1210_avg_temp: '', o1211_avg_temp: '', o1212_avg_temp: '',
            o1301_avg_temp: '', o1302_avg_temp: '', o1303_avg_temp: '', o1304_avg_temp: '', o1305_avg_temp: '', o1306_avg_temp: '',
            o1307_avg_temp: '', o1308_avg_temp: '', o1309_avg_temp: '', o1310_avg_temp: '', o1311_avg_temp: '', o1312_avg_temp: '',
            o1401_avg_temp: '', o1402_avg_temp: '', o1403_avg_temp: '', o1404_avg_temp: '', o1405_avg_temp: '', o1406_avg_temp: '',
            o1407_avg_temp: '', o1408_avg_temp: '', o1409_avg_temp: '', o1410_avg_temp: '', o1411_avg_temp: '', o1412_avg_temp: '',
            o1501_avg_temp: '', o1502_avg_temp: '', o1503_avg_temp: '', o1504_avg_temp: '', o1505_avg_temp: '', o1506_avg_temp: '',
            o1507_avg_temp: '', o1508_avg_temp: '', o1509_avg_temp: '', o1510_avg_temp: '', o1511_avg_temp: '', o1512_avg_temp: '',
            o1601_avg_temp: '', o1602_avg_temp: '', o1603_avg_temp: '', o1604_avg_temp: '', o1605_avg_temp: '', o1606_avg_temp: '',
            o1607_avg_temp: '', o1608_avg_temp: '', o1609_avg_temp: '', o1610_avg_temp: '', o1611_avg_temp: '', o1612_avg_temp: '',
            o1701_avg_temp: '', o1702_avg_temp: '', o1703_avg_temp: '', o1704_avg_temp: '', o1705_avg_temp: '', o1706_avg_temp: '',
            o1707_avg_temp: '', o1708_avg_temp: ''
    }

  }

  // bug: this is only triggered the second time not the first
  componentWillReceiveProps(nextProps) {
    if (nextProps.station !== undefined) {
      MonthliesAdapter.entry_historical(nextProps.station.wban, nextProps.date)
      .then(data => {
        console.log("historical cwrp")

        if (data[60] !== undefined) {

          const o0705_avg_max_temp = parseFloat(data[0].avg_max_temp), o0705_avg_min_temp = parseFloat(data[0].avg_min_temp), o0705_avg_temp = parseFloat(data[0].avg_temp)
          const o0706_avg_max_temp = parseFloat(data[1].avg_max_temp), o0706_avg_min_temp = parseFloat(data[1].avg_min_temp), o0706_avg_temp = parseFloat(data[1].avg_temp)
          const o0707_avg_max_temp = parseFloat(data[2].avg_max_temp), o0707_avg_min_temp = parseFloat(data[2].avg_min_temp), o0707_avg_temp = parseFloat(data[2].avg_temp)
          const o0708_avg_max_temp = parseFloat(data[3].avg_max_temp), o0708_avg_min_temp = parseFloat(data[3].avg_min_temp), o0708_avg_temp = parseFloat(data[3].avg_temp)
          const o0709_avg_max_temp = parseFloat(data[4].avg_max_temp), o0709_avg_min_temp = parseFloat(data[4].avg_min_temp), o0709_avg_temp = parseFloat(data[4].avg_temp)
          const o0710_avg_max_temp = parseFloat(data[5].avg_max_temp), o0710_avg_min_temp = parseFloat(data[5].avg_min_temp), o0710_avg_temp = parseFloat(data[5].avg_temp)
          const o0711_avg_max_temp = parseFloat(data[6].avg_max_temp), o0711_avg_min_temp = parseFloat(data[6].avg_min_temp), o0711_avg_temp = parseFloat(data[6].avg_temp)
          const o0712_avg_max_temp = parseFloat(data[7].avg_max_temp), o0712_avg_min_temp = parseFloat(data[7].avg_min_temp), o0712_avg_temp = parseFloat(data[7].avg_temp)

          const o0801_avg_max_temp = parseFloat(data[8].avg_max_temp), o0801_avg_min_temp = parseFloat(data[8].avg_min_temp), o0801_avg_temp = parseFloat(data[8].avg_temp)
          const o0802_avg_max_temp = parseFloat(data[9].avg_max_temp), o0802_avg_min_temp = parseFloat(data[9].avg_min_temp), o0802_avg_temp = parseFloat(data[9].avg_temp)
          const o0803_avg_max_temp = parseFloat(data[10].avg_max_temp), o0803_avg_min_temp = parseFloat(data[10].avg_min_temp), o0803_avg_temp = parseFloat(data[10].avg_temp)
          const o0804_avg_max_temp = parseFloat(data[11].avg_max_temp), o0804_avg_min_temp = parseFloat(data[11].avg_min_temp), o0804_avg_temp = parseFloat(data[11].avg_temp)
          const o0805_avg_max_temp = parseFloat(data[12].avg_max_temp), o0805_avg_min_temp = parseFloat(data[12].avg_min_temp), o0805_avg_temp = parseFloat(data[12].avg_temp)
          const o0806_avg_max_temp = parseFloat(data[13].avg_max_temp), o0806_avg_min_temp = parseFloat(data[13].avg_min_temp), o0806_avg_temp = parseFloat(data[13].avg_temp)
          const o0807_avg_max_temp = parseFloat(data[14].avg_max_temp), o0807_avg_min_temp = parseFloat(data[14].avg_min_temp), o0807_avg_temp = parseFloat(data[14].avg_temp)
          const o0808_avg_max_temp = parseFloat(data[15].avg_max_temp), o0808_avg_min_temp = parseFloat(data[15].avg_min_temp), o0808_avg_temp = parseFloat(data[15].avg_temp)
          const o0809_avg_max_temp = parseFloat(data[16].avg_max_temp), o0809_avg_min_temp = parseFloat(data[16].avg_min_temp), o0809_avg_temp = parseFloat(data[16].avg_temp)
          const o0810_avg_max_temp = parseFloat(data[17].avg_max_temp), o0810_avg_min_temp = parseFloat(data[17].avg_min_temp), o0810_avg_temp = parseFloat(data[17].avg_temp)
          const o0811_avg_max_temp = parseFloat(data[18].avg_max_temp), o0811_avg_min_temp = parseFloat(data[18].avg_min_temp), o0811_avg_temp = parseFloat(data[18].avg_temp)
          const o0812_avg_max_temp = parseFloat(data[19].avg_max_temp), o0812_avg_min_temp = parseFloat(data[19].avg_min_temp), o0812_avg_temp = parseFloat(data[19].avg_temp)

          const o0901_avg_max_temp = parseFloat(data[20].avg_max_temp), o0901_avg_min_temp = parseFloat(data[20].avg_min_temp), o0901_avg_temp = parseFloat(data[20].avg_temp)
          const o0902_avg_max_temp = parseFloat(data[21].avg_max_temp), o0902_avg_min_temp = parseFloat(data[21].avg_min_temp), o0902_avg_temp = parseFloat(data[21].avg_temp)
          const o0903_avg_max_temp = parseFloat(data[22].avg_max_temp), o0903_avg_min_temp = parseFloat(data[22].avg_min_temp), o0903_avg_temp = parseFloat(data[22].avg_temp)
          const o0904_avg_max_temp = parseFloat(data[23].avg_max_temp), o0904_avg_min_temp = parseFloat(data[23].avg_min_temp), o0904_avg_temp = parseFloat(data[23].avg_temp)
          const o0905_avg_max_temp = parseFloat(data[24].avg_max_temp), o0905_avg_min_temp = parseFloat(data[24].avg_min_temp), o0905_avg_temp = parseFloat(data[24].avg_temp)
          const o0906_avg_max_temp = parseFloat(data[25].avg_max_temp), o0906_avg_min_temp = parseFloat(data[25].avg_min_temp), o0906_avg_temp = parseFloat(data[25].avg_temp)
          const o0907_avg_max_temp = parseFloat(data[26].avg_max_temp), o0907_avg_min_temp = parseFloat(data[26].avg_min_temp), o0907_avg_temp = parseFloat(data[26].avg_temp)
          const o0908_avg_max_temp = parseFloat(data[27].avg_max_temp), o0908_avg_min_temp = parseFloat(data[27].avg_min_temp), o0908_avg_temp = parseFloat(data[27].avg_temp)
          const o0909_avg_max_temp = parseFloat(data[28].avg_max_temp), o0909_avg_min_temp = parseFloat(data[28].avg_min_temp), o0909_avg_temp = parseFloat(data[28].avg_temp)
          const o0910_avg_max_temp = parseFloat(data[29].avg_max_temp), o0910_avg_min_temp = parseFloat(data[29].avg_min_temp), o0910_avg_temp = parseFloat(data[29].avg_temp)
          const o0911_avg_max_temp = parseFloat(data[30].avg_max_temp), o0911_avg_min_temp = parseFloat(data[30].avg_min_temp), o0911_avg_temp = parseFloat(data[30].avg_temp)
          const o0912_avg_max_temp = parseFloat(data[31].avg_max_temp), o0912_avg_min_temp = parseFloat(data[31].avg_min_temp), o0912_avg_temp = parseFloat(data[31].avg_temp)

          const o1001_avg_max_temp = parseFloat(data[32].avg_max_temp), o1001_avg_min_temp = parseFloat(data[32].avg_min_temp), o1001_avg_temp = parseFloat(data[32].avg_temp)
          const o1002_avg_max_temp = parseFloat(data[33].avg_max_temp), o1002_avg_min_temp = parseFloat(data[33].avg_min_temp), o1002_avg_temp = parseFloat(data[33].avg_temp)
          const o1003_avg_max_temp = parseFloat(data[34].avg_max_temp), o1003_avg_min_temp = parseFloat(data[34].avg_min_temp), o1003_avg_temp = parseFloat(data[34].avg_temp)
          const o1004_avg_max_temp = parseFloat(data[35].avg_max_temp), o1004_avg_min_temp = parseFloat(data[35].avg_min_temp), o1004_avg_temp = parseFloat(data[35].avg_temp)
          const o1005_avg_max_temp = parseFloat(data[36].avg_max_temp), o1005_avg_min_temp = parseFloat(data[36].avg_min_temp), o1005_avg_temp = parseFloat(data[36].avg_temp)
          const o1006_avg_max_temp = parseFloat(data[37].avg_max_temp), o1006_avg_min_temp = parseFloat(data[37].avg_min_temp), o1006_avg_temp = parseFloat(data[37].avg_temp)
          const o1007_avg_max_temp = parseFloat(data[38].avg_max_temp), o1007_avg_min_temp = parseFloat(data[38].avg_min_temp), o1007_avg_temp = parseFloat(data[38].avg_temp)
          const o1008_avg_max_temp = parseFloat(data[39].avg_max_temp), o1008_avg_min_temp = parseFloat(data[39].avg_min_temp), o1008_avg_temp = parseFloat(data[39].avg_temp)
          const o1009_avg_max_temp = parseFloat(data[40].avg_max_temp), o1009_avg_min_temp = parseFloat(data[40].avg_min_temp), o1009_avg_temp = parseFloat(data[40].avg_temp)
          const o1010_avg_max_temp = parseFloat(data[41].avg_max_temp), o1010_avg_min_temp = parseFloat(data[41].avg_min_temp), o1010_avg_temp = parseFloat(data[41].avg_temp)
          const o1011_avg_max_temp = parseFloat(data[42].avg_max_temp), o1011_avg_min_temp = parseFloat(data[42].avg_min_temp), o1011_avg_temp = parseFloat(data[42].avg_temp)
          const o1012_avg_max_temp = parseFloat(data[43].avg_max_temp), o1012_avg_min_temp = parseFloat(data[43].avg_min_temp), o1012_avg_temp = parseFloat(data[43].avg_temp)

          const o1101_avg_max_temp = parseFloat(data[44].avg_max_temp), o1101_avg_min_temp = parseFloat(data[44].avg_min_temp), o1101_avg_temp = parseFloat(data[44].avg_temp)
          const o1102_avg_max_temp = parseFloat(data[45].avg_max_temp), o1102_avg_min_temp = parseFloat(data[45].avg_min_temp), o1102_avg_temp = parseFloat(data[45].avg_temp)
          const o1103_avg_max_temp = parseFloat(data[46].avg_max_temp), o1103_avg_min_temp = parseFloat(data[46].avg_min_temp), o1103_avg_temp = parseFloat(data[46].avg_temp)
          const o1104_avg_max_temp = parseFloat(data[47].avg_max_temp), o1104_avg_min_temp = parseFloat(data[47].avg_min_temp), o1104_avg_temp = parseFloat(data[47].avg_temp)
          const o1105_avg_max_temp = parseFloat(data[48].avg_max_temp), o1105_avg_min_temp = parseFloat(data[48].avg_min_temp), o1105_avg_temp = parseFloat(data[48].avg_temp)
          const o1106_avg_max_temp = parseFloat(data[49].avg_max_temp), o1106_avg_min_temp = parseFloat(data[49].avg_min_temp), o1106_avg_temp = parseFloat(data[49].avg_temp)
          const o1107_avg_max_temp = parseFloat(data[50].avg_max_temp), o1107_avg_min_temp = parseFloat(data[50].avg_min_temp), o1107_avg_temp = parseFloat(data[50].avg_temp)
          const o1108_avg_max_temp = parseFloat(data[51].avg_max_temp), o1108_avg_min_temp = parseFloat(data[51].avg_min_temp), o1108_avg_temp = parseFloat(data[51].avg_temp)
          const o1109_avg_max_temp = parseFloat(data[52].avg_max_temp), o1109_avg_min_temp = parseFloat(data[52].avg_min_temp), o1109_avg_temp = parseFloat(data[52].avg_temp)
          const o1110_avg_max_temp = parseFloat(data[53].avg_max_temp), o1110_avg_min_temp = parseFloat(data[53].avg_min_temp), o1110_avg_temp = parseFloat(data[53].avg_temp)
          const o1111_avg_max_temp = parseFloat(data[54].avg_max_temp), o1111_avg_min_temp = parseFloat(data[54].avg_min_temp), o1111_avg_temp = parseFloat(data[54].avg_temp)
          const o1112_avg_max_temp = parseFloat(data[55].avg_max_temp), o1112_avg_min_temp = parseFloat(data[55].avg_min_temp), o1112_avg_temp = parseFloat(data[55].avg_temp)

          const o1201_avg_max_temp = parseFloat(data[56].avg_max_temp), o1201_avg_min_temp = parseFloat(data[56].avg_min_temp), o1201_avg_temp = parseFloat(data[56].avg_temp)
          const o1202_avg_max_temp = parseFloat(data[57].avg_max_temp), o1202_avg_min_temp = parseFloat(data[57].avg_min_temp), o1202_avg_temp = parseFloat(data[57].avg_temp)
          const o1203_avg_max_temp = parseFloat(data[58].avg_max_temp), o1203_avg_min_temp = parseFloat(data[58].avg_min_temp), o1203_avg_temp = parseFloat(data[58].avg_temp)
          const o1204_avg_max_temp = parseFloat(data[59].avg_max_temp), o1204_avg_min_temp = parseFloat(data[59].avg_min_temp), o1204_avg_temp = parseFloat(data[59].avg_temp)
          const o1205_avg_max_temp = parseFloat(data[60].avg_max_temp), o1205_avg_min_temp = parseFloat(data[60].avg_min_temp), o1205_avg_temp = parseFloat(data[60].avg_temp)
          const o1206_avg_max_temp = parseFloat(data[61].avg_max_temp), o1206_avg_min_temp = parseFloat(data[61].avg_min_temp), o1206_avg_temp = parseFloat(data[61].avg_temp)
          const o1207_avg_max_temp = parseFloat(data[62].avg_max_temp), o1207_avg_min_temp = parseFloat(data[62].avg_min_temp), o1207_avg_temp = parseFloat(data[62].avg_temp)
          const o1208_avg_max_temp = parseFloat(data[63].avg_max_temp), o1208_avg_min_temp = parseFloat(data[63].avg_min_temp), o1208_avg_temp = parseFloat(data[63].avg_temp)
          const o1209_avg_max_temp = parseFloat(data[64].avg_max_temp), o1209_avg_min_temp = parseFloat(data[64].avg_min_temp), o1209_avg_temp = parseFloat(data[64].avg_temp)
          const o1210_avg_max_temp = parseFloat(data[65].avg_max_temp), o1210_avg_min_temp = parseFloat(data[65].avg_min_temp), o1210_avg_temp = parseFloat(data[65].avg_temp)
          const o1211_avg_max_temp = parseFloat(data[66].avg_max_temp), o1211_avg_min_temp = parseFloat(data[66].avg_min_temp), o1211_avg_temp = parseFloat(data[66].avg_temp)
          const o1212_avg_max_temp = parseFloat(data[67].avg_max_temp), o1212_avg_min_temp = parseFloat(data[67].avg_min_temp), o1212_avg_temp = parseFloat(data[67].avg_temp)

          const o1301_avg_max_temp = parseFloat(data[68].avg_max_temp), o1301_avg_min_temp = parseFloat(data[68].avg_min_temp), o1301_avg_temp = parseFloat(data[68].avg_temp)
          const o1302_avg_max_temp = parseFloat(data[69].avg_max_temp), o1302_avg_min_temp = parseFloat(data[69].avg_min_temp), o1302_avg_temp = parseFloat(data[69].avg_temp)
          const o1303_avg_max_temp = parseFloat(data[70].avg_max_temp), o1303_avg_min_temp = parseFloat(data[70].avg_min_temp), o1303_avg_temp = parseFloat(data[70].avg_temp)
          const o1304_avg_max_temp = parseFloat(data[71].avg_max_temp), o1304_avg_min_temp = parseFloat(data[71].avg_min_temp), o1304_avg_temp = parseFloat(data[71].avg_temp)
          const o1305_avg_max_temp = parseFloat(data[72].avg_max_temp), o1305_avg_min_temp = parseFloat(data[72].avg_min_temp), o1305_avg_temp = parseFloat(data[72].avg_temp)
          const o1306_avg_max_temp = parseFloat(data[73].avg_max_temp), o1306_avg_min_temp = parseFloat(data[73].avg_min_temp), o1306_avg_temp = parseFloat(data[73].avg_temp)
          const o1307_avg_max_temp = parseFloat(data[74].avg_max_temp), o1307_avg_min_temp = parseFloat(data[74].avg_min_temp), o1307_avg_temp = parseFloat(data[74].avg_temp)
          const o1308_avg_max_temp = parseFloat(data[75].avg_max_temp), o1308_avg_min_temp = parseFloat(data[75].avg_min_temp), o1308_avg_temp = parseFloat(data[75].avg_temp)
          const o1309_avg_max_temp = parseFloat(data[76].avg_max_temp), o1309_avg_min_temp = parseFloat(data[76].avg_min_temp), o1309_avg_temp = parseFloat(data[76].avg_temp)
          const o1310_avg_max_temp = parseFloat(data[77].avg_max_temp), o1310_avg_min_temp = parseFloat(data[77].avg_min_temp), o1310_avg_temp = parseFloat(data[77].avg_temp)
          const o1311_avg_max_temp = parseFloat(data[78].avg_max_temp), o1311_avg_min_temp = parseFloat(data[78].avg_min_temp), o1311_avg_temp = parseFloat(data[78].avg_temp)
          const o1312_avg_max_temp = parseFloat(data[79].avg_max_temp), o1312_avg_min_temp = parseFloat(data[79].avg_min_temp), o1312_avg_temp = parseFloat(data[79].avg_temp)

          const o1401_avg_max_temp = parseFloat(data[80].avg_max_temp), o1401_avg_min_temp = parseFloat(data[80].avg_min_temp), o1401_avg_temp = parseFloat(data[80].avg_temp)
          const o1402_avg_max_temp = parseFloat(data[81].avg_max_temp), o1402_avg_min_temp = parseFloat(data[81].avg_min_temp), o1402_avg_temp = parseFloat(data[81].avg_temp)
          const o1403_avg_max_temp = parseFloat(data[82].avg_max_temp), o1403_avg_min_temp = parseFloat(data[82].avg_min_temp), o1403_avg_temp = parseFloat(data[82].avg_temp)
          const o1404_avg_max_temp = parseFloat(data[83].avg_max_temp), o1404_avg_min_temp = parseFloat(data[83].avg_min_temp), o1404_avg_temp = parseFloat(data[83].avg_temp)
          const o1405_avg_max_temp = parseFloat(data[84].avg_max_temp), o1405_avg_min_temp = parseFloat(data[84].avg_min_temp), o1405_avg_temp = parseFloat(data[84].avg_temp)
          const o1406_avg_max_temp = parseFloat(data[85].avg_max_temp), o1406_avg_min_temp = parseFloat(data[85].avg_min_temp), o1406_avg_temp = parseFloat(data[85].avg_temp)
          const o1407_avg_max_temp = parseFloat(data[86].avg_max_temp), o1407_avg_min_temp = parseFloat(data[86].avg_min_temp), o1407_avg_temp = parseFloat(data[86].avg_temp)
          const o1408_avg_max_temp = parseFloat(data[87].avg_max_temp), o1408_avg_min_temp = parseFloat(data[87].avg_min_temp), o1408_avg_temp = parseFloat(data[87].avg_temp)
          const o1409_avg_max_temp = parseFloat(data[88].avg_max_temp), o1409_avg_min_temp = parseFloat(data[88].avg_min_temp), o1409_avg_temp = parseFloat(data[88].avg_temp)
          const o1410_avg_max_temp = parseFloat(data[89].avg_max_temp), o1410_avg_min_temp = parseFloat(data[89].avg_min_temp), o1410_avg_temp = parseFloat(data[89].avg_temp)
          const o1411_avg_max_temp = parseFloat(data[90].avg_max_temp), o1411_avg_min_temp = parseFloat(data[90].avg_min_temp), o1411_avg_temp = parseFloat(data[90].avg_temp)
          const o1412_avg_max_temp = parseFloat(data[91].avg_max_temp), o1412_avg_min_temp = parseFloat(data[91].avg_min_temp), o1412_avg_temp = parseFloat(data[91].avg_temp)

          const o1501_avg_max_temp = parseFloat(data[92].avg_max_temp), o1501_avg_min_temp = parseFloat(data[92].avg_min_temp), o1501_avg_temp = parseFloat(data[92].avg_temp)
          const o1502_avg_max_temp = parseFloat(data[93].avg_max_temp), o1502_avg_min_temp = parseFloat(data[93].avg_min_temp), o1502_avg_temp = parseFloat(data[93].avg_temp)
          const o1503_avg_max_temp = parseFloat(data[94].avg_max_temp), o1503_avg_min_temp = parseFloat(data[94].avg_min_temp), o1503_avg_temp = parseFloat(data[94].avg_temp)
          const o1504_avg_max_temp = parseFloat(data[95].avg_max_temp), o1504_avg_min_temp = parseFloat(data[95].avg_min_temp), o1504_avg_temp = parseFloat(data[95].avg_temp)
          const o1505_avg_max_temp = parseFloat(data[96].avg_max_temp), o1505_avg_min_temp = parseFloat(data[96].avg_min_temp), o1505_avg_temp = parseFloat(data[96].avg_temp)
          const o1506_avg_max_temp = parseFloat(data[97].avg_max_temp), o1506_avg_min_temp = parseFloat(data[97].avg_min_temp), o1506_avg_temp = parseFloat(data[97].avg_temp)
          const o1507_avg_max_temp = parseFloat(data[98].avg_max_temp), o1507_avg_min_temp = parseFloat(data[98].avg_min_temp), o1507_avg_temp = parseFloat(data[98].avg_temp)
          const o1508_avg_max_temp = parseFloat(data[99].avg_max_temp), o1508_avg_min_temp = parseFloat(data[99].avg_min_temp), o1508_avg_temp = parseFloat(data[99].avg_temp)
          const o1509_avg_max_temp = parseFloat(data[100].avg_max_temp), o1509_avg_min_temp = parseFloat(data[100].avg_min_temp), o1509_avg_temp = parseFloat(data[100].avg_temp)
          const o1510_avg_max_temp = parseFloat(data[101].avg_max_temp), o1510_avg_min_temp = parseFloat(data[101].avg_min_temp), o1510_avg_temp = parseFloat(data[101].avg_temp)
          const o1511_avg_max_temp = parseFloat(data[102].avg_max_temp), o1511_avg_min_temp = parseFloat(data[102].avg_min_temp), o1511_avg_temp = parseFloat(data[102].avg_temp)
          const o1512_avg_max_temp = parseFloat(data[103].avg_max_temp), o1512_avg_min_temp = parseFloat(data[103].avg_min_temp), o1512_avg_temp = parseFloat(data[103].avg_temp)

          const o1601_avg_max_temp = parseFloat(data[104].avg_max_temp), o1601_avg_min_temp = parseFloat(data[104].avg_min_temp), o1601_avg_temp = parseFloat(data[104].avg_temp)
          const o1602_avg_max_temp = parseFloat(data[105].avg_max_temp), o1602_avg_min_temp = parseFloat(data[105].avg_min_temp), o1602_avg_temp = parseFloat(data[105].avg_temp)
          const o1603_avg_max_temp = parseFloat(data[106].avg_max_temp), o1603_avg_min_temp = parseFloat(data[106].avg_min_temp), o1603_avg_temp = parseFloat(data[106].avg_temp)
          const o1604_avg_max_temp = parseFloat(data[107].avg_max_temp), o1604_avg_min_temp = parseFloat(data[107].avg_min_temp), o1604_avg_temp = parseFloat(data[107].avg_temp)
          const o1605_avg_max_temp = parseFloat(data[108].avg_max_temp), o1605_avg_min_temp = parseFloat(data[108].avg_min_temp), o1605_avg_temp = parseFloat(data[108].avg_temp)
          const o1606_avg_max_temp = parseFloat(data[109].avg_max_temp), o1606_avg_min_temp = parseFloat(data[109].avg_min_temp), o1606_avg_temp = parseFloat(data[109].avg_temp)
          const o1607_avg_max_temp = parseFloat(data[110].avg_max_temp), o1607_avg_min_temp = parseFloat(data[110].avg_min_temp), o1607_avg_temp = parseFloat(data[110].avg_temp)
          const o1608_avg_max_temp = parseFloat(data[111].avg_max_temp), o1608_avg_min_temp = parseFloat(data[111].avg_min_temp), o1608_avg_temp = parseFloat(data[111].avg_temp)
          const o1609_avg_max_temp = parseFloat(data[112].avg_max_temp), o1609_avg_min_temp = parseFloat(data[112].avg_min_temp), o1609_avg_temp = parseFloat(data[112].avg_temp)
          const o1610_avg_max_temp = parseFloat(data[113].avg_max_temp), o1610_avg_min_temp = parseFloat(data[113].avg_min_temp), o1610_avg_temp = parseFloat(data[113].avg_temp)
          const o1611_avg_max_temp = parseFloat(data[114].avg_max_temp), o1611_avg_min_temp = parseFloat(data[114].avg_min_temp), o1611_avg_temp = parseFloat(data[114].avg_temp)
          const o1612_avg_max_temp = parseFloat(data[115].avg_max_temp), o1612_avg_min_temp = parseFloat(data[115].avg_min_temp), o1612_avg_temp = parseFloat(data[115].avg_temp)

          const o1701_avg_max_temp = parseFloat(data[116].avg_max_temp), o1701_avg_min_temp = parseFloat(data[116].avg_min_temp), o1701_avg_temp = parseFloat(data[116].avg_temp)
          const o1702_avg_max_temp = parseFloat(data[117].avg_max_temp), o1702_avg_min_temp = parseFloat(data[117].avg_min_temp), o1702_avg_temp = parseFloat(data[117].avg_temp)
          const o1703_avg_max_temp = parseFloat(data[118].avg_max_temp), o1703_avg_min_temp = parseFloat(data[118].avg_min_temp), o1703_avg_temp = parseFloat(data[118].avg_temp)
          const o1704_avg_max_temp = parseFloat(data[119].avg_max_temp), o1704_avg_min_temp = parseFloat(data[119].avg_min_temp), o1704_avg_temp = parseFloat(data[119].avg_temp)
          const o1705_avg_max_temp = parseFloat(data[120].avg_max_temp), o1705_avg_min_temp = parseFloat(data[120].avg_min_temp), o1705_avg_temp = parseFloat(data[120].avg_temp)
          const o1706_avg_max_temp = parseFloat(data[121].avg_max_temp), o1706_avg_min_temp = parseFloat(data[121].avg_min_temp), o1706_avg_temp = parseFloat(data[121].avg_temp)
          const o1707_avg_max_temp = parseFloat(data[122].avg_max_temp), o1707_avg_min_temp = parseFloat(data[122].avg_min_temp), o1707_avg_temp = parseFloat(data[122].avg_temp)
          const o1708_avg_max_temp = parseFloat(data[123].avg_max_temp), o1708_avg_min_temp = parseFloat(data[123].avg_min_temp), o1708_avg_temp = parseFloat(data[123].avg_temp)


          this.setState({
            o0705_avg_max_temp: o0705_avg_max_temp, o0706_avg_max_temp: o0706_avg_max_temp,
            o0707_avg_max_temp: o0707_avg_max_temp, o0708_avg_max_temp: o0708_avg_max_temp, o0709_avg_max_temp: o0709_avg_max_temp,
            o0710_avg_max_temp: o0710_avg_max_temp, o0711_avg_max_temp: o0711_avg_max_temp, o0712_avg_max_temp: o0712_avg_max_temp,

            o0801_avg_max_temp: o0801_avg_max_temp, o0802_avg_max_temp: o0802_avg_max_temp, o0803_avg_max_temp: o0803_avg_max_temp,
            o0804_avg_max_temp: o0804_avg_max_temp, o0805_avg_max_temp: o0805_avg_max_temp, o0806_avg_max_temp: o0806_avg_max_temp,
            o0807_avg_max_temp: o0807_avg_max_temp, o0808_avg_max_temp: o0808_avg_max_temp, o0809_avg_max_temp: o0809_avg_max_temp,
            o0810_avg_max_temp: o0810_avg_max_temp, o0811_avg_max_temp: o0811_avg_max_temp, o0812_avg_max_temp: o0812_avg_max_temp,
            o0901_avg_max_temp: o0901_avg_max_temp, o0902_avg_max_temp: o0902_avg_max_temp, o0903_avg_max_temp: o0903_avg_max_temp,
            o0904_avg_max_temp: o0904_avg_max_temp, o0905_avg_max_temp: o0905_avg_max_temp, o0906_avg_max_temp: o0906_avg_max_temp,
            o0907_avg_max_temp: o0907_avg_max_temp, o0908_avg_max_temp: o0908_avg_max_temp, o0909_avg_max_temp: o0909_avg_max_temp,
            o0910_avg_max_temp: o0910_avg_max_temp, o0911_avg_max_temp: o0911_avg_max_temp, o0912_avg_max_temp: o0912_avg_max_temp,

            o1001_avg_max_temp: o1001_avg_max_temp, o1002_avg_max_temp: o1002_avg_max_temp, o1003_avg_max_temp: o1003_avg_max_temp,
            o1004_avg_max_temp: o1004_avg_max_temp, o1005_avg_max_temp: o1005_avg_max_temp, o1006_avg_max_temp: o1006_avg_max_temp,
            o1007_avg_max_temp: o1007_avg_max_temp, o1008_avg_max_temp: o1008_avg_max_temp, o1009_avg_max_temp: o1009_avg_max_temp,
            o1010_avg_max_temp: o1010_avg_max_temp, o1011_avg_max_temp: o1011_avg_max_temp, o1012_avg_max_temp: o1012_avg_max_temp,
            o1101_avg_max_temp: o1101_avg_max_temp, o1102_avg_max_temp: o1102_avg_max_temp, o1103_avg_max_temp: o1103_avg_max_temp,
            o1104_avg_max_temp: o1104_avg_max_temp, o1105_avg_max_temp: o1105_avg_max_temp, o1106_avg_max_temp: o1106_avg_max_temp,
            o1107_avg_max_temp: o1107_avg_max_temp, o1108_avg_max_temp: o1108_avg_max_temp, o1109_avg_max_temp: o1109_avg_max_temp,
            o1110_avg_max_temp: o1110_avg_max_temp, o1111_avg_max_temp: o1111_avg_max_temp, o1112_avg_max_temp: o1112_avg_max_temp,

            o1201_avg_max_temp: o1201_avg_max_temp, o1202_avg_max_temp: o1202_avg_max_temp, o1203_avg_max_temp: o1203_avg_max_temp,
            o1204_avg_max_temp: o1204_avg_max_temp, o1205_avg_max_temp: o1205_avg_max_temp, o1206_avg_max_temp: o1206_avg_max_temp,
            o1207_avg_max_temp: o1207_avg_max_temp, o1208_avg_max_temp: o1208_avg_max_temp, o1209_avg_max_temp: o1209_avg_max_temp,
            o1210_avg_max_temp: o1210_avg_max_temp, o1211_avg_max_temp: o1211_avg_max_temp, o1212_avg_max_temp: o1212_avg_max_temp,
            o1301_avg_max_temp: o1301_avg_max_temp, o1302_avg_max_temp: o1302_avg_max_temp, o1303_avg_max_temp: o1303_avg_max_temp,
            o1304_avg_max_temp: o1304_avg_max_temp, o1305_avg_max_temp: o1305_avg_max_temp, o1306_avg_max_temp: o1306_avg_max_temp,
            o1307_avg_max_temp: o1307_avg_max_temp, o1308_avg_max_temp: o1308_avg_max_temp, o1309_avg_max_temp: o1309_avg_max_temp,
            o1310_avg_max_temp: o1310_avg_max_temp, o1311_avg_max_temp: o1311_avg_max_temp, o1312_avg_max_temp: o1312_avg_max_temp,

            o1401_avg_max_temp: o1401_avg_max_temp, o1402_avg_max_temp: o1402_avg_max_temp, o1403_avg_max_temp: o1403_avg_max_temp,
            o1404_avg_max_temp: o1404_avg_max_temp, o1405_avg_max_temp: o1405_avg_max_temp, o1406_avg_max_temp: o1406_avg_max_temp,
            o1407_avg_max_temp: o1407_avg_max_temp, o1408_avg_max_temp: o1408_avg_max_temp, o1409_avg_max_temp: o1409_avg_max_temp,
            o1410_avg_max_temp: o1410_avg_max_temp, o1411_avg_max_temp: o1411_avg_max_temp, o1412_avg_max_temp: o1412_avg_max_temp,
            o1501_avg_max_temp: o1501_avg_max_temp, o1502_avg_max_temp: o1502_avg_max_temp, o1503_avg_max_temp: o1503_avg_max_temp,
            o1504_avg_max_temp: o1504_avg_max_temp, o1505_avg_max_temp: o1505_avg_max_temp, o1506_avg_max_temp: o1506_avg_max_temp,
            o1507_avg_max_temp: o1507_avg_max_temp, o1508_avg_max_temp: o1508_avg_max_temp, o1509_avg_max_temp: o1509_avg_max_temp,
            o1510_avg_max_temp: o1510_avg_max_temp, o1511_avg_max_temp: o1511_avg_max_temp, o1512_avg_max_temp: o1512_avg_max_temp,

            o1601_avg_max_temp: o1601_avg_max_temp, o1602_avg_max_temp: o1602_avg_max_temp, o1603_avg_max_temp: o1603_avg_max_temp,
            o1604_avg_max_temp: o1604_avg_max_temp, o1605_avg_max_temp: o1605_avg_max_temp, o1606_avg_max_temp: o1606_avg_max_temp,
            o1607_avg_max_temp: o1607_avg_max_temp, o1608_avg_max_temp: o1608_avg_max_temp, o1609_avg_max_temp: o1609_avg_max_temp,
            o1610_avg_max_temp: o1610_avg_max_temp, o1611_avg_max_temp: o1611_avg_max_temp, o1612_avg_max_temp: o1612_avg_max_temp,
            o1701_avg_max_temp: o1701_avg_max_temp, o1702_avg_max_temp: o1702_avg_max_temp, o1703_avg_max_temp: o1703_avg_max_temp,
            o1704_avg_max_temp: o1704_avg_max_temp, o1705_avg_max_temp: o1705_avg_max_temp, o1706_avg_max_temp: o1706_avg_max_temp,
            o1707_avg_max_temp: o1707_avg_max_temp, o1708_avg_max_temp: o1708_avg_max_temp,

            o0705_avg_min_temp: o0705_avg_min_temp, o0706_avg_min_temp: o0706_avg_min_temp,
            o0707_avg_min_temp: o0707_avg_min_temp, o0708_avg_min_temp: o0708_avg_min_temp, o0709_avg_min_temp: o0709_avg_min_temp,
            o0710_avg_min_temp: o0710_avg_min_temp, o0711_avg_min_temp: o0711_avg_min_temp, o0712_avg_min_temp: o0712_avg_min_temp,

            o0801_avg_min_temp: o0801_avg_min_temp, o0802_avg_min_temp: o0802_avg_min_temp, o0803_avg_min_temp: o0803_avg_min_temp,
            o0804_avg_min_temp: o0804_avg_min_temp, o0805_avg_min_temp: o0805_avg_min_temp, o0806_avg_min_temp: o0806_avg_min_temp,
            o0807_avg_min_temp: o0807_avg_min_temp, o0808_avg_min_temp: o0808_avg_min_temp, o0809_avg_min_temp: o0809_avg_min_temp,
            o0810_avg_min_temp: o0810_avg_min_temp, o0811_avg_min_temp: o0811_avg_min_temp, o0812_avg_min_temp: o0812_avg_min_temp,
            o0901_avg_min_temp: o0901_avg_min_temp, o0902_avg_min_temp: o0902_avg_min_temp, o0903_avg_min_temp: o0903_avg_min_temp,
            o0904_avg_min_temp: o0904_avg_min_temp, o0905_avg_min_temp: o0905_avg_min_temp, o0906_avg_min_temp: o0906_avg_min_temp,
            o0907_avg_min_temp: o0907_avg_min_temp, o0908_avg_min_temp: o0908_avg_min_temp, o0909_avg_min_temp: o0909_avg_min_temp,
            o0910_avg_min_temp: o0910_avg_min_temp, o0911_avg_min_temp: o0911_avg_min_temp, o0912_avg_min_temp: o0912_avg_min_temp,

            o1001_avg_min_temp: o1001_avg_min_temp, o1002_avg_min_temp: o1002_avg_min_temp, o1003_avg_min_temp: o1003_avg_min_temp,
            o1004_avg_min_temp: o1004_avg_min_temp, o1005_avg_min_temp: o1005_avg_min_temp, o1006_avg_min_temp: o1006_avg_min_temp,
            o1007_avg_min_temp: o1007_avg_min_temp, o1008_avg_min_temp: o1008_avg_min_temp, o1009_avg_min_temp: o1009_avg_min_temp,
            o1010_avg_min_temp: o1010_avg_min_temp, o1011_avg_min_temp: o1011_avg_min_temp, o1012_avg_min_temp: o1012_avg_min_temp,
            o1101_avg_min_temp: o1101_avg_min_temp, o1102_avg_min_temp: o1102_avg_min_temp, o1103_avg_min_temp: o1103_avg_min_temp,
            o1104_avg_min_temp: o1104_avg_min_temp, o1105_avg_min_temp: o1105_avg_min_temp, o1106_avg_min_temp: o1106_avg_min_temp,
            o1107_avg_min_temp: o1107_avg_min_temp, o1108_avg_min_temp: o1108_avg_min_temp, o1109_avg_min_temp: o1109_avg_min_temp,
            o1110_avg_min_temp: o1110_avg_min_temp, o1111_avg_min_temp: o1111_avg_min_temp, o1112_avg_min_temp: o1112_avg_min_temp,

            o1201_avg_min_temp: o1201_avg_min_temp, o1202_avg_min_temp: o1202_avg_min_temp, o1203_avg_min_temp: o1203_avg_min_temp,
            o1204_avg_min_temp: o1204_avg_min_temp, o1205_avg_min_temp: o1205_avg_min_temp, o1206_avg_min_temp: o1206_avg_min_temp,
            o1207_avg_min_temp: o1207_avg_min_temp, o1208_avg_min_temp: o1208_avg_min_temp, o1209_avg_min_temp: o1209_avg_min_temp,
            o1210_avg_min_temp: o1210_avg_min_temp, o1211_avg_min_temp: o1211_avg_min_temp, o1212_avg_min_temp: o1212_avg_min_temp,
            o1301_avg_min_temp: o1301_avg_min_temp, o1302_avg_min_temp: o1302_avg_min_temp, o1303_avg_min_temp: o1303_avg_min_temp,
            o1304_avg_min_temp: o1304_avg_min_temp, o1305_avg_min_temp: o1305_avg_min_temp, o1306_avg_min_temp: o1306_avg_min_temp,
            o1307_avg_min_temp: o1307_avg_min_temp, o1308_avg_min_temp: o1308_avg_min_temp, o1309_avg_min_temp: o1309_avg_min_temp,
            o1310_avg_min_temp: o1310_avg_min_temp, o1311_avg_min_temp: o1311_avg_min_temp, o1312_avg_min_temp: o1312_avg_min_temp,

            o1401_avg_min_temp: o1401_avg_min_temp, o1402_avg_min_temp: o1402_avg_min_temp, o1403_avg_min_temp: o1403_avg_min_temp,
            o1404_avg_min_temp: o1404_avg_min_temp, o1405_avg_min_temp: o1405_avg_min_temp, o1406_avg_min_temp: o1406_avg_min_temp,
            o1407_avg_min_temp: o1407_avg_min_temp, o1408_avg_min_temp: o1408_avg_min_temp, o1409_avg_min_temp: o1409_avg_min_temp,
            o1410_avg_min_temp: o1410_avg_min_temp, o1411_avg_min_temp: o1411_avg_min_temp, o1412_avg_min_temp: o1412_avg_min_temp,
            o1501_avg_min_temp: o1501_avg_min_temp, o1502_avg_min_temp: o1502_avg_min_temp, o1503_avg_min_temp: o1503_avg_min_temp,
            o1504_avg_min_temp: o1504_avg_min_temp, o1505_avg_min_temp: o1505_avg_min_temp, o1506_avg_min_temp: o1506_avg_min_temp,
            o1507_avg_min_temp: o1507_avg_min_temp, o1508_avg_min_temp: o1508_avg_min_temp, o1509_avg_min_temp: o1509_avg_min_temp,
            o1510_avg_min_temp: o1510_avg_min_temp, o1511_avg_min_temp: o1511_avg_min_temp, o1512_avg_min_temp: o1512_avg_min_temp,

            o1601_avg_min_temp: o1601_avg_min_temp, o1602_avg_min_temp: o1602_avg_min_temp, o1603_avg_min_temp: o1603_avg_min_temp,
            o1604_avg_min_temp: o1604_avg_min_temp, o1605_avg_min_temp: o1605_avg_min_temp, o1606_avg_min_temp: o1606_avg_min_temp,
            o1607_avg_min_temp: o1607_avg_min_temp, o1608_avg_min_temp: o1608_avg_min_temp, o1609_avg_min_temp: o1609_avg_min_temp,
            o1610_avg_min_temp: o1610_avg_min_temp, o1611_avg_min_temp: o1611_avg_min_temp, o1612_avg_min_temp: o1612_avg_min_temp,
            o1701_avg_min_temp: o1701_avg_min_temp, o1702_avg_min_temp: o1702_avg_min_temp, o1703_avg_min_temp: o1703_avg_min_temp,
            o1704_avg_min_temp: o1704_avg_min_temp, o1705_avg_min_temp: o1705_avg_min_temp, o1706_avg_min_temp: o1706_avg_min_temp,
            o1707_avg_min_temp: o1707_avg_min_temp, o1708_avg_min_temp: o1708_avg_min_temp,

            o0705_avg_temp: o0705_avg_temp, o0706_avg_temp: o0706_avg_temp,
            o0707_avg_temp: o0707_avg_temp, o0708_avg_temp: o0708_avg_temp, o0709_avg_temp: o0709_avg_temp,
            o0710_avg_temp: o0710_avg_temp, o0711_avg_temp: o0711_avg_temp, o0712_avg_temp: o0712_avg_temp,

            o0801_avg_temp: o0801_avg_temp, o0802_avg_temp: o0802_avg_temp, o0803_avg_temp: o0803_avg_temp,
            o0804_avg_temp: o0804_avg_temp, o0805_avg_temp: o0805_avg_temp, o0806_avg_temp: o0806_avg_temp,
            o0807_avg_temp: o0807_avg_temp, o0808_avg_temp: o0808_avg_temp, o0809_avg_temp: o0809_avg_temp,
            o0810_avg_temp: o0810_avg_temp, o0811_avg_temp: o0811_avg_temp, o0812_avg_temp: o0812_avg_temp,
            o0901_avg_temp: o0901_avg_temp, o0902_avg_temp: o0902_avg_temp, o0903_avg_temp: o0903_avg_temp,
            o0904_avg_temp: o0904_avg_temp, o0905_avg_temp: o0905_avg_temp, o0906_avg_temp: o0906_avg_temp,
            o0907_avg_temp: o0907_avg_temp, o0908_avg_temp: o0908_avg_temp, o0909_avg_temp: o0909_avg_temp,
            o0910_avg_temp: o0910_avg_temp, o0911_avg_temp: o0911_avg_temp, o0912_avg_temp: o0912_avg_temp,

            o1001_avg_temp: o1001_avg_temp, o1002_avg_temp: o1002_avg_temp, o1003_avg_temp: o1003_avg_temp,
            o1004_avg_temp: o1004_avg_temp, o1005_avg_temp: o1005_avg_temp, o1006_avg_temp: o1006_avg_temp,
            o1007_avg_temp: o1007_avg_temp, o1008_avg_temp: o1008_avg_temp, o1009_avg_temp: o1009_avg_temp,
            o1010_avg_temp: o1010_avg_temp, o1011_avg_temp: o1011_avg_temp, o1012_avg_temp: o1012_avg_temp,
            o1101_avg_temp: o1101_avg_temp, o1102_avg_temp: o1102_avg_temp, o1103_avg_temp: o1103_avg_temp,
            o1104_avg_temp: o1104_avg_temp, o1105_avg_temp: o1105_avg_temp, o1106_avg_temp: o1106_avg_temp,
            o1107_avg_temp: o1107_avg_temp, o1108_avg_temp: o1108_avg_temp, o1109_avg_temp: o1109_avg_temp,
            o1110_avg_temp: o1110_avg_temp, o1111_avg_temp: o1111_avg_temp, o1112_avg_temp: o1112_avg_temp,

            o1201_avg_temp: o1201_avg_temp, o1202_avg_temp: o1202_avg_temp, o1203_avg_temp: o1203_avg_temp,
            o1204_avg_temp: o1204_avg_temp, o1205_avg_temp: o1205_avg_temp, o1206_avg_temp: o1206_avg_temp,
            o1207_avg_temp: o1207_avg_temp, o1208_avg_temp: o1208_avg_temp, o1209_avg_temp: o1209_avg_temp,
            o1210_avg_temp: o1210_avg_temp, o1211_avg_temp: o1211_avg_temp, o1212_avg_temp: o1212_avg_temp,
            o1301_avg_temp: o1301_avg_temp, o1302_avg_temp: o1302_avg_temp, o1303_avg_temp: o1303_avg_temp,
            o1304_avg_temp: o1304_avg_temp, o1305_avg_temp: o1305_avg_temp, o1306_avg_temp: o1306_avg_temp,
            o1307_avg_temp: o1307_avg_temp, o1308_avg_temp: o1308_avg_temp, o1309_avg_temp: o1309_avg_temp,
            o1310_avg_temp: o1310_avg_temp, o1311_avg_temp: o1311_avg_temp, o1312_avg_temp: o1312_avg_temp,

            o1401_avg_temp: o1401_avg_temp, o1402_avg_temp: o1402_avg_temp, o1403_avg_temp: o1403_avg_temp,
            o1404_avg_temp: o1404_avg_temp, o1405_avg_temp: o1405_avg_temp, o1406_avg_temp: o1406_avg_temp,
            o1407_avg_temp: o1407_avg_temp, o1408_avg_temp: o1408_avg_temp, o1409_avg_temp: o1409_avg_temp,
            o1410_avg_temp: o1410_avg_temp, o1411_avg_temp: o1411_avg_temp, o1412_avg_temp: o1412_avg_temp,
            o1501_avg_temp: o1501_avg_temp, o1502_avg_temp: o1502_avg_temp, o1503_avg_temp: o1503_avg_temp,
            o1504_avg_temp: o1504_avg_temp, o1505_avg_temp: o1505_avg_temp, o1506_avg_temp: o1506_avg_temp,
            o1507_avg_temp: o1507_avg_temp, o1508_avg_temp: o1508_avg_temp, o1509_avg_temp: o1509_avg_temp,
            o1510_avg_temp: o1510_avg_temp, o1511_avg_temp: o1511_avg_temp, o1512_avg_temp: o1512_avg_temp,

            o1601_avg_temp: o1601_avg_temp, o1602_avg_temp: o1602_avg_temp, o1603_avg_temp: o1603_avg_temp,
            o1604_avg_temp: o1604_avg_temp, o1605_avg_temp: o1605_avg_temp, o1606_avg_temp: o1606_avg_temp,
            o1607_avg_temp: o1607_avg_temp, o1608_avg_temp: o1608_avg_temp, o1609_avg_temp: o1609_avg_temp,
            o1610_avg_temp: o1610_avg_temp, o1611_avg_temp: o1611_avg_temp, o1612_avg_temp: o1612_avg_temp,
            o1701_avg_temp: o1701_avg_temp, o1702_avg_temp: o1702_avg_temp, o1703_avg_temp: o1703_avg_temp,
            o1704_avg_temp: o1704_avg_temp, o1705_avg_temp: o1705_avg_temp, o1706_avg_temp: o1706_avg_temp,
            o1707_avg_temp: o1707_avg_temp, o1708_avg_temp: o1708_avg_temp


          })
        } else {
          alert("Sorry, no data was found for this date and location, please try again")
        }
      })
    } else {
      alert("Sorry, this station is missing the data needed to process this page.")
    }
  }

  render() {

    // const { wban, year_month,
    //   avg_max_temp, avg_min_temp, avg_temp,
    //
    //   days_with_precip_ge_p01inch, days_with_precip_ge_p10inch,
    //   days_with_snowfall_ge_1p0inch, departure_from_normal,
    //   departure_from_normal_precip, departure_max_temp, departure_min_temp,
    //   date_max24_hr_precip, date_max24_hr_snowfall,
    //   max24_hr_precip, max24_hr_snowfall, total_monthly_precip, total_snowfall } = this.state
    //
    //   let date = this.props.date
    //   let year_month_1 = `${DateParser[parseInt(date.slice(4,6), 10)]} ${date.slice(0,4)}`
    //   let month_1 = `${DateParser[parseInt(date.slice(4,6), 10)].slice(0,3)}`
    //
    //   let total_monthly_precip_1 = total_monthly_precip === "" ? " LOADING" : ( total_monthly_precip === "M" ? " M" : ` ${total_monthly_precip}"` )
    //   let departure_from_normal_precip_1 = ( departure_from_normal_precip === "M" || departure_from_normal_precip === "" ) ? "" : ( departure_from_normal_precip > 0 ? ` (+${departure_from_normal_precip}")` : ` (${departure_from_normal_precip}")` )
    //
    //   let total_snowfall_1 = total_snowfall === "" ? " LOADING" : ( total_snowfall === "M" ? " M" : ` ${total_snowfall}"` )
    //
    //   let max24_hr_precip_1 = max24_hr_precip === "" ? " LOADING" : ( max24_hr_precip === "M" ? " M" : ` ${max24_hr_precip}" (${month_1} ${date_max24_hr_precip})` )
    //   let days_with_precip_ge_p01inch_1 = days_with_precip_ge_p01inch === "" ? " LOADING" : ( days_with_precip_ge_p01inch === "M" ? " M" : ` ${days_with_precip_ge_p01inch}` )
    //   let days_with_precip_ge_p10inch_1 = days_with_precip_ge_p10inch === "" ? " LOADING" : ( days_with_precip_ge_p10inch === "M" ? " M" : ` ${days_with_precip_ge_p10inch}` )
    //
    //   let max24_hr_snowfall_1 = max24_hr_snowfall === "" ? " LOADING" : ( max24_hr_snowfall === "M" ? " M" : ` ${max24_hr_snowfall}" (${month_1} ${date_max24_hr_snowfall})` )
    //   let days_with_snowfall_ge_1p0inch_1 = days_with_snowfall_ge_1p0inch === "" ? " LOADING" : ( days_with_snowfall_ge_1p0inch === "M" ? " M" : ` ${days_with_snowfall_ge_1p0inch}` )

    return (
      <div>
        <br />

        <Graph data={this.state} />
      </div>
    )
  }
}

// saved for when trends are added

// <Grid columns={3} celled='internally' textAlign="center" verticalAlign="middle">
// <Grid.Row>
//   <Grid.Column>
//     <Statistic size='mini'>
//       <Statistic.Value>
//         <Icon name='rain' color="blue" />
//           { ` ${total_monthly_precip_1}${departure_from_normal_precip_1}` }
//         </Statistic.Value>
//       <Statistic.Label>Total Monthly Precip</Statistic.Label>
//     </Statistic>
//   </Grid.Column>
//   <Grid.Column>
//     <h1><strong> { year_month_1 } </strong></h1>
//   </Grid.Column>
//   <Grid.Column>
//     <Statistic size='mini'>
//       <Statistic.Value>
//         <Icon name='snowflake outline' color="blue" />
//           { total_snowfall_1 }
//         </Statistic.Value>
//       <Statistic.Label>Total Monthly Snowfall</Statistic.Label>
//     </Statistic>
//   </Grid.Column>
// </Grid.Row>
//
// <Grid.Row>
//   <Grid.Column>
//     <Statistic size='mini'>
//       <Statistic.Value>
//         <Icon name='resize vertical'/>
//           { max24_hr_precip_1 }
//         </Statistic.Value>
//       <Statistic.Label>Max 24 Hour Precip</Statistic.Label>
//       <br />
//       <Statistic.Value>
//         <Icon name='calendar' />
//         { days_with_precip_ge_p01inch_1 } / { days_with_precip_ge_p10inch_1 }
//       </Statistic.Value>
//       <Statistic.Label>Days >= 0.01" / 0.10"</Statistic.Label>
//     </Statistic>
//   </Grid.Column>
//   <Temperatures avg_max_temp={avg_max_temp} avg_min_temp={avg_min_temp} avg_temp={avg_temp} departure_max_temp={departure_max_temp} departure_min_temp={departure_min_temp} departure_from_normal={departure_from_normal} />
//   <Grid.Column>
//     <Statistic size='mini'>
//       <Statistic.Value>
//         <Icon name='resize vertical'/>
//           { max24_hr_snowfall_1 }
//         </Statistic.Value>
//       <Statistic.Label>Max 24 Hour Snowfall</Statistic.Label>
//       <br />
//       <Statistic.Value>
//         <Icon name='calendar' />
//         { days_with_snowfall_ge_1p0inch_1 }
//       </Statistic.Value>
//       <Statistic.Label>Days >= 1"</Statistic.Label>
//     </Statistic>
//   </Grid.Column>
// </Grid.Row>
// </Grid>
