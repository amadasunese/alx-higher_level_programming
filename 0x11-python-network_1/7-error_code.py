#!/usr/bin/python3
"""
Python script that takes in a URL, sends a request to the URL
and displays the body of the response.
"""
import requests
from sys import argv


if __name__ == "__main__":
    try:
        res = requests.get(argv[1])
        res.raise_for_status()
        print(res.text)
    except requests.exceptions.RequestException as e:
        print("Error: {}".format(str(e)))
