CREATE TABLE `city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(255) NOT NULL,
  `country_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `city` (`city_id`, `city_name`, `country_id`) VALUES
(1, 'Belfast', 1),
(2, 'Derry', 1),
(3, 'Lisburn', 1),
(4, 'Newtownabbey', 1),
(5, 'Bangor', 1),
(6, 'Craigavon', 1),
(7, 'Glasgow', 2),
(8, 'Edinburgh', 2),
(9, 'Aberdeen', 2),
(10, 'Dundee', 2),
(11, 'Paisley', 2),
(12, 'East Kilbride', 2),
(13, 'Cardiff', 3),
(14, 'Swansea', 3),
(15, 'Newport', 3),
(16, 'Wrexham', 3),
(17, 'Barry', 3),
(18, 'Neath', 3),
(19, 'London', 4),
(20, 'Birmingham', 4),
(21, 'Manchester', 4),
(22, 'Liverpool', 4),
(23, 'Newcastle', 4),
(24, 'Leeds', 4);



ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`),
  ADD KEY `country_id` (`country_id`);

ALTER TABLE `city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

ALTER TABLE `city`
  ADD CONSTRAINT `city_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `country` (`country_id`);
