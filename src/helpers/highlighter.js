const HL_REGEX = /^(<span style="[^"]+">(\&gt\;|\-|\+)<\/span>|(\&gt\;|\-|\+))/i

const stripTags = (html) => html.replace(/<\/?[^>]+(>|$)/g, "")

const highlightClass = (line) => {
  const match = line.match(HL_REGEX)
  // console.log({line, match})
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

export const applyCollapse = (code) => {
  const lines = code.innerHTML.split(`\n`)
  let html = ``
  let open = false

  const getText = (elStr) => {
    const el = document.createElement('div')
    el.innerHTML = elStr
    return el.innerText
  }

  lines.forEach((line, i) => {
    const text = getText(line).trim()
    if (text === '...') {
      open = !open
      if (open) {
        const nextText = getText(lines[i+1])
        const indent = (nextText.match(/^( |\t)+/) || [''])[0]
        console.log({open, indent, nextText})
        html += `<div class="collapse inline closed">`
        const btn = `<span class='btn-show'>...</span><small class='btn-hide'>[shrink]</small>`
        html += `\n<span class='line collapse-toggle'>${indent}${btn}</span>`
        html += `\n<div class="collapse-content">`
      } else {
        html += `</div></div>`
      }
    } else {
      html += `\n${line}`
    }
  })
  code.innerHTML = html.trim()
  const toggles = [...code.querySelectorAll('.collapse-toggle')]
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const container = toggle.parentNode
      container.classList.toggle('closed')
    });
  })
}
