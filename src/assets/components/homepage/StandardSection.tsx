import { useState } from 'react';
import IconHeartPerson from '../icons/Health';
import IconThumbsUp from '../icons/ThumbsUp';
import IconShieldCheck from '../icons/Iconshield';
import IconClipboardHeart from '../icons/IconHeart';

const standards = [
  {
    title: 'Trust & Reliability',
    description: 'You can count on us for consistent and dependable service.',
    icon: <IconShieldCheck size={30} strokeColor='black' checkColor='black' />,
    hoverState: (
      <IconShieldCheck size={50} strokeColor='#C8953A' checkColor='#C8953A' />
    ),
  },
  {
    title: 'Care & Compassion',
    description: 'We treat every guest, home, and partner with genuine care.',
    icon: <IconHeartPerson size={30} color='black' />,
    hoverState: <IconHeartPerson size={50} color='#C8953A' />,
  },
  {
    title: 'Excellence',
    description:
      'From the spaces we list to the service we deliver, we don’t settle.',
    icon: <IconThumbsUp size={30} color='black' />,
    hoverState: <IconThumbsUp size={50} color='#C8953A' />,
  },
  {
    title: 'Innovation',
    description:
      'We’re always improving, using smart tools, feedback, and fresh thinking to make your experience better.',
    icon: <IconClipboardHeart size={30} strokeColor='black' />,
    hoverState: <IconClipboardHeart size={50} strokeColor='#C8953A' />,
  },
];

const StandardsSection = () => {
  const [hovered, setHovered] = useState<number | null>(0);

  return (
    <section className='bg-white py-12 mt-10 px-6 md:px-5 lg:w-[85%]  mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-2'>
      {/* Image + Card Stack */}
      <div className='relative w-full  max-w-2xl'>
        {/* Bottom Image */}
        <img
          src='/herostats2.png'
          alt='Apartment 1'
          className='rounded-xl lg:h-[565px] w-[467px] shadow-md'
        />

        {/* Top Image + Card */}
        <div className='absolute md:block hidden left-56 -bottom-20 w-[80%] '>
          <img
            src='/herostats1.png'
            alt='Apartment 2'
            className='rounded-xl w-[334px] h-[449px]'
          />

          {/* Overlay card */}
        </div>
      </div>
      <section className='bg-white py-16 px-6 md:px-2  flex flex-col items-start justify-center '>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-[22px] md:text-[28px] font-bold text-gray-900 mb-2'>
            The Joshua Kings Standard
          </h2>
          <p className='text-gray-600 mb-8 text-[16px] leading-5 md:text-base'>
            We care about the details, because home should feel like peace, not
            pressure.
          </p>

          <div className='space-y-4'>
            {standards.map((item, index) => {
              const isHovered = hovered === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center gap-4 p-5  transition-all duration-300 rounded-[10px]  ${
                    isHovered
                      ? 'bg-white shadow-deep scale-[1.05] rounded-[10px] cursor-pointer'
                      : 'bg-white'
                  }`}
                >
                  <div className={`transition-all duration-300`}>
                    {isHovered ? item.hoverState : item.icon}
                  </div>

                  <div>
                    <h4
                      className={`font-semibold text-[16px] md:text-[18px] mb-1 transition-all duration-300 ${
                        isHovered
                          ? 'text-gray-900 scale-[1.01]'
                          : 'text-gray-800'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className='text-[14px] text-gray-600'>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default StandardsSection;
