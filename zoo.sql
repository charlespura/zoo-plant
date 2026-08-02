-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 22, 2024 at 03:56 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zoo`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(75) DEFAULT NULL,
  `account_type` int(50) DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `last_activity` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `username`, `email`, `password`, `account_type`, `status`, `last_activity`) VALUES
(1, NULL, NULL, 'admin@gmail.com', '$2y$10$FQekjRY4KVNzrhzwzhKoP.1f.MjBYnSbGdJ5CD3xDPrzqk9CiBFAq', 1, 'active', '2024-11-22 09:57:17'),
(2, NULL, NULL, 'user@gmail.com', '$2y$10$hbGIzmSyNdb6Nkjww/NVf.4.mL0l0CcGSgHs6WiXchPgRXyYKmuke', 0, 'active', '2024-11-22 09:57:26'),
(3, NULL, NULL, 'user12@gmail.com', '$2y$10$UmmjPjBFDVXSAtppJ.lHbebgWh8bMdiuVTOV/FHtoSGAR5QPJtdwK', 0, 'active', '2024-11-22 10:11:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
