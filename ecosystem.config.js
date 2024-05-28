module.exports = {
  apps: [
    {
      name: "gitex",
      script: "npm",
      args: "run prod",
      instances: "1",
      exec_mode: "fork",
      interpreter: "none",
      watch: true, // Enable watching
      ignore_watch: ["node_modules", "logs"], // Optional: Ignore specific directories
    },
  ],
};
