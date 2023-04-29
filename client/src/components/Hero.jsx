const Hero = () => {
  return (
    <section className='bg-hero-cover bg-cover bg-center w-full h-screen'>
      <div className='w-full h-full  bg-gradient-to-t from-[#009982] to-transparent'>
        <div className='flex justify-center items-center text-center flex-col w-full h-1/2 translate-y-full '>
          <h1 className='uppercase text-white text-3xl md:text-5xl font-bold font-display tracking-wider'>
            Minél előbb megvan a szivárgás
          </h1>
          <h2 className='mt-3 md:mt-6 text-xl md:text-3xl text-white md:font-light '>
            annál több pénzt takríthat meg
          </h2>
          <div className='mt-8 flex gap-4 flex-col md:flex-row'>
            <button className='text-[#009982] text-lg font-semibold border border-white bg-white px-4 py-2 rounded-md'>
              Időpontot foglalok
            </button>
            <button className='text-white border text-lg font-semibold border-white px-4 py-2 rounded-md'>
              Hogyan működik?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
