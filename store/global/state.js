export default {
  prefectures: [],
  cities: [],
  userInfo: {
    // 0 : 寒がり 1 : 普通 2 : 暑がり
    temperature: [
      { label: '寒がり', value: 'cold', isSelect: false },
      { label: '普通', value: 'normal', isSelect: false },
      { label: '暑がり', value: 'heat', isSelect: false }
    ],
  },
  select: {
    pref: '',
    city: '',
    weather: ''
  },
  weather: {}
}
