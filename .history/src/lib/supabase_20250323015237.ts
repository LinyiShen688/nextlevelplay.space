import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qgteqonyzheydvhupdet.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndGVxb255emhleWR2aHVwZGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NjE2NzMsImV4cCI6MjA1ODIzNzY3M30.4blyu56CYjET0vWxiB9xeHA0g7arPtoR3YuvOJjuP6M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
