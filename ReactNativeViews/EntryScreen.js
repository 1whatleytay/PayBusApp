import { Component } from 'react'
import { AsyncStorage } from 'react-native'

export default class EntryScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        // AsyncStorage.removeItem("token");
    }

    componentDidMount() {
        AsyncStorage.getItem('token', (error, result) => {
            if (error) console.error(err)

            this.props.navigation.replace(result ? "Home" : "Login")
        })
    }

    render() { return null }
}