import { connect } from 'react-redux';
import { fetchAdviceAsync } from '../actions/adviceAction';
import { changeUserNameAsync } from '../actions/userInformationAction';
import { AppState } from '../store/store';
import App, { AppProperty } from '../views/App';

const mapStateToProps = (state: AppState, props: AppProperty) => {
  return {
    message: state.advice.message,
    name: state.userInfomation.name,
  };
};

const mapDispatchToProps = (dispatch: any, props: AppProperty) => {
  return {
    changeUserName: (name: string) => {
      dispatch(changeUserNameAsync(name));
    },
    fetchAdvice: () => {
      dispatch(fetchAdviceAsync());
    },
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
