import React, { Component } from 'react'
import { Link } from 'react-router'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

import { NavToggleButton } from '../styled/NavDrawer'
 

export class NavDrawer extends Component {

	state = {
		open : false,
		width: 250
	}

	toggle = () => {
		this.setState( 
			(prevState, props) => {
				return {
					open: !prevState.open
				}
			}
		)

	}

	render(){
		return (
			<div>
				<NavToggleButton
					open = { this.state.open }
					toggle = { this.toggle }
					width = { this. state.width }
				/>
				
				<Drawer
					open = { this.state.open }
					width = { this.state.width }
				>
					<div
						style={{
							height: '200px',
							width: '100%',
							backgroundColor : 'grey'
						}}
					>
					</div>
					<Divider />
					<Link
						to = {'/'}
					>
						<MenuItem
							onTouchTap = { this.toggle }
							primaryText = { 'Play' }
						/>
					</Link>
					<Link
						to = {'/profile'}
					>
						<MenuItem
							onTouchTap = { this.toggle }
							primaryText = { 'Profile' }
						/>
					</Link>
				</Drawer>
			</div>
		)
	}
}