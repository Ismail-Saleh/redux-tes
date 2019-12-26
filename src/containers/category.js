import {connect} from 'react-redux'
import Home from '../components/home/home'


const mapStateToProps = ()=>(
    {
        data : "abc"
    }
);


export default connect(
mapStateToProps()
)(Home)