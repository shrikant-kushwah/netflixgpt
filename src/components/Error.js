import {useRouteError} from 'react-router-dom';

const Error =()=>{

  const err = useRouteError();
  console.log(err);

  return (
    <div className="error">
      <h1>Hey developer 👋</h1>
      <h2>Oops!!!</h2>
      <h2>Something went wrong!!</h2>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  )
}

export default Error;