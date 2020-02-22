-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 13, 2019 at 06:35 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `inventory_my_erec`
--
CREATE DATABASE IF NOT EXISTS `inventory_my_erec` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `inventory_my_erec`;

-- --------------------------------------------------------

--
-- Table structure for table `app_user`
--

CREATE TABLE IF NOT EXISTS `app_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `position` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `app_user`
--

INSERT INTO `app_user` (`id`, `username`, `password`, `name`, `position`) VALUES
(2, 'tobi', 'tobi', 'Cashier Pharmacy', 'Cashier'),
(3, 'admin', 'admin123', 'Administrator', 'admin'),
(5, 'joy', 'joy', 'Alasagba', 'Cashier');

-- --------------------------------------------------------

--
-- Table structure for table `conducted`
--

CREATE TABLE IF NOT EXISTS `conducted` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `conducted`
--

INSERT INTO `conducted` (`id`, `name`) VALUES
(1, 'Lasitha'),
(2, 'Chamilka');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `department` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `department`) VALUES
(1, 'Digital Content Media'),
(2, 'Graphics'),
(3, 'IT Developers'),
(4, 'Digital Marketing'),
(5, 'Finance'),
(6, 'IT Operations'),
(7, 'Directors'),
(8, 'HR & Admin'),
(9, '');

-- --------------------------------------------------------

--
-- Table structure for table `event_type`
--

CREATE TABLE IF NOT EXISTS `event_type` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `event_type` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `event_type`
--

INSERT INTO `event_type` (`id`, `event_type`) VALUES
(1, 'Permanent Assign'),
(2, 'Return'),
(3, 'Repair'),
(4, 'Improvement'),
(5, 'Temporary Assign');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE IF NOT EXISTS `history` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `user_id` int(4) NOT NULL,
  `item_code` varchar(10) NOT NULL,
  `event_type_id` int(4) NOT NULL,
  `discripiton` text NOT NULL,
  `conducted_user_id` int(4) NOT NULL,
  `status` text NOT NULL,
  `start_date` datetime NOT NULL,
  `end_datetime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `user_id`, `item_code`, `event_type_id`, `discripiton`, `conducted_user_id`, `status`, `start_date`, `end_datetime`) VALUES
