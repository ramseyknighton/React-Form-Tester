import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			menList: [],
			menName: '',
			menAge: '',
			menCrime: ''
		};
	}
	handleNameInput = (event) => {
		this.setState({ menName: event.target.value });
	};
	handleAgeInput = (event) => {
		this.setState({ menAge: event.target.value });
	};
	handleCrimeInput = (event) => {
		this.setState({ menCrime: event.target.value });
	};
	handleClick = () => {
		let menObj = { menName: this.state.menName, menAge: this.state.menAge, menCrime: this.state.menCrime };
		this.setState({ menList: [ ...this.state.menList, menObj ], menName: '', menAge: '', menCrime: 0 });
	};
	render() {
		let menSuckArr = this.state.menList.map((jerk, index) => {
			return (
				<div key={index}>
					<div>Name: {jerk.menName}</div>
					<div>Age: {jerk.menAge}</div>
					<div>Crime: {jerk.menCrime}</div>
				</div>
			);
		});
		return (
			<div>
				<h4>Men Who Have Broken My Heart</h4>
				{menSuckArr}
				<input value={this.state.menName} onChange={this.handleNameInput} placeholder="Name" />
				<input value={this.state.menAge} onChange={this.handleAgeInput} placeholder="Age" />
				<input value={this.state.menCrime} onChange={this.handleCrimeInput} placeholder="Girl, What'd He Do?" />
				<button onClick={this.handleClick}>Add Jerk</button>
			</div>
		);
	}
}

export default App;
