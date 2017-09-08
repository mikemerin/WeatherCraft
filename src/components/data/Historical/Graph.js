import React from 'react'
import { Bar } from 'react-chartjs-2'

import { DateParser, DateLetterParser } from '../../helpers/DateParser'

export const Graph = (props) => {

    //note: not using precip height for now, it works but I'll save it for later

    // let labels = Array.new(122, '')
    let labels = ["200705", "200706", "200707", "200708", "200709", "200710", "200711", "200712", "200801", "200802", "200803", "200804", "200805", "200806", "200807", "200808", "200809", "200810", "200811", "200812", "200901", "200902", "200903", "200904", "200905", "200906", "200907", "200908", "200909", "200910", "200911", "200912", "201001", "201002", "201003", "201004", "201005", "201006", "201007", "201008", "201009", "201010", "201011", "201012", "201101", "201102", "201103", "201104", "201105", "201106", "201107", "201108", "201109", "201110", "201111", "201112", "201201", "201202", "201203", "201204", "201205", "201206", "201207", "201208", "201209", "201210", "201211", "201212", "201301", "201302", "201303", "201304", "201305", "201306", "201307", "201308", "201309", "201310", "201311", "201312", "201401", "201402", "201403", "201404", "201405", "201406", "201407", "201408", "201409", "201410", "201411", "201412", "201501", "201502", "201503", "201504", "201505", "201506", "201507", "201508", "201509", "201510", "201511", "201512", "201601", "201602", "201603", "201604", "201605", "201606", "201607", "201608", "201609", "201610", "201611", "201612", "201701", "201702", "201703", "201704", "201705", "201706", "201707", "201708"]

    labels = labels.map(date => {
      return `${DateParser[parseInt(date.slice(4,6))].slice(0,3)}` + (date.slice(4,6) === "01" ? ` '${date.slice(2,4)}` : '')
    } )
    console.log(labels)
    let temp_height = 0

    let { o0705_avg_max_temp, o0706_avg_max_temp, o0705_avg_min_temp, o0706_avg_min_temp, o0705_avg_temp, o0706_avg_temp,
          o0707_avg_max_temp, o0708_avg_max_temp, o0709_avg_max_temp, o0710_avg_max_temp, o0711_avg_max_temp, o0712_avg_max_temp,
          o0801_avg_max_temp, o0802_avg_max_temp, o0803_avg_max_temp, o0804_avg_max_temp, o0805_avg_max_temp, o0806_avg_max_temp,
          o0807_avg_max_temp, o0808_avg_max_temp, o0809_avg_max_temp, o0810_avg_max_temp, o0811_avg_max_temp, o0812_avg_max_temp,
          o0901_avg_max_temp, o0902_avg_max_temp, o0903_avg_max_temp, o0904_avg_max_temp, o0905_avg_max_temp, o0906_avg_max_temp,
          o0907_avg_max_temp, o0908_avg_max_temp, o0909_avg_max_temp, o0910_avg_max_temp, o0911_avg_max_temp, o0912_avg_max_temp,
          o1001_avg_max_temp, o1002_avg_max_temp, o1003_avg_max_temp, o1004_avg_max_temp, o1005_avg_max_temp, o1006_avg_max_temp,
          o1007_avg_max_temp, o1008_avg_max_temp, o1009_avg_max_temp, o1010_avg_max_temp, o1011_avg_max_temp, o1012_avg_max_temp,
          o1101_avg_max_temp, o1102_avg_max_temp, o1103_avg_max_temp, o1104_avg_max_temp, o1105_avg_max_temp, o1106_avg_max_temp,
          o1107_avg_max_temp, o1108_avg_max_temp, o1109_avg_max_temp, o1110_avg_max_temp, o1111_avg_max_temp, o1112_avg_max_temp,
          o1201_avg_max_temp, o1202_avg_max_temp, o1203_avg_max_temp, o1204_avg_max_temp, o1205_avg_max_temp, o1206_avg_max_temp,
          o1207_avg_max_temp, o1208_avg_max_temp, o1209_avg_max_temp, o1210_avg_max_temp, o1211_avg_max_temp, o1212_avg_max_temp,
          o1301_avg_max_temp, o1302_avg_max_temp, o1303_avg_max_temp, o1304_avg_max_temp, o1305_avg_max_temp, o1306_avg_max_temp,
          o1307_avg_max_temp, o1308_avg_max_temp, o1309_avg_max_temp, o1310_avg_max_temp, o1311_avg_max_temp, o1312_avg_max_temp,
          o1401_avg_max_temp, o1402_avg_max_temp, o1403_avg_max_temp, o1404_avg_max_temp, o1405_avg_max_temp, o1406_avg_max_temp,
          o1407_avg_max_temp, o1408_avg_max_temp, o1409_avg_max_temp, o1410_avg_max_temp, o1411_avg_max_temp, o1412_avg_max_temp,
          o1501_avg_max_temp, o1502_avg_max_temp, o1503_avg_max_temp, o1504_avg_max_temp, o1505_avg_max_temp, o1506_avg_max_temp,
          o1507_avg_max_temp, o1508_avg_max_temp, o1509_avg_max_temp, o1510_avg_max_temp, o1511_avg_max_temp, o1512_avg_max_temp,
          o1601_avg_max_temp, o1602_avg_max_temp, o1603_avg_max_temp, o1604_avg_max_temp, o1605_avg_max_temp, o1606_avg_max_temp,
          o1607_avg_max_temp, o1608_avg_max_temp, o1609_avg_max_temp, o1610_avg_max_temp, o1611_avg_max_temp, o1612_avg_max_temp,
          o1701_avg_max_temp, o1702_avg_max_temp, o1703_avg_max_temp, o1704_avg_max_temp, o1705_avg_max_temp, o1706_avg_max_temp,
          o1707_avg_max_temp, o1708_avg_max_temp,

          o0707_avg_min_temp, o0708_avg_min_temp, o0709_avg_min_temp, o0710_avg_min_temp, o0711_avg_min_temp, o0712_avg_min_temp,
          o0801_avg_min_temp, o0802_avg_min_temp, o0803_avg_min_temp, o0804_avg_min_temp, o0805_avg_min_temp, o0806_avg_min_temp,
          o0807_avg_min_temp, o0808_avg_min_temp, o0809_avg_min_temp, o0810_avg_min_temp, o0811_avg_min_temp, o0812_avg_min_temp,
          o0901_avg_min_temp, o0902_avg_min_temp, o0903_avg_min_temp, o0904_avg_min_temp, o0905_avg_min_temp, o0906_avg_min_temp,
          o0907_avg_min_temp, o0908_avg_min_temp, o0909_avg_min_temp, o0910_avg_min_temp, o0911_avg_min_temp, o0912_avg_min_temp,
          o1001_avg_min_temp, o1002_avg_min_temp, o1003_avg_min_temp, o1004_avg_min_temp, o1005_avg_min_temp, o1006_avg_min_temp,
          o1007_avg_min_temp, o1008_avg_min_temp, o1009_avg_min_temp, o1010_avg_min_temp, o1011_avg_min_temp, o1012_avg_min_temp,
          o1101_avg_min_temp, o1102_avg_min_temp, o1103_avg_min_temp, o1104_avg_min_temp, o1105_avg_min_temp, o1106_avg_min_temp,
          o1107_avg_min_temp, o1108_avg_min_temp, o1109_avg_min_temp, o1110_avg_min_temp, o1111_avg_min_temp, o1112_avg_min_temp,
          o1201_avg_min_temp, o1202_avg_min_temp, o1203_avg_min_temp, o1204_avg_min_temp, o1205_avg_min_temp, o1206_avg_min_temp,
          o1207_avg_min_temp, o1208_avg_min_temp, o1209_avg_min_temp, o1210_avg_min_temp, o1211_avg_min_temp, o1212_avg_min_temp,
          o1301_avg_min_temp, o1302_avg_min_temp, o1303_avg_min_temp, o1304_avg_min_temp, o1305_avg_min_temp, o1306_avg_min_temp,
          o1307_avg_min_temp, o1308_avg_min_temp, o1309_avg_min_temp, o1310_avg_min_temp, o1311_avg_min_temp, o1312_avg_min_temp,
          o1401_avg_min_temp, o1402_avg_min_temp, o1403_avg_min_temp, o1404_avg_min_temp, o1405_avg_min_temp, o1406_avg_min_temp,
          o1407_avg_min_temp, o1408_avg_min_temp, o1409_avg_min_temp, o1410_avg_min_temp, o1411_avg_min_temp, o1412_avg_min_temp,
          o1501_avg_min_temp, o1502_avg_min_temp, o1503_avg_min_temp, o1504_avg_min_temp, o1505_avg_min_temp, o1506_avg_min_temp,
          o1507_avg_min_temp, o1508_avg_min_temp, o1509_avg_min_temp, o1510_avg_min_temp, o1511_avg_min_temp, o1512_avg_min_temp,
          o1601_avg_min_temp, o1602_avg_min_temp, o1603_avg_min_temp, o1604_avg_min_temp, o1605_avg_min_temp, o1606_avg_min_temp,
          o1607_avg_min_temp, o1608_avg_min_temp, o1609_avg_min_temp, o1610_avg_min_temp, o1611_avg_min_temp, o1612_avg_min_temp,
          o1701_avg_min_temp, o1702_avg_min_temp, o1703_avg_min_temp, o1704_avg_min_temp, o1705_avg_min_temp, o1706_avg_min_temp,
          o1707_avg_min_temp, o1708_avg_min_temp,

          o0707_avg_temp, o0708_avg_temp, o0709_avg_temp, o0710_avg_temp, o0711_avg_temp, o0712_avg_temp,
          o0801_avg_temp, o0802_avg_temp, o0803_avg_temp, o0804_avg_temp, o0805_avg_temp, o0806_avg_temp,
          o0807_avg_temp, o0808_avg_temp, o0809_avg_temp, o0810_avg_temp, o0811_avg_temp, o0812_avg_temp,
          o0901_avg_temp, o0902_avg_temp, o0903_avg_temp, o0904_avg_temp, o0905_avg_temp, o0906_avg_temp,
          o0907_avg_temp, o0908_avg_temp, o0909_avg_temp, o0910_avg_temp, o0911_avg_temp, o0912_avg_temp,
          o1001_avg_temp, o1002_avg_temp, o1003_avg_temp, o1004_avg_temp, o1005_avg_temp, o1006_avg_temp,
          o1007_avg_temp, o1008_avg_temp, o1009_avg_temp, o1010_avg_temp, o1011_avg_temp, o1012_avg_temp,
          o1101_avg_temp, o1102_avg_temp, o1103_avg_temp, o1104_avg_temp, o1105_avg_temp, o1106_avg_temp,
          o1107_avg_temp, o1108_avg_temp, o1109_avg_temp, o1110_avg_temp, o1111_avg_temp, o1112_avg_temp,
          o1201_avg_temp, o1202_avg_temp, o1203_avg_temp, o1204_avg_temp, o1205_avg_temp, o1206_avg_temp,
          o1207_avg_temp, o1208_avg_temp, o1209_avg_temp, o1210_avg_temp, o1211_avg_temp, o1212_avg_temp,
          o1301_avg_temp, o1302_avg_temp, o1303_avg_temp, o1304_avg_temp, o1305_avg_temp, o1306_avg_temp,
          o1307_avg_temp, o1308_avg_temp, o1309_avg_temp, o1310_avg_temp, o1311_avg_temp, o1312_avg_temp,
          o1401_avg_temp, o1402_avg_temp, o1403_avg_temp, o1404_avg_temp, o1405_avg_temp, o1406_avg_temp,
          o1407_avg_temp, o1408_avg_temp, o1409_avg_temp, o1410_avg_temp, o1411_avg_temp, o1412_avg_temp,
          o1501_avg_temp, o1502_avg_temp, o1503_avg_temp, o1504_avg_temp, o1505_avg_temp, o1506_avg_temp,
          o1507_avg_temp, o1508_avg_temp, o1509_avg_temp, o1510_avg_temp, o1511_avg_temp, o1512_avg_temp,
          o1601_avg_temp, o1602_avg_temp, o1603_avg_temp, o1604_avg_temp, o1605_avg_temp, o1606_avg_temp,
          o1607_avg_temp, o1608_avg_temp, o1609_avg_temp, o1610_avg_temp, o1611_avg_temp, o1612_avg_temp,
          o1701_avg_temp, o1702_avg_temp, o1703_avg_temp, o1704_avg_temp, o1705_avg_temp, o1706_avg_temp,
          o1707_avg_temp, o1708_avg_temp
          } = props.data

    if (o1205_avg_temp !== "") {

      if (isNaN(o0707_avg_temp)) { o0707_avg_temp = (o0707_avg_max_temp + o0707_avg_min_temp) / 2 }
      if (isNaN(o0708_avg_temp)) { o0708_avg_temp = (o0708_avg_max_temp + o0708_avg_min_temp) / 2 }
      if (isNaN(o0709_avg_temp)) { o0709_avg_temp = (o0709_avg_max_temp + o0709_avg_min_temp) / 2 }
      if (isNaN(o0710_avg_temp)) { o0710_avg_temp = (o0710_avg_max_temp + o0710_avg_min_temp) / 2 }
      if (isNaN(o0711_avg_temp)) { o0711_avg_temp = (o0711_avg_max_temp + o0711_avg_min_temp) / 2 }
      if (isNaN(o0712_avg_temp)) { o0712_avg_temp = (o0712_avg_max_temp + o0712_avg_min_temp) / 2 }
      if (isNaN(o0801_avg_temp)) { o0801_avg_temp = (o0801_avg_max_temp + o0801_avg_min_temp) / 2 }
      if (isNaN(o0802_avg_temp)) { o0802_avg_temp = (o0802_avg_max_temp + o0802_avg_min_temp) / 2 }
      if (isNaN(o0803_avg_temp)) { o0803_avg_temp = (o0803_avg_max_temp + o0803_avg_min_temp) / 2 }
      if (isNaN(o0804_avg_temp)) { o0804_avg_temp = (o0804_avg_max_temp + o0804_avg_min_temp) / 2 }
      if (isNaN(o0805_avg_temp)) { o0805_avg_temp = (o0805_avg_max_temp + o0805_avg_min_temp) / 2 }
      if (isNaN(o0806_avg_temp)) { o0806_avg_temp = (o0806_avg_max_temp + o0806_avg_min_temp) / 2 }
      if (isNaN(o0807_avg_temp)) { o0807_avg_temp = (o0807_avg_max_temp + o0807_avg_min_temp) / 2 }
      if (isNaN(o0808_avg_temp)) { o0808_avg_temp = (o0808_avg_max_temp + o0808_avg_min_temp) / 2 }
      if (isNaN(o0809_avg_temp)) { o0809_avg_temp = (o0809_avg_max_temp + o0809_avg_min_temp) / 2 }
      if (isNaN(o0810_avg_temp)) { o0810_avg_temp = (o0810_avg_max_temp + o0810_avg_min_temp) / 2 }
      if (isNaN(o0811_avg_temp)) { o0811_avg_temp = (o0811_avg_max_temp + o0811_avg_min_temp) / 2 }
      if (isNaN(o0812_avg_temp)) { o0812_avg_temp = (o0812_avg_max_temp + o0812_avg_min_temp) / 2 }
      if (isNaN(o0901_avg_temp)) { o0901_avg_temp = (o0901_avg_max_temp + o0901_avg_min_temp) / 2 }
      if (isNaN(o0902_avg_temp)) { o0902_avg_temp = (o0902_avg_max_temp + o0902_avg_min_temp) / 2 }
      if (isNaN(o0903_avg_temp)) { o0903_avg_temp = (o0903_avg_max_temp + o0903_avg_min_temp) / 2 }
      if (isNaN(o0904_avg_temp)) { o0904_avg_temp = (o0904_avg_max_temp + o0904_avg_min_temp) / 2 }
      if (isNaN(o0905_avg_temp)) { o0905_avg_temp = (o0905_avg_max_temp + o0905_avg_min_temp) / 2 }
      if (isNaN(o0906_avg_temp)) { o0906_avg_temp = (o0906_avg_max_temp + o0906_avg_min_temp) / 2 }
      if (isNaN(o0907_avg_temp)) { o0907_avg_temp = (o0907_avg_max_temp + o0907_avg_min_temp) / 2 }
      if (isNaN(o0908_avg_temp)) { o0908_avg_temp = (o0908_avg_max_temp + o0908_avg_min_temp) / 2 }
      if (isNaN(o0909_avg_temp)) { o0909_avg_temp = (o0909_avg_max_temp + o0909_avg_min_temp) / 2 }
      if (isNaN(o0910_avg_temp)) { o0910_avg_temp = (o0910_avg_max_temp + o0910_avg_min_temp) / 2 }
      if (isNaN(o0911_avg_temp)) { o0911_avg_temp = (o0911_avg_max_temp + o0911_avg_min_temp) / 2 }
      if (isNaN(o0912_avg_temp)) { o0912_avg_temp = (o0912_avg_max_temp + o0912_avg_min_temp) / 2 }
      if (isNaN(o1001_avg_temp)) { o1001_avg_temp = (o1001_avg_max_temp + o1001_avg_min_temp) / 2 }
      if (isNaN(o1002_avg_temp)) { o1002_avg_temp = (o1002_avg_max_temp + o1002_avg_min_temp) / 2 }
      if (isNaN(o1003_avg_temp)) { o1003_avg_temp = (o1003_avg_max_temp + o1003_avg_min_temp) / 2 }
      if (isNaN(o1004_avg_temp)) { o1004_avg_temp = (o1004_avg_max_temp + o1004_avg_min_temp) / 2 }
      if (isNaN(o1005_avg_temp)) { o1005_avg_temp = (o1005_avg_max_temp + o1005_avg_min_temp) / 2 }
      if (isNaN(o1006_avg_temp)) { o1006_avg_temp = (o1006_avg_max_temp + o1006_avg_min_temp) / 2 }
      if (isNaN(o1007_avg_temp)) { o1007_avg_temp = (o1007_avg_max_temp + o1007_avg_min_temp) / 2 }
      if (isNaN(o1008_avg_temp)) { o1008_avg_temp = (o1008_avg_max_temp + o1008_avg_min_temp) / 2 }
      if (isNaN(o1009_avg_temp)) { o1009_avg_temp = (o1009_avg_max_temp + o1009_avg_min_temp) / 2 }
      if (isNaN(o1010_avg_temp)) { o1010_avg_temp = (o1010_avg_max_temp + o1010_avg_min_temp) / 2 }
      if (isNaN(o1011_avg_temp)) { o1011_avg_temp = (o1011_avg_max_temp + o1011_avg_min_temp) / 2 }
      if (isNaN(o1012_avg_temp)) { o1012_avg_temp = (o1012_avg_max_temp + o1012_avg_min_temp) / 2 }
      if (isNaN(o1101_avg_temp)) { o1101_avg_temp = (o1101_avg_max_temp + o1101_avg_min_temp) / 2 }
      if (isNaN(o1102_avg_temp)) { o1102_avg_temp = (o1102_avg_max_temp + o1102_avg_min_temp) / 2 }
      if (isNaN(o1103_avg_temp)) { o1103_avg_temp = (o1103_avg_max_temp + o1103_avg_min_temp) / 2 }
      if (isNaN(o1104_avg_temp)) { o1104_avg_temp = (o1104_avg_max_temp + o1104_avg_min_temp) / 2 }
      if (isNaN(o1105_avg_temp)) { o1105_avg_temp = (o1105_avg_max_temp + o1105_avg_min_temp) / 2 }
      if (isNaN(o1106_avg_temp)) { o1106_avg_temp = (o1106_avg_max_temp + o1106_avg_min_temp) / 2 }
      if (isNaN(o1107_avg_temp)) { o1107_avg_temp = (o1107_avg_max_temp + o1107_avg_min_temp) / 2 }
      if (isNaN(o1108_avg_temp)) { o1108_avg_temp = (o1108_avg_max_temp + o1108_avg_min_temp) / 2 }
      if (isNaN(o1109_avg_temp)) { o1109_avg_temp = (o1109_avg_max_temp + o1109_avg_min_temp) / 2 }
      if (isNaN(o1110_avg_temp)) { o1110_avg_temp = (o1110_avg_max_temp + o1110_avg_min_temp) / 2 }
      if (isNaN(o1111_avg_temp)) { o1111_avg_temp = (o1111_avg_max_temp + o1111_avg_min_temp) / 2 }
      if (isNaN(o1112_avg_temp)) { o1112_avg_temp = (o1112_avg_max_temp + o1112_avg_min_temp) / 2 }
      if (isNaN(o1201_avg_temp)) { o1201_avg_temp = (o1201_avg_max_temp + o1201_avg_min_temp) / 2 }
      if (isNaN(o1202_avg_temp)) { o1202_avg_temp = (o1202_avg_max_temp + o1202_avg_min_temp) / 2 }
      if (isNaN(o1203_avg_temp)) { o1203_avg_temp = (o1203_avg_max_temp + o1203_avg_min_temp) / 2 }
      if (isNaN(o1204_avg_temp)) { o1204_avg_temp = (o1204_avg_max_temp + o1204_avg_min_temp) / 2 }
      if (isNaN(o1205_avg_temp)) { o1205_avg_temp = (o1205_avg_max_temp + o1205_avg_min_temp) / 2 }
      if (isNaN(o1206_avg_temp)) { o1206_avg_temp = (o1206_avg_max_temp + o1206_avg_min_temp) / 2 }
      if (isNaN(o1207_avg_temp)) { o1207_avg_temp = (o1207_avg_max_temp + o1207_avg_min_temp) / 2 }
      if (isNaN(o1208_avg_temp)) { o1208_avg_temp = (o1208_avg_max_temp + o1208_avg_min_temp) / 2 }
      if (isNaN(o1209_avg_temp)) { o1209_avg_temp = (o1209_avg_max_temp + o1209_avg_min_temp) / 2 }
      if (isNaN(o1210_avg_temp)) { o1210_avg_temp = (o1210_avg_max_temp + o1210_avg_min_temp) / 2 }
      if (isNaN(o1211_avg_temp)) { o1211_avg_temp = (o1211_avg_max_temp + o1211_avg_min_temp) / 2 }
      if (isNaN(o1212_avg_temp)) { o1212_avg_temp = (o1212_avg_max_temp + o1212_avg_min_temp) / 2 }
      if (isNaN(o1301_avg_temp)) { o1301_avg_temp = (o1301_avg_max_temp + o1301_avg_min_temp) / 2 }
      if (isNaN(o1302_avg_temp)) { o1302_avg_temp = (o1302_avg_max_temp + o1302_avg_min_temp) / 2 }
      if (isNaN(o1303_avg_temp)) { o1303_avg_temp = (o1303_avg_max_temp + o1303_avg_min_temp) / 2 }
      if (isNaN(o1304_avg_temp)) { o1304_avg_temp = (o1304_avg_max_temp + o1304_avg_min_temp) / 2 }
      if (isNaN(o1305_avg_temp)) { o1305_avg_temp = (o1305_avg_max_temp + o1305_avg_min_temp) / 2 }
      if (isNaN(o1306_avg_temp)) { o1306_avg_temp = (o1306_avg_max_temp + o1306_avg_min_temp) / 2 }
      if (isNaN(o1307_avg_temp)) { o1307_avg_temp = (o1307_avg_max_temp + o1307_avg_min_temp) / 2 }
      if (isNaN(o1308_avg_temp)) { o1308_avg_temp = (o1308_avg_max_temp + o1308_avg_min_temp) / 2 }
      if (isNaN(o1309_avg_temp)) { o1309_avg_temp = (o1309_avg_max_temp + o1309_avg_min_temp) / 2 }
      if (isNaN(o1310_avg_temp)) { o1310_avg_temp = (o1310_avg_max_temp + o1310_avg_min_temp) / 2 }
      if (isNaN(o1311_avg_temp)) { o1311_avg_temp = (o1311_avg_max_temp + o1311_avg_min_temp) / 2 }
      if (isNaN(o1312_avg_temp)) { o1312_avg_temp = (o1312_avg_max_temp + o1312_avg_min_temp) / 2 }
      if (isNaN(o1401_avg_temp)) { o1401_avg_temp = (o1401_avg_max_temp + o1401_avg_min_temp) / 2 }
      if (isNaN(o1402_avg_temp)) { o1402_avg_temp = (o1402_avg_max_temp + o1402_avg_min_temp) / 2 }
      if (isNaN(o1403_avg_temp)) { o1403_avg_temp = (o1403_avg_max_temp + o1403_avg_min_temp) / 2 }
      if (isNaN(o1404_avg_temp)) { o1404_avg_temp = (o1404_avg_max_temp + o1404_avg_min_temp) / 2 }
      if (isNaN(o1405_avg_temp)) { o1405_avg_temp = (o1405_avg_max_temp + o1405_avg_min_temp) / 2 }
      if (isNaN(o1406_avg_temp)) { o1406_avg_temp = (o1406_avg_max_temp + o1406_avg_min_temp) / 2 }
      if (isNaN(o1407_avg_temp)) { o1407_avg_temp = (o1407_avg_max_temp + o1407_avg_min_temp) / 2 }
      if (isNaN(o1408_avg_temp)) { o1408_avg_temp = (o1408_avg_max_temp + o1408_avg_min_temp) / 2 }
      if (isNaN(o1409_avg_temp)) { o1409_avg_temp = (o1409_avg_max_temp + o1409_avg_min_temp) / 2 }
      if (isNaN(o1410_avg_temp)) { o1410_avg_temp = (o1410_avg_max_temp + o1410_avg_min_temp) / 2 }
      if (isNaN(o1411_avg_temp)) { o1411_avg_temp = (o1411_avg_max_temp + o1411_avg_min_temp) / 2 }
      if (isNaN(o1412_avg_temp)) { o1412_avg_temp = (o1412_avg_max_temp + o1412_avg_min_temp) / 2 }
      if (isNaN(o1501_avg_temp)) { o1501_avg_temp = (o1501_avg_max_temp + o1501_avg_min_temp) / 2 }
      if (isNaN(o1502_avg_temp)) { o1502_avg_temp = (o1502_avg_max_temp + o1502_avg_min_temp) / 2 }
      if (isNaN(o1503_avg_temp)) { o1503_avg_temp = (o1503_avg_max_temp + o1503_avg_min_temp) / 2 }
      if (isNaN(o1504_avg_temp)) { o1504_avg_temp = (o1504_avg_max_temp + o1504_avg_min_temp) / 2 }
      if (isNaN(o1505_avg_temp)) { o1505_avg_temp = (o1505_avg_max_temp + o1505_avg_min_temp) / 2 }
      if (isNaN(o1506_avg_temp)) { o1506_avg_temp = (o1506_avg_max_temp + o1506_avg_min_temp) / 2 }
      if (isNaN(o1507_avg_temp)) { o1507_avg_temp = (o1507_avg_max_temp + o1507_avg_min_temp) / 2 }
      if (isNaN(o1508_avg_temp)) { o1508_avg_temp = (o1508_avg_max_temp + o1508_avg_min_temp) / 2 }
      if (isNaN(o1509_avg_temp)) { o1509_avg_temp = (o1509_avg_max_temp + o1509_avg_min_temp) / 2 }
      if (isNaN(o1510_avg_temp)) { o1510_avg_temp = (o1510_avg_max_temp + o1510_avg_min_temp) / 2 }
      if (isNaN(o1511_avg_temp)) { o1511_avg_temp = (o1511_avg_max_temp + o1511_avg_min_temp) / 2 }
      if (isNaN(o1512_avg_temp)) { o1512_avg_temp = (o1512_avg_max_temp + o1512_avg_min_temp) / 2 }
      if (isNaN(o1601_avg_temp)) { o1601_avg_temp = (o1601_avg_max_temp + o1601_avg_min_temp) / 2 }
      if (isNaN(o1602_avg_temp)) { o1602_avg_temp = (o1602_avg_max_temp + o1602_avg_min_temp) / 2 }
      if (isNaN(o1603_avg_temp)) { o1603_avg_temp = (o1603_avg_max_temp + o1603_avg_min_temp) / 2 }
      if (isNaN(o1604_avg_temp)) { o1604_avg_temp = (o1604_avg_max_temp + o1604_avg_min_temp) / 2 }
      if (isNaN(o1605_avg_temp)) { o1605_avg_temp = (o1605_avg_max_temp + o1605_avg_min_temp) / 2 }
      if (isNaN(o1606_avg_temp)) { o1606_avg_temp = (o1606_avg_max_temp + o1606_avg_min_temp) / 2 }
      if (isNaN(o1607_avg_temp)) { o1607_avg_temp = (o1607_avg_max_temp + o1607_avg_min_temp) / 2 }
      if (isNaN(o1608_avg_temp)) { o1608_avg_temp = (o1608_avg_max_temp + o1608_avg_min_temp) / 2 }
      if (isNaN(o1609_avg_temp)) { o1609_avg_temp = (o1609_avg_max_temp + o1609_avg_min_temp) / 2 }
      if (isNaN(o1610_avg_temp)) { o1610_avg_temp = (o1610_avg_max_temp + o1610_avg_min_temp) / 2 }
      if (isNaN(o1611_avg_temp)) { o1611_avg_temp = (o1611_avg_max_temp + o1611_avg_min_temp) / 2 }
      if (isNaN(o1612_avg_temp)) { o1612_avg_temp = (o1612_avg_max_temp + o1612_avg_min_temp) / 2 }
      if (isNaN(o1701_avg_temp)) { o1701_avg_temp = (o1701_avg_max_temp + o1701_avg_min_temp) / 2 }
      if (isNaN(o1702_avg_temp)) { o1702_avg_temp = (o1702_avg_max_temp + o1702_avg_min_temp) / 2 }
      if (isNaN(o1703_avg_temp)) { o1703_avg_temp = (o1703_avg_max_temp + o1703_avg_min_temp) / 2 }
      if (isNaN(o1704_avg_temp)) { o1704_avg_temp = (o1704_avg_max_temp + o1704_avg_min_temp) / 2 }
      if (isNaN(o1705_avg_temp)) { o1705_avg_temp = (o1705_avg_max_temp + o1705_avg_min_temp) / 2 }
      if (isNaN(o1706_avg_temp)) { o1706_avg_temp = (o1706_avg_max_temp + o1706_avg_min_temp) / 2 }
      if (isNaN(o1707_avg_temp)) { o1707_avg_temp = (o1707_avg_max_temp + o1707_avg_min_temp) / 2 }
      if (isNaN(o1708_avg_temp)) { o1708_avg_temp = (o1708_avg_max_temp + o1708_avg_min_temp) / 2 }

      temp_height = Math.ceil(Math.max(o0705_avg_max_temp, o0706_avg_max_temp,
          o0707_avg_max_temp, o0708_avg_max_temp, o0709_avg_max_temp, o0710_avg_max_temp, o0711_avg_max_temp, o0712_avg_max_temp,
          o0801_avg_max_temp, o0802_avg_max_temp, o0803_avg_max_temp, o0804_avg_max_temp, o0805_avg_max_temp, o0806_avg_max_temp,
          o0807_avg_max_temp, o0808_avg_max_temp, o0809_avg_max_temp, o0810_avg_max_temp, o0811_avg_max_temp, o0812_avg_max_temp,
          o0901_avg_max_temp, o0902_avg_max_temp, o0903_avg_max_temp, o0904_avg_max_temp, o0905_avg_max_temp, o0906_avg_max_temp,
          o0907_avg_max_temp, o0908_avg_max_temp, o0909_avg_max_temp, o0910_avg_max_temp, o0911_avg_max_temp, o0912_avg_max_temp,
          o1001_avg_max_temp, o1002_avg_max_temp, o1003_avg_max_temp, o1004_avg_max_temp, o1005_avg_max_temp, o1006_avg_max_temp,
          o1007_avg_max_temp, o1008_avg_max_temp, o1009_avg_max_temp, o1010_avg_max_temp, o1011_avg_max_temp, o1012_avg_max_temp,
          o1101_avg_max_temp, o1102_avg_max_temp, o1103_avg_max_temp, o1104_avg_max_temp, o1105_avg_max_temp, o1106_avg_max_temp,
          o1107_avg_max_temp, o1108_avg_max_temp, o1109_avg_max_temp, o1110_avg_max_temp, o1111_avg_max_temp, o1112_avg_max_temp,
          o1201_avg_max_temp, o1202_avg_max_temp, o1203_avg_max_temp, o1204_avg_max_temp, o1205_avg_max_temp, o1206_avg_max_temp,
          o1207_avg_max_temp, o1208_avg_max_temp, o1209_avg_max_temp, o1210_avg_max_temp, o1211_avg_max_temp, o1212_avg_max_temp,
          o1301_avg_max_temp, o1302_avg_max_temp, o1303_avg_max_temp, o1304_avg_max_temp, o1305_avg_max_temp, o1306_avg_max_temp,
          o1307_avg_max_temp, o1308_avg_max_temp, o1309_avg_max_temp, o1310_avg_max_temp, o1311_avg_max_temp, o1312_avg_max_temp,
          o1401_avg_max_temp, o1402_avg_max_temp, o1403_avg_max_temp, o1404_avg_max_temp, o1405_avg_max_temp, o1406_avg_max_temp,
          o1407_avg_max_temp, o1408_avg_max_temp, o1409_avg_max_temp, o1410_avg_max_temp, o1411_avg_max_temp, o1412_avg_max_temp,
          o1501_avg_max_temp, o1502_avg_max_temp, o1503_avg_max_temp, o1504_avg_max_temp, o1505_avg_max_temp, o1506_avg_max_temp,
          o1507_avg_max_temp, o1508_avg_max_temp, o1509_avg_max_temp, o1510_avg_max_temp, o1511_avg_max_temp, o1512_avg_max_temp,
          o1601_avg_max_temp, o1602_avg_max_temp, o1603_avg_max_temp, o1604_avg_max_temp, o1605_avg_max_temp, o1606_avg_max_temp,
          o1607_avg_max_temp, o1608_avg_max_temp, o1609_avg_max_temp, o1610_avg_max_temp, o1611_avg_max_temp, o1612_avg_max_temp,
          o1701_avg_max_temp, o1702_avg_max_temp, o1703_avg_max_temp, o1704_avg_max_temp, o1705_avg_max_temp, o1706_avg_max_temp,
          o1707_avg_max_temp, o1708_avg_max_temp ) / 10) * 10

    }

    const year_bar = labels.map(x => x === props.year ? temp_height : null )

    const data_temps = {
      labels: labels,
      config: {
        layout: {
          padding: {
            left: 100,
            right: 100
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              maxRotation: 90,
              minRotation: 90
            }
          }]
        }
      },
      datasets: [
        {
          label: 'Chosen Date',
          type: 'bar',
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderColor: 'rgba(0,0,0,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0,0,0,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(0,0,0,1)',
          pointHoverBorderColor: 'rgba(0,0,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: year_bar
        },
        {
          label: 'High Temps',
          type: 'line',
          fill: "+1",
          lineTension: 0.1,
          backgroundColor: 'rgba(255,0,77,0.4)',
          borderColor: 'rgba(255,0,77,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255,0,77,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255,0,77,1)',
          pointHoverBorderColor: 'rgba(255,0,77,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [ o0705_avg_max_temp, o0706_avg_max_temp,
              o0707_avg_max_temp, o0708_avg_max_temp, o0709_avg_max_temp, o0710_avg_max_temp, o0711_avg_max_temp, o0712_avg_max_temp,
              o0801_avg_max_temp, o0802_avg_max_temp, o0803_avg_max_temp, o0804_avg_max_temp, o0805_avg_max_temp, o0806_avg_max_temp,
              o0807_avg_max_temp, o0808_avg_max_temp, o0809_avg_max_temp, o0810_avg_max_temp, o0811_avg_max_temp, o0812_avg_max_temp,
              o0901_avg_max_temp, o0902_avg_max_temp, o0903_avg_max_temp, o0904_avg_max_temp, o0905_avg_max_temp, o0906_avg_max_temp,
              o0907_avg_max_temp, o0908_avg_max_temp, o0909_avg_max_temp, o0910_avg_max_temp, o0911_avg_max_temp, o0912_avg_max_temp,
              o1001_avg_max_temp, o1002_avg_max_temp, o1003_avg_max_temp, o1004_avg_max_temp, o1005_avg_max_temp, o1006_avg_max_temp,
              o1007_avg_max_temp, o1008_avg_max_temp, o1009_avg_max_temp, o1010_avg_max_temp, o1011_avg_max_temp, o1012_avg_max_temp,
              o1101_avg_max_temp, o1102_avg_max_temp, o1103_avg_max_temp, o1104_avg_max_temp, o1105_avg_max_temp, o1106_avg_max_temp,
              o1107_avg_max_temp, o1108_avg_max_temp, o1109_avg_max_temp, o1110_avg_max_temp, o1111_avg_max_temp, o1112_avg_max_temp,
              o1201_avg_max_temp, o1202_avg_max_temp, o1203_avg_max_temp, o1204_avg_max_temp, o1205_avg_max_temp, o1206_avg_max_temp,
              o1207_avg_max_temp, o1208_avg_max_temp, o1209_avg_max_temp, o1210_avg_max_temp, o1211_avg_max_temp, o1212_avg_max_temp,
              o1301_avg_max_temp, o1302_avg_max_temp, o1303_avg_max_temp, o1304_avg_max_temp, o1305_avg_max_temp, o1306_avg_max_temp,
              o1307_avg_max_temp, o1308_avg_max_temp, o1309_avg_max_temp, o1310_avg_max_temp, o1311_avg_max_temp, o1312_avg_max_temp,
              o1401_avg_max_temp, o1402_avg_max_temp, o1403_avg_max_temp, o1404_avg_max_temp, o1405_avg_max_temp, o1406_avg_max_temp,
              o1407_avg_max_temp, o1408_avg_max_temp, o1409_avg_max_temp, o1410_avg_max_temp, o1411_avg_max_temp, o1412_avg_max_temp,
              o1501_avg_max_temp, o1502_avg_max_temp, o1503_avg_max_temp, o1504_avg_max_temp, o1505_avg_max_temp, o1506_avg_max_temp,
              o1507_avg_max_temp, o1508_avg_max_temp, o1509_avg_max_temp, o1510_avg_max_temp, o1511_avg_max_temp, o1512_avg_max_temp,
              o1601_avg_max_temp, o1602_avg_max_temp, o1603_avg_max_temp, o1604_avg_max_temp, o1605_avg_max_temp, o1606_avg_max_temp,
              o1607_avg_max_temp, o1608_avg_max_temp, o1609_avg_max_temp, o1610_avg_max_temp, o1611_avg_max_temp, o1612_avg_max_temp,
              o1701_avg_max_temp, o1702_avg_max_temp, o1703_avg_max_temp, o1704_avg_max_temp, o1705_avg_max_temp, o1706_avg_max_temp,
              o1707_avg_max_temp, o1708_avg_max_temp  ]
        },
        {
          label: 'Average Temps',
          type: 'line',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255, 116, 0,0.4)',
          borderColor: 'rgba(255, 116, 0,0.4)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255, 116, 0,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255, 116, 0,1)',
          pointHoverBorderColor: 'rgba(255, 116, 0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [ o0705_avg_temp, o0706_avg_temp,
              o0707_avg_temp, o0708_avg_temp, o0709_avg_temp, o0710_avg_temp, o0711_avg_temp, o0712_avg_temp,
              o0801_avg_temp, o0802_avg_temp, o0803_avg_temp, o0804_avg_temp, o0805_avg_temp, o0806_avg_temp,
              o0807_avg_temp, o0808_avg_temp, o0809_avg_temp, o0810_avg_temp, o0811_avg_temp, o0812_avg_temp,
              o0901_avg_temp, o0902_avg_temp, o0903_avg_temp, o0904_avg_temp, o0905_avg_temp, o0906_avg_temp,
              o0907_avg_temp, o0908_avg_temp, o0909_avg_temp, o0910_avg_temp, o0911_avg_temp, o0912_avg_temp,
              o1001_avg_temp, o1002_avg_temp, o1003_avg_temp, o1004_avg_temp, o1005_avg_temp, o1006_avg_temp,
              o1007_avg_temp, o1008_avg_temp, o1009_avg_temp, o1010_avg_temp, o1011_avg_temp, o1012_avg_temp,
              o1101_avg_temp, o1102_avg_temp, o1103_avg_temp, o1104_avg_temp, o1105_avg_temp, o1106_avg_temp,
              o1107_avg_temp, o1108_avg_temp, o1109_avg_temp, o1110_avg_temp, o1111_avg_temp, o1112_avg_temp,
              o1201_avg_temp, o1202_avg_temp, o1203_avg_temp, o1204_avg_temp, o1205_avg_temp, o1206_avg_temp,
              o1207_avg_temp, o1208_avg_temp, o1209_avg_temp, o1210_avg_temp, o1211_avg_temp, o1212_avg_temp,
              o1301_avg_temp, o1302_avg_temp, o1303_avg_temp, o1304_avg_temp, o1305_avg_temp, o1306_avg_temp,
              o1307_avg_temp, o1308_avg_temp, o1309_avg_temp, o1310_avg_temp, o1311_avg_temp, o1312_avg_temp,
              o1401_avg_temp, o1402_avg_temp, o1403_avg_temp, o1404_avg_temp, o1405_avg_temp, o1406_avg_temp,
              o1407_avg_temp, o1408_avg_temp, o1409_avg_temp, o1410_avg_temp, o1411_avg_temp, o1412_avg_temp,
              o1501_avg_temp, o1502_avg_temp, o1503_avg_temp, o1504_avg_temp, o1505_avg_temp, o1506_avg_temp,
              o1507_avg_temp, o1508_avg_temp, o1509_avg_temp, o1510_avg_temp, o1511_avg_temp, o1512_avg_temp,
              o1601_avg_temp, o1602_avg_temp, o1603_avg_temp, o1604_avg_temp, o1605_avg_temp, o1606_avg_temp,
              o1607_avg_temp, o1608_avg_temp, o1609_avg_temp, o1610_avg_temp, o1611_avg_temp, o1612_avg_temp,
              o1701_avg_temp, o1702_avg_temp, o1703_avg_temp, o1704_avg_temp, o1705_avg_temp, o1706_avg_temp,
              o1707_avg_temp, o1708_avg_temp ]
        },
        {
          label: 'Low Temps',
          type: 'line',
          fill: '-1',
          lineTension: 0.1,
          backgroundColor: 'rgba(169, 13, 255,0.4)',
          borderColor: 'rgba(169, 13, 255,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(169, 13, 255,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(169, 13, 255,1)',
          pointHoverBorderColor: 'rgba(169, 13, 255,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [ o0705_avg_min_temp, o0706_avg_min_temp,
              o0707_avg_min_temp, o0708_avg_min_temp, o0709_avg_min_temp, o0710_avg_min_temp, o0711_avg_min_temp, o0712_avg_min_temp,
              o0801_avg_min_temp, o0802_avg_min_temp, o0803_avg_min_temp, o0804_avg_min_temp, o0805_avg_min_temp, o0806_avg_min_temp,
              o0807_avg_min_temp, o0808_avg_min_temp, o0809_avg_min_temp, o0810_avg_min_temp, o0811_avg_min_temp, o0812_avg_min_temp,
              o0901_avg_min_temp, o0902_avg_min_temp, o0903_avg_min_temp, o0904_avg_min_temp, o0905_avg_min_temp, o0906_avg_min_temp,
              o0907_avg_min_temp, o0908_avg_min_temp, o0909_avg_min_temp, o0910_avg_min_temp, o0911_avg_min_temp, o0912_avg_min_temp,
              o1001_avg_min_temp, o1002_avg_min_temp, o1003_avg_min_temp, o1004_avg_min_temp, o1005_avg_min_temp, o1006_avg_min_temp,
              o1007_avg_min_temp, o1008_avg_min_temp, o1009_avg_min_temp, o1010_avg_min_temp, o1011_avg_min_temp, o1012_avg_min_temp,
              o1101_avg_min_temp, o1102_avg_min_temp, o1103_avg_min_temp, o1104_avg_min_temp, o1105_avg_min_temp, o1106_avg_min_temp,
              o1107_avg_min_temp, o1108_avg_min_temp, o1109_avg_min_temp, o1110_avg_min_temp, o1111_avg_min_temp, o1112_avg_min_temp,
              o1201_avg_min_temp, o1202_avg_min_temp, o1203_avg_min_temp, o1204_avg_min_temp, o1205_avg_min_temp, o1206_avg_min_temp,
              o1207_avg_min_temp, o1208_avg_min_temp, o1209_avg_min_temp, o1210_avg_min_temp, o1211_avg_min_temp, o1212_avg_min_temp,
              o1301_avg_min_temp, o1302_avg_min_temp, o1303_avg_min_temp, o1304_avg_min_temp, o1305_avg_min_temp, o1306_avg_min_temp,
              o1307_avg_min_temp, o1308_avg_min_temp, o1309_avg_min_temp, o1310_avg_min_temp, o1311_avg_min_temp, o1312_avg_min_temp,
              o1401_avg_min_temp, o1402_avg_min_temp, o1403_avg_min_temp, o1404_avg_min_temp, o1405_avg_min_temp, o1406_avg_min_temp,
              o1407_avg_min_temp, o1408_avg_min_temp, o1409_avg_min_temp, o1410_avg_min_temp, o1411_avg_min_temp, o1412_avg_min_temp,
              o1501_avg_min_temp, o1502_avg_min_temp, o1503_avg_min_temp, o1504_avg_min_temp, o1505_avg_min_temp, o1506_avg_min_temp,
              o1507_avg_min_temp, o1508_avg_min_temp, o1509_avg_min_temp, o1510_avg_min_temp, o1511_avg_min_temp, o1512_avg_min_temp,
              o1601_avg_min_temp, o1602_avg_min_temp, o1603_avg_min_temp, o1604_avg_min_temp, o1605_avg_min_temp, o1606_avg_min_temp,
              o1607_avg_min_temp, o1608_avg_min_temp, o1609_avg_min_temp, o1610_avg_min_temp, o1611_avg_min_temp, o1612_avg_min_temp,
              o1701_avg_min_temp, o1702_avg_min_temp, o1703_avg_min_temp, o1704_avg_min_temp, o1705_avg_min_temp, o1706_avg_min_temp,
              o1707_avg_min_temp, o1708_avg_min_temp ]
        }
      ]
    };

    return (
      <div>
        <h2>Historical Information</h2>
        <Bar data={data_temps} height={150}/>
      </div>
    );

}

export default Graph
