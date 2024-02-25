import { graph, config, scalar } from '@grafbase/sdk'

const g = graph.Standalone()

const User = g.type('User', {
  name: g.string(),
  email: g.email(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url(),
  linkedinUrl: g.url(),
  projects: g.ref('Project').optional().list(), // Use a string here instead of the Project type
})

const Project = g.type("Project", {
  title: g.string(),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  category: g.string(),
  createdBy: g.ref(User)
})


export default config({
  graph: g,

  // auth: {

  //   rules: (rules) => {
  //     rules.public()
  //   },
  // },

})