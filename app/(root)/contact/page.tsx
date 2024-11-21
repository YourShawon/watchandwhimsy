import Input from '@/components/shared/input'
import NewsLetter from '@/components/shared/news-letter'
import { SplitBr } from '@/components/shared/splite-br'
import { Button } from '@/components/ui/button'
import { contactData } from '@/constants/contact'
import { MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <>
      <div className='bg-[#CEE8E0] lg:pb-[100px] sm:pb-16 pb-10 lg:pt-40 sm:pt-28 pt-14'>
        <div className='container mx-auto text-center'>
          <h4 className='mb-5 font-spartan text-lg font-semibold text-green-0x'>
            Get in touch
          </h4>
          <h5 className='mb-5 font-spartan lg:text-[58px] sm:text-5xl text-4xl font-black lg:leading-[63px] sm:leading-[58px] leading-[45px] text-black-solid'>
            Let&apos;s Talk About <br /> Your {' '}
            <span className='relative after:content-[""] after:absolute after:-left-[5%] after:bottom-[20%] after:w-[110%] after:h-[20%] after:bg-[#F5DCC6] opacity-[0.8] after:-z-[1] after:transition-all after:duration-500 after:hover:h-[40%]'>
              Idea
            </span>
          </h5>
          <p className='mx-auto mb-12 lg:w-1/2 w-full text-green-7x'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam
            eius placeat, a quidem mollitia at accusantium reprehenderit
            pariatur provident nam ratione incidunt magnam sequi.
          </p>
          <div className='flex items-center justify-center gap-[15px]'>
            <Button variant={'fillOutline'} size={'outline'}>
              About us
            </Button>
            <Button variant={'customOutline'} size={'outline'}>
              Support Center
            </Button>
          </div>
        </div>
      </div>
      <div className='container mx-auto py-[50px]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.5283506720202!2d90.4018716766398!3d23.780995132558342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769c6633a2f%3A0xbb3979a7e02a8c90!2sBrain%20Station%2023!5e0!3m2!1sen!2sbd!4v1731927054146!5m2!1sen!2sbd'
          width='100%'
          height='450'
          style={{ border: 0, marginBottom: '50px' }}
          loading='lazy'
        ></iframe>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
          {contactData.map(item => (
            <div key={item.id} className='col-span-1'>
              <h4 className='mb-[15px] font-spartan text-lg font-bold text-green-0x'>
                {item.title}
              </h4>
              <div className='flex flex-col gap-2'>
                <p className='text-sm text-slate-5x'>
                  <SplitBr data={item.des} />
                </p>
                <p className='text-sm text-slate-5x'>
                  <abbr title='phone'>Phone:</abbr>
                  {item.phone}
                </p>
                <p className='text-sm text-slate-5x'>
                  <abbr title='email'>email:</abbr>
                  {item.email}
                </p>
              </div>
              <Button
                variant={'customOutline'}
                size={'outlineSm'}
                className='mt-5 flex items-center gap-1 text-xs'
              >
                <MapPin className='size-4' /> View Map
              </Button>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className='container mx-auto max-w-[880px] py-[50px] text-center'>
        <h5 className='font-spartan text-2xl font-semibold'>Drop Us a Line</h5>
        <p className='mb-[30px] text-sm text-gray-3x'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <form>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-5'>
                <Input type='text' placeholder='First Name'/>
                <Input type='email' placeholder='Your Email'/>
            </div>
            <div className='flex items-center gap-5'>
                <Input type='text' placeholder='Your Phone'/>
                <Input type='text' placeholder='Subject'/>
            </div>
            <textarea name="message" className='w-full rounded border border-green-1x py-[1px] pl-5 pr-[2px] text-[13px] text-black-1x outline-none focus:border-green-0x' placeholder='Message' rows={10}></textarea>
          </div>
            <Button variant={"bgGreen"} size={"lg"} className='mt-10'>Send Message</Button>
        </form>
      </div>
      <NewsLetter />
    </>
  )
}

export default Contact
