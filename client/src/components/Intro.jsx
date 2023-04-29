import { AiOutlineExclamationCircle } from 'react-icons/ai';

const Intro = () => {
  return (
    <section className='bg-primary w-full '>
      <div className='container mx-auto'>
        <div className='flex w-full justify-between flex-wrap'>
          <div className='text-4xl font-display md:basis-1/2 text-white font-bold uppercase tracking-wide md:p-10 p-4 leading-normal my-8 flex items-center'>
            Folyamatosan növekvő energiaárak mellett egyre nagyobb szerepe van a
            hatékonyságnak
            <div>
              <AiOutlineExclamationCircle size={56} />
            </div>
          </div>
          <div className='flex md:basis-1/2 p-4 md:p-10 flex-col gap-3 my-8'>
            <div className='flex  gap-4'>
              <h2 className='text-green-200 font-extrabold text-4xl font-display'>
                30%
              </h2>
              <h3 className='font-display text-2xl text-white uppercase flex items-center'>
                ennyi az átlagos veszteség egy rendszerben
              </h3>
            </div>
            <div className='text-white text-lg font-light'>
              A sűrített levegő rendszerek szivárgása nemcsak anyagi veszteséget
              okoz, hanem csökkenti a rendszerek üzemidejét és élettartamát,
              valamint növeli a munkavállalók biztonsági kockázatát is. Azonban
              a szivárgások felkutatása és kijavítása egy egyszerű pontszerű
              vizsgálat segítségével csökkentheti az energiaköltségeket,
              biztonságosabb munkakörnyezetet teremthet az alkalmazottak
              számára, és biztosíthatja, hogy a létesítmény optimális
              hatékonysággal üzemeljen.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
