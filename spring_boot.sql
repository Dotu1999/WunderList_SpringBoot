-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 24, 2020 lúc 05:27 PM
-- Phiên bản máy phục vụ: 10.4.13-MariaDB
-- Phiên bản PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `spring_boot`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_comment`
--

CREATE TABLE `tb_comment` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `time` varchar(100) DEFAULT NULL,
  `idtask` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_comment`
--

INSERT INTO `tb_comment` (`id`, `title`, `time`, `idtask`) VALUES
(116, 'tudo', NULL, 58),
(119, 'hi', NULL, 64);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_file`
--

CREATE TABLE `tb_file` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `idtask` int(11) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_file`
--

INSERT INTO `tb_file` (`id`, `name`, `idtask`, `link`) VALUES
(53, 'wunderlist.sql', 61, NULL),
(55, 'wunderlist.sql', 58, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_list`
--

CREATE TABLE `tb_list` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `iduser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_list`
--

INSERT INTO `tb_list` (`id`, `name`, `number`, `iduser`) VALUES
(6, 'dfhafs', NULL, 2),
(7, 'dsds', NULL, 3),
(67, 'Toán', NULL, 1),
(68, 'Lý', NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_role`
--

CREATE TABLE `tb_role` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_subtask`
--

CREATE TABLE `tb_subtask` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `idtask` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_subtask`
--

INSERT INTO `tb_subtask` (`id`, `name`, `status`, `idtask`) VALUES
(11, 'j', 0, 58),
(13, 'j', 1, 61),
(14, 'k', 1, 67);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_task`
--

CREATE TABLE `tb_task` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `star` tinyint(1) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `create_day` date DEFAULT current_timestamp(),
  `note` text DEFAULT NULL,
  `remind` date DEFAULT NULL,
  `idlist` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_task`
--

INSERT INTO `tb_task` (`id`, `name`, `star`, `status`, `create_day`, `note`, `remind`, `idlist`) VALUES
(19, 'fhf', 0, 1, NULL, NULL, NULL, 7),
(58, 'hello', 0, 1, '2020-08-13', 'hihi', '2020-08-11', 67),
(61, 'thu 2', 1, 1, '2020-08-19', NULL, '2020-08-11', 67),
(63, 'hu', 0, 0, '2020-08-12', NULL, '2020-08-04', 68),
(64, 'huy', 1, 1, NULL, 'hii', '2020-08-20', 68),
(65, 'hi', 0, 1, NULL, NULL, NULL, 68),
(66, 'hu', 1, 0, NULL, NULL, '2020-08-04', 67),
(67, 'd', 1, 0, NULL, NULL, NULL, 67);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tb_user`
--

INSERT INTO `tb_user` (`id`, `name`, `email`, `password`) VALUES
(1, 'Tudo', 'tudq72@wru.vn', '202cb962ac59075b964b07152d234b70'),
(2, 'Nhu', 'nhu@gmail.com', '5ec829debe54b19a5f78d9a65b900a39'),
(3, '123456', 'huu@gmail.com', 'e10adc3949ba59abbe56e057f20f883e');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tb_user_role`
--

CREATE TABLE `tb_user_role` (
  `idUser` int(11) NOT NULL,
  `idRole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tb_comment`
--
ALTER TABLE `tb_comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tb_comment_ibfk_1` (`idtask`);

--
-- Chỉ mục cho bảng `tb_file`
--
ALTER TABLE `tb_file`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tb_file_ibfk_1` (`idtask`);

--
-- Chỉ mục cho bảng `tb_list`
--
ALTER TABLE `tb_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iduser` (`iduser`) USING BTREE;

--
-- Chỉ mục cho bảng `tb_role`
--
ALTER TABLE `tb_role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tb_subtask`
--
ALTER TABLE `tb_subtask`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTask` (`idtask`);

--
-- Chỉ mục cho bảng `tb_task`
--
ALTER TABLE `tb_task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tb_task_ibfk_1` (`idlist`);

--
-- Chỉ mục cho bảng `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tb_user_role`
--
ALTER TABLE `tb_user_role`
  ADD PRIMARY KEY (`idUser`,`idRole`),
  ADD KEY `idRole` (`idRole`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tb_comment`
--
ALTER TABLE `tb_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT cho bảng `tb_file`
--
ALTER TABLE `tb_file`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT cho bảng `tb_list`
--
ALTER TABLE `tb_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT cho bảng `tb_role`
--
ALTER TABLE `tb_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tb_subtask`
--
ALTER TABLE `tb_subtask`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `tb_task`
--
ALTER TABLE `tb_task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT cho bảng `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `tb_comment`
--
ALTER TABLE `tb_comment`
  ADD CONSTRAINT `tb_comment_ibfk_1` FOREIGN KEY (`idtask`) REFERENCES `tb_task` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tb_file`
--
ALTER TABLE `tb_file`
  ADD CONSTRAINT `tb_file_ibfk_1` FOREIGN KEY (`idtask`) REFERENCES `tb_task` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tb_list`
--
ALTER TABLE `tb_list`
  ADD CONSTRAINT `tb_list_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `tb_user` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tb_subtask`
--
ALTER TABLE `tb_subtask`
  ADD CONSTRAINT `tb_subtask_ibfk_1` FOREIGN KEY (`idtask`) REFERENCES `tb_task` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tb_task`
--
ALTER TABLE `tb_task`
  ADD CONSTRAINT `tb_task_ibfk_1` FOREIGN KEY (`idlist`) REFERENCES `tb_list` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tb_user_role`
--
ALTER TABLE `tb_user_role`
  ADD CONSTRAINT `tb_user_role_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `tb_user` (`id`),
  ADD CONSTRAINT `tb_user_role_ibfk_2` FOREIGN KEY (`idRole`) REFERENCES `tb_role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
