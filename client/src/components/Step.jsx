import PropTypes from 'prop-types';

const Step = (props) => {
  return (
    <>
      <h3 className='text-primaryLight uppercase font-semibold text-xl mt-8'>
        {props.title}
      </h3>
      <p className='text-gray-600 mt-2'>{props.text}</p>
    </>
  );
};

Step.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
export default Step;
