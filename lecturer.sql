-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 06, 2025 at 04:38 PM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lecturer`
--

-- --------------------------------------------------------

--
-- Table structure for table `lecturer_data`
--

CREATE TABLE `lecturer_data` (
  `nidn` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `title` varchar(50) NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `faculty` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lecturer_data`
--

INSERT INTO `lecturer_data` (`nidn`, `name`, `title`, `gender`, `faculty`) VALUES
('1122334455', 'Dr. Alice Walker', 'M.Sc.', 'Female', 'Computer Science'),
('1234567890', 'Prof. Elang', 'Ph.D', 'Male', 'Computer Science'),
('1234567899', 'Dr. John Smith', 'M.T.', 'Male', 'Engineering'),
('32234', 'Sir Akek', 'Pelawak', 'Male', 'Business'),
('5243', 'Prof. Budi', 'S.kom', 'Male', 'Computer Science'),
('5312625443', 'Dr. Lesmana', 'S.Kom., M.T.', 'Male', 'Engineering'),
('5566778899', 'Dr. Robert Brown', 'M.Ed.', 'Male', 'Education'),
('6677889900', 'Prof. Emily Davisn', 'Ph.D.', 'Female', 'Business Management'),
('673432', 'Prof. Maemunah', 'S.Phil', 'Female', 'Philosiphy'),
('9876543210', 'Prof. Jane Doe', 'Ph.D.', 'Female', 'Science');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lecturer_data`
--
ALTER TABLE `lecturer_data`
  ADD PRIMARY KEY (`nidn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
