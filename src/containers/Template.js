import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()

export class Template extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<header>
						<h1>Tic Tac Turing </h1>
						<RaisedButton 
							label = {'Test Button'}
							primary = { true }
							onTouchTap={()=>{console.log('hello, I work')}}
						/>
					</header>
					<main>
						{this.props.children}						
					</main>
				</div>
			</MuiThemeProvider>
		) 		
	}
}