-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2024 at 11:13 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wheres-your-head-app-final`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(255) NOT NULL,
  `country_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `city`
--

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

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `country_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `country_name`) VALUES
(4, 'England'),
(1, 'Northern Ireland'),
(2, 'Scotland'),
(3, 'Wales');

-- --------------------------------------------------------

--
-- Table structure for table `emotion_snapshots`
--

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

--
-- Dumping data for table `emotion_snapshots`
--

INSERT INTO `emotion_snapshots` (`snapshot_id`, `user_id`, `enjoyment_level`, `sadness_level`, `anger_level`, `contempt_level`, `disgust_level`, `fear_level`, `surprise_level`, `snap_created`, `snap_updated`, `contextual_triggers`) VALUES
(45, 4, 51, 51, 51, 51, 51, 51, 1, '2024-02-20 10:33:46', '2024-02-25 16:35:48', 'ddddddd'),
(53, 4, 100, 51, 51, 51, 51, 51, 51, '2024-02-20 11:08:48', NULL, 'jh'),
(54, 4, 100, 51, 51, 51, 51, 51, 51, '2024-02-20 11:08:55', NULL, 'jj'),
(55, 4, 100, 51, 51, 51, 51, 51, 51, '2024-02-22 10:00:17', NULL, 'yyy'),
(57, 4, 1, 51, 51, 51, 51, 51, 51, '2024-02-22 10:02:06', NULL, 'ujk'),
(58, 4, 100, 51, 51, 51, 51, 51, 51, '2024-02-22 10:02:40', NULL, 'ikuy'),
(59, 4, 100, 51, 51, 51, 51, 51, 51, '2024-02-22 10:02:48', NULL, 'hjkh'),
(60, 4, 51, 51, 51, 51, 51, 51, 100, '2024-02-22 10:24:17', NULL, 'y'),
(61, 4, 51, 51, 51, 51, 51, 51, 100, '2024-02-22 10:24:22', NULL, 'yyy'),
(62, 4, 51, 100, 51, 51, 51, 51, 51, '2024-02-22 10:55:44', NULL, 'ik'),
(63, 4, 51, 100, 51, 51, 51, 51, 51, '2024-02-22 10:55:48', NULL, 'hjk'),
(64, 4, 50, 50, 50, 50, 50, 50, 50, '2022-02-01 00:00:00', NULL, NULL),
(65, 4, 50, 50, 50, 50, 50, 50, 50, '2022-03-01 00:00:00', NULL, NULL),
(66, 4, 50, 50, 50, 50, 50, 50, 50, '2022-04-01 00:00:00', NULL, NULL),
(67, 4, 50, 50, 50, 50, 50, 50, 50, '2022-05-01 00:00:00', NULL, NULL),
(68, 4, 50, 50, 50, 50, 50, 50, 50, '2022-06-01 00:00:00', NULL, NULL),
(69, 4, 50, 50, 50, 50, 50, 50, 50, '2022-07-01 00:00:00', NULL, NULL),
(70, 4, 50, 50, 50, 50, 50, 50, 50, '2022-08-01 00:00:00', NULL, NULL),
(71, 4, 50, 50, 50, 50, 50, 50, 50, '2022-09-01 00:00:00', NULL, NULL),
(72, 4, 50, 50, 50, 50, 50, 50, 50, '2022-10-01 00:00:00', NULL, NULL),
(73, 4, 50, 50, 50, 50, 50, 50, 50, '2022-11-01 00:00:00', NULL, NULL),
(74, 4, 50, 50, 50, 50, 50, 50, 50, '2022-12-01 00:00:00', NULL, NULL),
(75, 4, 50, 50, 50, 50, 50, 50, 50, '2023-01-01 00:00:00', NULL, NULL),
(76, 4, 50, 50, 50, 50, 50, 50, 50, '2023-02-01 00:00:00', NULL, NULL),
(77, 4, 50, 50, 50, 50, 50, 50, 50, '2023-03-01 00:00:00', NULL, NULL),
(78, 4, 50, 50, 50, 50, 50, 50, 50, '2023-04-01 00:00:00', NULL, NULL),
(79, 4, 50, 50, 50, 50, 50, 50, 50, '2023-05-01 00:00:00', NULL, NULL),
(80, 4, 50, 50, 50, 50, 50, 50, 50, '2023-06-01 00:00:00', NULL, NULL),
(81, 4, 50, 50, 50, 50, 50, 50, 50, '2023-07-01 00:00:00', NULL, NULL),
(82, 4, 50, 50, 50, 50, 50, 50, 50, '2023-08-01 00:00:00', NULL, NULL),
(83, 4, 50, 50, 50, 50, 50, 50, 50, '2023-09-01 00:00:00', NULL, NULL),
(84, 4, 50, 50, 50, 50, 50, 50, 50, '2023-10-01 00:00:00', NULL, NULL),
(85, 4, 50, 50, 50, 50, 50, 50, 50, '2023-11-01 00:00:00', NULL, NULL),
(86, 4, 50, 50, 50, 50, 50, 50, 50, '2023-12-01 00:00:00', NULL, NULL),
(87, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-14 00:00:00', '2024-02-22 11:27:38', NULL),
(88, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-15 00:00:00', '2024-02-22 11:27:38', NULL),
(89, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-16 00:00:00', '2024-02-22 11:27:38', NULL),
(90, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-17 00:00:00', '2024-02-22 11:27:38', NULL),
(91, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-18 00:00:00', '2024-02-22 11:27:38', NULL),
(92, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-19 00:00:00', '2024-02-22 11:27:38', NULL),
(93, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-20 00:00:00', '2024-02-22 11:27:38', NULL),
(94, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-07 00:00:00', '2024-02-22 11:27:38', NULL),
(95, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-08 00:00:00', '2024-02-22 11:27:38', NULL),
(96, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-09 00:00:00', '2024-02-22 11:27:38', NULL),
(97, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-10 00:00:00', '2024-02-22 11:27:38', NULL),
(98, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-11 00:00:00', '2024-02-22 11:27:38', NULL),
(99, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-12 00:00:00', '2024-02-22 11:27:38', NULL),
(100, 4, 67, 67, 67, 67, 67, 67, 67, '2024-02-13 00:00:00', '2024-02-22 11:27:38', NULL),
(101, 4, 100, 51, 51, 51, 51, 51, 51, '2024-02-22 11:28:20', NULL, 'y'),
(102, 4, 59, 25, 17, 19, 16, 19, 13, '2024-02-22 18:59:29', NULL, 'happy'),
(103, 4, 1, 100, 1, 100, 1, 100, 1, '2024-02-23 12:13:12', NULL, 'ee'),
(104, 4, 0, 50, 50, 50, 50, 50, 50, '2024-02-23 12:16:10', NULL, 'dfs'),
(105, 4, 50, 50, 50, 50, 23, 50, 50, '2024-02-23 12:22:37', NULL, ''),
(106, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 12:26:26', NULL, ''),
(107, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 13:05:49', NULL, ''),
(108, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 13:11:51', NULL, ''),
(109, 4, 0, 50, 50, 50, 50, 50, 50, '2024-02-23 13:11:59', NULL, ''),
(110, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 14:39:35', NULL, ''),
(123, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 15:31:29', NULL, 'hg'),
(124, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 15:31:54', NULL, 'dgdg'),
(125, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 15:31:58', NULL, 'dddddd'),
(126, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 18:23:14', NULL, 'ddddddd'),
(127, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 18:24:28', NULL, 'fff'),
(128, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 18:42:49', NULL, 'ddd'),
(130, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 23:31:56', NULL, 'ff'),
(131, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-23 23:33:38', NULL, 'cd'),
(132, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-24 10:22:01', NULL, 'gggg'),
(133, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-24 10:22:04', NULL, 'ggggg'),
(152, 4, 50, 50, 50, 50, 50, 50, 99, '2024-02-25 16:54:27', NULL, 'sdfs'),
(179, 69, 50, 50, 50, 50, 50, 50, 50, '2024-02-25 20:05:07', NULL, 'gdfsg'),
(180, 69, 50, 50, 50, 50, 50, 50, 50, '2024-02-25 20:07:17', NULL, 'gdfg'),
(184, 70, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 08:12:12', NULL, 'fdg'),
(185, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 11:47:05', NULL, 'dfs'),
(186, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 11:49:56', NULL, 'sdf'),
(187, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 11:57:44', NULL, 'dd'),
(188, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 11:57:48', NULL, 'sdfs'),
(189, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 11:58:46', NULL, 'sdfs'),
(190, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 12:00:50', NULL, 'sdfs'),
(191, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 12:02:29', NULL, 'sdfsd'),
(260, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:08:41', NULL, 'dfd'),
(261, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:09:13', NULL, 'df'),
(262, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:11:08', NULL, 'dfs'),
(263, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:11:24', NULL, 'dfs'),
(265, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:12:58', NULL, 'sdf'),
(266, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:15:04', NULL, 'sdf'),
(267, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:15:41', NULL, 'dfd'),
(268, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:15:45', NULL, 'sds'),
(274, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:23:22', NULL, 'fdg'),
(275, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:24:28', NULL, 'fdg'),
(276, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:24:32', NULL, 'vvvvv'),
(278, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:27:22', NULL, 'sdfsd'),
(279, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:27:28', NULL, 'sssss'),
(280, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:29:08', NULL, 'fdbfd'),
(284, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:31:21', NULL, 'fff'),
(285, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:31:23', NULL, 'ffff'),
(286, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:31:28', NULL, 'ddddd'),
(287, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:32:22', NULL, 'sad'),
(288, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:32:24', NULL, 'sadas'),
(291, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 16:47:24', NULL, 'ddddd'),
(292, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 17:12:29', NULL, 'eeeee'),
(295, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 17:22:45', NULL, 'vvvv'),
(300, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-26 18:55:14', NULL, 'zzzzz'),
(302, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:08:48', NULL, 'ff'),
(303, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:08:50', NULL, 'ff'),
(304, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:10:05', NULL, 'df'),
(305, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:10:14', NULL, 'rrrr'),
(306, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:11:00', NULL, 'frgfg'),
(307, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:12:42', NULL, 'fg'),
(308, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:12:51', NULL, 'dsfd'),
(309, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:13:11', NULL, 'ss'),
(310, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:13:55', NULL, 'fhd'),
(311, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:14:19', NULL, 'ssss'),
(312, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:14:55', NULL, 'fdsfs'),
(313, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:15:16', NULL, 'fdgdfg'),
(314, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:15:32', NULL, 'sdf'),
(315, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:19:02', NULL, 'r'),
(316, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:22:31', NULL, 'ads'),
(317, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:23:50', NULL, 'ee'),
(318, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 09:24:22', NULL, 'fffff'),
(319, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-27 09:25:42', NULL, NULL),
(380, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 12:00:05', NULL, 'sds'),
(383, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 17:47:50', NULL, 'bf'),
(384, 4, 50, 0, 50, 87, 50, 50, 50, '2024-02-27 17:47:57', NULL, 'dfgd'),
(386, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 17:50:01', NULL, 'ghjghj'),
(387, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:02:11', NULL, 'fgf'),
(388, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:02:55', NULL, 'fgf'),
(389, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:02:57', NULL, 'fgf'),
(390, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:04:11', NULL, 'dfg'),
(391, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:04:16', NULL, 'dfg'),
(392, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:04:22', NULL, 'dg'),
(393, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:04:52', NULL, 'dg'),
(394, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:06:47', NULL, 'sdfds'),
(395, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:07:00', NULL, 'sdfsd'),
(396, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:07:10', NULL, 'sdfsd'),
(397, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:07:16', NULL, 'dfg'),
(398, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:09:27', NULL, 'sdfs'),
(399, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:11:32', NULL, 'fg'),
(400, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:12:36', NULL, 'fhgf'),
(401, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:12:53', NULL, 'ghj'),
(402, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:13:00', NULL, 'tyjt'),
(403, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:18:53', NULL, 'sdf'),
(404, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-27 18:25:16', NULL, 'dfgdfg'),
(417, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 09:24:28', NULL, 'fgfg'),
(418, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:05:33', NULL, 'fdsf'),
(419, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:05:33', NULL, 'fdsf'),
(420, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:05:34', NULL, 'fdsf'),
(421, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:05:35', NULL, 'fdsf'),
(422, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:13:34', NULL, 'dfd'),
(423, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:13:45', NULL, 'fg'),
(424, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:14:14', NULL, 'fg'),
(425, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:14:51', NULL, 'dfg'),
(426, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:14:57', NULL, 'sdf'),
(428, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:16:07', NULL, 'fsdf'),
(430, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:19:45', NULL, 'dfd'),
(431, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:20:04', NULL, 'ads'),
(432, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:20:35', NULL, 'sadasd'),
(438, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:33:56', NULL, ''),
(439, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-28 10:36:10', NULL, 'tt'),
(446, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-29 08:28:09', NULL, 'dfg'),
(447, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-29 08:29:19', NULL, 'gh'),
(448, 4, 0, 100, 0, 100, 0, 100, 0, '2024-02-29 08:50:58', NULL, 'fhfgh'),
(449, 4, 50, 100, 50, 50, 50, 50, 50, '2024-02-29 08:53:50', NULL, 'df'),
(450, 4, 50, 100, 50, 50, 50, 50, 50, '2024-02-29 08:53:55', NULL, 'df'),
(451, 4, 50, 100, 50, 50, 50, 50, 50, '2024-02-29 08:54:00', NULL, 'df'),
(460, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-29 14:32:22', NULL, 'gh'),
(463, 80, 50, 50, 50, 50, 50, 50, 50, '2024-02-29 14:57:15', NULL, 'd'),
(464, 4, 50, 50, 50, 50, 50, 50, 50, '2024-02-29 17:16:05', NULL, 'uyiy'),
(465, 81, 78, 15, 25, 0, 0, 23, 0, '2024-02-29 23:02:22', '2024-02-29 23:02:51', 'ghhbgg'),
(466, 81, 13, 100, 22, 78, 100, 68, 22, '2024-02-29 23:03:09', NULL, ''),
(467, 81, 5, 29, 29, 7, 21, 68, 14, '2024-02-29 23:03:37', NULL, ''),
(468, 4, 50, 50, 50, 50, 50, 50, 50, '2024-03-02 08:07:58', NULL, 'hjg'),
(469, 4, 50, 50, 50, 50, 50, 50, 50, '2024-03-02 08:08:05', NULL, 'dg'),
(470, 4, 100, 50, 50, 50, 50, 50, 50, '2024-03-02 08:08:18', NULL, ''),
(471, 82, 50, 50, 50, 50, 50, 50, 50, '2024-03-03 11:07:53', NULL, 'ljh'),
(472, 82, 50, 50, 50, 50, 50, 50, 50, '2024-03-03 11:07:58', NULL, 'lkjl'),
(474, 4, 50, 50, 50, 50, 50, 50, 50, '2024-03-03 19:30:06', NULL, 'bvn hnfn'),
(475, 4, 100, 87, 77, 65, 55, 34, 0, '2024-03-03 21:32:35', NULL, 'ddddd'),
(477, 4, 50, 50, 50, 50, 50, 50, 50, '2024-03-05 10:56:57', NULL, 'dfgd'),
(479, 4, 50, 50, 50, 50, 50, 50, 50, '2024-03-05 10:58:53', NULL, 'sd'),
(493, 4, 50, 50, 50, 50, 50, 50, 50, '2024-03-05 18:11:24', NULL, 'ryrty'),
(494, 4, 50, 50, 50, 50, 50, 50, 50, '2024-03-06 08:29:11', '2024-03-06 08:29:16', 'vvv');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `pass_word` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `previous_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `pass_word`, `email`, `last_login`, `previous_login`) VALUES
(4, '222', '$2a$10$Ar6CJxXNEcnlrFRwFUv8cOnEOaS.s20uP9S5RlagER016dZbBXtFK', 'fgrgsg@gfdg.com', '2024-03-06 08:25:52', '2024-03-06 08:25:48'),
(69, 'ggg', '$2a$10$gN.80h7x2t7YrSOmCTTUx.elDZTDIpz/SquIEQVK/p/cKVYrsfi0e', 'fgsedswan56@gmail.com', '2024-02-25 20:03:29', NULL),
(70, 'fff', '$2a$10$Z8Q9AjZbb4LlBkDWWVu84ealgY7ddverNjPvTYg2ABH0WtWJGM9yi', 'fgf@gmail.com', '2024-02-26 08:11:03', NULL),
(72, 'rrr', '$2a$10$dIhrWxfP1aqurPLAiH9b2eml4P9oxkLk5kKU9HdjK0ZZW6cwPrrYe', 'dsf@fd', NULL, NULL),
(73, '555', '$2a$10$mtQlkSYVHfG59xZbmckms.sBr4JLAgm30mOdEmyYqTO0cfAdmMBgK', 'fddan56@gmail.com', '2024-02-28 11:27:54', '2024-02-28 11:04:30'),
(74, 'NNN', '$2a$10$/YqFqRZoahWA9taxudyds.w53xF3HwBEHHYqQ/KIJyYm2zs0zHFji', '3543@hotmail.com', '2024-02-29 10:05:25', '2024-02-29 10:02:16'),
(75, 'ttt', '$2a$10$io/aQYZdx2QLqjIvhoIXGeSmNSotGWKoiQgHUacGUcNO14i.FG82K', 'dgwan56@gmail.com', '2024-02-28 18:34:22', '2024-02-28 18:14:19'),
(77, 'vvv', '$2a$10$Iy7UB6sETuK/JHVAtjywZudk8Mm8astgHaUcWqgns6Six741IYEMS', 'fghfdh@fdgstg.com', '2024-02-29 14:32:28', '2024-02-29 12:03:23'),
(78, 'mmm', '$2a$10$1qmTCrdVBEEQ2sb/uhne4.pzlodeYhl39Ea7rn/bD8hufiYDFZ6fm', 'adsad@hotmail.co.uk', '2024-02-29 11:54:48', '2024-02-29 11:52:50'),
(79, 'kkk', '$2a$10$gXmCNXApb15s5x7DrUSpO.eLIjheyYA/cCKWbZkgu32vXbjalANIu', 'fhgfh@fdgstg.com', '2024-02-29 14:34:31', NULL),
(80, 'jjj', '$2a$10$rTUUEhmVVKt/nU2xG7t7uOG6zT5YSOinkJHVfAsNRNI4xUEx6IPAe', 'asdasd6@gmail.com', '2024-02-29 14:57:07', NULL),
(81, '111', '$2a$10$kZXWa93npbgGUhpvEATtl.TcHwK4xliLiH0hKzoSxyOk.Wsg2uWzq', 'lknox23@gmail.com', '2024-02-29 23:04:09', '2024-02-29 23:01:52'),
(82, 'lll', '$2a$10$lSLqwGv770o5MZRWN7z8AOemKV3vr5AsVLrIunYNdyFc0Yuc8YWwC', 'dgrfd6@gmail.com', '2024-03-03 11:07:44', NULL),
(85, '5454', '$2a$10$TYhPa.5S4zdOR1IkXTBb8u2wAXgu3.pchftsG6huzS4IAiJRqNVri', 'fsdfsdfsdsan56@gmail.com', '2024-03-03 14:46:19', NULL),
(86, '0808', '$2a$10$OQqhq6WkVGOoEuvH0FtmqOTmfYHqJ7xas2.k9WrF/k3EIQifvAkmy', 'yhdrthdrttdfg@hotmail.com', NULL, NULL),
(87, '6667', '$2a$10$bJLwVao8lXT/OUrUeS62ReXGnbXEEaZ6slRh6g.zU1QEqkfK83Ht6', 'gkggkan56@gmail.com', '2024-03-03 14:59:52', NULL),
(88, '1111', '$2a$10$UvGgpdbk3xOorht3vTSPiOUwC52wOD1aqH0ZP/qdp9NAnJcQMs01q', '34534556@gmail.com', '2024-03-03 15:00:41', NULL),
(89, '66666', '$2a$10$jm3yvaR4wb/Cx8XjyqHZqustOfoUxcS7iMgQuUhrjrEwWxdMswzF6', 'fdsdfs56@gmail.com', '2024-03-03 17:12:55', NULL),
(90, '65555', '$2a$10$Dq4Q4NW8Tll2nM.Sd4jtYehshduXWwLFX2GGdoX8OIQV/hJTuIbYK', 'fsdfgds56@gmail.com', '2024-03-03 17:30:43', NULL),
(91, '76666', '$2a$10$J0L9e38c7nToi8jZRYaf6.9o5.8zYyQV.h8isLstznKfNQqZlvTse', 'gfdfgdn56@gmail.com', '2024-03-03 19:33:34', NULL),
(92, '6666666', '$2a$10$4UBXhGi5edAfaow6T1ZfEe9gdjI3pflCR1NCCIr4Sg06jaAyIe2pS', 'sdfsdf6@gmail.com', '2024-03-03 21:53:44', NULL),
(93, '555555', '$2a$10$bqNFR9XUlv1L5O7FujoVieW9J6bARqWhCOXC0HYFVyG1WeHnLs1MC', 'fsadfas56@gmail.com', '2024-03-04 19:07:55', NULL),
(94, '2222222', '$2a$10$RQSqU94bPEm.o3OkzBDfc.drrjsC1T/1.XNrTetGe8dYEehc1UfGK', 'dfsdfsan56@gmail.com', '2024-03-04 19:25:08', NULL),
(95, 'ffffff', '$2a$10$RaLKAFjAuABL2154aUAZH.4tWcoejPL3ZGfp8qw3K9.ZGCZpmYmz.', 'gfdd6@gmail.com', '2024-03-05 11:10:53', NULL),
(96, '666666666', '$2a$10$RtTd1bmokT8BK.VwBNCbtO3RBtvDWRni2Ca8PBrZO3uafW4Vt8Etu', 'fgdfgd6@gmail.com', '2024-03-05 17:51:01', NULL),
(97, 'tttttt', '$2a$10$cFxqoK9axGSODA.33/MUpeLmR5SCM9M2MYxtCEVaQaYEIRk21QSge', 'fgdan56@gmail.com', '2024-03-05 18:03:57', NULL),
(98, 'yyyyyyy', '$2a$10$2KRc09AU6PU9/0A.gBHuX.5faFx5Iic7bD8IH0ERUQ564bpmRYwIS', 'tjytjtyn_@hotmail.co.uk', '2024-03-05 18:06:11', NULL),
(100, 'ddddddd', '$2a$10$lk0BR/OBQH91t3SYx5kYVOkmUU0lPFr4rjRJ/PeD9LAibPWypcMAu', 'sdgffdsgs56@gmail.com', '2024-03-05 18:10:14', NULL),
(101, 'hhhhhhh', '$2a$10$RHBOU4bTbElVefYVFFdwX.2c85D/A2/wA1kCQP/fCf6gqp4hpIJ.a', 'gfddd6@gmail.com', '2024-03-05 18:11:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_address`
--

CREATE TABLE `user_address` (
  `address_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `address_line` varchar(255) DEFAULT NULL,
  `postal_code` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_address`
--

INSERT INTO `user_address` (`address_id`, `user_id`, `city_id`, `address_line`, `postal_code`) VALUES
(1, 85, NULL, '1 fgdfg road', 'BT153JP'),
(2, 86, 20, '6 hgh road', 'BT153JP'),
(3, 87, 22, '7 fdgde road', 'BT153JP'),
(4, 88, 4, '3 jhygj road', 'BT153JP'),
(5, 4, 1, '1 Royal Avenue', 'BT13LT'),
(6, 89, 10, '5 hally road', 'BT153JP'),
(7, 90, 4, '4 dsdf gfdgd', 'BT153JP'),
(8, 91, 9, 'dfdf', 'dfd'),
(9, 92, 15, '4 dfg dfgr', 'BT153JP'),
(10, 93, 2, 'fddsf', 'fdsf'),
(11, 94, 19, 'dfgdf', 'fdg'),
(12, 95, 2, 'fdf', 'dfd'),
(13, 96, 19, 'gdg', 'fdg'),
(14, 97, 2, 'asd', 'asd'),
(15, 98, 19, 'dvfd', 'dvvd'),
(16, 100, 22, 'ddddddd', 'ddddddd'),
(17, 101, 19, 'hhhhhhh', 'hhhhhhh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`),
  ADD UNIQUE KEY `country_name` (`country_name`);

--
-- Indexes for table `emotion_snapshots`
--
ALTER TABLE `emotion_snapshots`
  ADD PRIMARY KEY (`snapshot_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `city_id` (`city_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `emotion_snapshots`
--
ALTER TABLE `emotion_snapshots`
  MODIFY `snapshot_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=495;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `user_address`
--
ALTER TABLE `user_address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `city`
--
ALTER TABLE `city`
  ADD CONSTRAINT `city_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `country` (`country_id`);

--
-- Constraints for table `emotion_snapshots`
--
ALTER TABLE `emotion_snapshots`
  ADD CONSTRAINT `emotion_snapshots_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `user_address`
--
ALTER TABLE `user_address`
  ADD CONSTRAINT `user_address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `user_address_ibfk_2` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
