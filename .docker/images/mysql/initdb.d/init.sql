CREATE DATABASE IF NOT EXISTS app;

GRANT CREATE,DROP,INSERT,DELETE,SELECT,UPDATE ON app.* TO 'app'@'%';

FLUSH PRIVILEGES;