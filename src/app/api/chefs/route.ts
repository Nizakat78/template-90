import { NextResponse } from 'next/server';
import data from '../../../data/chef.json'; // Adjust relative path to your current file location

export async function GET() {
  return NextResponse.json(data);
}
