const zod = require("zod");

const todoinput = zod.object({
  task: zod.string(),
  date: zod.string(),
  Completed: zod.boolean(),
});

module.exports = {
  todoinput,
};
