import { computed, defineComponent, Fragment, ref } from 'vue'
import type { PropType } from 'vue'
import type { Placement, Options } from '@popperjs/core'
import type { MenuOption } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
export default defineComponent({
  name: 'VkDropdown',
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom'
    },
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover'
    },
    transition: {
      type: String,
      default: 'fade'
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    popperOptions: {
      type: Object as PropType<Options>
    },
    menuOptions: {
      type: Array as PropType<MenuOption[]>,
      required: true
    },
    hideAfterClick: {
      type: Boolean,
      default: true
    },
    manual: {
      type: Boolean
    }
  },
  //https://m.yplus.cn/flutter/index.html#/subPage/subTrain/trainDetail?goodsId=1685381726123066770&phaseId=1685394541609224120
  //`${url.prefix}/flutter/index.html#/subPage/subTrain/trainDetail?goodsId={1685381726123066770}&phaseId={1685394541609224120}`
  //   https://m.yplus.cn/privatedetail.html?id=1502078360090576069&phaseId=null&v=8331&isSahre=1&shareSource=yplusapp&goodsId=1530511956631356643
  //  私教详情 完整路径：https://m.yplus.cn/flutter/index.html#/subPage/subTeacher/teacherDetail?teacherId=381899624077592539
  //   拼接路径：`${url.prefix}/flutter/index.html#/subPage/subTeacher/teacherDetail?teacherId=${381899624077592539}
  //   会籍卡详情 完整路径：https://m.yplus.cn/flutter/index.html#/pages/memberCard/detail?goodsId=1663092708488513005
  //   拼接路径：`${url.prefix}/flutter/index.html#/pages/memberCard/detail?goodsId=${1663092708488513005}
  emits: ['visible-change', 'select'],
  setup(props, { emit, slots }) {
    const tooltipRef = ref<TooltipInstance | null>(null)
    const visibleChange = (e: boolean) => {
      emit('visible-change', e)
    }
    const itemClick = (e: MenuOption) => {
      if (e.disabled) {
        return
      }
      emit('select', e)
      if (props.hideAfterClick) {
        tooltipRef.value?.hide()
      }
    }
    const options = computed(() => {
      return props.menuOptions.map((item) => {
        return (
          <Fragment key={item.key}>
            {item.divided ? <li role="separator" class="divided-placeholder" /> : ''}
            <li
              class={{
                'is-dropdown__item': true,
                'is-disabled': item.disabled,
                'is-divided': item.divided
              }}
              id={`dropdown-item-${item.key}`}
              onClick={() => itemClick(item)}
            >
              {item.label}
            </li>
          </Fragment>
        )
      })
    })
    return () => (
      <div class="vk-dropdown">
        <Tooltip
          trigger={props.trigger}
          placement={props.placement}
          popperOptions={props.popperOptions}
          openDelay={props.openDelay}
          closeDelay={props.closeDelay}
          manual={props.manual}
          ref={tooltipRef}
          onVisible-change={visibleChange}
        >
          {{
            default: () => slots.default && slots.default(),
            content: () => <ul class="vk-dropdown__menu">{options.value}</ul>
          }}
        </Tooltip>
      </div>
    )
  }
})
