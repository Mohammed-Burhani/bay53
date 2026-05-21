-- =====================================================
-- COMBINED SETUP SCRIPT FOR CONTACT FORMS
-- =====================================================
-- This file combines all migrations for easy setup
-- Run this entire file in Supabase SQL Editor
-- =====================================================

-- =====================================================
-- STEP 1: Create helper function for updated_at trigger
-- =====================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- STEP 2: Create contact_enquiries table
-- =====================================================

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  recaptcha_score DECIMAL(3, 2),
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for contact_enquiries
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_email ON contact_enquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_created_at ON contact_enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_status ON contact_enquiries(status);

-- Add updated_at trigger for contact_enquiries
CREATE TRIGGER update_contact_enquiries_updated_at
  BEFORE UPDATE ON contact_enquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comments for contact_enquiries
COMMENT ON TABLE contact_enquiries IS 'Stores contact form submissions from the website';
COMMENT ON COLUMN contact_enquiries.id IS 'Unique identifier for the enquiry';
COMMENT ON COLUMN contact_enquiries.name IS 'Name of the person submitting the enquiry';
COMMENT ON COLUMN contact_enquiries.email IS 'Email address of the person';
COMMENT ON COLUMN contact_enquiries.phone IS 'Optional phone number';
COMMENT ON COLUMN contact_enquiries.subject IS 'Subject of the enquiry';
COMMENT ON COLUMN contact_enquiries.message IS 'Message content';
COMMENT ON COLUMN contact_enquiries.recaptcha_score IS 'reCAPTCHA score for spam detection';
COMMENT ON COLUMN contact_enquiries.status IS 'Status of the enquiry (new, in_progress, resolved, spam)';
COMMENT ON COLUMN contact_enquiries.created_at IS 'Timestamp when the enquiry was created';
COMMENT ON COLUMN contact_enquiries.updated_at IS 'Timestamp when the enquiry was last updated';

-- =====================================================
-- STEP 3: Create demo_requests table
-- =====================================================

CREATE TABLE IF NOT EXISTS demo_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  company VARCHAR(255) NOT NULL,
  employees VARCHAR(50),
  message TEXT,
  recaptcha_score DECIMAL(3, 2),
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for demo_requests
CREATE INDEX IF NOT EXISTS idx_demo_requests_email ON demo_requests(email);
CREATE INDEX IF NOT EXISTS idx_demo_requests_company ON demo_requests(company);
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);

-- Add updated_at trigger for demo_requests
CREATE TRIGGER update_demo_requests_updated_at
  BEFORE UPDATE ON demo_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comments for demo_requests
COMMENT ON TABLE demo_requests IS 'Stores demo request submissions from the website';
COMMENT ON COLUMN demo_requests.id IS 'Unique identifier for the demo request';
COMMENT ON COLUMN demo_requests.name IS 'Name of the person requesting the demo';
COMMENT ON COLUMN demo_requests.email IS 'Email address of the person';
COMMENT ON COLUMN demo_requests.phone IS 'Phone number';
COMMENT ON COLUMN demo_requests.company IS 'Company name';
COMMENT ON COLUMN demo_requests.employees IS 'Number of employees in the company';
COMMENT ON COLUMN demo_requests.message IS 'Additional information or requirements';
COMMENT ON COLUMN demo_requests.recaptcha_score IS 'reCAPTCHA score for spam detection';
COMMENT ON COLUMN demo_requests.status IS 'Status of the demo request (new, scheduled, completed, cancelled)';
COMMENT ON COLUMN demo_requests.created_at IS 'Timestamp when the request was created';
COMMENT ON COLUMN demo_requests.updated_at IS 'Timestamp when the request was last updated';

-- =====================================================
-- STEP 4: (OPTIONAL) Enable Row Level Security
-- =====================================================
-- Uncomment the following lines to enable RLS
-- This is recommended for production environments

-- Enable RLS on contact_enquiries
-- ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for form submissions)
-- CREATE POLICY "Allow public insert" ON contact_enquiries
--   FOR INSERT
--   TO public
--   WITH CHECK (true);

-- Allow authenticated users to read (for admin dashboard)
-- CREATE POLICY "Allow authenticated read" ON contact_enquiries
--   FOR SELECT
--   TO authenticated
--   USING (true);

-- Allow authenticated users to update
-- CREATE POLICY "Allow authenticated update" ON contact_enquiries
--   FOR UPDATE
--   TO authenticated
--   USING (true);

-- Enable RLS on demo_requests
-- ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for form submissions)
-- CREATE POLICY "Allow public insert" ON demo_requests
--   FOR INSERT
--   TO public
--   WITH CHECK (true);

-- Allow authenticated users to read (for admin dashboard)
-- CREATE POLICY "Allow authenticated read" ON demo_requests
--   FOR SELECT
--   TO authenticated
--   USING (true);

-- Allow authenticated users to update
-- CREATE POLICY "Allow authenticated update" ON demo_requests
--   FOR UPDATE
--   TO authenticated
--   USING (true);

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================
-- Run these to verify the setup was successful

-- Check if tables exist
-- SELECT table_name FROM information_schema.tables 
-- WHERE table_schema = 'public' 
-- AND table_name IN ('contact_enquiries', 'demo_requests');

-- Check table structures
-- SELECT column_name, data_type, is_nullable 
-- FROM information_schema.columns 
-- WHERE table_name = 'contact_enquiries';

-- SELECT column_name, data_type, is_nullable 
-- FROM information_schema.columns 
-- WHERE table_name = 'demo_requests';

-- =====================================================
-- SETUP COMPLETE!
-- =====================================================
-- Your database is now ready to store contact enquiries
-- and demo requests from your website forms.
-- =====================================================
