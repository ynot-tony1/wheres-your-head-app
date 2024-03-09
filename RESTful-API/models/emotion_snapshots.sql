CREATE TABLE `emotion_snapshots` (
  `snapshot_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `enjoyment_level` int(11) DEFAULT NULL,
  `sadness_level` int(11) DEFAULT NULL,
  `anger_level` int(11) DEFAULT NULL,
  `contempt_level` int(11) DEFAULT NULL,
  `disgust_level` int(11) DEFAULT NULL,
  `fear_level` int(11) DEFAULT NULL,
  `surprise_level` int(11) DEFAULT NULL,
  `snap_created` datetime NOT NULL DEFAULT current_timestamp(),
  `snap_updated` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `contextual_triggers` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `emotion_snapshots`
  ADD PRIMARY KEY (`snapshot_id`),
  ADD KEY `user_id` (`user_id`);

ALTER TABLE `emotion_snapshots`
  MODIFY `snapshot_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `emotion_snapshots`
  ADD CONSTRAINT `emotion_snapshots_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
