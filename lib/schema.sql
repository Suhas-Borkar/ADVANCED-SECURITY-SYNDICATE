CREATE TABLE IF NOT EXISTS inquiries (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  ticket_id       VARCHAR(30) NOT NULL UNIQUE,
  name            VARCHAR(100) NOT NULL,
  contact_no      VARCHAR(20) NOT NULL,
  email           VARCHAR(150) NOT NULL,
  city            VARCHAR(100) NOT NULL,
  user_type       VARCHAR(50) NOT NULL,
  subject         VARCHAR(255),
  message         TEXT,
  brands_of_interest TEXT,
  submitted_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);
