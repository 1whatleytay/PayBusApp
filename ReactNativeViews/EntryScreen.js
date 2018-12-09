import { Component } from 'react'
import { AsyncStorage } from 'react-native'

export default class EntryScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        AsyncStorage.removeItem("token");
    }
    
    componentDidMount() {
        AsyncStorage.getItem('token', (error, result) => {
            if (error) console.error(err)

            this.setState({ loggedIn: result ? true : false })

            const { navigate } = this.props.navigation

            this.state.loggedIn ? navigate("Home") : navigate("Login")
        })
    }


    render() { return null }
}