CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `country_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `country` (`country_id`, `country_name`) VALUES
(1, 'Northern Ireland'),
(2, 'Scotland'),
(3, 'Wales'),
(4, 'England');

ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`),
  ADD UNIQUE KEY `country_name` (`country_name`);

ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
