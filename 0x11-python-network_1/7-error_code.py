#!/usr/bin/python3
"""
Python script that takes in a URL, sends a request to the URL
and displays the body of the response.
"""
import requests
import sys


def get_url_response(url):
    response = requests.get(url)
    if response.status_code >= 400:
        print(f"Error code: {response.status_code}")
    else:
        print(response.text)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python script.py <URL>")
        sys.exit(1)

    url = sys.argv[1]
    get_url_response(url)
