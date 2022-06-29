export default function map(items, component) {
  return items.map((item, index) => component(item, index)).join("");
}
