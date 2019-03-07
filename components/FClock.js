import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  methods: { ...utils },
  props: {
    duration: { default: 0, type: [Number, String ]},
    duration2: { default: 0, type: [Number, String ]}
  },
  template: `
  <f-scene width="20" height="20">
    <f-circle r="1.7" stroke :fill="color('white')" />
    <f-arc
      rotation="180"
      scale="-1 1"
      r="1.7"
      inner-radius="0"
      start-angle="0"
      :end-angle="scale(duration2,0,60,0,360)"
      :fill="color('lightblue')"
      stroke
    />
    <f-arc
      rotation="180"
      scale="-1 1"
      r="1.7"
      inner-radius="0"
      start-angle="0"
      :end-angle="scale(duration,0,60,0,360)"
      :fill="color('blue')"
      stroke
    />
    <f-circle r="1.7" stroke-width="2" />
    <f-line rotation="0" x1="0" y1="1.7" x2="0" y2="1.5" stroke-width="2" stroke="var(--darkgray)" />
    <f-line rotation="0" x1="0" y1="-1.7" x2="0" y2="-1.5" stroke-width="2" stroke="var(--darkgray)" />
    <f-line rotation="90" x1="0" y1="1.7" x2="0" y2="1.5" stroke-width="2" stroke="var(--darkgray)" />
    <f-line rotation="90" x1="0" y1="-1.7" x2="0" y2="-1.5" stroke-width="2" stroke="var(--darkgray)" />
  </f-scene>
`
};