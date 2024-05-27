import Test from './components/Test/index'
import Test2 from './components/Test2/index'
import Test3 from './components/Test3/index'
import Svg from './components/Svg/index'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import ImoocLoading from './components/ImoocLoading/index'
import ImoocFlyBox from './components/ImoocFlyBox/index'
import ImoocContainer from './components/ImoocContainer/index'
import ImoocLogo from './components/ImoocLogo/index'
import CountTo from './components/CountTo/index'
import VueNextEcharts from './components/VueNextEcharts/index'
import BaseScrollList from './components/BaseScrollList/index'

export default function (Vue) {
  Vue.use(Test)
  Vue.use(Test2)
  Vue.use(Test3)
  Vue.use(Svg)
  Vue.use(Icon)
  Vue.use(SvgAnimation)
  Vue.use(ImoocLoading)
  Vue.use(ImoocFlyBox)
  Vue.use(ImoocContainer)
  Vue.use(ImoocLogo)
  Vue.use(CountTo)
  Vue.use(VueNextEcharts)
  Vue.use(BaseScrollList)
}
