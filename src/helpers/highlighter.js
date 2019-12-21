const HL_REGEX = /^(<span style="[^"]+">(\&gt\;|\-|\+)<\/span>|(\&gt\;|\-|\+))/i

const stripTags = (html) => html.replace(/<\/?[^>]+(>|$)/g, "")

const highlightClass = (line) => {
  const match = line.match(HL_REGEX)
  console.log({line, match})
  if (!match) {
    return null
  }

  switch (match[2]) {
    case '&gt;': return 'highlighted'
    case '-': return 'minus'
    case '+': return 'plus'
  }
}

const highlight = (line) => line.replace(HL_REGEX, `<span class="hl"> </span>`)
const wrapLine = (line, classes = '') => `<span class="line ${classes}">${line}</span>`

const shouldRemoveHighlightedSpace = (line) => !line.match(/class="hl"\> \<\/span\>\<span[^>]+\>\s/)
const removeHighlightedSpace = (line) => line.replace(`"hl"> <`, `"hl"><`)

export const resolveCodeLine = (line) => {
  const className = highlightClass(line)
  if (!className) {
    return wrapLine(line)
  }

  line = highlight(line)

  if (shouldRemoveHighlightedSpace(line)) {
    line = removeHighlightedSpace(line)
  }

  return wrapLine(line, className)
}

export const applyFilename = (code) => {
  const lines = code.innerHTML.split(`\n`)
  const match = stripTags(lines[0]).match(/^\[filename:([^\]]+)\]$/)
  if (!match) {
    return
  }

  const pre = code.parentNode
  const filename = match[1]
  pre.setAttribute('filename', filename)
  lines.shift()
  code.innerHTML = lines.join(`\n`)
}
