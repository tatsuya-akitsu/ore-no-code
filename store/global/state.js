export default {
  prefectures: [],
  cities: [],
  userInfo: {
    temperature: [
      {
        label: '寒がり',
        value: 'cold',
        isSelect: false,
        image: 'men-cold.svg'
      },
      {
        label: '普通',
        value: 'normal',
        isSelect: false,
        image: 'men-normal.svg'
      },
      { label: '暑がり', value: 'heat', isSelect: false, image: 'men-hot.svg' }
    ]
  },
  select: {
    pref: '',
    city: '',
    weather: ''
  },
  isWeatherError: false,
  isWeather: false,
  weather: {},
  resultCity: '',
  results: [
    {
      image: 'fashion-very-hot@2x.png',
      title: '26度以上：半袖、短パンで過ごせる',
      text:
        '日向にいると汗ばむ陽気。<br>日中を通して半袖、短パンで過ごせます。',
      temp_max: 26
    },
    {
      image: 'fashion-hot@2x.png',
      title: '21度～25度：半袖と長袖の分かれ目',
      text:
        '日差しが出ていれば半袖、雨や曇りの場合は、長袖が良いかもしれません。',
      temp_max: 25,
      temp_min: 21
    },
    {
      image: 'fashion-normal@2x.png',
      title: '16度～20度：少し肌寒い、重ね着が必要',
      text:
        'トップス1枚だけでは肌寒い気温。<br>カーディガンや、ジャケットなどを羽織ると良いでしょう。',
      temp_max: 20,
      temp_min: 16
    },
    {
      image: 'fashion-cold@2x.png',
      title: '12度～15度：薄めのアウターが必要',
      text:
        '冬用のニットやトレンチコートなど、薄めのア ウターがあると安心です。',
      temp_max: 15,
      temp_min: 12
    },
    {
      image: 'fashion-very-cold@2x.png',
      title: '11度以下：本格的な防寒が必要',
      text:
        'チェスターコートや手袋、マフラーが必要になってきます。<br>5度以下になるようであれば、ダウン、ウールコートなどを準備しておきましょう。',
      temp_min: 11
    }
  ]
}
