import Step from './Step';
import cloudPic from '../assets/cloud.png';

const Technology = () => {
  return (
    <section>
      <div className='container mx-auto flex flex-col p-4'>
        <div className='text-3xl md:text-4xl font-display text-primary font-bold uppercase tracking-wide  leading-normal my-8 flex items-center w-3/4'>
          Hogyan zajlik egy szivárgásvizsgálat?
        </div>
        <div className='md:flex gap-6'>
          <div className='basis-1/2'>
            <Step
              title='1. átvizsgálás'
              text='A teljes csőhálózat átvizsgálása a az ultrahangos detektorral, a
        szivárgásokat a merőműszeren is lehet látni, valamint a füllhallgataóval
        hallani is lehet'
            />
            <Step
              title='2. dokumentálás'
              text='Az összes talált hibát dokumentáljuk képes formában, amin látszik, hogy nagyságrendileg mekkora a probléma'
            />
            <Step
              title='3. report készítés'
              text='A munka végeztélvel a hibákat egy ISO sabványnak megfelelő PDF dokumentumban juttatjuk vissza, hogy a javítást minél hamarabb meg lehessen tenni'
            />
          </div>
          <div className='basis-1/2'>
            <img
              src={cloudPic}
              alt='online összegzés'
              className='rounded-3xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Technology;
