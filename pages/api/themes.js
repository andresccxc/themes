import {themeOne} from '../../JsonsExamples/ThemeOne';
import {themeTwo} from '../../JsonsExamples/themeTwo';
const themes = [themeOne,themeTwo];

export default (req, res) => {
  res.status(200).json(themes[Math.floor(Math.random() * themes.length)])
}
