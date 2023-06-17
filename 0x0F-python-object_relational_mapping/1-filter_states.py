#!/usr/bin/python3

import sys
import MySQLdb
import argv

if __name__ == "__main__":
    
    db = MySQLdb.connect(host="localhost", user=argv[1], passwd=argv[2], db=argv[3])

    cursor = db.cursor()

    query = "SELECT * FROM states WHERE name LIKE 'N%' ORDER BY id ASC"
    cursor.execute(query)

    rows = cursor.fetchall()

    for row in rows:
        print(row)

cursor.close()
db.close()
