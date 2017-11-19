// 純粋関数
// 前回のstateとactionをもらって新しいstateを返す
// 肥大化するのでreducerをkeyごとに分割していく
import { combineReducers } from 'redux';

const place = (state = '東京タワー', action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      // actionのplaceの内容をsetStateしたいがそのようにすると純粋関数じゃ無くなってしまうのでassignを利用
      return action.place;
    default:
      return state;
  }
};

const geocodeResult = (
  state = {
    address: '',
    location: { lat: 35.6585805, lng: 139.7454329 },
  },
  action,
) => {
  switch (action.type) {
    case 'GEOCODE_FETCHED':
      // actionのplaceの内容をsetStateしたいがそのようにすると純粋関数じゃ無くなってしまうのでassignを利用
      return {
        address: action.address,
        location: action.location,
      };
    default:
      return state;
  }
};

export default combineReducers({ place, geocodeResult });
