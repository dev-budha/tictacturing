import React, {Component} from 'react'
import { Container, Name, GameListHeader, GameList, GameRecord, ColumnLabels, Column } from '../styled/Profile'
import Relay from 'react-relay/classic'

export class Profile extends Component {

	static defaultProps = {
		user: {
			email: 'USER_EMAIL',
			games: [
				{
					winner: true,
					createdAt: '12/26/2016',
					id:'0001'
				},
				{
					winner: false,
					createdAt: '12/27/2016',
					id:'0002'
				},
				{
					winner: true,
					createdAt: '12/28/2016',
					id:'0003'
				}

			]
		}
	}

	get records() {
		return this.props.user.games.map( (game, index) => {
			return (
				<GameRecord
					key={index}
					index={index}					
				>
					<Column>
						{(game.winner) ? 'Won!' : "Didn't Win" }
					</Column>
					<Column>
						"ROBOT"
					</Column>
					<Column>
						"No"
					</Column>
					<Column>
						{game.createdAt}
					</Column>
				</GameRecord>
			)
		})
	}

	render() {

		let {email} = this.props.user
		return (
			<Container>
				<Name>
					{email}
				</Name>
				<GameList>
					<GameListHeader>
						MyGames
					</GameListHeader>
					<ColumnLabels>
						<Column>
							Outcome
						</Column>
						<Column>
							Guess
						</Column>
						<Column>
							Guessed Correctly
						</Column>
						<Column>
							Date
						</Column>
					</ColumnLabels>
					{this.records}
				</GameList>

			</Container>

		) 
		
	}
}

export default Relay.createContainer(
	Profile, {
		fragments: {
			viewer: () => Relay.QL`
				fragment on Viewer {
					user {
						id
					}
				}
			`,
		}
	}
)