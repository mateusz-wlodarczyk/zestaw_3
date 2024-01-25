import { createClient } from '@supabase/supabase-js';

import {  SUPABASE_URL } from './constans';
import { Database } from './db.types';

// const supabaseKey = process.env.SUPABASE_KEY as string
// const supabaseKey = process.env.SUPABASE_ANON_KEY as string
// const supabaseKey = import.meta.env.SUPABASE_KEY as string
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY as string


export const supabase = createClient<Database>(SUPABASE_URL, supabaseKey);

export async function loadTools() {

  try {
    const { data: userTable } = await supabase.from('userTable').select('*');
    return userTable;
  } catch (error) {
    console.log(error);
  }
}

export async function loadIcons(searchedIcon: string) {
  try {
    const { data } = await supabase.from('stanPolaczenia').select('*').eq('name', searchedIcon);
    if (data !== null) {
      return data[0].icon as string
    } else return;
  } catch (error) {
    console.log(error);
  }
}

export async function loadSingleDevice(id: number) {
  try {
    const { data } = await supabase.from('userTable').select('*').eq('id', id);
    return data;
  } catch (error) {
    console.log(error);
  }
}
