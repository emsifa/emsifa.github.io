const fs = require('fs')
const moment = require('moment')
const slugify = require('@sindresorhus/slugify')

const title = process.argv[2]
const description = process.argv[3]
const blogdir = './content/posts'
const postDate = moment().format('YYYY-MM-DD HH:mm:ss')

if (!title) {
  console.log('❌  Please specify a post title.')
  process.exit()
}

const slug = slugify(title)
const basename = `${moment().format('YYYY-MM-DD')}-${slug}`
const time = moment().format('YYYY-MM-DD hh:mm:ss')

const contents = `---
title: "${title}"
slug: ${slug}
description: "${description || ''}"
date: ${time}
author: Muhammad Syifa
icon: "/images/icons/default.png"
cover: "/images/posts/cover-default.png"
tags:
    - New
---
`

fs.writeFile(`${blogdir}/${basename}.md`, contents, () => console.log(`✔ Created ${blogdir}/${basename}.md`))
