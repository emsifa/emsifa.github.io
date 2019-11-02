const fs = require('fs')

module.exports = function (api) {
  api.loadSource(actions => {
    const data = JSON.parse(fs.readFileSync('./content/open-sources.json'))

    const slugged = data.items.reduce((res, data) => ({...res, [data.slug]: data}), {})
    const featureds = data.featureds.map((slug) => slugged[slug]);
    const featuredOpenSources = actions.addCollection({
      typeName: 'FeaturedOpenSources'
    })
    featureds.forEach((item, i) => {
      featuredOpenSources.addNode({
        slug: item.slug,
        title: item.title,
        description: item.description,
        thumbnail: item.thumbnail,
        demoUrl: item.demoUrl,
        repoUrl: item.repoUrl,
        techStack: item.techStack
      })
    })

    const openSources = actions.addCollection({
      typeName: 'OpenSources'
    })
    data.items.forEach((item, i) => {
      openSources.addNode({
        id: i + 1,
        title: item.title,
        description: item.description,
        thumbnail: item.thumbnail,
        demoUrl: item.demoUrl,
        repoUrl: item.repoUrl,
        techStack: item.techStack
      })
    })
  })
}
