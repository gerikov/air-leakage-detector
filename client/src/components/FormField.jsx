import PropTypes from 'prop-types';

const FormField = (props) => {
  const { label, name, value, handleChange, calculated } = props;
  return (
    <>
      <label className='md:basis-1/2 flex flex-col md:px-4 max-w-full my-2 '>
        {label}
        <input
          type='text'
          name={name}
          value={value}
          onChange={handleChange}
          className='mt-2 py-1 px-2'
          disabled={calculated}
        />
      </label>
    </>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  calculated: PropTypes.bool,
  handleChange: PropTypes.func,
};
export default FormField;
