<!-- Transition 组件 进入离开动画通过默认插槽传递到他的元素或组件中
    由v-if触发
    由v-show触发
    改变特殊的key属性
    由特殊元素component切换的动态组件
   -->
<script setup>
import { ref } from "vue";

const show = ref(true);
const showHandle = () => {
  show.value = !show.value;
};
</script>

<template>
  <button @click="showHandle">Toggle</button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>
  <!-- 单元素会抖动 原因是hover目标元与最终运动元素分离 -->
  <!-- <div class="transition">
    <div class="span">hover 到 父元素就不会抖动</div>
  </div> -->
  <!-- 动画延迟 -->
  <div class="border">111</div>
</template>

<style>
/*
transition：过渡 从一个值过渡到另一个值
transform：变幻 把整体的位置或大小发生变换
animate:动画 在一段时间内进行各种变化从而达到一个动画的效果
*/
/* 
transition
        property 过度属性 指定应用过度属性的名称 all 是一个关键字 表示任何属性都过度
                all 过渡所有属性
        duration 过渡持续时间，过渡动画持续的时间
        timing-function 过渡缓动 过渡动画过程中的缓动函数 默认是ease 
                ease:先缓慢再加速再缓慢
                linear:匀速
                ease-in:先加速再缓慢
                ease-out:先缓慢再减速
                ease-in-out:先加速再减速
                cubic-bezier(n,n,n,n) 自定义缓动函数 第一个n 第二个n 第三个n 第四个n 都是0-1之间的数值
        delay 过渡延迟 过渡动画延迟多久才触发 默认是0s 
transition transform 1s linear 0s
 CSS transition 不支持元素的高度或者宽度为 auto 的变化。
既然过渡不支持 height: auto，那我们就另辟蹊径，利用 max-height 的特性来实现动态高度的伸缩
*/
/* 
实现方式不同：animation 是通过连续播放多帧图像来实现动态效果，而 transition 则是通过平滑过渡来实现元素样式的变化。
动画方式不同：animation 可以根据关键帧设置进行循环播放、反向播放、暂停等复杂操作，而 transition 只能实现简单的从一种状态到另一种状态的平滑过渡。
触发方式不同：transition 更多的需要通过手动触发，而 animation 不但可以手动触发，也可以默认进行播放。
适用场景不同：animation 更适合用于实现复杂动态效果，如 loading 动画、动态图表等；而 transition 更适用于简单的元素样式变化，如 hover 状态下颜色和大小的变化等。

*/
/* 解决抖动问题 */
/* .transition {
  transition: transform 0.5s, background 0.8s;
}
.span {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px solid salmon;
}
.transition:hover .span {   
  background: salmon;
  transform: translate(0, -20px);
}
*/
.border {
  position: relative;
  width: 200px;
  height: 64px;
  box-shadow: inset 0 0 0 3px #ddd;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
