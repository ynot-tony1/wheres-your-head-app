CREATE TABLE `user_address` (
  `address_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `address_line` varchar(255) DEFAULT NULL,
  `postal_code` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `user_address`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `city_id` (`city_id`);

ALTER TABLE `user_address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `user_address`
  ADD CONSTRAINT `user_address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `user_address_ibfk_2` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`);
