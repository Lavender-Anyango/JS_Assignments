// Q1: Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.


function delay(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }
  
  async function logMessage(message, delayTime) {
    await delay(delayTime);
    console.log(message);
  }
  
  logMessage('Yaay, you did it!', 3000);


  //Q2:  You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

async function getUserData(id) {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
    return `User data for ID ${id}`;
}

async function logData(userIDs) {
    for (const userID of userIDs) {
        try {
            const userData = await getUserData(userID);
            console.log(`User ID ${userID}: ${userData}`);
        } catch (error) {
            console.error(`user ID ${userID}: not found`);
        }
    }
}


logData([1, 2, 3, 4, 5]);

// Q3: You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.


async function callperformTask() {
    try {
        await performTask();
        console.log("Task completed successfully");
    } catch (error) {
        console.log("Error occurred during test:", error.message);
    }
}

callperformTask();



// Q4: 

// Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.


function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > failureProbability) {
            resolve(`${taskName} succeeded`);
        } else {
            reject(`${taskName} failed`);
        }
    });
}

async function executeWithRetry(taskName, retries, failureProbability) {
    for (let i = 0; i < retries; i++) {
        try {
            const result = await unstableTask(taskName, failureProbability);
            console.log(result);
            break; 
        } catch (error) {
            console.log(error); 
            if (i === retries - 1) { 
                console.log(`${taskName} failed after ${retries} retries.`);
            }
        }
    }
}

executeWithRetry("SampleTask", 3, 0.5);

