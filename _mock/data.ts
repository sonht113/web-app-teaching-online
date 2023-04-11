import { BlogViewHome } from 'types/blog.type';
import { TeacherViewHome } from 'types/teacher.type';
import { v4 as uuidv4 } from 'uuid';
import { CourseType } from 'types/course.type';

export const courses: CourseType[] = [
  {
    _id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    isFree: true,
    desc: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    totalViews: 300,
    price: 2000,
  },
  {
    _id: uuidv4(),
    title: 'Learn speaking EL',
    thumbnail:
      'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
    isFree: true,
    desc: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    totalViews: 300,
    price: 2000,
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
