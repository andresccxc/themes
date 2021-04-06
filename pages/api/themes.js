
const themes = [{
  selected_theme: 'theme1',
  header_background: 'blue',
  title: 'Theme 1',
  description: 'Descripción del theme1'
}, {
  selected_theme: 'theme2',
  header_background: 'red',
  title: 'Theme 2',
  description: 'Descripción del theme2'
}];

export default (req, res) => {
  res.status(200).json(themes[Math.floor(Math.random() * themes.length)])
}
