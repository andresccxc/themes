import { themeOne } from "../../JsonsExamples/jsonRequest";

const themes = [themeOne];

export default (req, res) => {
  res.status(200).json(themes[Math.floor(Math.random() * themes.length)])
}
