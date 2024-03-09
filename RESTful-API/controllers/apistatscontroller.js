const { queryDatabase } = require("../config/dbconn");

exports.getEmotionDataByUserId = async (req, res) => {
  const userId = req.params.userId; 
  try {
    const query = `
        SELECT snap_created AS date, enjoyment_level, sadness_level, anger_level, contempt_level, disgust_level, fear_level, surprise_level
        FROM emotion_snapshots
        WHERE user_id = ?
        ORDER BY snap_created ASC
        `;
    const results = await queryDatabase(query, [userId]);
    if (!results || results.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No emotion data found for the user",
      });
    }
    res.json({ status: "success", data: results });
  } catch (error) {
    console.error("Database query error:", error);
    res
      .status(500)
      .json({
        status: "error",
        message: "Failed to fetch emotion data",
        error,
      });
  }
};

exports.getAverageEnjoymentPerDay = async (req, res) => {
  const userId = req.params.userId; 

  try {
    const query = `
        SELECT DATE(snap_created) AS date, AVG(enjoyment_level) AS average_enjoyment
        FROM emotion_snapshots
        WHERE user_id = ?
        GROUP BY DATE(snap_created)
        ORDER BY DATE(snap_created) ASC
        `;
    const results = await queryDatabase(query, [userId]);

    if (!results || results.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No average enjoyment data found for the user",
      });
    }

    res.json({ status: "success", data: results });
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch average enjoyment data",
      error,
    });
  }
};

exports.getAvgSurprisePerDay = async (req, res) => {
  const userId = req.params.userId; 
  try {
    const query = `
        SELECT DATE(snap_created) AS date, AVG(surprise_level) AS average_surprise
        FROM emotion_snapshots
        WHERE user_id = ?
        GROUP BY DATE(snap_created)
        ORDER BY DATE(snap_created) ASC
        `;
    const results = await queryDatabase(query, [userId]);

    if (!results || results.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No average surprise data found for the user",
      });
    }

    res.json({ status: "success", data: results });
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch average surprise data",
      error,
    });
  }
};

exports.getAvgSadnessPerDay = async (req, res) => {
  const userId = req.params.userId;

  try {
    const query = `
        SELECT DATE(snap_created) AS date, AVG(sadness_level) AS average_sadness
        FROM emotion_snapshots
        WHERE user_id = ?
        GROUP BY DATE(snap_created)
        ORDER BY DATE(snap_created) ASC
        `;
    const results = await queryDatabase(query, [userId]);

    if (!results || results.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No average sadness data found for the user",
      });
    }
    res.json({ status: "success", data: results });
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch average sadness data",
      error,
    });
  }
};


