<template>
  <div>
    <div>
      <select @change="setTragetIndex($event.target.value)">
        <option v-for="(title, index) of options" :key="index" :value="index">
          {{ title }}
        </option>
      </select>
    </div>
    <div class="transfer">
      <div
        class="box left-list"
        @dragover.prevent
        @drop="removeRightListData([dragItem])"
      >
        <h1 class="list-title">{{ leftTitle }}</h1>
        <div>
          <div
            v-for="item of leftListData"
            :key="item.id"
            :class="['list-item', item.disabled ? 'disabled' : '']"
            :draggable="!item.disabled"
            @dragstart="setDragItem(item)"
          >
            <input
              type="checkbox"
              :disabled="item.disabled"
              :id="'__checkbox' + item.id"
              @change="setCheckData($event.target.checked, 'left', item)"
            />
            <label :for="'__checkbox' + item.id">{{ item.phone_name }}</label>
          </div>
        </div>
      </div>
      <div class="box button-group">
        <button
          :disabled="transferButtonDisabled.left"
          @click="removeRightListData(checkData.right)"
        >
          &lt;
        </button>
        <button
          :disabled="transferButtonDisabled.right"
          @click="addRightListData(checkData.left)"
        >
          &gt;
        </button>
      </div>
      <div
        class="box right-list"
        @dragover.prevent
        @drop="addRightListData([dragItem])"
      >
        <h1 class="list-title">{{ rightTitle }}</h1>
        <div>
          <div
            v-for="item of rightListData"
            :key="item.id"
            :class="['list-item', item.disabled ? 'disabled' : '']"
            :draggable="!item.disabled"
            @dragstart="setDragItem(item)"
          >
            <input
              type="checkbox"
              :disabled="item.disabled"
              :id="'__checkbox' + item.id"
              @change="setCheckData($event.target.checked, 'right', item)"
            />
            <label :for="'__checkbox' + item.id">{{ item.phone_name }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import propsType from "./extends/propsType";
import {
  useTargetIndex,
  useComputedData,
  useRightListData,
  useCheckData,
  useSetDragItem,
} from "./extends/hooks";
const props = defineProps(propsType);

const options = props.data.map(({ title }) => title);
// select 切换事件
const [setTragetIndex, targetIndex] = useTargetIndex(0);
const [checkData, addCheckData, removeCheckData] = useCheckData();
const [rightListData, addRightListData, removeRightListData] = useRightListData(
  [],
  checkData
);

const [dragItem, setDragItem] = useSetDragItem();

const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkData
);

const setCheckData = (checked, leftOrRight, item) => {
  checked
    ? addCheckData(leftOrRight, item)
    : removeCheckData(leftOrRight, item.id);
};
</script>

<style lang="scss" scoped>
.transfer {
  display: flex;
  width: 600px;
  height: 300px;
  border: 1px solid #ddd;
  .box {
    width: 200px;
    height: 100%;
    .list-title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 38px;
      font-size: 16px;
      background: #eee;
      margin: 0;
      padding: 0;
    }
    &.button-group {
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      button {
        outline: none;
        border: none;
        width: 38px;
        height: 38px;
        background: orange;
        border-radius: 5px;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        &:first-child {
          margin-right: 4px;
        }
        &:disabled {
          cursor: default;
          opacity: 0.6;
        }
      }
    }
    .list-item {
      height: 34px;
      display: flex;
      align-items: center;
      color: #666;
      &.disabled {
        opacity: 0.6;
      }
    }
  }
}
</style>
