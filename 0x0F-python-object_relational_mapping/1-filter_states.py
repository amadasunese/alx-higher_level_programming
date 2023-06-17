#!/usr/bin/python3

import sys
import MySQLdb

if __name__ == "__main__":

mysql_username = sys.argv[1]
mysql_password = sys.argv[2]
database_name = sys.argv[3]

# Connect to the MySQL server
db = MySQLdb.connect(host="localhost", port=3306, user=mysql_username, passwd=mysql_password, db=database_name)

# Create a cursor object to interact with the database
cursor = db.cursor()

# Execute the SQL query to retrieve the states starting with 'N'
query = "SELECT * FROM states WHERE name LIKE 'N%' ORDER BY id ASC"
cursor.execute(query)

# Fetch all the rows returned by the query
rows = cursor.fetchall()

# Display the results
for row in rows:
    print(row)

# Close the cursor and database connection
cursor.close()
db.close()
