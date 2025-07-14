const ContactForm = () => {
  return (
    <div className='max-w-[90%] relative inset-0 z-50 mx-auto p-6 bg-white rounded-xl shadow-2xl mt-10'>
      <h2 className='text-2xl font-semibold text-start mb-6'>Talk to us</h2>

      <form className='space-y-5'>
        {/* Full Name */}
        <div>
          <label
            className='block text-sm font-medium mb-1 text-start'
            htmlFor='fullName'
          >
            Full name<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='fullName'
            className='w-full border-b border-gray-300 focus:outline-none focus:border-black py-2'
            placeholder='Enter your full name'
          />
        </div>

        {/* Phone Number & Location */}
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <div className='flex-1'>
            <label
              className='block text-sm font-medium mb-1  text-start'
              htmlFor='phone'
            >
              Phone number<span className='text-red-500'>*</span>
            </label>
            <input
              type='tel'
              id='phone'
              className='w-full border-b border-gray-300 focus:outline-none focus:border-black py-2'
              placeholder='Enter your phone number'
            />
          </div>

          <div className='flex-1 mt-5 md:mt-0'>
            <label
              className='block text-sm font-medium mb-1 text-start'
              htmlFor='location'
            >
              Your location<span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              id='location'
              className='w-full border-b border-gray-300 focus:outline-none focus:border-black py-2'
              placeholder='Enter your location'
            />
          </div>
        </div>

        {/* How did you hear about... */}
        <div>
          <label
            className='block text-sm font-medium mb-1 text-start'
            htmlFor='referral'
          >
            How did you hear about Joshua King?
            <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='referral'
            className='w-full border-b border-gray-300 focus:outline-none focus:border-black py-2'
            placeholder='e.g. Instagram, friend, etc.'
          />
        </div>

        {/* Message */}
        <div>
          <label
            className='block text-sm font-medium mb-1 text-start'
            htmlFor='message'
          >
            What can we help you with?
          </label>
          <textarea
            id='message'
            rows={3}
            className='w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 resize-none'
            placeholder='Type your message...'
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className='text-start mx-auto flex justify-center'>
          <button
            type='submit'
            className='bg-yellow-200  my-10 text-black font-medium px-8 py-3 rounded-md hover:bg-yellow-300 transition-all duration-200'
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
