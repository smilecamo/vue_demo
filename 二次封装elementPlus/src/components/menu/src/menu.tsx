import { defineComponent, PropType } from 'vue'
import { IMenu } from './types'
import * as Icon from '@element-plus/icons-vue'
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<IMenu[]>,
      required: true,
    },
    defaultActive: { 
      type: String,
      default: "",
    },
    router: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    let renderItem = (data: IMenu[]) => {
      return data.map((item: IMenu) => {
        const IconComponent = item.icon ? (Icon as any)[item.icon] : null; 
        let slots = {
          title: () => {
            return <>
              {IconComponent ? <IconComponent /> : null}
              <span>{item.name}</span>
            </>
          }
        }
        if (item.chilidren && item.chilidren.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderItem(item.chilidren)}
            </el-sub-menu>
          )
        }
        return (<el-menu-item index={item.index}>
          {IconComponent ? <IconComponent /> : null}
          <span>{item.name}</span>
        </el-menu-item>)
      })
    }
    return () => {
      return (
        <el-menu>
          {renderItem(props.data)}
        </el-menu>
      )
    }
  }
})