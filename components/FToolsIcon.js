import { color } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  data: () => ({ size: 20 }),
  methods: { color },
  template: `
  <f-artboard :width="size" :height="size">
    <f-circle 
      :x="size / 2"
      :y="size / 2"
      :r="size / 2 - 2"
      stroke-width="2"
      fill="var(--white)"
    />
    <f-circle 
      :x="size / 2"
      :y="size / 2"
      :r="size / 6"
      stroke-width="2"
      fill="var(--white)"
    />
  </f-artboard>
  `
}