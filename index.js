#! /usr/bin/env node
const path = require('path')
const fs = require('fs')

const packageJsonPath = path.resolve('./package.json')

const isWorkspaceVer = (ver) => ver.startsWith('workspace:')

const removeWorkspaceDeps = (deps) =>
  deps
    ? Object.keys(deps).reduce(
        (prev, key) =>
          isWorkspaceVer(deps[key]) ? prev : { ...prev, [key]: deps[key] },
        {}
      )
    : undefined

const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

pkg.dependencies = removeWorkspaceDeps(pkg.dependencies)
pkg.peerDependencies = removeWorkspaceDeps(pkg.peerDependencies)
pkg.devDependencies = removeWorkspaceDeps(pkg.devDependencies)

fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8')
