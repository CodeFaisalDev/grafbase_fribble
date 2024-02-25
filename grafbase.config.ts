import { graph, config, scalar } from "@grafbase/sdk";

const g = graph.Standalone();

const User = g.type("User", {
  name: scalar.string(),
  email: scalar.email(),
  avatarUrl: scalar.url(),
  description: scalar.string(),
  githubUrl: scalar.url(),
  linkedinUrl: scalar.url(),
  projects: g.ref("Project").optional().list(), // Use a string here instead of the Project type
});

const Project = g.type("Project", {
  title: scalar.string(),
  description: scalar.string(),
  image: scalar.url(),
  liveSiteUrl: scalar.url(),
  category: scalar.string(),
  createdBy: g.ref(User),
});

export default config({
  graph: g,

  // auth: {

  //   rules: (rules) => {
  //     rules.public()
  //   },
  // },
});
