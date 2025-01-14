import { NextResponse } from 'next/server';
import { InnerBlogData, HomeSixData, HomeThreeData, BlogData, HomeFiveData, HomeFourData } from '@/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  let data;
  switch (type) {
    case 'inner-blog':
      data = InnerBlogData;
      break;
    case 'home-six':
      data = HomeSixData;
      break;
    case 'home-three':
      data = HomeThreeData;
      break;
    case 'blog':
      data = BlogData;
      break;
    case 'home-five':
      data = HomeFiveData;
      break;
    case 'home-four':
      data = HomeFourData;
      break;
    default:
      data = { error: 'Invalid content type' };
  }

  return NextResponse.json(data);
}

