import axios from 'axios'; 
import { Constants } from '../../utils/Constants';

export async function getApi(url, header) {
  console.log('GetApi: ', `${Constants.BASE_URL}/${url}`);

  return await axios.get(`${Constants.BASE_URL}/${url}`, {
    headers: {
      Accept: header.Accept,
      'Content-Type': header.contenttype,
      // 'x-access-token': `${header.authorization}`,
      Authorization: 'Bearer' + ' ' + header.authorization,
    },
  });
}

export async function getApiWithParam(url, param, header) {
  console.log('getApiWithParam: ', `${Constants.BASE_URL}/${url}`);

  return await axios({
    method: 'GET',
    baseURL: Constants.BASE_URL,
    url: url,
    params: param,
    headers: {
      Accept: header.Accept,
      'Content-type': header.contenttype,
    },
  });
}

export async function postApi(url, payload, header) {
  console.log('PostApi: ', `${Constants.BASE_URL}/${url}`);
  // console.log('PostApi: ', `${Constants.BASE_URL}/${url}`, payload, header);
  // console.log('PostApi: ', header);


  return await axios.post(`${Constants.BASE_URL}/${url}`, payload, {
    headers: {
      Accept: header.Accept,
      'Content-Type': header.contenttype,
      // 'x-access-token': `${header.authorxization}`,
      Authorization: 'Bearer ' + header.authorization,
    },
  });
}

export async function deleteApi(url, header) {
  // console.log("DeleteApi: ", `${Constants.BASE_URL}/${url}`)

  return await axios.delete(`${Constants.BASE_URL}/${url}`, {
    headers: {
      Accept: header.Accept,
      'Content-Type': header.contenttype,
      'x-access-token': `${header.authorization}`,
      //  'Authorization': 'Bearer' + ' ' + header.accesstoken,
    },
  });
}
