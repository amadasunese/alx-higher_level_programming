#!/usr/bin/python3
"""
Python script that takes in a letter and sends a
POST request to http://0.0.0.0:5000/search_user
with the letter as a parameter.
"""
import requests
import sys


def search_user(letter):
    url = 'http://0.0.0.0:5000/search_user'
    payload = {'q': letter}
    response = requests.post(url, data=payload)

    try:
        response_json = response.json()
        if response_json:
            user = response_json[0]
            print(f"[{user['id']}] {user['name']}")
        else:
            print("No result")
    except ValueError:
        print("Not a valid JSON")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        letter = ""
    else:
        letter = sys.argv[1]

    search_user(letter)
