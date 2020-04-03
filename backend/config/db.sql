-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: just_travelous
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SELECT @@FOREIGN_KEY_CHECKS; SET FOREIGN_KEY_CHECKS=1;


DROP database just_travelous;

CREATE DATABASE just_travelous;

USE just_travelous;
--
-- Table structure for table user2
--

DROP TABLE IF EXISTS user2;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE user2
(
  Email char
(30) NOT NULL,
  Name char
(20) DEFAULT NULL,
  Password char
(15) DEFAULT NULL,
  PRIMARY KEY
(Email),
  UNIQUE
  KEY Email_UNIQUE
  (Email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table user2
--

LOCK TABLES user2 WRITE;
/*!40000 ALTER TABLE user2 DISABLE KEYS */;
  INSERT INTO 
user2
  VALUES
    ('ali@gmail.com', 'Ali', 'asdf'),
    ('alice@gmail.com', 'Alice', 'alice'),
    ('bob@gmail.com', 'Bob', 'bob'),
    ('nerine@gmail', 'Nerine', '12as'),
    ('omar@gmail.com', 'Omar', '1234');
  /*!40000 ALTER TABLE user2 ENABLE KEYS */;
  UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

  --
  -- Table structure for table user1
  --

  DROP TABLE IF EXISTS user1;
  /*!40101 SET @saved_cs_client     = @@character_set_client */;
  /*!50503 SET character_set_client = utf8mb4 */;
  CREATE TABLE user1
  (
    UserId char
(15) NOT NULL,
    Email char
(30) NOT NULL,
    PRIMARY KEY
(UserId),
    UNIQUE
    KEY Email_UNIQUE
    (Email),
  CONSTRAINT Email FOREIGN KEY
    (Email) REFERENCES user2
    (Email) ON
    DELETE CASCADE
) ENGINE=InnoDB
    DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table user1
--

LOCK TABLES user1 WRITE;
/*!40000 ALTER TABLE user1 DISABLE KEYS */;
    INSERT INTO 
user1
    VALUES
      ('2', 'ali@gmail.com'),
      ('5', 'alice@gmail.com'),
      ('4', 'bob@gmail.com'),
      ('1', 'nerine@gmail'),
      ('3', 'omar@gmail.com');
    /*!40000 ALTER TABLE user1 ENABLE KEYS */;
    UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

    --
    -- Table structure for table adminuser
    --

    DROP TABLE IF EXISTS adminuser;
    /*!40101 SET @saved_cs_client     = @@character_set_client */;
    /*!50503 SET character_set_client = utf8mb4 */;
    CREATE TABLE adminuser
    (
      AdminUserId char
(15) NOT NULL,
      PRIMARY KEY
(AdminUserId),
      CONSTRAINT AdminUserId FOREIGN KEY
(AdminUserId) REFERENCES user1
(UserId)
    )
    ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table adminuser
--

LOCK TABLES adminuser WRITE;
/*!40000 ALTER TABLE adminuser DISABLE KEYS */;
    INSERT INTO 
adminuser
    VALUES
      ('1'),
      ('2'),
      ('3');
    /*!40000 ALTER TABLE adminuser ENABLE KEYS */;
    UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

    --
    -- Table structure for table generaluser
    --

    DROP TABLE IF EXISTS generaluser;
    /*!40101 SET @saved_cs_client     = @@character_set_client */;
    /*!50503 SET character_set_client = utf8mb4 */;
    CREATE TABLE generaluser
    (
      GeneralUserId char
(15) NOT NULL,
      PRIMARY KEY
(GeneralUserId),
      CONSTRAINT GeneralUserId FOREIGN KEY
(GeneralUserId) REFERENCES user1
(UserId)
    )
    ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table generaluser
--

LOCK TABLES generaluser WRITE;
/*!40000 ALTER TABLE generaluser DISABLE KEYS */;
    INSERT INTO 
generaluser
    VALUES
      ('4'),
      ('5');
    /*!40000 ALTER TABLE generaluser ENABLE KEYS */;
    UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

    --
    -- Table structure for table country
    --

    DROP TABLE IF EXISTS country;
    /*!40101 SET @saved_cs_client     = @@character_set_client */;
    /*!50503 SET character_set_client = utf8mb4 */;
    CREATE TABLE country
    (
      CountryName char
(30) NOT NULL,
      Continent char
(15) NOT NULL,
      PRIMARY KEY
(CountryName)
    )
    ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table country
--

LOCK TABLES country WRITE;
/*!40000 ALTER TABLE country DISABLE KEYS */;
    INSERT INTO 
country
    VALUES
      ('Canada', 'North America'),
      ('France', 'Europe'),
      ('Italy', 'Europe'),
      ('Japan', 'Asia'),
      ('Spain', 'Europe'),
      ('United States', 'North America');
    /*!40000 ALTER TABLE country ENABLE KEYS */;
    UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

    --
    -- Table structure for table city
    --

    DROP TABLE IF EXISTS city;
    /*!40101 SET @saved_cs_client     = @@character_set_client */;
    /*!50503 SET character_set_client = utf8mb4 */;
    CREATE TABLE city
    (
      CityName char
(30) NOT NULL,
      PostalCode char
(20) NOT NULL,
      PRIMARY KEY
(CityName,PostalCode),
      KEY PostalCode
      (PostalCode)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table city
--

LOCK TABLES city WRITE;
/*!40000 ALTER TABLE city DISABLE KEYS */;
      INSERT INTO 
city
      VALUES
        ('Rome', '00184'),
        ('New York', '10028'),
        ('New York', '10036'),
        ('Minato', '1050011'),
        ('Shibuya', '1510053'),
        ('Madrid', '28008'),
        ('Madrid', '28014'),
        ('Pistoia', '51100'),
        ('Paris', '75006'),
        ('Paris', '75007'),
        ('Vancouver', 'V6A1X3'),
        ('Whistler', 'V8E1B8');
      /*!40000 ALTER TABLE city ENABLE KEYS */;
      UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

      --
      -- Table structure for table country_has_city
      --

      DROP TABLE IF EXISTS country_has_city;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE country_has_city
      (
        CountryNameCHC char
(30) NOT NULL,
        CityNameCHC char
(30) NOT NULL,
        PostalCodeCHC char
(20) NOT NULL,
        PRIMARY KEY
(CountryNameCHC,CityNameCHC,PostalCodeCHC),
        KEY CityName_idx
        (CityNameCHC,PostalCodeCHC),
  KEY PostalCode_idx
        (PostalCodeCHC) /*!80000 INVISIBLE */,
  CONSTRAINT CityNameCHC FOREIGN KEY
        (CityNameCHC) REFERENCES city
        (CityName) ON  update CASCADE ON
DELETE CASCADE,
  CONSTRAINT CountryNameCHC FOREIGN KEY
        (CountryNameCHC) REFERENCES country
        (CountryName) ON  update CASCADE ON
DELETE CASCADE,
  CONSTRAINT PostalCodeCHC FOREIGN KEY
        (PostalCodeCHC) REFERENCES city
        (PostalCode) ON  update CASCADE ON
DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table country_has_city
--

LOCK TABLES country_has_city WRITE;
/*!40000 ALTER TABLE country_has_city DISABLE KEYS */;
        INSERT INTO 
country_has_city
        VALUES
          ('Spain', 'Madrid', '28008'),
          ('Spain', 'Madrid', '28014'),
          ('Japan', 'Minato', '1050011'),
          ('United States', 'New York', '10028'),
          ('United States', 'New York', '10036'),
          ('France', 'Paris', '75006'),
          ('France', 'Paris', '75007'),
          ('Italy', 'Pistoia', '51100'),
          ('Italy', 'Rome', '00184'),
          ('Japan', 'Shibuya', '1510053'),
          ('Canada', 'Vancouver', 'V6A1X3'),
          ('Canada', 'Whistler', 'V8E1B8');
        /*!40000 ALTER TABLE country_has_city ENABLE KEYS */;
        UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

        --
        -- Table structure for table experience
        --

        DROP TABLE IF EXISTS experience;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE experience
        (
          ExperienceId INTEGER PRIMARY KEY AUTO_INCREMENT,
          ExperienceName char
(30) DEFAULT NULL,
          ExperienceRating varchar
(45) DEFAULT NULL,
          ExperienceAccessibility varchar
(45) DEFAULT NULL,
          ExperienceCost varchar
(45) DEFAULT NULL,
          PRIMARY KEY
(ExperienceId)
        )
        ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table experience
--

LOCK TABLES experience WRITE;
/*!40000 ALTER TABLE experience DISABLE KEYS */;
        INSERT INTO 
experience
        VALUES
          ('1', 'Eiffel Tower', '5', '3', '2'),
          ('10', 'Cebo', '4', '4', '4'),
          ('11', 'Metropolitan Museum of Art', '5', '4', '2'),
          ('12', 'Shake Shack', '3', '3', '1'),
          ('2', 'Guy Savoy', '4', '5', '5'),
          ('3', 'Colosseum', '5', '4', '2'),
          ('4', 'Zoo of Pistoia', '4', '4', '3'),
          ('5', 'Tokyo Tower', '3', '4', '3'),
          ('6', 'Shin Udon', '5', '2', '1'),
          ('7', 'White Water Rafting', '4', '1', '4'),
          ('8', 'The Keefer Bar', '4', '4', '3'),
          ('9', 'Temple of Debod', '4', '2', '1');
        /*!40000 ALTER TABLE experience ENABLE KEYS */;
        UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

        --
        -- Table structure for table restaurant
        --

        DROP TABLE IF EXISTS restaurant;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE restaurant
        (
          RestaurantExperienceId char
(15) NOT NULL,
          Capacity int DEFAULT NULL,
          Type char
(20) DEFAULT NULL,
          PRIMARY KEY
(RestaurantExperienceId),
          CONSTRAINT RestaurantExperienceId FOREIGN KEY
(RestaurantExperienceId) REFERENCES experience
(ExperienceId)
        )
        ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table restaurant
--

LOCK TABLES restaurant WRITE;
/*!40000 ALTER TABLE restaurant DISABLE KEYS */;
        INSERT INTO 
restaurant
        VALUES
          ('10', 30, 'Spanish'),
          ('12', 25, 'Fast Food'),
          ('2', 50, 'French');
        /*!40000 ALTER TABLE restaurant ENABLE KEYS */;
        UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

        --
        -- Table structure for table entertainment
        --

        DROP TABLE IF EXISTS entertainment;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE entertainment
        (
          EntertainExperienceId char
(15) NOT NULL,
          AgeRating int DEFAULT NULL,
          PRIMARY KEY
(EntertainExperienceId),
          CONSTRAINT EntertainExperienceId FOREIGN KEY
(EntertainExperienceId) REFERENCES experience
(ExperienceId)
        )
        ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table entertainment
--

LOCK TABLES entertainment WRITE;
/*!40000 ALTER TABLE entertainment DISABLE KEYS */;
        INSERT INTO 
entertainment
        VALUES
          ('4', 0),
          ('7', 5),
          ('8', 18);
        /*!40000 ALTER TABLE entertainment ENABLE KEYS */;
        UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

        --
        -- Table structure for table sightseeing
        --

        DROP TABLE IF EXISTS sightseeing;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE sightseeing
        (
          SightSeeExperienceId char
(15) NOT NULL,
          Heritage char
(5) DEFAULT NULL,
          PRIMARY KEY
(SightSeeExperienceId),
          CONSTRAINT SightseeExperienceId FOREIGN KEY
(SightSeeExperienceId) REFERENCES experience
(ExperienceId)
        )
        ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table sightseeing
--

LOCK TABLES sightseeing WRITE;
/*!40000 ALTER TABLE sightseeing DISABLE KEYS */;
        INSERT INTO 
sightseeing
        VALUES
          ('1', 'yes'),
          ('11', 'no'),
          ('3', 'yes'),
          ('5', 'no'),
          ('9', 'yes');
        /*!40000 ALTER TABLE sightseeing ENABLE KEYS */;
        UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

        --
        -- Table structure for table address
        --

        DROP TABLE IF EXISTS address;
        /*!40101 SET @saved_cs_client     = @@character_set_client */;
        /*!50503 SET character_set_client = utf8mb4 */;
        CREATE TABLE address
        (
          Street char
(25) NOT NULL,
          StreetNo int NOT NULL,
          PostalCode char
(20) DEFAULT NULL,
          PRIMARY KEY
(Street,StreetNo),
          KEY StreetNo
          (StreetNo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table address
--

LOCK TABLES address WRITE;
/*!40000 ALTER TABLE address DISABLE KEYS */;
          INSERT INTO 
address
          VALUES
            ('5th Avenue', 1000, '10028'),
            ('8th Avenue', 691, '10036'),
            ('Avenue Anatole', 5, '75007'),
            ('Calle de Ferraz', 1, '28008'),
            ('Carrera de S. Jeronimo', 34, '28014'),
            ('Keefer St.', 135, 'V6A1X3'),
            ('Mountain Square', 4293, 'V8E1B8'),
            ('Piazza del Colosseo', 1, '00184'),
            ('Quai de Conti', 11, '75006'),
            ('Shibakoen', 4, '1050011'),
            ('Shibuya City', 51, '1510053'),
            ('Via Pieve a Celle', 160, '51100');
          /*!40000 ALTER TABLE address ENABLE KEYS */;
          UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

          --
          -- Table structure for table has_address
          --

          DROP TABLE IF EXISTS has_address;
          /*!40101 SET @saved_cs_client     = @@character_set_client */;
          /*!50503 SET character_set_client = utf8mb4 */;
          CREATE TABLE has_address
          (
            ExperienceIdHA char
(15) NOT NULL,
            StreetHA char
(25) NOT NULL,
            StreetNoHA int NOT NULL,
            PRIMARY KEY
(ExperienceIdHA,StreetHA,StreetNoHA),
            KEY StreetNoHA_idx
            (StreetNoHA),
  KEY StreetHA_idx
            (StreetHA),
  CONSTRAINT ExperienceIdHA FOREIGN KEY
            (ExperienceIdHA) REFERENCES experience
            (ExperienceId),
  CONSTRAINT StreetHA FOREIGN KEY
            (StreetHA) REFERENCES address
            (Street),
  CONSTRAINT StreetNoHA FOREIGN KEY
            (StreetNoHA) REFERENCES address
            (StreetNo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table has_address
--

LOCK TABLES has_address WRITE;
/*!40000 ALTER TABLE has_address DISABLE KEYS */;
            INSERT INTO 
has_address
            VALUES
              ('3', 'Piazza del Colosseo', 1),
              ('9', 'Calle de Ferraz', 1),
              ('5', 'Shibakoen', 4),
              ('1', 'Avenue Anatole', 5),
              ('2', 'Quai de Conti', 11),
              ('10', 'Carrera de S. Jeronimo', 34),
              ('6', 'Shibuya City', 51),
              ('8', 'Keefer St.', 135),
              ('4', 'Via Pieve a Celle', 160),
              ('12', '8th Avenue', 691),
              ('11', '5th Avenue', 1000),
              ('7', 'Mountain Square', 4293);
            /*!40000 ALTER TABLE has_address ENABLE KEYS */;
            UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

            --
            -- Table structure for table city_has_experience
            --

            DROP TABLE IF EXISTS city_has_experience;
            /*!40101 SET @saved_cs_client     = @@character_set_client */;
            /*!50503 SET character_set_client = utf8mb4 */;
            CREATE TABLE city_has_experience
            (
              CityNameCHE char
(30) NOT NULL,
              PostalCodeCHE char
(20) NOT NULL,
              ExperienceIdCHE char
(15) NOT NULL,
              PRIMARY KEY
(CityNameCHE,PostalCodeCHE,ExperienceIdCHE),
              KEY PostalCodeCHE_idx
              (PostalCodeCHE),
  CONSTRAINT CityNameCHE FOREIGN KEY
              (CityNameCHE) REFERENCES city
              (CityName),
  CONSTRAINT PostalCodeCHE FOREIGN KEY
              (PostalCodeCHE) REFERENCES city
              (PostalCode)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table city_has_experience
--

LOCK TABLES city_has_experience WRITE;
/*!40000 ALTER TABLE city_has_experience DISABLE KEYS */;
              INSERT INTO 
city_has_experience
              VALUES
                ('Rome', '00184', '3'),
                ('New York', '10028', '11'),
                ('New York', '10036', '12'),
                ('Minato', '1050011', '5'),
                ('Shibuya', '1510053', '6'),
                ('Madrid', '28008', '9'),
                ('Madrid', '28014', '10'),
                ('Pistoia', '51100', '4'),
                ('Paris', '75006', '2'),
                ('Paris', '75007', '1'),
                ('Vancouver', 'V6A1X3', '8'),
                ('Whistler', 'V8E1B8', '7');
              /*!40000 ALTER TABLE city_has_experience ENABLE KEYS */;
              UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

              --
              -- Table structure for table event
              --

              DROP TABLE IF EXISTS event;
              /*!40101 SET @saved_cs_client     = @@character_set_client */;
              /*!50503 SET character_set_client = utf8mb4 */;
              CREATE TABLE event
              (
                EventId char
(15) NOT NULL,
                Name char
(30) DEFAULT NULL,
                Type char
(20) DEFAULT NULL,
                Date char
(8) DEFAULT NULL,
                PRIMARY KEY
(EventId)
              )
              ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table event
--

LOCK TABLES event WRITE;
/*!40000 ALTER TABLE event DISABLE KEYS */;
              INSERT INTO 
event
              VALUES
                ('1', 'Honda Celebration of Lights', 'Fireworks Festival', '20200725'),
                ('2', 'Sakura Festival', 'Nature', '20200315'),
                ('3', 'Coachella', 'Music Festival', '20201009'),
                ('4', 'Cannes Film Festival', 'Film Festival', '20200715');
              /*!40000 ALTER TABLE event ENABLE KEYS */;
              UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

              --
              -- Table structure for table organizer
              --

              DROP TABLE IF EXISTS organizer;
              /*!40101 SET @saved_cs_client     = @@character_set_client */;
              /*!50503 SET character_set_client = utf8mb4 */;
              CREATE TABLE organizer
              (
                OrganizerEventId char
(30) NOT NULL,
                Name char
(30) NOT NULL,
                PRIMARY KEY
(OrganizerEventId,Name),
                CONSTRAINT OrganizerEventId FOREIGN KEY
(OrganizerEventId) REFERENCES event
(EventId) ON
DELETE CASCADE
              )
              ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table organizer
--

LOCK TABLES organizer WRITE;
/*!40000 ALTER TABLE organizer DISABLE KEYS */;
              INSERT INTO 
organizer
              VALUES
                ('1', 'Fireworks Festival Society'),
                ('2', 'City of Nihonbashi'),
                ('3', 'Anschutz Entertainment Group'),
                ('4', 'French Association of Film');
              /*!40000 ALTER TABLE organizer ENABLE KEYS */;
              UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

              --
              -- Table structure for table search2
              --

              DROP TABLE IF EXISTS search2;
              /*!40101 SET @saved_cs_client     = @@character_set_client */;
              /*!50503 SET character_set_client = utf8mb4 */;
              CREATE TABLE search2
              (
                ExperienceId char
(15) NOT NULL,
                CountryId char
(15) DEFAULT NULL,
                CityId char
(15) DEFAULT NULL,
                PRIMARY KEY
(ExperienceId)
              )
              ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table search2
--

LOCK TABLES search2 WRITE;
/*!40000 ALTER TABLE search2 DISABLE KEYS */;
/*!40000 ALTER TABLE search2 ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

              --
              -- Table structure for table search1
              --

              DROP TABLE IF EXISTS search1;
              /*!40101 SET @saved_cs_client     = @@character_set_client */;
              /*!50503 SET character_set_client = utf8mb4 */;
              CREATE TABLE search1
              (
                SearchUserId char
(15) NOT NULL,
                SearchNumber int NOT NULL,
                ExperienceId char
(15) DEFAULT NULL,
                PRIMARY KEY
(SearchUserId,SearchNumber),
                KEY ExperienceId_idx
                (ExperienceId),
  CONSTRAINT ExperienceId FOREIGN KEY
                (ExperienceId) REFERENCES search2
                (ExperienceId) ON
                DELETE CASCADE
) ENGINE=InnoDB
                DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table search1
--

LOCK TABLES search1 WRITE;
/*!40000 ALTER TABLE search1 DISABLE KEYS */;
/*!40000 ALTER TABLE search1 ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-31 12:19:12