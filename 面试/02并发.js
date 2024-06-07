class SuperTask {
  constructor(parallelCount = 2) {
    this.parallelCount = parallelCount; // 并发数
    this.runningCount = 0; // 正在运行数
    this.tasks = []; // 任务列表
  }
  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({
        task,
        resolve,
        reject,
      });
      this._run();
    });
  }
  _run() {
    while (this.runningCount < this.parallelCount && this.tasks.length) {
      const { task, resolve, reject } = this.tasks.shift();
      this.runningCount++;
      task()
        .then(resolve, reject)
        .finally(() => {
          this.runningCount--;
          this._run();
        });
    }
  }
}
// Function to simulate a task that completes after a given time
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
const superTask = new SuperTask();
// 添加任务
function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务${name}完成`);
    });
}

addTask(10000, 1);
addTask(2000, 2);
addTask(3000, 3);
addTask(7000, 4);
addTask(3000, 5);
