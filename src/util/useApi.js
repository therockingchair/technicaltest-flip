import {useState} from 'react';

export default useApi = apiFunction => {
  const [api, setApi] = useState({status: '', data: {}});

  const onStart = () => {
    setApi({status: 'loading'});
    requestApi();
  };

  const requestApi = () => {
    apiFunction()
      .then(response => response.json())
      .then(data => {
        setApi({status: 'success', data: data});
      })
      .catch(err => {
        setApi({status: 'error', error: err});
      });
  };

  return {onStart, ...api};
};
