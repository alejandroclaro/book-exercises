/**
 * Markdown linter configuration.
 *
 * @author alejandro.claro
 * @date   2020-10-17
 *
 * @copyright 2020 Alejandro Claro
 *
 * @license MIT
 */

const config = {
  'header-increment': true,
  'first-header-h1': true,
  'header-style': {
    'style': 'atx'
  },
  'ul-style': {
    'style': 'dash'
  },
  'list-indent': true,
  'ul-start-left': false,
  'ul-indent': {
    'indent': 2
  },
  'no-trailing-spaces': {
    'br_spaces': 0,
    'comment': 'Empty lines inside list items should not be indented.',
    'list_item_empty_lines': false
  },
  'no-hard-tabs': {
    'code_blocks': true
  },
  'no-reversed-links': true,
  'no-multiple-blanks': {
    'maximum': 1
  },
  'line-length': false,
  'commands-show-output': true,
  'no-missing-space-atx': true,
  'no-multiple-space-atx': true,
  'no-missing-space-closed-atx': true,
  'no-multiple-space-closed-atx': true,
  'blanks-around-headers': false,
  'header-start-left': true,
  'no-duplicate-header': true,
  'single-h1': false,
  'no-trailing-punctuation': {
    'punctuation': '.,:!?'
  },
  'no-multiple-space-blockquote': true,
  'no-blanks-blockquote': false,
  'ol-prefix': {
    'style': 'one'
  },
  'list-marker-space': {
    'ul_single': 1,
    'ol_single': 1,
    'ul_multi': 1,
    'ol_multi': 1
  },
  'blanks-around-fences': true,
  'blanks-around-lists': false,
  'no-inline-html': false,
  'no-bare-urls': true,
  'hr-style': {
    'style': 'consistent'
  },
  'no-emphasis-as-header': false,
  'no-space-in-emphasis': true,
  'no-space-in-code': true,
  'no-space-in-links': true,
  'fenced-code-language': true,
  'first-line-h1': true,
  'no-empty-links': true,
  'required-headers': false,
  'proper-names': false
};

module.exports = config;
