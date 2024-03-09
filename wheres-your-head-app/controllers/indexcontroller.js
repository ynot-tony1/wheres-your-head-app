exports.getIndex = (req, res, next) => {
  try {
    res.render("index", { title: "Where's ur head app" });
  } catch (error) {
    next(error);
  }
};
