import LD500 from '../assets/LD500_Ultrasound_camera.png';

const Device = () => {
  return (
    <section>
      <div className='container mx-auto flex flex-col p-4'>
        <div className='text-3xl md:text-4xl font-display text-primary font-bold uppercase tracking-wide  leading-normal my-8 flex items-center w-3/4'>
          a legmodernebb ultramagas frekvenciás mérőműszert használjuk a
          szivárgások felderítéshez
        </div>
        <div className='md:flex md:gap-10'>
          <div className='basis-1/2'>
            <img src={LD500} alt='' />
          </div>
          <div className='basis-1/2'>
            <h3 className='text-primaryLight uppercase font-semibold text-xl mt-8 mb-4'>
              Ultrasound Camera UltraCam LD 500/510
            </h3>
            <ul className='text-gray-600 pl-4'>
              <li>Vizuális megjelenítés</li>
              <li>Nem szükséges gyártás megszakítás</li>
              <li>LED-es megvilágítás a jobb képek érdekében</li>
              <li>A szivárgás éves költségének megbecslése</li>
              <li>5 méteres mérési távolság</li>
              <li>Adatpter segítségével akár 15 méteres távolságban is</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Device;
