// 純粋関数
// 前回のstateとactionをもらって新しいstateを返す
export default (state = { place: 'hoge' }, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_PLACE':
      // actionのplaceの内容をsetStateしたいがそのようにすると純粋関数じゃ無くなってしまうのでassignを利用
      return Object.assign({}, state, { place: action.place });
    default:
      return state;
  }
};
