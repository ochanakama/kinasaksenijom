const replacements = new Map([
  ['/vodic/', '/#kontakt'],
  ['/o-meni/', '/#o-meni'],
  ['/ture/privatne/', '/#kontakt'],
]);

export default function remarkSafeLinks() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'link' && replacements.has(node.url)) {
        node.url = replacements.get(node.url);
      }
      if (Array.isArray(node.children)) node.children.forEach(visit);
    };
    visit(tree);
  };
}
