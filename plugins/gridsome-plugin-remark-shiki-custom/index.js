const shiki = require('shiki')
const { BUNDLED_LANGUAGES } = require('shiki-languages')
const visit = require('unist-util-visit')

const CLASS_BLOCK = 'shiki'
const CLASS_INLINE = 'shiki-inline'

const FALLBACK_LANGUAGE = 'text'

const ERROR_MESSAGE = '<code>ERROR Rendering Code Block</code>'

const LANG_TEXT = ['text', 'txt', 'plaintext']

module.exports = (options) => {
  let theme = options.theme ? options.theme : 'nord'

  try {
    shiki.getTheme(theme)
  } catch (e) {
    console.error(`Shiki theme ${theme} could not get loaded.`)
    theme = 'nord'
  }

  return async tree => {
    const highlighter = await shiki.getHighlighter({
      theme
    })

    visit(tree, 'code', node => {
      node.type = 'html'
      try {
        node.value = highlight(node, CLASS_BLOCK, highlighter)
      } catch (e) {
        node.value = ERROR_MESSAGE
      }
    })

    if (!options.skipInline) {
      visit(tree, 'inlineCode', node => {
        node.type = 'html'
        try {
          node.value = highlight(node, CLASS_INLINE, highlighter)
        } catch (e) {
          node.value = ERROR_MESSAGE
        }
      })
    }
  }
}

function highlight ({ value, lang }, cls, highlighter) {
  const index = BUNDLED_LANGUAGES.findIndex((x) => {
    return x.id === lang || (x.aliases && x.aliases.includes(lang))
  })

  const [metadata, newValue] = extractMetadata(value);
  value = newValue;

  if (index >= 0 || LANG_TEXT.includes(lang)) {
    return withMetadata(metadata, highlighter.codeToHtml(value, lang))
  } else {
    // fallback for unknown languages
    return withMetadata(metadata, highlighter.codeToHtml(value, FALLBACK_LANGUAGE))
  }
}

/**
 *
 * @param {string} code
 */
function extractMetadata(code) {
  const lines = code.split("\n");
  const firstLine = lines.shift();
  const isOpenOrClose = (line) => line.substr(0, 10) === "=".repeat(10)
  if (lines.length === 0 || !isOpenOrClose(firstLine)) {
    return [null, code];
  }
  let line;
  const metadata = {};
  while (line = lines.shift()) {
    if (isOpenOrClose(line)) {
      break;
    }
    const split = line.split(":", 2);
    metadata[split.shift().trim()] = split.join(":").trim();
  }
  return [metadata, lines.join("\n")];
}

function withMetadata(metadata, code) {
  return `<div class='code-container'>${renderMetadata(metadata)}${code}</div>`;
}

function renderMetadata(metadata) {
  if (!metadata) {
    return '';
  }
  const attrs = Object
    .keys(metadata)
    .filter(key => key !== "class")
    .map((key) => `${key}="${metadata[key]}"`)
    .join(" ");

  const content = metadata.title || metadata.filename || '';
  return `<div class="code-metadata ${metadata.class || ''}" ${attrs}>${content}</div>`;
}
