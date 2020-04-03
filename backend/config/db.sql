SELECT @@FOREIGN_KEY_CHECKS;

SET FOREIGN_KEY_CHECKS = 1;

DROP DATABASE just_travelous;

CREATE DATABASE just_travelous;

USE just_travelous;
--
-- Table structure for table user2
--
DROP TABLE IF EXISTS user2;

CREATE TABLE user2 (
  Email char (30) NOT NULL,
  Name char (20) DEFAULT NULL,
  PASSWORD char (15) DEFAULT NULL,
  PRIMARY KEY (Email),
  UNIQUE KEY Email_UNIQUE (Email)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table user2
--
LOCK TABLES user2 WRITE;

INSERT INTO
  user2
VALUES
  ('ali@gmail.com', 'Ali', 'asdf'),
  ('alice@gmail.com', 'Alice', 'alice'),
  ('bob@gmail.com', 'Bob', 'bob'),
  ('nerine@gmail', 'Nerine', '12as'),
  ('omar@gmail.com', 'Omar', '1234');

UNLOCK TABLES;

--
-- Table structure for table user1
--
DROP TABLE IF EXISTS user1;

CREATE TABLE user1 (
  UserId char (15) NOT NULL,
  Email char (30) NOT NULL,
  PRIMARY KEY (UserId),
  UNIQUE KEY Email_UNIQUE (Email),
  CONSTRAINT Email FOREIGN KEY (Email) REFERENCES user2 (Email) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table user1
--
LOCK TABLES user1 WRITE;

INSERT INTO
  user1
VALUES
  ('2', 'ali@gmail.com'),
  ('5', 'alice@gmail.com'),
  ('4', 'bob@gmail.com'),
  ('1', 'nerine@gmail'),
  ('3', 'omar@gmail.com');

UNLOCK TABLES;

--
-- Table structure for table adminuser
--
DROP TABLE IF EXISTS adminuser;

CREATE TABLE adminuser (
  AdminUserId char (15) NOT NULL,
  PRIMARY KEY (AdminUserId),
  CONSTRAINT AdminUserId FOREIGN KEY (AdminUserId) REFERENCES user1 (UserId)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table adminuser
--
LOCK TABLES adminuser WRITE;

INSERT INTO
  adminuser
VALUES
  ('1'),
  ('2'),
  ('3');

UNLOCK TABLES;

--
-- Table structure for table generaluser
--
DROP TABLE IF EXISTS generaluser;

CREATE TABLE generaluser (
  GeneralUserId char (15) NOT NULL,
  PRIMARY KEY (GeneralUserId),
  CONSTRAINT GeneralUserId FOREIGN KEY (GeneralUserId) REFERENCES user1 (UserId)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table generaluser
--
LOCK TABLES generaluser WRITE;

INSERT INTO
  generaluser
VALUES
  ('4'),
  ('5');

UNLOCK TABLES;

--
-- Table structure for table country
--
DROP TABLE IF EXISTS country;

CREATE TABLE country (
  CountryName char (30) NOT NULL,
  Continent char (15) NOT NULL,
  PRIMARY KEY (CountryName)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table country
--
LOCK TABLES country WRITE;

INSERT INTO
  country
VALUES
  ('Canada', 'North America'),
  ('France', 'Europe'),
  ('Italy', 'Europe'),
  ('Japan', 'Asia'),
  ('Spain', 'Europe'),
  ('United States', 'North America');

UNLOCK TABLES;

--
-- Table structure for table city
--
DROP TABLE IF EXISTS city;

CREATE TABLE city (
  CityName char (30) NOT NULL,
  PostalCode char (20) NOT NULL,
  PRIMARY KEY (CityName, PostalCode),
  KEY PostalCode (PostalCode)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table city
--
LOCK TABLES city WRITE;

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

UNLOCK TABLES;

--
-- Table structure for table country_has_city
--
DROP TABLE IF EXISTS country_has_city;

CREATE TABLE country_has_city (
  CountryNameCHC char (30) NOT NULL,
  CityNameCHC char (30) NOT NULL,
  PostalCodeCHC char (20) NOT NULL,
  PRIMARY KEY (
    CountryNameCHC,
    CityNameCHC,
    PostalCodeCHC
  ),
  KEY CityName_idx (CityNameCHC, PostalCodeCHC),
  KEY PostalCode_idx (PostalCodeCHC)
  /*!80000 INVISIBLE */
,
  CONSTRAINT CityNameCHC FOREIGN KEY (CityNameCHC) REFERENCES city (CityName) ON 
  UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT CountryNameCHC FOREIGN KEY (CountryNameCHC) REFERENCES country (CountryName) ON 
  UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT PostalCodeCHC FOREIGN KEY (PostalCodeCHC) REFERENCES city (PostalCode) ON 
  UPDATE CASCADE ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table country_has_city
--
LOCK TABLES country_has_city WRITE;

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

UNLOCK TABLES;

--
-- Table structure for table experience
--
DROP TABLE IF EXISTS experience;

CREATE TABLE experience (
  ExperienceId int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  ExperienceName char(30) NOT NULL,
  ExperienceRating varchar(45) NOT NULL,
  ExperienceAccessibility varchar(45) NOT NULL,
  ExperienceCost varchar(45) NOT NULL
);

--
-- Dumping data for table experience
--
LOCK TABLES experience WRITE;

INSERT INTO
  experience
VALUES
  (1, 'Eiffel Tower', '5', '3', '2'),
  (10, 'Cebo', '4', '4', '4'),
  (11, 'Metropolitan Museum of Art', '5', '4', '2'),
  (12, 'Shake Shack', '3', '3', '1'),
  (2, 'Guy Savoy', '4', '5', '5'),
  (3, 'Colosseum', '5', '4', '2'),
  (4, 'Zoo of Pistoia', '4', '4', '3'),
  (5, 'Tokyo Tower', '3', '4', '3'),
  (6, 'Shin Udon', '5', '2', '1'),
  (7, 'White Water Rafting', '4', '1', '4'),
  (8, 'The Keefer Bar', '4', '4', '3'),
  (9, 'Temple of Debod', '4', '2', '1');

UNLOCK TABLES;

--
-- Table structure for table restaurant
--
DROP TABLE IF EXISTS restaurant;

CREATE TABLE restaurant (
  RestaurantExperienceId int NOT NULL,
  Capacity int DEFAULT NULL,
  TYPE char (20) DEFAULT NULL,
  PRIMARY KEY (RestaurantExperienceId),
  CONSTRAINT RestaurantExperienceId FOREIGN KEY (RestaurantExperienceId) REFERENCES experience (ExperienceId)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table restaurant
--
LOCK TABLES restaurant WRITE;

INSERT INTO
  restaurant
VALUES
  (10, 30, 'Spanish'),
  (12, 25, 'Fast Food'),
  (2, 50, 'French');

UNLOCK TABLES;

--
-- Table structure for table entertainment
--
DROP TABLE IF EXISTS entertainment;

CREATE TABLE entertainment (
  EntertainExperienceId int NOT NULL,
  AgeRating int DEFAULT NULL,
  PRIMARY KEY (EntertainExperienceId),
  CONSTRAINT EntertainExperienceId FOREIGN KEY (EntertainExperienceId) REFERENCES experience (ExperienceId)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table entertainment
--
LOCK TABLES entertainment WRITE;

INSERT INTO
  entertainment
VALUES
  (4, 0),
  (7, 5),
  (8, 18);

UNLOCK TABLES;

--
-- Table structure for table sightseeing
--
DROP TABLE IF EXISTS sightseeing;

CREATE TABLE sightseeing (
  SightSeeExperienceId int NOT NULL,
  Heritage char (5) DEFAULT NULL,
  PRIMARY KEY (SightSeeExperienceId),
  CONSTRAINT SightseeExperienceId FOREIGN KEY (SightSeeExperienceId) REFERENCES experience (ExperienceId)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table sightseeing
--
LOCK TABLES sightseeing WRITE;

INSERT INTO
  sightseeing
VALUES
  (1, 'yes'),
  (11, 'no'),
  (3, 'yes'),
  (5, 'no'),
  (9, 'yes');

UNLOCK TABLES;

--
-- Table structure for table address
--
DROP TABLE IF EXISTS address;

CREATE TABLE address (
  Street char (25) NOT NULL,
  StreetNo int NOT NULL,
  PostalCode char (20) DEFAULT NULL,
  PRIMARY KEY (Street, StreetNo),
  KEY StreetNo (StreetNo)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table address
--
LOCK TABLES address WRITE;

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

UNLOCK TABLES;

--
-- Table structure for table has_address
--
DROP TABLE IF EXISTS has_address;

CREATE TABLE has_address (
  ExperienceIdHA int NOT NULL,
  StreetHA char (25) NOT NULL,
  StreetNoHA int NOT NULL,
  PRIMARY KEY (ExperienceIdHA, StreetHA, StreetNoHA),
  KEY StreetNoHA_idx (StreetNoHA),
  KEY StreetHA_idx (StreetHA),
  CONSTRAINT ExperienceIdHA FOREIGN KEY (ExperienceIdHA) REFERENCES experience (ExperienceId),
  CONSTRAINT StreetHA FOREIGN KEY (StreetHA) REFERENCES address (Street),
  CONSTRAINT StreetNoHA FOREIGN KEY (StreetNoHA) REFERENCES address (StreetNo)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table has_address
--
LOCK TABLES has_address WRITE;

INSERT INTO
  has_address
VALUES
  (3, 'Piazza del Colosseo', 1),
  (9, 'Calle de Ferraz', 1),
  (5, 'Shibakoen', 4),
  (1, 'Avenue Anatole', 5),
  (2, 'Quai de Conti', 11),
  (10, 'Carrera de S. Jeronimo', 34),
  (6, 'Shibuya City', 51),
  (8, 'Keefer St.', 135),
  (4, 'Via Pieve a Celle', 160),
  (12, '8th Avenue', 691),
  (11, '5th Avenue', 1000),
  (7, 'Mountain Square', 4293);

UNLOCK TABLES;

--
-- Table structure for table city_has_experience
--
DROP TABLE IF EXISTS city_has_experience;

CREATE TABLE city_has_experience (
  CityNameCHE char (30) NOT NULL,
  PostalCodeCHE char (20) NOT NULL,
  ExperienceIdCHE char (15) NOT NULL,
  PRIMARY KEY (
    CityNameCHE,
    PostalCodeCHE,
    ExperienceIdCHE
  ),
  KEY PostalCodeCHE_idx (PostalCodeCHE),
  CONSTRAINT CityNameCHE FOREIGN KEY (CityNameCHE) REFERENCES city (CityName),
  CONSTRAINT PostalCodeCHE FOREIGN KEY (PostalCodeCHE) REFERENCES city (PostalCode)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table city_has_experience
--
LOCK TABLES city_has_experience WRITE;

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
  
UNLOCK TABLES;

--
-- Table structure for table event
--
DROP TABLE IF EXISTS event;

CREATE TABLE event (
  EventId char (15) NOT NULL,
  Name char (30) DEFAULT NULL,
  TYPE char (20) DEFAULT NULL,
  Date char (8) DEFAULT NULL,
  PRIMARY KEY (EventId)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table event
--
LOCK TABLES event WRITE;

INSERT INTO
  event
VALUES
  (
    '1',
    'Honda Celebration of Lights',
    'Fireworks Festival',
    '20200725'
  ),
  (
    '2',
    'Sakura Festival',
    'Nature',
    '20200315'
  ),
  (
    '3',
    'Coachella',
    'Music Festival',
    '20201009'
  ),
  (
    '4',
    'Cannes Film Festival',
    'Film Festival',
    '20200715'
  );

UNLOCK TABLES;

--
-- Table structure for table organizer
--
DROP TABLE IF EXISTS organizer;

CREATE TABLE organizer (
  OrganizerEventId char (30) NOT NULL,
  Name char (30) NOT NULL,
  PRIMARY KEY (OrganizerEventId, Name),
  CONSTRAINT OrganizerEventId FOREIGN KEY (OrganizerEventId) REFERENCES event (EventId) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table organizer
--
LOCK TABLES organizer WRITE;

INSERT INTO
  organizer
VALUES
  ('1', 'Fireworks Festival Society'),
  ('2', 'City of Nihonbashi'),
  ('3', 'Anschutz Entertainment Group'),
  ('4', 'French Association of Film');

UNLOCK TABLES;

--
-- Table structure for table search2
--
DROP TABLE IF EXISTS search2;

CREATE TABLE search2 (
  ExperienceId char (15) NOT NULL,
  CountryId char (15) DEFAULT NULL,
  CityId char (15) DEFAULT NULL,
  PRIMARY KEY (ExperienceId)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table search2
--
LOCK TABLES search2 WRITE;

UNLOCK TABLES;

--
-- Table structure for table search1
--
DROP TABLE IF EXISTS search1;

CREATE TABLE search1 (
  SearchUserId char (15) NOT NULL,
  SearchNumber int NOT NULL,
  ExperienceId char (15) DEFAULT NULL,
  PRIMARY KEY (SearchUserId, SearchNumber),
  KEY ExperienceId_idx (ExperienceId),
  CONSTRAINT ExperienceId FOREIGN KEY (ExperienceId) REFERENCES search2 (ExperienceId) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

--
-- Dumping data for table search1
--
LOCK TABLES search1 WRITE;

UNLOCK TABLES;