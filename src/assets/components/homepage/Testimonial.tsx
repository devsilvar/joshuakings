const testimonials = [
  {
    name: 'Amaka Eze',
    review:
      'As someone moving back from the UK, I was worried about housing. Joshua Kings made it incredibly easy.',
    rating: 4,
  },
  {
    name: 'Tunde Felix',
    review:
      'I’ve used several platforms in Nigeria, but this was the first time I truly got what I paid for.',
    rating: 4,
  },
  {
    name: 'Kano Jogo',
    review:
      'It’s the honesty for me. From the viewing to move-in, everything was transparent. No last-minute surprises.',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className='bg-gray-900 py-12 px-6 md:px-20 text-white'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-2xl md:text-3xl font-semibold'>
          Hear from Our Satisfied Customers
        </h2>
        <p className='text-sm text-gray-300 mt-1'>
          Real stories from people who've stayed with us, and loved the
          experience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className='bg-white text-black p-6 rounded-xl shadow-md'
            >
              <h4 className='font-semibold text-sm mb-2'>{t.name}</h4>
              <p className='text-sm text-gray-700 mb-3'>{t.review}</p>

              <div className='flex items-center mb-4 text-yellow-500 text-sm'>
                {'★'.repeat(t.rating)}
                {'☆'.repeat(5 - t.rating)}
              </div>

              <div className='flex items-center gap-3'>
                <img
                  src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
                  alt='loft'
                  className='w-10 h-10 object-cover rounded-full'
                />
                <div>
                  <h5 className='font-medium text-sm'>Downtown Luxury Loft</h5>
                  <p className='text-xs text-gray-500'>374 Johnson Ave</p>
                </div>
              </div>

              <button className='mt-4 text-sm text-yellow-600 font-medium hover:underline flex items-center gap-1'>
                Check availability <span>↗</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
