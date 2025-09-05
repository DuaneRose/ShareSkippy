-- Add reviewer_role column to reviews table
-- This column tracks whether the reviewer was the requester or recipient in the meeting

-- Add the reviewer_role column
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS reviewer_role TEXT;

-- Make it NOT NULL with a default value for existing records
UPDATE reviews SET reviewer_role = 'unknown' WHERE reviewer_role IS NULL;
ALTER TABLE reviews ALTER COLUMN reviewer_role SET NOT NULL;

-- Add constraint to ensure valid values
ALTER TABLE reviews ADD CONSTRAINT reviews_reviewer_role_check 
CHECK (reviewer_role IN ('requester', 'recipient'));

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_reviews_reviewer_role ON reviews(reviewer_role);
