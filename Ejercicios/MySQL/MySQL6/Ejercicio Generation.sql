USE generation;
SELECT * FROM Countries;
SELECT * FROM Students;
SELECT * FROM Modules;
SELECT * FROM Courses;
SELECT * FROM Courses_has_Students;
SELECT * FROM IdTypes; -- tipo de ID
-- Run the following SQL Query to complete your first JOIN to see more information about the Students:
SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;

-- Modify the previous SQL statment so it joins the Students table with the IdTypes table to know each Students' type of ID.
SELECT Students.*, IdTypes.name Types_name 
	FROM Students 
    INNER JOIN IdTypes
    ON Students.IdType_id = IdTypes.id_IdTypes;

-- Write a SQL query to join the CourseHasStudent table with the Courses table to get the name of the course 
-- information with the student ID of Students enrolled in the course.
SELECT * FROM Students;
SELECT * FROM Courses_has_Students;
SELECT Students.*,  Courses_has_Students.course_code
	FROM Students 
    INNER JOIN Courses_has_Students
    ON Students.idstudent = Courses_has_Students.Students_id_student;

-- Write a SQL query to join the CourseHasStudent table with the Courses table 
-- to get the name of the course information with the student ID of Students enrolled in the course.
SELECT Courses_has_Students.*, Courses.* 
	FROM Courses_has_Students
    INNER JOIN Courses
    ON Courses_has_Students.course_code = Courses.`code`;

-- Now that you have the two queries, use an INNER JOIN to combine the results of the queries
--  (this is called nested queries, and will allow you to combine SQL queries to order the data the way you like).
SELECT Students.idStudent, Students.`name`, Students.email,  Courses_has_Students.course_code, Courses.`name`
	FROM Students 
    INNER JOIN Courses_has_Students
    ON Students.idstudent = Courses_has_Students.Students_id_student
    INNER JOIN Courses
    ON Courses_has_Students.course_code = Courses.`code`
    ORDER BY Students.idstudent;

-- 
-- CALL userHasCourses;

-- Write a SQL query that allows you to find all the Students in a given country.
SELECT * FROM Countries;
SELECT * FROM Students;
SELECT Students.*, Countries.name
	FROM Students
    INNER JOIN Countries
    ON Students.nationality = Countries.idCountries;

-- Write a SQL query that allows you to find all the Countries which name starts with 'Ca'.
SELECT Students.*, Countries.name
	FROM Students
    INNER JOIN Countries
    ON Students.nationality = Countries.idCountries
    WHERE Countries.`name` LIKE "ca%";

-- Count all the Students that are enrolled in the course 'JAVA-1'.
SELECT * FROM Countries;
SELECT * FROM Courses_has_Students WHERE course_code="JAVA-1";
SELECT COUNT(Students_id_student) FROM Courses_has_Students WHERE course_code="JAVA-1";

-- Calculate the SUM of the credits of all the Courses that have the word 'JAVA' in the name.
SELECT * FROM Courses;
SELECT * FROM Courses WHERE `name` LIKE "%java%";
SELECT "Contiene JAVA" AS course, sum(credits) FROM Courses WHERE `name` LIKE "%java%";

SELECT * FROM Courses;
SELECT * FROM Courses_has_Students;

SELECT course_code, COUNT(course_code) FROM Courses_has_Students GROUP BY course_code;

-- Write a Query that allows you to count all the Students that are enrolled in a given module. 
-- Hint: You need to count all the Students enrolled in all the Courses of the module.
-- 21 MYSQL, 25 Java, 8 JS
SELECT COUNT(Courses_has_Students.course_code) AS Students , Courses.module_code
	FROM Courses_has_Students
    INNER JOIN Courses
    ON Courses_has_Students.course_code = Courses.`code`
    GROUP BY Courses.module_code;
