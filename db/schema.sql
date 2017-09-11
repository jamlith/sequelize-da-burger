-- Check if database exists, or create it.
CREATE DATABASE  IF NOT EXISTS `burgers_db`;
USE `burgers_db`;

-- Create table 'burgers', destroy the old one if it exists.
DROP TABLE IF EXISTS `burgers`;
CREATE TABLE `burgers` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(75) NOT NULL,
  `devoured` tinyint(1) DEFAULT '0',
  `TIMESTAMP` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- Lock the table to keep any concurrent writes to the database during this gigantic dump here yonder
LOCK TABLES `burgers` WRITE;
-- Populate with about 10 yummy sounding burgers.  Make it the 10 yummiest, ya dig?
INSERT INTO `burgers` VALUES (DEFAULT,'Royale w/ Cheese',DEFAULT,DEFAULT),(DEFAULT,'Quarter Pounder',DEFAULT,DEFAULT),(DEFAULT,'Double Double w/ Animal Sauce',DEFAULT,DEFAULT),(DEFAULT,'Whataburger',DEFAULT,DEFAULT),(DEFAULT,'McRib',DEFAULT,DEFAULT),(DEFAULT,'The Baconator',DEFAULT,DEFAULT),(DEFAULT,'The Lambshank Redemption',DEFAULT,DEFAULT);
-- If you love something, you must let it go.

UNLOCK TABLES;
