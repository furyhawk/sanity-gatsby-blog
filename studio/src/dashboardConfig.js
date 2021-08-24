export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6124f24a30bd212cc3061b09",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-x67zg7a1",
                  apiId: "f41d5824-2adc-4feb-8a53-1ddfbc8ea5e3",
                },
                {
                  buildHookId: "6124f24a256c8d2eb4c20099",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yy83g4vz",
                  apiId: "bc40b7b7-7143-4fb5-9203-4b45c7fcd71f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/furyhawk/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yy83g4vz.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
