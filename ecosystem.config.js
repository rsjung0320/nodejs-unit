module.exports = {
  apps: [
    {
      name: 'fnet',
      // script: 'npm run server:watch:dev',
      script: 'app.js',
      instances: 3,
      exec_mode: 'cluster',
      node_args: '--max_old_space_size=3072',
      max_memory_restart: '3072M'
    },
  ],
}


