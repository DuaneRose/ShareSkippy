-- Test script to verify the constraint fix was applied
-- Run this in your Supabase SQL Editor

-- Check if the problematic constraint still exists
SELECT 
  conname as constraint_name,
  contype as constraint_type,
  pg_get_constraintdef(oid) as constraint_definition
FROM pg_constraint 
WHERE conrelid = 'account_deletion_requests'::regclass
  AND conname LIKE '%unique_active_deletion_request%';

-- Check if the new partial index exists
SELECT 
  indexname,
  indexdef
FROM pg_indexes 
WHERE tablename = 'account_deletion_requests'
  AND indexname = 'idx_unique_pending_deletion_request';

-- Check all constraints on the table
SELECT 
  conname as constraint_name,
  contype as constraint_type,
  pg_get_constraintdef(oid) as constraint_definition
FROM pg_constraint 
WHERE conrelid = 'account_deletion_requests'::regclass;

-- Check all indexes on the table
SELECT 
  indexname,
  indexdef
FROM pg_indexes 
WHERE tablename = 'account_deletion_requests';
