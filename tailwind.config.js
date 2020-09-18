// Use material-ui palette. Adapted from
// https://gist.github.com/arlomba/6b0b87ea214f9430d4d7ad2950e9ab52
let colors = {
  'mui-red-50': '#FFEBEE',
  'mui-red-100': '#FFCDD2',
  'mui-red-200': '#EF9A9A',
  'mui-red-300': '#E57373',
  'mui-red-400': '#EF5350',
  'mui-red-500': '#F44336',
  'mui-red-600': '#E53935',
  'mui-red-700': '#D32F2F',
  'mui-red-800': '#C62828',
  'mui-red-900': '#B71C1C',
  'mui-red-a100': '#FF8A80',
  'mui-red-a200': '#FF5252',
  'mui-red-a400': '#FF1744',
  'mui-red-a700': '#D50000',

  'mui-pink-50': '#FCE4EC',
  'mui-pink-100': '#F8BBD0',
  'mui-pink-200': '#F48FB1',
  'mui-pink-300': '#F06292',
  'mui-pink-400': '#EC407A',
  'mui-pink-500': '#E91E63',
  'mui-pink-600': '#D81B60',
  'mui-pink-700': '#C2185B',
  'mui-pink-800': '#AD1457',
  'mui-pink-900': '#880E4F',
  'mui-pink-a100': '#FF80AB',
  'mui-pink-a200': '#FF4081',
  'mui-pink-a400': '#F50057',
  'mui-pink-a700': '#C51162',

  'mui-purple-50': '#F3E5F5',
  'mui-purple-100': '#E1BEE7',
  'mui-purple-200': '#CE93D8',
  'mui-purple-300': '#BA68C8',
  'mui-purple-400': '#AB47BC',
  'mui-purple-500': '#9C27B0',
  'mui-purple-600': '#8E24AA',
  'mui-purple-700': '#7B1FA2',
  'mui-purple-800': '#6A1B9A',
  'mui-purple-900': '#4A148C',
  'mui-purple-a100': '#EA80FC',
  'mui-purple-a200': '#E040FB',
  'mui-purple-a400': '#D500F9',
  'mui-purple-a700': '#AA00FF',

  'mui-deep-purple-50': '#EDE7F6',
  'mui-deep-purple-100': '#D1C4E9',
  'mui-deep-purple-200': '#B39DDB',
  'mui-deep-purple-300': '#9575CD',
  'mui-deep-purple-400': '#7E57C2',
  'mui-deep-purple-500': '#673AB7',
  'mui-deep-purple-600': '#5E35B1',
  'mui-deep-purple-700': '#512DA8',
  'mui-deep-purple-800': '#4527A0',
  'mui-deep-purple-900': '#311B92',
  'mui-deep-purple-a100': '#B388FF',
  'mui-deep-purple-a200': '#7C4DFF',
  'mui-deep-purple-a400': '#651FFF',
  'mui-deep-purple-a700': '#6200EA',

  'mui-indigo-50': '#E8EAF6',
  'mui-indigo-100': '#C5CAE9',
  'mui-indigo-200': '#9FA8DA',
  'mui-indigo-300': '#7986CB',
  'mui-indigo-400': '#5C6BC0',
  'mui-indigo-500': '#3F51B5',
  'mui-indigo-600': '#3949AB',
  'mui-indigo-700': '#303F9F',
  'mui-indigo-800': '#283593',
  'mui-indigo-900': '#1A237E',
  'mui-indigo-a100': '#8C9EFF',
  'mui-indigo-a200': '#536DFE',
  'mui-indigo-a400': '#3D5AFE',
  'mui-indigo-a700': '#304FFE',

  'mui-blue-50': '#E3F2FD',
  'mui-blue-100': '#BBDEFB',
  'mui-blue-200': '#90CAF9',
  'mui-blue-300': '#64B5F6',
  'mui-blue-400': '#42A5F5',
  'mui-blue-500': '#2196F3',
  'mui-blue-600': '#1E88E5',
  'mui-blue-700': '#1976D2',
  'mui-blue-800': '#1565C0',
  'mui-blue-900': '#0D47A1',
  'mui-blue-a100': '#82B1FF',
  'mui-blue-a200': '#448AFF',
  'mui-blue-a400': '#2979FF',
  'mui-blue-a700': '#2962FF',

  'mui-light-blue-50': '#E1F5FE',
  'mui-light-blue-100': '#B3E5FC',
  'mui-light-blue-200': '#81D4FA',
  'mui-light-blue-300': '#4FC3F7',
  'mui-light-blue-400': '#29B6F6',
  'mui-light-blue-500': '#03A9F4',
  'mui-light-blue-600': '#039BE5',
  'mui-light-blue-700': '#0288D1',
  'mui-light-blue-800': '#0277BD',
  'mui-light-blue-900': '#01579B',
  'mui-light-blue-a100': '#80D8FF',
  'mui-light-blue-a200': '#40C4FF',
  'mui-light-blue-a400': '#00B0FF',
  'mui-light-blue-a700': '#0091EA',

  'mui-cyan-50': '#E0F7FA',
  'mui-cyan-100': '#B2EBF2',
  'mui-cyan-200': '#80DEEA',
  'mui-cyan-300': '#4DD0E1',
  'mui-cyan-400': '#26C6DA',
  'mui-cyan-500': '#00BCD4',
  'mui-cyan-600': '#00ACC1',
  'mui-cyan-700': '#0097A7',
  'mui-cyan-800': '#00838F',
  'mui-cyan-900': '#006064',
  'mui-cyan-a100': '#84FFFF',
  'mui-cyan-a200': '#18FFFF',
  'mui-cyan-a400': '#00E5FF',
  'mui-cyan-a700': '#00B8D4',

  'mui-teal-50': '#E0F2F1',
  'mui-teal-100': '#B2DFDB',
  'mui-teal-200': '#80CBC4',
  'mui-teal-300': '#4DB6AC',
  'mui-teal-400': '#26A69A',
  'mui-teal-500': '#009688',
  'mui-teal-600': '#00897B',
  'mui-teal-700': '#00796B',
  'mui-teal-800': '#00695C',
  'mui-teal-900': '#004D40',
  'mui-teal-a100': '#A7FFEB',
  'mui-teal-a200': '#64FFDA',
  'mui-teal-a400': '#1DE9B6',
  'mui-teal-a700': '#00BFA5',

  'mui-green-50': '#E8F5E9',
  'mui-green-100': '#C8E6C9',
  'mui-green-200': '#A5D6A7',
  'mui-green-300': '#81C784',
  'mui-green-400': '#66BB6A',
  'mui-green-500': '#4CAF50',
  'mui-green-600': '#43A047',
  'mui-green-700': '#388E3C',
  'mui-green-800': '#2E7D32',
  'mui-green-900': '#1B5E20',
  'mui-green-a100': '#B9F6CA',
  'mui-green-a200': '#69F0AE',
  'mui-green-a400': '#00E676',
  'mui-green-a700': '#00C853',

  'mui-light-green-50': '#F1F8E9',
  'mui-light-green-100': '#DCEDC8',
  'mui-light-green-200': '#C5E1A5',
  'mui-light-green-300': '#AED581',
  'mui-light-green-400': '#9CCC65',
  'mui-light-green-500': '#8BC34A',
  'mui-light-green-600': '#7CB342',
  'mui-light-green-700': '#689F38',
  'mui-light-green-800': '#558B2F',
  'mui-light-green-900': '#33691E',
  'mui-light-green-a100': '#CCFF90',
  'mui-light-green-a200': '#B2FF59',
  'mui-light-green-a400': '#76FF03',
  'mui-light-green-a700': '#64DD17',

  'mui-lime-50': '#F9FBE7',
  'mui-lime-100': '#F0F4C3',
  'mui-lime-200': '#E6EE9C',
  'mui-lime-300': '#DCE775',
  'mui-lime-400': '#D4E157',
  'mui-lime-500': '#CDDC39',
  'mui-lime-600': '#C0CA33',
  'mui-lime-700': '#AFB42B',
  'mui-lime-800': '#9E9D24',
  'mui-lime-900': '#827717',
  'mui-lime-a100': '#F4FF81',
  'mui-lime-a200': '#EEFF41',
  'mui-lime-a400': '#C6FF00',
  'mui-lime-a700': '#AEEA00',

  'mui-yellow-50': '#FFFDE7',
  'mui-yellow-100': '#FFF9C4',
  'mui-yellow-200': '#FFF59D',
  'mui-yellow-300': '#FFF176',
  'mui-yellow-400': '#FFEE58',
  'mui-yellow-500': '#FFEB3B',
  'mui-yellow-600': '#FDD835',
  'mui-yellow-700': '#FBC02D',
  'mui-yellow-800': '#F9A825',
  'mui-yellow-900': '#F57F17',
  'mui-yellow-a100': '#FFFF8D',
  'mui-yellow-a200': '#FFFF00',
  'mui-yellow-a400': '#FFEA00',
  'mui-yellow-a700': '#FFD600',

  'mui-amber-50': '#FFF8E1',
  'mui-amber-100': '#FFECB3',
  'mui-amber-200': '#FFE082',
  'mui-amber-300': '#FFD54F',
  'mui-amber-400': '#FFCA28',
  'mui-amber-500': '#FFC107',
  'mui-amber-600': '#FFB300',
  'mui-amber-700': '#FFA000',
  'mui-amber-800': '#FF8F00',
  'mui-amber-900': '#FF6F00',
  'mui-amber-a100': '#FFE57F',
  'mui-amber-a200': '#FFD740',
  'mui-amber-a400': '#FFC400',
  'mui-amber-a700': '#FFAB00',

  'mui-orange-50': '#FFF3E0',
  'mui-orange-100': '#FFE0B2',
  'mui-orange-200': '#FFCC80',
  'mui-orange-300': '#FFB74D',
  'mui-orange-400': '#FFA726',
  'mui-orange-500': '#FF9800',
  'mui-orange-600': '#FB8C00',
  'mui-orange-700': '#F57C00',
  'mui-orange-800': '#EF6C00',
  'mui-orange-900': '#E65100',
  'mui-orange-a100': '#FFD180',
  'mui-orange-a200': '#FFAB40',
  'mui-orange-a400': '#FF9100',
  'mui-orange-a700': '#FF6D00',

  'mui-deep-orange-50': '#FBE9E7',
  'mui-deep-orange-100': '#FFCCBC',
  'mui-deep-orange-200': '#FFAB91',
  'mui-deep-orange-300': '#FF8A65',
  'mui-deep-orange-400': '#FF7043',
  'mui-deep-orange-500': '#FF5722',
  'mui-deep-orange-600': '#F4511E',
  'mui-deep-orange-700': '#E64A19',
  'mui-deep-orange-800': '#D84315',
  'mui-deep-orange-900': '#BF360C',
  'mui-deep-orange-a100': '#FF9E80',
  'mui-deep-orange-a200': '#FF6E40',
  'mui-deep-orange-a400': '#FF3D00',
  'mui-deep-orange-a700': '#DD2C00',

  'mui-brown-50': '#EFEBE9',
  'mui-brown-100': '#D7CCC8',
  'mui-brown-200': '#BCAAA4',
  'mui-brown-300': '#A1887F',
  'mui-brown-400': '#8D6E63',
  'mui-brown-500': '#795548',
  'mui-brown-600': '#6D4C41',
  'mui-brown-700': '#5D4037',
  'mui-brown-800': '#4E342E',
  'mui-brown-900': '#3E2723',

  'mui-grey-50': '#FAFAFA',
  'mui-grey-100': '#F5F5F5',
  'mui-grey-200': '#EEEEEE',
  'mui-grey-300': '#E0E0E0',
  'mui-grey-400': '#BDBDBD',
  'mui-grey-500': '#9E9E9E',
  'mui-grey-600': '#757575',
  'mui-grey-700': '#616161',
  'mui-grey-800': '#424242',
  'mui-grey-900': '#212121',

  'mui-gray-50': '#FAFAFA',
  'mui-gray-100': '#F5F5F5',
  'mui-gray-200': '#EEEEEE',
  'mui-gray-300': '#E0E0E0',
  'mui-gray-400': '#BDBDBD',
  'mui-gray-500': '#9E9E9E',
  'mui-gray-600': '#757575',
  'mui-gray-700': '#616161',
  'mui-gray-800': '#424242',
  'mui-gray-900': '#212121',

  'mui-blue-grey-50': '#ECEFF1',
  'mui-blue-grey-100': '#CFD8DC',
  'mui-blue-grey-200': '#B0BEC5',
  'mui-blue-grey-300': '#90A4AE',
  'mui-blue-grey-400': '#78909C',
  'mui-blue-grey-500': '#607D8B',
  'mui-blue-grey-600': '#546E7A',
  'mui-blue-grey-700': '#455A64',
  'mui-blue-grey-800': '#37474F',
  'mui-blue-grey-900': '#263238',
}

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: colors,
      spacing: {
        '2px': '2px',
        '84': '21rem',
        '96': '24rem',
      },
      screens: {
        // lt = less than
        'lt-xl': {'max': '1279px'},
        'lt-lg': {'max': '1023px'},
        'lt-md': {'max': '767px'},
        'lt-sm': {'max': '639px'},
      },
      fontSize: {
        'h1': ['6rem', 1.167],
        'h2': ['3.75rem', 1.2],
        'h3': ['3rem', 1.167],
        'h4': ['2.125rem', 1.235],
        'h5': ['1.5rem', 1.334],
        'h6': ['1.25em', 1.6],

        'subtitle1': ['1rem', 1.75],
        'subtitle2': ['0.875rem', 1.57],
        'body1': ['1rem', 1.5],
        'body2': ['0.875rem', 1.43],
        'button': ['0.875rem', 1.75],
        'caption': ['0.75rem', 1.66],
        'overline': ['0.75em', 2.66],
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover', 'focus'],
    display: ['responsive', 'hover', 'group-hover'],
    padding: ['responsive', 'hover', 'focus'],
    visibility: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    // require('@tailwindcss/custom-forms'),
    // require('@tailwindcss/ui'),
  ]
}
