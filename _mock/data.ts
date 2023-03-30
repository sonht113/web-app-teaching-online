import { CourseViewHome } from 'types/course.type';
import { BlogViewHome } from 'types/blog.type';
import { TeacherViewHome } from 'types/teacher.type';
import { BannerType } from 'types/banner.type';
import { v4 as uuidv4 } from 'uuid';

export const coursesPro: CourseViewHome[] = [
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    price: '1.223.534',
    isFree: true,
  },
];

export const coursesFree: CourseViewHome[] = [
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
  {
    id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    totalViews: '1.223.534',
    isFree: false,
  },
];

export const blogs: BlogViewHome[] = [
  {
    id: uuidv4(),
    title: 'Tổng hợp các skill Toeic',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
    author: {
      avatar: 'https://bit.ly/dan-abramov',
      name: 'Trọng Sơn',
    },
  },
  {
    id: uuidv4(),
    title: 'Tổng hợp các skill Toeic',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
    author: {
      avatar: 'https://bit.ly/dan-abramov',
      name: 'Trọng Sơn',
    },
  },
  {
    id: uuidv4(),
    title: 'Tổng hợp các skill Toeic',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
    author: {
      avatar: 'https://bit.ly/dan-abramov',
      name: 'Trọng Sơn',
    },
  },
];

export const teachers: TeacherViewHome[] = [
  {
    idUserDetail: uuidv4(),
    fullName: 'Jason coder',
    email: 'hotrongsonit@gmail.com',
    phone: '0399187817',
    profilePicture: 'https://bit.ly/dan-abramov',
  },
  {
    idUserDetail: uuidv4(),
    fullName: 'Jason coder',
    email: 'hotrongsonit@gmail.com',
    phone: '0399187817',
    profilePicture: 'https://bit.ly/dan-abramov',
  },
  {
    idUserDetail: uuidv4(),
    fullName: 'Jason coder',
    email: 'hotrongsonit@gmail.com',
    phone: '0399187817',
    profilePicture: 'https://bit.ly/dan-abramov',
  },
  {
    idUserDetail: uuidv4(),
    fullName: 'Jason coder',
    email: 'hotrongsonit@gmail.com',
    phone: '0399187817',
    profilePicture: 'https://bit.ly/dan-abramov',
  },
];

export const bannerItems: BannerType[] = [
  {
    id: 1,
    image:
      'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png',
    title: 'KHOÁ HỌC HTML CSS PRO',
    description:
      'Đây là khoá học đầy đủ và chi tiết nhất mà bạn có thể tìm trên internet!',
    button: 'Tìm hiểu thêm',
    colorFrom: 'rgb(104, 40, 250)',
    colorTo: 'rgb(255, 186, 164)',
  },
  {
    id: 2,
    image:
      'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png',
    title: 'KHOÁ HỌC HTML CSS PRO',
    description:
      'Đây là khoá học đầy đủ và chi tiết nhất mà bạn có thể tìm trên internet!',
    button: 'Tìm hiểu thêm',
    colorFrom: 'rgb(104, 40, 250)',
    colorTo: 'rgb(255, 186, 164)',
  },
  {
    id: 3,
    image:
      'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png',
    title: 'KHOÁ HỌC HTML CSS PRO',
    description:
      'Đây là khoá học đầy đủ và chi tiết nhất mà bạn có thể tìm trên internet!',
    button: 'Tìm hiểu thêm',
    colorFrom: 'rgb(104, 40, 250)',
    colorTo: 'rgb(255, 186, 164)',
  },
];
