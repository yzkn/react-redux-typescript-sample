import { userInfomationReducer, UserInfoState } from '../../reducers/userInformationReducer';

describe('Reducerのテスト', () => {
  it('', () => {
    const initialState: UserInfoState = {
      name: 'hogehoge',
    };
    expect(
      userInfomationReducer(initialState, {
        type: 'CHANGE_USER_NAME',
      })
    ).toEqual({
      name: 'changed',
    });
  });
});
