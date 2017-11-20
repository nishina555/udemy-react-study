import { geocode } from '../domain/Geocoder';

// placeをもらってdispatchを返していたが、dispatchを間に入れる＝関数を返す関数
export const setPlace = place => dispatch => dispatch({ type: 'CHANGE_PLACE', place });

// dispatchとgetStateをstoreからもらって中で使うようにする
export const startSearch = () => (dispatch, getState) => {
  geocode(getState().place)
    .then(({ status, address, location }) => {
      switch (status) {
        case 'OK': {
          dispatch({ type: 'GEOCODE_FETCHED', address, location });
          // this.setState({ address, location });
          // return searchHotelByLocation(location);
          break;
        }
        case 'ZERO_RESULTS': {
          // this.setErrorMessage('結果が見つかりませんでした');
          break;
        }
        default: {
          // this.setErrorMessage('エラーが発生しました');
        }
      }
      return [];
    });
    // .then((hotels) => {
    //   this.setState({ hotels: sortedHotels(hotels, this.state.sortKey) });
    // })
    // .catch(() => {
    //   this.setErrorMessage('通信に失敗しました');
    // });
};
