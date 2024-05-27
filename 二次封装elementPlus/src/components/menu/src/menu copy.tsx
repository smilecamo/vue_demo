import { defineComponent, PropType,useAttrs  } from "vue";
import { IMenu} from './types'
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
    const attrs = useAttrs()
    
    let renderItem = (data:IMenu[])=>{
      return data.map((item:IMenu)=>{
       let slots = {
        title:() => {
          return <>
            <span>{item.name}</span>
          </>
        }
       }
        if(item.chilidren && item.chilidren.length){
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderItem(item.chilidren)}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item.index}>
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    
    return () => {
      return (
        <el-menu {...attrs} default-active={props.defaultActive} router={props.router}>
          {renderItem(props.data)}
        </el-menu>
      )
    }
  }
});
