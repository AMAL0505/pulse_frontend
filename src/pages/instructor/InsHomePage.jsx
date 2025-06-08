import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import CourseCard from '../../components/CourseCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import DetailsCard from '../../components/DetailsCard';
import ProfileCard from '../../components/ProfileCard';

export default function InsHomePage() {
    const [userData, setUserData] = useState({});
    const [courses, setCourses] = useState([]);
    const first_name = localStorage.getItem('first_name');
    const access = localStorage.getItem('accessToken'); 

    const getUserCourses = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/courses/courses/usercourses/', {
                headers: {
                    Authorization: `Bearer ${access}`
                }
            });
            console.log('Courses = ', res.data);
            setCourses(res.data); // Save to state for rendering
        } catch (error) {
            console.error("Error fetching courses: ", error);
        }
    };

    useEffect(() => {
        getUserCourses();
    }, []);

    return (
        <>
            <Navbar />
            <div className='flex flex-col pl-10 items-left'>
                <h1 className='text-[3rem] font-bold'>Dashboard</h1>
                <p className='text-1xl text-zinc-500'>Welcome back, {first_name} </p>

                <div className='flex-col'>
                    <p className='text-[1.5rem] font-semibold py-5'>My Courses</p>

                    {courses.length > 0 ? (
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={4}
                            slidesPerView={1}
                            navigation
                            breakpoints={{
                                716: {
                                    slidesPerView: 2,
                                    spaceBetween: 4, 
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 4, 
                                },
                            }}
                        >
                            {courses.map((course) => (
                                <SwiperSlide key={course.id}>
                                    <CourseCard
                                        heading={course.title}
                                        description={course.description}
                                        image={course.image_url}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    ) : (
                        <p className='text-center'>No courses found.</p>
                    )}
                </div>
                <div className='flex-col '>
                    <p className='text-[1.5rem] font-semibold pt-5'>Statistics</p>
                    <DetailsCard />
                </div>

            </div>
        </>
    );
}
