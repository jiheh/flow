import React from 'react';
import {Grid, Row, Col, DropdownButton, MenuItem, FormGroup, FormControl,} from 'react-bootstrap';

export default ({ toggleForm, currentChannel }) => (
	<div id="members" className="container-fluid">
		<h3>Members</h3>

    <button onClick={toggleForm}>Add New Member</button>
		<div>
			<Grid>
				<Row className="show-grid">
					{
						(
							currentChannel.users && currentChannel.users[0].UserInfo && currentChannel.users.map((user,idx) =>(
								<div key={idx}>
									<Col xs={6} md={4}>
										<h1>{user.UserInfo.name}</h1>
										<h2>{user.UserInfo.email}</h2>
									</Col>
								</div>
							))
						)
					}
				</Row>
			</Grid>
		</div>

  </div>
);
