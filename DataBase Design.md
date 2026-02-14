# DataBase Design

## Tables name

- Users
- User_Skills
- Skills
- Sessions
- Session_Booking
- Points_Transactions
- Ratings
- AI_Score

### User table

- ID -> primary_key, auto_update
- Username -> unique_key, not_null
- First_name -> not_null
- Last_name -> not_null
- password -> not_null
- mail -> not_null
- phone_number -> not_null
- is_valid -> defaul= false
- skill -> FK(user_skills)
- last_update_date
- created_date

### User_Skills table

- id -> Primary_key, auto_update
- user_id -> FK(Users)
- skill_id -> FK(Skills)
- skill_type -> ENUM(teach/learn)
- proficiency_level -> ENUM('beginner','intermediate','advanced')
- created_at

### Skill table

- ID -> Primary_key, auto_update
- skill -> not_null
- created_date

### Session table

- ID -> Primary_key, auto_update
- session_name -> not_null
- user_id -> FK(user), not_null
- session_time -> date_time, not_null
- description -> text
- last_update_date
- created_date

### Session_Booking table

- ID -> Primary_key, auto_update
- user_id -> FK(user), not_null
- session_id -> FK(session), not_null
- last_update_date
- created_date

### Points_Transaction table

- ID -> Primary_key, auto_update
- user_id -> FK(user), not_null
- session_id -> FK(session), not_null
- duration -> time, not_null
- transaction_type -> ENUM(credit/debit)
- point -> number
- last_update_date
- created_date

### Rating table

- ID -> Primary_key, auto_update
- user_id -> FK(user), not_null
- session_id -> FK(session), not_null
- score -> number(1-5)
- feedback -> text
- last_update_date
- created_date

### AI_Score table

- ID -> Primary_key, auto_update
- user_id -> FK(user), not_null
- skill_id -> FK(skill), not_null
- quiz_score -> number
- session_quality_score1 -> number
- feedback_weight -> number
- final_ai_score -> number
- last_update_date
- created_date
