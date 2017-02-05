'use strict'

var visit = require('unist-util-visit')
var find = require('unist-util-find')
var is = require('unist-util-is')

/* Expose */
module.exports = visitAllAfter

/* Visit `nodes` in `tree` that pass `test` by calling `visitor`. */
function visitAllAfter (tree, node, test, visitor) {
  var control
  var start

  start = find(tree, node)
  control = false

  visit(tree, test, function (nnode, index, parent) {
    if (is(nnode, start)) {
      control = true
    }

    if (control) {
      visitor(nnode, index, parent)
    }
  })

  return tree
}
