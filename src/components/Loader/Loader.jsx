import { Circles } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div
      style={{
        justifyContent: `center`,
        display: `flex`,
        marginTop: `100px`,
      }}
    >
      <Circles
        height="80"
        width="80"
        color="blue"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
