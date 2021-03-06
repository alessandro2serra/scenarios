import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
export default {
  props: {
  text: { type: String }
  },
  data: () => ({
    arrowColor: ''
  }),
  methods: {
    parseColor: (c) => {
      return "color: " + utils.color(c);
    }
  },
  template: `
      <a-entity class="info-board">
        <a-entity position="-.5 5.6 .1" scale=".5 .5 .5">
          <a-plane :material="parseColor('purple')" height=".1"></a-plane>
          <a-plane :material="parseColor('purple')" height=".1" width=".6" rotation="0 0 45" position="-.3 .19 0"></a-plane>
          <a-plane :material="parseColor('purple')" height=".1" width=".6" rotation="0 0 -45" position="-.3 -.19 0"></a-plane>
        </a-entity>
        <a-text position="-0.8 3.5 0.05" text="width: 1.6; wrapCount: 25; color: #202020; lineHeight: 70;" :value="text"></a-text>
        <a-box position="0 4 0" geometry="depth: 0.05; width: 2; height: 4"></a-box>
        <a-box position="0 1.5 -0.01" :material="parseColor('purple')" geometry="depth: 0.05; width: 2.2; height: 3.5"></a-box>
      </a-entity>
      
  `
};