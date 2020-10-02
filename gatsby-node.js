/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const fs = require('fs')

exports.onPostBuild = () => {
  try {
    fs.rmdirSync(path.join(__dirname, 'docs'), { recursive: true })
    fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'docs'))
    fs.copyFileSync(
      path.join(__dirname, '_CNAME'),
      path.join(__dirname, 'docs/CNAME')
    )
  } catch (error) {}
}
