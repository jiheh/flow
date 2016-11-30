import React from 'react';
import {Grid, Row, Col, DropdownButton, MenuItem, FormGroup, FormControl,} from 'react-bootstrap';
import './Members.scss'


export default ({ toggleForm, currentChannel }) => (
	<div id="members" className="container-fluid">
		<h3>Members</h3>
    <button onClick={toggleForm} className='pt-button'>Add New Member</button>
		<hr />
		<div>
			<Grid>
				<Row className="show-grid">
					{
						(
							currentChannel.users && currentChannel.users[0].UserInfo && currentChannel.users.map((user,idx) =>(
								<div key={idx} className="divClass">
									<Col xs={6} md={4}>
										<img src={'https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/user-man-circle-invert-512.png'} className="imgClass"></img>
										<p>{user.UserInfo.name}</p>
										<p>{user.UserInfo.email}</p>
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
