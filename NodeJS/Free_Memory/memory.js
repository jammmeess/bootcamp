const os = require("os");

function getTotalMemory() {
  const totalMemory = os.totalmem();
  const totalMemoryInGB = totalMemory / 1024 / 1024 / 1024;
  return totalMemoryInGB.toFixed(2);
}

function getFreeMemory() {
  const freeMemory = os.freemem();
  const freeMemoryInGb = freeMemory / 1024 / 1024 / 1024;
  return freeMemoryInGb.toFixed(2);
}

setInterval(() => {
  console.log(getFreeMemory() + " GBs/" + getTotalMemory() + " GBs");
}, 1000);
