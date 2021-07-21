/**
 *
 * @param {HTMLDivElement} metadata
 * @param {HTMLPreElement} code
 */
export function applyMetadata(metadata, code) {
  const highlights = resolveLines(metadata.getAttribute("highlight") || "");
  const fadeds = resolveLines(metadata.getAttribute("faded") || "");
  const addeds = resolveLines(metadata.getAttribute("added") || "");
  const removeds = resolveLines(metadata.getAttribute("removed") || "");

  applyClassToLines(code, "faded", fadeds);
  applyClassToLines(code, "highlighted", highlights);
  applyClassToLines(code, "added", addeds);
  applyClassToLines(code, "removed", removeds);

  const needExtraIndent = code.querySelector(".line.highlighted")
    || code.querySelector(".line.added")
    || code.querySelector(".line.removed");

  if (needExtraIndent) {
    code.classList.add("extra-indent");
  }
}

/**
 *
 * @param {string} lines
 */
function resolveLines(lines) {
  return lines
    .split(",")
    .map(line => line.trim())
    .map(line => line.split("-").map(n => parseInt(n)))
    .reduce((res, line) => [
      ...res,
      ...(line[1] ? getRange(line[0], line[1]) : line)
    ], []);
}

/**
 *
 * @param {number} from
 * @param {number} to
 */
function getRange(from, to) {
  return Array((to - from) + 1).fill(null).map((n, i) => from + i);
}

/**
 *
 * @param {HTMLPreElement} code
 * @param {string} className
 * @param {number[]} lines
 */
function applyClassToLines(code, className, lines) {
  const lineEls = [...code.querySelectorAll("code span.line")];
  lines.forEach(line => {
    const lineEl = lineEls[line - 1];
    if (lineEl) {
      lineEl.classList.add(className);
    }
  });
}
