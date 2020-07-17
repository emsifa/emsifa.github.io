const HL_REGEX = /^(<span style="[^"]+">(\&gt\;|\-|\+)<\/span>|(\&gt\;|\-|\+))/i

const stripTags = (html) => html.replace(/<\/?[^>]+(>|$)/g, "")

const getText = (elStr) => {
  const el = document.createElement('div')
  el.innerHTML = elStr
  return el.innerText
}

const startsWith = (haystack, needle) => {
  return haystack.substring(0, needle.length) === needle
}

const highlightClass = (line) => {
  const text = getText(line)
  if (startsWith(text, '>')) return 'highlighted'
  if (startsWith(text, '-')) return 'minus'
  if (startsWith(text, '+')) return 'plus'
}

const highlight = (line) => line.replace(HL_REGEX, `<span class="hl"> </span>`)
const wrapLine = (line, classes = '') => `<span class="line ${classes}">${line}</span>`

const shouldRemoveHighlightedSpace = (line) => !line.match(/class="hl"\> \<\/span\>\<span[^>]+\>\s/)
const removeHighlightedSpace = (line) => line.replace(`"hl"> <`, `"hl"><`)

const removePrefix = (line, className) => {
  const el = document.createElement('div')
  el.innerHTML = line
  const nodes = [...el.childNodes]
  const firstNode = nodes[0]
  if (!firstNode) {
    return line
  }

  const text = firstNode.innerText || firstNode.toString()
  if (className === 'highlighted' && text.trim() === '>') {
    nodes[0] = '<span class="hl"></span>';
  } else if (className === 'minus' && text.trim() === '-') {
    nodes[0] = '<span class="hl"></span>';
  } else if (className === 'plus' && text.trim() === '+') {
    nodes[0] = '<span class="hl"></span>';
  }

  const secondNode = nodes[1]
  const secondText = secondNode.innerText || secondNode || ''
  const spaces = secondText.match(/^ +/)
  if (spaces[0] && spaces[0].length % 2 !== 0) {
    nodes[1] = secondText.replace(/^ /, '')
  }

  return `${nodes.map(n => n.outerHTML || n.toString()).join('')}`
}

export const resolveCodeLine = (line) => {
  const className = highlightClass(line)
  if (!className) {
    return wrapLine(line)
  }

  line = removePrefix(line, className)

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

  lines.forEach((line, i) => {
    const text = getText(line).trim()
    if (text === '...') {
      open = !open
      if (open) {
        const nextText = getText(lines[i+1])
        const indent = (nextText.match(/^( |\t)+/) || [''])[0]
        console.log({open, indent, nextText})
        html += `<div class="collapse closed">`
        const btn = `<span class='btn-show'>...</span><small class='btn-hide'>[shrink]</small>`
        html += `<span class='line collapse-toggle'>${indent}${btn}</span>`
        html += `<div class="collapse-content">`
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

export const fixDecorationWidth = (code) => {
  const width = code.scrollWidth
  const highestWidth = [...code.querySelectorAll('.collapse-content')].reduce((highest, c) => {
    const width = c.scrollWidth
    return width > highest ? width : highest
  }, 0);

  if (highestWidth > width) {
    code.style.width = `${highestWidth}px`
  }

  const lines = [...code.querySelectorAll('.line, .collapse-content')]
  lines.map(line => {
    line.style.width = `${width}px`
  });
}
