import { ref, computed, reactive } from "vue";
/**
 *
 * @param {*} installIndex id 0
 * @returns serTargetIndex 切换事件
 * @returns targetIndex id
 */
export function useTargetIndex(installIndex, checkData) {
  const targetIndex = ref(installIndex);
  function serTargetIndex(index) {
    targetIndex.value = +index;
  }
  return [serTargetIndex, targetIndex];
}
export function useRightListData(installData, checkData) {
  const rightListData = ref(installData);
  function addRightListData(data) {
    rightListData.value = [...rightListData.value, ...data];
    console.log(data);
    checkData.left = [];
  }
  function removeRightListData(newData) {
    newData.forEach((newItem) => {
      rightListData.value = rightListData.value.filter(
        (rItem) => rItem.id !== newItem.id
      );
    });
    checkData.right = [];
  }
  return [rightListData, addRightListData, removeRightListData];
}
/**
 *
 * @returns checkData 选中的数据
 * @returns addCheckData 添加数据
 * @returns removeCheckData 移除数据
 */
export function useCheckData() {
  const checkData = reactive({
    left: [],
    right: [],
  });
  function addCheckData(leftOrRight, item) {
    switch (leftOrRight) {
      case "left":
        checkData.left.push(item);
        break;
      case "right":
        checkData.right.push(item);
        break;
      default:
        break;
    }
  }
  function removeCheckData(leftOrRight, id) {
    switch (leftOrRight) {
      case "left":
        checkData.left = checkData.left.filter((item) => item.id !== id);
        break;
      case "right":
        checkData.right = checkData.right.filter((item) => item.id !== id);
        break;
      default:
        break;
    }
  }
  return [checkData, addCheckData, removeCheckData];
}
export function useSetDragItem() {
  const dragItem = ref(null);
  function setDragItem(item) {
    dragItem.value = item;
  }
  return [dragItem, setDragItem];
}
/**
 *
 * @param {*} data data数据
 * @param {*} targetIndex 选中的数据id
 * @returns leftTitle 左侧的title
 */
export function useComputedData(data, targetIndex, rightListData, checkData) {
  const leftTitle = computed(() => data[targetIndex.value].title);
  const leftListData = computed(() => {
    const { data: currentData } = data[targetIndex.value];
    return currentData.filter((item) => {
      if (
        !rightListData.value.find((newItem) => {
          return newItem.id === item.id;
        })
      ) {
        return item;
      }
    });
  });
  const transferButtonDisabled = computed(() => {
    return {
      left: checkData.right.length === 0,
      right: checkData.left.length === 0,
    };
  });
  return {
    leftTitle,
    leftListData,
    transferButtonDisabled,
  };
}
