<template>
<div id="container">
  
</div>
  <!-- <img src="/src/assets/vue.svg" alt="" srcset="" /> -->
</template>

<script setup>
import {onMounted} from 'vue';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import Stats from "three/examples/jsm/libs/stats.module";

onMounted(() => {
initThree()
})
  const initThree = () => {
    var container, controls, stats;
    var camera, scene, renderer, light, car = null, carMeshes = [];
    var _this = this;
    init();
    animate();
    function init() {
      container = document.getElementById('container');
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xdddddd);
      camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 10, 20);
      camera.lookAt(new THREE.Vector3(0, 10, 10));
      light = new THREE.DirectionalLight(0xffffff, 1);
      light.intensity = 1.2;
      light.position.set(-5, 8, 3);
      scene.add(light);
      var loader = new GLTFLoader();
      loader.load('/src/assets/model/001gltf.gltf', function (mesh) {
        mesh.scene.traverse(function (child) {
          if (child.isMesh) {
            carMeshes.push(child)
          }
        });
        mesh.scene.position.set(0, 0, 0);
        mesh.scene.scale.set(5, 5, 5);
        car = mesh.scene;
        scene.add(car);
      });

      controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0);
      controls.enableDamping = true;
      window.addEventListener('resize', onWindowResize, false);

      // 性能工具
      stats = new Stats();
      document.documentElement.appendChild(stats.dom);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      
      renderer.render(scene, camera);
      stats && stats.update();
      // controls && controls.autoRotate()
      controls && controls.update();
      TWEEN && TWEEN.update();
    }
  }
</script>
