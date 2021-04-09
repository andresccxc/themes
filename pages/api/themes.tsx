import { themes } from "../../JsonsExamples/json";

export default (req, res) => {
  res.status(200).json(themes);
};