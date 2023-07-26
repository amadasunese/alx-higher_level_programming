#!/usr/bin/node
// script that gets the contents of a webpage and stores it in a file.

const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Function to compute the number of completed tasks by user id
function computeCompletedTasksByUserId(data) {
    const completedTasksByUserId = {};

    data.forEach((task) => {
        if (task.completed) {
            if (completedTasksByUserId[task.userId]) {
                completedTasksByUserId[task.userId]++;
            } else {
                completedTasksByUserId[task.userId] = 1;
            }
        }
    });

    return completedTasksByUserId;
}

// Make the API request
request(apiUrl, { json: true }, (err, res, body) => {
    if (err) {
        console.error('An error occurred while making the API request:');
        console.error(err);
    } else if (res.statusCode !== 200) {
        console.error(`Error: Received status code ${res.statusCode}`);
    } else {
        // Filter completed tasks and compute the count for each user id
        const completedTasks = body.filter((task) => task.completed);
        const completedTasksByUserId = computeCompletedTasksByUserId(completedTasks);

        // Print the results
        for (const userId in completedTasksByUserId) {
            console.log(`User ID ${userId}: ${completedTasksByUserId[userId]} completed tasks`);
        }
    }
});
