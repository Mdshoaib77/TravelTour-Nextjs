import Hero from '@/components/Hero'
import Feature from '@/components/Feature'
import About from '@/components/About'
import Packages from '@/components/Packages'
import Video from '@/components/Video'
import Testimonial from '@/components/Testimonial'

const page = () => {
  return (
    <>
      <Hero />
      <Feature />
      <About />
      <Packages />
      <Video />
      <Testimonial />
    </>
  )
}

export default page