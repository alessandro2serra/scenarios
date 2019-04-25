export default {
  props: ['project', 'status'],
  data: () => ({
    statuses: {
      feature: {
        background: 'var(--yellow)',
        border: 'var(--yellow)'
      },
      progress: {
        background: 'hsl(44, 100%, 87%)',
        border: 'hsl(44, 100%, 87%)'
      },
      experiment: {
        background: 'var(--lightblue)',
        border: 'var(--lightblue)'
      }
    }
  }),
  template: `
  <f-card
    class="project-card"
    :background="statuses[status].background"
    :border="statuses[status].border"
  >
    <a :href="'../' + project.scenario">
      <h5>{{ project.title }}</h5>
      <small>{{ project.desc }}</small>
      <p />
      <div style="display: flex; flex-wrap: wrap;">
        <f-tag v-for="tag in project.designtags.split(',')">{{ tag }}</f-tag>
        <f-tag v-for="tag in project.stemtags.split(',')">{{ tag }}</f-tag>
      </div>
      <p />
      <f-inline>
        <f-clock-icon duration2="15" /> Hello
      </f-inline>
      <f-inline>
        <f-people-icon /><small>{{ project.people }}</small>
      </f-inline>
      <f-inline>
        <f-tools-icon /><small>{{ project.tools }}</small>
      </f-inline>
    </a>
  </f-card>
  `
}