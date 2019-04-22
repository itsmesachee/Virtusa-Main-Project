--
-- Database: `virtusa`
--

-- --------------------------------------------------------

--
-- Table structure for table `appadmin`
--

DROP TABLE IF EXISTS `appadmin`;
CREATE TABLE IF NOT EXISTS `appadmin` (
  `id` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phno` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appadmin`
--

INSERT INTO `appadmin` (`id`, `password`, `phno`, `username`) VALUES
(1, '$2a$10$l8w2mhE/z8gzeko3ojRtRe8/c2gaI4ZoSS9qxBEHNFrJD/RalAT9.', '9790620082', 'utkarshnarain007@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(2);

-- --------------------------------------------------------

--
-- Table structure for table `orderproduct`
--

DROP TABLE IF EXISTS `orderproduct`;
CREATE TABLE IF NOT EXISTS `orderproduct` (
  `quantity` int(11) NOT NULL,
  `order_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  PRIMARY KEY (`order_id`,`product_id`),
  KEY `FKnxd5cfa5o3u9eiou4ca8uead9` (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `dateCreated` date DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `product_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `image4` varchar(255) DEFAULT NULL,
  `image5` varchar(255) DEFAULT NULL,
  `product_care_instructions` varchar(255) DEFAULT NULL,
  `product_fabric` varchar(255) DEFAULT NULL,
  `product_genre` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_occasion` varchar(255) DEFAULT NULL,
  `product_package_contents` varchar(255) DEFAULT NULL,
  `product_price` double DEFAULT NULL,
  `product_quantity` int(11) DEFAULT NULL,
  `image6` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `image1`, `image2`, `image3`, `image4`, `image5`, `product_care_instructions`, `product_fabric`, `product_genre`, `product_name`, `product_occasion`, `product_package_contents`, `product_price`, `product_quantity`, `image6`) VALUES
(1, 'https://drive.google.com/uc?id=1rq4DgaskkPjmLA5fgpyhfVhgI_AorSJA', 'https://drive.google.com/uc?id=1-0K8_GGWORPoF8pOxUNphs-9TubMq5BM', 'https://drive.google.com/uc?id=1zto4kO7oXoplvUT7z5bTDlk6MBQbiLlN', 'https://drive.google.com/uc?id=1RxAXUOX752aO4WlYHEeoEOl7tWM4iETn', 'https://drive.google.com/uc?id=1Kzxl8ZtDvV1LvUsoaQOW1jjT0qT2UeCn', 'First Wash Dry Clean Only. Do Not Spin In Order To Prevent Garment From Becoming Mishappen.', 'Crepe', 'Kurti', 'Long Kurti', 'Partywear, Functions, Casual, Ceremony', '1 Kurti', 622.99, 500, 'https://drive.google.com/uc?id=1dFpL-dkHBTfC1F6tLtYFwkMjD2eiWbrq'),
(2, 'https://drive.google.com/uc?id=12GvDi35wo6yVIloBpEQ-x5OrPUVxUDqj', 'https://drive.google.com/uc?id=1ePsj9xpU6P8AaIUqGFfT2BUkSRtprHVY', 'https://drive.google.com/uc?id=1U84lb1e8pjSaFBjVLWG_uhLdQbSc5tO_', 'https://drive.google.com/uc?id=147Dvz75RHcvt8tkI4IHPTAuNF7tgvog3', 'https://drive.google.com/uc?id=1tpgRVj-yeusI3goxUWUePSM8RWhIx8JO', 'First Wash Dry Clean Only. Do Not Spin In Order To Prevent Garment From Becoming Mishappen.', 'kurti - cotton, palazzo - cotton, sleeves are included', 'Kurti', 'Crepe Kurti', 'Party Wear/Festive Wear', '1 Kurta', 799, 500, 'https://drive.google.com/uc?id=1lxJGWTEAodFHdglewh2Nfc6zefx3YPXp'),
(3, 'https://drive.google.com/uc?id=1d8j8BaKTC1J1aZvvWLn8KE2mkj3CpE0q', 'https://drive.google.com/uc?id=1PNNV6GpGYWMPIZfNZIX5GB5HtU26fATy', 'https://drive.google.com/uc?id=1aUfywUEdpqfeG4lAg0PYNu3wh1Oh7O_B', 'https://drive.google.com/uc?id=1zTnsbx3fqInVG8tgkRoHQDfbxe7uR8ZG', 'https://drive.google.com/uc?id=1q36bOHYKPmicteUyxvQazhriUggxN0jS', 'machine wash', 'Cotton', 'Jeans', ' Skinny Jeans', 'Casual', '1 jeans, Inseam Length: 33 inches', 780, 150, 'https://drive.google.com/uc?id=1nrq1oibm6lOqnB97EpuKJWw6Buz3pIyv'),
(4, 'https://drive.google.com/uc?id=1Voh0YEmBAYEppqwpcOzglggu9M9vEm1i', 'https://drive.google.com/uc?id=18zLNj2r_Hcwqu6W_zn8tCqx9rmacjqvE', 'https://drive.google.com/uc?id=176HpllTQewphS9CivPgCka-7cWOpUF3Y', 'https://drive.google.com/uc?id=1B8-Aul4_A_uVB14zvmEy44yjaB8IJw-O', 'https://drive.google.com/uc?id=1lUb-xg_M3D-e2OCXjuhmYhh20b6EjKHE', 'machine or normal hand wash in cold water', 'Faux Leather', 'Jackets', 'Leather Jacket', 'Casual', '1 jacket', 1999, 200, 'https://drive.google.com/uc?id=1PS49UMzaJTrrdNY4oCE5AH5vZh1kvm9K'),
(10, 'https://drive.google.com/uc?id=15q-2XUvvZ5IsUwYhCbsvcmOd0MUaeDZI', 'https://drive.google.com/uc?id=12Y0WuxUZzy-SPF8KGtsVu7AEO1tIYkPu', 'https://drive.google.com/uc?id=1QobI5TRSPeUUxQKNaQMPq9PmM_e2RK_v', 'https://drive.google.com/uc?id=17HT_GJXCoSttiVRcZI6589XaKEX7MLiH', 'https://drive.google.com/uc?id=1UePKJj9fUvMxchCkv0AwIpY_ai7KB7js', 'Soft Wash Only', 'Cotton', 'Jackets', 'Casual Jacket', 'Casual Wear', '1 Jacket only', 4000, 10, 'https://drive.google.com/uc?id=1fGxFV9qjSvAeRNR3ASMFI-1iPNzEmKwR'),
(8, 'https://drive.google.com/uc?id=1ww-8GY6s8LGUZjUoHWCo9sMhoTbgX_AK', 'https://drive.google.com/uc?id=10vTQYMvi5hZut67AdC0uJuFuSZTDBIQB', 'https://drive.google.com/uc?id=1KLTk5Wurx8jqh4d7YEKN32uzSPvqSCcV', 'https://drive.google.com/uc?id=1cxri47L9_rWrHgOt6wsl5aaK254t3GNx', 'https://drive.google.com/uc?id=1MIGXdt5z7hDZogQVuIpmYfY5Hu3Qmsxn', 'Soft wash and Dry clean ', 'Cotton', 'Jackets', 'Cotton Jackets', 'Casual wear and Party wear', '1 Jacket only', 2400, 10, 'https://drive.google.com/uc?id=1fGxFV9qjSvAeRNR3ASMFI-1iPNzEmKwR'),
(6, 'https://drive.google.com/uc?id=1BAa6MqbOW-uD2AbmiVPkPO0xJUoNrs41', 'https://drive.google.com/uc?id=10JYgh4MLcBIaoFR5_qZSaxIIKr0pyj7a', 'https://drive.google.com/uc?id=1LRkV9NKq00cWMr0WolZIszb56ztLRnp3', 'https://drive.google.com/uc?id=1Np_yHT6kOj_ZVFd353DwGUTQ9bxW78CI', 'https://drive.google.com/uc?id=1Qe7r08J1xa-lWPHLWMLFB9WSctUF0HLE', 'Soft wash only', 'Cotton', 'Gymwear', 'Red and White Leggings', 'Casual wear', '1 leggings and 1 full sleeves top', 1500, 12, 'https://drive.google.com/uc?id=1_VuQUZUZV7KD5aJ4m6P8IwTH5rz7LYgt'),
(5, 'https://drive.google.com/uc?id=1O0OBbs2H82k0iJGYUnzjCSnCBkMkRlNi', 'https://drive.google.com/uc?id=1xj4exYkn0jobXmiMY26t9Az72Uz0YKIN', 'https://drive.google.com/uc?id=1El-KlUru4r_nHVb3iQSyIDbo69z-_QOv', 'https://drive.google.com/uc?id=1P-It1NmMGhLXwzivINQn-_TGYj2PYCQu', 'https://drive.google.com/uc?id=1cpGKrdjbq6nNBUYGzTeQboY3Sw_siPK4', 'Soft wash only', 'Silk', 'Gymwear', 'Appulse Highneck', 'Casual Wear', '1 highneck only', 1200, 20, 'https://drive.google.com/uc?id=1_VuQUZUZV7KD5aJ4m6P8IwTH5rz7LYgt'),
(11, 'https://drive.google.com/uc?id=1pkRaruIxu_ukvI6b2kuBbsHQd0vS_UmO', 'https://drive.google.com/uc?id=14MPIPxLRf9_8tBlnvCUJtOqBBZf8msN-', 'https://drive.google.com/uc?id=1yLiZvl8Gb5s7Np8ezCuUvWazb6-WNNMR', 'https://drive.google.com/uc?id=1LIJGtyDrqfdV9n0L6oGYSw7QtCQfcmJ6', 'https://drive.google.com/uc?id=1TeH-T2Wly1rgbvJ2OQX2Pq0LL2no84do', 'Soft Wash Only', 'Synthetic', 'Jeans', 'Black Jeans', 'Casual Wear', '1 Jeans only', 3500, 13, 'https://drive.google.com/uc?id=16rfWgtG7IUfmOI02_pXK3mbElvlbfNkR'),
(12, 'https://drive.google.com/uc?id=1x7ODs5NoRTEo9axJKInTsl6J3WETVcgu', 'https://drive.google.com/uc?id=1NBproYEld8Y9hVFUfjvCvi1tyq-UdM-j', 'https://drive.google.com/uc?id=1TgB8VX_7JI6JOqMiE5jqpNLGo59yJhcN', 'https://drive.google.com/uc?id=1mUCkywjJL_1hEDbdawZc_Ylys2nDI3Pj', 'https://drive.google.com/uc?id=10VfH5BWKD7NQ0OT3WNhTPJqe8lq_dANk', 'Soft Wash Only', 'Synthetic', 'Jeans', 'Blue Jeans', 'Casual Wear', '1 Jeans Only', 3800, 300, 'https://drive.google.com/uc?id=16rfWgtG7IUfmOI02_pXK3mbElvlbfNkR'),
(13, 'https://drive.google.com/uc?id=1Fa92uwFoNB6CGU59Yvfo1qFpFcquPXIp', 'https://drive.google.com/uc?id=1-3F2DOyijCtI6I_4dcKo7Te1JKnRNDAZ', 'https://drive.google.com/uc?id=1FkFS9fEg3MsuzAyAzDsDCkxJLxjwI8Va', 'https://drive.google.com/uc?id=1bymFhe1vaLlPbfzBEXs331vRxTrkZR-5', 'https://drive.google.com/uc?id=1aPT80cMW3pIksq_adZbr7Q89KZcZheUf', 'Soft wash only', 'Silk', 'Saree', ' Saree', 'Party wear', '1 Saree and 1 Blouse piece ', 2800, 300, 'https://drive.google.com/uc?id=1Q8D8_NrXVybEnL4CAFt66g-cvgPyycbz'),
(14, 'https://drive.google.com/uc?id=1MuFYj6Xj60lSOFanqGFb8ebaB3DKUDpL', 'https://drive.google.com/uc?id=17yzrA0D60_aNgtem87s7u1OSmxUeYPYm', 'https://drive.google.com/uc?id=1TZDLtagP1Xua20uWcH6FmLHmdk3qQzSj', 'https://drive.google.com/uc?id=1dXLosu2rj-n2o2JtOykhhdPA6IY--7JY', 'https://drive.google.com/uc?id=1XmxzCpUSbe8dvtG1WlOBOetFLraR98lw', 'Soft wash and Dry clean ', 'Silk', 'Saree', 'Navabi Saree', 'Party Wear', '1 saree and 1 Blouse piece', 8000, 100, 'https://drive.google.com/uc?id=1Q8D8_NrXVybEnL4CAFt66g-cvgPyycbz');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `password`, `username`) VALUES
(1, 'Utkarsh', 'Narain', '$2a$10$qy21THU11LnJZk64DAKT9O0xtBrtslQPLC/jITj4HnmfnEpjH1sim', 'utkarshnarain007@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
