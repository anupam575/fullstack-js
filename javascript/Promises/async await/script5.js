// Function to simulate a task with a delay (using setTimeout)
function simulateTask(taskName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${taskName} started.`);
      resolve(`${taskName} completed after ${delay / 1000} seconds.`);
    }, delay);
  });
}

// Main async function to handle multiple tasks sequentially
async function executeTasks() {
  try {
    console.log("Task execution started.");

    // Task 1: Simulate a task with 2 seconds delay
    let task1Result = await simulateTask("Task 1", 2000);  // waits for Task 1 to finish
    console.log(task1Result);

    // Task 2: Simulate a task with 3 seconds delay
    let task2Result = await simulateTask("Task 2", 3000);  // waits for Task 2 to finish
    console.log(task2Result);

    // Task 3: Simulate a task with 1 second delay
    let task3Result = await simulateTask("Task 3", 1000);  // waits for Task 3 to finish
    console.log(task3Result);

    // Task 4: Simulate a task with 4 seconds delay
    let task4Result = await simulateTask("Task 4", 4000);  // waits for Task 4 to finish
    console.log(task4Result);

    console.log("All tasks completed.");
  } catch (error) {
    console.log("Error:", error);
  }
}

// Run the async function
executeTasks();