(1, 10, 'Test1', 1, '', 1, 'a', '2018-10-23 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE IF NOT EXISTS `items` (
  `item_code` varchar(50) NOT NULL,
  `item_type_id` int(4) NOT NULL,
  `item_model_id` int(4) NOT NULL,
  `serial_no` varchar(30) DEFAULT NULL,
  `ram` varchar(5) DEFAULT NULL,
  `hdd` varchar(5) DEFAULT NULL,
  `operating_system_id` int(4) NOT NULL,
  `license_status` text,
  `product_key` varchar(30) DEFAULT NULL,
  `purchased_date` date DEFAULT NULL,
  `warranty_expire_date` date DEFAULT NULL,
  `vendor_id` int(4) DEFAULT NULL,
  `battery_serial_number` text,
  `charger_ct_number` text,
  `user_id` int(4) DEFAULT NULL,
  PRIMARY KEY (`item_code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_code`, `item_type_id`, `item_model_id`, `serial_no`, `ram`, `hdd`, `operating_system_id`, `license_status`, `product_key`, `purchased_date`, `warranty_expire_date`, `vendor_id`, `battery_serial_number`, `charger_ct_number`, `user_id`) VALUES
('Test1', 4, 11, '123456fg', '100GB', '100TB', 1, 'True', '123456', '2018-07-24', '2021-07-23', 1, '1111', '22222', 10),
('Test2', 1, 6, '', '', '', 13, 'False', '', '0000-00-00', '0000-00-00', 1, '', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `item_model`
--

CREATE TABLE IF NOT EXISTS `item_model` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `item_model` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=40 ;

--
-- Dumping data for table `item_model`
--

INSERT INTO `item_model` (`id`, `item_model`) VALUES
(1, 'HP Pro Book 4540s'),
(2, 'HP Pavilion g4'),
(3, 'DELL Inspiron 1440'),
(4, 'HP Pro Book 450 G'),
(5, 'Singer SN-243AT'),
(6, 'Singer SN-W243AT'),
(7, 'HP Pro Book 450 G1'),
(8, 'HP ENVY(BCM94313HMGB)'),
(9, 'DELL Inspiron N4050'),
(10, 'HP Pro Book 440 G2'),
(11, 'Apple Mack Book Pro'),
(12, 'DELL Inspiron N5050'),
(13, 'HP Pro Book 4530s'),
(14, 'DELL Inspiron N4110'),
(15, 'HP Pro Book 450 G0'),
(16, 'HP ProBook 440 G2'),
(17, 'HP Pro Book 450 G2'),
(18, 'A1466 EMC Z559'),
(19, 'HP Pro Book 450'),
(20, 'DELL Inspiron N4010'),
(21, 'HP Pro Book 450G2'),
(22, 'DELL Inspiron N5110'),
(23, 'HP Pavilion dv6 - 1315TX'),
(24, 'HP ProBook 4540s'),
(25, 'Singer SINX-243AT'),
(26, 'Lenovo G480'),
(27, 'DELL Inspiron N4030'),
(28, 'Desktop'),
(29, 'Desktop (EWIS Pro 2500 MT )'),
(30, 'HP ProBook 440 G3'),
(31, '860-112ms Signature Edition'),
(32, 'Apple - Mbair (MMGF27A/A)'),
(33, 'HP 15-AN008TX Starwars'),
(34, 'HP proBook 440 G4'),
(35, 'Kingston DDR4'),
(36, 'Back Pack'),
(37, 'Laptop Bag'),
(38, 'Back Pack'),
(39, 'Side Back');

-- --------------------------------------------------------

--
-- Table structure for table `item_type`
--

CREATE TABLE IF NOT EXISTS `item_type` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `item_type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `item_type`
--

INSERT INTO `item_type` (`id`, `item_type`) VALUES
(1, 'Laptop'),
(2, 'Mouse'),
(3, 'Laptop Bag'),
(4, 'Printer'),
(5, 'Scanner'),
(6, 'Dongle'),
(7, 'Desktop Computer'),
(8, 'UPS'),
(9, 'Monitor'),
(10, 'Modem');

-- --------------------------------------------------------

--
-- Table structure for table `operating_system`
--

CREATE TABLE IF NOT EXISTS `operating_system` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `operating_system` varchar(50) NOT NULL,
  `bit_version` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `operating_system`
--

INSERT INTO `operating_system` (`id`, `operating_system`, `bit_version`) VALUES
(1, 'Windows XP', '32 bit'),
(2, 'Windows XP', '64 bit'),
(3, 'Windows 7', '32 bit'),
(4, 'Windows 7', '64 bit'),
(5, 'Windows 8', '32 bit'),
(6, 'Windows 8', '64 bit'),
(7, 'Windows 8.1', '32 bit'),
(8, 'Windows 8.1', '64 bit'),
(9, 'Windows 10', '32 bit'),
(10, 'Windows 10', '64 bit'),
(11, 'Ubuntu', '32 bit'),
(12, 'Ubuntu', '64 bit'),
(13, 'Linux', '32 bit'),
(14, 'Linux', '64 bit'),
(15, 'MAC', '32 bit'),
(16, 'MAC', '64 bit'),
(17, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `department_id` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=81 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `department_id`) VALUES
(1, 'Abdul Basith', 1),
(2, 'Affroz Rahaman', 2),
(3, 'Ajeem Wahid', 3),
(4, 'Anne Lawrance', 2),
(5, 'Athma Sachini', 3),
(6, 'Ayesha Fernando', 1),
(7, 'Buddika Bandara', 3),
(8, 'Buddika Prasanna', 4),
(9, 'Chamila Ranasinghe', 5),
(10, 'Chamilka Anuradha', 6),
(11, 'Chanaka Rupasinghe', 3),
(12, 'Chathuranga Wickramarachchi', 4),
(13, 'Christiene Fernando ', 1),
(14, 'Danuka Perera', 2),
(15, 'Danushka Rupasinghe', 2),
(16, 'Deepthi Hewage', 1),
(17, 'Dhushy Thillaivasan', 7),
(18, 'Dilini Jayarathne', 4),
(19, 'Dimuth Danuka', 8),
(20, 'Dulan Amarasekara', 2),
(21, 'Eranda Sanjeewa ', 1),
(22, 'Gayan Sampath', 6),
(23, 'Gayathri Karunaratne', 1),
(24, 'George Charles', 4),
(25, 'Gihan De Silva', 3),
(26, 'Gimhani  Yapa', 4),
(27, 'Hasintha Lakmali', 5),
(28, 'Heshan Kirindagamage', 4),
(29, 'Indunil Samararuwan', 5),
(30, 'Ishaq Deen', 2),
(31, 'Isurika Bandara', 4),
(32, 'Isuru Senadeera', 1),
(33, 'Janaka Rupasinghe', 7),
(34, 'Jayomi Lokuliyana', 7),
(35, 'Jenagan Sivasubramanium', 4),
(36, 'Kamal Indika', 3),
(37, 'Kevin Perera', 4),
(38, 'Lasitha Hirushan', 6),
(39, 'Lekha Lokuliyana', 5),
(40, 'Manjula Tissera', 8),
(41, 'Mark Alexandar', 1),
(42, 'Milan Madhushanka', 5),
(43, 'Mohamed Musni', 3),
(44, 'Mohamed Shafeek', 3),
(45, 'Nadeesha Ekanayake', 1),
(46, 'Nawfel Farook', 1),
(47, 'Nazeef Farook', 1),
(48, 'Nilushi Karunanayake', 1),
(49, 'Obersekara', 8),
(50, 'Pamudi Jayathilake', 3),
(51, 'Praveena Buddika', 3),
(52, 'Rajendar Kathiravel', 3),
(53, 'Rishi Elias', 4),
(54, 'Riyaz Mohamed', 4),
(55, 'Rushan Nipuna', 2),
(56, 'Sachini Dilprabhani', 1),
(57, 'Sajith Nandasena', 3),
(58, 'Samitha Sandaruwan', 8),
(59, 'Sandun Dissanayake', 3),
(60, 'Sarah Leykha', 4),
(61, 'Shafar Nazeer', 4),
(62, 'Shazmin Asfer', 3),
(63, 'Shehan Fernando', 6),
(64, 'Shehan Jayasinghe', 8),
(65, 'Sivanu Muttumani', 8),
(66, 'T K Gamini', 8),
(67, 'Thakshila Sandaruwani', 1),
(68, 'Tharindu Lakmal', 8),
(69, 'Thiraj Priyadarshana', 3),
(70, 'Thushiyanthi Theivendran ', 3),
(71, 'Upekha Abeyrathna', 1),
(72, 'Vimukthi Muthukudaarachchi', 4),
(73, 'Viraj Madushanka', 3),
(74, 'Viran Fernando', 3),
(75, 'Wasula Ratnayaka', 4),
(76, 'Yasiru Attanayake', 3),
(77, 'Yohan Abeyratne', 4),
(78, 'Zaman Aslam', 1),
(79, 'Sivatharan Arulanantham', 3),
(80, 'Available', 9);

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

CREATE TABLE IF NOT EXISTS `vendor` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `vendor_name` varchar(50) NOT NULL,
  `registered_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `vendor`
--

INSERT INTO `vendor` (`id`, `vendor_name`, `registered_date`) VALUES
(1, 'VSIS', '2014-01-01'),
(2, 'Barclays', '2012-07-01');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
