-- MySQL dump 10.13  Distrib 8.0.12, for osx10.12 (x86_64)
--
-- Host: localhost    Database: eventsreg_prod2
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authmap`
--

DROP TABLE IF EXISTS `authmap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `authmap` (
  `uid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'Primary key: users.uid for user.',
  `provider` varchar(128) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'The name of the authentication provider providing the authname',
  `authname` varchar(128) NOT NULL DEFAULT '' COMMENT 'Unique authentication name provided by authentication provider',
  `data` longblob COMMENT 'Extra (serialized) data to store with the authname.',
  PRIMARY KEY (`uid`,`provider`),
  UNIQUE KEY `authname_provider` (`authname`,`provider`),
  KEY `uid` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Stores distributed authentication mapping.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authmap`
--

LOCK TABLES `authmap` WRITE;
/*!40000 ALTER TABLE `authmap` DISABLE KEYS */;
INSERT INTO `authmap` (`uid`, `provider`, `authname`, `data`) VALUES (25,'ldap_user','bojjak',_binary 'N;'),(26,'ldap_user','malonec',_binary 'N;'),(27,'ldap_user','kneislercp',_binary 'N;'),(28,'ldap_user','chamorroh',_binary 'N;'),(35,'ldap_user','soliecw',_binary 'N;'),(36,'ldap_user','donkorvn',_binary 'N;'),(37,'ldap_user','jonesangel',_binary 'N;'),(38,'ldap_user','ginsbure',_binary 'N;'),(40,'ldap_user','mehrig',_binary 'N;'),(47,'ldap_user','nusratyj',_binary 'N;'),(57,'ldap_user','steelefr',_binary 'N;'),(58,'ldap_user','oliveroo',_binary 'N;'),(59,'ldap_user','garnernn',_binary 'N;'),(60,'ldap_user','advanips',_binary 'N;');
/*!40000 ALTER TABLE `authmap` ENABLE KEYS */;
UNLOCK TABLES;
