import { createClient } from '@supabase/supabase-js';
const supabaseAdmin = createClient(
    'https://pylinjznqahowejkatde.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5bGluanpucWFob3dlamthdGRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk1MjczMzIsImV4cCI6MTk4NTEwMzMzMn0.Gm9CI9pxEZGS1AaOkYtptoKv2Ar55wXV2zQm4MzwxBI'
);

export const addDataToDB = async(data:any)=>{
    const { error } = await supabaseAdmin
    .from('Develop')
    .insert(data)
    if(error){
        return "error"
    }else{
        return "succss"
    }
}