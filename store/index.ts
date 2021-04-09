import {connect} from "react-redux";
import { bindActionCreators, Dispatch} from "redux";
import {RootState} from "../redux/rootReducer";
import {loadTheme} from '../redux/themes/actions';

const mapStateToProps = (state: RootState) => ({
    theme: state.theme.theme
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ loadTheme }, dispatch);
};

export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
);