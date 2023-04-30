import { useState, useEffect } from 'react';
import FormField from './FormField';

const Calculator = () => {
  const [compressedAirIndex, setCompressedAirIndex] = useState({});
  const [savedValue, setSavedValue] = useState(0);

  const handleChange = (e) => {
    setCompressedAirIndex((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    // TODO: calculate the saved value
    if (
      parseInt(compressedAirIndex.nominalPower) > 0 &&
      parseInt(compressedAirIndex.price) > 0 &&
      parseInt(compressedAirIndex.leakage) > 0 &&
      parseInt(compressedAirIndex.workingHours) > 0
    ) {
      const calculatedKw =
        parseInt(compressedAirIndex.workingHours) *
        parseInt(compressedAirIndex.nominalPower) *
        (parseInt(compressedAirIndex.leakage) / 100) *
        0.66;
      console.log(calculatedKw);
      const calculatedPrice = calculatedKw * parseInt(compressedAirIndex.price);
      setSavedValue(calculatedPrice);
    }
  }, [compressedAirIndex]);

  return (
    <section>
      <div className='container mx-auto flex flex-col p-4'>
        <div className='text-3xl md:text-4xl font-display text-primary font-bold uppercase tracking-wide  leading-normal my-8 flex items-center w-3/4'>
          Kalkulátor
        </div>
        <div className='text-gray-600 md:w-2/3 mb-8'>
          Az alábbi számítások nem pontos adatok, inkább csak abban segítenek,
          hogy nagyjából fel tudjuk mérni mekkora lehet költsége a szivárgó
          levegő újragenerálásának
        </div>
        <form className='bg-[#F6F6F6] flex flex-wrap p-4'>
          <div className='basis-full text-primaryLight uppercase text-xl mb-2 md:px-4'>
            Szivárgás kalkulátor
          </div>
          <div className='md:w-2/3 mb-4 text-gray-700 md:px-4 flex flex-col gap-2'>
            <p>Egy rendszer átlagos szivárgási mérteke ~20%</p>
            <p>
              Egy év 8 760 óra, ha a kompresszor folyamatosan működik, 5 napos
              munkahét 1 műszakkal, pedig ~2 000 óra egy évben
            </p>
          </div>
          <FormField
            label='Névleges teljesítmény (kw)'
            name='nominalPower'
            value={compressedAirIndex.name}
            handleChange={handleChange}
          />
          {/* <FormField
            label='Névleges szállítási sebesség (l/min)'
            name='nominalDelivery'
            value={compressedAirIndex.name}
            handleChange={handleChange}
          /> */}
          {/* <FormField
            label='Kihasználtság (%)'
            name='utilization'
            value={compressedAirIndex.name}
            handleChange={handleChange}
          /> */}
          <FormField
            label='Energia ár (Ft/kWh)'
            name='price'
            value={compressedAirIndex.name}
            handleChange={handleChange}
          />
          <FormField
            label='Szivárgás mértéke (%)'
            name='leakage'
            value={compressedAirIndex.name}
            handleChange={handleChange}
          />
          <FormField
            label='A kompresszor éves munkaóra'
            name='workingHours'
            value={compressedAirIndex.name}
            handleChange={handleChange}
          />
          <div className='w-full text-center mt-8 text-2xl'>
            {savedValue.toLocaleString('hu-HU', {
              style: 'decimal',
              maximumFractionDigits: 0,
            })}{' '}
            Ft az éves szivárgás összege
          </div>
        </form>
      </div>
    </section>
  );
};
export default Calculator;
